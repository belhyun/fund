package com.yonsei.fund.service.login;

import com.yonsei.fund.controller.login.dto.FundLoginDto;
import com.yonsei.fund.model.user.dto.FundUser;
import com.yonsei.fund.util.rest.FundRestResponse;
import com.yonsei.fund.util.rest.FundRestResponseCode;

public class FundLoginRestResponseFactory {

    private static FundLoginRestResponseFactory factory;

    public static FundLoginRestResponseFactory getInstance() {

        if (factory == null) {
            factory = new FundLoginRestResponseFactory();
        }
        return factory;

    }

    public FundRestResponse<FundLoginDto> accTokenExpired() {

        return FundRestResponse.make(
                FundLoginConstants.ACC_TOKEN_EXPIRED,
                FundRestResponseCode.FundRespCode.ACC_TOKEN_EXPIRED,
                FundLoginDto.builder().build()
        );
    }

    public FundRestResponse<FundLoginDto> success(FundUser fundUser) {

        return FundRestResponse.make(
                FundLoginConstants.LOGIN_SUCCESS,
                FundRestResponseCode.FundRespCode.LOGIN_SUCCESS,
                fundUser.makeDto()
        );
    }
}
