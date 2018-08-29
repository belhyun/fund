package com.yonsei.fund.model.user.repository;

import com.yonsei.fund.controller.login.condition.FundLoginCondition;
import com.yonsei.fund.model.user.entity.FundUser;

public interface FundUserRepositoryCustom {

    FundUser findByAccessToken(FundLoginCondition condition);

    FundUser findByKakaoId(FundLoginCondition condition);
}
