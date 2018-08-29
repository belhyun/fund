package com.yonsei.fund.model.fund.repository.donation;

import com.yonsei.fund.model.fund.entity.FundCardDonation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FundCardDonationRepository extends JpaRepository<FundCardDonation, Long> {
}
