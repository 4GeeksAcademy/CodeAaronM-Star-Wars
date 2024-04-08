const getState = ({ setStore, getStore, getActions }) => {
    const actions = {
        setStore: updatedStore => {
            setStore({ store: { ...getStore().store, ...updatedStore } });
        },
        // Otras acciones que puedas tener...
    };

    return {
        store: {
			favorites: [],
            people: [],
            planets: [],
			films:[],
            singleCharacter: {},
            singlePlanet: {},
			singleFilm:{},
            characterImages: {
                "Luke Skywalker": "https://starwars-visualguide.com/assets/img/characters/1.jpg",
                "C-3PO": "https://starwars-visualguide.com/assets/img/characters/2.jpg",
                "R2-D2": "https://starwars-visualguide.com/assets/img/characters/3.jpg",
                "Darth Vader": "https://starwars-visualguide.com/assets/img/characters/4.jpg",
                "Leia Organa": "https://starwars-visualguide.com/assets/img/characters/5.jpg",
                "Owen Lars": "https://starwars-visualguide.com/assets/img/characters/6.jpg",
                "Beru Whitesun lars": "https://starwars-visualguide.com/assets/img/characters/7.jpg",
                "R5-D4": "https://starwars-visualguide.com/assets/img/characters/8.jpg",
                "Biggs Darklighter": "https://starwars-visualguide.com/assets/img/characters/9.jpg",
                "Obi-Wan Kenobi": "https://starwars-visualguide.com/assets/img/characters/10.jpg",
            },
            planetsImages: {
                "Tatooine": "https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png/revision/latest?cb=20131214162357",
                "Alderaan": "https://starwars-visualguide.com/assets/img/planets/2.jpg",
                "Yavin IV": "https://starwars-visualguide.com/assets/img/planets/3.jpg",
                "Hoth": "https://starwars-visualguide.com/assets/img/planets/4.jpg",
                "Dagobah": "https://starwars-visualguide.com/assets/img/planets/5.jpg",
                "Bespin": "https://starwars-visualguide.com/assets/img/planets/6.jpg",
                "Endor": "https://starwars-visualguide.com/assets/img/planets/7.jpg",
                "Naboo": "https://starwars-visualguide.com/assets/img/planets/8.jpg",
                "Coruscant": "https://starwars-visualguide.com/assets/img/planets/9.jpg",
                "Kamino": "https://starwars-visualguide.com/assets/img/planets/10.jpg"
            },
			filmsImages:{
				"A New Hope": "https://starwars-visualguide.com/assets/img/films/1.jpg",
				"The Empire Strikes Back": "https://starwars-visualguide.com/assets/img/films/2.jpg",
				"Return of the Jedi": "https://starwars-visualguide.com/assets/img/films/3.jpg",
				"The Phantom Menace": "https://starwars-visualguide.com/assets/img/films/4.jpg",
				"Attack of the Clones": "https://starwars-visualguide.com/assets/img/films/5.jpg",
				"Revenge of the Sith": "https://starwars-visualguide.com/assets/img/films/6.jpg",
			},
           
        
			
		},
		actions: {

			getPeople: () =>{
				fetch('https://www.swapi.tech/api/people')
				.then(response => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then(data => {
					setStore({ people: data.results });
					console.log(data.results);
				})
				.catch(error => {
					console.error('There was an error with the fetch operation:', error);
				});
			},

			getPlanets: () =>{
				fetch('https://www.swapi.tech/api/planets')
				.then(response => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then(data => {
					setStore({ planets: data.results });
					console.log(data.results);
				})
				.catch(error => {
					console.error('There was an error with the fetch operation:', error);
				});
			},

			getFilms: () =>{
				fetch('https://www.swapi.tech/api/films')
				.then(response => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then(data => {
					setStore({ films: data.result });
					console.log(data.result);
				})
				.catch(error => {
					console.error('There was an error with the fetch operation:', error);
				});
			},
			getSingleCharacter: (id) => {
				fetch(`https://www.swapi.tech/api/people/${id}`)
				.then(response => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then(data => {
					setStore({ singleCharacter: data.result.properties });
					console.log(data.results.properties);
				})
				.catch(error => {
					console.error('There was an error with the fetch operation:', error);
				});
			},
			getSinglePlanet: (id) => { console.log(id)
				fetch(`https://www.swapi.tech/api/planets/${id}`) 
				.then(response => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then(data => {
					setStore({ singlePlanet: data.result.properties });
					console.log(data);
				})
				.catch(error => {
					console.error('There was an error with the fetch operation:', error);
				});
			},
			getSingleFilm: (id) => { console.log(id)
				fetch(`https://www.swapi.tech/api/films/${id}`) 
				.then(response => {
					if (!response.ok) {
						throw new Error('Network response was not ok');
					}
					return response.json();
				})
				.then(data => {
					setStore({ singleFilm: data.result.properties });
					console.log(data);
				})
				.catch(error => {
					console.error('There was an error with the fetch operation:', error);
				});
			},

			addFavorite: (favorite) => {
				const store = getStore();
				const newArray= store.favorites.concat(favorite)
				setStore({ favorites: newArray })
			},
			deleteFavorite: (name) => {
				const arrayfiltered = getStore().favorites.filter((item, index) => item !== name)
				// console.log(arrayfiltered);
				setStore({ favorites: arrayfiltered })
			},
			favoriteList: (name) => {
				const listNames = getStore().favorites
				if (listNames.length == 0) {
					getActions().addFavorite(name)
				} else {
					if (listNames.includes(name)) {
						getActions().deleteFavorite(name)
					} else {
						getActions().addFavorite(name)
					}
			}}
		
		}
	};
};

export default getState;
