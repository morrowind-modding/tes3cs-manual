---
title: Global Scripts
aliases:
  - Global Scripts
description: Global scripts are scripts that run always, and are not connected with any particular object.
---
Global scripts are scripts that run always, and are not connected with any particular object. They are used to run complex quests or time things that may happen globally, but not necessarily associated with a single object.

When the game starts, the script “Main” is started as a global script.

Like other scripts, global scripts can refer to other objects and so forth, but cannot do things like movements on itself (since the global script is not associated with an object reference)

The following functions are used on global scripts:

[[ScriptRunning|ScriptRunning]], ScriptName

[[StartScript|StartScript]], ScriptName

[[StopScript|StopScript]], ScriptName
