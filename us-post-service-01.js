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
let package = [
  "north carolina",
  'north dakota',
  'arizona',
  'washington',
  'oregon',
  'montana',
  'maryland',
  'california',
  'louisiana',
  'texas',
  'montana',
  'oregon',
  'north dakota',
  'washington',
  'virginia',
  'virginia',
  'texas',
  'maryland',
  'louisiana',
  'california',
  'arizona',
  "north carolina",
]

let packagesForCanadianRegion = [];
let packagesForPacificRegion = [];
let packagesForAtlanticregion = [];
let packagesForMexicanRegion = [];