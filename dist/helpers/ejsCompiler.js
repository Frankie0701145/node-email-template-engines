let ejs = require('ejs');

module.exports = (templatePath,passObject)=>{
    return new Promise((resolve, reject)=>{
        ejs.renderFile(templatePath, passObject,(err,str)=>{
            if(err){
                reject(err);
            }else{
                resolve(str);
            }
        });
    });
};