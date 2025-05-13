export const projectOrder = [
  "explosive-finger",
  "khamani",
  "wacky-deliveries",
  "plant-mom-match",
  "hyper-star-fury",
  "saw-a-kraken",
  "reclaim"
];

const data = {
  "explosive-finger": {
    title: "Explosive Finger",
    short_description: "A puzzle game where you use explosive projectiles to solve levels.",
    description: "Explosive finger is a mobile/pc puzzle game where use the explosive power of the projectile you have to shoot it and get it to the it's destination. There are different levels with different level configurations and you need to use your wits to finish the levels.",
    gif: "/assets/images/placeholder.gif",
    tech: ["Unity", "C#", "Git"],
    actions: "What I did in this game? Pretty much everything. I set up the touch logic for how the projectile is shot, made all the systems the govern the game. The most interesting part of this game was getting the touch logic to work, because it sort of works like a sling shot, so figuring that part out was fun and it was a new mechanic that I wasnt familiar with.",
    link: "https://disputed-people-games.itch.io/explosive-finger",
    alignment: "left",
  },
  "khamani": {
    title: "Khamani: The Lion of Summer",
    short_description: "A 3D African mythology-inspired action-adventure game.",
    description: "Khamani: The Lion of summer is an action is a 3D African Gods and Mythology inspired Action-Adventure Game. You play as Khamani, a skilled archer from Nubia and the last of his tribe that can transform into a lion.",
    gif: "/assets/images/placeholder.gif",
    tech: ["Unity", "C#", "Git"],
    actions: "What I did? - So this was the first game where I create a character controller using the state machine architecture and I combined that with the animation system in unity to bring the character to live. - I worked on creating a power up system with different progression through rarities- Use an extensive event bus system to drive different actions and  logic flow of the game- Created enemy AI logic using the same state machine architecture- Used optimization techniques to help the game run at smoother frame rates",
    link: "https://disputed-people-games.itch.io/khamani-arena-of-the-gods",
    alignment: "right"
  },
  "wacky-deliveries": {
    title: "Wacky Deliveries",
    short_description: "A delivery game with wacky physics and fun challenges.",
    description: "Wacky Deliveries is a delivery game where wacky physics is the name of the game. Your main goal of the game is to make as many deliveries as possible while controlling a war that's tuned to be as wacky as possible.",
    gif: "/assets/images/placeholder.gif",
    tech: ["Unity", "C#", "Git"],
    actions: "What I did: Again I did almost everything lmao, but the big thing to take away is that, I worked on a car controller, it was my first attempt. I experimented  with wheel colliers in different configurations along with different physics materials to create an experience that fit the design of the game.",
    link: "https://disputed-people-games.itch.io/wacky-deliveries",
    alignment: "left",
  },
  "plant-mom-match": {
    title: "Plant Mom Match",
    short_description: "A cozy blend of Match 3 and virtual plant care.",
    description: "Plant Mom Match is a sweet and cozy blend of Match 3 and Virtual Plant Care. Combing themes of skateboarding and a love for plants, customize your plant with different cosmetic items with the currency you earn from the Match 3 game.",
    gif: "/assets/images/placeholder.gif",
    tech: ["Unity", "C#", "Git"],
    actions: "I worked on the match 3 aspect of the game, I implemented the entire logic flow of that part of the game, from  making the grid, the matching logic all of that stuff",
    link: "https://disputed-people-games.itch.io/plant-mom-match",
    alignment: "right"
  },
  "hyper-star-fury": {
    title: "Hyper Star Fury",
    short_description: "An Afrofuturistic top-down arcade shooter.",
    description: "Hyper Star Fury is an old school arcade top down inspired shooter. Lock in, power up and take to the stars in our Afrofuturistic adventure as Khamani, the hot shot pilot of the SS Apedemak.  Engage in an epic intergalactic battle against the pirate forces of Shango, the dreaded space God of Thunder!",
    gif: "/assets/images/placeholder.gif",
    tech: ["Unity", "C#", "Google APIs"],
    actions: "What I did: I created the shooting mechanics,  made the boss logic, and made the power up system in the game. I also worked on porting the game from pc to mobile and added it to the Google play store",
    link: "https://play.google.com/store/apps/details?id=com.itthnkgaming.hyperStarFury&hl=en",
    alignment: "left"
  },
  "saw-a-kraken": {
    title: "I Saw A Kraken",
    short_description: "A Viking ship battle game with aquatic bosses.",
    description: "Spin around a swirling sea tornado battling terrifying aquatic bosses with your Viking ship's mighty saw in 'I Saw a Kraken' our official game submission for the Boss Rush Jam 2025.",
    gif: "/assets/images/placeholder.gif",
    tech: ["Unity", "C#", "Git"],
    actions: "I made the saw mechanic, made all the bosses, create a scalable  menu navigation system that is usable for all controls",
    link: "https://disputed-people-games.itch.io/i-saw-a-kraken",
    alignment: "right"
  },
  "reclaim": {
    title: "Reclaim",
    short_description: "A 2.5D platformer set in a post-climate-collapse world.",
    description: "RECLAIM is a minimalist, movement-driven 2.5D platformer set in a future where the world is healing from the aftermath of a climate collapse. You play as a Seedbearer, part of a new generation trained to bring life back to the abandoned towers of the old world.Each climb begins stark, still, forgotten. But the moment you plant the seed, everything changes. Nature awakens, vibrant and fast-moving, racing upward through the tower as roots, leaves, and light reclaim the space. It’s beautiful, it’s alive — and it won’t wait for you!",
    gif: "/assets/images/placeholder.gif",
    tech: ["Unity", "C#", "Git"],
    actions: "What I did: Worked on the character controller, I created the tower generation system, created the power up system, created the scene fade shader we used for scene transition( we can select different ones), Expanded on my Input system logic and made a system to change the UI images based on UI. Worked on the level elements that are used in the level designs.This was a submission for the Solar Punk Game Jam 2025.",
    link: "https://disputed-people-games.itch.io/reclaim",
    alignment: "left"
  }
};



export const projectData = data;

window.data = projectData;