/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NotesQueryVariables = {|
  owner: string
|};
export type NotesQueryResponse = {|
  +myNotes: $ReadOnlyArray<{|
    +title: string,
    +description: string,
  |}>
|};
export type NotesQuery = {|
  variables: NotesQueryVariables,
  response: NotesQueryResponse,
|};
*/


/*
query NotesQuery(
  $owner: String!
) {
  myNotes(owner: $owner) {
    title
    description
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "owner"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "owner",
        "variableName": "owner"
      }
    ],
    "concreteType": "Note",
    "kind": "LinkedField",
    "name": "myNotes",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NotesQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NotesQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "8509e68297c60ec5a875ca4c3248146e",
    "id": null,
    "metadata": {},
    "name": "NotesQuery",
    "operationKind": "query",
    "text": "query NotesQuery(\n  $owner: String!\n) {\n  myNotes(owner: $owner) {\n    title\n    description\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5fc93283c40d1f8e8cfac820a3404c2c';

module.exports = node;
