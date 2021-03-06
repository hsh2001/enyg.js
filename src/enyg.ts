import hangulDecompose from './hangulDecompose';

const target = [
  ['은', '는'],
  ['이', '가'],
  ['을', '를'],
  ['과', '와'],
] as const;

function enyg(str: string): string {
  target.forEach((selector) => {
    const query = `[${selector.join('|')}]`;
    while (str.includes(query)) {
      const prevCharIndex = str.indexOf(query) - 1;
      const prevChar = str[prevCharIndex] || '';
      const result = hangulDecompose(prevChar).jongsung
        ? selector[0]
        : selector[1];
      str = str.replace(query, result);
    }
  });
  return str;
}

export default enyg;
