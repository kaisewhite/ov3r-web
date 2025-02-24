"use client";

import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginCard = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  @media (min-width: 640px) {
    width: 350px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: -0.025em;
`;

const Subtitle = styled.p`
  font-size: 0.875rem;
  color: var(--muted-foreground);
`;

const Form = styled.form`
  display: grid;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
`;

const Input = styled.input`
  height: 2.25rem;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid var(--input);
  background-color: transparent;
  padding: 0.75rem;
  font-size: 0.875rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  transition: all 0.2s;

  &::placeholder {
    color: var(--muted-foreground);
  }

  &:focus {
    outline: none;
    ring: 1px solid var(--ring);
  }
`;

const Button = styled.button`
  display: inline-flex;
  height: 2.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  background-color: var(--primary);
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--primary-foreground);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  transition: background-color 0.2s;

  &:hover {
    background-color: color-mix(in srgb, var(--primary) 90%, transparent);
  }

  &:focus-visible {
    outline: none;
    ring: 1px solid var(--ring);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.5;
  }
`;

export default function LoginPage() {
  return (
    <LoginContainer>
      <LoginCard>
        <Header>
          <Title>Welcome to ov3r</Title>
          <Subtitle>Enter your email to sign in to your account</Subtitle>
        </Header>
        <Form>
          <FormGroup>
            <FormGroup>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' placeholder='name@example.com' required />
            </FormGroup>
            <FormGroup>
              <Label htmlFor='otp'>One-Time Passcode</Label>
              <Input id='otp' type='text' placeholder='Enter OTP' required />
            </FormGroup>
            <Button type='submit'>Sign In</Button>
          </FormGroup>
        </Form>
      </LoginCard>
    </LoginContainer>
  );
}
