package com.yonsei.fund.util.rest;


import java.util.List;
import java.util.stream.Collectors;

public class FundRestResponseFactory<T> {

    private static FundRestResponseFactory factory;

    public static <T> FundRestResponseFactory getInstance() {

        if (factory == null) {
            factory = new FundRestResponseFactory<T>();
        }
        return factory;
    }

    public FundRestResponse<T> success(FundRestDtoMaker<T> from, FundRestResponseCode code) {
        return FundRestResponse.make(
                code.getMessage(),
                code,
                from.makeDto()
        );
    }

    public List<FundRestResponse<T>> success(List<FundRestDtoMaker<T>> from, FundRestResponseCode code) {

        return from.stream().map((in) -> FundRestResponse.make(
                code.getMessage(),
                code,
                in.makeDto()
        )).collect(Collectors.toList());
    }
}
