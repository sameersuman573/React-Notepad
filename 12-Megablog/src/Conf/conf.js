// taking the access of all enviroment variables
// exporting key variables
// # enviroment varibales should be in strings


const conf = {
  appwriteUrl: String(import.meta.env.VITE_REACT_APP_APPWRITE_URL),
  appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATBASE_ID),
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};


// REACT IS MISING HERE TO BE WRITTEN

// const conf = {
//   appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
//   appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
//   appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
//   appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
//   appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
// };


export default conf;
