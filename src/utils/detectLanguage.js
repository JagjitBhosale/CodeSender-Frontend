export const detectLanguage = (code) => {
  const trimmedCode = code.trim().toLowerCase();
  
  // JavaScript/TypeScript
  if (trimmedCode.includes('function') || trimmedCode.includes('const ') || trimmedCode.includes('let ') || trimmedCode.includes('var ') || trimmedCode.includes('=>') || trimmedCode.includes('import ') || trimmedCode.includes('export ')) {
    return trimmedCode.includes('interface ') || trimmedCode.includes(': string') || trimmedCode.includes(': number') ? 'typescript' : 'javascript';
  }
  
  // Python
  if (trimmedCode.includes('def ') || trimmedCode.includes('import ') || trimmedCode.includes('from ') || trimmedCode.includes('print(') || trimmedCode.includes('if __name__')) {
    return 'python';
  }
  
  // Java
  if (trimmedCode.includes('public class') || trimmedCode.includes('public static void main') || trimmedCode.includes('System.out.println')) {
    return 'java';
  }
  
  // C/C++
  if (trimmedCode.includes('#include') || trimmedCode.includes('int main') || trimmedCode.includes('printf') || trimmedCode.includes('cout')) {
    return trimmedCode.includes('cout') || trimmedCode.includes('std::') ? 'cpp' : 'c';
  }
  
  // HTML
  if (trimmedCode.includes('<!doctype') || trimmedCode.includes('<html') || trimmedCode.includes('<div') || trimmedCode.includes('<p>')) {
    return 'html';
  }
  
  // CSS
  if (trimmedCode.includes('{') && trimmedCode.includes('}') && (trimmedCode.includes(':') && trimmedCode.includes(';'))) {
    return 'css';
  }
  
  // SQL
  if (trimmedCode.includes('select ') || trimmedCode.includes('insert ') || trimmedCode.includes('update ') || trimmedCode.includes('delete ')) {
    return 'sql';
  }
  
  // JSON
  if ((trimmedCode.startsWith('{') && trimmedCode.endsWith('}')) || (trimmedCode.startsWith('[') && trimmedCode.endsWith(']'))) {
    try {
      JSON.parse(code);
      return 'json';
    } catch {}
  }
  
  return 'text';
};