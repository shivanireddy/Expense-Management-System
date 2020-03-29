myApp.controller('AddController', function (ExpenseService) {

    
    this.addExpense = () => {

        var data = {
            user: window.sessionStorage.getItem('username'),
            name: this.name,
            description: this.description,
            amount: this.amount
        };

        ExpenseService.addexpense(data).then((response) => {
            console.log(response);
            window.location.href = "/#/dashboard";
        }, (error) => {
            console.log(error);
        });
    };

});