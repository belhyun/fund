package com.yonsei.fund.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class FundIndexController {

    @GetMapping("/")
    public String index(Model model) {
        //model.addAttribute("test", "Server2 liveReload Test");
        return "index";
    }
}
