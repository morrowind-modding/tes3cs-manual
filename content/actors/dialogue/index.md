---
title: Dialogue
aliases:
  - Dialogue Overview
description: Dialogue in Morrowind is one large database that every NPC and creature pulls from.
---
Dialogue in Morrowind is one large database that every NPC and creature pulls from. The basic principle being that a character will say the highest priority dialogue they pass all conditions for. If they pass no conditions, they have nothing to say about that topic.

## Adding, Deleting, and Editing Dialogue IDs

You can add a new ID by right-clicking in the list on the left side of the Dialogue window and selecting "New." You can delete an ID by right-clicking in this list and selecting "Delete" or by selecting an ID and pressing the Delete key. You can edit an ID by selecting it and then clicking on it again with the left mouse button. Note that when you edit an ID which already exists in a master file, the editor marks the old ID as deleted and creates a new ID which exists only in your plugin.

## Topic

This tab on the left-side of the Dialogue window shows all the topics that people in the game will respond to. Every time anyone in the game speaks in dialogue, that text is searched for this list of topics. If the text matches and the speaker has something to say about the topic, it will show up as a hyperlink in the game that you can select. People only have something to say if they meet the conditions for one of the possible responses in a topic.

Hyperlinks in the editor are shown as <a href="#" onclick="return false;">hyperlink</a>. You can see the hyperlinks in the editor by clicking on the “Update Hyperlinks” button.

Topic matching is not case-sensitive and will always match longer phrases before shorter ones and earlier phrases before later ones. If you had the topics "My cat is smart," "Smart as a cat," and "Cat," the phrase "My cat is smart as a cat" would match "<a href="#" onclick="return false;">My cat is smart</a> as a <a href="#" onclick="return false;">cat</a>." The phrase "My cat is as smart as a cat" would match "My <a href="#" onclick="return false;">cat</a> is as <a href="#" onclick="return false;">smart as a cat</a>."

Topic matching for Creatures is slightly different than for NPCs. Creatures only get the dialogue that is assigned to their ID. If you assign dialogue to everyone in the Cell "Balmora" and you put a Scamp in Balmora, he will not have any of this dialogue.

## Voice

Voices have audio files attached to them which are played whenever a "voice" is called for. You can select which file is attached to each voice ID with the Sound Filename button.

Alarm voices are not used, you should not see any.

Attack voices are played while the NPC or Creature is attacking. Creatures generally have these tagged in their animations, so this is mainly for NPCs.

Flee voices are played when an NPC is fleeing.

Hello voices are played when an NPC or Creature greets the player. At what distance this occurs is set by the Hello AI Setting.

Hit voices are played when the NPC or Creature takes damage. Again, most Creatures have these embedded in their animations.

Idles play randomly. These are like "clutter" for voices. You control how often and under what conditions idles are played with the conditions here.

Intruder voices are played when you are caught activating an owned item such as a door or container.

Thief voices play when an NPC detects a crime such as stealing or assault. Note that this occurs when a crime is detected. Even an NPC with an Alarm AI Setting of 0 will say this voice if they detect the crime.

## Greeting

Greetings are what people say when they are first activated. In general, they work exactly like topics. You cannot enter dialogue with someone who has no Greetings. It is best to make sure there is a "default" greeting with no conditions that everyone will say if they fail everything above it.

The system looks for an ID that meets all the conditions starting with Greeting 0 through Greeting 9. The Greetings are divided into these 10 categories only out of convenience. In general, Morrowind uses Greetings this way:

Greeting 0: Alarmed  
Greeting 1: Quests  
Greeting 2: Vampires, Nudity  
Greeting 4: Crime and Disease  
Greeting 5: Quests  
Greeting 6: Factions  
Greeting 7: Classes, Endgame, Slaves  
Greeting 8: Clothing  
Greeting 9: Locations  

This is just a guide to finding a particular Greetings in Morrowind. You can use them however you want.

## Persuasion

In the Persuasion category are responses to different types of persuasion as well as Info Refusals and Service Refusals.

### Persuasion Fail/Persuasion Success

Admire Fail shows all the things people can say when you fail to admire them. Admire Success shows all the things people can say when you succeed in admiring them. The same is true for Bribe Fail, Bribe Success, Intimidate Fail, Intimidate Success, Taunt Fail, and Taunt Success.

### Info Refusal

Info Refusals are what people will say when the speaker does not meet certain conditions. This occurs most often with disposition. If someone talks about "Morrowind" only with a disposition of 70, the topic may appear in their topic list, but if their disposition is only 40, they will respond with an Info Refusal instead.

### Service Refusal

Service Refusals prevent certain people from offering services. When the player selects Training, Barter, or Travel, a search is made through this list. If any of these pass, that person will not offer services and will say a Service Refusal instead. Most service refusals are based on faction rank or disposition.

Note that Disposition is "backwards" in Service Refusals. Normally Disposition will pass if the person you're speaking to has a disposition higher than the number here in dialogue. However, Service Refusals will pass (and the person will refuse to give services) if the person's disposition is lower than the number here.

You cannot use Persuasion on Creatures, only NPCs.

## Journal

Journals show the text that is added to the player's journal with the Journal script function. Each journal has an index, which is used with the Journal command. This tab just shows all the journals and their text and index. For more information about how to use journals, see the Journal command.

Starting with Tribunal, you can also name journal entries for tracking quests and flag them as completed. See \[[QuestTitle|Quest Title]].

