
window.addEventListener("load", function(){
    let form = document.getElementById("launchForm");
    let pilotNameInput = document.querySelector("input[name=pilotName]");
    let copilotNameInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput =  document.querySelector("input[name=cargoMass]");
    const faultyItems = document.getElementById("launchStatusCheck");
    const missionTarget = document.getElementById("missionTarget");
    let colorChanges = "";
 
  form.addEventListener("submit", function(event){
    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
        response.json().then(function (json){
           
            let randomElement = json[Math.floor(Math.random()* json.length)];
    
            for(element of json){
    
                if(fuelLevelInput.value >1000 && cargoMassInput.value < 10000){ 
    
                }
    
                missionTarget.innerHTML = ` 
               
                <h2>Mission Destination</h2>
                    <ol>
                        <li>Name: ${randomElement.name}</li>
                        <li>Diameter: ${randomElement.diameter}</li>
                         <li>Star: ${randomElement.star}</li>
                        <li>Distance from Earth: ${randomElement.distance}</li>
                        <li>Number of Moons: ${randomElement.moons}</li>
                    </ol>
                <img src="${randomElement.image}"></img> 
                `
            }
        })
        
       })
    
     if(pilotNameInput.value === ""|| copilotNameInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
        alert ("All Fields Are Required!"); 
        event.preventDefault();
        return false; 
     }else if (isNaN(fuelLevelInput.value) || isNaN(cargoMassInput.value)) {
         alert ("Fuel Input and Cargo Mass must be numbers!");
         event.preventDefault();
         return false;
     }else{ 
        alert ("Values Submitted!");
     }
     event.preventDefault();
    
    

     if(fuelLevelInput.value < 10000 && cargoMassInput.value > 10000){
        faultyItems.innerHTML = ` 
            <div <style= visibility: visible>
            <h1 style="color:red" id="launchStatus">Shuttle Not Ready for Launch</h1>
           <ol>
               <li id="pilotStatus">Pilot ${pilotNameInput.value} Ready</li>
                <li id="copilotStatus">Co-Pilot ${copilotNameInput.value} Ready</li>
                <li id="fuelStatus">Fuel level too low for launch</li>
                <li id="cargoStatus">Cargo mass too high for launch</li>
            </ol>
        </div>
        `
     }else if (cargoMassInput.value > 10000) {
        faultyItems.innerHTML = ` 
        <div <style= visibility: visible>
        <h1 style="color:red" id="launchStatus">Shuttle Not Ready for Launch</h1>
       <ol>
           <li id="pilotStatus">Pilot ${pilotNameInput.value} Ready</li>
            <li id="copilotStatus">Co-Pilot ${copilotNameInput.value} Ready</li>
            <li id="fuelStatus">Fuel level is ready for launch</li>
            <li id="cargoStatus">Cargo mass too high for launch</li>
        </ol>
    </div>`
     }else if (fuelLevelInput.value < 10000) {
        faultyItems.innerHTML = ` 
        <div <style= visibility: visible>
        <h1 style="color:red" id="launchStatus">Shuttle Not Ready for Launch</h1>
       <ol>
           <li id="pilotStatus">Pilot ${pilotNameInput.value} Ready</li>
            <li id="copilotStatus">Co-Pilot ${copilotNameInput.value} Ready</li>
            <li id="fuelStatus">Fuel level is too low for launch</li>
            <li id="cargoStatus">Cargo Mass level is ready for launch</li>
        </ol>
    </div>`
     }else{
        faultyItems.innerHTML = ` 
        <div <style= visibility: visible>
        <h1 style="color: green" id="launchStatus">Shuttle Ready for Launch</h1>
       <ol>
           <li id="pilotStatus">Pilot ${pilotNameInput.value} Ready</li>
            <li id="copilotStatus">Co-Pilot ${copilotNameInput.value} Ready</li>
            <li id="fuelStatus">Fuel level is ready for launch</li>
            <li id="cargoStatus">Mass level is ready for launch</li>
        </ol>
    </div>`
     }
     event.preventDefault();

 
})
})




  
     