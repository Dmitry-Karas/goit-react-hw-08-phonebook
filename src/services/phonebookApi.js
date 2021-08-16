import axios from "axios";

// axios.defaults.baseURL = "https://61156ec88f38520017a384ea.mockapi.io";
axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export class PhonebookAPI {
  static async fetchContacts() {
    const { data } = await axios.get("/contacts");

    return data;
  }

  static async addContact(contact) {
    const { data } = await axios.post("/contacts", contact);

    return data;
  }

  static async deleteContact(id) {
    await axios.delete(`/contacts/${id}`);
  }

  static async register(credentials) {
    const { data } = await axios.post("/users/signup", credentials);

    token.set(data.token);

    return data;
  }

  static async login(credentials) {
    const { data } = await axios.post("/users/login", credentials);
    token.set(data.token);

    return data;
  }
}
