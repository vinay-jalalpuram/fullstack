import React from 'react'
import { Formik, Form, Field, ErrorMessage }  from "formik";
import * as Yup from 'yup';

function CreatePost() {

   const InitialValues = {
      title: "",
      userName: "",
      postText: "" 
   };
   
   const onSubmit = () => {
      console.log('Form Submitted');
   };

   const validationSchema = Yup.object().shape({

   });

  return (
    <div>
        <div>CreatePost</div>
        <Formik>
            <form>
                 <label>Title</label>
                 <Field id="" name="" placeholder="" ></Field>           

                 <label>Title</label>
                 <Field id="" name="" placeholder="" ></Field>           

                 <label>Title</label>
                 <Field id="" name="" placeholder="" ></Field>           

                <button type='submit' onClick={onSubmit}></button>
            </form>
        </Formik>
    </div>
  )
}

export default CreatePost