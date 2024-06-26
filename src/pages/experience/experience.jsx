import React, { useState } from "react";
import "./experience.css";

const Experience = () => {
  const experiences = [
    {
      label: "Junior Developer at CodeFactory",
      description:
        "Assisted in developing web applications and debugging software issues. Gained experience in full-stack development using modern technologies.",
      duration: "July 2016 - December 2017",
    },
    {
      label: "Intern at StartUp Inc.",
      description:
        "Worked on various software development projects, focusing on front-end development and user interface design. Participated in code reviews and team meetings.",
      duration: "June 2015 - June 2016",
    },
  ];

  const [commandHistory, setCommandHistory] = useState([]);
  const [theme, setTheme] = useState("dark");
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleButtonClick = (action) => {
    switch (action) {
      case "close":
        console.log("Close button clicked");
        break;
      case "minimize":
        console.log("Minimize button clicked");
        break;
      case "expand":
        console.log("Expand button clicked");
        break;
      default:
        break;
    }
  };

  const handleCommandSuggestion = (command) => {
    console.log(`Command suggested: ${command}`);
    setCommandHistory([...commandHistory, command]);

    // Perform action based on command (for demonstration, update feedback message)
    switch (command) {
      case "projects":
        setFeedbackMessage("List of projects will be displayed here.");
        break;
      case "skills":
        setFeedbackMessage("Skills overview will be displayed here.");
        break;
      case "about":
        setFeedbackMessage("Information about the user or application will be displayed here.");
        break;
      default:
        setFeedbackMessage(`Command not found: '${command}'`);
        break;
    }
  };

  const handleUserInput = (event) => {
    if (event.key === "Enter") {
      const userInput = event.target.textContent.trim();
      event.target.textContent = ""; // Clear input area after pressing Enter
      handleCommandSuggestion(userInput);
    }
  };

  return (
    <div className={`experience-container ${theme === "dark" ? "dark-theme" : "light-theme"}`}>
      <div className="terminal">
        <div className="terminal-header">
          <div className="circle red" onClick={() => handleButtonClick("close")}></div>
          <div className="circle yellow" onClick={() => handleButtonClick("minimize")}></div>
          <div className="circle green" onClick={() => handleButtonClick("expand")}></div>
        </div>
        <div className="terminal-body">
          <div className="experience-list">
            {experiences.map((experience, index) => (
              <div className="experience-item" key={index}>
                <h3 className="experience-label">{experience.label}</h3>
                <p className="experience-description">{experience.description}</p>
                <p className="experience-duration">{experience.duration}</p>
              </div>
            ))}
          </div>
          <div className="cli-prompt">
            <span className="cli-user">user@terminal:</span>
            <span
              className="cli-input"
              contentEditable
              onKeyDown={handleUserInput}
              onBlur={(e) => (e.target.textContent = "")}
            ></span>
          </div>
          <div className="cli-suggestions">
            <span className="suggestion" onClick={() => handleCommandSuggestion("projects")}>
              projects
            </span>
            <span className="suggestion" onClick={() => handleCommandSuggestion("skills")}>
              skills
            </span>
            <span className="suggestion" onClick={() => handleCommandSuggestion("about")}>
              about
            </span>
          </div>
          <div className="cli-feedback">
            <span className="error-message">{feedbackMessage}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
