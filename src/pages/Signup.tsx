import { TextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps, IStackStyles } from '@fluentui/react/lib/Stack';
import { Label, Link, Text } from '@fluentui/react'
import { PrimaryButton } from '@fluentui/react/lib/Button';
import './Signup.css'
import { useState } from 'react';


const stackTokens = { childrenGap: 50 };
const stackStyles: Partial<IStackStyles> = { root: { width: 'fit-content' } };

const stackTokens2 = { childrenGap: 5 };

const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } },
};

interface SignUpProps {
    signInAction: () => void
}


export const Signup: React.FC<SignUpProps> = ({signInAction}) => {

    const initialValues = {
        firstname: "",
        lastname: "",
        email: "",
        username: "",
        password: ""
    }

    const [formValues, setFormValues] = useState(initialValues)

    function onSubmit(): void {
        console.log(formValues)
    }

    const handleChange = (e: any) => {
        const { value } = e.target;
        setFormValues({...formValues, firstname: value})
        console.log(formValues)
    }

    return (
        <div className="login-container">
            <Label>Create an account</Label>
            <Stack horizontal tokens={stackTokens} styles={stackStyles}>
                <Stack {...columnProps}>
                    <Stack horizontal tokens={stackTokens2} styles={stackStyles}>
                        <TextField 
                            label="Firstname" 
                            value={formValues.firstname}
                            onChange={handleChange}
                        />
                        <TextField 
                            label="Lastname"
                            value={formValues.lastname} 
                        />
                    </Stack>
                    <TextField 
                        label="Email" 
                        value={formValues.email}
                    />
                    <TextField 
                        label="Username" 
                        value={formValues.username}
                    />
                    <TextField
                        label="Password"
                        type="password"
                        canRevealPassword
                        revealPasswordAriaLabel="Show password"
                        value={formValues.password}
                    />
                    <PrimaryButton text="Create account" className="login-button"  type="submit" onClick={onSubmit}/>
                    <Text>
                        Already have an account? <Link onClick={signInAction} underline>
                            Sign In
                        </Link>
                    </Text>
                </Stack>
            </Stack>
        </div>
        
    )
}



function _forgotPassword(ev: React.MouseEvent<unknown>) {
    alert('forgot password clicked');
}


