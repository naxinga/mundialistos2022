const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      email: null,
      nickname: null,
      password: null,
      token: "empty",
	  auth: false,
    },
    actions: {
      signup: async (email, nickname, password) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              email,
              nickname,
              password,
            }),
          });

          if (!resp.ok) throw Error("There was a problem in the login request");

          if (resp.status === 401) {
            throw "Invalid credentials";
          } else if (resp.status === 400) {
            throw "Invalid format";
          }
          const data = await resp.json();
          setStore({ email: email });
          setStore({ nickname: nickname });
          setStore({ password: password });

          localStorage.setItem("jwt-token", email);
          setStore({ token: email });
          return data;
        } catch (err) {
          alert(err);
        }
      },
      login: async (email, password) => {
        try {
          const resp = await fetch(process.env.BACKEND_URL + "/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });

          const data = await resp.json();
          setStore({ email: email });
          setStore({ auth: true });
          localStorage.setItem("jwt-token", email);
          setStore({ token: email });
          if (resp.status > 399 && resp.status < 600) {
            setStore({ auth: false });
            localStorage.removeItem("jwt-token");
          }
          return data;
        } catch (err) {
          alert(err);
        }
      },
      logout: () => {
        localStorage.removeItem("jwt-token");
        setStore({ auth: false });
        setStore({ email: null });
      },
    },
  };
};

export default getState;
