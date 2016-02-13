"use strict";

var testFunction = function () {
  var searchResults, validSearchResults, index, docs;
  index = lunr(function () {
    this.field('title', { boost: 10 });
    this.field('body');
    this.ref('_id');
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
  // searchResultsExample = [
  //   {ref: 'BFKiHBsLBrPhpqEr2', score: Number},
  //   {ref: 'XsnYS6DaxcBFMvbrB', score: Number}
  // ];
  return searchResults.length === 2;
};

Tinytest.add('lunr', function (test) {
  test.isTrue(testFunction(), 'basic lunr test');
  test.equal(lunr.version, '0.6.0');
});
