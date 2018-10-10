(function() {
    angular.module('app').component('field', {
        bindings: {
            id: '@',
            label: '@',
            grid: '@',
            placeholder: '@',
        },
        controller:[
            'gridSystem',
            function(gridSystem){
                this.gridClasses = gridSystem.toCssClasses(this.grid)
            }
        ],
        template: `
        
        <div class="{{$ctrl.gridClasses}}">
            <div class="form-group">
                <label for="{{$ctrl.id}}">{{$ctrl.label}}</label>
                <input  id="{{$ctrl.id}}" class="form-control" autocomplete="off" placeholder="{{$ctrl.placeholder}}"/> 
            </div>
        </div>
        `
        
    })
})()