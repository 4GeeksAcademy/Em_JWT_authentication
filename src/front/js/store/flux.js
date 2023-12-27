const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			auth: false
		},
		actions: {

			registerData(e, name,email, password){
				e.preventDefault()
		
				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						"name": name,
						"email": email,
						"password": password
					})
				};
				fetch(process.env.BACKEND_URL + "/api/signup", requestOptions)
				.then(response => response.json())
				.then(data => console.log(data))
			},

			sendData(e,email,password){
				e.preventDefault()
		
				const requestOptions = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						"email": email,
						"password": password
					})
				};
				const response = fetch(process.env.BACKEND_URL + "/api/login", requestOptions)
				.then(response => {
					console.log(response.status)
					if(response.status === 200){
						setStore({auth : true})
					}		
					return  response.json()
				})
				.then(data => { 
					localStorage.setItem("token", data.access_token);
					}
				)
			},
			
			logOut(){
				setStore({ auth: false })
				localStorage.removeItem("token");
			},









			// Use getActions to call a function within a fuction

			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			
		}
	};
};

export default getState;
