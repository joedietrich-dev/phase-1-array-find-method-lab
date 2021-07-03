function superbowlWin(games) {
  const won = games.find(game => game.result === "W");
  return won ? won.year : won;
}


