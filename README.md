# AngularSearch

AngularSearch é um projeto que implementa uma [Pipe]() de pesquisa que tem por objetivo filtrar e retornar um vetor de objetos que contenham um determinado valor.

A busca é realizada não apenas em um campo, por exemplo o campo "nome" do vetor de objetos, mas sim no vetor de campos que forem passados por parâmetro para a Pipe ["nome", "email", "telefone"].

**Exemplo**
``` angular2html
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

Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) versão 7.3.7.
