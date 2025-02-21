# Incorrect NaN Comparison in TypeScript

This repository demonstrates a common subtle bug in TypeScript related to comparing `NaN` values. The provided code implements a comparison function that fails to correctly handle `NaN`, returning an unexpected result.

## Bug Description

The `compare` function uses standard comparison operators (`<`, `>`) to determine the ordering of two numbers. However, comparing `NaN` to any value using these operators always yields `false`. Consequently, the function incorrectly returns `0` when comparing `NaN` with itself, instead of indicating that they are not comparable.