"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SigninArea = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordType, setPasswordType] = useState('password');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!email || !password) {
      setMessage({ type: 'error', text: 'Email and password are required' });
      return;
    }

    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();
    if (res.ok) {
      setMessage({ type: 'success', text: '✅ Login successful! Redirecting...' });
      setTimeout(() => router.push('/'), 1500);
    } else {
      setMessage({ type: 'error', text: data.message || 'Login failed' });
    }
  };

  return (
    <div className="uxora-section-padding5 bg-light2">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="uxora-content-thumb">
              <img src="assets/images/content/thumb6.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="uxora-contact-title">
              <h2>Welcome back</h2>
            </div>
            <form onSubmit={handleLogin}>
              <div className="uxora-contact-box box2 mt-50">
                <div className="uxora-main-field">
                  <p>Email Address*</p>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="uxora-main-field">
                  <p>Password*</p>
                  <input
                    type={passwordType}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className={`fa fa-fw field-icon toggle-password ${passwordType === 'password' ? 'fa-eye-slash' : 'fa-eye'}`}
                    onClick={togglePasswordVisibility}
                  ></div>
                </div>
                <div className="uxora-form-box forgot-password">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember me</label>
                  <a href="#">Forget your password?</a>
                </div>
                <button className="uxora-default-btn d-block" type="submit">Login now</button>

                {/* Message area */}
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

                <div className="form-bottom-text">
                  <p>Don’t have an account?
                    <Link href='/sign-up'>Create an account</Link>
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

export default SigninArea;