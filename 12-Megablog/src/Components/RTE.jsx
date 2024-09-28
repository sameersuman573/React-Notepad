// REAL TIME EDITOR
// read documentation of tinymce-react 

import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
// controller -- responsible for transporting the state from this form to other form
// controller we get from react forms



export default function RTE({ name, control, label, defaultValue = "" }) {
  // the control comes from react hook and is repsonsible for transporting the state to other form
  



  return (

    <div className="w-full ">
    {/* if label is present then give label this is the only work of && */}
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}


    {/* controller is a component which is responsible for transporting the state from this form to other form */}



      <Controller
    name={name || "content"}
    // the control is repsonsible for transporting states it comes it come from reat hook form
    control={control}
    // how elements are rendered
    render={({field: {onChange}}) => (



        <Editor
        initialValue={defaultValue}
        // after initailization what values do you want to give
        init={{
            initialValue: defaultValue,
            height: 500,
            menubar: true,
            plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
            ],
            toolbar:
            "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
            content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
        }}


        onEditorChange={onChange}
        // if any thing changes on editor then feild will govern all change
        />
        // editor ends here
    )}
    /> 
    {/* controller ends here */}

     </div>
  )
}


