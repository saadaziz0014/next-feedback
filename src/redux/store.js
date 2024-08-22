'use client';
const { configureStore } = require("@reduxjs/toolkit");
const userReducer = require("./user.slice");
export const store = configureStore({
    reducer: userReducer,
});