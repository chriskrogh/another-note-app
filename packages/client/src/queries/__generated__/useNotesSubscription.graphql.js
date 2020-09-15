/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type useNotesSubscriptionVariables = {|
  owner: string
|};
export type useNotesSubscriptionResponse = {|
  +subToMyNotes: $ReadOnlyArray<{|
    +_id: string,
    +title: string,
    +description: string,
  |}>
|};
export type useNotesSubscription = {|
  variables: useNotesSubscriptionVariables,
  response: useNotesSubscriptionResponse,
|};
*/


/*
subscription useNotesSubscription(
  $owner: String!
) {
  subToMyNotes(owner: $owner) {
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
    "name": "subToMyNotes",
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
    "name": "useNotesSubscription",
    "selections": (v1/*: any*/),
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useNotesSubscription",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0b489322c42ad18fc3aa0e1f88968645",
    "id": null,
    "metadata": {},
    "name": "useNotesSubscription",
    "operationKind": "subscription",
    "text": "subscription useNotesSubscription(\n  $owner: String!\n) {\n  subToMyNotes(owner: $owner) {\n    _id\n    title\n    description\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '94b426cc21a36c931d4ca2c2f021ad1c';

module.exports = node;
