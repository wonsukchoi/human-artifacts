import type { Artifact } from "./types";

export const serverRoom: Artifact[] = [
  {
    slug: "server-room",
    name: "Server Room",
    what: "A small enclosed space housing a household's networking equipment and home server, kept cool and out of the way.",
    why: "Networking gear generates heat and noisy fan whir that doesn't belong in a living space, and its tangle of cables needs to stay out of sight — a small dedicated closet keeps that equipment cool, quiet to the rest of the house, and organized in one place.",
    has: ["server rack", "router", "UPS", "cable management", "server cooling fan", "network switch"],
  },
  {
    slug: "server-rack",
    name: "Server Rack",
    what: "A metal frame with evenly spaced mounting rails that holds networking equipment stacked in uniform horizontal slots.",
    why: "Loose equipment stacked or cabled together haphazardly overheats and is nearly impossible to service — a rack's standardized slots let each device sit with airflow around it and be pulled and swapped independently.",
    has: ["steel"],
  },
  {
    slug: "router",
    name: "Router",
    what: "A device that directs data packets between a home network and the internet.",
    why: "Multiple devices in a house all need to share one internet connection at once — the router is what splits that single incoming connection and directs each packet to the right device on the network instead of every device needing its own line.",
    has: ["antenna", "router circuit board"],
  },
  {
    slug: "antenna",
    name: "Antenna",
    what: "A metal rod on a router that radiates and receives wireless radio signals to connect nearby devices.",
    why: "Not every device connects by cable — the antenna is what actually broadcasts and picks up the radio signal a phone or laptop uses to join the network wirelessly.",
    has: ["steel"],
  },
  {
    slug: "router-circuit-board",
    name: "Router Circuit Board",
    what: "The internal board inside a router that processes and directs incoming and outgoing data packets.",
    why: "Deciding which device on the network each incoming packet is meant for, and routing it there instantly, needs dedicated processing — the board is what actually makes and executes that routing decision every fraction of a second.",
    has: [],
  },
  {
    slug: "ups",
    name: "UPS",
    what: "A battery backup unit that keeps networking equipment powered through a brief power outage.",
    why: "A sudden power cut mid-write can corrupt a server's storage or drop every connected device off the network instantly — a battery bridges that gap long enough for equipment to shut down cleanly or for power to come back.",
    has: ["battery", "surge protector"],
  },
  {
    slug: "surge-protector",
    name: "Surge Protector",
    what: "A device that detects a sudden voltage spike and diverts the excess before it reaches connected equipment.",
    why: "A lightning strike or grid fluctuation can send a voltage spike far above what electronics are built to handle — diverting that spike away in a fraction of a second is what keeps it from frying the equipment plugged in downstream.",
    has: [],
  },
  {
    slug: "cable-management",
    name: "Cable Management",
    what: "Trays and clips mounted along a server rack that route and bundle cables neatly instead of letting them hang loose.",
    why: "A tangle of loose cables blocks airflow around equipment and makes it nearly impossible to trace or swap a single cable without disturbing everything else — organized routing keeps each cable identifiable and out of the way of the equipment's own cooling.",
    has: ["polymer"],
  },
  {
    slug: "server-cooling-fan",
    name: "Server Cooling Fan",
    what: "A dedicated fan mounted in or near a server rack that pulls heat away from densely packed equipment.",
    why: "Equipment racked tightly together traps heat between units far more than a single device sitting in open air — a dedicated fan pulls that trapped heat out continuously instead of relying on each device's small internal fan alone.",
    has: ["motor", "fan blades"],
  },
  {
    slug: "network-switch",
    name: "Network Switch",
    what: "A device with multiple ports that connects wired devices on a network and directs data between them.",
    why: "A router alone only has a few ports, not enough for every wired device in a house — a switch multiplies those connections, letting many devices share the network without daisy-chaining cables.",
    has: ["steel"],
  },
];
