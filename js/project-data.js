export const projectOrder = [
  "reclaim",
  "super-diski",
  "fatpack-joe",
  "khamani",
  "herbanetics",
  "hyper-star-fury",
  "saw-a-kraken",
  "explosive-finger",
  "wacky-deliveries",
  "plant-mom-match",
  "uknow",
  "mashoota"
];

const data = {
  "reclaim": {
    title: "Reclaim",
    short_description: "Restore life to a post-climate-collapse world in this platformer.",
    // description: "<strong>RECLAIM</strong> is a minimalist, movement-driven 2.5D platformer set in a future where the world is healing from the aftermath of a climate collapse. You play as a Seedbearer, part of a new generation trained to bring life back to the abandoned towers of the old world.Each climb begins stark, still, forgotten. But the moment you plant the seed, everything changes. Nature awakens, vibrant and fast-moving, racing upward through the tower as roots, leaves, and light reclaim the space. It’s beautiful, it’s alive — and it won’t wait for you!",
    description: "Due to time constraints on this project we decided to use an external character controller for the project. However the character controller didn't fully support the requirements for the project. So I had to get familiar with the asset and modify it to support the requirements of the project.",
    gif: "./assets/gifs/reclaim.gif",
    tech: ["Unity", "C#", "Git"],
    actions: [
      "Firstly, the character controller was handled through one long player controller script that handled everything else there. This wasn't very ideal so I shifted pretty much all of the logic into distinct states where it was easier for me to understand what was going on and to make it easier to debug if there were any issues. So I used the state machine pattern to achieve this and at the end I had multiple scripts that handled different states of the character controller such as walking, jumping, wall sliding etc.",
      "After that I had a good idea of where everything was and how I could start adding new functionality, so the first thing I added was the ability to interact with the slippery slopes for the player. The desgin required that the player was able to maneuver through those. The next thing I did was a parkour move over a distinct block. This was a bery fun mechanic to add as it challenged me in a few ways.",
      "One how would I manipulate 2D sprites in ways to make the animations look good while the action occured.",
      "Challenging how I would use input from different directions (There was a bug where if I parkoured from the left side then the parkour will go to the right instead of the left so I had to find a way to deal with that).",
      "Also ensuring smooth animation transition from parkour back to running.",
      ""],
    link: "https://disputed-people-games.itch.io/reclaim",
    alignment: "left"
  },
  "super-diski": {
    title: "Super Diski FC",
    short_description: "Tap, hold, and launch the ball through a maze of moving platforms, launch pads, energy barriers, and other tricky obstacles.",
    description: "Super Diski FC is a mobile football puzzle game where physics meets flair, and every shot is a flex. Tap, hold, and launch the ball through a maze of moving platforms, launch pads, energy barriers, and other tricky obstacles. Customise your style with stadium skins, flashy ball designs, and trail effects that bring pure heat to the pitch. It’s brainy, bouncy, and full of local flavour.",
    gif: "./assets/gifs/super-diski.gif",
    tech: ["Unity", "C#", "Google Play APIs", "Git"],
    actions: [
      "Super Diski FC is a game with many levels so we had to create a level select system that reflects that. The system is fairly simple as it loads up all the levels in the game but locks levels that haven't been completed yet. The system also displays the amount of stars collected per levels and whether or not if you've completed the level through one hit. So we have quite of bit of fun stuff that we added to the level select system. ",
      "Super Diski has a shop system where players can but various upgrades and visual effects that they will use in game. The biggest challenge I faced was finding a way to translate the store information into the game information. For things like stadium visuals, the ball selected for the effects selected/bought for scoring and hitting the ball etc. So I created a manager that stored all related information about the various items, and I used a JSON approach to save that information and restore it. This was done through a notification system through IDs that linked various items to their scriptable objects and we can relate that info back to the game when we loaded each level. This was a tough challenge for me and I don't think I did well for that system but it was a good attempt and it worked. I learnt a lot from that system about saving information from various scenes and how to retain that info.",
      "I also worked on Gameplay flow logic. Creating the winning and lose conditions of the level and ultimately a progression system that keeps track of how many levels you've completed and how many stars you've collected in the game to progress through a new set of levels you need to have collected a set amount of stars to continue, so I was in charge of handling that system as well and it worked out pretty well.",
      "I created and implemented the Gameplay flow logic (Win conditions, Lose conditions, Progression system, Loading Sytem)."
    ],
    link: "https://play.google.com/store/apps/details?id=com.DisputedPeopleGames.SuperDiskiFC",
    alignment: "right"
  },
  "fatpack-joe": {
    title: "Fatpack Joe",
    short_description: "Control a DIY jetpack to stop an alien invasion.",
    description: "Fatpack Joe is a humorous game about a kid who makes a jet-pack out of a couch, tape and a pair of missiles. The player is challenged to control this monstrosity to stop an alien invasion in single player or against other players in multiplayer. The invasion leads Joe on an adventure from Earth to other planets, realms and galaxies. The game is a unique spin on Afrofuturism: mixing elements of African art and the solarpunk aesthetic.",
    gif: "./assets/gifs/fat-pack-joe.gif",
    tech: ["Unity", "C#", "Google Play APIs", "Iron Source APIs", "Git"],
    actions: [
      "I was the main programmer of this game so I designed and implemented all of the systems and mechanics of the game. From the flight controls to the power up systems, the shops, the enemy AI etc.",
      "For Fatpack Joe, we implemented rewarded and interstial ads using Unity's Iron sources API. The game was also published on the Google Play Store. I also added the Google Play Games SDK to implement a leaderboard in the game."
    ],
    link: "https://play.google.com/store/apps/details?id=com.AtrybuteGraphics.FatPackJoe",
    alignment: "left"
  },
  "khamani": {
    title: "Khamani: The Lion of Summer",
    short_description: "Embark on a mythological journey as a lion-transforming archer.",
    description: "Khamani: The Lion of summer is an action is a 3D African Gods and Mythology inspired Action-Adventure Game. You play as Khamani, a skilled archer from Nubia and the last of his tribe that can transform into a lion.",
    gif: "./assets/gifs/khamani.gif",
    tech: ["Unity", "C#", "Git"],
    actions: [
      "Khamani was the first project which I used the state machine pattern for the first time to create a character controller. It was a tough integration because I was converting it from a previously created character controller, but it was a good experience which I've taken with me through all the projects I've worked on since. I also extended this to create the enemy AI using the same pattern.",
      "This was one fo the first big projects I've worked on, so for this I had to create an event bus to handle alot of the different actions and logic flows of the game. So I went to research on how to create an event bus.",
      "The game wasn't performing well so the team and I had to implore different optimization techniques to make sure the game runs well. One of these techniques include using occlusion culling for the environment, Static batching for game objects and Static Instancing for shaders and materials. For scripts we had to use pooling to refine our update loops and using more performant functions to achieve the same goals."
    ],
    link: "https://disputed-people-games.itch.io/khamani-arena-of-the-gods",
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
  "hyper-star-fury": {
    title: "Hyper Star Fury",
    short_description: "Battle pirates in this Afrofuturistic arcade shooter.",
    description: "Hyper Star Fury is an old school arcade top down inspired shooter. Lock in, power up and take to the stars in our Afrofuturistic adventure as Khamani, the hot shot pilot of the SS Apedemak.  Engage in an epic intergalactic battle against the pirate forces of Shango, the dreaded space God of Thunder!",
    gif: "./assets/gifs/hyper-star-fury.gif",
    tech: ["Unity", "C#", "Google APIs"],
    actions: ["I created the shooting mechanics.", "I made the boss logic, and made the power up system in the game.", "I also worked on porting the game from pc to mobile and added it to the Google Play Store."],
    link: "https://play.google.com/store/apps/details?id=com.itthnkgaming.hyperStarFury&hl=en",
    alignment: "right"
  },
  "saw-a-kraken": {
    title: "I Saw A Kraken",
    short_description: "Defeat aquatic bosses with your Viking ship's saw.",
    description: "Spin around a swirling sea tornado battling terrifying aquatic bosses with your Viking ship's mighty saw in 'I Saw a Kraken' our official game submission for the Boss Rush Jam 2025.",
    gif: "./assets/gifs/saw-a-kraken.gif",
    tech: ["Unity", "C#", "Git"],
    actions: ["I made the saw mechanic, made all the bosses.", "I created a scalable menu navigation system that is usable for all controls."],
    link: "https://disputed-people-games.itch.io/i-saw-a-kraken",
    alignment: "left"
  },
  "explosive-finger": {
    title: "Explosive Finger",
    short_description: "Solve puzzles using explosive projectiles in this challenging game.",
    description: "Explosive finger is a mobile/pc puzzle game where use the explosive power of the projectile you have to shoot it and get it to the it's destination. There are different levels with different level configurations and you need to use your wits to finish the levels.",
    gif: "./assets/gifs/explosive-finger.gif",
    tech: ["Unity", "C#", "Git"],
    actions: ["I set up the touch logic for how the projectile is shot.", "I made all the systems that govern the game.", "The most interesting part of this game was getting the touch logic to work, because it sort of works like a sling shot, so figuring that part out was fun and it was a new mechanic that I wasn't familiar with."],
    link: "https://disputed-people-games.itch.io/explosive-finger",
    alignment: "right",
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
  "uknow": {
    title: "UKNOW",
    short_description: "Use your power cards to turn the tables & gain the upper hand as you battle it out to answer all the questions correctly and be the first to finish all your cards.",
    description: "Use your power cards to turn the tables & gain the upper hand as you battle it out to answer all the questions correctly and be the first to finish all your cards.",
    gif: "./assets/gifs/uknow.gif",
    tech: ["Unity", "C#", "Google Play APIs", "Git"],
    actions: ["I mostly Quality Tested it and made the game expereience better.", "I fixed logic bugs and the ruleset of the cards and gameflow.", "I created the multiplayer base on the original design of the game using Unity's Netcode for Game Objects System, with that I was able to create a login and a lobby system.", "We were unable to finish because of time constraints, and ended up making it a PVE(Player vs Environment) game."],
    link: "https://disputed-people-games.itch.io/uknow-quiz-card-game",
    alignment: "left"
  },
  "mashoota": {
    title: "Scotts Mashoota",
    short_description: "Snap a pic of the fastest Mzansi super star.",
    description: "Time your snaps to capture the fastest Mzansi super star in this fun and fast paced game. The game is a simple camera shooting game where you have to time your shots to get a picture of Scotts Maphuma.",
    gif: "./assets/gifs/mashoota.gif",
    tech: ["Unity", "C#", "Google Play APIs", "Git"],
    actions: ["I created the camera shooting mechanic.","I also worked on the UI Integration", "I created the game flow logic", "I uploaded the game to the Google Play Store."],
    link: "https://play.google.com/store/apps/details?id=com.Itthynkgaming.ProjectMashoota&hl=en",
    alignment: "right"
  }
};



export const projectData = data;

window.data = projectData;
