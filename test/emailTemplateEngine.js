let path = require('path');
let emailTemplateEngine = require('../dist/index');
let chai = require('chai');
let expect =chai.expect;

describe('Email Template Engine Test', ()=>{

    let ejsTemplatePath;
    let passObject = {};

    before(()=>{
        ejsTemplatePath = path.resolve(__dirname, './views/ejsTest.ejs');
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
            console.log(testEjsPath);
            expect(()=>{
                emailTemplateEngine(testEjsPath);
            }).to.throw().with.property('message');
    });

});