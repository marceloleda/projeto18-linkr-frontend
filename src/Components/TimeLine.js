import styled from "styled-components";
import Tama from "../../src/Assets/images/saitama.jpg"

export default function TimeLine(){
    return(
        <>
            <Conteiner>
                <Titlle><h1>timeline</h1></Titlle>
                <PublishBox>
                    <ImgProfile><img src={Tama} alt="profile"/></ImgProfile>
                    <ConteinerInput>
                        <h2>What are you going to share today?</h2>
                        <Forms>
                            <Inserir type="link" placeholder="http://..."/>
                            <Inserir type="text" placeholder="http://..." className="segundo"/>

                        </Forms>
                    </ConteinerInput>
                </PublishBox>

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
    margin-top:150px;
    margin-bottom:45;
    h1{
        color: #FFFFFF;
        font-size: 55px;
        font-weight: 700;
    }
`;

const PublishBox = styled.div`
    display:flex;
    width: 611px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    box-sizing: border-box;
    padding: 18px;
   
`;
const ImgProfile = styled.div`

img{
    height: 50px;
    width:50px;
    border-radius: 50%;
    margin-right: 18px;
}
`;
const ConteinerInput = styled.div`
    height:150px;
    width: 505px;
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
        
    }
    

`;
const Forms = styled.div`
    form{
            display:flex;
            flex-direction:column;
            justify-content: center;
            align-items: center;
        }
`;