
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
			characters: [ {uid:1,name:"luke",gender:"masc",hair_color:"blond",skin:"white"},{uid:2,name:"leia",gender:"fem"},{uid:3,name:"han"},{uid:4,name:"darth"},{uid:5,name:"c3po"}
			],
			planets: [
			],
			vehicles: [
			],
			people: [ {people1:""},{people2:""}
			],
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


			fetching: () => {
				fetch("https://www.swapi.tech/api/planets").then(res => res.json()).then(data =>  setStore({ planets: data.results.splice(0,5) }))
				fetch("https://www.swapi.tech/api/people").then(res => res.json()).then(data => setStore({ characters: data.results.splice(0,5) }))
				fetch("https://www.swapi.tech/api/vehicles").then(res => res.json()).then(data => setStore({ vehicles: data.results.splice(0,5) }))
				
			},

			people: () => {
				fetch("https://www.swapi.tech/api/people/1").then(res => res.json()).then(data => setStore({ people1: data})) //splice(1, 0, "Lemon", "Kiwi")
				fetch("https://www.swapi.tech/api/people/2").then(res => res.json()).then(data => setStore({ people2: data}))
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
