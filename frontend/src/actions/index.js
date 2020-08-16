import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_POST,
  FETCH_POSTS,
  FETCH_POST,
  EDIT_POST,
  DELETE_POST,
} from "./types";
import postsAPI from "../apis/posts";
import history from "../history";

export const signIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createPost = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await postsAPI.post("/posts", { ...formValues, userId });
  dispatch({ type: CREATE_POST, payload: response.data });

  history.push("/");
};

export const fetchPosts = () => async (dispatch, getState) => {
  const response = await postsAPI.get("/posts");
  dispatch({ type: FETCH_POSTS, payload: response.data });
};

export const fetchPost = (id) => async (dispatch, getState) => {
  const response = await postsAPI.get(`/posts/${id}`);
  dispatch({ type: FETCH_POST, payload: response.data });
};

export const editPost = (id, formValues) => async (dispatch, getState) => {
  const response = await postsAPI.patch(`/posts/${id}`, formValues);
  dispatch({ type: EDIT_POST, payload: response.data });

  history.push("/");
};

export const deletePost = (id) => async (dispatch, getState) => {
  await postsAPI.delete(`/posts/${id}`);
  dispatch({ type: DELETE_POST, payload: id });

  history.push("/");
};
