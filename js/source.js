window.fcWidget.init({ token: "87cc47b8-bbdc-4cd5-aacd-e4f8a57765c5", host: "https://wchat.freshchat.com" });
window.fcWidget.setExternalId("joe.smith");
 // To set user name
 window.fcWidget.user.setFirstName("Joe");
 window.fcWidget.user.setLastName("Smith");

 // To set user email
 window.fcWidget.user.setEmail("joe.smithfd@gmail.com");

 // To set user properties
 window.fcWidget.user.setProperties({
   plan: "Premium",                 // meta property 1
   status: "Lead"                // meta property 2
 });
