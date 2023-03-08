import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../../services/api";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '', image: '' });
  const [isLoading, setIsLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
      <img alt="logo.svg" src={Logo} />

      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          disabled={isLoading}
          required
        />
        <Input
          type="password"
          placeholder="senha"
          name="password"
          onChange={handleChange}
          value={formData.password}
          disabled={isLoading}
          required
        />
        <Input
          type="text"
          placeholder="nome"
          name="name"
          onChange={handleChange}
          value={formData.name}
          disabled={isLoading}
          required
        />
        <Input
          type="text"
          placeholder="foto"
          name="image"
          onChange={handleChange}
          value={formData.image}
          disabled={isLoading}
          required
        />

        <Button type="submit" disabled={isLoading}> botão </Button>
      </Form>

      <StyledLink to="/">
        Já tem uma conta? Faça login!
      </StyledLink>
    </Container>
  );
}