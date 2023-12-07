import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SpotifyRequest from "@/service"

export const fetchMainDataAction = createAsyncThunk("fetchMainDAtaAction", (payload, { dispatch }) => {
    SpotifyRequest.get({ url: "/track-world.smallest.violin" }).then(res => {
        dispatch(changeTract(res.data.tracks[0]));
        dispatch(changeIsShowPlayer(true));

        console.log(res.data.tracks[0]);
    }).catch(err => {
        console.log(err);
    })
})

const mainSlice = createSlice({
    name: "main",
    initialState: {
        appbarIndex: 0,
        isPlaying: false,
        isLoved: false,
        isShowPlayer: false,
        tractInfo: {},
    },
    reducers: {
        changeIndex(state, { payload }) {
            state.appbarIndex = payload
        },
        changeIsPlay(state, { payload }) {
            state.isPlaying = payload
        },
        changeIsLove(state, { payload }) {
            state.isLoved = payload
        },
        changeIsShowPlayer(state, { payload }) {
            state.isShowPlayer = payload
        },
        changeTract(state, { payload }) {
            // state.tractInfo = { ...state.tractInfo, payload }
            state.tractInfo = payload
        },
    }
})

export const {
    changeIndex,
    changeIsPlay,
    changeIsLove,
    changeTract,
    changeIsShowPlayer } = mainSlice.actions

export default mainSlice.reducer