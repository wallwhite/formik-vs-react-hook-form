import React from 'react';
import { Button, FormRow } from '@macpaw/macpaw-ui';
import { Formik, Form, FieldArray } from 'formik';
import { FormikInput } from '@/features/Formik/components';
import { DynamicFormSchema } from '@/schemas';
import styles from '@/styles/DynamicForm.module.scss';

interface FormikDynamicForm {
    onSubmit: (values: ObjectLiteralType) => void;
}

const FormikDynamicForm: React.FC<FormikDynamicForm> = ({ onSubmit }) => (
    <Formik
        initialValues={{
            participants: [],
        }}
        validationSchema={DynamicFormSchema}
        onSubmit={onSubmit}
    >
        {({ values }): JSX.Element => (
            <Form>
                <FieldArray
                    name="participants"
                    render={(arrayHelpers): JSX.Element => (
                        <>
                            {values.participants.map((participant, index) => (
                                <FormRow key={`participants.${index.toString()}`} className={styles.formRow}>
                                    <FormikInput placeholder="Participant name" name={`participants[${index}]`} />
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

export default FormikDynamicForm;
