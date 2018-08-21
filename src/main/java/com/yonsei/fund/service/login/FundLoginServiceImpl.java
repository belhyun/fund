package com.yonsei.fund.service.login;

import com.yonsei.fund.controller.login.condition.FundLoginCondition;
import com.yonsei.fund.controller.login.dto.FundLoginDto;
import com.yonsei.fund.model.user.dto.FundUser;
import com.yonsei.fund.model.user.repository.user.FundUserRepository;
import com.yonsei.fund.util.rest.FundRestResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;

import static com.yonsei.fund.service.login.FundLoginRestResponseFactory.getInstance;
import static com.yonsei.fund.util.checker.FundNullChecker.ifIsNotNullApplyFunc;

@Service
public class FundLoginServiceImpl implements FundLoginService {

    @Autowired
    private FundUserRepository fundUserRepository;

    @Override
    public FundRestResponse<FundLoginDto> login(@NotNull FundLoginCondition condition) {

        FundUser fundUser = fundUserRepository.findByAccessToken(condition);

        return ifIsNotNullApplyFunc(fundUser,
                () -> {
                    if (fundUser.getFundUserAuth().isExpired()) {

                        return getInstance().accTokenExpired();
                    }
                    return getInstance().success(fundUser);
                },
                () -> getInstance().success(fundUserRepository.save(FundUser.makeFromCondition(condition)))
        );
    }
}
