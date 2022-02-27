import { FETCH_ARTS, FETCH_SUCCEEDED, FETCH_FAILED } from "./actionTypes";

export const fetchArtAction = () => {
    return{
        type: FETCH_ARTS
    }
}