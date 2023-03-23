import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Config } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
private supabase: SupabaseClient;
private config = new Config();
  constructor() {
    this.supabase = createClient(this.config.supabaseUrl, this.config.supabaseKey);
   }

   async getBusinesses() {
     let {data: Business, error} = await this.supabase
     .from('Business')
     .select("*");

     return {data: Business, error};
   }

   async getBusinessDetails(id: number) {
     let {data: Business, error} = await this.supabase
     .from('Business')
     .select('*')
     .eq('id', id)
     .single()

     return {data: Business, error};
   }
}
