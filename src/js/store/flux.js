const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters:[],
			planets:[],
			images:[],
			favorites:[],

			
		},
		
			actions: {
			
				getCharacters: async() =>{
					try {
						const store = getStore(); 
						const httpResponse = await fetch('https://www.swapi.tech/api/people/');
						if (!httpResponse.ok) {
						  return;
						}
						const newData = await httpResponse.json();
						newData.results.map(async (person) => {
						  const response = await fetch(person.url);
			  
						  const newCharacter = await response.json();
						  setStore({
							characters: [...store.characters, newCharacter],
						  });
						});
					  } catch (error) {
						console.log(error);
					}
				},
	
				getPlanets: async() =>{
					try {
						const store = getStore(); 
						const httpResponse = await fetch('https://www.swapi.tech/api/planets/');
						if (!httpResponse.ok) {
						  return;
						}
						const newData = await httpResponse.json();
						newData.results.map(async (person) => {
						  const response = await fetch(person.url);
			  
						  const newPlanet = await response.json();
						  setStore({
							planets: [...store.planets, newPlanet],
						  });
						});
					  } catch (error) {
						console.log(error);
					}
					
				},
	
				addFavorites: (name)=>{
					const store = getStore(); 
					setStore({favorites: [...store.favorites, name]})
				},
	
				deleteFavorites: (name) =>{
					const store = getStore();
					let newFavorites = store.favorites.filter((item)=>item !== name);
					setStore({favorites:newFavorites})
				},
			}
		};
	};

	export default getState;
