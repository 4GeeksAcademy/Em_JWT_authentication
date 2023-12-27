// import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import React, { useContext, useState } from "react";



export const Navbar = () => {

	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
			{store.auth === true ? null :
				<div className="d-flex flex-row-reverse">
					<Link to="/login">
						<button className="btn btn-primary">Login</button>
					</Link>
					<Link to="/signup">
						<button className="btn btn-primary">SignUp</button>
					</Link>
				</div>}
				<Link to="/login">
					{store.auth === true ? <button onClick={()=>actions.logOut()} className="btn btn-primary">Logout</button> : null}
				</Link>
			</div>
		</nav>
	);
};
