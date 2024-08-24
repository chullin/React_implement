// render：負責將 React 元件渲染到虛擬的 DOM 中，這樣可以在測試中進行操作。
// screen：提供了許多查找已渲染元素的方法，如 getByText、getByRole 等。
import { render, screen } from '@testing-library/react';

// import App from './App'; - 導入 App 元件，這是測試的目標。
import App from './App';

// test('renders learn react link', () => { ... }); - 定義一個測試用例。
// 第一個參數 'renders learn react link' 是測試的描述，第二個參數是一個測試函數。
test('renders learn react link', () => {

  // render(<App />); - 使用 render 函數渲染 App 元件，這樣可以在測試環境中操作該元件的 DOM。
  render(<App />);

  // const linkElement = screen.getByText(/learn react/i); - 使用 screen.getByText 查找包含 "learn react" 字樣的元素。/learn react/i 是正則表達式，i 表示不區分大小寫。
  const linkElement = screen.getByText(/learn react/i);
  
  // expect(linkElement).toBeInTheDocument(); - 使用 expect 進行斷言。這裡的斷言是檢查 linkElement 是否存在於文檔中，這確保了頁面正確渲染了 "learn react" 連結。
  expect(linkElement).toBeInTheDocument();
});




/* 
測試運行時的流程：
1. 測試用例渲染了 App 元件。
2. 測試查找頁面中是否有 "learn react" 的連結。
3. 如果該連結存在於頁面中，測試通過；如果不存在，測試失敗。
*/