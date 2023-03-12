import { createReducer } from "@reduxjs/toolkit";

export const videoReducer = createReducer(
  {},
  {
    getAllVideosRequest: (state) => {
      state.loading = true;
    },
    getAllVideosSuccess: (state, action) => {
      state.loading = false;

      state.videos = action.payload;
    },
    getAllVideosFail: (state, action) => {
      state.loading = false;

      state.error = action.payload;
    },
    getVideoRequest: (state) => {
      state.loading = true;
    },
    getVideoSuccess: (state, action) => {
      state.loading = false;

      state.video = action.payload;
    },
    getVideoFail: (state, action) => {
      state.loading = false;

      state.error = action.payload;
    },
    getVideoDetailsRequest: (state) => {
      state.loading = true;
    },
    getVideoDetailsSuccess: (state, action) => {
      state.loading = false;

      state.details = action.payload;
    },
    getVideoDetailsFail: (state, action) => {
      state.loading = false;

      state.error = action.payload;
    },
    likeVideoRequest: (state) => {
      state.loading = true;
    },
    likeVideoSuccess: (state, action) => {
      state.loading = false;

      state.liked = action.payload;
    },
    likeVideoFail: (state, action) => {
      state.loading = false;

      state.error = action.payload;
    },
  }
);
