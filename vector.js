function VLen(v){
    return Math.sqrt(v.x*v.x + v.y*v.y);
}

function VNorm(v){
    var vlen = VLen(VClone(v));
    return {
        x: v.x/vlen,
        y: v.y/vlen
    };
}

function VMul(v, scalar){
    v = VClone(v);
    return {
        x: v.x*scalar,
        y: v.y*scalar,
    }
}

function VClone(v){
    return JSON.parse(JSON.stringify(v));
}