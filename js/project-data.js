export const projectOrder = [
  "explosive-finger",
  "khamani",
  "wacky-deliveries",
  "plant-mom-match",
  "hyper-star-fury",
  "saw-a-kraken",
  "reclaim",
  "fatpack-joe",
  "herbanetics",
  "uknow"
];

const data = {
  "explosive-finger": {
    title: "Explosive Finger",
    short_description: "Solve puzzles using explosive projectiles in this challenging game.",
    description: "Explosive finger is a mobile/pc puzzle game where use the explosive power of the projectile you have to shoot it and get it to the it's destination. There are different levels with different level configurations and you need to use your wits to finish the levels.",
    gif: "./assets/gifs/explosive-finger.gif",
    tech: ["Unity", "C#", "Git"],
    actions: ["I set up the touch logic for how the projectile is shot.", "I made all the systems that govern the game.", "The most interesting part of this game was getting the touch logic to work, because it sort of works like a sling shot, so figuring that part out was fun and it was a new mechanic that I wasn't familiar with."],
    link: "https://disputed-people-games.itch.io/explosive-finger",
    alignment: "left",
  },
  "khamani": {
    title: "Khamani: The Lion of Summer",
    short_description: "Embark on a mythological journey as a lion-transforming archer.",
    description: "Khamani: The Lion of summer is an action is a 3D African Gods and Mythology inspired Action-Adventure Game. You play as Khamani, a skilled archer from Nubia and the last of his tribe that can transform into a lion.",
    gif: "./assets/gifs/khamani.gif",
    tech: ["Unity", "C#", "Git"],
    actions: ["So this was the first game where I created a character controller using the state machine architecture.", "I combined that with the animation system in Unity to bring the character to life.", "I worked on creating a power up system with different progressions through rarities.", "I used an extensive event bus system to drive different actions and  logic flows of the game.", "Created enemy AI logic using the same state machine architecture.", "Used optimization techniques to help the game run at smoother frame rates."],
    link: "https://disputed-people-games.itch.io/khamani-arena-of-the-gods",
    alignment: "right"
  },
  "wacky-deliveries": {
    title: "Wacky Deliveries",
    short_description: "Deliver goods with chaotic physics in this fun-filled game.",
    description: "Wacky Deliveries is a delivery game where wacky physics is the name of the game. Your main goal of the game is to make as many deliveries as possible while controlling a war that's tuned to be as wacky as possible.",
    gif: "./assets/gifs/wacky-deliveries.gif",
    tech: ["Unity", "C#", "Git"],
    actions: ["I worked on a car controller, it was my first attempt.", "I experimented  with wheel colliders in different configurations along with different physics materials to create an experience that fit the design of the game."],
    link: "https://disputed-people-games.itch.io/wacky-deliveries",
    alignment: "left",
  },
  "plant-mom-match": {
    title: "Plant Mom Match",
    short_description: "Match 3 puzzles meet plant care in this cozy game.",
    description: "Plant Mom Match is a sweet and cozy blend of Match 3 and Virtual Plant Care. Combing themes of skateboarding and a love for plants, customize your plant with different cosmetic items with the currency you earn from the Match 3 game.",
    gif: "./assets/gifs/plant-mom-match.gif",
    tech: ["Unity", "C#", "Git"],
    actions: ["I worked on the match 3 aspect of the game. ", "I implemented the entire logic flow of that part of the game, from making the grid, the matching logic all of that stuff."],
    link: "https://disputed-people-games.itch.io/plant-mom-match",
    alignment: "right"
  },
  "hyper-star-fury": {
    title: "Hyper Star Fury",
    short_description: "Battle pirates in this Afrofuturistic arcade shooter.",
    description: "Hyper Star Fury is an old school arcade top down inspired shooter. Lock in, power up and take to the stars in our Afrofuturistic adventure as Khamani, the hot shot pilot of the SS Apedemak.  Engage in an epic intergalactic battle against the pirate forces of Shango, the dreaded space God of Thunder!",
    gif: "./assets/gifs/hyper-star-fury.gif",
    tech: ["Unity", "C#", "Google APIs"],
    actions: ["I created the shooting mechanics.", "I made the boss logic, and made the power up system in the game.", "I also worked on porting the game from pc to mobile and added it to the Google Play Store."],
    link: "https://play.google.com/store/apps/details?id=com.itthnkgaming.hyperStarFury&hl=en",
    alignment: "left"
  },
  "saw-a-kraken": {
    title: "I Saw A Kraken",
    short_description: "Defeat aquatic bosses with your Viking ship's saw.",
    description: "Spin around a swirling sea tornado battling terrifying aquatic bosses with your Viking ship's mighty saw in 'I Saw a Kraken' our official game submission for the Boss Rush Jam 2025.",
    gif: "./assets/gifs/saw-a-kraken.gif",
    tech: ["Unity", "C#", "Git"],
    actions: ["I made the saw mechanic, made all the bosses.", "I created a scalable menu navigation system that is usable for all controls."],
    link: "https://disputed-people-games.itch.io/i-saw-a-kraken",
    alignment: "right"
  },
  "reclaim": {
    title: "Reclaim",
    short_description: "Restore life to a post-climate-collapse world in this platformer.",
    description: "<strong>RECLAIM</strong> is a minimalist, movement-driven 2.5D platformer set in a future where the world is healing from the aftermath of a climate collapse. You play as a Seedbearer, part of a new generation trained to bring life back to the abandoned towers of the old world.Each climb begins stark, still, forgotten. But the moment you plant the seed, everything changes. Nature awakens, vibrant and fast-moving, racing upward through the tower as roots, leaves, and light reclaim the space. It’s beautiful, it’s alive — and it won’t wait for you!",
    gif: "./assets/gifs/reclaim.gif",
    tech: ["Unity", "C#", "Git"],
    actions: ["I worked on the character controller.", "I created the tower generation system.", "I created the power up system.", "I created the scene fade shader we used for scene transition(we can select different ones).", "I expanded on my input system logic and made a system to change the UI images based on UI.", "I worked on the level elements that are used in the level designs. <br> This was a submission for the Solar Punk Game Jam 2025."],
    link: "https://disputed-people-games.itch.io/reclaim",
    alignment: "left"
  },
  "fatpack-joe": {
    title: "Fatpack Joe",
    short_description: "Control a DIY jetpack to stop an alien invasion.",
    description: "Fatpack Joe is a humorous game about a kid who makes a jet-pack out of a couch, tape and a pair of missiles. The player is challenged to control this monstrosity to stop an alien invasion in single player or against other players in multiplayer. The invasion leads Joe on an adventure from Earth to other planets, realms and galaxies. The game is a unique spin on Afrofuturism: mixing elements of African art and the solarpunk aesthetic.",
    gif: "./assets/gifs/fat-pack-joe.gif",
    tech: ["Unity", "C#", "Google Play APIs", "Iron Source APIs", "Git"],
    actions: ["I implemented the entire codebase for the game.", "I created the core mechanics, the jetpack, created the power-up system, the in game shop.", "I created the level spawning system, the score, the enemy AI, everything gameplay wise.", "I added the game through Play Store.", "I implemented rewarded ads and interstial ads using Iron Source's API.", "I integrated the Google Play games API into the game to implement a leader board in the game."],
    link: "https://play.google.com/store/apps/details?id=com.AtrybuteGraphics.FatPackJoe",
    alignment: "right"
  },
  "herbanetics": {
    title: "Herbanetics",
    short_description: "Explore ancestral realms in this science-meets-spirituality game.",
    description: "Named from traditional Healing herbs and genetics. The game features a heroine who grew up in science and distanced herself from her family’s archaic ways. She found a gene that it thinned the barrier between the material world and ancestral world around the person with it at activated it with her science. With her inexperience with this world that she’s distanced herself from, malicious spirits from the realm were able invade the material world through her.",
    gif: "./assets/gifs/herbanetics.gif",
    tech: ["Unity", "C#", "Google Play APIs", "Git"],
    actions: ["I implemented the entire codebase for the game.", "I created the core mechanics and the power-up system.", "I created the level spawning system, the score, the enemy AI, everything gameplay wise, and the UI.", "I implemented the power progression system.", "I added the game through Play Store."],
    link: "https://play.google.com/store/apps/details?id=com.DefaultCompany.Herbantics",
    alignment: "left"
  },
  "uknow": {
    title: "UKNOW",
    short_description: "Use your power cards to turn the tables & gain the upper hand as you battle it out to answer all the questions correctly and be the first to finish all your cards.",
    description: "Use your power cards to turn the tables & gain the upper hand as you battle it out to answer all the questions correctly and be the first to finish all your cards.",
    gif: "./assets/gifs/uknow.gif",
    tech: ["Unity", "C#", "Google Play APIs", "Git"],
    actions: ["I mostly Quality Tested it and made the game expereience better.", "I fixed logic bugs and the ruleset of the cards and gameflow.", "I created the multiplayer base on the original design of the game using Unity's Netcode for Game Objects System, with that I was able to create a login and a lobby system.", "We were unable to finish because of time constraints, and ended up making it a PVE(Player vs Environment) game."],
    link: "https://disputed-people-games.itch.io/uknow-quiz-card-game",
    alignment: "right"
  }
};



export const projectData = data;

window.data = projectData;