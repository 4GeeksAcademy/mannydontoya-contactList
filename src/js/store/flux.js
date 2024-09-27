const getState = ({ getStore, getActions, setStore }) => {
	const apiUrl = "https://playground.4geeks.com/contact"
	const slug = "mannydontoya"
	return {
		store: {
			contacts: []	
		},
		actions: {
			getContacts: async () => {
				let resp = await fetch(`${apiUrl}/agendas/${slug}/contacts`)
				if(resp.status == 404){
					getActions().createAgenda()
				} else if(resp.status == 200){
					let data = await resp.json()
					console.log(data)
					setStore({contacts: data.contacts})
				} else {
					alert("An error occured when getting your list of contacts. Please try again later")
					console.log("The following error occured:", resp.statusText, resp.status, resp.error())
				}
			},
			createAgenda: () => {

			}
		}
	};
};

export default getState;
