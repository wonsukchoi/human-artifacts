import type { Artifact } from "./types";

export const kennel: Artifact[] = [
  {
    slug: "kennel",
    name: "Kennel",
    what: "A small outdoor shelter or enclosure where a dog sleeps and is kept when not indoors.",
    why: "A dog left fully exposed to weather has no shelter from rain, sun, or cold, but doesn't need or want to be indoors all the time — a small dedicated shelter gives it a den-like space of its own outside.",
    has: ["dog house", "kennel fence", "dog bed", "dog leash", "dog bowl"],
  },
  {
    slug: "dog-house",
    name: "Dog House",
    what: "A small enclosed wooden shelter, just big enough for a dog to enter and lie down in out of the weather.",
    why: "A dog curled up in an enclosed space traps its own body heat better than lying exposed in the open — a small shelter sized just for the dog concentrates that warmth instead of losing it to open air.",
    has: ["wood"],
  },
  {
    slug: "kennel-fence",
    name: "Kennel Fence",
    what: "A fenced enclosure around a kennel that keeps a dog contained within a set area.",
    why: "A dog left unfenced can wander off or into danger — a fence marks a safe boundary the dog can move freely within without needing to be watched constantly.",
    has: ["wire"],
  },
  {
    slug: "dog-bed",
    name: "Dog Bed",
    what: "A cushioned pad inside a dog house that the dog lies on.",
    why: "Bare wood floor is hard and cold against a dog's body over hours of sleep — a cushioned pad insulates and softens that contact the same way a mattress does for a person.",
    has: ["fabric", "filling"],
  },
  {
    slug: "dog-leash",
    name: "Dog Leash",
    what: "A length of fabric or leather with a clip at one end, attached to a dog's collar to control it while walking.",
    why: "A dog off-lead can bolt into traffic or run off chasing something — a leash keeps physical control within arm's length so the owner can stop or redirect it instantly.",
    has: ["leather", "steel"],
  },
  {
    slug: "dog-bowl",
    name: "Dog Bowl",
    what: "A shallow, weighted container set at the kennel that holds a dog's food or water.",
    why: "Food or water set directly on the ground gets kicked over, mixed with dirt, or fouled by rain within a day — a bowl with a raised rim and enough weight to resist tipping keeps both usable between feedings.",
    has: ["steel"],
  },
];
