---
title: MessageBox
aliases:
  - MessageBox
  - Message Box
description: The MessageBox script function displays a message on the screen.
---
MessageBox, “Message”, \[var1\], \[var2\], \[“button1”\], \[“button2”\]

MessageBox, “This is a Message”  
MessageBox, "Shall I start to spin? GameHour = %.2f", GameHour, "OK", "No Way"

Displays a message on the screen. There are two basic types of MessageBoxes.

1. &nbsp; &nbsp; One that displays just text. This is displayed at the bottom of the screen and will go away in a small amount of time.
2. &nbsp; &nbsp; One that displays buttons the player can choose. This box stops time and displays itself in the center of the screen until the player chooses an option.

[[declaring-variables|Variable]]] names can also be passed into the MessageBox command. These are displayed in the order they are used as parameters. The message must say _how_ the variable is to be displayed.

| **Notation** | **Variable type** |
| ------------ | ----------------- |
| f            | Float             |
| D            | Short or Long     |
| S            | string            |

Float variables must also specify how many decimal places they should show.

Either type of MessageBox can display variables.

See the sample script “MessageTest”.
