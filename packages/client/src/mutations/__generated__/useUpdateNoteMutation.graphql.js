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
  +updateNote: ?boolean
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
  updateNote(id: $id, data: $data)
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
    "kind": "ScalarField",
    "name": "updateNote",
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
    "cacheID": "e8fb10204d52a92edb1e6865825f78fe",
    "id": null,
    "metadata": {},
    "name": "useUpdateNoteMutation",
    "operationKind": "mutation",
    "text": "mutation useUpdateNoteMutation(\n  $id: String!\n  $data: UpdateNoteInput!\n) {\n  updateNote(id: $id, data: $data)\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd0a00ef85b96777fe334ee214811e4a4';

module.exports = node;
