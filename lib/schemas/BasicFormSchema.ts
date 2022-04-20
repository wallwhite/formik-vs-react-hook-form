import * as Yup from 'yup';

const BasicFormSchema = Yup.object().shape({
    name: Yup.string().required('Name should be completed'),
    email: Yup.string().email('It is not email.').required('Email should be completed'),
    rules: Yup.boolean().equals([true], 'Must be checked'),
    sex: Yup.string().required('Please select your sex'),
});

export default BasicFormSchema;
