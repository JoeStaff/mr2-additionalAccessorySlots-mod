import { MR2Globals } from "magic-research-2-modding-sdk";

export function loadAdditionalAccessorySlotsMod(MR2: MR2Globals) {
  
  const storyline = new MR2.Storyline(
    "additionalAccessorySlotModStory",
    "Check Out My Bling",
    55,
    10,
    "Wear Multiple Accessories At Once",
    "Unlocks additional accessory slots",
    (state) => true,
  );
  
  MR2.Storylines.register(storyline);

  const eventBuilder = MR2.buildEvent(
    "additionalAccessorySlotModEvent",
    "(Storyline) Check Out My Bling",
    [MR2.EventTag.STORYLINE],
  ).setStorylineIds(storyline.getId());
  eventBuilder.message(
    `You look at all of the accessories you're wearing and wish you could wear more. 
    Then it dawns on you, why can't you?! 
    There aren't any laws against wearing a bunch of necklaces or rings. 
    Who's gonna stop you, *the fashion police*?`
    )
    .option(
      "Break Fashion Law",
      {
        transform: (state, params) => {
          state = storyline.complete(state);
          return state;
        },
        isEnabled: (state, params) =>
          true,
      },
      "done",
    )
    .end();
  eventBuilder
    .message(
      `You free yourself from fashion opression!

**You have completed the "Check Out My Bling" Storyline! In future retirements, you will have an additional accessory slot to equip!**`,
    )
    .tag("done");
    
  const gameEvent = eventBuilder.build();

  // We will make the Storyline event happen randomly
  // if the player is not exploring at all.
  MR2.registerRandomEventTrigger(
    gameEvent,
    40,
    (state) =>
      !gameEvent.hasTriggered(state) &&
      !storyline.isCompleted(state) &&
      MR2.getEquippedItems(state,MR2.EquipmentSlot.Accessory).length>=2,
    (state) => {
      return;
    },
  );
  
  MR2.registerTransformation(
    [[MR2.TransformationTags.AccessorySize]],
    "additionalAccessorySlotModBuff",
    "Check Out My Bling Buff",
    MR2.TransformationType.Addition,
    (state) => {
      if(storyline.isBonusActive(state)){
        return 5;
      }else{
        return 0;
      }
    },
  );
    
}
