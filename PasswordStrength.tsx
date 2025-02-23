import "./PasswordStrength.css"

interface PasswordProp{
    password: string;
}

export default function PasswordStrength({password} : PasswordProp){

    const hasLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    let strength = "Weak";
    let strengthColor = "red";


    if (hasLength && hasUppercase && hasNumber && hasSpecialChar) {
        strength = "Strong";
        strengthColor = "green";
    } else if ((hasLength && hasUppercase) || (hasLength && hasNumber) || (hasLength && hasSpecialChar)) {
        strength = "Medium";
        strengthColor = "orange";
    }
    return(
        <div id={"password-cont"}>
            <div id={"password-strength"} style={{ background: strengthColor }}></div>
            <p>Password strength: <span style={{color : strengthColor}}>{strength} </span> </p>
            <ul>
                <li style={{ color: hasLength ? "green" : "red" }}>At least 8 characters</li>
                <li style={{ color: hasUppercase ? "green" : "red" }}>At least one uppercase letter</li>
                <li style={{ color: hasNumber ? "green" : "red" }}>At least one number</li>
                <li style={{ color: hasSpecialChar ? "green" : "red" }}>At least one special character </li>
            </ul>
        </div>


    );
}
