if (Meteor.isClient) {
  

  Template.body.helpers({
    $('#Modal1').modal('show');
  });
  
  // Template..events({
  //   'click button': function () {
  //     // increment the counter when button is clicked
      
  //   }
  // });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
