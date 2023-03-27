// https://www.youtube.com/watch?v=iGn5iVBk3c8 13 minutos de video



export class MEntity {
  constructor(
    public id: number,
    public name: string
  ) { }

  toArray() { }
}

export class MCategory extends MEntity {
  fullName: string | undefined
}



/////////////////////////////////////////////////////////////



export class TesteModelA {
  constructor(
    public id2: number,
    public name2: string,
  ) {
    // this.model = new TesteModel();
    this.name2 = "your string value here -- TesteModelA"; // dessa forma posso inicialisar o valor aqui.
  }
}

export class TesteModelB {
  id2: number | undefined
  name2: string | undefined
}


export class TesteModelC {
  public model: TesteModelB;
  constructor() {
    this.model = new TesteModelB();
    this.model.name2 = "your string value here -- TesteModelB"; // dessa forma posso inicialisar o valor aqui.
  }
}






