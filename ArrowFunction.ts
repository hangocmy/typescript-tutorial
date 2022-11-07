var ScoreCard = function () {
  this.score = 0;

  this.getScore = function () {
    setTimeout (() => {
      console.log(this.score);
    }, 1000);
  }
}

var a3 = new ScoreCard();
a3.getScore();