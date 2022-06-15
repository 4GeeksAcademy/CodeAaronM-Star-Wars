import { stringify } from "query-string";

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
			favorite: async (name,uid) => {
				const check = sessionStorage.getItem("favorites");
				console.log(check)
				if (check == null) {
					const favorites = [];
					favorites.push(name);
					sessionStorage.setItem("favorites", favorites);
					sessionStorage.setItem(uid, name);
					console.log(favorites);
					setStore({ name: "name" });
				} else {
					const favorites = [sessionStorage.getItem("favorites")];
					favorites.push(name);
					sessionStorage.setItem("favorites", favorites);
					sessionStorage.setItem(uid, name);
					console.log(favorites);
					setStore({ name: "name" });			
				}

				// expected output: Array ["pigs", "goats", "sheep", "cows"]

				//sessionStorage.setItem(uid, name);
				//console.log("saving favorite");
				//console.log("travels", list);
				//setStore({ name: "name" });
			  }
		}
	};
};

export default getState;
