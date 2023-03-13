import { ICategory } from "../../interface/category.interface"

// https://www.youtube.com/watch?v=iGn5iVBk3c8 13 minutos de video
export class BaseRepository<Interface> { // seve para ser integrado com os serviços

  findAll(): Interface[] {
    return []
  }

  findOne(id: Interface) {
    return null
  }

  create(obj: Interface) { }

}


class CategoryRepository extends BaseRepository<ICategory> {}

const repo = new CategoryRepository()
repo.findAll()[0].id // a tipagem fica universal
