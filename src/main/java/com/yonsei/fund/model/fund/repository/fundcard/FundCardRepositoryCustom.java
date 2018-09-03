package com.yonsei.fund.model.fund.repository.fundcard;

import com.yonsei.fund.controller.fundcard.FundCardCondition;
import com.yonsei.fund.model.fund.entity.FundCard;

import java.util.List;

public interface FundCardRepositoryCustom {

    List<FundCard> getFundCardList(FundCardCondition condition);
}
