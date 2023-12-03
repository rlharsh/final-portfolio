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
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(`/MD/${sectionName}/${title}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        setMarkdownContent(text);
      } catch (error) {
        console.error(`Failed to load markdown file: ${error}`);
        setMarkdownContent("Failed to load content.");
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdown();
  }, [sectionName, title]);

  useEffect(() => {
    if (codeRef.current) {
      // Remove the class and data attribute to avoid the error
      codeRef.current.classList.remove("hljs");
      delete codeRef.current.dataset.highlighted;

      // Apply highlighting
      hljs.highlightElement(codeRef.current);
    }
  }, [markdownContent]); // Depend on markdownContent

  useEffect(() => {
    // Only attempt to highlight if codeShowing is true and the code block is mounted in the DOM
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
          <i className="ri-code-line"></i>
          {title}
        </h1>
        <button className="button button--clear">
          <i className="ri-clipboard-fill"></i>
        </button>
      </div>
      {/* This pre and code block is for displaying code, if needed */}
      {codeShowing && (
        <pre>
          <code ref={codeRef} className="hljs md code-block">
            {markdownContent}
          </code>
        </pre>
      )}
      {/* This div is for displaying rendered markdown content */}
      {!codeShowing && (
        <div className="markdown-content">
          <Markdown>{markdownContent}</Markdown>
        </div>
      )}
      <div className="code-footer">
        <button onClick={toggleCode} className="button button--clear">
          {codeShowing ? "Show Rendered Content" : "Show Code"}
        </button>
      </div>
    </div>
  );
};

export default MDProcessor;
