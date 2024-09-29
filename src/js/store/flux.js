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
			createAgenda: async () => {
				let resp = await fetch(`${apiUrl}/agendas/${slug}`, {
					method: "POST",
					headers: {"content-type": "application/json"},
					body: {}
				})

			},
			addContact: async (contact) => {
				let resp = await fetch(`${apiUrl}/agendas/${slug}/contacts`, {
					method: "POST",
					headers: {"content-type": "application/json"},
					body: JSON.stringify(contact)
				})
				if(!resp.ok){
					alert("Something went wrong while adding contact!")
				} else if(resp.ok){
					getActions().getContacts()
				} else {
					alert("An error occured when getting your list of contacts. Please try again later")
					console.log("The following error occured:", resp.statusText, resp.status, resp.error())
				}
			},
			editConact: async (contact) => {
				let resp = await fetch(`${apiUrl}/agendas/${slug}/contacts/${contact.id}`, {
					method: "PUT",
					headers: {"content-type": "application/json"},
					body: JSON.stringify(contact)
				})
				if(!resp.ok){
					alert("Something went wrong while editing contact!")
				} else if(resp.ok){
					getActions().getContacts()
				} else {
					alert("An error occured when getting your list of contacts. Please try again later")
					console.log("The following error occured:", resp.statusText, resp.status, resp.error())
				}
			}
		}
	};
};

export default getState;
