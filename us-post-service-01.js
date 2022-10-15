/*
TASK on the subject of package delivery post...
GIVEN: a series of packages for various cities
OBJECTIVE: those packages should be sorted into 4 tiers for, say, each region
PURPOSE: is that those packages are sent to those central post offices for those three regions, and from there they will be delivered to homes or addresses
- each package contains the city written by the sender where it should be delivered.
- the materials are divided into 4 as follows:
  -Canadian region: North Dakota, Montana, Wisconsin
  -Pacific region: Washington, Oregon, California
  -Atlantic region: Maryland, Virginia, North Carolina
-Mexico region: Arizona, Texas, Louisiana

*/
//this is GIVEN
let packages = [
  'north carolina',
  'north dakota',
  'wisconsin',
  'arizona',
  'washington',
  'oregon',
  'montana',
  'maryland',
  'california',
  'louisiana',
  'washgddfdfington',
  'texas',
  'wisconsin',
  44558,
  'montana',
  'oregon',
  none, 
  'north dakota',
  'washington',
  'virginia',
  'virginia',
  'texas',
  965,
  'maryland',
  'louisiana',
  'california',
  'arizona',
  'north carolina',

]
// prepare states from regios

let statesFromCanadianRegion = ['north dakota', 'montana', 'wisconsin'];
let statesFromPacificRegion = ['oregon', 'washington', 'california'];
let statesFromAtlanticRegion = ['virginia', 'north carolina', 'maryland'];
let statesFromMexicanRegion = ['louisiana', 'arizona', 'texas'];

// test does work 
//console.log(statesFromCanadianRegion)

// regions array

let packagesForCanadianRegion = [];
let packagesForPacificRegion = [];
let packagesForAtlanticRegion = [];
let packagesForMexicanRegion = [];
let undeliverablePackages = [];



// loop through array packets and assign a packet to each region it belongs 

let postWorkerBojan;

for (let i = 0; i < packages.length; i++) {
  const package = packages[i];
  if (package === 'north dakota' || package === 'montana' || package === 'wisconsin') {
    packagesForCanadianRegion.push(package)
  } else if (
    package === 'oregon' || package === 'washington' || package === 'california') {
    packagesForPacificRegion.push(package)
  } else if (
    package === 'virginia' || package === 'north carolina' || package === 'maryland') {
    packagesForAtlanticRegion.push(package)
  } else if (
    package === 'louisiana' || package === 'arizona' || package === 'texas') {
    packagesForMexicanRegion.push(package)
  } else {
    undeliverablePackages.push(package)

  }
}
console.log("packages For Canadian Region", packagesForCanadianRegion);
console.log("packages For Pacific Region", packagesForPacificRegion);
console.log("packages For Atlantic Region", packagesForAtlanticRegion);
console.log("packages For Mexican Region", packagesForMexicanRegion);
console.log("undeliverable Packages", undeliverablePackages)

// program works fine,