# TypeScript Type Mismatch Bug

This repository demonstrates a common type mismatch error in TypeScript.  The `greeter` function expects a string, but an array of strings is passed as an argument. The solution shows how to correctly handle this type of error.

## Bug

The bug is in `bug.ts`. The function `greeter` expects a single string argument but receives an array of strings. This causes a type error at compilation time.

## Solution

The solution is in `bugSolution.ts`. It fixes the issue by either iterating over the array and greeting each person individually or by modifying the `greeter` function to accept an array of strings.
