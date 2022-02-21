import { TextField } from '@fluentui/react/lib/TextField';
import { Stack, IStackProps } from '@fluentui/react/lib/Stack';
import { Label, Link, Text } from '@fluentui/react'
import { PrimaryButton } from '@fluentui/react/lib/Button';
import './Login.css'

const columnProps: Partial<IStackProps> = {
    tokens: { childrenGap: 15 },
    styles: { root: { width: 300 } },
};

interface LoginProps {
    newUserAction: () => void
}


export const Login: React.FC<LoginProps> = ({newUserAction}) => {
    return (
        <div className="login-container">
            <Label>Login to Exam Portal</Label>
            <div className="login-panel"></div>
            <Stack {...columnProps}>
                <TextField label="Username" />
                <TextField
                    label="Password"
                    type="password"
                    canRevealPassword
                    revealPasswordAriaLabel="Show password"
                />
                <Link onClick={_forgotPassword} underline className="forgot-password">
                    Forgot password?
                </Link>
                <PrimaryButton text="Log In" onClick={_login} className="login-button" />
                <Text>
                    Don't have an account? <Link onClick={newUserAction} underline>
                        Create One
                    </Link>
                </Text>
            </Stack>
        </div>
    )
}

function _login(): void {
    alert('login Clicked');
}

function _forgotPassword(ev: React.MouseEvent<unknown>) {
    alert('forgot password clicked');
}
