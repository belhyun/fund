package com.yonsei.fund.controller.fundcard.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FundCardDonationDto {

    private long fundUserId;

    private String createdAt;
}
