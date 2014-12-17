piepan.On('connect', function() {
  piepan.Self.Move(piepan.Channels["2"]);
  console.log('echo loaded!');
});

piepan.On('message', function(e) {
  
  var directory = "audio/";  

  if (e.Sender == null) {
    return;
  }
  
  if (piepan.Audio.IsPlaying()) {
    piepan.Audio.Stop();
  }
  
  piepan.Audio.Play(directory.concat(e.Message));

});