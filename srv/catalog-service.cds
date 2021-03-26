// using {NorthWind as external} from './external/NorthWind.csn';

// service CatalogService {

//     @readonly
//     entity Products      as projection on external.Products {
//         key ProductID, ProductName, UnitPrice, UnitsInStock
//     };

//     @readonly
//     entity Orders        as projection on external.Orders {
//         key OrderID, ShipAddress
//     };

//     @readonly
//     entity Order_Details as projection on external.Order_Details {
//         key OrderID, key ProductID, Order, Product, Quantity
//     };


// }
