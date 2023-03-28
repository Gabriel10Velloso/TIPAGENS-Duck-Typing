import { MCategory, MEntity } from "../category.model"

// https://www.youtube.com/watch?v=iGn5iVBk3c8 13 minutos de video
export class BaseRepository<Model extends MEntity> { // seve para ser integrado com os serviços

  findAll(): Model[] {
    return []
  }


  findOne(id: Model) {
    return null
  }

  create(obj: Model) { }

}


class CategoryRepository extends BaseRepository<MCategory> {}

const repo = new CategoryRepository()
repo.findAll()[0].fullName
