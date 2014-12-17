piepan.On('connect', function() {
  piepan.Self.Move(piepan.Channels["2"]);
  console.log('echo loaded!');
});

piepan.On('message', function(e) {
  if (e.Sender == null) {
    return;
  }
  piepan.Self.Channel().Send(e.Message, false);
});