app.service('authService', function ($http) {

    self = this;

    var _TIMESTAMP = Date.now();
    var _KEY_PUBLIC = 'bd225edf39f40494e036911e2371cdd4';
    var _KEY_PRIVATE = 'eafaa41cb1bf9286bec81bc7c4df5845c34c69b2';

    self.getHash = function () {
        return md5(_TIMESTAMP + _KEY_PRIVATE + _KEY_PUBLIC);
    }

    self.getTimestamp = function () {
        return _TIMESTAMP;
    }

    self.getPublicKey = function () {
        return 'bd225edf39f40494e036911e2371cdd4';
    }

});