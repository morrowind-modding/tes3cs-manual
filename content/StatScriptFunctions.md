# 

&nbsp;

GetHealth

SetHealth, Var

ModHealth, Var

&nbsp;

Each of the above can use any stat available to the player or actor (NPCs and creatures). See the list below. “Scale” can be used on any object.

&nbsp;

GetStat&nbsp;

Returns the current value of the stat.

&nbsp;

SetStat, var

SetHealth, 90

Sets the stat to the new value, var. Note that this will also change the stats maximum value.

&nbsp;

ModStat, var

ModHealth, 10

Modifies the stat by var.

&nbsp;

&nbsp;

Stats that can be used for “Stat”:

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

&nbsp;

&nbsp;

Special use with ModStat only:

&nbsp;

ModCurrentHealth, float &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

ModCurrentMagicka, float

ModCurrentFatigue, float

&nbsp;

Special use with GetStat only:

&nbsp;

GetHealthRatio&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; returns float value

&nbsp;


***
_Created with the Personal Edition of HelpNDoc: [Maximize Your CHM Help File Capabilities with HelpNDoc](<https://www.helpndoc.com/feature-tour/create-chm-help-files/>)_
