import { useState } from "react";
import { Link } from "react-router-dom";

export const ThreadNew = () => {

  const [title, setTitle] = useState([]);
  // const [createThread, setCreateThread] = useState([]);

  const onChange = (e) => {
    setTitle(e.target.value)
  }

  // 質問１　station3部分
  // fetchでのPOST通信
  // デベロッパーツールでコンソールやネットワーク確認
  // サーバーへ送信できずに止まっている
  // 方向性はあっているか？
  // onChangeでフォーム内の内容を取得（setTitle）
  // →　useStateでのtitleをfetchの第２引数で渡す
  // →　以上のfetch関数はクリックで発火するように関数でまとめて（createThreadButton）onClick

  const createThreadButton = () => {
    fetch("https://railway.bulletinboard.techtrain.dev/threads", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(title) 
    })
    .then(res => res.json())
    .then(data => console.log(data)) //確認作業　POST通信確認出来たら削除？
    .catch(() => alert("error")) 
  }


  return (
    <>
      <h2>スレッド新規作成</h2>
      <form action="">
        <input type="text" placeholder="スレッドタイトル" onChange={onChange}/>
      </form>
      <Link to="/">TOPに戻る</Link>
      <button onClick={createThreadButton}>作成</button>
    </>
  );
      
}