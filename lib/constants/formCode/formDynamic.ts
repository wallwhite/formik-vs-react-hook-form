export const formikDynamic = `
interface FormikDynamicForm {
    onSubmit: (values: ObjectLiteralType) => void;
}

const FormikDynamicForm: React.FC<FormikDynamicForm> = ({ onSubmit }) => (
    <Formik
        initialValues={{
            participants: [],
        }}
        enableReinitialize
        onSubmit={onSubmit}
    >
        {({ values }): JSX.Element => (
            <Form>
                <FieldArray
                    name="participants"
                    render={(arrayHelpers): JSX.Element => (
                        <>
                            {values.participants.map((participant, index) => (
                                <FormRow key={\`participants.$\{index.toString()}\`} className={styles.formRow}>
                                    <FormikInput placeholder="Participant name" name={\`participants[\${index}]\`} />
                                    <Button
                                        onClick={(): void => arrayHelpers.remove(index)}
                                        className={styles.buttonRemove}
                                        color="warning"
                                        icon
                                    >
                                        X
                                    </Button>
                                </FormRow>
                            ))}
                            <FormRow>
                                <Button
                                    wide
                                    color="secondary"
                                    outline
                                    className="mb-16"
                                    onClick={(): void => arrayHelpers.push('')}
                                >
                                    Add participant
                                </Button>
                            </FormRow>
                        </>
                    )}
                />
                <FormRow>
                    <Button type="submit" wide>
                        Invite
                    </Button>
                </FormRow>
            </Form>
        )}
    </Formik>
);
`;

export const rhfDynamic = `
interface FormikDynamicForm {
    onSubmit: (values: ObjectLiteralType) => void;
}

const RHFDynamicForm: React.FC<FormikDynamicForm> = ({ onSubmit }) => (
    <RHFForm
        initialValues={{
            participants: [],
        }}
        onSubmit={onSubmit}
    >
        <RHFArray name="participants">
            {({ fields, append, remove }): JSX.Element => (
                <>
                    {fields.map((field, index) => (
                        <FormRow key={field.id} className={styles.formRow}>
                            <RHFInput placeholder="Participant name" name={\`participants.\${index}.value\`} />
                            <Button
                                onClick={(): void => {
                                    remove(index);
                                }}
                                className={styles.buttonRemove}
                                color="warning"
                                icon
                            >
                                X
                            </Button>
                        </FormRow>
                    ))}
                    <FormRow>
                        <Button
                            wide
                            color="secondary"
                            outline
                            className="mb-16"
                            onClick={(): void => append({ value: '' })}
                        >
                            Add participant
                        </Button>
                    </FormRow>
                </>
            )}
        </RHFArray>
        <FormRow>
            <Button type="submit" wide>
                Invite
            </Button>
        </FormRow>
    </RHFForm>
);
`;
