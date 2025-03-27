import { MR2Globals } from "magic-research-2-modding-sdk";
import {
  loadWizardsGatherMana,
  preloadWizardsGatherMana,
} from "./code/wizardsGatherMana";
const PACKAGE = require("../package.json");


export function load(MR2: MR2Globals) {
  loadWizardsGatherMana(MR2);
}
export function preload(MR2: MR2Globals) {
  preloadWizardsGatherMana(MR2);
}

export const id = PACKAGE.name;
export const name = PACKAGE.description;
export const version = PACKAGE.version;
export const description =
  "A mod that allows wizards to gather mana like they can essence.";
