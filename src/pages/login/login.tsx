import { FC, SyntheticEvent, useState } from 'react';
import { LoginUI } from '@ui-pages';
import { login } from '../../services/slices/userSlice';
import { useDispatch } from '../../services/store';

export const Login: FC = () => {
  const dispatch = useDispatch();

  let initialState: string = '';
  if (localStorage.getItem('email')) {
    initialState = localStorage.getItem('email')!;
  }

  const [email, setEmail] = useState(initialState);
  const [password, setPassword] = useState('');

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    localStorage.setItem('email', email);
    dispatch(
      login({
        email: email,
        password: password
      })
    );
  };

  return (
    <LoginUI
      errorText=''
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      handleSubmit={handleSubmit}
    />
  );
};
