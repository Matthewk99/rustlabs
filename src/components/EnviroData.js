import Tree from './Pic/Tree.png';
import StoneNode from './Pic/StoneNode.png';
import SulfurNode from './Pic/SulfurNode.png';
import MetalNode from './Pic/MetalNode.png';
import Bear from './Pic/Bear.png';
import Boar from './Pic/Boar.png';
import Wolf from './Pic/Wolf.png';



const EnviroData = [
    {
        title: "Tree",
        desc: "Used to craft wooden items and structures.",
        image: Tree,
        stat1: "Chainsaw: 3-5 sec",
        stat2: "Hatchet: 12-19 sec",
        stat3: "Rock: 29-50 sec"
    },
    {
        title: "Stone Ore Node",
        desc: "Used to collect stone for building and crafting.",
        image: StoneNode,
        stat1: "Jackhammer: 1-2 sec",
        stat2: "Pickaxe: 12-27 sec",
        stat3: "Stone Pickaxe: 9-23 sec"
    },
    {
        title: "Sulfur Ore Node",
        desc: "Used to smelt into sulfur for weapon ammunition.",
        image: SulfurNode,
        stat1: "Jackhammer: 1-2 sec",
        stat2: "Pickaxe: 12-27 sec",
        stat3: "Stone Pickaxe: 9-23 sec"
    },
    {
        title: "Metal Ore Node",
        desc: "Used to smelt into metal fragments for crafting items and structures.",
        image: MetalNode,
        stat1: "Jackhammer: 1-2 sec",
        stat2: "Pickaxe: 12-27 sec",
        stat3: "Stone Pickaxe: 9-23 sec"
    },
    {
        title: "Bear",
        desc: "A powerful predator, bears are a large and fast enemy capable of injuring and killing weak or strong players within several seconds.",
        image: Bear,
        stat1: "Can obtain: Animal Fat",
        stat2: "Can obtain: Raw Bear Meat",
        stat3: "Can obtain: Cloth"
    },
    {
        title: "Boar",
        desc: "A boar is a small, black animal that can be found in any biome. They may initiate combat if a player strays too close.",
        image: Boar,
        stat1: "Can obtain: Animal Fat",
        stat2: "Can obtain: Raw Pork",
        stat3: "Can obtain: Cloth"
    },
    {
        title: "Wolf",
        desc: "Wolves are essentially faster, weaker bears, known for being insanely aggresive with a bark as tough as its bite.",
        image: Wolf,
        stat1: "Can obtain: Animal Fat",
        stat2: "Can obtain: Raw Wolf Meat",
        stat3: "Can obtain: Cloth"
    }
]

export default EnviroData;