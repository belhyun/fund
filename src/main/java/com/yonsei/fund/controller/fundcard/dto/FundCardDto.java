package com.yonsei.fund.controller.fundcard.dto;


import lombok.Data;

@Data
public class FundCardDto {

    private String title;

    private String contents;

    private String targetAmount;

    private String startedAt;

    private String endedAt;

}
