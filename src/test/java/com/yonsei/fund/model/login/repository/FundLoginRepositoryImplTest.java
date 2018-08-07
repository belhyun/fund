package com.yonsei.fund.model.login.repository;


import com.yonsei.fund.model.login.dto.FundUser;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class FundLoginRepositoryImplTest {

    @Resource
    private FundLoginRepository fundLoginRepositoryImpl;


    @Test
    public void 레디스_저장_테스트() {

        FundUser fundUser = FundUser.builder()
                .accessToken("access_token")
                .id("access_token1").build();

//        fundLoginRepositoryImpl.save(fundUser);
//
//        assertEquals(fundLoginRepositoryImpl.findByAccessToken("access_token1").get().getAccessToken(), "access_token");


    }
}
