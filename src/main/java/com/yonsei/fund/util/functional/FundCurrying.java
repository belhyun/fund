package com.yonsei.fund.util.functional;

import java.util.function.BiFunction;
import java.util.function.Function;

public class FundCurrying {

    public static <T, U, R> Function<T , Function<U, R>> currying(BiFunction<T, U, R> biFunction) {

        Function<T , Function<U, R>> currier = a -> b -> biFunction.apply(a, b);

        return currier;

    }
}
