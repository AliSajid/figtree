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
        vorple.html.p("You are daydreaming, looking out at the mountains with eyes unseeing of their beauty, when the doorbell rings.") +
        vorple.html.p("And then you realise who it must be. ") +
        vorple.html.p("You jump up from the sofa and heedless of your mother's edicts about demure carriage, " + vorple.html.link("./staircase","run down the wide staircase") + " and fling open the door, barely seconds after the person standing there has removed her finger from the doorbell.") +
        vorple.html.p("It's Samina!") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s02", "Greet her enthusiastically")) +
                                vorple.html.tag("li", vorple.html.link("s03", "Greet her shyly")),
                                {classes: "options"}));
    },
});

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
        system.write( vorple.html.p(vorple.html.quote("Oh but Samina, I don’t think Abbu will let me…") + "the disappointment creeps into your voice, as you realize how close and yet so far your dreams are.")) +
        vorple.html.p("Samina reaches out to pat your hand reassuringly, her cheerful nature exerting itself." + vorple.html.quote("Don’t worry, I’m sure-")) +
        vorple.html.p("The doorbell rings again.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s17", "You go and see who's at the door.")),
                                {classes: "options"}));
    },
});

undum.game.situations.s07 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p(vorple.html.quote("SAMINA! That is wonderful news! I am so happy for you. And I am definitely going to try to convince Abbu. Oh Samina, if we could both teach together in the same school we learnt together, how much fun would that be!")) +
        vorple.html.p(vorple.html.quote("Yes! Let’s make a plan. You ought to come over to my place tomorrow and we can figure out a way to convince Uncle. I’ll send Hashim over in the car to get you.")) +
        vorple.html.p(vorple.html.quote("Hashim is here?")) +
        vorple.html.p(vorple.html.quote("Yes, silly! He came back with us. Anyway forget him. I want to show you the gifts I brought for you! But for now, I have some more gossip for your innocent ears…")) +
        vorple.html.p("Both of you excitedly gossip more, as the evening draws on, hope alight in both your hearts.")) +
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
        system.write( vorple.html.p("Hashim laughs, as you mumble something." vorple.html.quote("Still the shy Areesha. You should come to the city.  Two weeks there and you’ll be talking like a parrot.")) +
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
                                vorple.html.tag("li", vorple.html.link("s19", "Scene 19")) +
                                vorple.html.tag("li", vorple.html.link("s28", "Scene 28")),
                                {classes: "options"}));
        else if (character.sandbox.mainChoice == "thirteen")
                system.write(vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s19", "Scene 19")) +
                                vorple.html.tag("li", vorple.html.link("s20", "Scene 20")),
                                {classes: "options"}));
        else
                system.write(vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s19", "Scene 19")) +
                                vorple.html.tag("li", vorple.html.link("s31", "Scene 31")),
                                {classes: "options"}));
    },
});

undum.game.situations.s19 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name."));
        // Conditional clause. If variable is "sixteen", link to 28. If it is "thirteen", link to 20. Else, link to 31.
        if (character.sandbox.mainChoice == "sixteen")
                system.write(vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s28", "Scene 28")),
                                {classes: "options"}));
        else if (character.sandbox.mainChoice == "thirteen")
                system.write(vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s20", "Scene 20")),
                                {classes: "options"}));
        else
                system.write(vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s31", "Scene 31")),
                                {classes: "options"}));
    },
});

undum.game.situations.s20 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s21", "Scene 21")) +
                                vorple.html.tag("li", vorple.html.link("s23", "Scene 23")) +
                                vorple.html.tag("li",vorple.html.link("s22", "Scene 22")),
                                {classes: "options"}));
    },
});

undum.game.situations.s21 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s31", "Scene 31")),
                                {classes: "options"}));
    },
});

undum.game.situations.s22 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s31", "Scene 31")),
                                {classes: "options"}));
    },
});

undum.game.situations.s23 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s24", "Scene 24")) +
                                vorple.html.tag("li", vorple.html.link("s25", "Scene 25")),
                                {classes: "options"}));
    },
});

undum.game.situations.s24 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name."));
    },
});

undum.game.situations.s25 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s26", "Scene 26")),
                                {classes: "options"}));
    },
});

undum.game.situations.s26 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name."));
    },
});

undum.game.situations.s28 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s29", "Scene 29")) +
                                vorple.html.tag("li", vorple.html.link("s30", "Scene 30")),
                                {classes: "options"}));
    },
});

undum.game.situations.s29 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name."));
    },
});

undum.game.situations.s30 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name."));
    },
});

undum.game.situations.s31 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s32", "Scene 32")) +
                                vorple.html.tag("li", vorple.html.link("s36", "Scene 36")) +
                                vorple.html.tag("li",vorple.html.link("s37", "Scene 37")),
                                {classes: "options"}));
    },
});

undum.game.situations.s32 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s33", "Scene 33")) +
                                vorple.html.tag("li", vorple.html.link("s35", "Scene 35")),
                                {classes: "options"}));
    },
});

undum.game.situations.s33 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s34", "Scene 34")),
                                {classes: "options"}));
    },
});

undum.game.situations.s34 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name."));
    },
});

undum.game.situations.s35 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name."));
    },
});

undum.game.situations.s36 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name."));
    },
});


undum.game.situations.s37 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name."));
    },
});

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
