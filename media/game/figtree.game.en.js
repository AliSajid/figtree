// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "44d46fb0-a30a-4f7e-9c26-f6b46d37bdd5";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "0.5";

/* The situations that the game can be in. Each has a unique ID. */

undum.game.situations.start = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You are daydreaming, looking out at the mountains with eyes unseeing of their beauty, when the doorbell rings.") +
        vorple.html.p("For a minute, as the shards of the fantasy scatter about you, you're annoyed.") +
        vorple.html.p("And then you realise who it must be. ") +
        vorple.html.p("You jump up from the sofa and heedless of your mother's edicts about demure carriage, " + vorple.html.link('./staircase',"run down the wide staircase") + " and fling open the door, barely seconds after the person standing there has removed her finger from the doorbell.") +
        vorple.html.p("It's Samina!") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s02", "Greet her enthusiastically")) +
                                vorple.html.tag("li", vorple.html.link("s03", "Greet her shyly")),
                                {classes: "options"}));
        actions: {
            staircase: vorple.html.p("Your house is one of the grandest in the village, although to you, lonely child of a landowner’s family and restricted by culture to this vast but limited space, it seems more like a prison.");
}
}});


undum.game.situations.s02 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("Excited at seeing your best friend after so long, you squeal and jump up and down!") +
        vorple.html.p("She squeals back and suddenly you find yourself hugging your best friend as though she'd been gone for six years instead of just six months. Both of you giggling and laughing, you tug her inside and chase each other upstairs to your room.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s05", "Catch up with her")),
                                {classes: "options"}));
    },
});

undum.game.situations.s03 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("Samina smiles too, then asks a little shyly if she can come in. You pull in your best friend and get her seated in the living room.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s04", "Scene 4")),
                                {classes: "options"}));
    },
});

undum.game.situations.s04 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("Samina is shyly telling you about her visit to the city.") +
        vorple.html.p("You listen, spellbound. The last time you visited the nearby city was over five years ago, and Samina’s tales of the new malls and the glittering streetlights and the roads make you fascinated. You feel a pang of jealousy that she has so much opportunity. ") +
        vorple.html.p("Then Samina leans forward. " + vorple.html.quote("There is news I have to tell you as well.") + " She hesitates. Perhaps she sees the change in your attitude, born of six months’ separation and severed experiences, and is reluctant to go on. As she opens her mouth to speak again, the doorbell rings…") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s17", "You go and see who's at the door.")),
                                {classes: "options"}));
    },
});

undum.game.situations.s05 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("Both of you settled, you hear your friend's tales with a happy air. Samina is flushed from more than just the fresh air, for she has exciting news.") +
        vorple.html.p(vorple.html.quote("I've convinced Baba to let me go to the teacher training institute in  ---bad (the village next to yours).  It will be a little difficult going and coming back each day, but the new road will be complete by next month and I hope that will make things easier.")) +
        vorple.html.p("And then Samina grabs your hand") +
        vorple.html.p(vorple.html.quote("Join with me? We'll be able to complete the course in a year, and then we can teach in our very own school! I'm sure Uncle would…")) +
        vorple.html.p("Samina falters, remembering your father’s temper and strictness.") +
        vorple.html.p("Convincing him to let you attend the local school was hard enough, a teacher training in another village would be out of the question.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s07", "Respond Excitedly")) +
                                vorple.html.tag("li", vorple.html.link("s06", "Falter and get dejected")),
                                {classes: "options"}));
    },
});

undum.game.situations.s06 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p(vorple.html.quote("Oh but Samina, I don’t think Abbu will let me...") + " the disappointment creeps into your voice, as you realize how close and yet so far your dreams are.") +
        vorple.html.p("Samina reaches out to pat your hand reassuringly, her cheerful nature exerting itself." + vorple.html.quote("Don’t worry, I’m sure-")) +
        vorple.html.p("The doorbell rings again.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s17", "You go and see who's at the door."),
                                {classes: "options"})));
    },
});

