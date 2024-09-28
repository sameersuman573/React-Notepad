import { Service } from "../../../12-Megablog/src/Appwrite/config";
import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";





// when you give class then this keyword can be used
export class Service {
  Client = new Client();
  databases;
  bucket;

  constructor() {
    this.Client.setEndpoint(conf.appwriteUrl).setProject(
      conf.appwriteProjectId
    );
    this.databases = new Databases(this.Client);
    this.bucket = new Storage(this.Client);
  }





  // Post System
  // whenver you write any async function always use try and catch block
  // CREATE POST
  async createpost({ title, content, slug, featuredimage, status, userid }) {
    try {
      return await this.databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,

        {
          title,
          content,
          featuredimage,
          status,
          userid,
        }
      );
    } catch (error) {
      console.log("error in creating post", error);
    }
  }






  // UPDATE THE POST
  async updatepost({ slug, title, content, featuredimage, status }) {
    try {
      return await this.databases.updateDocument(
        cong.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,

        {
          title,
          content,
          status,
          featuredimage,
        }
      );
    } catch (error) {}
  }





  // DELETE POST
  async deletepost({ slug }) {
    try {
      return await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("error in delete post", error);
    }
  }









  // GETPOST
  async getPost({ slug }) {
    try {
      return await this.databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("error in getpost", error);
    }
  }









// GET ALL POSTS  - to find all the post use list documents
// Find only those post whose statusis active
// You can use query when you have added indexes
// The query here is that whenever the status is active show only that status

async getPosts(queries = [Query.equal("status","active")])
 {
try {
    return await this.databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
    )
} catch (error) {
    console.log("error in getting selected post", error);
}
}









  // File System

// In callback function if you will add curly braces then you will have to use return statemnt otherwise it will be an implicit return

//   Uploadfile
async uploadFile(file){
    try {
        return await this.bucket.createFile(
            conf.appwriteBucketId,
            ID.unique(),
            file
        )
    } catch (error) {
        console.log("error in file uploading", error);
    }
}





// TO DELETE File
async deleteFile(fileId){
    try {
        return await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
    } catch (error) {
        console.log("error in deleting a file", error);
    }
}



// TO PREVIEW FILE
async previewFile(fileId){
try {
   return await this.bucket.previewFile(
    conf.appwriteBucketId,
    fileId
   ) 
} catch (error) {
    console.log("error in previweing the file", error);
}
}

}



// exporting the services simplly would mean nothing
// But if we create the object of the service then we would have the ability to employ any of its functions in the project
// now if we have used new variable the constructor will be definetly used

const service = new Service();
export default service














