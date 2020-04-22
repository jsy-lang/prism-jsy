export default function(Prism) {
  const plang = Prism.languages
  if (! plang.javascript)
    throw new Error('Prism jsy depends upon javascript definition')

  const jsy = plang.jsy = {
    'jsy-function': {
      greedy: true, alias: 'function',
      pattern: /(?:@=>|@::|@\\)[^\w\s]*/ },

    'jsy-iife': {
      greedy: true, alias: 'function',
      pattern: /(?:@!|@\*|::!)[^\w\s]*/ },

    'jsy-fold': {
      greedy: true, alias: 'operator',
      pattern: /;([-+*\/%^<>&|!?=,.:]+)/ },

    'jsy-block': {
      greedy: true, alias: 'operator',
      pattern: /::[^\w\s]*/ },

    'jsy-at': {
      greedy: true, alias: 'operator',
      pattern: /(?:@|\?@)[^\w\s]*/ },

    'jsy-preprocessor': {
      greedy: true, alias: 'macro property',
      pattern: /^\s*#\s*\w+.*$/m,
      inside: {
        'keyword': {
          pattern: /(^\s*#\s*)\w+/m,
          lookbehind: true,
          greedy: true,
        }
      }
    },

    ... plang.extend('javascript')
  }


  if (plang.markup)
    plang.markup.tag.addInlined('jsy-script', 'jsy')
}
