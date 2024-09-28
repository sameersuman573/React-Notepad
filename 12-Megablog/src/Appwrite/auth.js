// future proof code - copy and paste it
// In Future if you change service all things will same just this file and conf , env , file will have some changes

// Authentication for signin signup login -----------------------------------very important

// read appwrite documentation



// we will import all id from conf
import conf from "../Conf/conf";
import { Client, Account, ID } from "appwrite";

 

// # Read the documentation of appwrite



// This is the first step of authentication - refer to the documentation - this the quality code
export class AuthService {
  // we need to make two things client and account
  Client = new Client();
  account;




  // whenver any body tries to make the use of authservice object then account and client should be made 
  // // so whenver object is made then constructor is called by default
  
  // constructor() {
  //   this.Client
  //   .setEndpoint(conf.appwriteUrl)
  //   .setProject(conf.appwriteProjectId);
  //   // add the account client value
  //   this.account = new Account(this.Client);
  // }


  constructor() {
    try {
      this.Client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId);
      this.account = new Account(this.Client);
    } catch (error) {
      console.error("Error setting up Appwrite client:", error);
    }
  }



  // appwrite services
  // It is same like as firebase services



  //   TO SIGNUP
  // this is a method which can be called anytime
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        // ID.unique is method to genearte unique id
        unique(),
        email,
        password,
        name
      );

// check if useraccount exists so return him
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



  // we can write code like this also

  // creating an account
  // const account = new Account(client);
  // const promise = account.createEmailSession(email,password)


 

  // TO LOGIN - createEmailSession - method
  // call this method in signup
  async login({ email, password }) {
    try {
     return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }
 



// if we are in home page it will tell us that we are logged in or not - get - method
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("appwrite service :: getcurrentuser :: error", error);
    }

    // regardless of the function is succesfull or have failed it returnes a value for any error like server error
    return null;
  }


  // async loggingout(){
  //   try {
  //     await this.account.deleteSession
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  


// TO LOGOUT - deletesessions - method
async logout (){
    try {
        await this.account.deleteSessions();
    } catch (error) {
        console.log("appwrite service :: logout ::error",error);
    }
}




}

const authservice = new AuthService();
export default authservice

 


