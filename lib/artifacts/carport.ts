import type { Artifact } from "./types";

export const carport: Artifact[] = [
  {
    slug: "carport",
    name: "Carport",
    what: "An open-sided roofed structure that shelters a parked car without fully enclosing it like a garage.",
    why: "A garage costs far more to build and needs solid walls and a door — a simple roof on posts blocks rain, sun, and frost from a car at a fraction of the cost, for households that don't need full enclosure or storage space.",
    has: ["carport roof", "carport posts", "carport lighting", "bike rack", "carport gate", "car cover"],
  },
  {
    slug: "carport-roof",
    name: "Carport Roof",
    what: "A flat or gently sloped roof panel spanning between a carport's support posts.",
    why: "Rain and sun need to be blocked from above, but the sides stay open for easy pull-through parking — a single roof panel does that job without the walls a garage would need.",
    has: ["steel"],
  },
  {
    slug: "carport-posts",
    name: "Carport Posts",
    what: "Vertical support posts holding up a carport's roof at its open corners.",
    why: "With no walls to bear the roof's weight, something else has to hold it up — posts planted at the corners carry that load straight down to the ground instead.",
    has: ["steel"],
  },
  {
    slug: "carport-lighting",
    name: "Carport Lighting",
    what: "A fixture mounted under a carport's roof that lights the parking area after dark.",
    why: "Getting in and out of a car, or finding keys and groceries, is hard in the dark under an open structure with no walls to reflect ambient light — a fixture mounted overhead lights the whole space directly instead.",
    has: ["bulb", "switch"],
  },
  {
    slug: "bike-rack",
    name: "Bike Rack",
    what: "A wall-mounted or freestanding rack with slots that holds bicycles upright by their front wheel.",
    why: "A bike leaned against a wall slides down and blocks walking space — a rack's slot holds the front wheel fixed so the bike stands upright on its own in a consistent, predictable spot.",
    has: ["steel"],
  },
  {
    slug: "carport-gate",
    name: "Carport Gate",
    what: "A swinging or sliding barrier at a carport's open end that can be closed to restrict access.",
    why: "An open carport leaves a car and anything stored under it accessible to anyone who walks up — a gate that closes off the open side adds a barrier without needing to fully enclose the structure like a garage.",
    has: ["steel", "hinges"],
  },
  {
    slug: "car-cover",
    name: "Car Cover",
    what: "A fitted fabric sheet draped over a parked car to protect its paint from sun, dust, and light rain.",
    why: "A carport's open sides still let dust, bird droppings, and slanting rain reach the car — a fitted cover adds a barrier the carport's roof alone doesn't provide.",
    has: ["fabric"],
  },
];
