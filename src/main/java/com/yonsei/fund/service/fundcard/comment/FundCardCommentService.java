package com.yonsei.fund.service.fundcard.comment;

import com.yonsei.fund.controller.fundcard.FundCardCommentCondition;
import com.yonsei.fund.controller.fundcard.dto.FundCardCommentDto;
import com.yonsei.fund.util.rest.FundRestResponse;

import java.util.List;

public interface FundCardCommentService {

    FundRestResponse<List<FundCardCommentDto>> make(FundCardCommentCondition condition);

}
