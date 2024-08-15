---
title: Light
aliases:
  - Light
description: Lights are objects that give off light, and may be rendered as 3D objects, but affect the lighting on other objects.
---
 Lights are objects that give off light, and may be rendered as 3D objects, but affect the lighting on other objects.

There are three main types of light objects:  
&nbsp; &nbsp; &nbsp; Light Object that has no 3d object attachment( ex, light coming in from a magical hole)  
&nbsp; &nbsp; &nbsp; Light Object that has 3d object, but cannot be picked up (ex, large candelabra )  
&nbsp; &nbsp; &nbsp; Light Object that has 3d object, and can be carried. (ex, candle or torch )  

_ID_: The object’s unique ID. (character limit: 32)

_Radius:_ The radius in which the light should effect. Any object within the radius will get effected by the light.

_Script_: The [[gameplay/scripting/index|script]] assigned to object.

_Can Carry_: Flag this if the light can be carried. Art for lights that can be carried must be centered where the character’s left hand is.

_Off by default_: For lights that can be carried. This will make the light **not** affect the [[building-and-editing/world/index|world]] when it is placed down. Useful for an unlit torch the player can find. When the player puts it down, it will be lit.

_Name_: The object’s name. Should only be used for lights you can pick-up. This is what appears in the game to player. (character limit: 32)

_Inventory Image_: Select the Targa file for icon representation of object.

_Weight_: The weight of object (in pounds).

_Time:_ The time (in seconds) that the light will burn when *equipped by the player.* The time does not run when on an NPC or placed in the world.

_Value_: The object’s value in gold.

_Fire_: Use this flag if the 3D object used for the light has particles attached to it. This tells the game to stop the particles when the fire time is used up.

_Negative_: If checked, this makes the light a “dark”. The color you selected for the light will be removed from the world, not added. So a white negative light will act like a black light.

Dynamic: If checked, This tells the light to light up any dynamic or moving objects (such as characters and creatures). Dynamic lights slow the game down a little more.

_Add Art File_: Art used for object.

_RGB, Select Color:_ Choose the color the light adds to the world.&nbsp;

_Flicker Effect_: There are four flicker effects to choose from.  
&nbsp; &nbsp; _Flicker: Makes_ the light “flicker”, or randomly change its brightness. Use for lights that should act like fire.  
&nbsp; &nbsp; _Pulse_: Makes the light consistently change its brightness  
&nbsp; &nbsp; _Flicker Slow_  
&nbsp; &nbsp; _Pulse Slow_  
&nbsp; &nbsp; _None_  

_References Persist_: If checked, the object will remain persistent in world.

_Blocked:_ If checked, the specific object becomes read-only.
