var chats = [];
module.exports = {

  getChats:function(req,res){
      res.status(200).send(chats);
    // TODO write getChats
  },
  postChats:function(req,res){
    // TODO write postChats
      chats.push(req.body);
      res.status(200).send(chats);
  },
  deleteChats:function(req,res){
    // TODO write deleteChats
      chats.splice(0, chats.length);
      res.status(200).send(chats);
  }
};
