package com.yonsei.fund.service.fundcard;

import com.yonsei.fund.controller.fundcard.FundCardCondition;
import com.yonsei.fund.controller.fundcard.dto.FundCardDto;
import com.yonsei.fund.model.fund.repository.fundcard.FundCardRepository;
import com.yonsei.fund.util.rest.FundRestResponse;
import com.yonsei.fund.util.rest.FundRestResponseFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FundCardServiceImpl implements FundCardService {

    @Autowired
    private FundCardRepository fundCardRepository;

    @Override
    public List<FundRestResponse<FundCardDto>> getFundCardList(FundCardCondition condition) {

        return FundRestResponseFactory.getInstance().success(fundCardRepository.getFundCardList(condition),
                FundCardRestResponseCode.SUCCESS);

    }
}
