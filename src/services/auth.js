import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteURL)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if (userAccount) {
        return this.loginAccount({ email, password });
      } else {
        console.log(userAccount);
        return userAccount;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async loginAccount({ email, password }) {
    try {
      const loginAccount = await this.account.createEmailSession(
        email,
        password
      );
      console.log(loginAccount);
    } catch (err) {
      console.log(err);
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (err) {
      console.log("Appwrite service :: getCurrentUser() :: ", err);
    }
    return null;
  }

  async passwordRecovery() {}

  async logoutAccount() {
    try {
      await this.account.deleteSessions();
    } catch (err) {
      console.log("Appwrite service :: logoutAccount() :: ", err);
    }
  }
}

const authService = new AuthService();

export default authService;
