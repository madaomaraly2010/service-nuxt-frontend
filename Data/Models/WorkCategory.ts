import type { Provider, Work } from ".";


export class WorkCategory  {
  id!: number;
  arb_name!: string;
  eng_name!: string;
  // WorkCategory hasMany Provider via work_id
  providers!: Provider[];
  works!:Work[]


}
