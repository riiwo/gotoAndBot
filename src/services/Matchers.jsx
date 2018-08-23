export function stringMatcher(input, array) {
  const pattern ='((?<=\\W)|(?<=\\d)|^)(' + array.join('|') + ')(?!=\\W+)';
  let matches = input.match(new RegExp(pattern, 'gi'));
  return matches || [];
}

export function numberMatcher(input) {
  const pattern = /\d+/gi;
  let matches = input.match(pattern);
  return matches || [];
}

export function anyMatcher(input, string) {
  const pattern = '[' + string + ']';
  let matches = input.match(new RegExp(pattern, 'gi'));
  return matches || [];
}

export function nextMatcher(input, string) {
  const pattern = '(?<=' + string + '\\s)([^\\s]+)';
  let matches = input.match(new RegExp(pattern, 'gi'));
  return matches || [];
}
