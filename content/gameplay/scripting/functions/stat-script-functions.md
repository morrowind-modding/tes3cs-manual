---
title: Stat Script Functions
aliases:
  - Stat Script Functions
  - GetStat
  - SetStat
  - ModStat
description:
---
GetHealth  
SetHealth, Var  
ModHealth, Var  

Each of the above can use any stat available to the player or [[actors/index|actor]] ([[actors/character/npc|NPCs]] and [[actors/creature/index|creatures]]). See the list below. “Scale” can be used on any [[objects/index|object]].

GetStat  
Returns the current value of the stat.

SetStat, var  
SetHealth, 90  
Sets the stat to the new value, var. Note that this will also change the stats maximum value.  

ModStat, var  
ModHealth, 10  
Modifies the stat by var.  

Stats that can be used for “Stat”:  
```
	Strength
	Intelligence
	Willpower
	Agility
	Speed
	Endurance
	Personality
	Luck
	Block
	Armorer
	MediumArmor
	HeavyArmor
	BluntWeapon
	LongBlade
	Axe
	Spear
	Athletics
	Enchant
	Destruction
	Alteration
	Illusion
	Conjuration
	Mysticism
	Restoration
	Alchemy
	Unarmored
	Security
	Sneak
	Acrobatics
	LightArmor
	ShortBlade
	Marksman
	Mercantile
	Speechcraft
	HandToHand
	Health
	Magicka
	Fatigue
	Reputation
	Disposition
	AttackBonus
	DefendBonus
	ResistMagicka
	ResistFire
	ResistFrost
	ResistShock
	ResistDisease
	ResistBlight
	ResistCorprus
	ResistPoison
	ResistParalysis
	Chameleon
	ResistNormalWeapons
	WaterBreathing
	WaterWalking
	SwimSpeed
	SuperJump
	Flying
	ArmorBonus
	CastPenalty
	Silence
	Blindness
	Paralysis
	Invisible
	PCCrimeLevel (PC Only)
	Fight (Changing this changes it for ALL references of the Actor)
	Flee (Changing this changes it for ALL references of the Actor)
	Alarm (Changing this changes it for ALL references of the Actor)
	Hello (Changing this changes it for ALL references of the Actor)
	Level (only works with Set and Get)
	Scale (the 3D scale of the object)
```

Special use with ModStat only:

```
	ModCurrentHealth, float
	ModCurrentMagicka, float
	ModCurrentFatigue, float
```

Special use with GetStat only:

&nbsp; &nbsp; &nbsp; `GetHealthRatio` &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; returns float value
