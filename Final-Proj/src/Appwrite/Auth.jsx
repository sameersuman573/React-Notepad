// future proof code - copy and paste it

// Authentication for signin signup login       very important

// read appwrite documentation


// we will impoert all id from conf
import conf from "../Conf/conf";
import { Client, Account, ID } from "appwrite";




// This is the first step of authentication - refer to the documentation - this the quality code
export class AuthService {
  // we need to make two things client and account
  Client = new Client();
  account;




  // whenver any body tries to make the use of authservice object then account and client should be made 
  // so whenver object is made then constructor is called by default
  constructor() {
    this.Client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);
    // add the account client value
    this.account = new Account(this.Client);
  }





  // appwrite services


  //   TO SIGNUP
  // this is a method which can be called anytime
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        // ID.unique is amthod to genearte unique id
        ID.unique,
        email,
        password,
        name
      );
// check if usercoount exists so return him
      if (userAccount) {
        // call another method
        // if user creates a account so redirect him to login him
        return this.login({ email, password });
      } 
      else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }







  // TO LOGIN - createEmailSession - method
  // call this method in signup
  async login({ email, password }) {
    try {
      await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }





// if we are in home page it will tell us that we are logged in or not - get - method
  async getcurrentuser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("appwrite service :: getcurrentuser :: error", error);
    }

    return null;
  }


  
// TO LOGOUT - deletesessions - method
async logout (){
    try {
        await this.account.deleteSessions();
    } catch (error) {
        console.log("appwrite service :: logout ::error",error);
    }
}



}

// exporting a object
// we cann access it by . -- as .login

const authService = new AuthService();

export default AuthService;






