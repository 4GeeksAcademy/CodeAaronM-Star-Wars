const getState = ({ getStore, getActions, setStore }) => {


	return {

		store: {
			people: [],
			planets: [],
			starships: [],

			// peopleFeatures: [],
			// planetsFeatures: [],
			// starshipsFeatures: [],
		},
		actions: {

			getPeople: () => {
					fetch("https://www.swapi.tech/api/people/")
						.then(res => res.json())
						.then(data => setStore({ people: data.results }))
						.catch(err => console.error(err))
			},

			// getPeopleFeatures: () => {
			// 	for (let i=1; i<=10; i++){
			// 	fetch("https://www.swapi.tech/api/people/"+i)
			// 	.then(res => res.json())
			// 	.then(data => {
			// 		setStore({
			// 		  peopleFeatures: [...getStore().peopleFeatures, data.result]
			// 		});
			// 	  })
			// 	.catch(err => console.log(err))
			// 	}}, 

			getPlanets: () => {

				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(err => console.error(err))

			},

			// getPlanetsFeatures: () => {
			// 	for (let i=0; i<=9; i++){
			// 	fetch("https://www.swapi.tech/api/planets/"+(i+1))
			// 	.then(res => res.json())
			// 	.then(data => {
			// 		setStore({
			// 		  planetsFeatures: [...getStore().planetsFeatures, data.result]
			// 		});
			// 	  })
			// 	.catch(err => console.log(err))
			// 	}}, 


			getStarships: () => {

				fetch("https://www.swapi.tech/api/starships/")
					.then(res => res.json())
					.then(data => setStore({ starships: data.results }))
					.catch(err => console.error(err))

			},

			// getStarshipsFeatures: () => {
			// 	for (let i=0; i<=9; i++){
			// 	fetch("https://www.swapi.tech/api/starships/"+(i+1))
			// 	.then(res => res.json())
			// 	.then(data => {
			// 		setStore({
			// 		  starshipsFeatures: [...getStore().starshipsFeatures, data.result]
			// 		});
			// 	  })
			// 	.catch(err => console.log(err))
			// 	}}, 






		}
	};

};

export default getState;
