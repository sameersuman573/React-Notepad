# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh





<!-- production in industry -->
# PRODUCTION

## step-1
# sources
write with prefix as -- npm i
1. @reduxjs/toolkit 
2. react-redux
3. react-router-dom
4. appwrite
5. @tinymce/tinymce-react
6. html-react-parser 
7. react-hook-form





## step-2 - Important
# create the file in root
# Enviroment variables - It consist of all database id 
1.make a .env file and .env.sample 
2. .env file -> dont upload it on github shift it to gitignore
upload env sample file

 console.log(process.env.REACT_APP_APPWRITE_URL); -> in this you will get error becaus eyou have created it via vite react
 

3. write this in env file 
VITE_REACT_APP_APPWRITE_URL="https://cloud.appwrite.io/v1"
VITE_APPWRITE_PROJECT_ID="65e708726dff741197b4"
VITE_APPWRITE_DATBASE_ID="65e709e3f3cad1293490"
VITE_APPWRITE_COLLECTION_ID="65e70a5e31e2522200bc"
VITE_APPWRITE_BUCKET_ID="65e70c0cb328d2c425cf"
4. In conf folder do the string conversion
# enviroment varibles should be in strings


  // to get the access of .env file - import.meta.env
refer app.jsx


## step-3
# appwrite
<!-- Structure -->
<!-- blog(database) ->  articles(collection) -> titile,content,featuredimage,status,userid,(Attributes)  -->
2. make a project in setting you get id and link
3. create database - create collection name them "Articles"
4. in collection article go in permission upadte it
5. in articles create attributes "TITLE"-string 255 size
6. index- creating here "filtering"(indexing) on "Status"
7. other attribues can be content, featuredimage , status , userid 
8. in index you can apply filter so apply filter at any of the atttributes for example choose status whichever status will be active we will choose that
9. buckets are the storages - we will keep all images here
10. go in setting and give permission who aill be able to access the bucket(images)




<!-- Do the code for authorization such as login , signup -->
<!-- Then do the code for configuration of databses such as  -->
## step4  - VERY IMPORTANT
# authorization
1. do the ## steps of authorization - refer appwrite auth
# use the same saved  code for authorization
2. do the ## steps of configuration of database - refer appwrite config
 make little changes in databases



# step 6
# redux toolkit  - Important
1. make a store that will track authentication -> it store the information of all the reducers



# making compoenents 
1.  always make a loading compoenents
2. make app.jsx
3. make footer and logoutbtn
4. make header

<!-- both employs forwardref logic - implemented with forms -->
5. making the common button and input in components
6. select

7. postcard


<!-- React hook from do refer select, button and input -->
8. login



# react hook form 


## step 5
# Routing 
2. make all pages first on which you will surf
3. then in the main or app.js define thier routing
4. import all these 
Route,
  RouterProvider, 
   createBrowserRouter, 
    createRoutesFromElements




 


# step 6 - Important
1. make a login and signup page and learn authentication and form designing of login and signup page

<!-- Authlayout -> it is a used fro protect ion -->


# step 7 - optional - Important
1. making rte editor so read docs

=>  make postform
1. write the initial data in useform
2. write the submit functionality if post is there previouslt then for updating a new image and deleting a old image
3. if that post is updated then navigate to that post
4. else if there was no post previously then  upload a new image and then create a new post with ids and other stuff and navigate to it


=> slug tranform
1. check for value 
2. return value in form of regex based indexing
else if nothing is wriiten return empty string


=>useeffect
1. make a varibale and assign it with watch capabilities
2. and if you have got the slug title then set it 
3. after unsubscribe the watch if not in use consireders as a good practise


=> make a basic form



# step 8
1. make pages and import components
2. routing 





# import all file in a single file make this as your good practice

<!-- If you have destrctured the props then  -->
<!-- always keep errros in usestate -->
















