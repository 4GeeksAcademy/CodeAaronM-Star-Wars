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
			devCharacters: [
			],
			techCharacters: [
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			gettechdata: () => {

			},
			getdevData: () => {
				const store = getStore();
				fetch("https://swapi.dev/api/people")
					.then(response => response.json())
					.then(data => {
						setStore({ devCharacters: data.results });
						console.log("data de dev");
						console.log(data.results);
					})
					.catch(error => console.error("Error fetching dev characters:", error));
			
				fetch("https://www.swapi.tech/api/people")
					.then(response => response.json())
					.then(data => {
						const techCharacterPromises = data.results.map(character => {
							return fetch(character.url)
								.then(response => response.json())
								.then(characterData => characterData.result); 
						});
			
						return Promise.all(techCharacterPromises);
					})
					.then(techCharacters => {
						setStore({ techCharacters: [...(store.techCharacters || []), ...techCharacters] });
						console.log("data de tech");
						console.log(store.techCharacters);
					})
					.catch(error => console.error("Error fetching tech characters:", error));
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
			}
		}
	};
};

export default getState;
