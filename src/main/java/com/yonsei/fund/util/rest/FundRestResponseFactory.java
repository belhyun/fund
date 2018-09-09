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

    public FundRestResponse<List<T>> success(List<FundRestDtoMaker<T>> from, FundRestResponseCode code) {


        return FundRestResponse.make(
                code.getMessage(),
                code,
                from.stream().map((in) -> in.makeDto()).collect(Collectors.toList()));

    }
}
