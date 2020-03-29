myApp.controller('UserController', function (){

    this.email = "";

    this.submit = () => {
        window.sessionStorage.setItem('username', this.email);
        //console.log(window.sessionStorage.getItem('username'));
        window.location.href = "/#/dashboard";
    };

});