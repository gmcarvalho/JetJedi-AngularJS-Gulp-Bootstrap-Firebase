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


    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
    
}