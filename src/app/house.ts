export class House {
    public id: string = '';
    public rent: number = 525;
    public isRented: boolean = false;
    public numBedrooms: number = 1;
    public numBathrooms: number = 1;
    public location: string = 'Cape Girardeau';
    public schoolDistrict: string = 'Franklin';
    public parking: string = 'street';
    public laundry: string = 'Washer/Dryer Hook-up';
    public deposit: number = 525;
    public petsAllowed: boolean = false;
    public description: string = 'This is a really great find!';
    public address: string = '123 Main St.';
    public imageUrl: string = 'http://rentsemo.com/img/gallery/singlefamily/lrg_singlefamily_25.jpg';
    constructor(house: {
        id?: string,
        rent?: number,
        isRented?: boolean,
        numBedrooms?: number,
        numBathrooms?: number,
        location?: string,
        schoolDistrict?: string,
        parking?: string,
        laundry?: string,
        deposit?: number,
        petsAllowed?: boolean,
        description?: string,
        address?: string,
        imageUrl?: string
    } = {}) {
        for (let key of Object.keys(house)) {
            this[key] = house[key];
        }
    }
}