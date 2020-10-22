import { AsyncStorage } from 'react-native';
import ContextProvider from "./ContextProvider"
import { apiEndPoint } from "../config.json"
import httpServices from "../Services/httpServices";


const CityReducer = (state, action) => {
    switch (action.type) {
        case "GET_CITIES":
            return action.payload
        default:
            return state
    }
}

const Get_Cities = (dispatch) => async () => {
    try {
        const city = await httpServices.get(apiEndPoint + '/city')
        dispatch({ type: "GET_CITIES", payload: city })
    } catch (er) {
        console.log(er.message)
    }
}

export const { Context, Provider } = ContextProvider(
    CityReducer,
    { Get_Cities },
    []
)