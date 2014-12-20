// lunr.js makes `lunr` global on the window (or global) object,
// while Meteor expects a file-scoped global variable
lunr = this.lunr;
delete this.lunr;
