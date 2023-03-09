import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../../services/api";
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
      <h1>linkr</h1>
      <h2>save, share and discover <br/>
the best links on the web</h2>
      </StyledDiv>

      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="e-mail"
          name="email"
          onChange={handleChange}
          value={formData.email}
          disabled={isLoading}
          required
        />
        <Input
          type="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          disabled={isLoading}
          required
        />
        <Input
          type="text"
          placeholder="username"
          name="name"
          onChange={handleChange}
          value={formData.name}
          disabled={isLoading}
          required
        />
        <Input
          type="text"
          placeholder="picture url"
          name="image"
          onChange={handleChange}
          value={formData.image}
          disabled={isLoading}
          required
        />

        <Button type="submit" disabled={isLoading}> Sign Up </Button>
      </Form>

      <StyledLink to="/">
      Switch back to log in
      </StyledLink>
    </Container>
  );
}