undum.game.situations.s07 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p(vorple.html.quote("SAMINA! That is wonderful news! I am so happy for you. And I am definitely going to try to convince Abbu. Oh Samina, if we could both teach together in the same school we learnt together, how much fun would that be!")) +
        vorple.html.p(vorple.html.quote("Yes! Let’s make a plan. You ought to come over to my place tomorrow and we can figure out a way to convince Uncle. I’ll send Hashim over in the car to get you.")) +
        vorple.html.p(vorple.html.quote("Hashim is here?")) +
        vorple.html.p(vorple.html.quote("Yes, silly! He came back with us. Anyway forget him. I want to show you the gifts I brought for you! But for now, I have some more gossip for your innocent ears…")) +
        vorple.html.p("Both of you excitedly gossip more, as the evening draws on, hope alight in both your hearts.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s08", "Scene 8")),
                                {classes: "options"}));
    },
});

undum.game.situations.s08 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.tag("h3", "The next day…") +
        vorple.html.p("There is a honking of the horn outside. You peep out of the window to see a sleek blue car. ") +
        vorple.html.p("Like a knight in shining armour, Hashim and his steed have arrived.") +
        vorple.html.p("Running downstairs, hardly heeding your mother’s admonishments to adjust your " + vorple.html.link("./dupatta","dupatta") + ", you grab your bag and rush out. ") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s09", "Scene 9")),
                                {classes: "options"}));
    },
});

undum.game.situations.s09 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You always did have a crush on Samina’s brother. Travelling on the seat next to him, you watch out of the corner of your eye as he lounges lazily behind the wheel, driving the car with skill and grace, both suavity and confidence added in the five years he spent in the city and since you saw him last And you find yourself hardly able to breathe.") +
        vorple.html.p(vorple.html.quote("Well, so little Areesha has all grown up, eh?")) +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s11", "What, did he expect me to stay the little girl he could ignore?")) +
                                vorple.html.tag("li", vorple.html.link("s10", vorple.html.quote("Eeek! I’ve forgotten how to make speaking noises! "))),
                                {classes: "options"}));
    },
});

undum.game.situations.s10 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("Hashim laughs, as you mumble something." + vorple.html.quote("Still the shy Areesha. You should come to the city.  Two weeks there and you’ll be talking like a parrot.")) +
                vorple.html.p("He gets a phone-call then, and the remainder of the journey passes in silence.  You curse your lack of confidence. Just as you gather up the courage and open your mouth to say something witty, the car stops in front of Samina’s house.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s14", "Scene 14")),
                                {classes: "options"}));
    },
});

undum.game.situations.s11 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p(vorple.html.quote("Indeed, " + vorple.html.link("./hashim","Hashim.") + "  I’m not a little girl anymore.") + " You smile slightly.") +
        vorple.html.p("Hashim laughs and suddenly shifts a bit in his seat. His eyes are still on the road but he seems to be paying you more attention. All the way there, he makes small chit chat with you, and when you reach Samina’s house you’ve had more conversation with him than with any other man in your whole life.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s12", "Scene 12")),
                                {classes: "options"}));
    },
});

undum.game.situations.s12 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p(vorple.html.quote("Hey, so someone was getting quite friendly with my brother outside.")) +
        vorple.html.p("You feel a blush rising, but the glow brought by the attentions of Hashim has you defiant. " + vorple.html.quote("And so what? Are you going to tattle on me?")) +
        vorple.html.p(vorple.html.quote("Indeed not. In fact, I think it’s wonderful. Hashim and you would look lovely together, and you’d be my sister in law, and..")) +
        vorple.html.p(vorple.html.quote("For god’s sake Samina, get a hold of yourself. We just talked.")) +
        vorple.html.p(vorple.html.quote("Oh but I’m sure I can get the two of you to take things further. And I know you’ve liked him since forever...")) +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s13", "Scene 13")),
                                {classes: "options"}));
    },
});

undum.game.situations.s13 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("Weeks pass. Your relationship with Hashim grows. Secret meetings in Samina’s house, letters passed with Samina as convoy, secret late-night phone-calls all contribute to the blossoming romance between you too. And this goes on for several weeks, until one day…") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s17", "The bell rings...")),
                                {classes: "options"}));
    },
});

