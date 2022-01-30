// * NOTE:~ First you have to import the reuired Modules from NodeJs in Following manner to use them
const path = require('path');

// GLOBAL LEVEL
// * 1. This will print the current directory of the file
    console.log(__dirname);

// * 2. This will print the current path of file
    console.log(__filename);

// PATH LEVEL
// * 1. This will print the name of the current file in which you are running
    console.log( path.basename(__filename) );

// * 2. This will print the current directory of the file in which file is located
    console.log( path.dirname(__filename) );

// * 3. This will print the extension of the current file 
    console.log( path.extname(__filename) );

// OBJECT
// * 1. This will print all the details of file in an Object
    console.log( path.parse(__filename));

// JOIN 
// * 1. This will join the file from another directory to the current directory
//      path.join(__dirname, 'destination_directory_name', 'destination_file_to_be_joined')
    console.log( path.join(__dirname, 'abc', 'hello.html'));
    // NOTE: It will not show you the error if file doesn't exist or Directory doesn't exist

// FILE SYSTEMS
// First import the file system from the NodeJS in following manner
    const fs = require('fs');
    
// * NOTE : By default all the file operatioons will asynchronous in nature, so
//          If you want synchronous behaviour we have to define the operation manually
//          By appending Sync after the fs operation name

// * 1. To read the data from a file using file system, in asynchronous manner use the following syntax
 /*
    fs.readFile(path.join(__dirname, 'filename'), 'char conversion standard * optional', (err, data)=>{
        if(err) {
            handleError(err);
        }
        else{
            do something with data
        }
    })
*/
    fs.readFile(path.join(__dirname, 'hello.txt'), 'utf8', (err, data)=>{
        if(err) {
            console.log("Error ", err);
        }
        else{
            console.log(data);
        }
    });
// NOTE : if we are not using the 'utf8' char conversion standards then we 
//        will get buffer data so we have to convert it into readable fromat by using "toString()" function
    fs.readFile(path.join(__dirname, 'hello.txt'),(err, data)=>{
        if(err) {
            console.log("Error ", err);
        }
        else{
              // This will give you the buffer data
            console.log(data);
            // To get the readable data from buffer data we need to convert it into string 
            console.log(data.toString());
        }
    });

// To get the readable data from buffer data we need to convert it into string 

// * To read a file using sync function 
// Sunchronous in nature 
// callback
    const data = fs.readFileSync(path.join(__dirname, 'hello.txt'));
    console.log("Synchronous output : ",data.toString());

// We CAN NOT read a file using SYNC Module in following manner 
    fs.readFileSync(path.join(__dirname, 'hello.txt'),'utf8',(err, data)=>{
        if(err) {
            console.log("Error ", err);
        }
        console.log(data);
    });
// NOTE: It will not print anything not even error, we have to use callback
//       for using the readFileSync
// we can run the above code in following manner
  const fileData =   fs.readFileSync(path.join(__dirname, 'hello.txt'),'utf8',(err, data)=>{
        if(err) {
            console.log("Error ", err);
        }
        return data;
    });
    console.log("Synchronous file data is : ",fileData);
// NOTE : Synchronous method will be code blocking in nature : Means they will not
//        Let execute next line of code untill they are not finished

//  Asynchrouns method will start executing the next line of code if current line of code is taking longer to execute

// WRITE TO A FILE
// again it can be done synchronously and asynchronously
//  fs.writeFile or fs.writeFileSync : It will create a new file with the mentioded name and if
//  file already exists it will be overwritten
// * 1. Asynchronous Method
    fs.writeFile(path.join(__dirname, 'hello.txt'), "HEllo txt file has been overwritten", (err)=>{
        if(err){
            console.log(err);
        }
        console.log("file Created");
    });

// * 2. Synchronous Method
    fs.writeFileSync(path.join(__dirname, 'hello3.txt'),"i am again modied", (err)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log("file wriiten");
    });
// NOTE : Never run sync and async methods together fort the same file same method on same data

// RENAME A FILE
//  we use fs.rename("oldFileName", "newFileName", (err)=> handleError(err))

fs.rename("hello3.txt","intro.txt", (err)=>{
    if(err){
        console.log(err);
    }
    console.log("file Renamed");
})
