// Terminal.js

import React, { useState } from "react";
import "./terminal.css"; // Import your terminal.css for styling

const Terminal = ({ onCommandSubmit }) => {
  const [command, setCommand] = useState("");
  const [commandHistory, setCommandHistory] = useState([]); // Define commandHistory state
  
  // Handle command input change
  const handleChange = (e) => {
    setCommand(e.target.value);
  };

  // Handle command form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    onCommandSubmit(command);
    setCommandHistory([...commandHistory, command]); // Update commandHistory with new command
    setCommand("");
  };

  return (
    <div className="terminal">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={command}
          onChange={handleChange}
          placeholder="Enter command..."
          autoFocus
        />
        <button type="submit">Run</button>
      </form>
      <div className="terminal-output">
        {/* Display command history */}
        {commandHistory.map((cmd, index) => (
          <div key={index} className="output">
            <span className="prompt">$</span> {cmd}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Terminal;
