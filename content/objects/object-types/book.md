---
title: Book
aliases:
  - Book
description: Books and scrolls are objects that contain stories and information. They are opened when activated by the player.
---
Books and scrolls are objects that contain stories and information. They are opened when activated by the player.

_ID_: The object’s unique ID. (character limit: 32)

_Name:_ The name of the book. (character limit: 32)

_Script_: The script assigned to object.

_Weight:_ The object’s weight (in pounds).

_Value:_ The value in gold of the item.

_Teaches_: A book can teach a single skill point to the PC. It acts just like training, but the benefits are only given once.

_Add Art File_: Art used for object.

_Inventory Image_: Art used for icon representation of object.

_Scroll_: If checked, book appears as scroll. If unchecked, book appears as a book.

_Enchantment_: The number of enchantment points the item has. Used for enchanting.

_Enchanting_: The enchantment attached to the object. Can only attach “Cast Once” type enchantings[^1] and only to scrolls.

_Book Text_: In order for the text to appear as viewable in game, the book text uses a simplified HTML notation. To see an example of how the tags work, view the _Morrowind Books HTML.htm_ file in your Morrowind\\Data Files\\BookArt directory. Also view the source code on that file through your browser. (character limit: 64,000)

_References Persist_: If checked, the object will remain persistent in world.

_Blocked:_ If checked, the specific object becomes read-only.

[^1]: Original text "enchantings" should be "enchantments"