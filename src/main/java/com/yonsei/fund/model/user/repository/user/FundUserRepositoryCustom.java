package com.yonsei.fund.model.user.repository.user;

import com.yonsei.fund.controller.login.condition.FundLoginCondition;
import com.yonsei.fund.model.user.dto.FundUser;
import com.yonsei.fund.model.user.dto.FundUserAuth;

public interface FundUserRepositoryCustom {

    FundUser findByAccessToken(FundLoginCondition condition);
}
