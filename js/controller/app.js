var app = angular.module('marvelAPI', []);

app.controller('MainCtrl', function (searchService) {

  self = this;

  self.charList = {};

  this.getCharacters = function (input) {
    if (input) {
      searchService.getCharacters(input)
        .then(function (response) {
          self.charList = response.data.results;
        })
    }
    return;
  };

  this.open = function (char) {
    if (char.expanded == true) {
      char.expanded = false;
    }
    else {
      char.expanded = true;
    }
  };

});