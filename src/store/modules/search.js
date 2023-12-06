import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import SpotifyRequest from "@/service"

export const fetchSearchDataAction = createAsyncThunk("fetchSearchDataAction", (payload, { dispatch }) => {
    SpotifyRequest.get({ url: "/search.json" }).then(res => {
        dispatch(changePage(res.data.data.browseStart.sections.items[0]))
        // console.log(res.data.data.browseStart.sections.items[0]);
    }).catch(err => {
        console.log(err);
    })
})

const search = createSlice({
    name: "search",
    initialState: {
        pageInfo: []
    },
    reducers: {
        changePage(state, { payload }) {
            state.pageInfo = payload
        }
    }
})

export const { changePage } = search.actions

export default search.reducer