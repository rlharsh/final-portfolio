import React, { useContext, useEffect, useRef, useState } from "react";
import hljs from "highlight.js";

import "highlight.js/styles/night-owl.css";
import { DataSet } from "../../Providers/SectionProvider";

const MDProcessor = ({ sectionName, title }) => {
  const [markdownContent, setMarkdownContent] = useState("");
  const [loading, setLoading] = useState(true);

  const { subSection } = useContext(DataSet);

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

  const renderedContent = markdownContent.split("\n").map((line, index) => (
    <pre key={index}>
      <code>{line}</code>
    </pre>
  ));

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="code-block-container">
      <div className="code-block-container__header">
        <h1>
          <i class="ri-code-line"></i>
          {title}
        </h1>
        <button className="button button--clear">
          <i className="ri-clipboard-fill"></i>
        </button>
      </div>
      {/* The pre and code tags are used here to encapsulate the fetched Markdown content */}
      <pre>
        <code ref={codeRef} className="hljs md code-block">
          {markdownContent}
        </code>
      </pre>
    </div>
  );
};

export default MDProcessor;
