const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    user: typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload));
            state.user = action.payload;
        },
        logout: (state) => {
            localStorage.removeItem('user');
            state.user = null;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;