undum.game.situations.s14 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("Inside Samina’s house, there is a middle-aged woman. She is wearing a flashy smile and even flashier clothes – evidently a friend from the city. Samina introduces the two of you, and you sit and talk for a while.As Samina is downstairs preparing snacks, the woman looks you up and down. Then she lowers her voice conspiratorially. ") +
        vorple.html.p(vorple.html.quote("Samina told me about the trouble you’re facing with your family about this teacher training.")) +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s15", "Non committal response. What business is it of hers?")) +
                                vorple.html.tag("li", vorple.html.link("s16", "Hmm. Maybe this woman could help you in some way? She’s from the city after all.")),
                                {classes: "options"}));
    },
});

undum.game.situations.s15 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You mumble something, and then go downstairs to help Samina with the food.  For some reason, you don’t like the woman’s presumptions. The evening passes uneventfully. And the next day the woman leaves for the city.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s17", "The bell rings.")),
                                {classes: "options"}));
    },
});

undum.game.situations.s16 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You find yourself spilling all your worries to this stranger. She listens patiently. Then finally, she pulls out a card. It has her name, number and address on it.") +
        vorple.html.p(vorple.html.quote("Keep this with you. And remember, you’re Samina’s friend, so that makes you my friend. If you ever need any help, call me. And I will help you any way I can.")) +
        vorple.html.p("You take the card and hide it in your bag. It might come in handy later. ") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s17", "Scene 17")),
                                {classes: "options"}));
    },
});

undum.game.situations.s17 = new undum.Situation({
    enter: function( character, system, from ) {
        if (from == "s16")
            character.sandbox.mainChoice = "sixteen";
        else if (from == "s13")
            character.sandbox.mainChoice = "thirteen";
        else
            character.sandbox.mainChoice = "boo";
        
        system.write( vorple.html.p("The doorbell rings, three short rings, which  means that your mother has arrived. She seems excited when you open the door, and as she sweeps in she lowers her voice conspiratorially.") +
        vorple.html.p(vorple.html.quote("Come to my room, Areesha. I have special news for you.")) +
        vorple.html.p(vorple.html.quote("But mama, Samina is over.")) +
        vorple.html.p(vorple.html.quote("Then come when she has left. But do not dally. There are important things I need to talk to you about.")) +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s18", "Later..")),
                                {classes: "options"}));
    },
    // TODO: There is a conditional clause. If the from is 16, then you set the variable as "sixteen", if it's 13, then you set it as "thirteen"
});

undum.game.situations.s18 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.tag("h3", "Later...") +
        vorple.html.p(vorple.html.quote("Areesha, I need you to listen to me carefully. You are old enough now to take this news maturely.")) +
        vorple.html.p("You wait, with baited breath.") +
        vorple.html.p(vorple.html.quote("There is a proposal that has come for you. The matter is practically settled already, because your father is very keen on the man. But they will visit us today. I want you to dress up to look your best.")) +
        vorple.html.p("The words echo in your ear, as you feel the elaborate plans you’ve constructed for your future evaporate into a dry, sickly emptiness."));
        // Conditional clause. If variable is "sixteen", link to 28 and 19. If it is "thirteen", link to 19 and 20. Else, link to 19 and 31.
        if (character.sandbox.mainChoice == "sixteen")
                system.write(vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s19", "Indignantly begin arguing")) +
                                vorple.html.tag("li", vorple.html.link("s28", "Jump up and run out of the room")),
                                {classes: "options"}));
        else if (character.sandbox.mainChoice == "thirteen")
                system.write(vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s19", "Indignantly begin arguing")) +
                                vorple.html.tag("li", vorple.html.link("s20", "Jump up and run out of the room")),
                                {classes: "options"}));
        else
                system.write(vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s19", "Indignantly begin arguing")) +
                                vorple.html.tag("li", vorple.html.link("s31", "Jump up and run out of the room")),
                                {classes: "options"}));
    },
});

