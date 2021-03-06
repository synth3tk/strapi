'use strict';

const slugify = require('@sindresorhus/slugify');

const nameToSlug = name => slugify(name, { separator: '-' });

const nameToCollectionName = name => slugify(name, { separator: '_' });

const getCommonBeginning = (str1 = '', str2 = '') => {
  let common = '';
  let index = 0;
  while (index < str1.length && index < str2.length) {
    if (str1[index] === str2[index]) {
      common += str1[index];
      index += 1;
    } else {
      break;
    }
  }
  return common;
};

const escapeQuery = (query, charsToEscape, escapeChar = '\\') => {
  return query
    .split('')
    .reduce(
      (escapedQuery, char) =>
        charsToEscape.includes(char)
          ? `${escapedQuery}${escapeChar}${char}`
          : `${escapedQuery}${char}`,
      ''
    );
};

module.exports = {
  nameToSlug,
  nameToCollectionName,
  getCommonBeginning,
  escapeQuery,
};
