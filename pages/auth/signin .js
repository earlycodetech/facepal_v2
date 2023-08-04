import Link from "next/link";
import { Formik } from "formik";
import * as yup from 'yup';

const validattionRules = yup.object().shape({
    email:yup.string().required('this field is compulsory'),
    password:yup.string()
    .required()
    .min(8,'must be up to 8 characters')
    .max(36,'cannot be more than 36 characters')
    .oneOf([yup.ref('passwordConfirnmation')],null)
})
export default function Signin() {
    const {handleblur,error,values,touched,handleChange,handleSubmit}= Formik({
        initialValues:{email:'',password:'',passwordConfirmation:''},
        onSubmit: values =>{
            //get data from
            console.log(values.email);
        },
        validationSchema:validationRules //here too
    });
    return (
        <>
        <main className="h-screen flex justify-center items-center">
        <div className="w-full sm:min-h-[480px] flex flex-col gap-5">
                <form className="flex flex-col gap-3"onSubmit={handleSubmit}>
                    <input 
                    id="email"
                    type="email"
                    value={values.email}
                    onChange={handleChanges}
                    onBlur={handleBlur}
                    className="py-3 sm:py-5 px-2 border border-indigo-400 rounded-lg bg-white/60"
                      /> 
                      {error.email && touched.email
                      ?<span className="text-red-500 "> {error.email}</span>
                    : null}
                    <input 
                    type="password" 
                    placeholder="Password"
                    className="py-3 sm:py-5 px-2 border border-indigo-400 rounded-lg bg-white/60"
                    />
                      {error.password && touched.password
                      ?<span className="text-red-500 "> {error.password}</span>
                    : null}
                    <input 
                    id="passwordConfirmation" 
                    placeholder="Password"
                    className="py-3 sm:py-5 px-2 border border-indigo-400 rounded-lg bg-white/60"
                    />
                    <button type="" className="max-w-[160px] h-12 bg-indigo-800 rounded-lg text-white font-bold"
                    >Log in to facepal</button>
                </form>
        
                <div className="w-full grid grid-cols-2 gap-3">
                    <button className="w-full h-12 bg-green-600 rounded-lg text-white font-bold">Google</button>
                    <button className="w-full h-12 bg-sky-600 rounded-lg text-white font-bold">Twitter</button>
                </div>
        
                <p className="text-2xl text-white">New to facepal? <Link href="#" className="underline">create account</Link></p>
            </div>
            
        </main>
        
        
        </>
    )
} 