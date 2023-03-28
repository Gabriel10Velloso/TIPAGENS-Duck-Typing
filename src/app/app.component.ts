import { Component, OnInit } from '@angular/core';
import { ICategory } from './EXEMPLO 01 TIPAGEM/interface/category.interface';
import { TesteModelB, TesteModelA, TesteModelC } from './EXEMPLO 01 TIPAGEM/model/category.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  valueA!: TesteModelA
  valueB!: TesteModelB
  valueC!: TesteModelC

  employee!: ICategory

  constructor(){
  }


  ngOnInit(): void {
    // TESTE C
    this.valueA = new TesteModelA(0, '') // Quando eu coloco constructor no model, eu consigo alimentar os valores
    // this.valueA.name2 = 'sss' // Quando inicio um valor no constructor do model  this.name2 = "your string value here -- TesteModelA"; .... sepre será esse valor a não ser que seja alimentado um novo
    console.log('Teste A', this.valueA.name2)

    // TESTEB
    this.valueB = new TesteModelB() // Quando eu não coloco no constructor eu não consigo adicionar novos valores dentro do new ....
    console.log('Teste B', this.valueB.name2)


    // TESTE C
    this.valueC = new TesteModelC()
    console.log('Teste C', this.valueC.model.name2)

    // TESTE EMPLOYEE
    this.employee = {
      name: 'Gabriel',
      lastName: 'Velloso',
      getFullName(): string {
        return `${this.name} ${this.lastName}`
      }
    }
    console.log('this.employee.getFullName() ->>>' , this.employee.getFullName())
  }
}
