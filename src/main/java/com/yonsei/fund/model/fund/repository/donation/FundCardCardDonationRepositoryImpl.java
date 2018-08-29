package com.yonsei.fund.model.fund.repository.donation;

import com.yonsei.fund.model.fund.entity.FundCardDonation;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;

public class FundCardCardDonationRepositoryImpl extends QuerydslRepositorySupport implements FundCardDonationRepositoryCustom {

    public FundCardCardDonationRepositoryImpl() {
        super(FundCardDonation.class);
    }
}
