package com.yonsei.fund.service.login;

import com.yonsei.fund.model.user.dto.FundUser;
import com.yonsei.fund.model.user.repository.user.FundUserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.validation.constraints.NotNull;

public class FundLoginServiceImpl implements FundLoginService {

    @Autowired
    private FundUserRepository fundUserRepository;

    @Override
    public FundUser login(@NotNull FundUser fundUser) {


        return null;
    }
}
