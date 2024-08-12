---
title: Escort
aliases:
  - Escort
description: Makes the actor escort another actor to a location or for a specified period of time.
---
Makes the [[actors/index|actor]] escort another actor to a location or for a specified period of time. During this time the actor will also protect the actor it is escorting.

If you are not doing this package with the player as the target, you’ll want to also put a [[follow]] package on the target Actor, since escorting an actor makes the escorter wait for the other actor. If the Target does not know they are supposed to follow, the escorter will most likely just stand there.

_Target:_ The ActorID to Escort. Remember that since all ActorIDs share the same AI packages, putting this on an Actor with multiple [[objects/reference-data/index|references]] will cause ALL references of that actor to attempt to escort the same actor. Thus, this type of AI should only be placed on specific or unique sets of Actors.

_Duration:_ The duration the actor should escort for. Trumped by providing a location.

_Escort to:_ Check this to use location data for the escort.

_Cell:_ The [[building-and-editing/world/index|Cell]] to escort to.

_XYZ:_ Like [[travel|Travel]], specify the XYZ location to escort to.

_View Location:_ A red X will appear in the [[the-render-window|render window]] that you can move around with the standard render window object controls. Place the X on the escort destination.
