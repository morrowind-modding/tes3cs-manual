---
title: LoopGroup
aliases:
  - LoopGroup
description: Plays the animation group defined by GroupName.
---
LoopGroup GroupName, 2, \[flags\]

LoopGroup Idle2

LoopGroup Idle2, 1

Plays the animation group defined by GroupName. The animation will be looped the number of times specified, and then return to the Idle animation. Optional flags can be used to start the group in different ways.

## Flags  
_0 = Normal_  

The current animation will finish it’s full cycle, and the new animation will start from its beginning.

_1 = Immediate Start_

The current animation will stop regardless of the frame it is on, and the new animation will start from its beginning.

_2 = Immediate Loop_

The current animation will stop regardless of the frame it is on, and the new animation will start at the beginning of its loop cycle.

### See Also  
[PlayGroup](<PlayGroup.md>) &nbsp; GroupName, \[Flags\]  
[SkipAnim](<SkipAnim.md>)  