## Filter for

Filter on the bottom left side of the dialogue window will show all the dialogue in a particular person. It will show all dialogue for that person's ID, race, class, gender, cell, etc... Some things such as local variable states and journal conditions are not checked in the editor, so the list you see with Filter is often larger than the list of topics someone will have in the game.

## Info / Response

The top right side of the window shows the text and some of the conditions for each line of dialogue. These are usually called "infos" or "responses." Each Topic (or Voice or Greeting, etc) can have more than one response.

When any topic (or Greeting or Voice, etc) is selected, the system looks through all the responses and returns the first one that matches all conditions. The search is done top to bottom. If you have more than one response with the same conditions, only the top one will ever be said. If you want to move an info in the list, select it and use the **Left and Right Arrow keys.** This will change its priority, but will also modify any info it goes past.

The Info/Response window shows a few of the conditions which can be put on responses, such as Disposition, ID, Faction, Cell, and the six Function/Variables. This makes it easier to find certain bugs at a glance.

You can edit the text of each response in the large text window or, if the response is only a few characters, you can double-click in the Info/Response window and edit the text there. If you cut \& paste text into the editor, you should use the large text window, since the info/response window has a limit to the number of characters it can display. The large text window will let you enter up to 512 characters per response.

Some game data can be displayed in dialogue. For a list of these, see [[text-defines|Text Defines]].

## Speaker Condition

These fields set up conditions for each response. All the conditions must be "True" in order for anyone to say this response.

### ID

This is used to put dialogue in a specific person or persons. While most NPCs are unique in Morrowind, this function will put the dialogue in every instance of an NPC. If you have three of "Bob Smith" in your world, all three will have dialogue assigned to the ID "Bob Smith."

Creatures only have dialogue assigned to their ID. Otherwise, this works the same as for NPCs. Dialogue assigned to "scamp" will appear in every instance of "scamp."

### Race

This assigns dialogue to a particular race. If you add a new race in the editor, the new race will appear in the pull-down list. Only people of this race will have this dialogue. If you delete a race, any dialogue assigned to that race will be blank, which effectively assigns it to everyone, regardless of their race.

### Class

This assigns dialogue to a particular class. Just like Race above, if you make a new class, it will appear here and you can select it. Just like races, if you delete a class, this will be blank.

### Faction

This assigns dialogue to a particular faction. Otherwise, it works just like Race and Class.

### Rank

This assigns dialogue to everyone of a certain rank or higher. If the Faction is blank, it will assign it to everyone of that rank or higher, regardless of their faction. For instance, Faction == Redoran and Rank == 3 will assign dialogue to everyone in House Redoran of Rank 3 and above. Faction == Blank and Rank == 7 will assign dialogue to everyone in the game with rank 7 or higher who belongs to any faction.

### Cell

This assigns dialogue to everyone in a particular area. Note that we only match the first characters. Dialogue in Cell Balmora will show up in the cell "Balmora" as well as "Balmora, Lucky Lockup" and "Balmora, Dorisa Darvel: Bookseller." Note also that the test is made on which cell the player is currently in. If an NPC is following you and you go to a new cell, the NPC's dialogue can change as a result.

### PCFaction

This will only give dialogue if the player is in a particular faction.

### PCRank

This will only give dialogue if the player is of a certain rank. If Faction is left empty, the player can be of this rank in any faction.

### Sex

This lets you assign dialogue to one gender or the other.

### Disp

This is short for "Disposition." Any dialogue with a disposition value will only be said by people whose disposition is higher than this number (for the exception, see Service Refusal above).

### Function/Variable

These six conditions are where you have the most control over who says what when. See [[dialogue-variables|Dialogue Functions and Variables]].

## Results

In the results window, you can put in one-line script commands. You cannot use any commands that require more than one line, such as "if" statements. The results field is compiled and processed after the response is displayed, not before. See [[gameplay/scripting/index|Scripting Overview]]

## Update Shared By

This button will show you everyone in the world who will have this dialogue with your current conditions. If you make changes or switch to another response, you will have to press this button again to get a new list. Changes you've made to a response may not be reflected in this window until you select another response which forces a "save" of the response data.

## Journal Preview

This window lets you quickly see a journal without having to switch to the Journal tab and lose your place in the dialogue. Note that you can also have more than one dialogue window open at the same time.

## Update Hyperlinks

This button will update all the hyperlinks in all the text in the editor. With a large topic list, this can take several minutes. Note that when you save your plugin, the hyperlinks are removed.

## Error Check Results

This button will compile everything in the results field for all responses. It will display any warnings it finds while doing this (these are also saved to a file named warnings.txt in the Morrowind directory). It is a good idea to run this at least once before you release a plugin.

Warning: It is best to load your plugin, run the error check, and then close the editor and load your plugin again to fix any errors. Error Check Results can sometimes mark the responses it is checking and global variables as "changed." These then get saved into your plugin, which makes it larger than necessary and can interfere with other people's work.

## Sound Filename

This button opens a directory view window where you can select which audio files are played in Voice. To add or change the sound file, just click on this button and open whatever file you want to use.

## OK

This button just closes the dialogue window. Note that any changes to dialogue are "saved" when the changes are made. There is no way to "cancel" changes made in the dialogue window.

## %Defines

You can use various variables and defines in text, such as %Name, which is the name of the speaker. [[text-defines|See full list]].