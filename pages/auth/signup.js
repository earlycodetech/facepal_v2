import { useFormik} from "formik"
import * as yup from 'yup';
import {authenthication} from '@/settings/firebase.setting';
import {createUserWithEmailAndPassword } from "firebase/auth";

//validation rues
const validationRules = yup.object().shape({
    email:yup.string().required('This field is compulsory'),
    password:yup.string()
    .required()
    .min(8, 'must be up to 8 characters')
    .max(36,'cannot be more than 36 characters')
    .oneOf([yup.ref('passwordConfirmation'),null],'Your password must match')
})

export default function Signup() {
    const handleGoogleEmailPasswordCreateAccount = async (userEmail,userPasword) => {
        createUserWithEmailAndPassword(authenthication,userEmail,userPasword)
        .then((user) => {
            console.log(user);
        })
        .catch((error) => console.error(error))
    }

    const {handleBlur,handleSubmit,handleChange,errors,touched,values} = useFormik({
        initialValues:{email:'',password:'',passwordConfirmation:''},
        onSubmit: values => {
            //create user account
            handleGoogleEmailPasswordCreateAccount(values.email,values.password)
        },
        validationSchema:validationRules
    });

    return(
        <>
        <main className="h-screen flex justify-center items-center">
            <div className="w-[480px] sm:min-h-[480px] flex flex-col gap-5">
                <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
                    <input 
                    id="email"
                    type="email" 
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Email address"
                    className="py-3 sm:py-5 px-2 border border-indigo-400 rounded-lg bg-white/60"
                    />
                    {errors.email && touched.email
                    ? <span className="text-red-500">{errors.email}</span>
                    : null}

                    <input 
                    id="password"
                    type="password" 
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Password"
                    className="py-3 sm:py-5 px-2 border border-indigo-400 rounded-lg bg-white/60"
                    />
                    {errors.password && touched.password
                    ? <span className="text-red-500">{errors.password}</span>
                    : null}
                    
                    <input 
                    id="passwordConfirmation"
                    type="password" 
                    value={values.passwordConfirmation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Confirm Password"
                    className="py-3 sm:py-5 px-2 border border-indigo-400 rounded-lg bg-white/60"
                    />
                    <button type="submit" className="max-w-[160px] h-12 bg-indigo-800 rounded-lg text-white font-bold"
                    >Create account</button>
                </form>
        
                <div className="w-full grid grid-cols-2 gap-3">
                    <button className="w-full h-12 bg-green-600 rounded-lg text-white font-bold">Google</button>
                    <button className="w-full h-12 bg-sky-600 rounded-lg text-white font-bold">Twitter</button>
                </div>
            </div>
        </main>
        </>
    )
}