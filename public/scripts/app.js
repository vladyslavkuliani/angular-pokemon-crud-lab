angular.module("pokemon", ["ngRoute"])
    .config(config)
    .controller('PokemonController', PokemonController)
    .controller('PokemonShowController', PokemonShowController);

config.$inject = ["$routeProvider", "$locationProvider"];

function config($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '../views/templates/showAll.html',
            controller: 'PokemonController',
            controllerAs: 'pokemonCtrl'
        })
        .when('/pokemon/:id', {
            templateUrl: '../views/templates/showOne.html',
            controller: 'PokemonShowController',
            controllerAs: 'pokemonShowCtrl'
        });

        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
}

PokemonController.$inject = ["$http"];

function PokemonController($http) {
    var vm = this;

    $http({
        method: 'GET',
        url: 'https://super-crud.herokuapp.com/pokemon'
    }).then(function getSuccess(json) {
        vm.pokemon = json.data.pokemon;
    }, function getError(error) {
        console.log("Can't get pokemons:", error);
    });
}

PokemonShowController.$inject = ["$http", "$routeParams"];

function PokemonShowController($http, $routeParams) {
    var vm = this;

    $http({
        method: 'GET',
        url: 'https://super-crud.herokuapp.com/pokemon/' + $routeParams.id
    }).then(function getOneSuccess(json) {
        console.log(json);
        vm.pokemon = json.data;
    }, function getOneError(error) {
        console.log("Can't get this pokemon:", error);
    });

    vm.deletePokemon = function(){
      $http({
        method:'DELETE',
        url: 'https://super-crud.herokuapp.com/pokemon/' + $routeParams.id
      }).then(function deleteSuccess(json){
        window.location.href = "/";
      }, function deleteError(error){
        console.log("Can't delete this pokemon:", error);
      });
    }

    vm.updatePokemon = function(pokemon){
      $http({
        method: 'PUT',
        url: 'https://super-crud.herokuapp.com/pokemon/' + $routeParams.id,
        data: pokemon
      }).then(function updateSuccess(json){
        window.location.href = "/";
      }, function updateError(error){
        console.log("Can't update this pokemon:", error);
      });
    }

    vm.cancel = function(){
      window.location.href = "/pokemon/"+$routeParams.id;
    }
}
