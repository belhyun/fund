package com.yonsei.fund.util.functional;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.function.BiFunction;
import java.util.function.Function;

import static org.junit.Assert.*;


@RunWith(MockitoJUnitRunner.class)
public class FundCurryingTest {

    @Test
    public void 커링_테스트() {
        BiFunction<Integer, Integer, Integer>
                func = (a, b) -> a + b;
        Function<Integer, Function<Integer, Integer>> currying = FundCurrying.currying(func);
        Function<Integer, Integer> currier = currying.apply(3);
        Integer res = currier.apply(3);
        assertEquals(res.longValue(), 6L);
        res = currier.apply(5);
        assertEquals(res.longValue(), 8L);
    }

}