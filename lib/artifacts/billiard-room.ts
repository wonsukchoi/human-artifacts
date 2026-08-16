import type { Artifact } from "./types";

export const billiardRoom: Artifact[] = [
  {
    slug: "billiard-room",
    name: "Billiard Room",
    what: "A room built around a large flat table for playing billiards or pool.",
    why: "A pool table needs a large flat, perfectly level surface with clearance on all sides for a full cue swing — few other rooms have that much open floor space free of furniture, so it gets its own dedicated room.",
    has: ["pool table", "cue rack", "scoreboard", "chalk holder", "dartboard", "billiard balls"],
  },
  {
    slug: "pool-table",
    name: "Pool Table",
    what: "A large felt-covered table with pockets at the corners and sides, used for playing pool.",
    why: "Balls need to roll true and stop predictably for the game to be playable — a dead-flat, felt-covered slate bed gives consistent roll, and pockets at fixed points let players sink balls toward a defined target instead of an open table.",
    has: ["felt", "pool table slate"],
  },
  {
    slug: "pool-table-slate",
    name: "Pool Table Slate",
    what: "A heavy flat stone slab under a pool table's felt that keeps the playing surface perfectly level and rigid.",
    why: "Wood warps slightly with humidity and temperature over time, which would throw off every roll on the table — stone stays flat and rigid for decades, which is what a game built entirely around predictable roll actually depends on.",
    has: [],
  },
  {
    slug: "cue-rack",
    name: "Cue Rack",
    what: "A wall-mounted rack that holds pool cues upright between games.",
    why: "Cues leaned against a wall slide down and warp over time, and loose cues get stepped on or damaged — a rack with fitted slots holds each one upright and separated exactly where it's needed next to the table.",
    has: ["wood"],
  },
  {
    slug: "scoreboard",
    name: "Scoreboard",
    what: "A small wall-mounted board with sliding beads or numbers used to track points during a game.",
    why: "Remembering a running score by memory gets unreliable over a long game with several players — a visible board that updates with each point keeps everyone able to check the count at a glance instead of arguing over it.",
    has: ["wood"],
  },
  {
    slug: "chalk-holder",
    name: "Chalk Holder",
    what: "A small wall-mounted cup or tray that holds cubes of chalk used to coat a cue's tip.",
    why: "A cue tip without chalk slips off the ball on contact instead of gripping it — chalk needs to be kept right at the table so a player can re-apply it between shots instead of walking off to find it.",
    has: ["polymer"],
  },
  {
    slug: "dartboard",
    name: "Dartboard",
    what: "A circular target divided into numbered scoring sections, mounted on a wall for throwing darts at.",
    why: "A game room built around one table often has wall space that goes unused during a pool game — a dartboard gives a second game that fits in that same room without needing its own dedicated space.",
    has: ["cork", "wire"],
  },
  {
    slug: "billiard-balls",
    name: "Billiard Balls",
    what: "A set of numbered resin balls, one cue ball and fifteen object balls, used to play pool.",
    why: "Each ball needs a fixed identity — number and color — for players to call and track shots against a target, and consistent weight and bounce for predictable play, which is why they're mass-produced to a precise standard instead of improvised.",
    has: ["polymer"],
  },
];
