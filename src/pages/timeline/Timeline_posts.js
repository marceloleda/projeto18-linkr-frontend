import styled from "styled-components";
import { white } from "../../constants/colors";
import Tama from "../../Assets/images/saitama.jpg"
import { useEffect, useState } from "react";


export default function List_posts(){

    return(
        <>
            <PostBox>
                <ImgProfile><img src={Tama} alt="profile"/></ImgProfile>
                <ConteinerPost>
                    <h2>name Juvenal</h2>
                    <PostText>
                        <h1>damsndksadas das ddada dad admad adisaldnslad oisadisdsabdls adjsad sad asd</h1>
                    </PostText>
                </ConteinerPost>
            </PostBox>
        </>
    );

}
const PostText = styled.div`
min-height: 50px;
max-height: 200px;
margin-top:8px;
width: 511px;
word-wrap: break-word;

`;
const PostBox = styled.div`
    display:flex;
    width: 611px;
    height: 209px;
    margin-top:30px;
    background: #171717;
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
const ConteinerPost = styled.div`
    height:150px;
    width: 505px;
    color: ${white};
`;
