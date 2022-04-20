import React from 'react';
import { Button, FormRow } from '@macpaw/macpaw-ui';
import { RHFForm, RHFArray, RHFInput } from '@/features/RHF/components';
import styles from '@/styles/DynamicForm.module.scss';

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
                            <RHFInput placeholder="Participant name" name={`participants.${index}.value`} />
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

export default RHFDynamicForm;
