package com.yonsei.fund.controller.fundcard.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FundCardCommentDto {

    private String nickName;

    private String contents;

    private String createdAt;
}
