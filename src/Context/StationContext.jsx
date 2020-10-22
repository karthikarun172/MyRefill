import httpServices from "../Services/httpServices";
import { apiEndPoint } from "../config.json"
import ContextProvider from "./ContextProvider"



const StationReducer = (state, action) => {
    switch (action.type) {
        case "GET_STATIONS":
            return action.payload
        default:
            return state
    }
}

const Get_Stations = (dispatch) => async () => {
    try {
        const station = await httpServices.get(apiEndPoint + "/station")
        console.log(station)
        dispatch({ type: "GET_STATIONS", payload: station })
    }
    catch (er) {
        console.log(er.message)
    }
}

export const { Context, Provider } = ContextProvider(
    StationReducer,
    { Get_Stations },
    []
)