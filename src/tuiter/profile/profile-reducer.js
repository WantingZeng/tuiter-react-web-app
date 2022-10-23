import { createSlice } from "@reduxjs/toolkit";
import profiles from './profiles.json';

const currentProfile = {
    "firstName": "Jose",
    "lastName": "Annunziato",
    "bio": "Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and likes are not endorsements.",
    "website": "youtube.com/webdevt",
    "location": "Boston, MA",
};

const templateProfile = {
    ...currentProfile

}


const profileSlice = createSlice({
    name: 'profiles',
    initialState: profiles,

    reducers:{

        editProfile(state, action){

        }

    }



                                 });
export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;