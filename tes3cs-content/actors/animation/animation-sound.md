---
title: Animation Sound
aliases:
  - Animation Sound
description: Sound ID’s are tagged individually in all animation files.
---
Sound ID’s are tagged individually in all [[actors/animation/index|animation]] files.

These get tagged in every [[creature]] in the Sound menu, and have generic lookups for Characters.

> [!NOTE|clean no-t n-th]
> | SoundGen | Description |
> | ------------ | ------------ |
> | SoundGen: Left | (left foot hitting ground) |
> | SoundGen: Right  | (right foot hitting ground)  |
> | SoundGen: Moan   | (sound for monster idling, lurking, getting hit) |
> | SoundGen: Roar   | (sound for monster attacking or idling) |
> | SoundGen: Scream | (sound for monster getting hit, dying, attacking) |
> | SoundGen: Land   | (sound when creature or character body hits the ground, either death, knockout, or landing a jump) |

Combat sounds are also labeled in the Sound menu of the editor and are played programmatically when the player or [[objects/object-types/npc|NPC]] gets hit, strikes with a weapon, or blocks. There are no sound notes placed in the animation files for these cases.
