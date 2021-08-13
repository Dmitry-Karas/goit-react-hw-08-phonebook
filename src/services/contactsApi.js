import axios from "axios";

axios.defaults.baseURL = "https://61156ec88f38520017a384ea.mockapi.io";

export class ContactsAPI {
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
}
