# kanbrello client side 

* [x] Generate Server.
* [x] Generate Client.
* [x] Add local auth to server.
* [x] Add material-ui to client.
* [x] Add redux to client.
* [ ] Add login to client. 
* [ ] Add boards service to server
* [ ] User can create/list/view boards on client
  * [ ] Create
    * [ ] Add ownerId
  * [ ] List
    * [ ] Restrict to owner
  * [ ] View
    * [ ] Restrict to owner
* [ ] Add lists service to server
* [ ] User can create/list/view lists for boards on client
  * [ ] Create
    * [ ] Restrict to board owner
  * [ ] List
    * [ ] Restrict to board owner
* [ ] Store should update boards/lists when login/logout
* [ ] Add cards service to server
* [ ] User can create/list/view cards for lists on client
  * [ ] Create
    * [ ] Restrict to board owner
  * [ ] List
    * [ ] Restrict to board owner
* [ ] User can move cards from one list to another
* [ ] Restrict editing/creating lists/cards to board owner
  * [ ] Update to work for no boardId in query 
* [ ] Create activities service on server
* [ ] All activities are logged
* [ ] User can edit title of card
  * [ ] restrict to board members
* [ ] User can add description to a card
  * [ ] restrict to board members
* [ ] User can assign a member to a card
  * [ ] restrict to board members
* [ ] User can re-arrange cards in list
  * [ ] restrict to board members
* [ ] User can re-arrange lists
  * [ ] restrict to board members
* [ ] User can add comments to a card
  * [ ] restrict to board members
