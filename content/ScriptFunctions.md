# Script Functions

&nbsp;

**AI**

AiActivate , ObjectID, \[reset\]

AiEscort, ActorID, duration, x, y, z, \[reset\]

AiEscortCell, ActorID, CellID, duration, x, y, z, \[reset\]

AiFollow, ActorID, duration, x, y, z, \[reset\]

AiFollowCell, ActorID, CellID, duration, x, y, z, \[reset\]

AiTravel, x, y, z, \[reset\]

AiWander, range, duration, time, \[idle2\], \[idle3\], …\[idle9\], \[reset\]

[GetCurrentAIPackage ](<GetCurrentPackage.md>)&nbsp; &nbsp; ;returns the current package the NPC is doing (0 through

&#52;)

GetAIPackageDone&nbsp; &nbsp; ;returns true if current package has finished.

GetDetected, ActorID&nbsp; &nbsp; &nbsp; &nbsp; Returns true if object can detect ActorID. Slow function, do not call a lot.

ForceSneak&nbsp; &nbsp; &nbsp; &nbsp; Make the npc sneak if he wanted to run he will only walk

ClearForceSneak

GetForceSneak

&nbsp;

&nbsp;

**Animation**

[PlayGroup](<PlayGroup.md>), GroupName, \[Flags\]

[LoopGroup](<LoopGroup.md>), GroupName, Number, \[Flags\]

[SkipAnim](<SkipAnim.md>)

&nbsp;

**Collision**

GetCollidingPC&nbsp; &nbsp; &nbsp; &nbsp; Object returns true if PC is colliding with it.

GetCollidingActor&nbsp; &nbsp; Object returns true if ANY actor (including PC) is colliding on it.

HurtCollidingActor, Val&nbsp; &nbsp; Damages colliding actor Val health per second

HurtStandingActor, float&nbsp; &nbsp; value is per second and should be negative to hurt him

&nbsp;

&nbsp;

**Combat**

GetAttacked&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; return 0 if the actor has never been attacked and 1 if he has ever been attacked

GetTarget, ActorID&nbsp; &nbsp; &nbsp; &nbsp; returns 1 if object’s combat target is ActorID

HitAttemptOnMe, ObjectID&nbsp; &nbsp; &nbsp; &nbsp; returns true if a hit on the calling Actor is attempted by objectID in melee (such as hammer01)

HitOnMe, ObjectID&nbsp; &nbsp; &nbsp; &nbsp; returns true if calling Actor is hit by objectID in melee (such as hammer01)

OnDeath&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Returns true for one frame when Actor is killed.

OnKockout&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Returns true for one frame when Actor is knocked out.

OnMurder&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Returns true for one frame when Actor is murdered.

OnPCHitMe&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; NOT A FUNCTION\!, but used as a short var that gets set when object is hit.

StartCombat, ActorID

StopCombat

&nbsp;

**Dialogue**

AddTopic, TopicID&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Adds TopicID to PC’s list of known topics

ClearInfoActor&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Makes this info NOT appear in the journal.

ForceGreeting&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; makes the NPC start dialogue with the PC. Does NOT matter where the NPC is.

GetJournalIndex, JournalID

Goodbye&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Ends current dialogue, PC can only press “Bye”

Journal, ID, Index&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Adds the index entry into the journal for the journal ID

Choice, “Button1”, …\[“Button5”\]&nbsp; &nbsp; &nbsp; &nbsp; similar to "messagebox", but for dialogue choices.

SetJournalIndex JournalID index&nbsp; &nbsp; Sets the Journal to that index. Can move up or down.

&nbsp;

&nbsp;

**Faction**

GetPCRank, \[FactionID\]&nbsp; &nbsp; &nbsp; &nbsp; Returns PC’s rank in faction. This will default to the actor’s faction if FactionID is not defined.&nbsp; Returns 0-9 and -1 if not a member.

GetPCFacRep, \[FactionID\]

GetRace, “RaceID”&nbsp; &nbsp; &nbsp; &nbsp; Returns 1 if the object is of RaceID

LowerRank&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Lowers the object’s rank in its current faction.

ModPCFacRep, var, \[FactionID\]

ModFactionReaction, factionID1, factionID2, var

PCClearExpelled&nbsp; &nbsp; &nbsp; &nbsp; Clears currently expelled flag.

PCExpell \[FactionID\]&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Expells PC from NPCs faction.

PCExpelled \[factionID\]&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Returns 1 if PC has been expelled once from calling object (NPC) Faction, or a faction can be defined to get a specific one.

PCJoinFaction \[FactionID\]       &nbsp; FactionID is optional if it is not added it will use the faction of the npc who called the function

PCLowerRank

PCRaiseRank&nbsp; &nbsp; Raises the PC 1 rank in the NPCs faction. If pc is not part of the faction, makes rank 1

RaiseRank&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Raises the object’s rank in its current faction.

SameFaction&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Returns 1 if PC is in the faction of the calling object (NPC).

SetPCFacRep, var, \[FactionID\]

SetFactionReaction, factionID1, factionID2, var

&nbsp;

**Item/Object**

AddItem, ObjectID, count&nbsp; &nbsp; &nbsp; &nbsp; adds item to calling objects inventory

[[gameplay/scripting/functions/activate|activate]] &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; activates the item (uses it’s default activation)

Drop, ObjectID, count&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; calling Actor drops item into world at his feet.&nbsp;

Equip, ObjectID&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; equips the calling item on its owner

GetItemCount, ObjectID&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; returns the count on the objectID in the calling object

[OnActivate](<OnActivate.md>)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; returns true if calling object is activated

OnRepair&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; returns true if calling object is repaired at all

RemoveItem, objectID, count&nbsp; &nbsp; &nbsp; &nbsp; removes the item from the calling object. Does NOT drop it.

RepairedOnMe, objectID&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; returns true if calling object is repaired by objected

[UsedOnMe](<UsedOnMe.md>), objectID&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; returns true if objectID is used on calling object

&nbsp;

GetWeaponType&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; returns a number (1-long blade one hand; 2-long blade two hand, 3 - blunt, etc.) based on the class of weapon the actor has equipped.

GetArmorType

HasItemEquipped

&nbsp;

&nbsp;

**See also:**

[Inventory Scripts](<InventoryScripts.md>)

&nbsp;

**Magic**

AddSoulgem, CreatureID, SoulgemID

AddSpell, SpellID&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; adds spell item to calling object

Cast, SpellID, TargetID&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; calling object casts spell onto target, spells only.

DropSoulgem, CreatureID &nbsp; &nbsp; &nbsp; &nbsp;

DisableLevitation&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Disables levitation magic.

DisableTeleporting

EnableLevitation

EnableTeleporting

GetBlightDisease&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Returns 1 if has BlightDisease

GetCommonDisease&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Returns 1 if has CommonDisease

[GetEffect](<GetEffect.md>), Effect&nbsp; &nbsp; &nbsp; &nbsp; Returns 1 if Actor is being effected by effect

GetSpell, SpellID&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Returns true if object has SpellID in inventory

GetSpellEffects, SpellID&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Returns true if calling object is being effected by spellID

HasSoulgem, CreatureID

RemoveSoulgem, CreatureID

RemoveSpell, SpellID&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; remove spell item from calling objects inventory

RemoveSpellEffects, SpellID&nbsp; &nbsp; &nbsp; &nbsp; remove spell effects of SpellID from effecting the calling object

[RemoveEffects](<RemoveEffects.md>), Effect&nbsp; &nbsp; &nbsp; &nbsp; removes all spells with the EffectEnum from effecting the calling object

&nbsp;

&nbsp;

**Miscellaneous**

Enable&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Makes the object visible and processed.

DontSaveObject&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Call when you do not want object change in save game.

Disable&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Makes the object invisible and it will not be processed.

FadeIn time&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; time is \> 0 and \<= 10.0

FadeOut time&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; same as fade in

FadeTo alpha speed&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; FadeTo 50 2.0 (Fades screen to 50% in 2 seconds). 0 is full transparency. 100 is black.

GetButtonPressed

GetDisabled&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Returns true if object is disabled.

GetLocked&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; returns 1 or 0

GetPCCell, Cell ID&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Returns true if PC is in CellID named. Works like dialogue in that “Vivec” returns true for both “Vivec” and “Vivec, Fred’s House”.

GotoJail&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Sends PC to Prison.

[GetMasserPhase](<MoonPhases.md>)\
[GetSecundusPhase](<MoonPhases.md>)

GetStandingPC&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Object returns true if PC is standing on it.

GetStandingActor&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Object returns true if ANY actor (including PC) is standing on it.

Lock, Var&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; sets the door or container to the specified lock level.

[MenuMode ](<MenuMode.md>)

[MessageBox](<MessageBox.md>), “Message”, \[var1\], \[var2\], \[“button1”\], \[“button2”\]

PayFine&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; call after paying a crime fee to clean AI

PlayBink “filename” flag&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Pauses game and plays video. Set Flag to true if player can escape movie.

[Random](<Random.md>), Value

ShowMap cellID&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; show all the cells that start with this string on the world map

Unlock&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; makes object unlocked, doors and containers only

Xbox&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; returns true if running Xbox version, used for button messages

&nbsp;

SetWaterLevel, Val&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Sets water level at a certain height for an interior

GetWaterLevel

ModWaterLevel, Val

&nbsp;

&nbsp;

**Movement**

CellChanged&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ;returns 1 for one frame when player changes cells

[CellUpdate](<CellUpdate.md>)

[GetPos](<GetPos.md>), axis

[GetAngle ](<GetAngle.md>), axis

GetLOS, ObjectID&nbsp; &nbsp; &nbsp; &nbsp; ;returns true if object has a line of sight to other object(ObjectID)

GetDistance, ObjectID&nbsp; &nbsp; &nbsp; &nbsp; ;returns the distance the object has to ObjectID.

[GetStartingPos ](<GetStartingPos.md>), axis

[GetStartingAngle ](<GetStartingAngle.md>), axis

[Move](<Move.md>), axis, units/sec

[MoveWorld](<MoveWorld.md>), axis, units/sec

[PlaceAtPC](<PlaceAtPC.md>), ObjectID, count, distance, direction

PlaceItem, ObjectID,&nbsp; x, y, z, rot &nbsp; &nbsp; &nbsp; &nbsp;

PlaceItemCell, ObjectID, celID x, y, z, rot

[Rotate ](<Rotate.md>), axis, angle/sec

[RotateWorld](<RotateWorld.md>), axis, angle/sec

[Position](<Position.md>), x, y, z, zRot

[PositionCell](<PositionCell.md>), x, y, z, zRot, “cellID”

SetAtStart

SetAngle, axis, angle

SetPos, axis, pos

&nbsp;

ForceRun&nbsp; &nbsp; &nbsp; &nbsp; Make the npc run

ClearForceRun

GetForceRun

&nbsp;

ForceJump&nbsp; &nbsp; &nbsp; &nbsp; Make the npc jump like crazy

ClearForceJump

GetForceJump

&nbsp;

ForceMoveJump&nbsp; &nbsp; Make the npc jump when he is moving

ClearForceMoveJump

GetForceMoveJump

&nbsp;

GetPCSneaking&nbsp; &nbsp; &nbsp; &nbsp; Returns 1 if player is in Sneak Mode

GetPCRunning&nbsp; &nbsp; &nbsp; &nbsp; Returns 1 if player is running

GetPCJumping&nbsp; &nbsp; &nbsp; &nbsp; Returns 1 ever time the player starts a jump

&nbsp;

&nbsp;

&nbsp;

**Player Controls**

DisablePlayerControls&nbsp; &nbsp; &nbsp; &nbsp; Can only look around with mouse or use options menu, nothing else and menus disappear.

DisablePlayerFighting

DisablePlayerJumping

DisablePlayerLooking

DisablePlayerMagic

DisablePlayerViewSwitch

DisableVanityMode

EnableLevelUpMenu

EnablePlayerControls&nbsp; &nbsp; &nbsp; &nbsp; Enables the controls and menus.&nbsp;

EnablePlayerJumping

EnablePlayerFighting

EnablePlayerLooking

EnablePlayerMagic

EnablePlayerViewSwitch

EnableRest

EnableVanityMode

GetPlayerControlsDisabled

GetPlayerFightingDisabled

GetPlayerJumpingDisabled

GetPlayerMagicDisabled

GetPlayerLookingDisabled

GetPlayerViewSwitch

GetVanityModeDisabled

PCGet3rdPerson&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; returns 1 if in 3rd person mode

PCForce3rdPerson&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; queue the change to 3rd person mode (this may have to

wait for the animation to finish)

PCForce1stPerson&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; same as above but 1st person mode

&nbsp;

&nbsp;

**Player Sleeping**

GetPCSleep&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Returns true if pc is sleeping.

ShowRestMenu&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Brings up rest menu, for beds in illegal cels

WakeUpPC&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Wakes up PC

&nbsp;

**Time**

[GetSecondsPassed ](<GetSecondsPassed.md>)

&nbsp;

**Script**

[ScriptRunning](<ScriptRunning.md>), ScriptName

[StartScript](<StartScript.md>), ScriptName

[StopScript](<StopScript.md>), ScriptName

&nbsp;

**Sound**

GetSoundPlaying soundID

PlayLoopSound3D, “soundID”

PlayLoopSound3DVP, “soundID”, volume, pitch

PlaySound, “soundID”

PlaySoundVP,“soundID”, volume, pitch

PlaySound3D, “soundID”

PlaySound3DVP, “soundID”, volume, pitch

Say, “file name”, “text”&nbsp; &nbsp; &nbsp; &nbsp; make subject say wav file, only works on animating objects&nbsp;

SayDone&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; returns true if the object is not saying anything.

StreamMusic, “filename.ext”

StopSound, SoundID&nbsp; &nbsp; &nbsp; &nbsp; stops the soundID if it is currently playing in the object.

&nbsp;

**Stats**

GetDeadCount, ObjectID&nbsp; &nbsp; ; returns how many of this objID have been killed

[GetStat](<StatScriptFunctions.md>)

[SetStat](<StatScriptFunctions.md>), NewValue

[ModStat](<StatScriptFunctions.md>), Mod

Resurrect&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Brings Actor back to life

&nbsp;

**Weather**

[ChangeWeather](<ChangeWeather.md>), RegionID, TypeEnum

GetCurrentWeather

[ModRegion](<ModRegion.md>), RegionID, clear\_var, cloudy\_var, foggy\_var, overcast\_var, rain\_var, thunder\_var, ash\_var, blight\_var

&nbsp;

**Console (in game only commands)**

CenterOnCell (coc), CellID&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Places the PC in the named cell.

CenterOnExterior (coe), X, Y&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Places the PC in the exterior cell grid.

CreateMaps "Filename.esp"&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Creates map image file for Xbox

FillJournal&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; add all entries to journal, takes a long time

FillMap        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; show all the towns on the full map

FixMe&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Jump 128 units away from where I am now.

GetFactionReaction factionID factionID        &nbsp; &nbsp; The faction ids are not optional, works in Console window only

Help &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Shows shorthand for most commands

Show&nbsp;

ShowVars (sv)

StopCellTest (sct)\
TestCells (tc)\
TestInteriorCells (tic)\
TestModels ( t3d)

ToggleAI (ta)

ToggleBorders (tb)\
ToggleCombatStats (tcs)

ToggleCollision (tcl)\
ToggleCollisionBoxes (tcb)\
ToggleCollisionGrid (tcg)\
ToggleDebugText (tdt)\
ToggleDialogueStats (tds)

ToggleFogOfWar (tfow)

ToggleFullHelp (tfh)&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; show you ownership and script

name

ToggleGodMode (tgm)

ToggleGrid (tg)

ToggleKillStats (tks)

ToggleLoadFade &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;

ToggleMagicStats (tms)

ToggleMenus (tm)

ToggleScripts&nbsp;

ToggleStats (tst)

ToggleSky (ts)\
ToggleTextureString (tts)\
ToggleWorld (tw)\
ToggleWireframe (twf)\
TPG &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Toggle path grid display

SG &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Show selected actor's group members

ST &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Show selected actor's target group members.

ShowScenegraph (ssg)

&nbsp;

&nbsp;

&nbsp;

&nbsp;


***
_Created with the Personal Edition of HelpNDoc: [Easily create iPhone documentation](<https://www.helpndoc.com/feature-tour/iphone-website-generation>)_
