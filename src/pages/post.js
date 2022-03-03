import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Markdown from 'markdown-to-jsx';
import { Navigation } from '../components';
import '../styling/post.css';

const Post = (props) => {
    const [postId, setPostId] = useState(null);
    const [post, setPost] = useState(null);

    // read url params
    let params = useParams();

    useEffect(() => {
        if (params.postId && !postId) {
            setPostId(params.postId);
        }
    }, [params, postId]);

    // get post with those params
    useEffect(() => {
        const fetchData = async () => {
            let post = await import(`../posts/${postId}.md`);

            let response = await fetch(post.default);

            let text = await response.text();
            setPost(text);
        };

        if (postId) {
            fetchData();
        }
    }, [postId]);

    return (
        <React.Fragment>
            <div className='Page'>
                <Navigation></Navigation>

                {post && (
                    <main>
                        <Markdown children={post} options={{ wrapper: 'article' }}></Markdown>
                    </main>
                )}
            </div>
        </React.Fragment>
    );
};

export default Post;
