import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Resource } from '../interfaces/resource';
import { Config } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {
  private supabase: SupabaseClient;
  private config = new Config();
  constructor() {
    this.supabase = createClient(this.config.supabaseUrl, this.config.supabaseKey);
  }

  async getResources() {
    let { data: Resource, error } = await this.supabase
      .from('Resource')
      .select('*')

      return {data: Resource, error};
  }

  async getResourceById(id: number){
    let { data: Resource, error } = await this.supabase
      .from('Resource')
      .select('*')
      .eq('id', id)
      .single()

    return { data: Resource, error };
  }

}
