import React, { useContext } from "react";
import { Context } from "../store/appContext";
import Form from '../component/form'
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<Form />
		</div>
	);
};
