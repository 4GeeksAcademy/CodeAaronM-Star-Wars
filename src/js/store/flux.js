// src/flux.js
const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		contacts: []  // Estado inicial vacío para los contactos
	  },
	  actions: {
		// Acción para agregar un contacto
		addContact: (contact) => {
		  const store = getStore();
		  setStore({ contacts: [...store.contacts, contact] });
		},
  
		// Acción para eliminar un contacto
		removeContact: (id) => {
		  const store = getStore();
		  setStore({ contacts: store.contacts.filter(contact => contact.id !== id) });
		},
  
		// Acción para actualizar un contacto
		updateContact: (updatedContact) => {
		  const store = getStore();
		  const updatedContacts = store.contacts.map(contact =>
			contact.id === updatedContact.id ? updatedContact : contact
		  );
		  setStore({ contacts: updatedContacts });
		}
	  }
	};
  };
  
  export default getState;
  