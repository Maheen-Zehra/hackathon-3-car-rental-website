

export interface Product {
    _id : string;
    name : string;
    brand : string;
    type : string;
    fuelCapacity : string;
    transmission : string;
    seatingCapacity : string;
    originalPrice : string;
    image? : {
        asset : {
            _ref : string;
            _type : "image";
        }
    };


    pricePerDay : number;
    description?: string;
    slug : {
        _type : "slug"
        current : string;
    };
    


}