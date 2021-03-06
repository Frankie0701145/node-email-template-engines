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


    it('Expect an error to be thrown if the templatePath argument is not supplied.', async ()=>{    
        await expect(emailTemplateEngine())
                 .to.be.rejectedWith('templatePath argument is required');
    });

    it('Expect an error to be thrown if the passObject argument is not supplied.', async ()=>{
        await expect(emailTemplateEngine(ejsTemplatePath))
                 .to.be.rejectedWith('passObject argument is required');
    });


    it('Expect to get an error if the file extension of the view is not supported.', async ()=>{
            let testEjsPath = path.resolve('./views/l.g');
            await expect(emailTemplateEngine(testEjsPath, passObject))
                   .to.be.rejectedWith('For now the view with g is not supported only ejs is supported.');
    });

    it('Expect to get an error if the file path of the view is wrong.', async ()=>{
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

    it('Expect that the passObject is accessible to the view template if the correct arguments are passed.', async ()=>{
        let strHtml = await emailTemplateEngine(ejsTemplatePath, passObject);
        expect(strHtml).to.include(passObject.firstName);
        expect(strHtml).to.include(passObject.lastName);
    });

    it('Expect to get back html str if the correct arguments are passed.', async ()=>{
        let strHtml = await emailTemplateEngine(ejsTemplatePath, passObject);
        let type = typeof(strHtml);
        expect(type).to.be.equal('string');
    });

 
});