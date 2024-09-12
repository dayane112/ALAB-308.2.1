// Here is the information you have been given:
// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
// const PI = 3.1415;
// const area = PI * radius * radius;
// Each plant requires a minimum space of 0.8 square meters.
// The area is starting with 20 plants.
// The plants double in number every week.
// Using this information, your objectives are to:
// Predict the plant growth after a specific number of weeks.
// Implement control flow to make decisions on whether the plants should be:
// Pruned, to stop them from exceeding the capacity of the garden.
    // This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.

// Monitored, if they are growing at an acceptable rate.
    // This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.

// Planted, if there is room to plant more plants.
    // This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.

const PI = 3.1415;
const radius = 5; //radius meters
const area = PI * radius * radius;
const plantSpace = .8; //require minimum
const start = 20; //starting point
const x = 9; //weeks
let plant = start;

for(let i = 0; i < x; i++){
    plant *= 2;
    // console.log(x, plant); 
    // console.log(x, 'weeks =', plant)
    
} console.log(x, 'weeks =', plant, "plants");

if(start > area / plantSpace){
    console.log(Prune)
}


// Part 2: Thinking Bigger
// The conservation area in which the garden is located has multiple other gardens. 
// Using the logic you have already created, determine:
// The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?
