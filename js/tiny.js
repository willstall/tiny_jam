var stage;
var container;

function main()
{
	console.log("start"); 

	// Stage
    stage = new createjs.Stage( "canvas" );
    stage.enableMouseOver();
    stage.mouseMoveOutside = true;
	createjs.Touch.enable(stage);
	
    // Container
	container = new createjs.Container();
	container.x = container.y = 0;
	stage.addChild(container);

	// Update
    createjs.Ticker.timingMode = createjs.Ticker.RAF;
    createjs.Ticker.addEventListener( "tick", tick );
    createjs.Ticker.setFPS( 30 );
    tick( null );
}

function tick( event )
{
	stage.clear();
    stage.canvas.width = window.innerWidth;
    stage.canvas.height = window.innerHeight;
    stage.update();   

	if(!container)
		return;

	container.x = window.innerWidth * 0.5;
	container.y = window.innerHeight * 0.5;
}