package com.yonsei.fund.controller.fundcard.dto;


import com.yonsei.fund.model.fund.entity.FundCardComment;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
public class FundCardDetailDto {

    private FundCardDto fundCardDto;

    private List<FundCardPhotoDto> photos;

    private List<FundCardComment> comments;

}
