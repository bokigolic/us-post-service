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


NEW COMPLICATION:
- addresses can be written incorrectly or states that are not on the list in the regions can be used, and the program should insert them into a special string called 'undeliverablePackages'

STEP 2)
- after all, the improved version of the program will be able to move from the basket with undelivered packages, based on the lack, to the next basket for return to the sender or, if there is no address of the sender, to put it in the lost and found basket
*/
//this is GIVEN
let packages = [
  {
    address: '',
    city: 'raleigh',
    state: 'north carolina'
  },
  {
    address: '',
    city: 'bismarck',
    state: 'north dakota'
  },


  5659986,
  'hdjkfhksehfs',
  {
    address: '',
    city: 'madison',
    state: 'wisconsin'
  },

  {
    address: '',
    city: 'phoenix',
    state: 'arizona'
  },

  {
    address: '',
    city: 'phoenix',
    state: 'arizona'
  },
  {
    address: '',
    city: 'seatle',
    state: 'washington'
  },
  {
    address: '',
    city: 'seatle',
    state: 'washington'
  },
  {
    address: '',
    city: 'helena',
    state: 'montana'
  },
  'nddnddkdk',

  {
    address: '',
    city: 'anapolis',
    state: 'maryland'
  },
  {
    address: '',
    city: 'anapolis',
    state: 'maryland'
  },
  {
    address: '',
    city: 'baton rouge',
    state: 'louisiana'
  },

  'washgddfdfington',
  'texas',
  {
    address: '',
    city: 'madison',
    state: 'wisconsin'
  },
  44558,
  {
    address: '',
    city: 'helena',
    state: 'montana'
  },
  'oregon',
  null,
  {
    address: '',
    city: 'bismarck',
    state: 'north dakota'
  },

  {
    address: '',
    city: 'seatle',
    state: 'arizona'
  },
  {
    address: '',
    city: 'richmond ',
    state: 'virginia'
  },
  {
    address: '',
    city: 'richmond ',
    state: 'virginia'
  },
  {
    address: '',
    city: 'austin ',
    state: 'texas'
  },
  {
    address: '',
    city: 'austin ',
    state: 'texas'
  },


  965,
  {
    address: '',
    city: 'anapolis',
    state: 'maryland'
  },
  {
    address: '',
    city: 'baton rouge',
    state: 'louisiana'
  },
  'california',

  {
    address: '',
    city: 'raleigh',
    state: 'north carolina'
  },
  {
    address: '',
    city: 'sacramento',
    state: 'california'
  },
  {
    address: '',
    city: 'sacramento',
    state: 'california'
  }


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
let returnToSenderPackages = [];
let lostAndFoundPackages = [];



// loop through array packets and assign a packet to each region it belongs 

let postWorkerBojan;

for (let i = 0; i < packages.length; i++) {
  const package = packages[i];
  const packageRecipientState = package;
  //if (package === 'north dakota' || package === 'montana' || package === 'wisconsin') {
  if (statesFromCanadianRegion.includes(packageRecipientState)) {
    packagesForCanadianRegion.push(packageRecipientState)

  } else if (
    //package === 'oregon' || package === 'washington' || package === 'california') 
    statesFromPacificRegion.includes(packageRecipientState)) {
    packagesForPacificRegion.push(packageRecipientState)

  } else if (
    //package === 'virginia' || package === 'north carolina' || package === 'maryland'
    statesFromAtlanticRegion.includes(packageRecipientState)) {
    packagesForAtlanticRegion.push(packageRecipientState)

  } else if (
    //package === 'louisiana' || package === 'arizona' || package === 'texas'
    statesFromMexicanRegion.includes(packageRecipientState)) {
    packagesForMexicanRegion.push(packageRecipientState)

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


// STEP 2


for (let i = 0; i < undeliverablePackages.length; i++) {
  const package = undeliverablePackages[i];
  if (typeof package === 'string') {
    returnToSenderPackages.push(package)
    //checking if address = string, return to sender
  } else {
    // if adress is not string, no visile address, move to lost and found basket
    lostAndFoundPackages.push(package)
  }
}
console.log('returnToSender Package', returnToSenderPackages);
console.log('lostAndFound Package', lostAndFoundPackages);


