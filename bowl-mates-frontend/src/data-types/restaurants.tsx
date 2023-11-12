export interface restaurant {
    id : number,
    name : string,
    address : string,
    cuisine : string,
    rating : number
}

export interface restaurantJSON{
    id: string;
    formattedAddress: string;
    rating: string;
    displayName: {
        text: string;
        languageCode: string;
    };
    primaryType: string;
}