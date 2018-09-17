import { Injectable } from "@angular/core";
import { Http, Response } from '@angular/http';
import { HttpClient } from "@angular/common/http";
import { Room } from "./_models/room";

@Injectable()
export class BookingService {
    constructor() { }


    getRooms() {
        let rooms: Room[] = [];
        rooms.push(

            { "roomNumber": "001", "roomCategory": "PRIMARY_DELUXE", "roomPrice": "1000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "002", "roomCategory": "PRIMARY_DELUXE", "roomPrice": "1000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "003", "roomCategory": "PRIMARY_DELUXE", "roomPrice": "1000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "004", "roomCategory": "PRIMARY_DELUXE", "roomPrice": "1000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "005", "roomCategory": "PRIMARY_DELUXE", "roomPrice": "1000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "006", "roomCategory": "PRIMARY_DELUXE", "roomPrice": "1000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "006", "roomCategory": "PRIMARY_DELUXE", "roomPrice": "1000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "008", "roomCategory": "PRIMARY_DELUXE", "roomPrice": "1000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "009", "roomCategory": "PRIMARY_DELUXE", "roomPrice": "1000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "010", "roomCategory": "PRIMARY_DELUXE", "roomPrice": "1000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },


            { "roomNumber": "011", "roomCategory": "SECONDARY_DELUXE", "roomPrice": "2000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "012", "roomCategory": "SECONDARY_DELUXE", "roomPrice": "2000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "013", "roomCategory": "SECONDARY_DELUXE", "roomPrice": "2000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "014", "roomCategory": "SECONDARY_DELUXE", "roomPrice": "2000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "015", "roomCategory": "SECONDARY_DELUXE", "roomPrice": "2000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "016", "roomCategory": "SECONDARY_DELUXE", "roomPrice": "2000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "017", "roomCategory": "SECONDARY_DELUXE", "roomPrice": "2000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "018", "roomCategory": "SECONDARY_DELUXE", "roomPrice": "2000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "019", "roomCategory": "SECONDARY_DELUXE", "roomPrice": "2000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "020", "roomCategory": "SECONDARY_DELUXE", "roomPrice": "2000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },



            { "roomNumber": "021", "roomCategory": "SUPER_DELUXE", "roomPrice": "3000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "N/A", "roomBookingStatus": true },
            { "roomNumber": "022", "roomCategory": "SUPER_DELUXE", "roomPrice": "3000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "N/A", "roomBookingStatus": true },
            { "roomNumber": "023", "roomCategory": "SUPER_DELUXE", "roomPrice": "3000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "N/A", "roomBookingStatus": true },
            { "roomNumber": "024", "roomCategory": "SUPER_DELUXE", "roomPrice": "3000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "N/A", "roomBookingStatus": true },
            { "roomNumber": "025", "roomCategory": "SUPER_DELUXE", "roomPrice": "3000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "N/A", "roomBookingStatus": true },
            { "roomNumber": "026", "roomCategory": "SUPER_DELUXE", "roomPrice": "3000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "N/A", "roomBookingStatus": true },
            { "roomNumber": "027", "roomCategory": "SUPER_DELUXE", "roomPrice": "3000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "N/A", "roomBookingStatus": true },
            { "roomNumber": "028", "roomCategory": "SUPER_DELUXE", "roomPrice": "3000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "N/A", "roomBookingStatus": true },
            { "roomNumber": "029", "roomCategory": "SUPER_DELUXE", "roomPrice": "3000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "N/A", "roomBookingStatus": true },
            { "roomNumber": "030", "roomCategory": "SUPER_DELUXE", "roomPrice": "3000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "N/A", "roomBookingStatus": true },



            { "roomNumber": "031", "roomCategory": "ULTRA_DELUXE", "roomPrice": "4000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "032", "roomCategory": "ULTRA_DELUXE", "roomPrice": "4000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "033", "roomCategory": "ULTRA_DELUXE", "roomPrice": "4000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "034", "roomCategory": "ULTRA_DELUXE", "roomPrice": "4000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "035", "roomCategory": "ULTRA_DELUXE", "roomPrice": "4000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "036", "roomCategory": "ULTRA_DELUXE", "roomPrice": "4000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "037", "roomCategory": "ULTRA_DELUXE", "roomPrice": "4000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "038", "roomCategory": "ULTRA_DELUXE", "roomPrice": "4000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "039", "roomCategory": "ULTRA_DELUXE", "roomPrice": "4000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "040", "roomCategory": "ULTRA_DELUXE", "roomPrice": "4000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },



            { "roomNumber": "041", "roomCategory": "PRIMARY_DELUXE", "roomPrice": "1000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "042", "roomCategory": "PRIMARY_DELUXE", "roomPrice": "1000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "043", "roomCategory": "PRIMARY_DELUXE", "roomPrice": "1000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "044", "roomCategory": "PRIMARY_DELUXE", "roomPrice": "1000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "045", "roomCategory": "PRIMARY_DELUXE", "roomPrice": "1000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "046", "roomCategory": "PRIMARY_DELUXE", "roomPrice": "1000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "047", "roomCategory": "PRIMARY_DELUXE", "roomPrice": "1000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "048", "roomCategory": "PRIMARY_DELUXE", "roomPrice": "1000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "049", "roomCategory": "PRIMARY_DELUXE", "roomPrice": "1000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "050", "roomCategory": "PRIMARY_DELUXE", "roomPrice": "1000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },


            { "roomNumber": "051", "roomCategory": "SECONDARY_DELUXE", "roomPrice": "2000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "N/A", "roomBookingStatus": true },
            { "roomNumber": "052", "roomCategory": "SECONDARY_DELUXE", "roomPrice": "2000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "N/A", "roomBookingStatus": true },
            { "roomNumber": "053", "roomCategory": "SECONDARY_DELUXE", "roomPrice": "2000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "N/A", "roomBookingStatus": true },
            { "roomNumber": "054", "roomCategory": "SECONDARY_DELUXE", "roomPrice": "2000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "N/A", "roomBookingStatus": true },
            { "roomNumber": "055", "roomCategory": "SECONDARY_DELUXE", "roomPrice": "2000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "N/A", "roomBookingStatus": true },
            { "roomNumber": "056", "roomCategory": "SECONDARY_DELUXE", "roomPrice": "2000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "N/A", "roomBookingStatus": true },
            { "roomNumber": "057", "roomCategory": "SECONDARY_DELUXE", "roomPrice": "2000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "N/A", "roomBookingStatus": true },
            { "roomNumber": "058", "roomCategory": "SECONDARY_DELUXE", "roomPrice": "2000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "N/A", "roomBookingStatus": true },
            { "roomNumber": "059", "roomCategory": "SECONDARY_DELUXE", "roomPrice": "2000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "N/A", "roomBookingStatus": true },
            { "roomNumber": "060", "roomCategory": "SECONDARY_DELUXE", "roomPrice": "2000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "N/A", "roomBookingStatus": true },



            { "roomNumber": "061", "roomCategory": "SUPER_DELUXE", "roomPrice": "3000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "062", "roomCategory": "SUPER_DELUXE", "roomPrice": "3000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "063", "roomCategory": "SUPER_DELUXE", "roomPrice": "3000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "064", "roomCategory": "SUPER_DELUXE", "roomPrice": "3000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "065", "roomCategory": "SUPER_DELUXE", "roomPrice": "3000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "066", "roomCategory": "SUPER_DELUXE", "roomPrice": "3000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "067", "roomCategory": "SUPER_DELUXE", "roomPrice": "3000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "068", "roomCategory": "SUPER_DELUXE", "roomPrice": "3000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "069", "roomCategory": "SUPER_DELUXE", "roomPrice": "3000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },
            { "roomNumber": "070", "roomCategory": "SUPER_DELUXE", "roomPrice": "3000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "OCCUPIED", "roomBookingStatus": true },



            { "roomNumber": "071", "roomCategory": "ULTRA_DELUXE", "roomPrice": "4000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "072", "roomCategory": "ULTRA_DELUXE", "roomPrice": "4000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "073", "roomCategory": "ULTRA_DELUXE", "roomPrice": "4000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "074", "roomCategory": "ULTRA_DELUXE", "roomPrice": "4000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "075", "roomCategory": "ULTRA_DELUXE", "roomPrice": "4000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "076", "roomCategory": "ULTRA_DELUXE", "roomPrice": "4000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "077", "roomCategory": "ULTRA_DELUXE", "roomPrice": "4000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "078", "roomCategory": "ULTRA_DELUXE", "roomPrice": "4000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "079", "roomCategory": "ULTRA_DELUXE", "roomPrice": "4000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },
            { "roomNumber": "080", "roomCategory": "ULTRA_DELUXE", "roomPrice": "4000", "roomCapacity": "5", "roomFacilities": "TV, CABLE", "roomStatus": "AVAILABLE", "roomBookingStatus": true },

        )
        return rooms;
    }

}