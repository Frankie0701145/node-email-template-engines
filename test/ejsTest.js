let path = require('path');
let emailTemplateEngine = require('../dist/index');
let chai = require('chai');
let expect =chai.expect;

describe('Email Template Engine Test', ()=>{

    let ejsTemplatePath;
    let passObject = {
        firstName: 'Francis',
        lastName: 'Njuguna'
    };

    before(()=>{
        ejsTemplatePath = path.resolve(__dirname, './views/ejsTemplate.ejs');
    });


    it('Expect an error to be thrown if the templatePath argument is not supplied', ()=>{
        expect(()=>{
            emailTemplateEngine();
        }).to.throw('templatePath argument is required');
    });

    it('Expect an error to be thrown if the passObject argument is not supplied', ()=>{
        expect(()=>{
            emailTemplateEngine(ejsTemplatePath);
        }).to.throw('passObject argument is required');
    });


    it('Expect to get an error if the file extension of the view is not supported', ()=>{
            let testEjsPath = path.resolve('./views/l.pug');
            expect(()=>{
                emailTemplateEngine(testEjsPath);
            }).to.throw().with.property('message');
    });

    it('Expect to get back the back html str with the correct ejs template path', async ()=>{
        console.log(ejsTemplatePath);
        let str = await emailTemplateEngine(ejsTemplatePath, passObject);
        console.log('The html string');
        console.log(str);
    });
});