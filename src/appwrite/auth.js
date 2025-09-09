import { Client, Account, ID, } from "appwrite";
import conf from "../conf/conf";   // ✅ import your config

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)       // ✅ use conf
      .setProject(conf.appwriteProjectId); // ✅ use conf

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {

      await this.account.deleteSessions().catch(()=>{})
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      }  
       return userAccount;
      
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      if (error.code === 401) return null;
      throw error;
    }
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      throw error;
    }
  }
  
async createAccount({email,password,name}){

  try {

    await this.account.deleteSessions().catch(()=>{})

    const userAccount = await this.account.create(
      ID.unique(),
      email,
      password,
      name
      
    )
    if (userAccount) {
      return this.login({email,password});

    }
    return userAccount;
  } catch (error) {
    throw error
  }
}



}

const authService = new AuthService();
export default authService;
