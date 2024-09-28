// This is the page for Authorization
// just take simple refrence from code snippets

// dont change parameter only service will be chnaged
// whenver you wnat to use it just use or add into the code
import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";



// Making a wrapper comprising of alll the services
export class AuthService {
  Client = new Client();
  account;

  // whenever new account or client is to be made we can make the constructor

  constructor() {
    this.Client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);
    // after setting all th enedpoints add the account client value
    this.account = new Account(this.Client);
  }




  // TO SIGNUP
  // The logic of async and await is that  async return a promise and the await pause the execution of the code untill and unless the promise is fullfilled


  async createAccount({ email, password, name }) {
    // with the destructuring logic we can directly access the values and manipulate them
    try {
        // whenever you want to use data further in the future then we can save it in a variable
        const userAccount = await this.account.create( 
            unique(),
            email,
            password,
            name
        )


    // As the account is created make the user logged in 
    if(userAccount){
return this.login({email, password})
    }
    else{
        // ----------------------------------------
        return userAccount
    }

    } catch (error) {
        // -------------------------------------------
      throw error;
    }
  }


  


async login({email,password}){
try {
    await this.account.createEmailPasswordSession(email,password)
} catch (error) {
    throw error;
}
}




async logout(){
    try {
        await this.account.deleteSession();
    } catch (error) {
        console.log("logout error",error);;
    }
}





async getCurrentUser({userdata}){
    try {
       return  await this.account.get();
    } catch (error) {
        console.log("currentuser error",error);;
    }

    // suppose if we have got error so fro safety purpose we employ the return null
    return null;
}








}