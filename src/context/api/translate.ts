import axios from "axios";
import { AppDispatch } from "../store";

export const get_languages = () => async (dispatch: AppDispatch) => {
    await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/language/translate/v2/languages`
        , {
            headers: {
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Key': `${process.env.NEXT_PUBLIC_API_KEY}`,
                'X-RapidAPI-Host': `${process.env.NEXT_PUBLIC_API_HOST}`
            }
        }).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.error(err);
        })
}