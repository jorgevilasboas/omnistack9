import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) {
  const [email, setEmail] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await api.post('/sessions', { email });
    const { _id } = response.data[0];

    console.log(response, _id);
    localStorage.setItem('user_id', _id);
    history.push('/dashboard');
  }

  return (
    <>
      <p>ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa</p><br />

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">EMAIL *</label>
        <input
          type="email"
          id="email"
          placeholder="Seu melhor email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button type="submit" className="btn">Entrar</button>
      </form>


    </>
  );
}
