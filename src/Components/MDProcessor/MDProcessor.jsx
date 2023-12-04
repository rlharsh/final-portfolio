import React, { useContext, useEffect, useRef, useState } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/night-owl.css";
import { DataSet } from "../../Providers/SectionProvider";
import Markdown from "marked-react";

const MDProcessor = ({ sectionName, title }) => {
  const [markdownContent, setMarkdownContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [codeShowing, setCodeShowing] = useState(true);

  const codeRef = useRef();

  useEffect(() => {
    async function fetchMarkdown() {
      setLoading(true);
      try {
        const response = await fetch(`/MD/${sectionName}/${title}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        setMarkdownContent(`Failed to load content: ${error.message}`);
      } finally {
        setLoading(false);
      }
    }

    fetchMarkdown();
  }, [sectionName, title]);

  useEffect(() => {
    if (codeShowing && codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [codeShowing, markdownContent]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const toggleCode = () => {
    setCodeShowing((prevState) => !prevState);
  };

  return (
    <div className="code-block-container">
      <div className="code-block-container__header">
        <h1>
          <i className="ri-code-line"></i> {title}
        </h1>
      </div>
      {codeShowing ? (
        <pre>
          <code ref={codeRef} className="hljs md code-block">
            {markdownContent}
          </code>
        </pre>
      ) : (
        <div className="markdown-content">
          <Markdown>{markdownContent}</Markdown>
        </div>
      )}
      <div className="code-footer">
        <button onClick={toggleCode} className="btn">
          Toggle Code
        </button>
      </div>
    </div>
  );
};

export default MDProcessor;
