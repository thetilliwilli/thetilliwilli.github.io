//positions
var oldX = 0, oldY = 0;
var newX = 0, newY = 0;

//Wind force - natural
var windVector = {x:1,y:0.2};
var isAffectedByUser = false;
var timeDelta = 1000/120;
var bgHeader;
var windVelocity = 20; //px per second
var curWindVelocity = windVelocity;

//User interact - artificial
var userVector = {x:0,y:0};
var sensivity = -1;//0.1;
var interactDuration = 50;
window.interactTimer = null;

//timing
var lastMoveTime = Date.now();


$(document).ready(function(){
    bgHeader = $("#header").children()[0];
    bgHeader.style.backgroundPosition = "0px 0px";
    document.onmousemove = function(pEvent){
        window.clearTimeout(window.interactTimer);
        isAffectedByUser = true;
        userVector.x = pEvent.movementX*sensivity;
        userVector.y = pEvent.movementY*sensivity;
        window.interactTimer = window.setTimeout(function(){
            isAffectedByUser = false;
            ChangeDirection();
        }, interactDuration);
    };

    // window.setInterval(BGAnimationTick, timeDelta);
    // window.setTimeout(BGAnimationTick, timeDelta);
    // BGAnimationTick();
    lastMoveTime = window.performance.now();
    window.requestAnimationFrame(BGAnimationTick);
});

function BGAnimationTick(timeNow) {
    // console.log(timeNow);
    var delta = { x: 0, y: 0 };

    if (isAffectedByUser)
    {
        
        delta = { x: userVector.x, y: userVector.y };
    }
    else
    {
        // lastMoveTime = timeNow;
        delta = ApplyTimeDeltaIndependentCorrection(VClone(windVector), timeNow);
    }

    // console.log(delta);
    MoveBG(delta.x, delta.y);

    window.requestAnimationFrame(BGAnimationTick);
    // window.setTimeout(BGAnimationTick, timeDelta);
}

function MoveBG(deltaX, deltaY){

    newX = oldX + deltaX;
    newY = oldY + deltaY;
    // if(newX === oldX && newY === oldY)
    //     return
    bgHeader.style.backgroundPosition = `${newX}px ${newY}px`;
    oldX = newX;
    oldY = newY;
}

function ApplyTimeDeltaIndependentCorrection(vector, timeNow){
    vector = VClone(vector);
    var vnorm = VNorm(vector);
    var correction = ((timeNow - lastMoveTime)/1000);
    lastMoveTime = timeNow;
    var vreal = VMul(vnorm, curWindVelocity*correction);
    return vreal;
}

function ChangeDirection(){
    // changeDirectionTimer = window.setInterval(ChangeDirectionTrans, 50);
    windVector.x = userVector.x;
    windVector.y = userVector.y;
    curWindVelocity = VLen(userVector);
    tsChangeDiretionStartVelocity = curWindVelocity;

    tsChangeDirectionStartTime = Date.now();
    tsChangeDirectionTimer = window.setInterval(ChangeDirectionTrans, 50);
    console.log("ALL", tsChangeDiretionStartVelocity, windVelocity);
}
    var tsChangeDirectionTimer = null;
    var tsChangeDirectionStartTime = Date.now();
    var tsChangeDirectionDuration = 500;
    var tsChangeDiretionStartVelocity = 1;

    function ChangeDirectionTrans(){
        if(isAffectedByUser)
        {
            window.clearInterval(tsChangeDirectionTimer);
            return;
        }
        
        timeElapsed = Date.now() - tsChangeDirectionStartTime;

        if(timeElapsed >= tsChangeDirectionDuration)
        {
            window.clearInterval(tsChangeDirectionTimer);
            curWindVelocity = windVelocity;
            windVector.x = userVector.x;
            windVector.y = userVector.y;
            return;
        }
        else
        {
            // curWindVelocity = windVelocity*(1 - timeElapsed/tsChangeDirectionDuration);
            var xTime = timeElapsed / tsChangeDirectionDuration;
            curWindVelocity = windVelocity - (windVelocity - tsChangeDiretionStartVelocity)*(1-xTime);
            console.log("curWindVelocity", curWindVelocity, tsChangeDirectionDuration - timeElapsed, timeElapsed);
        }
    }