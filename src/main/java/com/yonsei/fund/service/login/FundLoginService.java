package com.yonsei.fund.service.login;

import com.yonsei.fund.controller.login.condition.FundLoginCondition;
import com.yonsei.fund.controller.login.dto.FundLoginDto;
import com.yonsei.fund.model.user.dto.FundUser;
import com.yonsei.fund.util.rest.FundRestResponse;

public interface FundLoginService {

    FundRestResponse<FundLoginDto> login(FundLoginCondition condition);
}
