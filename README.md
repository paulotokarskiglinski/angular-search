# AngularSearch

AngularSearch é um projeto que implementa uma [Pipe](https://github.com/paulotokarskiglinski/angularSearch/blob/master/src/app/pipes/search.pipe.ts) de pesquisa que tem por objetivo filtrar e retornar um vetor de objetos que contenham um determinado valor.

A busca é realizada por todos os campos do objeto enviado.

**Versão online:** https://angularsearch.herokuapp.com/

**Exemplo**
``` html
<input type="text" id="searchTextUsers" [(ngModel)]="searchTextUsers" placeholder="Type here...">

<table>
  <tr *ngFor="let user of users | search:searchTextUsers">
    <td>{{user.username}}</td>
    <td>{{user.name}}</td>
    <td>{{user.email}}</td>
    <td>{{user.phone}}</td>
    <td>{{user.website}}</td>
  </tr>
</table>
```
