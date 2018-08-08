var customerName = 'bob';

function upperCaseCustomerName(string) {
  customerName = customerName.toUpperCase()
}

function setBestCustomer() {
  bestCustomer = 'not bob';
  return bestCustomer;
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'some value';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'some other value';
}
