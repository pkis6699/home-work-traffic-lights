let i = -1;
function trafficLight() {
    i++;
    let colorsOfTrafficLights = ['green','orange','red'],
    traflights = document.querySelectorAll('.traflights');
    if(traflights[i-1]) {
        traflights[i-1].style.backgroundColor = '';
    }
    if(i == colorsOfTrafficLights.length) {
        i = 0;
    } 
    traflights[i].style.backgroundColor = colorsOfTrafficLights[i];
}
