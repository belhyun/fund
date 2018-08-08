package com.yonsei.fund.model.login.repository;


import com.yonsei.fund.model.login.dto.FundUser;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.Resource;
import java.util.Optional;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class FundLoginRepositoryImplTest {

    @Resource
    private FundLoginRepository fundLoginRepositoryImpl;


    @Test
    public void 레디스_저장_테스트() {

        FundUser fundUser = FundUser.builder()
                .accessToken("access_token5")
                .code("code").build();

        Optional<FundUser> save = fundLoginRepositoryImpl.save(fundUser);


        assertTrue(save.isPresent());

        assertEquals(fundLoginRepositoryImpl.findByCode("code").get().getAccessToken(), "access_token5");

    }
}
