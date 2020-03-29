myApp.service('ExpenseService', function($http){

    this.addexpense = function(data){
        return $http.post('/addexpense', data);
    };

    this.allexpenses = function(user){
        return $http.get('/allexpenses/'+user);
    };

    this.singleexpense = function(data){
        return $http.get('/'+data);
    };

    this.deleteexpense = function(data){
        return $http.post('/delete/'+data);
    };

    this.editexpense = function(id,data){
        return $http.put('/'+id+'/edit', data);
    };

    this.setData = (data) => { 
        this.data = data;
    };

    this.getData = () => {
        return this.data
    };
});