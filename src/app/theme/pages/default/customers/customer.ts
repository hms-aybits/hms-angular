export class Customer {
    customer_id: string;
    corporate_id: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    address?: {
        address_line1?: string;
        building_no?: string; // required
        apartment_name?: string;
        street?: string;
        landmark?: string;
        locality?: string;
        city?: string;
        state?: string;
        pin_code?: string;
        country?: string;
        geo_location?: string;
    }
    contact_details?: {
        primary_email?: string; // required
        secondary_email?: string;
        primary_phone?: string; // required
        secondary_phone?: string;
    }
    identification_params?: {
        identifier_binary_data?: string; // required
        identifier_value?: string;
        identifier_type?: string;
    }
    id_proof: string;
    customer_status: string;
    date_modified: string;
    date_created: string;
    date_deleted: string;
}