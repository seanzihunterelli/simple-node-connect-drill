angular.module("myChats").service("mainSrvc", function($http){

  this.getChats = function(){
    return $http.get('/api/chats');
    //TODO Call server to get the chats
  };

  this.addChats = function(chat){
    return $http.post('/api/chats', chat);
    //TODO Call server to add to chats
  };

  this.deleteChats = function(){
    return $http.delete('/api/chats');
    //TODO Call server to wipe all the chats
  };
  this.setScreenname = function (screenname) {
    var dataObj = {
      screenname: screenname
    };
    return $http.post('/api/screenname', dataObj);
  };
});
