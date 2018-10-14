package com.yonsei.fund.controller.fundcard;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class FundCardCommentCondition extends FundCardCondition {

    private String contents;

    private Long fundUserId;

}
