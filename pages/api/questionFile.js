let world = {
  section: "world",
  "world name": "",
  subsections : {
    basics: [
      {
        question: "Name your world \n(note: you can NOT change the name of your world later)",
        placeholder: "world name",
        type: "textarea",
        answer: ""
      },
      {
        question: "How many days are in the year?",
        placeholder: "revolution",
        type: "textarea",
        answer: ""
      },
      {
        question: "How many hours are in a day?",
        placeholder: "rotation",
        type: "textarea",
        answer: ""
      },
      
    ],
  },
  regions: [
      
  ],
}

let region = {
  section: "region",
  "region name": "",
  subsections : {
    basics: [
      {
        question: "Name your Region",
        placeholder: "region name",
        type: "textarea",
        answer: ""
      },
      {
        question: "Where is this region located within your world?",
        placeholder: "northern hemisphere by equator",
        type: "textarea",
        answer: ""
      },
    ],
    geography: [
      {
        question: "What type of habitat is it?",
        "placeholder": ["desert", "tundra", "grassland", "forest", "rainforest", "wetland", "aquatic"],
        type: "dropdown",
        answer: ""
      },
    ],
    "flora & fauna": [
      {
        question: "What are the richest natural resources of this area?",
        placeholder: "minerals, crops, materials, etc.",
        type: "textarea",
        answer: ""
      },
      {
        question: "What resources are most scarce?",
        placeholder: "water, wildlife, fertile land, etc.",
        type: "textarea",
        answer: ""
      },
    ],
  },
  cities: [

  ]
}

let city = {
  section: "city",
  "city name": "",
  subsections: {
    basics: [
      {
        question: "What is the name of your city?",
        placeholder: "city name",
        type: "textarea",
        answer: ""
      }
    ]
  }
}

let worldSects = [];

for (let key in world.subsections) {

  worldSects.push([key, world.subsections[key].length-1])
}

let regionSects = [];

for (let key in region.subsections) {
  regionSects.push([key, region.subsections[key].length-1])
}

let citySects = [];

for (let key in city.subsections) {
  citySects.push([key, city.subsections[key].length-1])
}


module.exports = {
  world,
  region,
  city,
  worldSects,
  regionSects,
  citySects,
}

// "0": {
//   "section": "Planet",
//   "subsection": "World Basics",
//   "questions": [
//     {
//       "question": "Name your world",
//       "placeholder": "world name",
//       "type": "textarea"
//     },
//     {
//       "question": "How many days are in the year?",
//       "placeholder": "revolution",
//       "type": "textarea"
//     },
//     {
//       "question": "How many hours are in a day?",
//       "placeholder": "rotation",
//       "type": "textarea"
//     },
//     {
//       "question": "What are the seasons?",
//       "placeholder": "Does it vary by region? How long does each season last?",
//       "type": "textarea"
//     },
//     {
//       "question": "How many suns & moons?",
//       "placeholder": "Do these celestial bodies have names or special meaning to the inhabitants of your planet?",
//       "type": "textarea"
//     },
//     {
//       "question": "Could this world exist with our current laws of physics or is there a fundamental difference?",
//       "placeholder": "spell out the logic if it differs from the universe we know, i.e. magic is real and energy can come from nothing",
//       "type": "textarea"
//     },
//     {
//       "question": "What other quirks about this reality exist?",
//       "placeholder": "humans evolved to have gills and can breathe and live underwater",
//       "type": "textarea"
//     },
//     {
//       "question": "Describe the intelligent lifeforms that exist on this planet",
//       "placeholder": "if more than one race, how and when did each race evolve? Their general appearance/s? Average lifespan/s? Unique facets? Relationship to other races?",
//       "type": "textarea"
//     }
//   ]
// },

// "1": {
//   "section": "Region",
//   "subsection": "Geography",
//   "questions": [
//     {
//       "question": "Name your Region",
//       "placeholder": "region name",
//       "type": "textarea"
//     },
//     {
//       "question": "Where is this region located within your world?",
//       "placeholder": "northern hemisphere by equator",
//       "type": "textarea"
//     },
//     {
//       "question": "What type of habitat is it?",
//       "placeholder": ["desert", "tundra", "grassland", "forest", "rainforest", "wetland", "aquatic"],
//       "type": "dropdown"
//     },
//     {
//       "question": "What is the climate?",
//       "placeholder": ["dry", "polar", "continental", "temperate", "tropical"],
//       "type": "dropdown"
//     },
//     {
//       "question": "What is unique about the weather in this region?",
//       "placeholder": "prone to tornados, extreme temperature, will go from sunny to storming on a dime, etc.",
//       "type": "textarea"
//     },
//     {
//       "question": "What are the most notable points of geography?",
//       "placeholder": "mountains, bodies of water, volcanoes, etc.",
//       "type": "textarea"
//     }
//   ]
// },

// "2": {
//   "section": "Region",
//   "subsection": "Flora & Fauna",
//   "questions": [
//     {
//       "question": "What are the richest natural resources of this area?",
//       "placeholder": "minerals, crops, materials, etc.",
//       "type": "textarea"
//     },
//     {
//       "question": "What resources are most scarce?",
//       "placeholder": "water, wildlife, fertile land, etc.",
//       "type": "textarea"
//     }
//   ]
// }
