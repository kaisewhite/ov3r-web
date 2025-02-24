"use client";

import { useState } from "react";
import styles from "./login.module.css";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Welcome to ov3r</h1>
        <p className={styles.description}>Please enter your email to receive a one-time passcode</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor='email' className={styles.label}>
            Email
          </label>
          <input
            id='email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter your email'
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='otp' className={styles.label}>
            One-Time Passcode
          </label>
          <input id='otp' type='text' value={otp} onChange={(e) => setOtp(e.target.value)} placeholder='Enter your OTP' className={styles.input} required />
        </div>

        <button type='submit' className={styles.button}>
          Log In
        </button>
      </form>
    </div>
  );
}
