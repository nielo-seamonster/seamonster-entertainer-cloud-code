// ====================================================================================================
//
// Cloud Code for LR, write your code here to customise the GameSparks platform.
//
// For details of the GameSparks Cloud Code API see https://portal.gamesparks.net/docs.htm			
//
// ====================================================================================================
//Something goes here!
//I hope this works mate!
var coins = Spark.getData().coins;
var fame = Spark.getData().fame;

Spark.getPlayer().setPrivateData("coins", coins);
Spark.getPlayer().setPrivateData("fame", fame);

var levelResult = Spark.runtimeCollection("LevelResult");
levelResult.insert([{
        "playerId" : Spark.getPlayer().getPlayerId(),
        "coins" : coins,
        "fame" : fame
    }])