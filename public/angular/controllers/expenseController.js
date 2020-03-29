myApp.controller('ExpenseController', function (ExpenseService, $route) {


    this.getAllExpenses = function () {

        var user = window.sessionStorage.getItem('username')
        ExpenseService.allexpenses(user).then((response) => {
            console.log(response);
            this.data = response.data;
        }, (error) => {
            console.log(error);
        });
    };

    this.getAllExpenses();

    this.delete = (id) => {
        //console.log(id);

        ExpenseService.deleteexpense(id).then((response) => {
            console.log(response);
            alert("Expense Deleted !")
            $route.reload();

        }, (error) => {
            console.log(error);
        });
    };

    this.editExpense = (id) => {

        console.log(this.editData);
        ExpenseService.editexpense(id, this.editData).then((response) => {
            console.log(response);
            alert("Expense Edited !");
            window.location.href = "/#/dashboard";
        }, (error) => {
            console.log(error);
        });
    };

    this.edit = (id) => {

        ExpenseService.singleexpense(id).then((response) => {
            console.log(response);
            ExpenseService.setData(response.data);
            window.location.href = "/#/editexpense"
        }, (error) => {
            console.log(error);
        });
    };

    this.get = () => {
        this.editData = ExpenseService.getData();
        console.log(this.editData);
    };

    this.get();


});