# 

&nbsp;

With the Tribunal expansion, the journal can filter to display either all quests you have begun, or only those quests you haven't completed.

&nbsp;

In the editor, quest journals are entered in the Dialogue interface on the tab marked 'Journal'.

&nbsp;

*Quest Titles:* Each quest can be given a title. Quest titles must have an index number of '0'. The box for 'Quest Title' must be checked.

&nbsp;

*Quest Finished:* Any journal entry with the 'Finished' box checked appears in the Journal as completed, and is hidden when the journal is filtered to show active quests. For any given quest, there may be more than one journal that ends the quest.

&nbsp;

*Quest Restarting:* In some cases, you may design a quest that finishes, then restarts. For example, you may want the player to THINK the quest is done, then surprise him later by adding a journal that tells him he is not done after all.

&nbsp;

&nbsp;

EXAMPLE

Here's an example of journals for a simple quest.

&nbsp;

We'll call the Quest 'Bad Zombie'.

&nbsp;

First the quest needs an ID. Right-click in the column under the tab 'Journal' and select 'New'.

&nbsp;

Enter the ID MS\_BadZombie in the empty field. \[We preface our miscellaneous quests with the prefix MS\_ for easy reference; you can do anything you want.\]

&nbsp;

Now right-click in the Info/Response area and select 'New' to create a new Journal info.

&nbsp;

This journal info will have the index '0' \[see the entry location for 'Index' in the 'Speaker Condition' area\], and will be the quest title. Enter the Quest Title 'Bad Zombie' in the empty field.

&nbsp;

Our quest has only three significant states:

&#49;. The questgiver told us to go kill the bad zombie.

&#50;. We killed the bad zombie.

&#51;. We reported back to the questgiver and he gave us some government cheese.

&nbsp;

We will have a journal entry for each of these states.

&nbsp;

The first journal is:

The False Todd said there was a bad zombie under his bed, and that I should go kill it for him, because he is scared.

&nbsp;

Right-click in the Info/Response area and select 'New' to create a new Journal info. Type in the first journal, and give that journal an Index of '1'.

&nbsp;

The second journal is:

I found a bad zombie under the False Todd's bed, and killed it. Now I have to go back and tell the False Todd. I bet he'll give me something really swell.

&nbsp;

Right-click in the Info/Response area and select 'New' to create a new Journal info. Type in the second journal, and give that journal an Index of '50'.

&nbsp;

The third journal is:

I told the False Todd I killed the bad zombie under his bed. And what reward does he give me? Government cheese\! What a cheapskate.

&nbsp;

Right-click in the Info/Response area and select 'New' to create a new Journal info. Type in the third journal, and give that journal an Index of '100'. AND, because this is the last journal, put a check in the 'Finished' box.

&nbsp;

Now, when you play the 'Bad Zombie' quest, as soon as you receive the quest from the False Todd, an entry will appear in your journal for the 'Bad Zombie' quest. This title will appear in your journal whether you are displaying All Quest, or just Uncompleted Quests, because it isn't finished yet. Duh.

&nbsp;

However, when you finally get your government cheese, and the quest is over, when you display only uncompleted quests in the journal, the title 'Bad Zombie' will no longer appear. Because it's finished. Natch.

&nbsp;

And, supposing you only THOUGHT the bad zombie was dead...

&nbsp;

Now we need three more journal entries.

&nbsp;

The fourth journal is:

I talked to False Todd, and what do you know\! He said there was STILL a bad zombie under his bed, and that I should go kill it for him, because he is REALLY scared now.

&nbsp;

Right-click in the Info/Response area and select 'New' to create a new Journal info. Type in the fourth journal, and give that journal an Index of '101'. AND, because we are restarting the quest, put a check in the 'Restart' box.

&nbsp;

The fifth journal is:

Sure enough, I found there was still a bad zombie under the False Todd's bed. This time I killed it and waited around for five days to make sure it was really dead. Now I have to go back and tell the False Todd. This time he better give me something really swell.

&nbsp;

Right-click in the Info/Response area and select 'New' to create a new Journal info. Type in the fifth journal, and give that journal an Index of '150'.

&nbsp;

The sixth journal is:

I told the False Todd I REALLY killed the bad zombie under his bed. And this time he gave me a swell Pocket Flaming Warhammer, so I am very happy.

&nbsp;

Right-click in the Info/Response area and select 'New' to create a new Journal info. Type in the sixth journal, and give that journal an Index of '200'. AND, because, REALLY, HONEST, this time it's the last journal, put a check in the 'Finished' box.

&nbsp;

&nbsp;

&nbsp;

&nbsp;


***
_Created with the Personal Edition of HelpNDoc: [Experience the power of a responsive website for your documentation](<https://www.helpndoc.com/feature-tour/produce-html-websites/>)_
