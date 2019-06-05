import streams from "../apis/streams";

export const SIGN_IN = "SIGN_IN";
export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const SIGN_OUT = "SIGN_OUT";
export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const CREATE_STREAM = "CREATE_STREAM";
export const createStream = formValues => async dispatch => {
  const res = await streams.post("/streams", formValues);
  dispatch({ type: CREATE_STREAM, payload: res.data });
};

export const FETCH_STREAMS = "FETCH_STREAMS";
export const fetchStreams = () => async dispatch => {
  const res = await streams.get("/streams");
  dispatch({ type: FETCH_STREAMS, payload: res.data });
};

export const FETCH_STREAM = "FETCH_STREAM";
export const fetchStream = id => async dispatch => {
  const res = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM, payload: res.data });
};

export const EDIT_STREAM = "EDIT_STREAM";
export const editStream = (id, formValues) => async dispatch => {
  const res = await streams.put(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: res.data });
};

export const DELETE_STREAM = "DELETE_STREAM";
export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
};
