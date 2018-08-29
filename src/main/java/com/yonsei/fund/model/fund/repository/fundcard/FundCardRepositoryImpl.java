package com.yonsei.fund.model.fund.repository.fundcard;

import com.yonsei.fund.model.fund.entity.FundCard;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

public class FundCardRepositoryImpl extends QuerydslRepositorySupport implements FundCardRepositoryCustom {

    public FundCardRepositoryImpl() {
        super(FundCard.class);
    }

}
