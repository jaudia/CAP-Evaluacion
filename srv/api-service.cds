using {nsEvaluacion as my} from '../db/schema';


service api {


    /*A fines practicos, solo vamos a trabajar los campos que nos interesan*/
    entity Productos     as projection on my.Productos {
        key ProductID, ProductName, UnitPrice, UnitsInStock, Order_Details
    };

    entity Orders        as projection on my.Orders {
        key OrderID, ShipAddress, Order_Details
    };

    entity Order_Details as projection on my.Order_Details {
        key OrderID, key ProductID, Order, Product, Quantity
    };

    view vistaProductoDetalle as
        select
            a.ProductID,
            a.ProductName,
            a.UnitPrice,
            a.UnitsInStock,
            b.OrderID
        from Productos as a
        inner join Order_Details as b
            on b.ProductID = a.ProductID;


}
