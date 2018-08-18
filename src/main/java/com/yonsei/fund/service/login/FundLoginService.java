package com.yonsei.fund.service.login;

import com.yonsei.fund.model.user.dto.FundUser;
import org.springframework.stereotype.Service;

@Service
public interface FundLoginService {

    FundUser login(FundUser fundUser);
}
