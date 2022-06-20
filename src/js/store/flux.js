
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
			planets: [
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			planets: () => {
			
					fetch("https://www.swapi.tech/api/planets").then(res => res.json()).then(data => setStore({ "planets": data.results }))
				
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			favoriteCharacter: async (characterName,uid) => {
				sessionStorage.setItem("ch"+uid, characterName);
				setStore({ name: "name" });
			},
			favoritePlanet: async (planetName,uid) => {
				sessionStorage.setItem("pl"+uid, planetName);
				setStore({ name: "name" });
			},
			favoriteVehicle: async (vehicleName,uid) => {
				sessionStorage.setItem("ve"+uid, vehicleName);
				setStore({ name: "name" });
			},
			delete: async (uid) => {
				sessionStorage.removeItem(uid);
				console.log("deleting");
				setStore({ uid: null });		
			}
		}
	};
};

export default getState;
