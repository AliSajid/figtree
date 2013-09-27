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
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s02", "Scene 2")) +
                                vorple.html.tag("li", vorple.html.link("s03", "Scene 3")),
                                {classes: "options"}));
    },
});

undum.game.situations.s02 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s05", "Scene 5")),
                                {classes: "options"}));
    },
});

undum.game.situations.s03 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s04", "Scene 4")),
                                {classes: "options"}));
    },
});

undum.game.situations.s04 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s17", "Scene 17")),
                                {classes: "options"}));
    },
});

undum.game.situations.s05 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s06", "Scene 6")) +
                                vorple.html.tag("li", vorple.html.link("s07", "Scene 7")),
                                {classes: "options"}));
    },
});

undum.game.situations.s06 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s17", "Scene 17")),
                                {classes: "options"}));
    },
});

undum.game.situations.s07 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s08", "Scene 8")),
                                {classes: "options"}));
    },
});

undum.game.situations.s08 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s09", "Scene 9")),
                                {classes: "options"}));
    },
});

undum.game.situations.s09 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s10", "Scene 10")) +
                                vorple.html.tag("li", vorple.html.link("s11", "Scene 11")),
                                {classes: "options"}));
    },
});

undum.game.situations.s10 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s14", "Scene 14")),
                                {classes: "options"}));
    },
});

undum.game.situations.s11 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s12", "Scene 12")),
                                {classes: "options"}));
    },
});

undum.game.situations.s12 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s13", "Scene 13")),
                                {classes: "options"}));
    },
});

undum.game.situations.s13 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s17", "Scene 17")),
                                {classes: "options"}));
    },
});

undum.game.situations.s14 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s15", "Scene 15")) +
                                vorple.html.tag("li", vorple.html.link("s16", "Scene 16")),
                                {classes: "options"}));
    },
});

undum.game.situations.s15 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s17", "Scene 17")),
                                {classes: "options"}));
    },
});

undum.game.situations.s16 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
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
        
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name.") +
                vorple.html.tag("ul",
                                vorple.html.tag("li", vorple.html.link("s18", "Scene 18")),
                                {classes: "options"}));
    },
    // TODO: There is a conditional clause. If the from is 16, then you set the variable as "sixteen", if it's 13, then you set it as "thirteen"
});

undum.game.situations.s18 = new undum.Situation({
    enter: function( character, system, from ) {
        system.write( vorple.html.p("You have had the misfortune to be born here. You were born here under circumstance that made you susceptible to your current situation. You see, you are dead now. And it's really your fault. Yes. Really. You were born in the wrong family. You had the wrong name. You had the wrong upbringing and thus you adeserved what happened to you. Your mind wanders off, trying to remember stuff that happened in another life time. It's hard. You can barely make out your own name."));
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
