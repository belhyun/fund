package com.yonsei.fund.controller.fundcard;

import com.yonsei.fund.controller.api.FundAPIController;
import com.yonsei.fund.controller.fundcard.dto.FundCardDetailDto;
import com.yonsei.fund.controller.fundcard.dto.FundCardDto;
import com.yonsei.fund.service.fundcard.FundCardService;
import com.yonsei.fund.util.rest.FundRestResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    public FundRestResponse<List<FundCardDto>> list(FundCardCondition condition) {
        return fundCardService.getFundCardList(condition);
    }

    @ResponseBody
    @GetMapping(value = "/card-detail/{id:[\\d]+}")
    public FundRestResponse<FundCardDetailDto> detail(@PathVariable("id") int id, FundCardCondition condition) {

        condition.setFundCardId(id);

        return fundCardService.getFundCardDetail(condition);

    }

}
