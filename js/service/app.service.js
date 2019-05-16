app.service('searchService', function ($http, authService) {
  self = this;

  var _BASE_URL = "https://gateway.marvel.com/v1/public/characters";

  self.getCharacters = function (input) {

    return $http.get(_BASE_URL, {
      params: {
        limit: 100,
        nameStartsWith: input,
        hash: authService.getHash(),
        ts: authService.getTimestamp(),
        apikey: authService.getPublicKey()
      }
    }).then(function (response) {
      return response.data;
    })
      .catch(function (error) {
        console.error(error.data.code + ' : ' + error.data.message);
        return null;
      });

  }
});