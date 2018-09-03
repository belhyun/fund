package com.yonsei.fund.controller.fundcard.dto;


import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FundCardDto {

    private String title;

    private String contents;

    private String targetAmount;

    private String startedAt;

    private String endedAt;

}
