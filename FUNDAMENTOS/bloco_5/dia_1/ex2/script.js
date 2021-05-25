let headerContainer = document.getElementById('header-container');
headerContainer.style.backgroundColor = '#48B169';

let emergencyTask = document.getElementsByClassName('emergency-tasks')[0];
emergencyTask.style.backgroundColor = '#FA9E84';

let h3EmergencyTask = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < h3EmergencyTask.length; index +=1) {
  h3EmergencyTask[index].style.backgroundColor = '#AA6AF3';
}

let noEmergencyTask = document.getElementsByClassName('no-emergency-tasks')[0];
noEmergencyTask.style.backgroundColor = '#F9DB5E';

let noH3EmergencyTask = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < h3EmergencyTask.length; index +=1) {
  noH3EmergencyTask[index].style.backgroundColor = '#232525';
}

let footerContainer = document.getElementById('footer-container');
footerContainer.style.backgroundColor = '#0A3534';