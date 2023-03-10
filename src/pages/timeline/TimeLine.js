import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Tama from "../../Assets/images/saitama.jpg"
import Header from "../../components/Header";
import { blue, white } from "../../constants/colors";
import api from "../../services/api";
import ListPosts from "./TimelinePosts";

export default function TimeLine(){
    const [link, setLink] = useState('');
    const [description, setDescription] = useState('');
    const [isPublishing, setIsPublishing] = useState(false);

  
    function SendPost(event){
        event.preventDefault();
        setIsPublishing(true);

        const promise = api.timeLine({
            link,
            description
        })
        promise.then((res)=>{
            console.log(res)
            setIsPublishing(false);
            setLink("");
            setDescription("");
        })
        .catch((err)=>{
            setIsPublishing(false);

           alert("There was an error publishing your link")
            console.log(err.message)
          })

        console.log(promise)
    }

    return(
        <>
            <Conteiner>
                <Header/>
                <Titlle><h1>timeline</h1></Titlle>
                <PublishBox data-test="publish-box">
                    <ImgProfile><img src={Tama} alt="profile"/></ImgProfile>
                    <ConteinerInput>
                        <h2>What are you going to share today?</h2>
                        <form onSubmit={SendPost}>
                        <Inserir data-test="link" type="text" placeholder="http://..." onChange={(e)=>{
                                setLink(e.target.value)
                            }} required
                            disabled={isPublishing}
                            />
                            <Inserir data-test="description" type="text" placeholder="Awesome article about #javascript" className="segundo" onChange={(e)=>{
                                setDescription(e.target.value)
                            }}   disabled={isPublishing}/>
                            <BotaoContainer>
                                <Botao data-test="publish-btn" type="submit">{isPublishing ? "Publishing..." : "Publish"}</Botao>
                            </BotaoContainer>
                        </form>
                    </ConteinerInput>
                </PublishBox>
                {<ListPosts/>}
            </Conteiner>
        </>
    );
}

const Conteiner = styled.div`
    height: 100vh;
    width: 100vw;
    display:flex;
    flex-direction:column;
    align-items:center;

`;
const Titlle = styled.div`
    width: 611px;
    margin-top: 150px;
    margin-bottom: 45px;
    font-family: 'Oswald', sans-serif;
    h1{
        color: ${white};
        font-size: 55px;
        font-weight: 700;
    }
`;

const PublishBox = styled.div`
    display: flex;
    width: 611px;
    height: 209px;
    background: ${white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    box-sizing: border-box;
    padding: 18px;
   
`;
const ImgProfile = styled.div`

img{
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin-right: 18px;
}
`;
const ConteinerInput = styled.div`
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    height:150px;
    width: 505px;
`;
const BotaoContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;
const Inserir = styled.input`
    width: 503px;
    height: 30px;

    margin-bottom: 5px;
    background: #EFEFEF;
    border: none;
    border-radius: 5px;
    padding: 10px;
    box-sizing: border-box;

    &:first-child{
        margin-top: 15px;
    }
    &.segundo{
        height: 66px;
        padding-top: 0; 
        position: relative;
        line-height: 380px;
        padding-top: 0px; /* ajusta o espaço entre o topo do input e o texto */
        padding-bottom: 25px; /* ajusta o espaço entre o texto e o fundo do input */
    }
    &.segundo::placeholder {
        position: absolute; /* define o posicionamento do placeholder como absoluto */
        top: 10px; /* ajusta a posição vertical do placeholder */
        line-height: normal; /* redefine a linha de altura para a altura padrão */
    }
      
`;
const Botao = styled.button`
    width: 112px;
    height: 31px;
    background: ${blue};
    border-radius: 5px;
    border:none;
    cursor: pointer;
    color: ${white};
    font-weight: 700;
    font-size: 14px;
`;
