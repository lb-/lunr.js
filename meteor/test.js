"use strict";

var testFunction = function () {
  var searchResults, validSearchResults, index, doc;
  index = lunr(function () {
    this.field('title', { boost: 10 });
    this.field('body');
  });
  docs = [
    {
      title: 'Lonely Soldier',
      body: 'This is lonely soldier, help!',
      author: 'Manny',
      _id: 'BFKiHBsLBrPhpqEr2',
    },
    {
      title: 'Soldier',
      body: 'The word soldier can be defined as a soldier soldier',
      author: 'Joe',
      _id: 'XsnYS6DaxcBFMvbrB',
    }
  ];
  _.each(docs, function (doc) {
    index.add(doc);
  });
  searchResults = index.search('soldier');
  validSearchResults = [
    {ref: 'BFKiHBsLBrPhpqEr2', score: 0.3},
    {ref: 'XsnYS6DaxcBFMvbrB', score: 0.9}
  ];
  console.log(searchResults, validSearchResults);
  return searchResults === validSearchResults;
};


Tinytest.add('lunr', function (test) {
  test.ok(testFunction(), {message: 'basic lunr test'});
});
