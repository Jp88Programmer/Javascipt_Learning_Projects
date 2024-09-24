
console.log('this is form');

let btsubmit = document.getElementById('submit');
// let btsubmit = document.getElementById('reset');

console.log(btsubmit);

// var users  = [];

function response() {
    
    let firstName = document.getElementById('FName').value ;
    let lastName = document.getElementById('LName').value ;
    let number = document.getElementById('Number').value ;
    let dateOfBirth = document.getElementById('DateBirth').value ;
    let email = document.getElementById('Email').value;
    let male = document.getElementById('radio-male').value;
    let female = document.getElementById('radio-female').value;
    let select = document.getElementById('skills').value ;
    let yourSelef = document.getElementById('about').value;

    let users ;
    users = {firstname : firstName,lastname : lastName ,number : number ,dateOfBirth : dateOfBirth ,email : email ,male : male ,female :female,selectOption :select,aboutYourselef : yourSelef};

    let jsonString = JSON.stringify(users);

    var fs = require('Js/form.json');
    /*
    fs.readFile('form.json',users,function readFileCallback(err,data){
    
        if (err) {
            console.log(err);
        }
        else{

            let obj = JSON.parse(data);
            obj.table.push(users);
            let jsonString = JSON.stringify(obj);
            // let users = {table : [] };
            // users.table.push({firstname : firstName,lastname : lastName ,number : number ,dateOfBirth : dateOfBirth ,email : email ,male : male ,female :female,selectOption :select,aboutYourselef : yourSelef});
            fs.writeFile('form.js',jsonString,(err)=>{
                if (err) throw err ;
            });

        }
    })
*/
    if (!fs) {
        fs.writeFile('js/form.json',"users : [ " + jsonString + ",",(err) => {
            if (err) throw err ;
        });
    }
    else{
    fs.appendFile('js/form.json',jsonString + "]",(err) => {
        if (err) throw err ;
    });
}

    /*
    localStorage.firstName = firstName ;
    localStorage.lastName = lastName ;
    localStorage.dateOfBirth = dateOfBirth ;
    localStorage.email  = email ;
    localStorage.male = male ;
    localStorage.female = female ;
    */
    
    // console.log(firstName,lastName,number,dateOfBirth,email,male,female);
    console.log(user);
    
}
btsubmit.addEventListener('click',response);