piepan.On('connect', function() {
  piepan.Self.Move(piepan.Channels["2"]);
  console.log('echo loaded!');
});

piepan.On('message', function(e) {
 
  if(e.Message == "stop"){
    piepan.Audio.Stop();
  } else {

  var directory = "audio/";  

  if (e.Sender == null) {
    return;
  }
  
  if (piepan.Audio.IsPlaying()) {
    piepan.Audio.Stop();
    console.log("Stopping existing audio");
  }
  
  console.log("Playing track: ".concat(e.Message));
  console.log("Current bitrate: ".concat(piepan.Audio.Bitrate()));
  piepan.Audio.SetBitrate(40000);
  piepan.Audio.Play({
      filename: directory.concat(e.Message),
    });

  }

});