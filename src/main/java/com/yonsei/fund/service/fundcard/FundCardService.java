package com.yonsei.fund.service.fundcard;

import com.yonsei.fund.controller.fundcard.FundCardCondition;
import com.yonsei.fund.controller.fundcard.dto.FundCardDto;
import com.yonsei.fund.util.rest.FundRestResponse;

import java.util.List;

public interface FundCardService {

    FundRestResponse<List<FundCardDto>> getFundCardList(FundCardCondition condition);

}
