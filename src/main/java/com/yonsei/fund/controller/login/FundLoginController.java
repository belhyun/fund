package com.yonsei.fund.controller.login;

import com.yonsei.fund.controller.api.FundAPIController;
import com.yonsei.fund.controller.login.condition.FundLoginCondition;
import com.yonsei.fund.controller.login.dto.FundLoginDto;
import com.yonsei.fund.service.login.FundLoginService;
import com.yonsei.fund.util.rest.FundRestResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin
@Controller
@ResponseBody
public class FundLoginController extends FundAPIController {

    @Autowired
    private FundLoginService fundLoginService;

    @ResponseBody
    @PostMapping(value = "/login")
    public FundRestResponse<FundLoginDto> login(@RequestBody FundLoginCondition condition) {

        return fundLoginService.login(condition);
    }
}
