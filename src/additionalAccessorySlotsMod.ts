import { MR2Globals } from "magic-research-2-modding-sdk";
import {
  loadAdditionalAccessorySlotsMod
} from "./code/additionalAccessorySlotsMod";
const PACKAGE = require("../package.json");


export function load(MR2: MR2Globals) {
  loadAdditionalAccessorySlotsMod(MR2);
}

export const id = PACKAGE.name;
export const name = PACKAGE.description;
export const version = PACKAGE.version;
export const description =
  "A mod that increases the amount of Accessory Equipment Slots.";
