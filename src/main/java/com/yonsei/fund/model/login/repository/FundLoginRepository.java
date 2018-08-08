package com.yonsei.fund.model.login.repository;


import com.yonsei.fund.model.login.dto.FundUser;

import java.util.Optional;

public interface FundLoginRepository {

    Optional<FundUser> findByCode(String code);

    Optional<FundUser> save(FundUser fundUser);

}
