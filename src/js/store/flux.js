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
			home: [],
			search: ""
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
				try{
					const res = await fetch("https://playground.4geeks.com/apis/fake/contact/agenda")
					const data = await res.json()
					setStore({home: data})
				}catch(error){}
			},
			toggleChange: ({target})=>{
				setStore({search: target.value})
				const store = getStore();
				const agendas = store.home
				const filteredAgendas = agendas.filter(agenda => agenda.includes(target.value))
				setStore({home: filteredAgendas})
			}
		}
	};
};

export default getState;
