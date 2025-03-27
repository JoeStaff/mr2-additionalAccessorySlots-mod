import { MR2Globals } from "magic-research-2-modding-sdk";
import { GameState } from "magic-research-2-modding-sdk/modding-decs/backend/GameState";
import { SpellElementType } from "magic-research-2-modding-sdk/modding-decs/backend/spells/Elements";
import { Spell } from "magic-research-2-modding-sdk/modding-decs/backend/spells/Spell";

function hideGatherManaAction(MR2: MR2Globals) {
  MR2.registerOverridableFunctions
  const gatherMana = MR2.Actions.getById("gatherMana");
  gatherMana.isVisible = () => {
    return false;
  };
}

export function loadGatherManaSpell(MR2: MR2Globals) {
  class GatherManaSpell extends MR2.BasicChannelingSpellBase {
    getId(): string {
      return "gatherManaSpell";
    }
    getSpellName(): string {
      return "Gather Mana";
    }
    getElement(): SpellElementType | undefined {
      return "Fire";
    }
    getDisplayDescription(state: GameState): string { //Just use the already existing description
      return MR2.Actions.getById("gatherMana").getDisplayDescription(state);
    }
    getLevelRequirements(): Partial<Record<SpellElementType, number>> {
      return {};
    }
    getManaCost(state: GameState, parentSpell?: Spell | undefined): number { //Set the flat value to match the variable gatherMana value
      return -MR2.Actions.getById("gatherMana").getActionEffect(state, "mana");
    }
    getManaCostProportion(): number {
      return 0;
    }
    getBaseEssenceEfficiency(): number {
      return 0;
    }
    getDisplayEffect(state: GameState): string {
      return MR2.Actions.getById("gatherMana").getDisplayEffect(state);
    }
    isEnabled(state: GameState, skipAffordabilityChecks?: boolean): boolean {
      return (
        MR2.getResourceAmount(state, MR2.Resource.Mana) <
        MR2.getResourceCap(state, MR2.Resource.Mana)
      );
    }
    canAfford(state: GameState): boolean {
      return true;
    }
  }

  const gatherManaSpell = new GatherManaSpell();
  MR2.registerSpell(gatherManaSpell);
  MR2.registerChannelingSpellForElement("Fire", gatherManaSpell);
}

export function loadWizardsGatherMana(MR2: MR2Globals) {
  hideGatherManaAction(MR2);
  loadGatherManaSpell(MR2);
}

export function preloadWizardsGatherMana(MR2: MR2Globals) {
  //Using this to satisfy the wizards. With out an attached element, a channeling spell won't behave.
  const fungusIcon = require("./fungus.png");
  MR2.registerGameIcon("none", fungusIcon);
  MR2.registerResource("gatherManaPlaceholder", {
    id: "gatherManaPlaceholder",
    name: "gatherManaPlaceholder",
    resourceInfo: { baseCap: 100, icon: "none" },
  });
  MR2.registerGameIcon("none", fungusIcon);
}
