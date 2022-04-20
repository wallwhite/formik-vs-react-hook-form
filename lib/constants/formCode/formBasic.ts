export const formikBasic = `
interface FormikForm {
    onSubmit: (formData: ObjectLiteralType) => void;
}

const FormikForm: React.FC<FormikForm> = ({ onSubmit }) => (
    <Formik
        initialValues={{
            name: '',
            email: '',
            rules: false,
            sex: '',
        }}
        validationSchema={ValidationSchema}
        onSubmit={onSubmit}
    >
        <Form>
            <FormRow>
                <FormikInput name="name" label="Your name" placeholder="Enter your name" />
            </FormRow>
            <FormRow>
                <FormikInput name="email" label="Email" placeholder="Enter your email" />
            </FormRow>
            <FormRow>
                <FormikRadioGroup name="sex" label="Your sex">
                    <FormikRadioButton name="sex" value="male">
                        Male
                    </FormikRadioButton>
                    <FormikRadioButton name="sex" value="female">
                        Female
                    </FormikRadioButton>
                </FormikRadioGroup>
            </FormRow>
            <FormRow>
                <FormikCheckBox label="Accept rules" name="rules">
                    By creating an account on our website you accept the terms and conditions.
                </FormikCheckBox>
            </FormRow>
            <FormRow>
                <Button type="submit">Submit</Button>
            </FormRow>
        </Form>
    </Formik>
 );
`;

export const rhfBasic = `
interface RHFBasicForm {
    onSubmit: (formData: ObjectLiteralType) => void;
}

const RHFBasicForm: React.FC<RHFBasicForm> = ({ onSubmit }) => (
    <RHFForm
        initialValues={{ name: '', email: '', sex: '', rules: false }}
        validationSchema={BasicFormSchema}
        onSubmit={onSubmit}
    >
        <FormRow>
            <RHFInput name="name" label="Your name" placeholder="Enter your name" />
        </FormRow>
        <FormRow>
            <RHFInput name="email" label="Email" placeholder="Enter your email" />
        </FormRow>
        <FormRow>
            <RHFRadioGroup name="sex" label="Your sex">
                <RHFRadioButton name="sex" value="male">
                    Male
                </RHFRadioButton>
                <RHFRadioButton name="sex" value="female">
                    Female
                </RHFRadioButton>
            </RHFRadioGroup>
        </FormRow>
        <FormRow>
            <RHFCheckBox label="Accept rules" name="rules">
                By creating an account on our website you accept the terms and conditions.
            </RHFCheckBox>
        </FormRow>
        <FormRow>
            <Button type="submit">Submit</Button>
        </FormRow>
    </RHFForm>
);
`;
