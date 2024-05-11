type CoverImage= {
    url: string;
};

export type Image ={
    _key: string;
    url: string;
};

type Amenity = {
    _key: string;
    amenity: string;
    icon: string;
}

type Slug = {
    _type: string;
    current: string;
};

export type Room = {
    _id: string;
    description: string;
    coverImage:CoverImage;
    dimension: string;
    discount: number;
    images:Image[];
    name: string;
    price: number;
    numberfBeds: number;
    isBooked: boolean;
    isFeatured: boolean;
    offeredAmenities: Amenity[];
    slug: Slug;
    specialNote: string;
    type: string;
};

export type CreateBooking = {
    user: string;
    hotelRoom: string;
    checkinDate: string;
    checkoutDate: string;
    numberOfDays: number;
    adults: number;
    children: number;
    totalPrice: number;
    discount: number;
  };