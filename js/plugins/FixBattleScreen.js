BattleManager.enemyPosition = function(index, maxEnemies) {
    var x = (Graphics.width / (maxEnemies + 1)) * (index + 1);
    var y = Graphics.height - 150; // Ajusta 150 al valor que necesites para la altura
    return [x, y];
};