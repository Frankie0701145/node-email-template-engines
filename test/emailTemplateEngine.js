let path = require('path');
let emailTemplateEngine = require('../dist/index');
let chai = require('chai');
let expect =chai.expect;

describe('Email Template Engine Test', ()=>{

    let ejsTemplatePath;

    before(()=>{
        ejsTemplatePath = path.resolve(__dirname, './views/ejsTest.ejs');
    });

    it('Expect to get an error if the file extension of the view is not supported', ()=>{
            let testEjsPath = path.resolve('./views/l.pug');
            console.log(testEjsPath);
            expect(()=>{
                emailTemplateEngine(testEjsPath);
            }).to.throw().with.property('message');
    });

});