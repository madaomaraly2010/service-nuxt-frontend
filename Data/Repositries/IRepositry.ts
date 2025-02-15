export interface IRepositry<ModelType>{
  findAll():Promise<ModelType[]>;
  findOne(id:number):Promise<ModelType>
  create(row:ModelType):Promise<ModelType>;
  update(row:ModelType):Promise<ModelType>;
  delete(id:number):Promise<ModelType>
}