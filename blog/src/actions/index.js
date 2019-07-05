import jsonPlaceholder from "../apis/jsonPlaceholder";
import _ from "lodash";

// Combines the two action creators posts and users below into one

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUsers(id)))
    .value();
};

export const FETCH_POSTS = "FETCH_POSTS";
export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: FETCH_POSTS, payload: response.data });
};

// Memoize caches the Users data so that it can be used again without having to fetch it from the user api endpoint

export const FETCH_USERS = "FETCH_USERS";
export const fetchUsers = id => dispatch => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: FETCH_USERS, payload: response.data });
});

// The conventional way of fetching a list of users.
// export const fetchUsers = id => async dispatch => {
//   try {
//     const response = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({ type: FETCH_USERS, payload: response.data });
//   } catch (err) {
//     console.log(err);
//   }
// };
