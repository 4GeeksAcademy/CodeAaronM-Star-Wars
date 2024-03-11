const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      /**
       *TODO Here I should add the values that comes from the API
       */
      contactList: [],
      individualContact: {
        full_name: "",
        email: "",
        agenda_slug: "jose_agenda",
        address: "",
        phone: "",
      },
    },
    actions: {
      /**
       *TODO use the GET method to get the full list and the detail contact
       */

      // get all contacts from the user agenda
      getContatcsList: () => {
        fetch(
          "https://playground.4geeks.com/apis/fake/contact/agenda/jose_agenda"
        )
          .then((response) => response.json())
          .then((data) => setStore({ contactList: data }))
          .catch((error) => console.log(error));
      },
      /// get the contact data that the user clicked on
      getIndividualContact: (id) => {
        const store = getStore();
        if (id) {
          fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`)
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              setStore({ individualContact: data });
            })
            .catch((error) => console.log(error));
        } else {
          console.log("Invalid ID provided", id);
        }
      },
      /**
       *TODO Get the value of the new Contact fields from inputs
       */
      handleChange: (e) => {
        const store = getStore();
        setStore({
          individualContact: {
            ...store,
            [e.target.name]: e.target.value,
          },
        });
      },

      /**
       *TODO Update the contact in the API
       */

      handleSubmit: (e) => {
        e.preventDefault();
        const store = getStore();

        if (store.individualContact) {
          fetch("https://playground.4geeks.com/apis/fake/contact/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(store.individualContact),
          })
            .then((response) => {
              if (!response.ok) {
                throw new Error("Network response was not ok");
              }
              return response.json();
            })
            .then((data) => console.log(data))
            .catch((error) => console.error("Error:", error));

          setStore({
            individualContact: {
              full_name: "",
              email: "",
              agenda_slug: "jose_agenda",
              address: "",
              phone: "",
            },
          });
        }
      },

      /**
       *TODO Delete contact in the API
       */
      deleteContact: (id) => {
        fetch(`https://playground.4geeks.com/apis/fake/contact/${id}`, {
          method: "DELETE",
        })
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      },

      /**
       *TODO Delete all contacts in the API
       */

      deleteAllContacts: (agenda_slug) => {
        fetch(
          `https://playground.4geeks.com/apis/fake/contact/${agenda_slug}`,
          {
            method: "DELETE",
          }
        )
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error));
      },
    },
  };
};

export default getState;
