import type { WorkCategory } from ".";



export class Work  {
  id!: number;
  arb_name!: string;
  eng_name!: string;
  workCategoryId!: number;
  workCategory!:WorkCategory

}
