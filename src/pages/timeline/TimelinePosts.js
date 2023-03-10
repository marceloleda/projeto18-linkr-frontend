import styled from "styled-components";
import { white } from "../../constants/colors";
import Tama from "../../Assets/images/saitama.jpg"
import React, { useState, useEffect } from 'react';
import api from "../../services/api";


export default function ListPosts(){
    const [posts, setPosts] = useState()
    useEffect(()=>{
        const promise = api.getPosts();
        promise.then((res)=>{
            console.log(res.data)
            setPosts(res.data)
        })
        .catch((err)=>{
           alert("An error occured while trying to fetch the posts, please refresh the page")
            console.log(err.message)
        })
    },[posts])

    return(

        <>
            {posts ? (
            posts.map(post => (
                <PostBox key={post.id}>
                <ImgProfile>
                    <img src={post.user_info.picture_url} alt="profile"/>
                </ImgProfile>
                <ConteinerPost>
                    <h2>{post.user_info.username}</h2>
                    <PostText>
                    <h1>{post.description}</h1>
                    {post.metadata && (
                        <MetadataBox>
                            <Div1>
                                <h3>{post.metadata.title}</h3>
                                <p>{post.metadata.description}</p>
                                <h2>{post.metadata.url}</h2>
                            </Div1>

                            <a href={post.metadata.url} target="_blank" rel="noreferrer"> 
                                <div>
                                    <img src={post.metadata.image} alt="metadata"/>
                                </div>
                            </a>
                        </MetadataBox>
                    )}
                    </PostText>
             
                </ConteinerPost>
                </PostBox>
            ))
            ) : (
            <p>Loading ...</p>
            )}
        </>
    );

}
const Div1 = styled.div`
display:flex;
flex-direction: column;
`;
const PostText = styled.div`
min-height: 50px;
max-height: 200px;
margin-top:8px;
width: 511px;
word-wrap: break-word;
h1{
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;

    color: #B7B7B7;
}

`;
const PostBox = styled.div`
    display:flex;
    width: 611px;
    height: 22  9px;
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
    width: 505px;
    color: ${white};
`;
const MetadataBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding: 8px;
  background: #171717;
  border-radius: 8px;
  box-sizing: border-box;
  border: 1px solid #4D4D4D;
    border-radius: 11px;
  h3{
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    color: #CECECE;
  }
  h2{
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;

    color: #CECECE;

  }
  p{
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    
    color: #9B9595;
  }
  img{
    width: 153px;
    height: 155px;
  }
  a{
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;

    color: #CECECE;

  }
`;