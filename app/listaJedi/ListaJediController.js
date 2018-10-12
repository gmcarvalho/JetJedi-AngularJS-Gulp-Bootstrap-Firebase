angular.module('app').controller('ListaJediController', [
    '$http',
    '$scope',
    ListaJediController,
])

function ListaJediController($http, $scope){
    var vm = this;

    vm.obj = [];
    vm.listaStatus = [];

    vm.isIncluir = true;
    vm.isList = false;
    
    vm.jedi = {
        master: '',
        name: '',
        planet: '',
        status: ''
    }
    vm.searchJedi = searchJedi;
    vm.tabSearch = tabSearch;
    vm.tabInsert = tabInsert;
    vm.incluir = incluir;
    vm.searchJedi();
   
    function tabSearch(){
        vm.isIncluir = false;
        vm.isList = true;
        vm.searchJedi();
    }

    function searchJedi(){
        vm.obj = [];
        db.collection("jedi").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                vm.jedi = doc.data();
                vm.obj.push(vm.jedi);
            });
        });
    }

    function tabInsert(){
        vm.isIncluir = true;
        vm.isList = false;
    }

    function incluir(){
        db.collection("jedi").add({ 
            name: vm.jedi.name,
            planet: vm.jedi.planet,
            status: "status/master",
            master: vm.jedi.master
        })
        .then(function(docRef) {
            vm.searchJedi();
            vm.jedi = new vm.jedi();
        })
        .catch(function(error) {
        });
    }
}