import { createSlice, } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: "main",
    initialState: {
        appbarIndex: 0,
        isPlaying: false,
    },
    reducers: {
        changeIndex(state, { payload }) {
            state.appbarIndex = payload
        },
        changeIsPlay(state, { payload }) {
            state.isPlaying = payload
        },
    }
})

export const { changeIndex, changeIsPlay } = mainSlice.actions

export default mainSlice.reducer