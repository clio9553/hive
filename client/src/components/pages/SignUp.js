import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../styles/signup.css'
import { BiUser } from "react-icons/bi"
import { FiEye, FiEyeOff, FiKey } from "react-icons/fi";
import { SiHive } from "react-icons/si";
import toast from "react-hot-toast";

export const SignUp = ({ loginCallback, togglePage }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setshowPassword] = useState(false)


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (username === "") {
            toast.error("Username field cannot be empty")
            return;
        }
        if (password === "") {
            toast.error("Password field cannot be empty")
            return;
        }
        const toastId = toast.loading("Aunthenticating ...")
        await fetch("/api/sign-up", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username,
                password,
            }),
        }).then(async (res) => {
            const message = await res.json().then(body => body.message)
            if (res.ok) {
                toast.success(message, { id: toastId })

                setTimeout(() => loginCallback(), 1000);
            } else {
                toast.error(message, { id: toastId })
            }
        })
    }

    return (
        <div className="sign-up-page">
            <div className="sign-up-form">
                <div className="sign-up-form-content">
                    <SiHive className="sign-icon" fontSize={50} />
                    <div className="sign-title">Sign Up</div>
                    <div className="sign-input">
                        <div className="input-label">Username</div>
                        <div className="input-input">
                            <BiUser fontSize={22} />
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Username"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="sign-input">
                        <div className="input-label">PassWord</div>
                        <div className="input-input">
                            <FiKey fontSize={22} />
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                placeholder="Enter password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {
                                showPassword ? <FiEyeOff className="eye" fontSize={22} onClick={() => setshowPassword(false)} /> : <FiEye className="eye" fontSize={22} onClick={() => setshowPassword(true)} />
                            }


                        </div>
                    </div>

                    <div className="form-button" onClick={handleSubmit}>Sign Up</div>

                    <div className="forgot-password">
                        Already have an account?
                        <span onClick={() => togglePage()}>
                            Sign In
                        </span>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default SignUp