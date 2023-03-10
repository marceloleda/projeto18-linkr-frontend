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
                    <img src={post.picture_url} alt="profile"/>
                </ImgProfile>
                <ConteinerPost>
                    <h2>{post.username}</h2>
                    <PostText>
                    <h1>{post.description}</h1>
                    {post.metadata && (
                        <MetadataBox>
                        <a href={post.metadata.url} target="_blank" rel="noreferrer">
                            <img src={post.metadata.image} alt="metadata"/>
                            <div>
                            <h3>{post.metadata.title}</h3>
                            <p>{post.metadata.description}</p>
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
<<<<<<< Updated upstream:src/pages/timeline/Timeline_posts.js
=======
`;
const MetadataBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  padding: 8px;
  background-color: #1c1c1c;
  border-radius: 8px;
  box-sizing: border-box;
>>>>>>> Stashed changes:src/pages/timeline/TimelinePosts.js
`;