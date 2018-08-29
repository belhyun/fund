package com.yonsei.fund.model.fund.repository;

import com.yonsei.fund.model.fund.entity.FundCard;
import com.yonsei.fund.model.fund.entity.FundCardComment;
import com.yonsei.fund.model.fund.entity.FundCardDonation;
import com.yonsei.fund.model.fund.repository.fundcard.FundCardRepository;
import com.yonsei.fund.model.user.entity.FundUser;
import com.yonsei.fund.model.user.repository.FundUserRepository;
import org.assertj.core.util.Lists;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import static com.yonsei.fund.model.user.repository.user.FundUserRepositoryImplTest.getFundUser;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class FundCardRepositoryImplTest {

    @Autowired
    private FundCardRepository fundCardRepository;

    @Autowired
    private FundUserRepository fundUserRepository;

    @Test
    public void save() {

        FundUser savedFundUser = fundUserRepository.save(getFundUser());

        FundCard fundCard = FundCard.builder()
                .contents("즐거운 기부")
                .title("title")
                .startedAt(LocalDateTime.now())
                .endedAt(LocalDateTime.now())
                .targetAmount(BigDecimal.TEN)
                .fundUser(savedFundUser)
                .fundCardDonations(Lists.newArrayList())
                .fundCardComments(Lists.newArrayList())
                .build();

        FundCardDonation donation = FundCardDonation.builder()
                .donationAmount(BigDecimal.TEN)
                .fundUser(savedFundUser)
                .build();

        FundCard savedFundCard = fundCardRepository.save(fundCard);

        donation.setFundCard(fundCard);

        savedFundCard.addFundCardDonation(donation);

        FundCardComment comment = FundCardComment.builder()
                .contents("contents")
                .fundCard(savedFundCard)
                .fundUser(savedFundUser).build();

        fundCard.addFundCardComments(comment);

        fundCardRepository.save(savedFundCard);


    }
}