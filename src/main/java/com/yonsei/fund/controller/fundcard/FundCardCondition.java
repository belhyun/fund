package com.yonsei.fund.controller.fundcard;


import com.yonsei.fund.controller.condition.FundCondition;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class FundCardCondition extends FundCondition {

    private int page = 1;

    private int fundCardId;

}
