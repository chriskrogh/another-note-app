/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateNoteInput = {|
  description: string,
  owner: string,
  title: string,
|};
export type useCreateNoteMutationVariables = {|
  data: CreateNoteInput
|};
export type useCreateNoteMutationResponse = {|
  +createNote: {|
    +_id: string
  |}
|};
export type useCreateNoteMutation = {|
  variables: useCreateNoteMutationVariables,
  response: useCreateNoteMutationResponse,
|};
*/


/*
mutation useCreateNoteMutation(
  $data: CreateNoteInput!
) {
  createNote(data: $data) {
    _id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "data"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "data",
        "variableName": "data"
      }
    ],
    "concreteType": "Note",
    "kind": "LinkedField",
    "name": "createNote",
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
    "name": "useCreateNoteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useCreateNoteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a2f3f8bd0fe147049562ddb11fe1ec5e",
    "id": null,
    "metadata": {},
    "name": "useCreateNoteMutation",
    "operationKind": "mutation",
    "text": "mutation useCreateNoteMutation(\n  $data: CreateNoteInput!\n) {\n  createNote(data: $data) {\n    _id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '267e720de9e276d765fcbc079b473806';

module.exports = node;
