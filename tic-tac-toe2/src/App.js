import React, { useState } from 'react';                // 從 React 中導入了 React 和 useState。useState 是 React 的一個 Hook，用來管理狀態。
import { ThemeProvider } from 'styled-components';      // 從 styled-components 庫中導入 ThemeProvider。ThemeProvider 是一個高階元件，用來為應用提供全局主題。
import TicTacToe2 from './TicTacToe2';                  // 導入 TicTacToe2 元件，這可能是一個井字棋遊戲的元件。
import themes from './themes';                          // 導入主題文件 themes，其中包含不同的樣式主題。


// 這一行代碼取得主題文件中的第一個主題，並將其設置為默認主題。Object.keys(themes) 會返回 themes 物件中的所有鍵（主題名稱），[0] 取得第一個主題名稱。
const defaultTheme = Object.keys(themes)[0];

// 這部分代碼定義了一個函數式元件 App，並使用 useState Hook 來管理 selectedTheme 狀態
const App = () => {
    // selectedTheme:  是當前選擇的主題名稱
    // setSelectedTheme:  是一個函數，是更新主題的函數
    // useState(defaultTheme): 將初始主題設置為前面取得的 defaultTheme
    const [selectedTheme, setSelectedTheme] = useState(defaultTheme);

    //這部分代碼返回應用程式的 JSX 結構
    return (
        // 使用 ThemeProvider 包裹應用，並將選擇的主題（themes[selectedTheme]）作為 theme 屬性傳入。這樣，所有內部的元件都能根據這個主題進行樣式設置。
        <ThemeProvider theme={themes[selectedTheme]}>
            {/* 渲染 TicTacToe2 元件，並傳遞兩個屬性 */}
            <TicTacToe2
                selectedTheme={selectedTheme}           // 當前選擇的主題名稱
                setSelectedTheme={setSelectedTheme}     // 用於更新選擇的主題。當用戶切換主題時，這個函數會被調用。
            />
        {/* 關閉 ThemeProvider，這意味著所有子元件都可以使用這個主題 */}
        </ThemeProvider>
    );
};

export default App;
