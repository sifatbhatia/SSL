var http = require('http'); //error1
var myname = function () {
    return console.log("Here is my IP address");
}

async function callHttpbin() { //2 & 3
    let promise = new Promise((resolve, reject) => {
        http.get(
            'http://httpbin.org/ip',
            function (response) {
                var str = "";
                response.setEncoding('utf8');
                response.on('data', function (data) {
                    str += data;
                });
                response.on('end', function () {
                    var result = JSON.parse(str);
                    let myips = result.origin; //maybe error 6?
                    resolve(myips)

                });
            }
        );
    });

    let result = await promise;
    return result;


    //error9
}

async function executeAsyncTask() { //error 4

    const valueA = await callHttpbin()//error

    const valueB = myname();
    console.log(`${valueB} ${valueA}`)
} //error 5
/*
 Output Here is my IP address 149.24.160.1, 149.24.160.1
*/
executeAsyncTask(); //error8?