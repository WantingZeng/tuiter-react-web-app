import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./tuits-service";
export const findTuitsThunk = createAsyncThunk(
    'tuits/findTuits', async () =>
        await service.findTuits()
);
export const createTuitThunk = createAsyncThunk(
    'tuits/createTuit', async () =>
        await service.createTuit()

)

export const deleteTuitThunk = createAsyncThunk(
    'tuits/deleteTuits', async () =>
        await service.deleteTuit()
)

export const updateTuitThunk = createAsyncThunk(
    'tuits/updateTuit',
    async (tuit) =>
        await service.updateTuit(tuit)
)