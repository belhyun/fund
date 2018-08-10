package com.yonsei.fund.model.user.repository.user;

import com.yonsei.fund.model.user.dto.FundUser;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;


@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class FundUserRepositoryTest {

    @Autowired
    private FundUserRepository fundUserRepository;

    @Test
    public void test() {
        FundUser fundUser = FundUser.builder()
                .accessToken("한글")
                .code("한글").build();
        fundUserRepository.save(fundUser);
    }
}