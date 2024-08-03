---
title: Follow
aliases:
  - Follow
description: Makes the actor follow another actor to a location or for a specified period of time.
---
Makes the actor follow another actor to a location or for a specified period of time. During this time the actor will also protect the actor it is following.

_Target:_ The ActorID to follow. Remember that since all ActorIDs share the same AI packages, putting this on an Actor with multiple references will cause ALL references of that actor to follow the same actor. Thus, this type of AI should only be placed on specific or unique sets of Actors.

_Duration:_ The duration the actor should follow for. Trumped by providing a location.

_Follow to:_ Check this to use location data for following.

_Cell:_ The Cell to follow to.

_XYZ:_ Like Travel, specify the XYZ location to follow to.

_View Location:_ A red X will appear in the render window that you can move around with the standard render window object controls. Place the X on the follow destination.
