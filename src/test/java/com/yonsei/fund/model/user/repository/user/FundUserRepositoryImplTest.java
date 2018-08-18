package com.yonsei.fund.model.user.repository.user;

import com.yonsei.fund.model.user.dto.FundUser;
import com.yonsei.fund.model.user.dto.FundUserAuth;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Random;


@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class FundUserRepositoryImplTest {

    @Autowired
    private FundUserRepository fundUserRepository;

    private final Random random = new Random();

    @Test
    public void save() {
        Random rnd = new Random();
        String randomStr = String.valueOf((char) (rnd.nextInt(26) + 97));


        FundUserAuth fundUserAuth = FundUserAuth.builder()
                .accessToken(randomStr)
                .expiresIn(1234L)
                .refreshToken(randomStr)
                .refreshTokenExpiresIn(1234L)
                .scope("scope")
                .stateToken(randomStr)
                .tokenType("token_type").build();

        FundUser fundUser = FundUser.builder().fundUserAuth(fundUserAuth).build();

        fundUserAuth.setFundUser(fundUser);

        fundUserRepository.save(fundUser);

    }
}