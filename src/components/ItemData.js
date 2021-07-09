import SMG from './Pic/SMG.png';
import M39 from './Pic/M39.png';
import AK from './Pic/AK.png';
import DB from './Pic/DB.png';
import SAR from './Pic/SAR.png';


const ItemData = [
    {
        title: "Custom SMG",
        image: SMG,
        stat1: "Damage: 30",
        stat2: "Rate of Fire: 600 RPM",
        stat3: "Capacity: 24",
        desc: "The Custom SMG is a quick-firing, low damage submachine gun with moderate recoil. Its moderate spread and low bullet velocity limit the use of the weapon to close and possibly moderate ranges, but its maximum range can be extended through the use of attachments like the Silencer or Weapon Lasersight to increase accuracy. "
    },
    {
        title: "M39 Rifle",
        image: M39,
        stat1: "Damage: 50",
        stat2: "Rate of Fire: 300 RPM",
        stat3: "Capacity: 20",
        desc: "Uncraftable Military grade semi auto rifle. Offers a slightly higher magazine capacity and higher damage than the craftable semi auto rifle."
    },
    {
        title: "Assault Rifle",
        image: AK,
        stat1: "Damage: 50",
        stat2: "Rate of Fire: 450 RPM",
        stat3: "Capacity: 30",
        desc: "The Assault Rifle is an accurate, powerful, and fully automatic rifle that fires 5.56 rifle rounds. It has a moderate rate of fire which allows for proficiency at close to medium range."
    },
    {
        title: "Double Barrel Shotgun",
        image: DB,
        stat1: "Damage: 180",
        stat2: "Rate of Fire: 120 RPM",
        stat3: "Capacity: 2",
        desc: "The Double Barrel Shotgun is a lower tier, close ranged weapon capable of one-hitting enemies within its effective range. It's best used in conjunction with other, longer range guns and against only one or two enemies at a time since it can only shoot two shells before requiring a lengthy reload. "
    },
    {
        title: "Semi-Automatic Rifle",
        image: SAR,
        stat1: "Damage: 40",
        stat2: "Rate of Fire: 343 RPM",
        stat3: "Capacity: 16",
        desc: "The Semi-Automatic Rifle is a staple of low quality weapons due to its high cost-efficiency. With its medium-tier damage, comparatively low recoil and high accuracy, the Semi-Automatic Rifle is the jack of all trades, but master of none."
    }
]

export default ItemData;