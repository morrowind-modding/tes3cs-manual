# 

&nbsp;

Lights are objects that give off light, and may be rendered as 3D objects, but affect the lighting on other objects.&nbsp;

&nbsp;

There are three main types of light objects:

Light Object that has no 3d object attachment( ex, light coming in from a magical hole)

Light Object that has 3d object, but cannot be picked up (ex, large candelabra )

Light Object that has 3d object, and can be carried. (ex, candle or torch )

&nbsp;

*ID*: The object’s unique ID. (character limit: 32)

&nbsp;

*Radius:* The radius in which the light should effect. Any object within the radius will get effected by the light.

&nbsp;

*Script*: The script assigned to object.

&nbsp;

*Can Carry*: Flag this if the light can be carried. Art for lights that can be carried must be centered where the character’s left hand is.

&nbsp;

*Off by default*: For lights that can be carried. This will make the light **not** affect the world when it is placed down. Useful for an unlit torch the player can find. When the player puts it down, it will be lit.

&nbsp;

*Name*: The object’s name. Should only be used for lights you can pick-up. This is what appears in the game to player. (character limit: 32)

&nbsp;

*Inventory Image*: Select the Targa file for icon representation of object.

&nbsp;

*Weight*: The weight of object (in pounds).

&nbsp;

*Time:* The time (in seconds) that the light will burn when *equipped by the player.* The time does not run when on an NPC or placed in the world.

&nbsp;

*Value*: The object’s value in gold.

&nbsp;

*Fire*: Use this flag if the 3D object used for the light has particles attached to it. This tells the game to stop the particles when the fire time is used up.

&nbsp;

*Negative*: If checked, this makes the light a “dark”. The color you selected for the light will be removed from the world, not added. So a white negative light will act like a black light.

&nbsp;

Dynamic: If checked, This tells the light to light up any dynamic or moving objects (such as characters and creatures). Dynamic lights slow the game down a little more.

&nbsp;

*Add Art File*: Art used for object.

&nbsp;

*RGB, Select Color:* Choose the color the light adds to the world.&nbsp;

&nbsp;

*Flicker Effect*: There are four flicker effects to choose from.

&nbsp; &nbsp; *Flicker: M*akes the light “flicker”, or randomly change its brightness. Use for lights that should act like fire.

&nbsp; &nbsp; *Pulse*: Makes the light consistently change its brightness

&nbsp; &nbsp; *Flicker Slow*

&nbsp; &nbsp; *Pulse Slow*&nbsp;

&nbsp; &nbsp; *None*

&nbsp;

*References Persist*: If checked, the object will remain persistent in world.

&nbsp;

*Blocked:* If checked, the specific object becomes read-only.

&nbsp;


***
_Created with the Personal Edition of HelpNDoc: [Benefits of a Help Authoring Tool](<https://www.helpauthoringsoftware.com>)_
