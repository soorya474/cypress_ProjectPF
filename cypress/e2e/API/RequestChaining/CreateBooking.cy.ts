import ConstantsPage from "../../../../utils/Constants.cy";

describe('create booking',()=>{//describe--from mocha
    it('craete booking',()=>{
        cy.request({
            method:'POST',
            url:ConstantsPage.baseUrl+ConstantsPage.bookingEndPoint,
            body:{
                    "firstname" : "Jim",
                    "lastname" : "Brown",
                    "totalprice" : 111,
                    "depositpaid" : true,
                    "bookingdates" : {
                    "checkin" : "2025-08-01",
                    "checkout" : "2025-08-10"
            },
            "additionalneeds" : "Breakfast"
        }

        }).then((res)=>{
            console.log("Response is"+ JSON.stringify(res))
            expect(res.status).to.equal(200);//expect from chai assertions
            const id=res.body.bookingid;
            const firstName=res.body.booking.firstname;
            cy.request({
            method:'GET',
            url:ConstantsPage.baseUrl+ConstantsPage.bookingEndPoint+"/"+id,
        }).then((res)=>{
             console.log("Response is"+ JSON.stringify(res))
            expect(res.status).to.equal(200);
            expect(res.body.firstname).to.equal(firstName);
        })
        })
    });
})
