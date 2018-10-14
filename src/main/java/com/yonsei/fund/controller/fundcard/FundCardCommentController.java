package com.yonsei.fund.controller.fundcard;

import com.yonsei.fund.controller.api.FundAPIController;
import com.yonsei.fund.controller.fundcard.dto.FundCardCommentDto;
import com.yonsei.fund.service.fundcard.comment.FundCardCommentService;
import com.yonsei.fund.util.rest.FundRestResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@CrossOrigin
@Controller
@ResponseBody
public class FundCardCommentController extends FundAPIController {

    @Autowired
    private FundCardCommentService commentService;

    @ResponseBody
    @PostMapping(value = "/add/comment")
    public FundRestResponse<List<FundCardCommentDto>> make(@RequestBody FundCardCommentCondition condition) {
        return commentService.make(condition);
    }

}
