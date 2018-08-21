package com.yonsei.fund.controller.login;

import com.yonsei.fund.controller.login.condition.FundLoginCondition;
import com.yonsei.fund.controller.login.dto.FundLoginDto;
import com.yonsei.fund.model.user.dto.FundUser;
import com.yonsei.fund.service.login.FundLoginService;
import com.yonsei.fund.util.rest.FundRestResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@CrossOrigin
public class FundLoginController {

    @Autowired
    private FundLoginService fundLoginService;

    @ResponseBody
    @PostMapping(value = "/login")
    public FundRestResponse<FundLoginDto> login(@RequestBody FundLoginCondition condition) {

        return fundLoginService.login(condition);
    }
}
