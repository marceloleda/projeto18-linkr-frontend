import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import Button from "../../components/Button";
import Container from "../../components/Container";
import Form from "../../components/Form";
import Input from "../../components/Input";
import StyledLink from "../../components/StyledLink";
import StyledDiv from "../../components/StyledDiv";
import { ThreeDots } from "react-loader-spinner";


export default function Login() {
  const [formData, setformData] = useState({ email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false);
  const { auth, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (auth && auth.token) {
      navigate("/");
    }
  }, []);

  function handleChange(e) {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setIsLoading(true);
    const promise = api.login({ ...formData });
    promise.then((response) => {
      setIsLoading(false);

      login(response.data);
      navigate("/timeline");
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

        <Button type="submit" disabled={isLoading}>
          {
            isLoading
              ? <ThreeDots type="ThreeDots" color="#FFFFFF" height={50} width={50} />
              : "Log In"
          }
        </Button>

        <StyledLink to="/register">
        First time? Create an account!
        </StyledLink>
      </Form>

    </Container>
  );
}