function VLen(v){
    return Math.sqrt(v.x*v.x + v.y*v.y);
}

function VNorm(v){
    var vlen = VLen(v);
    return {
        x: v.x/vlen,
        y: v.y/vlen
    };
}

function VMul(v, scalar){
    return {
        x: v.x*scalar,
        y: v.y*scalar,
    }
}