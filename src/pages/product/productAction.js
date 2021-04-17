import {
	requestPending,
	addProductSuccess,
	fetchAllProductSuccess,
	requestFail,
	deleteProdSuccess,
} from "./productSlice";

import {
	saveProduct,
	getProducts,
	deleteProducts,
} from "../../apis/productAPI";

export const addNewProduct = frmDt => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await saveProduct(frmDt); //{status, message}

		dispatch(addProductSuccess(result));

		result.status === "success" && dispatch(fetchProducts());
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};

export const fetchProducts = () => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await getProducts(); //{status, message, result:[]}

		dispatch(fetchAllProductSuccess(result));
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};

export const removeProducts = id => async dispatch => {
	try {
		dispatch(requestPending());

		const result = await deleteProducts(id); //{status, message, result:[]}

		dispatch(deleteProdSuccess(result));

		result.status === "success" && dispatch(fetchProducts());
	} catch (error) {
		const err = {
			status: "error",
			message: error.message,
		};

		dispatch(requestFail(err));
	}
};
