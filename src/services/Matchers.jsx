export function stringMatcher(input, array) {
  const pattern ='((?<=\\W*)|(?<=\\d*)|^)(' + array.join('|') + ')((?!=\\W*)|(?<=\\d*))';
  let matches = input.match(new RegExp(pattern, 'gi'));
  return matches || [];
}

export function numberMatcher(input) {
  const pattern = /(\d+\.*\d*)/gi;
  let matches = input.replace(',', '.').match(pattern);
  return matches || [];
}

export function anyMatcher(input, string) {
  const pattern = '[' + string + ']';
  let matches = input.match(new RegExp(pattern, 'gi'));
  return matches || [];
}

export function nextMatcher(input, string) {
  const pattern = '(?<=' + string + '\\s)(([A-Z]\\w*)(\\s+([A-Z]\\w*))*)';
  let matches = input.match(new RegExp(pattern, 'g'));
  console.log(matches);
  return matches || [];
}
