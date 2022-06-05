

const useForm = (model,) =>{
    const handleInputChange = (e) => {
       
        const { name, value } = e.target;
        const fieldsValue = { [name]: value };
        
        setDoctorModel({ ...doctorModel, ...fieldsValue });
       
        validate(fieldsValue)
    }

    return handleInputChange;
}


export default useForm;