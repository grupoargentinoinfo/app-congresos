(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"creditos_atlas_", frames: [[0,3898,407,91],[1148,4016,431,53],[627,3898,172,172],[0,0,1280,1920],[0,1922,1280,1920],[1282,0,1280,1920],[2564,0,598,729],[0,3991,625,52],[1148,3844,170,170],[0,3844,818,52],[1320,3844,382,52],[801,3898,172,172],[1282,1922,1280,1920],[975,3844,171,171]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Contacto = function() {
	this.spriteSheet = ss["creditos_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Facebook = function() {
	this.spriteSheet = ss["creditos_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Facebook_1 = function() {
	this.spriteSheet = ss["creditos_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Fondo_1 = function() {
	this.spriteSheet = ss["creditos_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Forma1 = function() {
	this.spriteSheet = ss["creditos_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Forma2 = function() {
	this.spriteSheet = ss["creditos_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Logo = function() {
	this.spriteSheet = ss["creditos_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Mail = function() {
	this.spriteSheet = ss["creditos_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Mail_1 = function() {
	this.spriteSheet = ss["creditos_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Página = function() {
	this.spriteSheet = ss["creditos_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Tw = function() {
	this.spriteSheet = ss["creditos_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Tw_1 = function() {
	this.spriteSheet = ss["creditos_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.VectorSmartObject = function() {
	this.spriteSheet = ss["creditos_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Web = function() {
	this.spriteSheet = ss["creditos_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.txt_leonel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE8317").s().p("AhjEVIAAgnIA9gSIAAm3Ig9gOIAAgoICGgDIAAHwIBBASIAAAng");
	this.shape.setTransform(470.6,44.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE8317").s().p("AhWCuQgngYgTgrQgTgsAAg8QAAg5AXgtQAWgtAngaQAogaA0gBQBOAAAkAsQAlAsAABRIgCAaIgCANIj3AAQAAA8AcAiQAdAjAuAAQAkAAAbgKQAcgJAPgKIAPgKIAZAlIgMAKQgLAJgVALQgVAMgbAJQgdAJggAAQg5AAgmgYgABXgqQAAgbgHgXQgIgWgRgNQgRgNgdgBQgcABgUANQgVANgLAWQgLAXgDAbICsAAIAAAAg");
	this.shape_1.setTransform(439.2,52.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE8317").s().p("AApDCIAAgnIAvgSIAAjCQAAglgPgTQgPgTgjAAQgXAAgSAJQgTAIgOALQgOAMgHAIIgIAJIAADUIAvASIAAAnIi0AAIAAgnIA9gSIAAkKIg9gOIAAgoIB2gDIAHAzQAJgJAUgNQAUgNAbgMQAagKAfgCQA7ABAcAjQAcAjAAA7IAADJIA2ASIAAAng");
	this.shape_2.setTransform(396.4,52.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FE8317").s().p("AiBCWQgugxAAhhQAAg9AXgtQAXgtApgZQAqgZA1AAQA2AAAmAYQAlAXAUArQAUArAAA6QAAA8gWAuQgXAugoAaQgoAag2AAQhRAAgtgwgAhLhoQgZAjAABFQAABCAXAlQAYAlA1AAQA2AAAXgkQAYglAAhGQAAgngKgfQgJgfgVgRQgWgSgjAAQg1AAgaAjg");
	this.shape_3.setTransform(351.5,52.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE8317").s().p("AhWCuQgngYgTgrQgTgsAAg8QAAg5AXgtQAWgtAngaQAogaA0gBQBOAAAkAsQAlAsAABRIgCAaIgCANIj3AAQAAA8AcAiQAdAjAuAAQAkAAAbgKQAcgJAPgKIAPgKIAZAlIgMAKQgLAJgVALQgVAMgbAJQgdAJggAAQg5AAgmgYgABXgqQAAgbgHgXQgIgWgRgNQgRgNgdgBQgcABgUANQgVANgLAWQgLAXgDAbICsAAIAAAAg");
	this.shape_4.setTransform(310.7,52.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FE8317").s().p("AiuD8IAAgrIA9gPIAAmEIg9gOIAAgoIDFgDIAAArIg8AOIAAGEICTAAIAOhTIAyAAIAACNg");
	this.shape_5.setTransform(273.3,46.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FE8317").s().p("AhdETIAAgnIA9gSIAAkKIg9gNIAAgpICEgDIAAFDIA2ASIAAAngAgii6QgMgNAAgZQABgZANgMQAOgNASgBQAWAAANAMQAMAMAAAbQAAAQgIAMQgHALgLAGQgKAFgLAAQgVAAgNgMg");
	this.shape_6.setTransform(224.9,44.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FE8317").s().p("AiRC/IAAg2IDRkRIiGAAIgKA2IgyAAIAAhsIEUAAIAAA2IjSERICSAAIAKg6IAyAAIAABwg");
	this.shape_7.setTransform(195.5,52.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FE8317").s().p("AiRC/IAAg2IDRkRIiGAAIgKA2IgyAAIAAhsIEUAAIAAA2IjSERICSAAIAKg6IAyAAIAABwg");
	this.shape_8.setTransform(160.6,52.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FE8317").s().p("AhdETIAAgnIA+gSIAAkKIg+gNIAAgpICFgDIAAFDIA2ASIAAAngAghi6QgMgNgBgZQABgZANgMQAOgNASgBQAWAAAMAMQANAMAAAbQgBAQgGAMQgIALgKAGQgLAFgLAAQgVAAgMgMg");
	this.shape_9.setTransform(131,44.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FE8317").s().p("AhjEVIAAgnIA9gSIAAm3Ig9gOIAAgoICGgDIAAHwIBBASIAAAng");
	this.shape_10.setTransform(108.4,44.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FE8317").s().p("AiTCqQgdgcAAg0QAAgpAVgZQAUgYAlgKQAlgLAzAAIA4AAIAAg5QAAghgSgQQgSgQgfAAQggABgUAEIgVAGIgKA2IgvAAIgDhaIANgFIAjgKQAVgFAYgFQAYgEAXAAQA/gBAiAaQAjAZAAA+IAADaIA7APIAAAnIhxAEIgPgzQgMANgSANQgSAOgVAJQgXAJgZAAQg0AAgbgcgAhQAoQgXAOABAgQAAAZAOAPQAOAOAYAAQAUAAATgJQAQgIANgLQANgMAIgIIAHgJIAAg6IgwAAIgEAAQgzAAgXAPg");
	this.shape_11.setTransform(76.9,52.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FE8317").s().p("Ah+DnQg0gcgbg4Qgcg3AAhRQAAhTAeg8QAdg8A2ghQA2ghBJgBQApABAlAJQAkAIAYAJQAYAJAAAAIgDB3IgvAAIgWhPIgNgEQgNgEgWgDQgVgDgcAAQhIAAgnA1QgnA0AABkQAABAAUArQAUAqAkAVQAjAUAuAAQAaAAAXgFIAlgIIAPgEIAAh3Ig9gPIAAgnIC7gEIAAArIg2APIAACaIgYALQgXALgpAKQgqALg0ABQhJAAgzgdg");
	this.shape_12.setTransform(29.7,46.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_leonel, new cjs.Rectangle(0,0,483.1,90.4), null);


(lib.txt_gabriel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE8317").s().p("AhjEVIAAgnIA9gSIAAm3Ig9gOIAAgoICGgDIAAHwIBBASIAAAng");
	this.shape.setTransform(629.3,44.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE8317").s().p("AhWCuQgngYgTgrQgTgsAAg8QAAg5AXgtQAWgtAngaQAogaA0gBQBOAAAkAsQAlAsAABRIgCAaIgCANIj3AAQAAA8AcAiQAdAjAuAAQAkAAAbgKQAcgJAPgKIAPgKIAZAlIgMAKQgLAJgVALQgVAMgbAJQgdAJggAAQg5AAgmgYgABXgqQAAgbgHgXQgIgWgRgNQgRgNgdgBQgcABgUANQgVANgLAWQgLAXgDAbICsAAIAAAAg");
	this.shape_1.setTransform(597.9,52.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE8317").s().p("AhdETIAAgnIA9gSIAAkKIg9gNIAAgpICEgDIAAFDIA2ASIAAAngAghi6QgNgNAAgZQABgZANgMQAOgNASgBQAWAAANAMQALAMABAbQAAAQgIAMQgHALgLAGQgKAFgLAAQgVAAgMgMg");
	this.shape_2.setTransform(566.8,44.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FE8317").s().p("AiUDCIAAgnIA9gSIAAkKIg9gOIAAgoIB2gDIAHA1QAJgLAPgOQAQgOAWgLQAVgJAZgCQAbACASAEIATAFIgDBpIgvAAIgLg2QgbAAgUAJQgVAKgOANQgNANgIALIAADVIBHASIAAAng");
	this.shape_3.setTransform(538.8,52.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE8317").s().p("AhIEVIgvgJIgRgFIAAnmIg5gNIAAgpICBgDIAADQQASgPAcgNQAagNAjgCQA0ABAhAYQAjAXAPApQARAqAAA4QgBA+gWAuQgXAvgrAbQgtAbg/AAQgoAAgegEgAgYgsQgUALgKALIgKAMIAADiIAQADQAQAEAnAAQAqAAAYgTQAYgUALggQALghAAgoQAAgogJgeQgJgegUgRQgUgTggABQggAAgVAMg");
	this.shape_4.setTransform(498.3,44.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FE8317").s().p("AiTCqQgcgcgBg0QABgpATgZQAVgYAmgKQAlgLAyAAIA5AAIAAg5QgBghgRgQQgSgQggAAQghABgUAEIgUAGIgKA2IguAAIgEhaIANgFIAjgKQAUgFAZgFQAYgEAXAAQA+gBAkAaQAiAZABA+IAADaIA5APIAAAnIhvAEIgQgzQgMANgSANQgSAOgVAJQgXAJgZAAQg0AAgbgcgAhPAoQgYAOABAgQAAAZAOAPQAOAOAYAAQAVAAARgJQARgIANgLQANgMAIgIIAIgJIAAg6IgyAAIgDAAQgzAAgWAPg");
	this.shape_5.setTransform(458.8,52.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FE8317").s().p("Ah+DnQg0gcgbg4Qgcg3AAhRQAAhTAeg8QAdg8A2ghQA2ghBJgBQApABAlAJQAkAIAYAJQAYAJAAAAIgDB3IgvAAIgWhPIgNgEQgNgEgWgDQgVgDgcAAQhIAAgnA1QgnA0AABkQAABAAUArQAUAqAkAVQAjAUAuAAQAaAAAXgFIAlgIIAPgEIAAh3Ig9gPIAAgnIC7gEIAAArIg2APIAACaIgYALQgXALgpAKQgqALg0ABQhJAAgzgdg");
	this.shape_6.setTransform(411.6,46.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FE8317").s().p("AhWCuQgngYgTgrQgTgsAAg8QAAg5AXgtQAWgtAngaQAogaA0gBQBOAAAkAsQAlAsAABRIgCAaIgCANIj3AAQAAA8AcAiQAdAjAuAAQAkAAAbgKQAcgJAPgKIAPgKIAZAlIgMAKQgLAJgVALQgVAMgbAJQgdAJggAAQg5AAgmgYgABXgqQAAgbgHgXQgIgWgRgNQgRgNgdgBQgcABgUANQgVANgLAWQgLAXgDAbICsAAIAAAAg");
	this.shape_7.setTransform(347.7,52.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FE8317").s().p("AiUDCIAAgnIA9gSIAAkKIg9gOIAAgoIB2gDIAHA1QAJgLAPgOQAQgOAWgLQAVgJAZgCQAbACASAEIATAFIgDBpIgvAAIgLg2QgbAAgUAJQgVAKgOANQgNANgIALIAADVIBHASIAAAng");
	this.shape_8.setTransform(312.7,52.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FE8317").s().p("AiTCqQgcgcgBg0QABgpATgZQAVgYAmgKQAlgLAyAAIA5AAIAAg5QgBghgRgQQgSgQggAAQghABgUAEIgUAGIgKA2IguAAIgEhaIANgFIAjgKQAUgFAZgFQAYgEAXAAQA+gBAkAaQAiAZABA+IAADaIA5APIAAAnIhvAEIgQgzQgMANgSANQgSAOgVAJQgXAJgZAAQg0AAgbgcgAhPAoQgYAOABAgQAAAZAOAPQAOAOAYAAQAVAAARgJQARgIANgLQANgMAIgIIAIgJIAAg6IgyAAIgDAAQgzAAgWAPg");
	this.shape_9.setTransform(275.2,52.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FE8317").s().p("AhQDCQgagEgOgEIgPgEIAAhqIAzAAIAIA+IAPADQAQADAdAAQAVAAASgFQATgFALgMQALgNAAgWQAAgWgUgNQgUgMgdgKQgegIgegNQgdgLgVgWQgUgWAAgnQAAglARgZQASgZAdgMQAegNAlAAQAdAAAbAGQAdAFASAFIATAGIgCBhIgvAAIgLg4IgQgFQgPgEgbAAQgbAAgSAKQgSALAAAbQAAAXAUANQAUANAdAJQAeAKAeAMQAdAMAVAUQAUAWAAAkQAAApgVAcQgWAbgkANQgjAOgrAAQghAAgagEg");
	this.shape_10.setTransform(237.4,52.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FE8317").s().p("AhQDCQgagEgOgEIgPgEIAAhqIAzAAIAIA+IAPADQAQADAdAAQAVAAASgFQATgFALgMQALgNAAgWQAAgWgUgNQgUgMgdgKQgegIgegNQgdgLgVgWQgUgWAAgnQAAglARgZQASgZAdgMQAegNAlAAQAdAAAbAGQAdAFASAFIATAGIgCBhIgvAAIgLg4IgQgFQgPgEgbAAQgbAAgSAKQgSALAAAbQAAAXAUANQAUANAdAJQAeAKAeAMQAdAMAVAUQAUAWAAAkQAAApgVAcQgWAbgkANQgjAOgrAAQghAAgagEg");
	this.shape_11.setTransform(203.6,52.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FE8317").s().p("AiTCqQgdgcAAg0QAAgpAVgZQAUgYAlgKQAmgLAyAAIA4AAIAAg5QAAghgSgQQgRgQggAAQghABgTAEIgUAGIgLA2IgvAAIgDhaIANgFIAigKQAWgFAXgFQAZgEAXAAQA/gBAiAaQAjAZAAA+IAADaIA7APIAAAnIhxAEIgOgzQgNANgSANQgSAOgVAJQgWAJgaAAQgzAAgcgcgAhQAoQgXAOABAgQAAAZAOAPQAOAOAYAAQAUAAATgJQAQgIANgLQANgMAIgIIAHgJIAAg6IgwAAIgEAAQgzAAgXAPg");
	this.shape_12.setTransform(167,52.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FE8317").s().p("AhjEVIAAgnIA9gSIAAm3Ig9gOIAAgoICGgDIAAHwIBBASIAAAng");
	this.shape_13.setTransform(135.8,44.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FE8317").s().p("AiUDCIAAgnIA9gSIAAkKIg9gOIAAgoIB2gDIAHA1QAJgLAPgOQAQgOAWgLQAVgJAZgCQAbACASAEIATAFIgDBpIgvAAIgLg2QgbAAgUAJQgVAKgOANQgNANgIALIAADVIBHASIAAAng");
	this.shape_14.setTransform(108.4,52.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FE8317").s().p("AiTCqQgcgcAAg0QgBgpAVgZQAUgYAlgKQAmgLAyAAIA4AAIAAg5QAAghgSgQQgRgQggAAQghABgTAEIgUAGIgKA2IgwAAIgDhaIANgFIAigKQAVgFAYgFQAZgEAYAAQA9gBAjAaQAjAZAAA+IAADaIA7APIAAAnIhxAEIgOgzQgNANgSANQgSAOgVAJQgXAJgYAAQg1AAgbgcgAhQAoQgXAOABAgQAAAZAOAPQAOAOAZAAQATAAATgJQAQgIANgLQANgMAIgIIAHgJIAAg6IgwAAIgEAAQgzAAgXAPg");
	this.shape_15.setTransform(70.8,52.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FE8317").s().p("AhhDnQg0gcgcg4Qgbg3gBhRQABhTAdg8QAeg8A2ghQA2ghBJgBQApABAkAJQAlAIAXAJQAYAJABAAIgEB7Ig2AAIgThTIgMgEQgLgEgWgDQgUgDgbAAQhIAAgnA1QgnA0gBBkQABBAAUApQATAqAjAUQAjATAsAAQAdAAAagJQAagIAUgLQAUgMALgIIAMgJIAeAvIgOAMQgNALgXAPQgYAPghAKQghAMgoABQhIAAgzgdg");
	this.shape_16.setTransform(26.9,46.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_gabriel, new cjs.Rectangle(0,0,641.8,90.4), null);


(lib.Txt_casella_mariana = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE8317").s().p("AiTCqQgdgcAAg0QAAgpAVgZQAUgYAlgKQAlgLAzAAIA4AAIAAg5QAAghgSgQQgSgQgfAAQggABgUAEIgVAGIgKA2IgvAAIgDhaIANgFIAigKQAWgFAXgFQAZgEAXAAQA/gBAiAaQAjAZAAA+IAADaIA7APIAAAnIhxAEIgPgzQgMANgSANQgSAOgVAJQgXAJgZAAQg0AAgbgcgAhQAoQgXAOABAgQAAAZAOAPQAOAOAYAAQAUAAATgJQAQgIANgLQANgMAIgIIAHgJIAAg6IgwAAIgEAAQgzAAgXAPg");
	this.shape.setTransform(535.9,52.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE8317").s().p("AApDCIAAgnIAvgSIAAjCQAAglgPgTQgPgTgjAAQgXAAgSAJQgTAIgOALQgOAMgHAIIgIAJIAADUIAvASIAAAnIi0AAIAAgnIA9gSIAAkKIg9gOIAAgoIB2gDIAHAzQAJgJAUgNQAUgNAbgMQAagKAfgCQA7ABAcAjQAcAjAAA7IAADJIA2ASIAAAng");
	this.shape_1.setTransform(491.4,52.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE8317").s().p("AiTCqQgdgcAAg0QAAgpAVgZQAUgYAlgKQAmgLAyAAIA4AAIAAg5QAAghgSgQQgSgQgfAAQghABgTAEIgUAGIgLA2IgvAAIgDhaIANgFIAigKQAWgFAXgFQAZgEAXAAQA/gBAiAaQAjAZAAA+IAADaIA7APIAAAnIhxAEIgOgzQgNANgSANQgSAOgVAJQgWAJgaAAQgzAAgcgcgAhQAoQgXAOABAgQAAAZAOAPQAOAOAYAAQAUAAATgJQAQgIANgLQANgMAIgIIAHgJIAAg6IgwAAIgEAAQgzAAgXAPg");
	this.shape_2.setTransform(447.4,52.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FE8317").s().p("AhcETIAAgnIA9gSIAAkKIg9gNIAAgpICEgDIAAFDIA2ASIAAAngAgii6QgMgNAAgZQABgZANgMQANgNATgBQAVAAANAMQAMAMAAAbQAAAQgGAMQgIALgKAGQgLAFgLAAQgVAAgNgMg");
	this.shape_3.setTransform(414.6,44.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE8317").s().p("AiUDCIAAgnIA9gSIAAkKIg9gOIAAgoIB2gDIAHA1QAJgLAPgOQAQgOAWgLQAVgJAZgCQAbACASAEIATAFIgDBpIgvAAIgLg2QgbAAgUAJQgVAKgOANQgNANgIALIAADVIBHASIAAAng");
	this.shape_4.setTransform(386.7,52.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FE8317").s().p("AiTCqQgdgcABg0QAAgpATgZQAVgYAlgKQAlgLAzAAIA5AAIAAg5QgBghgRgQQgTgQgfAAQggABgVAEIgTAGIgKA2IgvAAIgEhaIANgFIAigKQAWgFAXgFQAZgEAYAAQA9gBAkAaQAiAZABA+IAADaIA5APIAAAnIhvAEIgPgzQgNANgSANQgSAOgVAJQgWAJgZAAQg1AAgbgcgAhQAoQgXAOABAgQAAAZAOAPQAOAOAZAAQATAAATgJQAQgIANgLQAOgMAHgIIAIgJIAAg6IgyAAIgDAAQgzAAgXAPg");
	this.shape_5.setTransform(349.1,52.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FE8317").s().p("ABYD8IAAgrIBFgPIAAlnIgWA2IhwDiIg4AEIhwjqIgSgyIAAFnIBEAPIAAArIjCAAIAAgrIA9gPIAAmEIg9gOIAAgoICigDICBEfICJkcICXgDIAAArIg9AOIAAGEIA9APIAAArg");
	this.shape_6.setTransform(296.4,46.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FE8317").s().p("AiTCqQgdgcAAg0QAAgpAVgZQAUgYAlgKQAmgLAyAAIA4AAIAAg5QAAghgSgQQgRgQggAAQggABgUAEIgUAGIgLA2IgvAAIgDhaIANgFIAigKQAWgFAXgFQAZgEAXAAQA/gBAiAaQAjAZAAA+IAADaIA7APIAAAnIhxAEIgOgzQgNANgSANQgSAOgVAJQgWAJgaAAQgzAAgcgcgAhQAoQgXAOABAgQAAAZAOAPQAOAOAYAAQAUAAATgJQAQgIANgLQANgMAIgIIAHgJIAAg6IgwAAIgEAAQgzAAgXAPg");
	this.shape_7.setTransform(228.2,52.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FE8317").s().p("AhjEVIAAgnIA9gSIAAm3Ig9gOIAAgoICGgDIAAHwIBBASIAAAng");
	this.shape_8.setTransform(197,44.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FE8317").s().p("AhjEVIAAgnIA9gSIAAm3Ig9gOIAAgoICGgDIAAHwIBBASIAAAng");
	this.shape_9.setTransform(175,44.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FE8317").s().p("AhWCuQgngYgTgrQgTgsAAg8QAAg5AXgtQAWgtAngaQAogaA0gBQBOAAAkAsQAlAsAABRIgCAaIgCANIj3AAQAAA8AcAiQAdAjAuAAQAkAAAbgKQAcgJAPgKIAPgKIAZAlIgMAKQgLAJgVALQgVAMgbAJQgdAJggAAQg5AAgmgYgABXgqQAAgbgHgXQgIgWgRgNQgRgNgdgBQgcABgUANQgVANgLAWQgLAXgDAbICsAAIAAAAg");
	this.shape_10.setTransform(143.6,52.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FE8317").s().p("AhQDCQgagEgOgEIgPgEIAAhqIAzAAIAIA+IAPADQAQADAdAAQAVAAASgFQATgFALgMQALgNAAgWQAAgWgUgNQgUgMgdgKQgegIgegNQgdgLgVgWQgUgWAAgnQAAglARgZQASgZAdgMQAegNAlAAQAdAAAbAGQAdAFASAFIATAGIgCBhIgvAAIgLg4IgQgFQgPgEgbAAQgbAAgSAKQgSALAAAbQAAAXAUANQAUANAdAJQAeAKAeAMQAdAMAVAUQAUAWAAAkQAAApgVAcQgWAbgkANQgjAOgrAAQghAAgagEg");
	this.shape_11.setTransform(107.4,52.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FE8317").s().p("AiTCqQgcgcAAg0QgBgpAVgZQAUgYAlgKQAmgLAyAAIA4AAIAAg5QAAghgSgQQgRgQggAAQghABgTAEIgUAGIgKA2IgwAAIgDhaIANgFIAigKQAVgFAYgFQAZgEAYAAQA9gBAjAaQAjAZAAA+IAADaIA7APIAAAnIhxAEIgOgzQgNANgSANQgSAOgVAJQgXAJgYAAQg1AAgbgcgAhQAoQgXAOABAgQAAAZAOAPQAOAOAZAAQATAAATgJQAQgIANgLQANgMAIgIIAHgJIAAg6IgwAAIgEAAQgzAAgXAPg");
	this.shape_12.setTransform(70.8,52.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FE8317").s().p("AhhDnQg0gcgcg4Qgbg3gBhRQABhTAdg8QAeg8A2ghQA2ghBJgBQApABAkAJQAlAIAXAJQAYAJABAAIgEB7Ig2AAIgThTIgMgEQgLgEgWgDQgUgDgbAAQhIAAgnA1QgnA0gBBkQABBAAUApQATAqAjAUQAjATAsAAQAdAAAagJQAagIAUgLQAUgMALgIIAMgJIAeAvIgOAMQgNALgXAPQgYAPghAKQghAMgoABQhIAAgzgdg");
	this.shape_13.setTransform(26.9,46.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Txt_casella_mariana, new cjs.Rectangle(0,0,557.9,90.4), null);


(lib.txt_casella_jp = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE8317").s().p("AiBCWQgugxAAhhQAAg9AXgtQAXgtApgZQAqgZA1AAQA2AAAmAYQAlAXAUArQAUArAAA6QAAA8gWAuQgXAugoAaQgoAag2AAQhRAAgtgwgAhLhoQgZAjAABFQAABCAXAlQAYAlA1AAQA2AAAXgkQAYglAAhGQAAgngKgfQgJgfgVgRQgWgSgjAAQg1AAgaAjg");
	this.shape.setTransform(610.4,52.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE8317").s().p("AhjEVIAAgnIA9gSIAAm3Ig9gOIAAgoICGgDIAAHwIBBASIAAAng");
	this.shape_1.setTransform(579.6,44.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FE8317").s().p("AhIEVIgvgJIgRgFIAAnmIg6gNIAAgpICCgDIAADQQASgPAcgNQAagNAjgCQA0ABAhAYQAiAXAQApQAQAqAAA4QAAA+gWAuQgWAvgtAbQgsAbhAAAQgoAAgdgEgAgXgsQgVALgKALIgKAMIAADiIAQADQARAEAnAAQApAAAZgTQAYgUALggQAKghAAgoQAAgogJgeQgJgegUgRQgUgTggABQgfAAgVAMg");
	this.shape_2.setTransform(545.2,44.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FE8317").s().p("AiTCqQgcgcAAg0QgBgpAVgZQAUgYAlgKQAmgLAyAAIA4AAIAAg5QAAghgSgQQgRgQggAAQghABgUAEIgTAGIgKA2IgwAAIgDhaIANgFIAigKQAWgFAXgFQAZgEAYAAQA9gBAkAaQAiAZAAA+IAADaIA7APIAAAnIhxAEIgOgzQgNANgSANQgSAOgVAJQgXAJgYAAQg1AAgbgcgAhQAoQgXAOABAgQAAAZAOAPQAOAOAZAAQAUAAASgJQAQgIANgLQAOgMAHgIIAHgJIAAg6IgwAAIgEAAQgzAAgXAPg");
	this.shape_3.setTransform(505.6,52.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FE8317").s().p("Ai8D8IAAgrIA9gPIAAmEIg9gOIAAgoICIgDIBLAAQBRAAAqAoQAqAoABBDQgBBUgzAqQgyArhcAAIgvAAIAACBIA9APIAAArgAg0AIIAvAAQA7gBAdgYQAegaAAgyQAAgdgLgWQgKgXgVgNQgVgNgfgBIhHAAg");
	this.shape_4.setTransform(464,46.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FE8317").s().p("AApDCIAAgnIAvgSIAAjCQAAglgPgTQgPgTgjAAQgXAAgSAJQgTAIgOALQgOAMgHAIIgIAJIAADUIAvASIAAAnIi0AAIAAgnIA9gSIAAkKIg9gOIAAgoIB2gDIAHAzQAJgJAUgNQAUgNAbgMQAagKAfgCQA7ABAcAjQAcAjAAA7IAADJIA2ASIAAAng");
	this.shape_5.setTransform(402.1,52.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FE8317").s().p("AiTCqQgcgcAAg0QgBgpAVgZQAUgYAlgKQAmgLAyAAIA4AAIAAg5QAAghgSgQQgRgQggAAQghABgUAEIgTAGIgKA2IgwAAIgDhaIANgFIAigKQAWgFAXgFQAZgEAYAAQA9gBAkAaQAiAZAAA+IAADaIA7APIAAAnIhxAEIgOgzQgNANgSANQgSAOgVAJQgXAJgYAAQg1AAgbgcgAhQAoQgXAOABAgQAAAZAOAPQAOAOAZAAQAUAAASgJQAQgIANgLQAOgMAHgIIAHgJIAAg6IgwAAIgEAAQgzAAgXAPg");
	this.shape_6.setTransform(358,52.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FE8317").s().p("AiACgQgcgjAAg8IAAjJIg9gOIAAgoICFgEIAAD9QAAAlAPATQAPASAjAAQAWAAATgIQATgJAOgLQAOgLAIgIIAIgJIAAjVIg+gOIAAgoICGgEIAAFDIA9APIAAAnIh3AEIgHgzQgJAJgUAOQgUANgbALQgaALgeABQg8gCgcghg");
	this.shape_7.setTransform(313.6,53.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FE8317").s().p("AhfExIgSgCIgIgBIAGg2IAkAAQAjAAAQgSQAPgRgBghIAAmsIg9gOIAAgoIDFgDIAAArIg9AOIAAGdQAABCgkAlQgjAlhBABIgUgBg");
	this.shape_8.setTransform(275.3,52.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FE8317").s().p("AiTCqQgdgcAAg0QAAgpAVgZQAUgYAlgKQAmgLAyAAIA4AAIAAg5QAAghgSgQQgRgQggAAQggABgUAEIgUAGIgLA2IgvAAIgDhaIANgFIAigKQAWgFAXgFQAZgEAXAAQA/gBAiAaQAjAZAAA+IAADaIA7APIAAAnIhxAEIgOgzQgNANgSANQgSAOgVAJQgWAJgaAAQgzAAgcgcgAhQAoQgXAOABAgQAAAZAOAPQAOAOAYAAQAUAAATgJQAQgIANgLQANgMAIgIIAHgJIAAg6IgwAAIgEAAQgzAAgXAPg");
	this.shape_9.setTransform(228.2,52.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FE8317").s().p("AhjEVIAAgnIA9gSIAAm3Ig9gOIAAgoICGgDIAAHwIBBASIAAAng");
	this.shape_10.setTransform(197,44.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FE8317").s().p("AhjEVIAAgnIA9gSIAAm3Ig9gOIAAgoICGgDIAAHwIBBASIAAAng");
	this.shape_11.setTransform(175,44.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FE8317").s().p("AhWCuQgngYgTgrQgTgsAAg8QAAg5AXgtQAWgtAngaQAogaA0gBQBOAAAkAsQAlAsAABRIgCAaIgCANIj3AAQAAA8AcAiQAdAjAuAAQAkAAAbgKQAcgJAPgKIAPgKIAZAlIgMAKQgLAJgVALQgVAMgbAJQgdAJggAAQg5AAgmgYgABXgqQAAgbgHgXQgIgWgRgNQgRgNgdgBQgcABgUANQgVANgLAWQgLAXgDAbICsAAIAAAAg");
	this.shape_12.setTransform(143.6,52.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FE8317").s().p("AhQDCQgagEgOgEIgPgEIAAhqIAzAAIAIA+IAPADQAQADAdAAQAVAAASgFQATgFALgMQALgNAAgWQAAgWgUgNQgUgMgdgKQgegIgegNQgdgLgVgWQgUgWAAgnQAAglARgZQASgZAdgMQAegNAlAAQAdAAAbAGQAdAFASAFIATAGIgCBhIgvAAIgLg4IgQgFQgPgEgbAAQgbAAgSAKQgSALAAAbQAAAXAUANQAUANAdAJQAeAKAeAMQAdAMAVAUQAUAWAAAkQAAApgVAcQgWAbgkANQgjAOgrAAQghAAgagEg");
	this.shape_13.setTransform(107.4,52.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FE8317").s().p("AiTCqQgcgcAAg0QgBgpAVgZQAUgYAlgKQAmgLAyAAIA4AAIAAg5QAAghgSgQQgRgQggAAQghABgTAEIgUAGIgKA2IgwAAIgDhaIANgFIAigKQAVgFAYgFQAZgEAYAAQA9gBAjAaQAjAZAAA+IAADaIA7APIAAAnIhxAEIgOgzQgNANgSANQgSAOgVAJQgXAJgYAAQg1AAgbgcgAhQAoQgXAOABAgQAAAZAOAPQAOAOAZAAQATAAATgJQAQgIANgLQANgMAIgIIAHgJIAAg6IgwAAIgEAAQgzAAgXAPg");
	this.shape_14.setTransform(70.8,52.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FE8317").s().p("AhhDnQg0gcgcg4Qgbg3gBhRQABhTAdg8QAeg8A2ghQA2ghBJgBQApABAkAJQAlAIAXAJQAYAJABAAIgEB7Ig2AAIgThTIgMgEQgLgEgWgDQgUgDgbAAQhIAAgnA1QgnA0gBBkQABBAAUApQATAqAjAUQAjATAsAAQAdAAAagJQAagIAUgLQAUgMALgIIAMgJIAeAvIgOAMQgNALgXAPQgYAPghAKQghAMgoABQhIAAgzgdg");
	this.shape_15.setTransform(26.9,46.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.txt_casella_jp, new cjs.Rectangle(0,0,633.2,90.4), null);


(lib.mc_contactos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Página();
	this.instance.parent = this;
	this.instance.setTransform(356,548);

	this.instance_1 = new lib.Mail();
	this.instance_1.parent = this;
	this.instance_1.setTransform(355,880);

	this.instance_2 = new lib.Facebook();
	this.instance_2.parent = this;
	this.instance_2.setTransform(356,1212);

	this.instance_3 = new lib.Tw();
	this.instance_3.parent = this;
	this.instance_3.setTransform(356,1556);

	this.instance_4 = new lib.Web();
	this.instance_4.parent = this;
	this.instance_4.setTransform(123,491);

	this.instance_5 = new lib.Mail_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(124,822);

	this.instance_6 = new lib.Facebook_1();
	this.instance_6.parent = this;
	this.instance_6.setTransform(125,1147);

	this.instance_7 = new lib.Tw_1();
	this.instance_7.parent = this;
	this.instance_7.setTransform(125,1504);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_contactos, new cjs.Rectangle(123,491,1051,1185), null);


(lib.Logo_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Logo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Logo_1, new cjs.Rectangle(0,0,598,729), null);


(lib.Forma2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgtmhVTMAjogZnMA3mAMfQloOQneVFUgO9AqKgJTAiOUgIbAfCgGZAkbQjMSNhhMAg");
	mask.setTransform(292,710);

	// Layer 1
	this.instance = new lib.Forma2();
	this.instance.parent = this;
	this.instance.setTransform(240,100);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Forma2_1, new cjs.Rectangle(240,100,344,1320), null);


(lib.Forma1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Egc4iQtMBYHgD4QiDCujiFMQnCKZnWMYUgXgAnigRoAsVUgTSAwZgU8BICQmjWhl7WKQi9LFhqGmg");
	mask.setTransform(379.1,951.8);

	// Layer 1
	this.instance = new lib.Forma1();
	this.instance.parent = this;
	this.instance.setTransform(197,78);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Forma1_1, new cjs.Rectangle(197,78,561.3,1825.5), null);


(lib.Fondo_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Fondo_1();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Fondo_1_1, new cjs.Rectangle(0,0,1280,1920), null);


(lib.Nombres = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_70 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(70).call(this.frame_70).wait(1));

	// Casella Mariana
	this.instance = new lib.Txt_casella_mariana();
	this.instance.parent = this;
	this.instance.setTransform(275.9,26.4,1,1,0,0,0,278.9,45.2);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(57));

	// Casella Juan Pablo
	this.instance_1 = new lib.txt_casella_jp();
	this.instance_1.parent = this;
	this.instance_1.setTransform(340.9,123.1,1,1,0,0,0,273.9,41.9);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(14).to({_off:false},0).to({alpha:1},14).wait(43));

	// Carlassare Gabriel
	this.instance_2 = new lib.txt_gabriel();
	this.instance_2.parent = this;
	this.instance_2.setTransform(457.9,226.4,1,1,0,0,0,320.9,45.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).to({alpha:1},14).wait(29));

	// Galizzi Leonel
	this.instance_3 = new lib.txt_leonel();
	this.instance_3.parent = this;
	this.instance_3.setTransform(448.6,326.4,1,1,0,0,0,241.6,45.2);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(42).to({_off:false},0).to({alpha:1},15).wait(14));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3,-18.8,557.9,90.4);


(lib.Fondo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Forma 2
	this.instance = new lib.Forma2_1();
	this.instance.parent = this;
	this.instance.setTransform(760,1010,1,1,0,0,0,760,1010);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(11));

	// Forma 1
	this.instance_1 = new lib.Forma1_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(781.8,1021.4,1,1,0,0,0,738.8,999.4);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,1520,2020);


(lib.Parte1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_9 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(9).call(this.frame_9).wait(1));

	// Logo
	this.instance = new lib.Logo_1();
	this.instance.parent = this;
	this.instance.setTransform(874,849.5,1,1,0,0,0,299,364.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(1));

	// Nombres
	this.instance_1 = new lib.Nombres();
	this.instance_1.parent = this;
	this.instance_1.setTransform(752.9,1599.3,1,1,0,0,0,387.9,176.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(10));

	// Fondo
	this.instance_2 = new lib.Fondo();
	this.instance_2.parent = this;
	this.instance_2.setTransform(760,1010,1,1,0,0,0,760,1010);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10));

	// Fondo_1
	this.instance_3 = new lib.Fondo_1_1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(880,1060,1,1,0,0,0,640,960);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0.1,1520,2020);


// stage content:
(lib.creditos = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// creditos_parte2.psd
	this.instance = new lib.mc_contactos();
	this.instance.parent = this;
	this.instance.setTransform(44.5,26.6,0.469,0.469,0,0,0,86.1,85.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(120).to({_off:false},0).to({alpha:1},54).wait(26));

	// creditos_parte2.psd
	this.instance_1 = new lib.Contacto();
	this.instance_1.parent = this;
	this.instance_1.setTransform(205,86,0.469,0.469);

	this.instance_2 = new lib.VectorSmartObject();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0,0,0.469,0.469);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},99).wait(101));

	// creditos.psd
	this.instance_3 = new lib.Parte1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(243.8,426.6,0.469,0.469,0,0,0,760,1009.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},99).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(187.5,403.2,712.6,946.9);
// library properties:
lib.properties = {
	width: 600,
	height: 900,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/creditos_atlas_.png", id:"creditos_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;