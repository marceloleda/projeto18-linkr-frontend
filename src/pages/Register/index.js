import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../../services/api";
import { ThreeDots } from 'react-loader-spinner';
import Button from "../../components/Button";
import Container from "../../components/Container";
import Form from "../../components/Form";
import Input from "../../components/Input";
import StyledLink from "../../components/StyledLink";
import StyledDiv from "../../components/StyledDiv";


export default function Register() {
  const navigate = useNavigate();
  const [formData, setformData] = useState({ name: '', email: '', password: '', image: '' });
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    const promise = api.signUp({
      ...formData
    });

    promise.then(() => {
      setIsLoading(false);
      navigate("/");
    });
    promise.catch(() => {
      setIsLoading(false);
      alert('Erro, tente novamente');
    });
  }

  return (
    <Container>
      <StyledDiv>
      <h1>Linkr</h1>
      <h2>save, share and discover <br/>
the best links on the web</h2>
      </StyledDiv>

      <Form onSubmit={handleSubmit}>
        <Input
          data-test="email"
          type="email"
          placeholder="e-mail"
          name="email"
          onChange={handleChange}
          value={formData.email}
          disabled={isLoading}
          required
        />
        <Input
          data-test="password"
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          disabled={isLoading}
          required
        />
        <Input
          data-test="username"
          type="text"
          placeholder="username"
          name="name"
          onChange={handleChange}
          value={formData.name}
          disabled={isLoading}
          required
        />
        <Input
          data-test="picture-url"
          type="text"
          placeholder="picture url"
          name="image"
          onChange={handleChange}
          value={formData.image}
          disabled={isLoading}
          required
        />

        <Button data-test="sign-up-btn" type="submit" disabled={isLoading}>
        {
            isLoading
              ? <ThreeDots type="ThreeDots" color="#FFFFFF" height={50} width={50} />
              : "Sign Up"
          }
        </Button>

        <StyledLink data-test="login-link" to="/">
        Switch back to log in
        </StyledLink>
      </Form>


    </Container>
  );
}