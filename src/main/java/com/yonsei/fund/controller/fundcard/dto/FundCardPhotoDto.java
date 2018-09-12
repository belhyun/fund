package com.yonsei.fund.controller.fundcard.dto;


import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class FundCardPhotoDto {

    private String imageUrl;

    private boolean isMain;

}
