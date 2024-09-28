import conf from "../Conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";


// This file will perform diffrent operations on database and storage


export class service {
  Client = new Client();
  Databases;
  bucket;



  constructor() {
    this.Client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);
    this.Databases = new Databases(this.Client);
    this.Storage = new Storage(this.Client);
  }






  // refer to the appwrite documentation
  // to create the post
  // slug = document.ID




  // CREATING POST
  async createpost({ title, slug, content, featuredimage, status, userid }) {
    try {
      // creation of database
      return await this.Databases.createDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug, // slug = document.ID

        // just pass the other client Information 
        {
          title,
          content,
          featuredimage,
          status,
          userid,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: createpost :: error", error);
    }
  }






  // UPDATE THE POST
  // the post will be uniqely identified by ID
  async updatepost({ slug, title, content, featuredimage, status, userid }) {
    try {
      return await this.Databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
          title,
          content,
          featuredimage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: updatepost :: error", error);
    }
  }







  // DELETE POST
  // slug = document.ID
  async deletepost({ slug }) {
    try {
      return await this.Databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      )
      return true;
    } catch (error) {
      console.log("Appwrite service :: deletepost :: error", error);
      return false
    }
  }






  //  TO GET THE POST OR FIND THE POST
  // TO FIND ALL POST use -- listdocument - learn queries
  async getPost({}) {
    try {
      return await this.Databases.getDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: togetpost :: error", error);
      // if we would not get any post so just return false
      return false;
    }
  }






  // to find all the post use -- listdocument - learn queries
  // if you have made indexes in appwrite backend(databases) then only you can apply  QUERY
  async getPosts(queries = [Query.equal("status", "active")])
  // To find all such post whose status is active using queries 
  // we have index = status in database
  {
    try {
      return await this.Databases.listDocuments(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        queries
// we have called the upper statement 

        // paginations - read documentation
        // Query.limit(),
        // Query.offset()

      );
    } catch (error) {
      console.log("Appwrite service ::getallposts :: error", error);
      return false;
    }
  }







  // FILE UPLOAD SERVICES
  async uploadfile(file) {
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file

      );
    } catch (error) {
      console.log("Appwrite service ::uploadfile :: error", error);
      return false;
    }
  }







//   TO DELETE FILE
async deletefile({fileId}){
    try {
        return await this.bucket.deletefile(
            conf.appwriteBucketId,
            fileId
        )
    } catch (error) {
        console.log("Appwrite service :: deletefile :: error", error);
        return false;
    }
}







// TO PREVIEW FILE
 getfilepreview(fileId){
   return this.bucket.getfilepreview(
    conf.appwriteBucketId,
    fileId
   ) 
 }


}



const service = new service();
export default service;







