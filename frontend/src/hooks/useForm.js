import { useState } from "react";

export const useForm = (init={}) => {
    const [form, setForm] = useState(init)

    const handleForm = (form) => {
        const formData = new FormData(form);

        const obj = {};

        for (let [name, value] of formData) {
            obj[name] = value
            
        }

        return obj;
    }

    const sent = e => {
        e.preventDefault();
        let data = handleForm(e.target)

        setForm(data)
    }

    const changed = (e) => {
        const {name, value} = e.target
   
        setForm({
            ...form,
            [name]:value
        })
    }

    return{
        form,
        sent,
        changed
    }
}