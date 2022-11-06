import { createSlice } from "@reduxjs/toolkit";
import profiles from './profiles.json';


const profileSlice = createSlice({
    name: 'profiles',
    // name: 'profile'
    initialState: profiles,

    reducers: {
        profileUpdate(state, action) {
            //const {_id, name, bio, website, location, dateOfBirth} = action.payload

            return state=action.payload
        }

    }
});

export const {profileUpdate} = profileSlice.actions;
export default profileSlice.reducer;