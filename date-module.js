module.exports.getDate = function(){
const today = new Date();
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("hi-IN", options);
}
module.exports.getDay = getDay;
function getDay(){
    const today = new Date();
    const options = {
        weekday: "long"
    };
    return today.toLocaleDateString("hi-IN", options);
}