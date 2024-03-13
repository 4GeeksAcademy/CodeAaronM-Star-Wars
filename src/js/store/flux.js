const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			allAgendas: [],

			agendasFiltered: [],

			search: "",

			agendaSlug: "",

			eachContact: [],

			currentUserData: {
				address: "",
				agenda_slug: "",
				email: "",
				full_name: "",
				id: "",
				phone: ""
			},

		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();
				console.log(store)
				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getAllAgendas: async () => {
				try {
					const res = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda")
					const data = await res.json()
					setStore({ allAgendas: data })
				} catch (error) { }
			},

			toggleSearch: ({ target }) => {
				setStore({ search: target.value })
				const store = getStore();
				const agendas = store.allAgendas
				const filter = agendas.filter(agenda => agenda.toLowerCase().includes(target.value.toLowerCase()))
				setStore({ agendasFiltered: filter })
			},

			getEachContact: async (user) => {
				try {
					const res = await fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/${user}`)
					const data = await res.json()
					setStore({ eachContact: data })
				} catch (error) {
					console.log(error);
				}

			},

			toggleChange: ({ target }) => {
				setStore({ [target.name]: target.value })
			},

			createAgenda: async () => {
				const store = getStore();

				const exampleUser = {
					"full_name": "Cristiano Rondaldo",
					"email": "elbicho@gmail.com",
					"agenda_slug": `${store.agendaSlug}`,
					"address": "47568 SIUUUU, FUNCHAL, PORTUGAL",
					"phone": "0500 - SIU - 00"
				}

				const res = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(exampleUser)
				})

				getActions().getEachContact(store.agendaSlug)
			},

			deleteContact: async (userId, slug) => {
				const store = getStore();

				const res = await fetch(`https://playground.4geeks.com/apis/fake/contact/${userId}`, {
					method: "DELETE",
				})
				const data = await res.json()
				getActions().getEachAgenda(slug);
			},

			getContactInfo: async (userId) => {
				const res = await fetch(`https://playground.4geeks.com/apis/fake/contact/${userId}`)
				const contactData = await res.json()
				setStore({ currentUserData: contactData })
				console.log(userId)
				const store = getStore()
				console.log(store.currentUserData)
			},

			changeContactInfo: ({ target }) => {
				const store = getStore()
				setStore({ currentUserData: { ...store.currentUserData, [target.name]: target.value } })
				console.log(store.currentUserData)
			},

			updateContactInfo: async () => {
				const store = getStore()
				const res = await fetch(`https://playground.4geeks.com/apis/fake/contact/${store.currentUserData.id}`, {
					method: "PUT",
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(store.currentUserData)
				})
				const data = await res.json()

				getActions().getEachContact(store.currentUserData.agenda_slug)
			}
		}
	};
};

export default getState;
