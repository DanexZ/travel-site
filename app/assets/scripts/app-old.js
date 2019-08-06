var $ = require('jquery');

//require t składnia node.js
//Person = require('./modules/Person');

//import to składnia es6
import Person from './modules/Person';

class Adult extends Person {
    
    payTaxes(){
        alert( this.name + ' pay ' + 'taxes.')
    }
}

var Jane = new Adult('Jane', 'orange');

Jane.payTaxes();
