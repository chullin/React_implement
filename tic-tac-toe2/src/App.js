// import logo from './logo.svg'; - 導入 logo.svg 圖片，並將其作為變數 logo 使用。
import logo from './logo.svg';
import './App.css';

// 這段代碼定義了一個名為 App 的 React 元件。該元件返回一個 JSX（類似於 HTML）的結構
function App() {
  return (
    // <div className="App"> 是一個包含所有應用程式內容的最外層容器，它使用了 App.css 中定義的 .App 樣式
    <div className="App">
      
      {/* 這一行定義了頁首標籤 <header>，並將其樣式設置為 .App-header（在 App.css 中定義） */}
      <header className="App-header">

        {/* 這一行渲染了一個圖片標籤 <img>，其來源是之前導入的 logo.svg。圖片的樣式類為 App-logo，並且設置了替代文字 alt 為 "logo"。 */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        {/* 這段代碼渲染了一個超連結 <a>，其樣式類為 App-link。 */}
        <a
          className="App-link"
          href="https://reactjs.org"

          // 該連結指向 React 的官方網站，並在新標籤頁中打開（target="_blank"）。rel="noopener noreferrer" 是用來提高安全性，防止可能的釣魚攻擊。
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// 這一行將 App 元件設置為默認導出，使得它可以在其他文件中被導入和使用。
export default App;
