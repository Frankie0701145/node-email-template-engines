let path = require('path');
let emailTemplateEngine = require('../dist/index');
let chai = require('chai');
let chaiAsPromised = require('chai-as-promised');
let expect =chai.expect;
chai.use(chaiAsPromised);


describe('Email Template Engine Test', ()=>{

    let ejsTemplatePath;
    let passObject;

    before(()=>{
        ejsTemplatePath = path.resolve(__dirname, './views/ejsTemplate.ejs');
        passObject = {
            firstName: 'Francis',
            lastName: 'Njuguna'
        };
    });


    it('Expect an error to be thrown if the templatePath argument is not supplied', async ()=>{    
        await expect(emailTemplateEngine())
                 .to.be.rejectedWith('templatePath argument is required');
    });

    it('Expect an error to be thrown if the passObject argument is not supplied', async ()=>{
        await expect(emailTemplateEngine(ejsTemplatePath))
                 .to.be.rejectedWith('passObject argument is required');
    });


    it('Expect to get an error if the file extension of the view is not supported', async ()=>{
            let testEjsPath = path.resolve('./views/l.pug');
            await expect(emailTemplateEngine(testEjsPath, passObject))
                   .to.be.rejectedWith('For now the view with pug is not supported only ejs is supported.');
    });

    it('Expect to get an error if the file path of the view is wrong', async ()=>{
        let testEjsPath = path.resolve('./views/l.ejs');
        let expectedError = {
            errno: -2,
            syscall: 'open',
            code: 'ENOENT',
            path: '/home/francis/PersonalProjects/packages/node-email-template-engines/views/l.ejs'
        }
        await expect(emailTemplateEngine(testEjsPath, passObject))
               .to.be.rejectedWith(expectedError);
    });

    // it('Expect to get back the back html str with the correct ejs template path', async ()=>{

    //     let strHtml = await emailTemplateEngine(ejsTemplatePath, passObject);

    //     console.log(strHtml);
    // });

 
});