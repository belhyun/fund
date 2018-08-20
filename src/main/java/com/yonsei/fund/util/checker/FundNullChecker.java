package com.yonsei.fund.util.checker;

import java.util.function.Supplier;

public class FundNullChecker {

    public static boolean isNull(Object value) {
        return value == null;
    }

    public static boolean isNotNull(Object value) {
        return !isNull(value);
    }

    public static <T> T ifIsNotNullApplyFunc(Object value, Supplier<T> pros, Supplier<T> cons) {
        if (isNotNull(value)) {
            return pros.get();
        }
        return cons.get();
    }
}
