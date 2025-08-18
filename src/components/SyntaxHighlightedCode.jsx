import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-cpp';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup'; // HTML

const SyntaxHighlightedCode = ({ code, language = 'javascript' }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code, language]);

  return (
    <pre className="bg-slate-900/50 rounded-xl p-4 text-sm text-gray-300 overflow-x-auto border border-white/10 font-mono leading-relaxed whitespace-pre-wrap">
      <code className={`language-${language}`}>
        {code}
      </code>
    </pre>
  );
};

export default SyntaxHighlightedCode;
