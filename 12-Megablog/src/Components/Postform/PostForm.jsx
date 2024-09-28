import React from "react";
import { useCallback } from "react";
// useform comes from react hook form
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import appwriteService from "../../Appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";





// postform is a component which will be used to create a post or update a post

  export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
  // useform give us watching capabilities , to monitor a particular feild continoulsy- watch
  // set values in particular field
  // you can have a control of form
  // you can grab any of the form values



    useForm({

      // we need a post and if user came to edit here so we need to give default values
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        // slug = post ID
        content: post?.content || "",
        status: post?.status || "active",
      },
    });





  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);



// SUBMIT FORM

// if post value is there so update it either post is not there so create it  

  const submit = async (data) => {
    // update the post---
    // upload a image 

    if (post) { 
       const file = data.image[0] ? await
       appwriteService.uploadfile(data.image[0]) //upload
        : null;

        

        // delete the old image after uploading new image
        // in database the name is featured image
      if (file) {
        appwriteService.deletefile(post.featuredImage);
      }

      // slug is the id of the post 



// UPDATE THE POST



      const dbPost = await appwriteService.updatepost(post.$id, 
        {
        ...data,
        // if we have file then put in feature image post.
        featuredImage: file ? file.$id : undefined,
      });



      // navigating the post to the edited place using its ID
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } 






    // we have no thing to update
    // user wants to create form
    else {

      const file = await appwriteService.uploadfile(data.image[0]);



      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await appwriteService.createpost({
          ...data,
          userId: userData.$id,
        })

        if (dbPost) {
           navigate(`/post/${dbPost.$id}`)
        }

      }
    }
  };



// SLUG TRANSFORM


// The user whatver he will write will be getting converted into 
  // title watch and generate slug 
const slugTransform = useCallback((value) => {
 if (value && typeof value === 'string') 
   return value 
   .trim()
   .toLowerCase()
  //  regex - write with chatGpt 
   .replace(/^[a-zA-Z\d\s]+/g, '-')
  //  it means after leaving all values in [] we will do rest letter dash- in thisform
   .replace(/\s/g, '-') 
  //  globally see spaces and put dsah in place of that


  // if these all things are not happening then return empty string
   return '';
 
}, [])



// we have not imported useeffect so we using like this
// watch method
// we will imply watch on title
React.useEffect(() => {
  const subscription = watch((value, { name }) => {
      if (name === "title") {
          setValue("slug", slugTransform(value.title), 
          {shouldValidate: true });
      }
  });



return () => 
  // memeory management
  // so that it deosnot get called up
  subscription.unsubscribe()
// dependency
}, [watch, slugTransform, setValue])





  return (


    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
        <div className="w-2/3 px-2">


{/* LEFT SIDE FORM */}


            <Input
                label="Title :"
                placeholder="Title"
                className="mb-4"
                {...register("title", { required: true })}
            />



            <Input
                label="Slug :"
                placeholder="Slug"
                className="mb-4"
                {...register("slug", { required: true })}
                onInput={(e) => {
                    setValue("slug", slugTransform(e.currentTarget.value),
                   { shouldValidate: true });
                }}
            />



            <RTE 
            label="Content :"
             name="content" 
             control={control} 
             defaultValue={getValues("content")} />
        </div>



        <div className="w-1/3 px-2">
            <Input
                label="Featured Image :"
                type="file"
                className="mb-4"
                accept="image/png, image/jpg, image/jpeg, image/gif"
                {...register("image", { required: !post })}
            />



            {post && (
                <div className="w-full mb-4">
                    <img
                        src={appwriteService.getfilepreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-lg"
                    />
                </div>
            )}



            <Select
                options={["active", "inactive"]}
                label="Status"
                className="mb-4"
                {...register("status", { required: true })}
            />


            
            <Button 
            type="submit"
            bgColor={post ? "bg-green-500" : undefined} 
            className="w-full">
            {post ? "Update" : "Submit"}
            </Button>
            


        </div>
    </form>
);

}

 
 
