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
    +_id: string,
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
    "cacheID": "fc8bfb2ee65bb7c752e420a189055da0",
    "id": null,
    "metadata": {},
    "name": "NotesQuery",
    "operationKind": "query",
    "text": "query NotesQuery(\n  $owner: String!\n) {\n  myNotes(owner: $owner) {\n    _id\n    title\n    description\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '85365a2d642622814d98839ca1b456ff';

module.exports = node;
