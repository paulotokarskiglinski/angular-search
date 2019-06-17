# AngularSearch

AngularSearch é um projeto que implementa uma [Pipe](https://github.com/paulotokarskiglinski/angularSearch/blob/master/src/app/pipes/search.pipe.ts) de pesquisa que tem por objetivo filtrar e retornar um vetor de objetos que contenham um determinado valor.

A busca é realizada não apenas em um campo, por exemplo o campo "nome" do vetor de objetos, mas sim no vetor de campos que forem passados por parâmetro para a Pipe ["nome", "email", "telefone"].

**Versão online:** https://angularsearch.herokuapp.com/

**Exemplo**
``` html
<input type="text" id="searchTextUsers" [(ngModel)]="searchTextUsers" placeholder="Type here...">

<table>
  <tr *ngFor="let user of users | search:searchTextUsers:['name','username','email','phone','website']">
    <td>{{user.username}}</td>
    <td>{{user.name}}</td>
    <td>{{user.email}}</td>
    <td>{{user.phone}}</td>
    <td>{{user.website}}</td>
  </tr>
</table>
```

Este projeto utiliza o [Angular](https://angular.io/) versão 8.0.0.
