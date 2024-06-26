import React from "react";
import MonacoEditor from "react-monaco-editor";
import "./homepage.css";
import ImageUrl from "../assets/profile_pic_.png";

export default function Homepage() {
  const editorOptions = {
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: true,
    cursorStyle: "line",
    automaticLayout: true,
  };

  const codeSnippet = `// Welcome to my homepage!
 String greetings = "Hi, I'm a Software Developer";
 String introduction = "With a passion for coding and problem-solving,
                "I specialize in creating dynamic and responsive web applications.
                "My skill set includes JavaScript, React, Node.js, and more."
                "I'm always eager to learn new technologies 
                and take on new challenges.";

System.out.println(greetings);
System.out.println(introduction);
`;

  return (
    <>
      <div className="homepage-container">
        <div className="editor-pane">
          <div className="editor-header">
            <div className="editor-controls">
              <span className="editor-control close"></span>
              <span className="editor-control minimize"></span>
              <span className="editor-control maximize"></span>
            </div>
          </div>
          <div className="editor-content">
            <MonacoEditor
              language="javascript"
              theme="vs-dark"
              value={codeSnippet}
              options={editorOptions}
              height="400"
            />
          </div>
        </div>

        <div className="profile-container">
          <img className="profile-picture" src={ImageUrl} alt="Profile" />
        </div>
      </div>
    </>
  );
}
