import { useState } from 'react';
import {
    FieldError,
    Form,
    Label,
    TextField,
    Submit,
} from '@redwoodjs/forms';

const ExampleForm = () => {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const onSubmit = async () => {
        console.log('submitted')
    };

    return (
        <>
            <Form onSubmit={onSubmit}>
                <Label name="name">
                    NAME <FieldError name="name" className="error" />
                </Label>
                <TextField
                    name="name"
                    placeholder="Blockchain Bob"
                    validation={{ required: true, minLength: 3 }}
                    errorClassName="error"
                />

                <Label name="email">
                    EMAIL <FieldError name="email" className="error" />
                </Label>
                <TextField
                    name="email"
                    placeholder="http://domain.com/redirecturl"
                    validation={{ required: true, minLength: 6 }}
                    errorClassName="error"
                />

                <Label name="message">
                    PRIVACY POLICY URI <FieldError name="message" className="error" />
                </Label>
                <TextField
                    name="message"
                    placeholder="http://domain.com/privacyurl"
                    validation={{ required: true }}
                    errorClassName="error"
                />
                <Submit>Save</Submit>
                {error ? (
                    <span
                        errorClassName="error"
                        style={{
                            color: '#E45200',
                            textAlign: 'left',
                            paddingTop: '16px',
                        }}
                    >{error}</span>
                ) : <></>}
                {success && (
                    <div style={{ color: 'green',
                        textAlign: 'left',
                        paddingTop: '16px', }}>Form submitted successfully!</div>
                )}
            </Form>
            <div className="flex gap-x-4 mt-12">
            <button className="flex border border-black rounded-lg p-2" onClick={() => {setError(''); setSuccess(true)}}>Test success</button>
            <button className="flex border border-black rounded-lg p-2" onClick={() => {setSuccess(false); setError('Test error message')}}>Test error</button>
            </div>
        </>
    );
};

export default ExampleForm;