undum.game.situations.s19 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p(vorple.html.quote("There is nothing I can do my love. You know your father. Once he decides something, God in Heaven will not be able to convince him otherwise.")));
        // Conditional clause. If variable is "sixteen", link to 28. If it is "thirteen", link to 20. Else, link to 31.
        if (character.sandbox.mainChoice == "sixteen")
                system.write(vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s28", "Jump up and run out of the room")),
                                {classes: "options"}));
        else if (character.sandbox.mainChoice == "thirteen")
                system.write(vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s20", "Jump up and run out of the room")),
                                {classes: "options"}));
        else
                system.write(vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s31", "Jump up and run out of the room")),
                                {classes: "options"}));
    },
});

undum.game.situations.s20 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("When you get to your room, the first thing you do is call Hashim. He is distraught at the news, but he says he’ll get back to you.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s21", "Create a scene, cry, beg that he do something")) +
                                vorple.html.tag("li", vorple.html.link("s23", "Assent bravely")) +
                                vorple.html.tag("li",vorple.html.link("s22", "Feel that your nerves are breaking under the strain, and close the conversation")),
                                {classes: "options"}));
    },
});

undum.game.situations.s21 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("When Hashim calls back after a few hours, you are half out of your mind with worry. Hearing his voice, which sounds oddly cold, does nothing to help the turmoil.") +
        vorple.html.p(vorple.html.quote("I’m afraid there is nothing I can do to help you, Areesha. I love you, but your father is too powerful. Even if we were to run away, he would take revenge on my family here. I cannot let anyone hurt my family.")) +
        vorple.html.p(vorple.html.quote ("And what about me?")) +
        vorple.html.p(vorple.html.quote("It will probably work out alright in the end.") + " he says dismissively. Then without final word of love or farewell, he puts down the phone.") +
        vorple.html.p("Nothing but darkness remains in your life.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s31", "Scene 31")),
                                {classes: "options"}));
    },
});

undum.game.situations.s22 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("Hashim calls back after an hour, and in a quiet voice explains the plan.") +
        vorple.html.p("You listen quietly. But at the point where he begins to describe the risks, your will falters. You begin crying and protesting.") +
        vorple.html.p("And that is when you hear a knock on the door.") +
        vorple.html.p("Quickly, you shove the phone out of sight, as your mother enters.") +
        vorple.html.p("Her voice is stern. " + vorple.html.quote("I heard all that, Areesha. Shame on you.I thought you would be more mature than that. Apparently not. So hear me now. You are never to meet Hashim or Samina again. And I am speaking to your father to make the nikkah happen as early as possible. Now give me that phone and go to sleep, you brazen girl. I will not tolerate your bringing dishonor to this family’s name.")) +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s31", "Scene 31")),
                                {classes: "options"}));
    },
});

undum.game.situations.s23 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("When Hashim calls an hour later, you are still bravely trying to keep yourself calm. His warm voice, full of reassurance, courage and love, calms you further.") +
        vorple.html.p("He explains the plan in a low voice. It is risky, and even if you succeed it may entail that the family members you leave behind suffer for your errors, but it is the only way for both of you to be together.") +
        vorple.html.p("You listen, and gulp. And then you agree.") +
        vorple.html.p("As Hashim finishes off his reassurances, he warns you to keep the plan an utmost secret.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s24", "Keep the plan a secret")) +
                                vorple.html.tag("li", vorple.html.link("s25", "Promise to do so, but doubtfully")),
                                {classes: "options"}));
    },
});

undum.game.situations.s24 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.tag("h3", "Six Months Later...") +
        vorple.html.p("As you put the key into the lock of your tiny flat, you pause for a second and look at the key closely. Even now, it amazes you that you have a key of your own, that you’ve gotten to a point where you can unlock the home you dreamed of. It is a tiny flat, but it comes with the immeasurable gift of freedom. And the love of a wonderful man.") +
        vorple.html.p("And so it is at this moment, when returning from the teacher training that you have joined and almost completed, some hours before Hashim also returns from work, just before you enter the home and prepare it in anticipation of his arrival, you take out this time to give thanks. That you are happy, and safe, and able to achieve so much.") + 
        vorple.html.tag("center", vorple.html.tag("h2", (vorple.html.link("credits", "The End")))));
    },
});

