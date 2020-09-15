/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type useNotesQueryVariables = {|
  owner: string
|};
export type useNotesQueryResponse = {|
  +myNotes: $ReadOnlyArray<{|
    +_id: string,
    +title: string,
    +description: string,
  |}>
|};
export type useNotesQuery = {|
  variables: useNotesQueryVariables,
  response: useNotesQueryResponse,
|};
*/


/*
query useNotesQuery(
  $owner: String!
) {
  myNotes(owner: $owner) {
    _id
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
        "name": "_id",
        "storageKey": null
      },
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
    "name": "useNotesQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useNotesQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "2cbdf31c51c4308c83401659cae91a77",
    "id": null,
    "metadata": {},
    "name": "useNotesQuery",
    "operationKind": "query",
    "text": "query useNotesQuery(\n  $owner: String!\n) {\n  myNotes(owner: $owner) {\n    _id\n    title\n    description\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '23c8d5cedecd7467043631bd74cd146d';

module.exports = node;
