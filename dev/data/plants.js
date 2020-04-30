Ace3.addItem("tomato_seeds", "Tomato Seeds", {name:"TomatoSeed",meta:0},{});
Ace3.addItem("lettuce_seeds", "Lettuce Seeds", {name:"LettuceSeed",meta:0},{});
Ace3.addItem("pepper_seeds", "Pepper Seeds", {name:"PepperSeed",meta:0},{});
Ace3.addItem("corn_seeds", "Corn Seeds", {name:"CornSeed",meta:0},{});
Ace3.addItem("cucumber_seeds", "Cucumber Seeds", {name:"CucumberSeed",meta:0},{});
Ace3.addItem("strawberry_seeds", "Strawberry Seeds", {name:"StrawberrySeed",meta:0},{});
//Ace3.addItem("rice_seeds", "Rice Seeds", {name:"RiceSeed",meta:0},{});

Harvest.addGrassDrop(ItemID.tomato_seeds);
Harvest.addGrassDrop(ItemID.lettuce_seeds);
Harvest.addGrassDrop(ItemID.pepper_seeds);
Harvest.addGrassDrop(ItemID.corn_seeds);
Harvest.addGrassDrop(ItemID.cucumber_seeds);
Harvest.addGrassDrop(ItemID.strawberry_seeds);
//Harvest.addGrassDrop(ItemID.rice_seeds);
Harvest.addGrassDrop(ItemID.rice);

Ace3.addPlant({
blockID:"Tomatocrop",
name:"tomatocrop",
texture:"tomato_crop",
type:BLOCK_TYPE_CROP,
render:"crop",
seed:ItemID.tomato_seeds,
drop:ItemID.tomato
});

Ace3.addPlant({
blockID:"Lettucecrop",
name:"lettucecrop",
texture:"lettuce_crop",
type:BLOCK_TYPE_CROP,
render:"crop",
seed:ItemID.lettuce_seeds,
drop:ItemID.lettuce
});

Ace3.addPlant({
blockID:"Onioncrop",
name:"onioncrop",
texture:"onion_crop",
type:BLOCK_TYPE_CROP,
render:"crop",
seed:ItemID.onion,
drop:ItemID.onion
});

Ace3.addPlant({
blockID:"Peppercrop",
name:"peppercrop",
texture:"pepper_crop",
type:BLOCK_TYPE_CROP,
render:"crop",
seed:ItemID.pepper_seeds,
drop:ItemID.pepper
});

Ace3.addPlant({
blockID:"Corncrop",
name:"corncrop",
texture:"corn_crop",
type:BLOCK_TYPE_CROP,
render:"crop",
seed:ItemID.corn_seeds,
drop:ItemID.corn
});

Ace3.addPlant({
blockID:"Cucumbercrop",
name:"cucumbercrop",
texture:"cucumber_crop",
type:BLOCK_TYPE_CROP,
render:"crop",
seed:ItemID.cucumber_seeds,
drop:ItemID.cucumber
});

Ace3.addPlant({
blockID:"Strawberrycrop",
name:"strawberrycrop",
texture:"strawberry_crop",
type:BLOCK_TYPE_CROP,
render:"crop",
seed:ItemID.strawberry_seeds,
drop:ItemID.strawberry
});

Ace3.addPlant({
blockID:"Ricecrop",
name:"ricecrop",
texture:"rice_crop",
type:BLOCK_TYPE_CROP,
render:"crop",
seed:ItemID.rice,
drop:ItemID.rice
});