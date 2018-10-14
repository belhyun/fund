package com.yonsei.fund.service.fundcard.comment;

import com.google.common.base.Preconditions;
import com.yonsei.fund.controller.fundcard.FundCardCommentCondition;
import com.yonsei.fund.controller.fundcard.dto.FundCardCommentDto;
import com.yonsei.fund.model.fund.entity.FundCard;
import com.yonsei.fund.model.fund.entity.FundCardComment;
import com.yonsei.fund.model.fund.repository.fundcard.FundCardRepository;
import com.yonsei.fund.model.user.entity.FundUser;
import com.yonsei.fund.model.user.repository.FundUserRepository;
import com.yonsei.fund.service.fundcard.FundCardRestResponseCode;
import com.yonsei.fund.util.rest.FundRestResponse;
import com.yonsei.fund.util.rest.FundRestResponseFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FundCardCommentServiceImpl implements FundCardCommentService {

    @Autowired
    private FundCardRepository cardRepository;

    @Autowired
    private FundUserRepository userRepository;

    @Override
    public FundRestResponse<List<FundCardCommentDto>> make(FundCardCommentCondition condition) {

        FundCard fundCard = cardRepository.getFundCardById(condition);

        Optional<FundUser> userOptional = userRepository.findById(condition.getFundUserId());

        Preconditions.checkArgument(userOptional.isPresent());

        Preconditions.checkNotNull(fundCard);

        if (fundCard.hasAlreadyMadeComment(condition.getFundCardId(), condition.getFundUserId())) {
            return FundRestResponseFactory.getInstance().success(fundCard, FundCardRestResponseCode.SUCCESS);

        }

        fundCard.addFundCardComments(FundCardComment.builder()
                .contents(condition.getContents())
                .fundCard(fundCard)
                .fundUser(userOptional.get()).build());


        return FundRestResponseFactory.getInstance().success(cardRepository.save(fundCard), FundCardRestResponseCode.SUCCESS);

    }
}
