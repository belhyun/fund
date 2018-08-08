package com.yonsei.fund.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class FundIndexController {

    @GetMapping("/")
    public String index(Model model) {
        //model.addAttribute("test", "Server2 liveReload Test");
        return "index";
        /*ModelAndView mnv = new ModelAndView("index");
        return mnv;*/
    }
}