undum.game.situations.s25 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("The next day, however, when Samina comes, you find yourself unable to hold back. You tell her everything. In the beginning, she goes pale, then she comforts you and tells you that you have her full support.") +
        vorple.html.p("Glad to have confided in your best friend, you brush aside the guilt of disobeying Hashim.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s26", "Later that week")),
                                {classes: "options"}));
    },
});

undum.game.situations.s26 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.tag("h3", "One Week Later...") +
        vorple.html.p("You are still on the run. Hashim is particularly jumpy today, and you yourself are tired from all the bus rides and the stays in seedy hotels. You miss your home, your mother, Samina, even your father.") + 
        vorple.html.p("All of a sudden, there is a hammering on the door.") + 
        vorple.html.p("Hashim jumps up and draws from his bag the gun he kept just for safety, as though he had been expecting this all along. Just as the door flies open, revealing a bunch of goons that look a lot like men from the village, your father’s servants.") + 
        vorple.html.p("As Hashim brings up the gun to fire at them, they pull their own weapons and fire multiple bullets into his chest.") + 
        vorple.html.p("Someone is shrieking, screaming like a banshee, and in the few seconds before the goons round on you, you realize the noise is coming from your own throat.") + 
        vorple.html.p("You realize that they must have been following you all along. But no one knew of your plans!") + 
        vorple.html.p("Except...") + 
        vorple.html.p("As the bullets plough into you too, with your last blood-filled breath, you curse the name of your once-best friend, who betrayed you.") + 
        vorple.html.tag("center", vorple.html.tag("h2", (vorple.html.link("credits", "The End")))));
    },
});

undum.game.situations.s29 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.tag("h3", "Three days later...") +
        vorple.html.p("Escorted by a friendly-looking aunty who nonetheless keeps a tight grip on your arm, you have finally reached the house of Laila, the woman you talked to on the phone three days earlier. You are now many kilometres from home, and although you have been treated well in the shuttling across the cities, your sense of foreboding is growing.") + 
        vorple.html.p("Laila welcomes you inside. Then she explains exactly where you are and what you must do. When you rise in shock and put your hands over your ears in horror, you are firmly seated again by the same chubby woman who escorted you.") + 
        vorple.html.p("Laila laughs, the expression on her face of someone who has seen this reaction scores of times.") + 
        vorple.html.p(vorple.html.quote("My dear, do you think we would get you here for free? You’ll just have to earn your keep. It won’t be difficult, such a pretty girl like you. And you have other girls to keep you company.")) + 
        vorple.html.p(vorple.html.quote("You can’t keep me here! I will go back! My father...")) + 
        vorple.html.p(vorple.html.quote("Amusing child. Your father will no longer accept you into his home, you know that very well. You have no other choice, my dear. Now go to your room. Your first customer will come by 9 pm. Make sure you are ready.")) + 
        vorple.html.p("A sense of doom and helplessness rises in your chest at your impossible situation, and you rise and stumble in the direction of the stairs.") +
        vorple.html.tag("center", vorple.html.tag("h2", (vorple.html.link("credits", "The End")))));
    },
});

undum.game.situations.s28 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("When you get to your room, you are hopeless and despairing. Until you remember the lady at Samina’s house..") +        vorple.html.p("Hardly daring to hope, you call the number she gave you. The woman picks up, her voice as confident as you remember.") +
        vorple.html.p("You explain the situation to her. She asks if you have money. You do, although not much. She tells you how to escape from a certain bus that will take you to the city and to a reliable person’s house. She encourages you.") + 
        vorple.html.p("Once you put down the phone, you are calmer and resolute.") + 
        vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s29", "There is something strange about the woman, but you decide to trust her anyway")) +
                                vorple.html.tag("li", vorple.html.link("s30", "The woman had sounded much kinder over the phone, and you’re happy you have a way out")),
                                {classes: "options"}));
    },
});

