//helper functions
let required = ()=>{
    throw(new Error('templatePath argument is required'));
};



const emailTemplateEngine = (templatePath=required(), passObject)=>{

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