import * as Yup from 'yup';

const DynamicFormSchema = Yup.object().shape({
    participants: Yup.array().of(Yup.string().required('Name should be completed')),
});

export default DynamicFormSchema;