undum.game.situations.s30 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.tag("h3", "6 months later") +
        vorple.html.p("You welcome her into your tiny flat where you live with two other women, who are also runaways like you, saved by Laila and her organization from unhappy fates and given shelter and occupations.After so long, you finally feel safe. You have a job, a home and most of all, freedom.") + 
        vorple.html.p("You reach out to hold Laila’s hand and squeeze it." + vorple.html.quote(" I can never thank you enough for how you’ve helped me, Laila.")) + 
        vorple.html.p("Laila smiles. " + vorple.html.quote("This is just the beginning, little sister. You’ll see. You are hardworking and smart. And you have a wonderful life ahead of you.")) + 
        vorple.html.p("You feel the dreams once again come alight in your heart and you nod, happy.") + 
        vorple.html.tag("center", vorple.html.tag("h2", (vorple.html.link("credits", "The End")))));
    },
});

undum.game.situations.s31 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("It is supposed to be the happiest night of your life, but you find yourself completely numb.") +
        vorple.html.p("Inside you, there is a voice screaming,  urging you to get up and tear off the heavy hateful clothes, smear the ugly makeup, throw away the odious jewellery, and just run far, far away.") +
        vorple.html.p("But the voice is getting smaller and smaller as hope dies and your will along with it.") +
        vorple.html.p("And when you see the groom, a full 30 years older than you, a snarling brute of a man who looks at you with no love or kindness, the voice dies with a final whimper.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s32", "You refuse to accept your fate, and you have a plan")) +
                                vorple.html.tag("li", vorple.html.link("s36", "You accept your fate with bowed head")) +
                                vorple.html.tag("li",vorple.html.link("s37", "You accept your fate – for now. But God help you if you get a chance..")),
                                {classes: "options"}));
    },
});

undum.game.situations.s32 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("There is silence in the room, broken only by the snores of your new husband, who, drunk with more than his share of the moonshine that night, merely fondled you and leered before falling into a heavy stupor") +
        vorple.html.p("You draw out the knife you’d hidden between the folds of your lehenga. And watch the glow of the lights reflected in the shiny blade.") +
        vorple.html.p("He wouldn’t wake up until at least a few hours. And you wouldn’t be disturbed by anyone else either.") +
        vorple.html.p("The reflections thrown up illuminate a strange smile on your face. For despairing though this decision may be, it may be one of the first you make of your own will in your tightly-regulated life.") +
        vorple.html.p("You raise the dagger, and...") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s33", "Pause, as your husband gives another loud snore")) +
                                vorple.html.tag("li", vorple.html.link("s35", "Slice it across your own wrists")),
                                {classes: "options"}));
    },
});

undum.game.situations.s33 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("Unbidden and overwhelmingly, a hatred surges up in you. All the frustration of years of oppression, all the anger of submitting for years to your parents and society,  gushes forth and you find yourself shaking with rage, out of control.") +
        vorple.html.p("Before you can even think twice, you lean over, and plunge the dagger into his heart.") +
        vorple.html.p("Over and over, you plunge in the blade. And then, as he breathes his last, you realize just what you have done. The horror of the act hits you and you back away, dropping the dagger.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s34", "Hours passs by...")),
                                {classes: "options"}));
    },
});

undum.game.situations.s34 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("It is some hours later. There is silence in the room. Not even snores interrupt the peace anymore. Your mind is blank, the panic and horror having fought each other and subsided into numbness again.") + 
        vorple.html.p("And then you hear a soft chiming. The windchime tingles in a breeze from the open window.") + 
        vorple.html.p("A way out.") + 
        vorple.html.p("But you are three floors up.") + 
        vorple.html.p("You probably couldn’t get far, even if you did survive the fall.") + 
        vorple.html.p("But what option is left to you anyway? Nothing. And anything would be better than staying here.") + 
        vorple.html.p("You take deep breaths. Then you change into a lighter suit, pack your lightest bag with essentials and as much money as you can find.") + 
        vorple.html.p("And then, one more time…you open the window, and take your life into your own hands...") + 
        vorple.html.tag("center", vorple.html.tag("h2", (vorple.html.link("credits", "The End")))));
    },
});

