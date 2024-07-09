import Board from "./Board";
import Info from "./Info";
import "./App.css";
import { useState } from "react";

function App() {
    const [reset, useReset] = useState(false);
    const [winner, setWinner] = useState("");

    const resetBoard = () => {
        setReset(true);
    };

    return (
        <div className="App">
            <div className={`winner ${
                winner !== "" ? "" : "shrink"
            }`}>
                <div className="winner-text">{winner}</div>
                <button onClick={() => resetBoard()}>RESET</button>
            </div>
            <Board
                reset = {reset}
                setReset = {setReset}
                winner = {winner}
                setWinner = {setWinner}
            />
        </div>
    );
};

export default App;