const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      error: [],
      user: {},
    },
    actions: {
      createAccount: (
        first_name,
        last_name,
        email,
        password,
        phone,
        zip_code
      ) => {
        fetch(process.env.BACKEND_URL + "/api/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(
            first_name,
            last_name,
            email,
            password,
            phone,
            zip_code
          ),
        })
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },

      logout: () => {
        setStore({ user: {} });
      },
      login: (email, password) => {
        fetch(process.env.BACKEND_URL + "/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(email, password),
        })
          .then((response) => response.json())
          .then((result) =>
            result.message
              ? setStore({ error: "Email or Password is Incorrect!" })
              : getActions().verifyUser(result)
          )
          .catch((error) => console.log("error", error));
      },

      verifyUser: (token) => {
        fetch(process.env.BACKEND_URL + "/api/protected", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
          .then((response) => response.json())
          .then((result) => setStore({ user: result.logged_in_as }))
          .catch((error) => console.log("error", error));
      },
      resetPassword: (email) => {
        fetch(process.env.BACKEND_URL + "/api/reset", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(email),
        })
          .then((response) => response.json())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      updatePassword: () => {
        fetch(process.env.BACKEND_URL + `/api/updatepassword`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(password),
        })
          .then((response) => response.json())
          .then((result) => console.log(result))
          .catch((error) => console.log("error", error));
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
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
    },
  };
};

export default getState;
