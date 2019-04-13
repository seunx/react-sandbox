import { combineReducers } from "redux";

export const songsReducer = () => {
  return [
    {
      title: "Smells Like Teen Spirit",
      duration: `5:06`
    },
    {
      title: "Rock The Boat",
      duration: `3:06`
    },
    {
      title: "Beat It",
      duration: `4:06`
    },
    {
      title: "I Want It That Way",
      duration: `4:06`
    }
  ];
};

export const sSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: sSongReducer
});
