package com.yonsei.fund.controller.login;

import com.yonsei.fund.model.user.dto.FundUserAuth;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@CrossOrigin
public class FundLoginController {

    @ResponseBody
    @PostMapping(value = "/login")
    public String login(@RequestBody FundUserAuth fundUserAuth) {
        return "login";
    }
}
