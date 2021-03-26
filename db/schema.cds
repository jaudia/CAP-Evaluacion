using {
    NorthWind.Products as prod,
    NorthWind.Orders as ord,
    NorthWind.Order_Details as ordDet
} from '../srv/external/NorthWind.csn';
using {cuid} from '@sap/cds/common';


namespace nsEvaluacion;

entity Productos : prod {

}

entity Orders : ord {

}

entity Order_Details : ordDet {

}
