# 

&nbsp;

LoopGroup GroupName, 2, \[flags\]

LoopGroup Idle2

LoopGroup Idle2, 1

&nbsp;

Plays the animation group defined by GroupName. The animation will be looped the number of times specified, and then return to the Idle animation. Optional flags can be used to start the group in different ways.

&nbsp;

**Flags**

*&#48; = Normal*

The current animation will finish it’s full cycle, and the new animation will start from its beginning.

&nbsp;

*&#49; = Immediate Start*

The current animation will stop regardless of the frame it is on, and the new animation will start from its beginning.

&nbsp;

*&#50; = Immediate Loop*

The current animation will stop regardless of the frame it is on, and the new animation will start at the beginning of its loop cycle.

&nbsp;

&nbsp;

**See Also**

[PlayGroup](<PlayGroup.md>)&nbsp; GroupName, \[Flags\]

[SkipAnim](<SkipAnim.md>)

&nbsp;


***
_Created with the Personal Edition of HelpNDoc: [Transform your help documentation into a stunning website](<https://www.helpndoc.com/feature-tour/produce-html-websites/>)_
