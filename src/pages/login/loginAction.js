import {
	requestPending,
	loginSuccess,
	updateLogin,
	requestFail,
} from "./loginSlice";

import {loginAPI} from "../../apis/loginAPI";
import {tokenAPI} from '../../apis/tokenAPI';


export const sendLogin = formData => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await loginAPI(formData); //{status, message,user, tokens...}

		const {accessJWT, refreshJWT} = result;

		accessJWT && sessionStorage.setItem("accessJWT", accessJWT)

		refreshJWT && localStorage.setItem("OurEcommerceRefreshJWT", refreshJWT)

		dispatch(loginSuccess(result));
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};

export const userAutoLogin = () => async dispatch => {
	const accessJWT = sessionStorage.getItem("accessJWT");
	const refresJWT = localStorage.getItem("ourEcommerceRJWT");

	accessJWT && dispatch(updateLogin());

	if (!accessJWT && refresJWT) {
		//call the server to get new access token
		const result = await tokenAPI(refresJWT);
		console.log(result);

		if (result.status === "success") {
			sessionStorage.setItem("accessJWT", result.accessJwt);
			dispatch(updateLogin());
		}
	}
};


export const logOut  = () => {

	sessionStorage.removeItem("accessJWT")
    sessionStorage.removeItem("ourEcommerceRJWT")


}