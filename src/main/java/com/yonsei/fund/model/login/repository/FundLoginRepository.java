package com.yonsei.fund.model.login.repository;


import com.yonsei.fund.model.login.dto.FundUser;

import java.util.Optional;

//@Repository
public interface FundLoginRepository/* extends CrudRepository<FundUser, String>*/ {

    Optional<FundUser> findByAccessToken(String accessToken);

}
