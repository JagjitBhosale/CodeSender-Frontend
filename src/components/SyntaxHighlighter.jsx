const SyntaxHighlighter = ({ code, language }) => {
  const highlightCode = (code, lang) => {
    // Only escape HTML if it's not already escaped
    let highlighted = code;
    if (!code.includes('&lt;') && !code.includes('&gt;') && !code.includes('&amp;')) {
      highlighted = code
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');
    }

    // Comments (highest priority)
    const commentPatterns = {
      javascript: /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm,
      typescript: /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm,
      python: /(#.*$)/gm,
      java: /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm,
      cpp: /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm,
      c: /(\/\/.*$|\/\*[\s\S]*?\*\/)/gm,
      html: /(&lt;!--[\s\S]*?--&gt;)/g,
    };

    // Strings
    const stringPatterns = {
      javascript: /(["'`])([^"'`]*?)\1/g,
      typescript: /(["'`])([^"'`]*?)\1/g,
      python: /(["'])([^"']*?)\1/g,
      java: /(["'])([^"']*?)\1/g,
      cpp: /(["'])([^"']*?)\1/g,
      c: /(["'])([^"']*?)\1/g,
    };

    // Keywords
    const keywordPatterns = {
      javascript: /\b(function|const|let|var|if|else|for|while|return|import|export|class|extends|async|await|try|catch|finally|true|false|null|undefined)\b/g,
      typescript: /\b(function|const|let|var|if|else|for|while|return|import|export|class|extends|async|await|try|catch|finally|interface|type|enum|true|false|null|undefined)\b/g,
      python: /\b(def|class|if|else|elif|for|while|return|import|from|try|except|finally|with|as|lambda|yield|True|False|None)\b/g,
      java: /\b(public|private|protected|static|final|class|interface|extends|implements|if|else|for|while|return|try|catch|finally|new|this|super|true|false|null)\b/g,
      cpp: /\b(int|float|double|char|bool|void|if|else|for|while|return|class|public|private|protected|virtual|static|const|include|namespace|using|true|false|NULL)\b/g,
      c: /\b(int|float|double|char|void|if|else|for|while|return|static|const|include|true|false|NULL)\b/g,
    };

    // Apply highlighting
    if (commentPatterns[lang]) {
      highlighted = highlighted.replace(commentPatterns[lang], '<span class="text-gray-500 italic">$1</span>');
    }

    if (stringPatterns[lang]) {
      highlighted = highlighted.replace(stringPatterns[lang], '<span class="text-green-400">$1$2$1</span>');
    }

    if (keywordPatterns[lang]) {
      highlighted = highlighted.replace(keywordPatterns[lang], '<span class="text-blue-400 font-semibold">$1</span>');
    }

    // Numbers
    highlighted = highlighted.replace(/\b(\d+\.?\d*)\b/g, '<span class="text-orange-400">$1</span>');

    // HTML specific highlighting
    if (lang === 'html') {
      highlighted = highlighted.replace(/(&lt;\/?[a-zA-Z][a-zA-Z0-9]*[^&]*?&gt;)/g, '<span class="text-blue-400">$1</span>');
    }

    // CSS specific highlighting
    if (lang === 'css') {
      highlighted = highlighted.replace(/([a-zA-Z-]+)(\s*:\s*)([^;]+)(;)/g, '<span class="text-blue-400">$1</span>$2<span class="text-green-400">$3</span>$4');
    }

    return highlighted;
  };

  return (
    <pre className="bg-slate-900/50 rounded-xl p-4 text-sm text-gray-300 overflow-x-auto border border-white/10 font-mono leading-relaxed whitespace-pre-wrap">
      <code dangerouslySetInnerHTML={{ __html: highlightCode(code, language) }} />
    </pre>
  );
};

export default SyntaxHighlighter;