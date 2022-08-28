// Write your solution in this file!
function customerName() {
    return customerName();
}
customerName = 'bob'

function upperCaseCustomerName () {
    window.customerName = (window.customerName || '').toUpperCase();
}


function setBestCustomer () {
    window.bestCustomer = (window.bestCustomer || 'not bob').toString( 'not bob');
}

function overwriteBestCustomer () {
   window.bestCustomer = ( 'maybe bob');
}

const leastFavoriteCustomer = 'nik';
function changeLeastFavoriteCustomer () {
    throw'Assignment to constant variable.';
}
