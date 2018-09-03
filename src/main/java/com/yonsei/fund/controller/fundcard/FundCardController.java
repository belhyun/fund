package com.yonsei.fund.controller.fundcard;

import com.yonsei.fund.controller.api.FundAPIController;
import com.yonsei.fund.controller.fundcard.dto.FundCardDto;
import com.yonsei.fund.service.fundcard.FundCardService;
import com.yonsei.fund.util.rest.FundRestResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@CrossOrigin
@Controller
@ResponseBody
public class FundCardController extends FundAPIController {

    @Autowired
    private FundCardService fundCardService;

    @ResponseBody
    @GetMapping(value = "/card-list")
    public List<FundRestResponse<FundCardDto>> list(FundCardCondition condition) {
        return fundCardService.getFundCardList(condition);
    }

}
