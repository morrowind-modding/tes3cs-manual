---
title: Animation Groups
aliases:
  - Animation Groups
---
**Idle – Idle9**  
**WalkForward**  
**WalkBack**  
**WalkLeft**  
**WalkRight**  
**SneakForward**  
**SneakBack**  
**SneakLeft**  
**SneakRight**  
**Jump**  
**TurnLeft**  
**TurnRight**  
**RunForward**  
**RunBack**  
**RunLeft**  
**RunRight**  
**SwimForward**  
**SwimLeft**  
**SwimRight**  
**SwimBack**  
**Knockout**  
**Knockdown**  
**SwimKnockout**  
**Swimknockdown**  
**Death**  

**Hand to Hand** (Equip, Slash, Chop, Thrust, Block, Unequip)  
**ThrowWeapon** (Equip, Attack, Block, Unequip)  
**Crossbow** (Equip, Attack, Unequip)  
**BowandArrow** (Equip, Attack, Unequip)  
**WeaponOneHand** (Equip, Slash, Chop, Thrust, Block, Unequip)  
**WeaponTwoHandClose** (Equip, Slash, Chop, Thrust, Block, Unequip)  
**WeapnTwoHandWide** (Equip, Slash, Chop, Thrust, Block, Unequip)  
**Shield** (Equip, Block, Unequip)  

**Spell Idle**  
**Spell – Self** (Start, Release, End)  
**Spell – Touch** (Start, Release, End)  
**Spell – Target** (Start, Release, End)  

**Attack 1** – used for creatures only  
**Attack 2** – used for creatures only  
**Attack 3** – used for creatures only  

**Hit1-Hit5** (Start, End)  

When not mentioned, all of these groups have:
```
	Start
	Begin Loop
	End Loop
	End
```

Whenever an attack like Equip, Slash, Chop, Thrust, and Unequip are used, these also have the following properties:
```
	Equip Start
	Equip Stop
	Slash Start
	Slash Min Attack
	Slash Max Attack 
	Slash Min Hit
	Slash Hit
	Slash Small Follow Start
	Slash Small Follow Stop
	Slash Medium Follow Start
	Slash Medium Follow Stop
	Slash Large Follow Start
	Slash Large Follow Stop
	Chop Start
	Chop Min Attack
	Chop Max Attack 
	Chop Min Hit
	Chop Hit
	Chop Small Follow Start
	Chop Small Follow Stop
	Chop Medium Follow Start
	Chop Medium Follow Stop
	Chop Large Follow Start
	Chop Large Follow Stop
	Thrust Start
	Thrust Min Attack
	Thrust Max Attack 
	Thrust Min Hit
	Thrust Hit
	Thrust Small Follow Start
	Thrust Small Follow Stop
	Thrust Medium Follow Start
	Thrust Medium Follow Stop
	Thrust Large Follow Start
	Thrust Large Follow Stop
	Unequip Start
	Unequip Stop
```