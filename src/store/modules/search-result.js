import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import SpotifyRequest from "@/service"

export const fetchSearchResultAction = createAsyncThunk("fetchSearchResultAction", (payload, { dispatch }) => {
    SpotifyRequest.get({ url: `/search/${payload}` }).then(res => {
        dispatch(changePageSearchResult(res.data.data))
        // console.log(res.data.data);
    }).catch(err => {
        console.log(err);
    })
})

const searchResult = createSlice({
    name: "searchresult",
    initialState: {
        searchResultInfo: []
    },
    reducers: {
        changePageSearchResult(state, { payload }) {
            state.searchResultInfo = payload
        }
    }
})

export const { changePageSearchResult } = searchResult.actions

export default searchResult.reducer