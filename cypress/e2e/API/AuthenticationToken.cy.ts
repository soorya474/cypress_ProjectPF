//import ConstantsPage from "cypress/utils/Constants.cy";

import ConstantsPage from "../../../utils/Constants.cy";

let access_token;
describe('get token',()=>{//describe--from mocha
    it('get token',()=>{
       return cy.request({
            method:'POST',
            url:ConstantsPage.baseUrl+ConstantsPage.authEndpoint,
            body:{
                username:ConstantsPage.username,
                password:ConstantsPage.password

            }

        }).then((res)=>{
            console.log("Response is"+ JSON.stringify(res))
            console.log("Token is"+res.body.token);
            access_token=res.body.token;
            expect(res.status).to.equal(200);//expect from chai assertions
            })
        })
    })
