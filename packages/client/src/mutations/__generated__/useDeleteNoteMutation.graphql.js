/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type useDeleteNoteMutationVariables = {|
  id: string
|};
export type useDeleteNoteMutationResponse = {|
  +deleteNote: ?{|
    +_id: string
  |}
|};
export type useDeleteNoteMutation = {|
  variables: useDeleteNoteMutationVariables,
  response: useDeleteNoteMutationResponse,
|};
*/


/*
mutation useDeleteNoteMutation(
  $id: String!
) {
  deleteNote(id: $id) {
    _id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Note",
    "kind": "LinkedField",
    "name": "deleteNote",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
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
    "name": "useDeleteNoteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useDeleteNoteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "ceec83c542ca20c805892b11ae88a48d",
    "id": null,
    "metadata": {},
    "name": "useDeleteNoteMutation",
    "operationKind": "mutation",
    "text": "mutation useDeleteNoteMutation(\n  $id: String!\n) {\n  deleteNote(id: $id) {\n    _id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a37e920d6185ccbaa31cc7d2cca4e5e1';

module.exports = node;
