interface PasswordInputProp{
    setPassword: (password : string) => void;
}

export default function PasswordInput({setPassword} : PasswordInputProp){

    return (
        <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
        />
    );
}
