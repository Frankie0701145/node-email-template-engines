# node-email-template-engines
Node package that facilitates the creation of custom email templates (using popular view engines), passing of data to the 
email template, and using CSS. This version only supports the EJS engine view. However, in later versions, Pug and 
Handlebars will be supported.
## Installation
Use npm/yarn
```
npm install node-email-template-engines ejs
```
## Getting Started
```javascript
  //import the node-email-template-engines package.
  let emailTemplateEngines = require('node-email-template-engines');
  //import the path library to help in finding the absolute path to the view
  let path = require('path');
  //get the absolute path to the view template with the file extension specified.
  let emailTemplatePath = path.resolve('./views/ejsTemplate.ejs');
  //Define the object that will get passed to the view. If there is no data to pass just pass an empty object.
  let passObject  = {
    firstName: "Francis",
    lastName: "Njuguna"
  };
  //If there is no data to pass just pass an empty object.
  /**
  let passObject = {
  };
  **/
  //call the emailTemplateEngines function with the emailTemplatePath and the object to pass to the view.
  emailTemplateEngines(emailTemplatePath, passObject)
   .then((str)=>{
        //the function resolve successfully with the html string of the view
        console.log(str);
   }).catch((err)=>{
        //the function reject if error occurs with an error object.
       console.error(err);
       throw(err);
   });
```
## Testing
Testing needs you to clone this repo.  
The command below runs unit test.
```
npm test
```
## Pending Stuff
- [x] EJS View Engine
- [ ] Pug View Engine
- [ ] Handlebars View Engine
## Contributing
1. Create your feature branch: ``` git checkout -b my-new-feature ```
2. Commit your changes: ``` git commit -m 'Add some feature' ```
3. Push to the branch: ``` git push origin my-new-feature ```
4. Submit a pull request

## License
ISC
