package com.yonsei.fund.service.login;

import com.yonsei.fund.controller.login.condition.FundLoginCondition;
import com.yonsei.fund.controller.login.dto.FundLoginDto;
import com.yonsei.fund.model.user.entity.FundUser;
import com.yonsei.fund.model.user.repository.FundUserRepository;
import com.yonsei.fund.util.rest.FundRestResponse;
import com.yonsei.fund.util.rest.FundRestResponseFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.constraints.NotNull;

import static com.yonsei.fund.service.login.FundLoginRestResponseCode.LOGIN_SUCCESS;
import static com.yonsei.fund.util.checker.FundNullChecker.ifIsNotNullApplyFunc;

@Service
public class FundLoginServiceImpl implements FundLoginService {

    @Autowired
    private FundUserRepository fundUserRepository;

    @Override
    public FundRestResponse<FundLoginDto> login(@NotNull FundLoginCondition condition) {

        FundUser fundUser = fundUserRepository.findByKakaoId(condition);

        return ifIsNotNullApplyFunc(fundUser,
                () -> {
                    if (fundUser.getFundUserAuth().isExpired()) {
                        fundUser.getFundUserAuth().extendExpires(condition);
                        fundUserRepository.save(fundUser);
                    }
                    return FundRestResponseFactory.getInstance().success(fundUser,
                            LOGIN_SUCCESS);
                },
                () -> FundRestResponseFactory.getInstance().success(fundUserRepository.save(FundUser.makeFromCondition(condition)),
                        LOGIN_SUCCESS)
        );
    }
}
