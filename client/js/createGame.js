Players = new Meteor.Collection('players');
Games = new Meteor.Collection('games');

Meteor.subscribe('players');
Meteor.subscribe('users');
Meteor.subscribe('games');

Template.createGame.helpers({
  verifyEvents: function(eventList) {
    // check that it's an array
    if (!Array.isArray(eventList) || eventList.length === 0) {
      return false;
    }

    for (var i = 0; i < eventList.length; i++) {
      if (!eventList[i] || !(eventName in eventList[i])) {
        return false;
      }
    };

    return true;
  },

  createGame: function(gameName, eventList) {
    if (!verifyEvents(eventList)) {
      return null;
    }

    var gameObj = {
      gameName: "gameName", 
      created_by: Meteor.userId(),
      event_list: eventList,
      participants: [Meteor.userId()]
    };

    Games.insert(gameObj, function(err, id) {
      Meteor.call('playersUpsert', Meteor.userId(), {$push:{'gameList':id}});
    });
  }
};