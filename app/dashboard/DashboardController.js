angular.module('app').controller('DashboardController', [
    '$http',
    '$scope',
    DashboardController,
])


function DashboardController($http, $scope){
    console.log("teste");
    var vm = this;
    vm.searchJedi = searchJedi;
    vm.obj = [];
    vm.jedi = {
        master: '',
        name: '',
        planet: '',
        status
    }

   vm.searchJedi();

    function searchJedi(){
        db.collection("jedi").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                vm.jedi = doc.data();
                vm.obj.push(vm.jedi);
                
            //console.log(`${doc} => ${doc.data()}`);
            });
            
            console.log(vm.obj);
        });
        console.log('entrou aqui');
        console.log(vm.obj);
    }
    
}