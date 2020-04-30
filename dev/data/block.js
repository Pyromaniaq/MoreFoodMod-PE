Ace3.addOre("oreRockSalt",[{name:"Rock Salt",texture:[["rockSalt",0]],inCreative:true}],
{destroytime: 1.5,destroylevel: 1},
{
NORMAL_UNDERGROUND: {rare: 10,count: random(4,10),minY: 32,maxY: 64},
NORMAL: {rare: 10,count: random(4,10),minY: 64,maxY: 128}
},
function(coords,blockID,blockData,level,enchant){
if(level>0){
ToolAPI.dropOreExp(coords, 0, 2, enchant.experience);
return [[ItemID.salt, random(1,4), 0]];
}
return [];
}
);