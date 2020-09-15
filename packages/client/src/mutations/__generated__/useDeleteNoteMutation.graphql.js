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
  +deleteNote: ?boolean
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
  deleteNote(id: $id)
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
    "kind": "ScalarField",
    "name": "deleteNote",
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
    "cacheID": "614b5164a688e56ff93f5b681255b38c",
    "id": null,
    "metadata": {},
    "name": "useDeleteNoteMutation",
    "operationKind": "mutation",
    "text": "mutation useDeleteNoteMutation(\n  $id: String!\n) {\n  deleteNote(id: $id)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fd061d3749198ec936542e6c7756e0af';

module.exports = node;
