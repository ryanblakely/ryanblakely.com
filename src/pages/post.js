import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';

// import { Header, NewsletterSignup, Footer, BottomNav } from '../components';

const Post = (props) => {
    const [postId, setPostId] = useState(null);
    const [post, setPost] = useState(null);

    // read url params
    let params = useParams();
    console.log(params.postId);

    useEffect(() => {
        if (params.postId && !postId) {
            setPostId(params.postId);
        }
    }, [params]);

    // get post with those params
    useEffect(() => {
        const fetchData = async () => {
            // let post = await import(`../posts/${postId}.md`);
            let post = await import(`../posts/${postId}.md`);
            console.log(post);

            let response = await fetch(post.default);
            console.log(response);

            let text = await response.text();
            console.log(text);
            setPost(text);

            // let compiledPost = await compile(post);
            // console.log(compiledPost);
            // setPost(compiledPost);
        };

        if (postId) {
            fetchData();
        }
    }, [postId]);

    // display post data
    return (
        <React.Fragment>
            <div className='Page'>
                <header>
                    <Link to='/'>R</Link>
                    <Link to='/'>Projects</Link>
                    <Link to='/about'>About</Link>
                </header>

                {post && (
                    <main>
                        <div className='post'>
                            <Markdown children={post}></Markdown>
                        </div>
                    </main>
                )}
            </div>
        </React.Fragment>
    );
};

export default Post;
