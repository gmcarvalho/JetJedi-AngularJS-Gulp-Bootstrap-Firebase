angular.module('app').controller('DashboardController', [
    '$http',
    '$scope',
    DashboardController,
])

function DashboardController($http, $scope){
    var vm = this;
    vm.searchJedi = searchJedi;
    vm.obj = [];
    vm.listaStatus = [];
    
    vm.jedi = {
        master: '',
        name: '',
        planet: '',
        status
    }

    vm.teste = [];

   vm.searchJedi();

    function searchJedi(){
        db.collection("jedi").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                vm.jedi = doc.data();
                vm.obj.push(vm.jedi);
            });
            montaChart(vm.obj);
            //montaChartJediPorStatus(vm.obj);
        });
    }

    function montaChartJediPorStatus(obj){
        
        var listaStatus = [];
        
        for(var x = 0; x < obj.length; x++){
           

            var encontrou = false;
            if(listaStatus.length > 0){
                var size = listaStatus.length;
                
                for(var i = 0; i < size; i++){
                    for(st = 0; st < obj[x].status.length; st++){
                        if(listaStatus[i].status == obj[x].status[i].description){
                            listaStatus[i].qtde = listaStatus[i].qtde + 1; 
                            encontrou = true;
                        }
                    }
                    
                    if(!encontrou){
                        listaStatus.push({qtde: 1, status: obj[x].status[i], percentual: 0});
                    }
                }

                
            }else{
                listaStatus.push({qtde: 1, status: obj[x].status[i], percentual: 0});
                
            }
        }
        console.log(listaStatus);
        //calculaPercentualPorJedi(listaStatus, false, obj.length);
    }

    function montaChart(obj){
        var listaPlanetas = [];
        
        for(var x = 0; x < obj.length; x++){
            var encontrou = false;
            if(listaPlanetas.length > 0){
                var size = listaPlanetas.length;
                
                for(var i = 0; i < size; i++){
                    if(listaPlanetas[i].planeta == obj[x].planet){
                        listaPlanetas[i].qtde = listaPlanetas[i].qtde + 1; 
                        encontrou = true;
                    }
                }

                if(!encontrou){
                    listaPlanetas.push({qtde: 1, planeta: obj[x].planet, percentual: 0});
                }
            }else{
                listaPlanetas.push({qtde: 1, planeta: obj[x].planet, percentual: 0});
                
            }
        }

        calculaPercentualPorJedi(listaPlanetas, true, obj.length);
    }

    function calculaPercentualPorJedi(list, isPlanet, quantidadeJedi){
        for(var i = 0; i < list.length; i++){
            var percentual = (list[i].qtde / quantidadeJedi) * 100;
            list[i].percentual = percentual.toFixed(1);
        }

        var labels = [];
        var data = [];
        for(var i = 0; i < list.length; i++){
            if(isPlanet) {
                labels.push(list[i].planeta);   
            }
            else {
                labels.push(list[i].status);   
            }
            data.push(list[i].percentual);
        }

        chart(labels, data);
    }

     function chart(labels, data){
            var ctx = document.getElementById("myChart");
            var myChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    label: '# of Votes',
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)',
                        'rgba(255, 206, 86, 0.8)',
                        'rgba(75, 192, 192, 0.8)',
                        'rgba(153, 102, 255, 0.8)',
                        'rgba(255, 159, 64, 0.8)',
                        'rgba(255, 255, 64, 0.8)',
                        'rgba(163,22,95, 0.8)',
                        'rgba(133,99,66, 0.8)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 0.1)',
                        'rgba(54, 162, 235, 0.1)',
                        'rgba(255, 206, 86, 0.1)',
                        'rgba(75, 192, 192, 0.1)',
                        'rgba(153, 102, 255, 0.1)',
                        'rgba(255, 159, 64, 0.1)',
                        'rgba(255, 255, 64, 0.1)',
                        'rgba(163,22,95, 0.1)',
                        'rgba(133,99,66, 0.1)'
                    ],
                    borderWidth: 2
                }]
                },
            });
        
    }
}