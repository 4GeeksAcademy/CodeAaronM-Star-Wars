
const getState = ({ getStore, getActions, setStore }) => {

		//si las llamadas de api no funcionan porque cambió la url, hay que pegar el nuevo url
		//aquí en flux línea 7 y en appContext.js línea 34
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
			favorites: [
			],
			items: [
			],
			checks: [
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

			fetching: (api) => {
				fetch(`${api}people/`).then(res => res.json()).then(data => setStore({ people: data}))
				fetch(`${api}planets/`).then(res => res.json()).then(data =>  setStore({ planets: data}))
				fetch(`${api}favorites/1`).then(res => res.json()).then(data =>  setStore({ favorites: data}))
			},

			favorites: async (user_id, item_id, item_name, category,api ) => {
					let body = new FormData();
					body.append("user_id", user_id);
					body.append("item_id", item_id);
					body.append("item_name", item_name);
					body.append("category", category);					
					await fetch(`${api}favorite-add`, {
					  method: "POST",
					  headers: {
						Authorization: "Bearer ",
					  },
					  body,
					})
					  .then((resp) => resp.json())
					  .then((res) => {
						console.log("ok")
						setStore({ favorites: res});
						sessionStorage.setItem(item_name , item_name)
					  })
					  .catch((error) => {
						console.log(error);
					  });
			},

			lookFavorite: (item_name) => {
				setStore({checks : sessionStorage.getItem(item_name)})
			},

			deleteFavorite: async (user_id, category, item_id, item_name, api) => {
				await fetch(`${api}favorite-delete/${user_id}/${category}/${item_id}`, {
					method: "POST",
					headers: {
					  "Content-Type": "application/json",
					},
					body: JSON.stringify({					  
					}),
				  })
					.then((resp) => resp.json())
					.then((res) => {
					  setStore({ favorites: res});
					  sessionStorage.removeItem(item_name)
					});
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

		}
	};
};

export default getState;
