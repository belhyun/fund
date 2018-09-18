package com.yonsei.fund.controller.fundcard.dto;


import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class FundCardDto {

    private int fundCardId;

    private String title;

    private String contents;

    private String targetAmount;

    private int targetPersonnel;

    private String startedAt;

    private String endedAt;

    private List<FundCardPhotoDto> photoDtos;

    private List<FundCardCommentDto> commentDtos;

    private List<FundCardDonationDto> donationDtos;


}
