import React from "react";
import { Select, Input, Button } from "./index";
import { useForm } from "react-hook-form";
import appwriteService from "../../Appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useCallback } from "react";

export default function Postform({ post }) {
  // the feature of destructuring get the values with the need of a refernce

  //   writing the useform hook
  const { register, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  // submit functionality

  //  submit fucntinality wiil be an async function
  const submit = async (data) => {
    // check if post is there or not
    if (post) {
      data.image[0] ? appwriteService.uploadFile(data.image[0]) : null;
      // delte theprev image

      // if file is uploaded then delete the previous file
      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatepost(
        post.$id,
        { ...data },
        { featuredImage: file ? file.$id : undefined }
      );

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        const dbPost = await appwriteService.createpost({
          ...data,
          userid: userData.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
        // naviate post we must have the id as thr url of the post and we need to create the post first
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") return;
    value
      .trim()
      .toLowerCase()
      .replace(/^[a-zA-Z\d\s]+/g, "-")
      //  it means after leaving all values in [] we will do rest letter dash- in thisform
      .replace(/\s/g, "-");
    return "";
  }, []);

  useEffect(() => {
    // Now i am going to disable watch capabilities
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, setValue, slugTransform]);

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <Input
          label="title"
          placeholder="title"
          {...register("title", { required: true })}
        />

        <Input
          label="slug"
          placeholder="slug"
          {...register("slug", { required: true })}
          // to fetch the values of the slug
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />

        <RTE
          label="content"
          name="content"
          control={control}
          defaultValues={getValues("content")}
        />
      </div>

      <div>
        <Input
          label="Featured Image"
          type="file"
          accept="image/png, image/jpg image/jpeg image/gif"
          {...register("image", { required: !post })}
        />

        {post && (
          <div>
            <img
              src={appwriteService.previewFile(post.featuredImage)}
              alt={post.title}
            />
          </div>
        )}
        <Select
          label="status"
          options={["active", "inactive"]}
          {...register("status", { required: "true" })}
        />

        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          {...(post ? "update" : "submit")}
        />
      </div>
    </form>
  );
}
