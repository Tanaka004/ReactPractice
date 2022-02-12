import "./styles.css";
import ReactDOM from "react-dom";
import { useState } from "react";
import { useEffect } from "react";

export default function App() {
  // ステート
  const [num, setNum] = useState(0); // ステート初期化

  // エフェクト（副作用制御）
  useEffect(() => {
    alert("useEffect");
  }, [num]);

  // ボタン関数
  const Button = (props) => {
    const contentStyle = {
      color: props.color,
      fontSize: props.fontSize,
      message: props.message
    };
    // ボタンクリックイベント
    const onClickButton = () => {
      alert(props.message);
      setNum((prev) => prev + 1);
    };

    return (
      <button style={contentStyle} onClick={onClickButton}>
        {props.children}
      </button>
    );
  };

  // タグ関数
  const H1 = (props) => {
    // 分割代入
    const { color, fontSize, children } = props;
    const contentStyle = {
      color: color,
      fontSize: fontSize
    };

    return <h1 style={contentStyle}>{children}</h1>;
  };

  // メイン

  return (
    <div className="App">
      <H1>タイトル</H1>
      <Button message="アラートメッセージ" fontSize="30px">
        NO
      </Button>
      <H1>{num}</H1>
    </div>
  );
}
