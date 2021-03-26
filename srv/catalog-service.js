// const cds = require('@sap/cds');

// module.exports = cds.service.impl(async function () {
//     const { Products, Orders, Order_Details } = this.entities;
//     const service = await cds.connect.to('NorthWind');

//     this.on('READ', Products, request => {
//         return service.tx(request).run(request.query);
//     });

//     this.on('READ', Orders, request => {
//         return service.tx(request).run(request.query);
//     });

//     this.on('READ', Order_Details, request => {
//         return service.tx(request).run(request.query);
//     });
// });