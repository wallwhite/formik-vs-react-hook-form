export const formikStepper = `
interface FormikStepperForm {
    onSubmit: (values: ObjectLiteralType) => void;
}

const FormikStepperForm: React.FC<FormikStepperForm> = ({ onSubmit }) => (
    <Formik
        initialValues={{
            name: '',
            email: '',
            rules: false,
            sex: '',
        }}
        onSubmit={onSubmit}
    >
        <Form>
            <Stepper initialStep="name">
                <Step stepKey="name">
                    <NameStep />
                </Step>
                <Step stepKey="email">
                    <EmailStep />
                </Step>
                <Step stepKey="sex">
                    <SexStep />
                </Step>
                <Step stepKey="rules">
                    <RulesStep />
                </Step>
            </Stepper>
        </Form>
    </Formik>
);
`;

export const rhfStepper = `
interface RHFStepperForm {
    onSubmit: (values: ObjectLiteralType) => void;
}

const RHFStepperForm: React.FC<RHFStepperForm> = ({ onSubmit }) => (
    <RHFForm
        initialValues={{
            name: '',
            email: '',
            rules: false,
            sex: '',
        }}
        onSubmit={onSubmit}
    >
        <Stepper initialStep="name">
            <Step stepKey="name">
                <NameStep />
            </Step>
            <Step stepKey="email">
                <EmailStep />
            </Step>
            <Step stepKey="sex">
                <SexStep />
            </Step>
            <Step stepKey="rules">
                <RulesStep />
            </Step>
        </Stepper>
    </RHFForm>
);
`;
