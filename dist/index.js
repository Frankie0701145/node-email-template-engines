//helper functions
let errMessageTemplatePath = 'templatePath argument is required';
let errMessagePassObject = 'passObject argument is required';
let required = (message)=>{
    throw(new Error(message));
};




const emailTemplateEngine = (templatePath=required(errMessageTemplatePath), passObject=required(errMessagePassObject))=>{

    //the templatePath is the absolute path to the view.
    //the passObject is the data to be passed to the view.


    //retrieve the view extension from the view templatePath
    //use the file extension to compile the view to html

    let pathArray = templatePath.split('/'); //split the path into an array

    let file = pathArray[pathArray.length-1]; //retrieve the file
    let fileArray = file.split('.'); //split the file into file name and extension
    let fileExtension = fileArray[fileArray.length-1]; //get the file extension

    //switching between the different fileExtension
    switch(fileExtension){

        //in case it is EJS
        case 'ejs':
            break;
        
        default:
            let error = new Error();
            error.message = `For now the view with ${fileExtension} is not supported only ejs is supported.`;
            throw(error);
    }

}


module.exports =  emailTemplateEngine;