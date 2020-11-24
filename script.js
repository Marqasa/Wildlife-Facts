const bats = [
  'Vampire bats prey mainly on cows, horses and other large mammals.',
  'Bats can wrap their wings around insects or fruit to hold it while eating.',
];

const bears = [
  "A panda bear's diet mainly consists of bamboo.",
  'Bears can smell food, cubs, a mate or danger from miles away.',
];

const cats = [
  'Cats have a tongue that is rough like sandpaper.',
  'Cats have sensitive whiskers that can feel things just like your fingertips can.',
];

const robins = [
  'Robins prefer to nest in spruce or maple trees, but are very adaptable, nesting in all sorts of trees and  buildings.',
  'The main enemy of the American Robin is the housecat.',
];

const puffins = [
  'Puffins are covered in waterproof feathers, allowing them to spend most of their time in the water.',
  'The beak of an atlantic puffin is actually a dull grey during the winter months and only turns to its brilliant orange when spring arrives.',
];

const sharks = [
  'Sharks have been around for about 400 million years.',
  "Sharks have the most powerful jaws on the planet. Unlike most animals' jaws, both the sharks' upper and lower jaws move.",
];

const chameleons = [
  'Some species of chameleon like to use leaves and brush to protect themselves from predators while they sleep, while others climb up branches using their impressive hooked feet to ensure their safety.',
  'Chameleons are dimorphic, meaning that males typically look a little fancier than females.',
];

const snakes = [
  'Snakes bodies are covered with scales.  Without this protective armor snakes could not move over rough or hot surfaces like tree bark, rocks, and hot desert sand.',
  "Snakes don't smell with their nostrils, they smell with their tongues!",
];

const frogs = [
  'Scientists have found frogs fossils that date back to the Jurassic period over 140 million years ago.',
  'Frogs begin their lives as tadpoles that are hatched in the water from tiny jelly-covered eggs.',
];

const spiders = [
  "Spider's legs are covered with many hairs. The hairs pick up vibrations and smells from the air.",
  "Spiders recycle their silk. They eat up what isn't useful anymore and start over with fresh stuff.",
];

const mammals = { bat: bats, bear: bears, cat: cats };
const birds = { robin: robins, puffin: puffins };
const fish = { shark: sharks };
const reptiles = { chameleon: chameleons, snakes: snakes };
const amphibians = { frog: frogs };
const arthropods = { spider: spiders };

const classes = {
  mammal: mammals,
  bird: birds,
  fish: fish,
  reptile: reptiles,
  amphibian: amphibians,
  arthropod: arthropods,
};

const classKeys = Object.keys(classes);
const randomClassIndex = Math.floor(Math.random() * classKeys.length);
const randomClassKey = classKeys[randomClassIndex];
const randomClass = classes[randomClassKey];

const animalKeys = Object.keys(randomClass);
const randomAnimalIndex = Math.floor(Math.random() * animalKeys.length);
const randomAnimalKey = animalKeys[randomAnimalIndex];
const randomAnimal = randomClass[randomAnimalKey];

const randomFactIndex = Math.floor(Math.random() * randomAnimal.length);
const randomFact = randomAnimal[randomFactIndex];

console.log(
  `A ${randomAnimalKey} is a type of ${randomClassKey}. ${randomFact}`
);
