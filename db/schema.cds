using {
    NorthWind.Products as prod,
    NorthWind.Orders as ord,
    NorthWind.Order_Details as ordDet
} from '../srv/external/NorthWind.csn';
using {
    cuid,
    managed,
    Country
} from '@sap/cds/common';


namespace nsEvaluacion;

type ts_adic : {
    fecha  : Timestamp @cds.on.insert : $now;
    region : String default 'Argentina';
}

entity Productos : prod {

}

entity Orders : ord {
    adicionalID : ts_adic
}

entity Order_Details : ordDet {

}
