
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
			people: [
			],
			planets: [
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

				fetch("https://3000-josejesusjj-starwarsend-vc1j3xrbp10.ws-eu47.gitpod.io/people/").then(res => res.json()).then(data => setStore({ people: data}))
				fetch("https://3000-josejesusjj-starwarsend-vc1j3xrbp10.ws-eu47.gitpod.io/planets/").then(res => res.json()).then(data =>  setStore({ planets: data}))
				
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
			test: () =>{
				const arr = ['Hello'];
				arr.splice(1, 0, 'World');
				// 👇️ ['Hello', 'World']
				console.log(arr);

			},
			favoritePeople: async (characterName,uid,category) => {
				
				sessionStorage.setItem(category+"/"+uid, name);
				setStore({ name: characterName });
				setStore({ uid: uid });
				setStore({ category: category });
			},
			favoritePlanet: async (planetName,uid,category) => {
				
				sessionStorage.setItem(category+"/"+uid, planetName);
				setStore({ name: planetName });
				setStore({ uid: uid });
				setStore({ category: category });
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
