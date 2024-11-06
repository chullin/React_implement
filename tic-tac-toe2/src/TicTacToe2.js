// TicTacToe.js
import React, { useState } from 'react';
import styled from 'styled-components';


// 定義棋盤的樣式
const Board = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 5px;
    justify-content: center;
    align-items: center;
`;

// 新增背景樣式
const Background = styled.div` 
    background: ${(props) => props.theme.background}; 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`;

const Cell = styled.button`
    width: 100px;
    height: 100px;
    font-size: 2rem;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    border: 2px solid ${({ theme }) => theme.border};
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }) => theme.hover};
    }
`;

const TicTacToe = ({ selectedTheme, setSelectedTheme }) => {
    const [board, setBoard] = useState(Array(9).fill(null)); // 棋盤初始狀態
    const [xIsNext, setXIsNext] = useState(true); // 設置X或O的順序
    const winner = calculateWinner(board); // 計算勝利者

    const handleClick = (index) => {
        if (winner || board[index]) return; // 如果已經有勝利者或該格子被佔據，則返回
        const newBoard = [...board];
        newBoard[index] = xIsNext ? 'X' : 'O';
        setBoard(newBoard);
        setXIsNext(!xIsNext);
    };

    return (
        <Background>
            <h1>Tic Tac Toe</h1>
            <p>Theme: {selectedTheme}</p>
            <Board>
                {board.map((value, index) => (
                    <Cell key={index} onClick={() => handleClick(index)}>
                        {value}
                    </Cell>
                ))}
            </Board>
            <div>
                {winner ? <p>Winner: {winner}</p> : <p>Next Player: {xIsNext ? 'X' : 'O'}</p>}
            </div>
        </Background>
    );
};

// 計算遊戲是否有勝利者
function calculateWinner(board) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

export default TicTacToe;
