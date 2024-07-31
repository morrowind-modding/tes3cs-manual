# 

&nbsp;

Makes the actor escort another actor to a location or for a specified period of time. During this time the actor will also protect the actor it is escorting.&nbsp;

&nbsp;

If you are not doing this package with the player as the target, you’ll want to also put a follow package on the target Actor, since escorting an actor makes the escorter wait for the other actor. If the Target does not know they are supposed to follow, the escorter will most likely just stand there.

&nbsp;

*Target:* The ActorID to Escort. Remember that since all ActorIDs share the same AI packages, putting this on an Actor with multiple references will cause ALL references of that actor to attempt to escort the same actor. Thus, this type of AI should only be placed on specific or unique sets of Actors.

&nbsp;

*Duration:* The duration the actor should escort for. Trumped by providing a location.

&nbsp;

*Escort to:* Check this to use location data for the escort.

&nbsp;

*Cell:* The Cell to escort to.

&nbsp;

*XYZ:* Like Travel, specify the XYZ location to escort to.

&nbsp;

*View Location:* A red X will appear in the render window that you can move around with the standard render window object controls. Place the X on the escort destination.

&nbsp;

&nbsp;


***
_Created with the Personal Edition of HelpNDoc: [Transform your help documentation into a stunning website](<https://www.helpndoc.com/feature-tour/produce-html-websites/>)_
