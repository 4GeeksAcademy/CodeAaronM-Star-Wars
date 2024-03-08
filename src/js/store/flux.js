const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
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

			allAgendas: [],

			agendasFiltered: [],

			search: "",

			agendaSlug: "",

			eachAgenda: [],

			editedUser: {},

			// showEditModal: false
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

			getEachAgenda: async (user) => {
				try {
					const res = await fetch(`https://playground.4geeks.com/apis/fake/contact/agenda/${user}`)
					const data = await res.json()
					setStore({ eachAgenda: data })
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

				getActions().getEachAgenda(store.agendaSlug)
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
				const user = await res.json()
				const store = getStore()
				store.editedUser.name = user.full_name
				store.editedUser.address = user.address
				store.editedUser.phone = user.phone
				store.editedUser.email = user.email
				console.log(store.editedUser)
				// setStore({ showEditModal: true })
			}
		}
	};
};

export default getState;
