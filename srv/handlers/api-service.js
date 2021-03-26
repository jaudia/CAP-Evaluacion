const cds = require('@sap/cds');

const { Productos, Orders, Order_Details } = cds.entities;
module.exports = cds.service.impl((srv) => {

    srv.before('INSERT', 'Order_Details', async req => {

        const datos = req.data;
        console.log(datos.OrderID);
        console.log(datos.Quantity);

        const stocks = await calcularStockDisponible(datos);

        if (stocks != null) {

            if (stocks.UnitsInStock < stocks.nuevoStock)
                req.reject(405, `Error: El nuevo stock en orden "${stocks.nuevoStock}" es mayor que el disponible "${stocks.UnitsInStock}"`)
        }

    });

    srv.after('CREATE', 'Order_Details', async (itemCreado, req) => {

        const datos = itemCreado;
        console.log('pasando por after');

        console.log(datos.Quantity);

        const queryProd = await UPDATE('productos')
            .set({ UnitsOnOrder: { '+=': datos.Quantity } })
            .where({ ProductID: datos.ProductID })

        // const queryProd = await cds.run(UPDATE(Productos)
        //     .set({ UnitsOnOrder: cantidadNueva })
        //     .where({ ID: datos.productoID }));

    });

});


const calcularStockDisponible = async (item) => {

    let continuar = true;
    let productoSinStock = null;

    // Obtener el stock disponible
    let queryProd = await cds.run(SELECT.one(Productos).where({ ProductID: item.ProductID }));

    if (!!queryProd) {

        let nuevoStockOnOrder = (queryProd.UnitsOnOrder + item.Quantity);

        return {
            UnitsInStock: queryProd.UnitsInStock,
            nuevoStock: nuevoStockOnOrder
        };
    }
    return null;
}
