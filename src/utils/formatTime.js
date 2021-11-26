module.exports = function formatTime(totalSeconds){
    function pad(s){
      return (s < 10 ? '0' : '') + s;
    }
    let hours = Math.floor(totalSeconds / (60*60));
    let minutes = Math.floor(totalSeconds % (60*60) / 60);
    let seconds = Math.floor(totalSeconds % 60);
  
    return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}
