# 

&nbsp;

**Alarm**

This returns the base value of the speaker's Alarm AI Setting.

&nbsp;

**Alarmed**

This is 1 if the speaker is currently Alarmed (has detected a crime) and 0 otherwise.

&nbsp;

**Attacked**

This is 1 if the speaker has ever been attacked, and 0 otherwise.

&nbsp;

**Choice**

This works with a command in the results field called "Choice." When the function "choice" appears in the results field, the game searches the current topic again, this time setting the value of "choice" to whatever number the player selected. Just like a regular search, it stops at the first response for which all conditions are true (so it may not necessarily hit the response you expect).

&nbsp;

Warning: Make sure any choices you make are "reachable" or you can send the game into an infinite loop. For instance, if you had "Choice One 1 Two 2" and no other responses in that topic, the game would default to displaying the choice again. And again. And again.

&nbsp;

**Creature Target**

Returns true (1) if the speaker is targeting a creature.

&nbsp;

**Detected**

This is 1 if the speaker detects the player and 0 otherwise.

&nbsp;

**Function Faction Rank Difference**

This is the player's rank in the speaker's faction minus the speaker's rank. Note that the first rank in a faction is 0 and your "rank" is –1 if you do not belong to that faction. A return value of 0 is the same rank, 1 is PC is one rank higher, -2 is PC is two ranks lower.

&nbsp;

**Fight**

This is the AI Fight Setting of the speaker. This is the base value, not the value after disposition, distance, crime level, and so on have been added.

&nbsp;

**Flee**

This returns the base value of the speaker's Flee AI Setting.

&nbsp;

**Friend Hit**

[Detailed explanation](<FriendHit.md>).

&nbsp;

**Health Percent**

This returns the percent health of the speaker.

&nbsp;

**Hello**

This returns the base value of the speaker's Hello AI Setting.

&nbsp;

**Level**

This is the current level of the speaker.

&nbsp;

**PC Acrobatics**

This is the player's current skill level in Acrobatics. There are other functions for the player's skills and attributes. They all work the same way. All of them return the current value of the attribute or skill, which includes disease, magical enhancements, etc.

&nbsp;

**Blight Disease**

This is 1 if the player has a blight disease and 0 otherwise.

&nbsp;

**PC Clothing Modifier**

This is the total value of all the clothing and armor the player is wearing. The value of your equipment changes the disposition of people in the game.

&nbsp;

**PC Common Disease**

This is 1 if the player has a common disease and 0 otherwise.

&nbsp;

**PC Corprus**

This is 1 if the player has Corprus and 0 otherwise.

&nbsp;

**PC Crime Level**

This is the amount of gold the player has on their head, the same as the "bounty" on the character sheet.

&nbsp;

**PC Expelled**

This returns 1 if the player is expelled from the speaker's faction and 0 otherwise.

&nbsp;

**PC Level**

This is the level of the player.

&nbsp;

**PC Reputation**

This is the value of the player's total reputation. This is separate from individual faction reputations and affects how everyone in the world reacts to you.

&nbsp;

**PC Sex**

This is 0 if the player is male and 1 if the player is female.

&nbsp;

**PC Vampire**

This is 1 if the player is a vampire and 0 otherwise.

&nbsp;

**Rank Requirement**

This checks to see if you "qualify" for the next rank in the speaker's faction.

This returns 0 if you do not have enough Faction Reputation and do not meet the skill requirements.

This returns 1 if you meet the skill requirements, but do not have the Faction Reputation.

This returns 2 if you have the Faction Reputation, but do not meet the skill requirements.

This returns 3 if you qualify.

&nbsp;

**Reaction High**

This returns the highest faction reaction between the speaker's faction and all of the player's factions.

&nbsp;

**Reaction Low**

This returns the lowest faction reaction between the speaker's faction and all of the player's factions.

&nbsp;

**Reputation**

This returns the speaker's reputation.

&nbsp;

**Same Faction**

This is 1 if the speaker and the player are in the same faction and 0 otherwise.

&nbsp;

**Same Race**

This is 1 if the speaker and the player are of the same race and 0 otherwise.

&nbsp;

**Same Sex**

This is 1 if the speaker and the player are of the same gender and 0 otherwise.

&nbsp;

**Should Attack**

This is 1 if the speaker wants to start combat with you.

&nbsp;

**Talked to PC**

This is 1 if the speaker has ever talked to the player and 0 otherwise. You can use this to have someone say something the first time you speak with them.

&nbsp;

**Weather**

This returns the current weather so you can have people talk about the rain or the ash storms, etc. See [[change-weather|ChangeWeather]] script command for enums on weather types.

&nbsp;

&nbsp;


***
_Created with the Personal Edition of HelpNDoc: [Easily Add Encryption and Password Protection to Your PDFs](<https://www.helpndoc.com/step-by-step-guides/how-to-generate-an-encrypted-password-protected-pdf-document/>)_
