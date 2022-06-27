
const getState = ({ getStore, getActions, setStore }) => {


	return {
		store: {
			api: ["https://3000-josejesusjj-starwarsapi-51xi2ihpydw.ws-eu47.gitpod.io/"],
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
			people: [
			],
			planets: [
			],
			favoritePlanets: [
			],
			favoritePeople: [
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

				fetch("https://3000-josejesusjj-starwarsapi-51xi2ihpydw.ws-eu47.gitpod.io/people/").then(res => res.json()).then(data => setStore({ people: data}))
				fetch("https://3000-josejesusjj-starwarsapi-51xi2ihpydw.ws-eu47.gitpod.io/planets/").then(res => res.json()).then(data =>  setStore({ planets: data}))
				fetch("https://3000-josejesusjj-starwarsapi-51xi2ihpydw.ws-eu47.gitpod.io/favorite-planets/1").then(res => res.json()).then(data =>  setStore({ favoritePlanets: data}))
				fetch("https://3000-josejesusjj-starwarsapi-51xi2ihpydw.ws-eu47.gitpod.io/favorite-people/1").then(res => res.json()).then(data =>  setStore({ favoritePeople: data}))
				//3000-josejesusjj-starwarsapi-51xi2ihpydw.ws-eu47.gitpod.io

				
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

			favoritePeople: async (user_id, people_id, characterName) => {
				fetch("https://3000-josejesusjj-starwarsapi-51xi2ihpydw.ws-eu47.gitpod.io/favorite-add/people/" + user_id + "/" + people_id, {
					method: "POST",
					headers: {
					  "Content-Type": "application/json",
					},
					body: JSON.stringify({
					  
					}),
				  })
					.then((resp) => resp.json())
					.then((res) => {
					  console.log(res);
					  sessionStorage.setItem(characterName, characterName);
					});
					fetching();
			},
			favoritePlanet: async (user_id, planet_id, planetName) => {
				fetch("https://3000-josejesusjj-starwarsapi-51xi2ihpydw.ws-eu47.gitpod.io/favorite-add/planet/" + user_id + "/" + planet_id, {
					method: "POST",
					headers: {
					  "Content-Type": "application/json",
					},
					body: JSON.stringify({
					  
					}),
				  })
					.then((resp) => resp.json())
					.then((res) => {
					  console.log(res);
					  sessionStorage.setItem(planetName, planetName);
					});
					fetching();
			},
			deletePeople: async (id, name) => {
				fetch("https://3000-josejesusjj-starwarsapi-51xi2ihpydw.ws-eu47.gitpod.io/favorite-delete/people/" + id, {
					method: "POST",
					headers: {
					  "Content-Type": "application/json",
					},
					body: JSON.stringify({
					  
					}),
				  })
					.then((resp) => resp.json())
					.then((res) => {
					  console.log(res);
					  sessionStorage.removeItem(name);
					});
					fetching();
			},
			deletePlanet: async (id, name) => {
				fetch("https://3000-josejesusjj-starwarsapi-51xi2ihpydw.ws-eu47.gitpod.io/favorite-delete/planets/" + id, {
					method: "POST",
					headers: {
					  "Content-Type": "application/json",
					},
					body: JSON.stringify({
					  
					}),
				  })
					.then((resp) => resp.json())
					.then((res) => {
					  console.log(res);
					  sessionStorage.removeItem(name);
					});
					fetching();
			},
//https://3000-josejesusjj-starwarsapi-51xi2ihpydw.ws-eu47.gitpod.io/favorite-delete/planets/7
			delete: async (id) => {
				sessionStorage.removeItem(id);
				console.log("deleting");
				setStore({ id: null });		
			}
		}
	};
};

export default getState;
