"use client";

import Link from 'next/link';
import React, { useState } from 'react';

const SignupArea = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [passwordType, setPasswordType] = useState<'password' | 'text'>('password');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!firstName.trim()) newErrors.firstName = 'First name is required';
    if (!lastName.trim()) newErrors.lastName = 'Last name is required';

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Enter a valid email address';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    if (!agree) {
      newErrors.agree = 'You must agree to the Terms & Privacy Policy';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!validateForm()) return;

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName, email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage({ type: 'success', text: '✅ Account created successfully! You can now login.' });
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setAgree(false);
      setErrors({});
    } else {
      setMessage({ type: 'error', text: `❌ ${data.message || 'Something went wrong.'}` });
    }
  };

  return (
    <div className="uxora-section-padding5 bg-light2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="uxora-content-thumb">
              <img src="assets/images/content/thumb7.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="uxora-contact-title">
              <h2>Create an account</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="uxora-contact-box box2 mt-50">

                {/* First Name */}
                <div className="uxora-main-field">
                  <p>First name*</p>
                  <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                  {errors.firstName && <small style={{ color: 'red' }}>{errors.firstName}</small>}
                </div>

                {/* Last Name */}
                <div className="uxora-main-field">
                  <p>Last name*</p>
                  <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                  {errors.lastName && <small style={{ color: 'red' }}>{errors.lastName}</small>}
                </div>

                {/* Email */}
                <div className="uxora-main-field">
                  <p>Email Address*</p>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
                </div>

                {/* Password */}
                <div className="uxora-main-field">
                  <p>Password*</p>
                  <input type={passwordType} value={password} onChange={(e) => setPassword(e.target.value)} />
                  <div
                    className={`fa fa-fw field-icon toggle-password ${passwordType === 'password' ? 'fa-eye-slash' : 'fa-eye'}`}
                    onClick={togglePasswordVisibility}
                  ></div>
                  {errors.password && <small style={{ color: 'red' }}>{errors.password}</small>}
                </div>

                {/* Agree Checkbox */}
                <div className="uxora-form-box forgot-password">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                  />
                  <label htmlFor="agree">
                    I agree to the <span>Terms</span> and <span>Conditions of Privacy</span>
                  </label>
                  {errors.agree && <small style={{ color: 'red', display: 'block' }}>{errors.agree}</small>}
                </div>

                {/* Submit Button */}
                <button className="uxora-default-btn d-block" type="submit">Create account</button>

                {/* Message Area */}
                {message && (
                  <div
                    style={{
                      marginTop: '15px',
                      color: message.type === 'success' ? 'green' : 'red',
                      fontWeight: 'bold',
                    }}
                  >
                    {message.text}
                  </div>
                )}

                {/* Already have account */}
                <div className="form-bottom-text">
                  <p>Already have an account?
                    <Link href='/sign-in'>Login now</Link>
                  </p>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupArea;
