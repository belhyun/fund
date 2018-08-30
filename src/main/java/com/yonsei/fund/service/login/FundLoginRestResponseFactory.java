package com.yonsei.fund.service.login;

import com.yonsei.fund.controller.login.dto.FundLoginDto;
import com.yonsei.fund.model.user.entity.FundUser;
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

    public FundRestResponse<FundLoginDto> success(FundUser fundUser) {

        return FundRestResponse.make(
                FundLoginConstants.LOGIN_SUCCESS,
                FundRestResponseCode.FundRespCode.LOGIN_SUCCESS,
                fundUser.makeDto()
        );
    }
}
