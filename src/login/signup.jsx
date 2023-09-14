import "./login.css"
import React, { useState } from "react";
import { auth, db } from "../utils/firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from "firebase/firestore";

function SignForm() {
    const navigate = useNavigate();
    const [emailError, setEmailError] = useState("");
    const [contact, setContact] = useState({
        name: '',
        email: '',
        password: '',
        confirmedPassword: ''
    });
    const backToLogin = () => {
        navigate('/login')
    }

    const handleCreateAccount = async () => {
        setEmailError("");
        try {
            if (contact.password !== contact.confirmedPassword) {
                alert("Passwords do not match!");
                return;
            }
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                contact.email,
                contact.password
            );
            const user = userCredential.user;
            console.log("New User:", user);
            createUserInFirestore(contact.name, contact.email, contact.password)
            navigate('/login')


        } catch (error) {
            console.error("Error creating user:", error);
            if (error.code === "auth/email-already-in-use") {
                setEmailError("This email is already registered. Please use a different email address.");
            } else {
                alert("An error occurred while creating your account. Please try again later.");
            }
        }
        
    };
    const createUserInFirestore = async (name, email, password) => {
        try {
            const usersCollection = collection(db, "users");

            await addDoc(usersCollection, {
                name: name,
                email: email,
                password: password,
            });

            console.log("User information saved in Firestore.");
        } catch (error) {
            console.error("Error saving user information:", error);
        }
    };


    return (
        <div className="d-grid gap-2 center-div">

            <div className="form-border">
                <h2 className="center-item">
                    Sign Up
                </h2>
                <div className="center-item">
                    <label for="nameInput" className="form-label input-box" >Name*:</label>
                    <input type="text" className="form-control" name="name" value={contact.name} onChange={(e) => setContact({ ...contact, name: e.target.value })} />
                </div>
                <div className="center-item">
                <label htmlFor="emailInput" className="form-label input-box" >Email address*:</label>
                    <input type="email" className={`form-control ${emailError ? "is-invalid" : ""}`} name="email" value={contact.email} onChange={(e) => setContact({ ...contact, email: e.target.value })} placeholder="name@example.com" />
                    {emailError && (
                        <div className="invalid-feedback">{emailError}</div>
                    )}
                </div>

                <div className="center-item">
                    <label for="passwordInput" className="form-label">Password*:</label>
                    <input type="password" className="form-control" value={contact.password} onChange={(e) => setContact({ ...contact, password: e.target.value })} id="login_password_input" />
                </div>
                <div className="center-item">
                    <label for="passwordConfirmInput" className="form-label">Confirn password*:</label>
                    <input type="password" className="form-control" value={contact.confirmedPassword} onChange={(e) => setContact({ ...contact, confirmedPassword: e.target.value })} />
                </div>

                <button className="btn btn-primary center-button" onClick={handleCreateAccount}>Create an account</button>

                <button className="btn btn-primary center-button" onClick={backToLogin} >Back to login in</button>


            </div>
        </div>
    );

}

export default SignForm;
