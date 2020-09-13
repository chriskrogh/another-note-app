/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateNoteInput = {|
  description?: ?string,
  title?: ?string,
|};
export type useUpdateNoteMutationVariables = {|
  id: string,
  data: UpdateNoteInput,
|};
export type useUpdateNoteMutationResponse = {|
  +updateNote: ?{|
    +_id: string
  |}
|};
export type useUpdateNoteMutation = {|
  variables: useUpdateNoteMutationVariables,
  response: useUpdateNoteMutationResponse,
|};
*/


/*
mutation useUpdateNoteMutation(
  $id: String!
  $data: UpdateNoteInput!
) {
  updateNote(id: $id, data: $data) {
    _id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "data"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "data",
        "variableName": "data"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "Note",
    "kind": "LinkedField",
    "name": "updateNote",
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "useUpdateNoteMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "useUpdateNoteMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "a28daadef1749ddb5d17c222aa889a01",
    "id": null,
    "metadata": {},
    "name": "useUpdateNoteMutation",
    "operationKind": "mutation",
    "text": "mutation useUpdateNoteMutation(\n  $id: String!\n  $data: UpdateNoteInput!\n) {\n  updateNote(id: $id, data: $data) {\n    _id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd3dbbb32f2d19868cca279d8c9e3dbf7';

module.exports = node;
