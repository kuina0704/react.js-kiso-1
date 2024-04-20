import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';


export const Post = () => {
    const {postId} = useParams();
    const { state } = useLocation();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      fetch(`https://railway.bulletinboard.techtrain.dev/threads/${postId}/posts`)
      .then(res => res.json())
      .then(data => {setPosts(data)})
      .catch(() => {alert("error")})
      }, [postId]
    );

// 質問３　station4部分
// fetch関数でuseParamsに連動したデータは取得できていそう
// map関数での広げ方が理解が追い付かない
// 現在は配列の中の"threadId"と"posts"を取得し、表示できている？
// ２つ目が空
// "posts"の中に配列があって、更に"id""post"のオブジェクト
// "post"を表示させたいが、調べても答えが見つからず
// →　そもそもmap関数の当て方が違う？
// 方向性は合ってますか？根本的に取得の方法が違う？

    return(
        <>
            <h2>{posts.threadId}</h2>
            <h2>{state}</h2>
            <ul>
                { Object.keys(posts).map((key) => (
                    <li className='bg-white border border-gray-950 p-1 m-1'>{posts[key]}</li>
                )) }
            </ul>
        </>
    )
} 