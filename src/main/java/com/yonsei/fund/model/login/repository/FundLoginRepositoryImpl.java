package com.yonsei.fund.model.login.repository;


import com.yonsei.fund.model.login.dto.FundUser;

import java.util.Optional;

public abstract class FundLoginRepositoryImpl implements FundLoginRepository {

    @Override
    public Optional<FundUser> findByAccessToken(String accessToken) {

        //return this.findById(accessToken);
        return Optional.empty();
    }
}
