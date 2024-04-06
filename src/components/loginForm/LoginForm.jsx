import React, { useState } from "react";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onUpdateField = e => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const onSubmitForm = e => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  };

  return (
    <form className={styles.form} onSubmit={onSubmitForm}>
      <input
        className={styles.formField}
        type="text"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={onUpdateField}
      />
      <input
        className={styles.formField}
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={onUpdateField}
      />
      <input
        className={styles.formField}
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={onUpdateField}
      />
      <button className={styles.formSubmitBtn} type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
