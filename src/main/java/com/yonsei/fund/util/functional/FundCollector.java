package com.yonsei.fund.util.functional;


import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

public class FundCollector {

    public static <T, R> List<R> collect(List<? extends T> lists, Function<T, R> function) {

        return lists.stream().map(a -> function.apply(a)).collect(Collectors.toList());

    }



}
