import React, { useEffect, useState } from "react";
import contentfulClient from "../../Helpers/contentfulClient";
import Highlight from "react-highlight";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import "./codeviewer.css";

const CodeViewer = () => {
  const [snippets, setSnippets] = useState([]);

  useEffect(() => {
    const fetchCodeSnippets = async () => {
      try {
        const response = await contentfulClient.getEntries({
          content_type: "codeSnippet",
        });
        setSnippets(response.items);
      } catch (error) {
        console.error("Error fetching code snippets:", error);
      }
    };
    fetchCodeSnippets();
  }, []);

  return (
    <div className="code-page-container scrollbar">
      <h1>// Useful code snippets:</h1>
      {snippets && snippets.map((entry) => <CodeCard entry={entry} />)}
    </div>
  );
};

export default CodeViewer;

export const CodeCard = ({ entry }) => {
  const [explanationVisible, setExplanationVisible] = useState(false);

  const toggleExplanation = () => setExplanationVisible(!explanationVisible);

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header__title">
          <h2>{entry.fields.title}</h2>
          <p>{entry.fields.dateCreated}</p>
        </div>
        <div>
          <button className="btn" onClick={toggleExplanation}>
            _details
          </button>
        </div>
      </div>

      <pre>
        <Highlight>{entry.fields.code}</Highlight>
      </pre>

      {explanationVisible && (
        <>
          <hr />
          <div className="card__explanation">
            <p>{documentToReactComponents(entry.fields.explanation)}</p>
          </div>
        </>
      )}
    </div>
  );
};