undum.game.situations.s35 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("As the life weeps out of you, you feel a great peace, and you know you’ve made the right decision. Or maybe it’s just the weakness from the blood loss. Carefully laying the dagger to one side, you lay back and look up at the ceiling. And you give yourself up to the peace, the feeling of impending freedom, from all pain, from all suffering.") + 
        vorple.html.tag("center", vorple.html.tag("h2", (vorple.html.link("credits", "The End")))));
    },
});

undum.game.situations.s36 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.tag("h3", "One year later") +
        vorple.html.p("If hell exists, you think, it is not so different from the life you lead right now.") + 
        vorple.html.p("There is no escape. Every night you are forced to submit to him against your will. Even now, even though you are pregnant, and terrified that the baby may be hurt somehow. The man has an appetite. You’re the food.") + 
        vorple.html.p("You do not have to work. But you have to supervise, and if anything is done incorrectly, you’re blamed. You used to think your mother’s slaps were hard. But they are nothing compared to being beaten by this man.") + 
        vorple.html.p("And there is no way out. An army of servants accompany you even on the rare occasions you are allowed out to shop.") + 
        vorple.html.p("You no longer have courage or spirit left. You only wish to die, when the baby has been delivered. You’ve heard of women dying in childbirth, and now every waking moment you pray this to be your fate.") + 
        vorple.html.p("Maybe you’ll be lucky.") + 
        vorple.html.tag("center", vorple.html.tag("h2", (vorple.html.link("credits", "The End")))));
    },
});


undum.game.situations.s37 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("There are oases even in deserts, after all.") +
        vorple.html.p("It has been three years since you joined this household, although it seems like a lifetime. A lifetime of plotting, scheming, getting into the servant’s brains and your husband’s confidence, creating loyalties in the vast house, arranging your time so that you can do all your housework and yet find time for yourself, your studies.") +
        vorple.html.p("And your books.") +
        vorple.html.p("For the benefit of being a rich landholder’s second wife is that you can have pretty much what you want if you’re clever, and in a far away corner of the house you have begun building your little paradise in hell – a library.") +
        vorple.html.p("And though your husband’s temper is fierce, and his nightly rapes hard to bear, you are thirty years younger than him and thirty times smarter.") +
        vorple.html.p("The nightmare will not last forever. He will die. But you will remain, and this is what you’re preparing for. Once he’s gone you can finally raise yourself and be independent. You can work to free other women like you. You can, finally, live your own life.") +
        vorple.html.p("It is only a matter of time.") +
        vorple.html.tag("center", vorple.html.tag("h2", (vorple.html.link("credits", "The End")))));
    },
});

undum.game.situations.credits = new undum.SimpleSituation(vorple.html.tag("h3", "Credits:") + 
vorple.html.p( vorple.html.tag("center", vorple.html.tag("strong", "Programmer\t") + vorple.html.tag("emph", "Ali Sajid Imami"))) +
vorple.html.p( vorple.html.tag("center", vorple.html.tag("strong", "Writer\t") + vorple.html.tag("emph", "Shumaila Hashmi"))) +
vorple.html.p( vorple.html.tag("center", vorple.html.tag("strong", "Illustrator\t") + vorple.html.tag("emph", "Sana Ahmad"))) +
vorple.html.p( vorple.html.tag("center", vorple.html.tag("strong", "Project Coordinator\t") + vorple.html.tag("emph", "Urooj Shuja'at Ali Janjua"))) +
vorple.html.p( vorple.html.tag("center", vorple.html.tag("strong", "Outreach Coordinator\t") + vorple.html.tag("emph", "Awais Ali"))) +
vorple.html.p( vorple.html.tag("center", vorple.html.tag("strong", "Content Review and Editing\t") + vorple.html.tag("emph", "Nyda Ahmad"))) +
vorple.html.p( vorple.html.tag("center", "Thank you all for playing this adventure." ))
);

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    vorple.core.init( system );
    system.setCharacterText(vorple.html.p("You don't know who you are"));
    character.sandbox.mainChoice = "";
};
