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
    description: "<strong>RECLAIM</strong> is a minimalist, movement-driven 2.5D platformer about restoring life to abandoned spaces after climate collapse.",
    my role: "Gameplay programmer",
    platform: "PC",
    gif: "./assets/gifs/reclaim.gif",
    tech: ["Unity", "C#", "Git"],
    actions: [
      "I adapted and extended a third-party character controller to meet the project's movement requirements.The original controller was handled through a large monolithic script, so I refactored the logic into a state-machine architecture to make movement behaviours easier to debug, extend, and maintain.",
      "I implement additional traversal mechanics, including slippery slope interaction and a parkour move over specific blocks. This required solving solving directional input issues, sprite orientation problems, and animation transition challenges to keep movement responsive and readable.",
      ],
    link: "https://disputed-people-games.itch.io/reclaim",
    alignment: "left"
  },
  "super-diski": {
    title: "Super Diski FC",
    short_description: "Tap, hold, and launch the ball through a maze of moving platforms, launch pads, energy barriers, and other tricky obstacles.",
    description: "SuperDiskiFC is a mobile football puzzle game built in Unity, focused on physics-based shots, level progression, cosmetic customization, and replayable star-based challenges.",
    my role:"Gameplay and Systems programmer",
    platform: "Android",
    gif: "./assets/gifs/super-diski.gif",
    tech: ["Unity", "C#","JSON save data" ,"Google Play APIs", "Git"],
    actions: [
      "I implemented the level progresion system, inclusing locked/unlocked level states, star tracking, one-shot completion tracking, and world progression gates. I also built gameplay flow logic for win/loss conditions, level loading, and player progression.",
      "For the shop and customization flow, I created a persistence system that stored selected cosmetics, purchased items, and related gameplay data using JSON and ScriptableObject references.This allowed selected balls, stadiums visuals, VFX, and scoring effects to carry correctly between menus and gameplay scenes.",
    ],
    link: "https://play.google.com/store/apps/details?id=com.DisputedPeopleGames.SuperDiskiFC",
    alignment: "right"
  },
  "fatpack-joe": {
    title: "Fatpack Joe",
    short_description: "Control a DIY jetpack to stop an alien invasion.",
    description: "Fatpack Joe is a humorous Unity game about controlling a DIY jetpack during an alien invasion.",
    my role: "Main programmer & Designer",
    platform : "Android",
    gif: "./assets/gifs/fat-pack-joe.gif",
    tech: ["Unity", "C#", "Google Play SDK", "IronSource", "mobile optimization"],
    actions: [
      "I designed and implemented the core gameplay systems, including flight controls, power-ups, shop functionality, enemy AI, and mobile platform integration. I also integrated rewarded/interstitial ads and Google Play Games leaderboard support for the Android release.",
    ],
    link: "https://play.google.com/store/apps/details?id=com.AtrybuteGraphics.FatPackJoe",
    alignment: "left"
  },
  "khamani": {
    title: "Khamani: The Lion of Summer",
    short_description: "Embark on a mythological journey as a lion-transforming archer.",
    description: "Khamani: The Lion Of Summer is 3D action-adventure project inspired by African mythology",
    my role: "Gameplay programmer",
    platform:"PC",
    gif: "./assets/gifs/khamani.gif",
    tech: ["Unity", "C#", "Git"],
    actions: [
      "I implemented a state-machine based character controller and extended the same architectural approach to the enemy AI. I also researched and built an event bus. to help decouple gameplay systems and support cleaner communication between game objects.",
      "During performance passes, I contributed to optimization through occulsion culling, static batching, shader/material instancing, pooling, and reducing unnecessary update-loop work."
    ],
    link: "https://disputed-people-games.itch.io/khamani-arena-of-the-gods",
    alignment: "right"
  },
  "herbanetics": {
    title: "Herbanetics",
    short_description: "Explore ancestral realms in this science-meets-spirituality game.",
    description: "Herbanetics is a mobile action game Combing science, spirituality and ancestral-world themes.",
    my role: "Sole Gameplay programmer & Designer",
    plaform: "Android",
    gif: "./assets/gifs/herbanetics.gif",
    tech: ["Unity", "C#", "Google Play APIs", "Git"],
    actions: ["I implemented the full gameplay codebase, including the core mechanics, enemy AI, scoring,UI flow, level spawning, and power-up systems. I also built the power progression logic that supported player advancement acorss the game."],
    link: "https://play.google.com/store/apps/details?id=com.DefaultCompany.Herbantics",
    alignment: "left"
  },
  "hyper-star-fury": {
    title: "Hyper Star Fury",
    short_description: "Battle pirates in this Afrofuturistic arcade shooter.",
    description: "Hyper Star Fury is an Afrofuturistic arcade shooter built around fast top-down combat, power-ups, and boss encounters.",
    my role: "Gameplay programmer/ Mobile Porting support",
    platform: "Android & PC",
    gif: "./assets/gifs/hyper-star-fury.gif",
    tech: ["Unity", "C#", "Google Play APIs"],
    actions: ["implemented the shooting mechanics, boss logic, and power-up systems. I also worked on adapting the game from PC to mobile, which required adjusting the controls, gameplay feel, and platform specific for Google Play release."],
    link: "https://play.google.com/store/apps/details?id=com.itthnkgaming.hyperStarFury&hl=en",
    alignment: "right"
  },
  "saw-a-kraken": {
    title: "I Saw A Kraken",
    short_description: "Defeat aquatic bosses with your Viking ship's saw.",
    description: "I Saw A Kraken is a boss-rush game jam project where players control a Viking ship fitted with a giant saw while battling aquatic bosses.",
    my role: "Gameplay programmer/ Designer",
    plaform: "PC",
    gif: "./assets/gifs/saw-a-kraken.gif",
    tech: ["Unity", "C#","Google Play APIs" ,"Git"],
    actions: ["I implemented the core saw mechanic, boss behaviours, and menu navigation System. The saw mechanic formed the main combat interaction, while the boss systems were built around readable attack patterns and repeated player encounters.",
    "I also created a scalable menu navigation setup that supported multiple control methods, making the game easier to navigate across different input devices."],
    link: "https://disputed-people-games.itch.io/i-saw-a-kraken",
    alignment: "left"
  },
  "explosive-finger": {
    title: "Explosive Finger",
    short_description: "Solve puzzles using explosive projectiles in this challenging game.",
    description: "Explosive finger is a mobile/pc puzzle game built around launching explosive projectiles through different level configurations.",
    my role: "Gameplay programmer",
    plaform: "PC",
    gif: "./assets/gifs/explosive-finger.gif",
    tech: ["Unity", "C#", "Git"],
    actions: ["I implemented the projectile launch System, inclusing touch-based aiming and release logic inspired by slingshot mechanics. I also built the supporting game systems that controlled level flow, projectile behaviour, and puzzle completion.",
    "This project strengthened my understanding of touch input, physics-based aiming, and designing mechanics that need to feel predictable acorss different devices."],
    link: "https://disputed-people-games.itch.io/explosive-finger",
    alignment: "right",
  }, 
  "wacky-deliveries": {
    title: "Wacky Deliveries",
    short_description: "Deliver goods with chaotic physics in this fun-filled game.",
    description: "Wacky Deliveries is a physics-based delivery game focused on chaotic vehicle handling and comedic driving.",
    my role: "Gameplay programmer",
    plaform: "PC",
    gif: "./assets/gifs/wacky-deliveries.gif",
    tech: ["Unity", "C#", "Git"],
    actions: ["I built an experimental vehicle controller using Unity Wheel Colliders and physics materials. The goal was not realistc driving, but a deliberately unstable and playful handling model that matched the design of the game.",
    "This project helped me understand Unity vehicle physics, Wheel collider tuning, friction behaviour, and how physics settings affect moment-to-moment gameplay feel."],
    link: "https://disputed-people-games.itch.io/wacky-deliveries",
    alignment: "left",
  },
  "plant-mom-match": {
    title: "Plant Mom Match",
    short_description: "Match 3 puzzles meet plant care in this cozy game.",
    description: "Plant Mom Match is a cozy hybrid concept combing match-3 puzzle gameplay with virtual plant care and cosmentic customization.",
    my role: "Gameplay programmer",
    plaform: "Android & PC",
    gif: "./assets/gifs/plant-mom-match.gif",
    tech: ["Unity", "C#", "Git"],
    actions: ["I implemented the match-3 gameplay logic, including grid generation, tile selection, match detection, and the core flow of resolving matches. This system formed the foundation for the puzzle side of the game and connected into the broader plant-care concept."],
    link: "https://disputed-people-games.itch.io/plant-mom-match",
    alignment: "right"
  },
  "uknow": {
    title: "UKNOW",
    short_description: "Use your power cards to turn the tables & gain the upper hand as you battle it out to answer all the questions correctly and be the first to finish all your cards.",
    description: "UKNOW is a quiz card game built around power cards, turn-based decision making, and answeing questions to progress through your hand.",
    my role: "Gameplay Programmer/ QA Support",
    plaform, "PC"
    gif: "./assets/gifs/uknow.gif",
    tech: ["Unity", "C#","Netcode for GameObjects", "Git"],
    actions: ["I supported the projected through quality testing, game-flow impovements, card logic fixes, and rulest debugging. I also prototyped the multiplayer foundation using Unity Netcode for GameObjects, including early login and lobby functionality.", 
    "Due to production constraints, the final version shifted toward a PvE experience, but the multiplayer prototype helped establish the direction for future online card-game systems."],
    link: "https://disputed-people-games.itch.io/uknow-quiz-card-game",
    alignment: "left"
  },
  "mashoota": {
    title: "Scotts Mashoota",
    short_description: "Snap a pic of the fastest Mzansi super star.",
    description: "Scotts Mashoota is a fast-paced mobile timing game where players take photos of a moving target at the right moment.",
    my role: "Gameplay Programmer",
    plaform: "Android",
    gif: "./assets/gifs/mashoota.gif",
    tech: ["Unity", "C#", "Google Play APIs", "Git"],
    actions: ["I implemented the camera-shooting mechanic, UI integration, and game-flow logic. I also handled the Google Play Store upload process."],
    link: "https://play.google.com/store/apps/details?id=com.Itthynkgaming.ProjectMashoota&hl=en",
    alignment: "right"
  }
};



export const projectData = data;

window.data = projectData;
