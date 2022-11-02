export interface CarDTO {
    id: String,
    brand: String,
    name: String,
    about: String,
    rent: {
      period: String,
      price: Number
    },
    fuel_type: String,
    thumbnail: String,
    accessories: {
        type: String,
        name: String
    }[],
    photos: String[]
}