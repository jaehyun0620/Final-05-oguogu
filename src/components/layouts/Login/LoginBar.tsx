'use client';

import LoginInput from '@/components/elements/LoginItem/LoginInput';
import { useState } from 'react';

export default function LoginBar() {
  const [msg, setMsg] = useState('');
  const [password, setPassword] = useState('');
  const [num, setNum] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  console.log(email);
  console.log(password);

  return (
    <>
      <LoginInput
        type="text"
        placeholder="이름"
        onChange={setMsg}
        value={msg}
      />

      <LoginInput
        type="password"
        placeholder="비밀번호"
        onChange={setPassword}
        value={password}
      />

      <LoginInput
        type="email"
        placeholder="예: ogugarden"
        value={email}
        onChange={setEmail}
        options={[
          { label: 'naver.com', value: 'naver.com' },
          { label: 'gmail.com', value: 'gmail.com' },
        ]}
      />

      <LoginInput
        type="address"
        onChange={setAddress}
        value={address}
        placeholder="도로명, 지번, 건물명 검색"
      />

      <LoginInput
        type="phone"
        onChange={setNum}
        value={num}
        placeholder="숫자"
      />
    </>
  );
}
