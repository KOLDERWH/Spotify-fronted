import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import SpotifyRequest from "@/service"

export const fetchHomeDataAction = createAsyncThunk("fetchHomeDAtaAction", (payload, { dispatch }) => {
    SpotifyRequest.get({ url: "/home.json" }).then(res => {
        dispatch(changeHome(res.data.data.home))
        // console.log(res.data.data.home);
    }).catch(err => {
        console.log(err);
    })
})

const homeSlice = createSlice({
    name: "home",
    initialState: {
        homeInfo: [],
    },
    reducers: {
        changeHome(state, { payload }) {
            state.homeInfo = payload
        }
    }
})

export const { changeHome } = homeSlice.actions

export default homeSlice.reducer