import { Link } from "react-router-dom";

// 質問２→解決？　station3部分
// mapで取得したthread.titleをpostに渡したい
// 見本figmaでのthread（今回自分はファイル名post）のheader下のタイトル
// 今、思いついたのですが、Linkタグでprops渡せる？
// 面談までに間に合えばコード書いてみます！

export const Home = (props) => {
    const {threads} = props;

    return(
        <>
            <main className='flex flex-col items-center bg-slate-100'>
                <h2>新着スレッド</h2>
                <ul>
                    { threads.map((thread, index) => (
                        <Link to={`/Components/threads/${index+1}`} key={thread.id} >
                            <li>{index+1}</li>
                            <li className='bg-white border border-gray-950 p-1 m-1'>{thread.title}</li>
                        </Link>
                    )) }
                </ul>
            </main>
        </>
    )  
}