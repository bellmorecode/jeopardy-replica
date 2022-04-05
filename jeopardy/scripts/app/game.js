/// <reference path="../jquery-3.5.0.min.js" />
var __gamedata = {
    "jeopardy": {
        "categories": ["Presidents", "US States", "Bodies of water", "Cities of Europe", "Cities of S.A.", "Sesame St. colors"],
        "clues": [
            {
                "categoryIndex": 0,
                "categoryHint": "Name the US President",
                "answerKey": [
                    {
                        "level": 1,
                        "clue": {
                            "text": "Our first president",
                            "answer": [
                                "George Washington"
                            ]
                        }
                    },
                    {
                        "level": 2,
                        "clue": {
                            "text": "One of the presidents whose initials are \"J.M.\"",
                            "answer": [
                                "James Madison",
                                "John Monroe"
                            ]
                        }
                    },
                    {
                        "level": 3,
                        "clue": {
                            "text": "two sets of fathers and sons have been president.  Name any one of them",
                            "answer": [
                                "John Adams",
                                "John Quincy Adams",
                                "George Bush",
                                "George W. Bush"
                            ]
                        }
                    },
                    {
                        "level": 4,
                        "clue": {
                            "text": "Oldest ever elected",
                            "answer": "Donald Trump"
                        }
                    },
                    {
                        "level": 5,
                        "clue": {
                            "text": "Only president born in New Jersey",
                            "answer": "Grover Cleveland"
                        }
                    },
                    {
                        "level": 6,
                        "clue": {
                            "text": "Only president born in Kentucky",
                            "answer": "Abraham Lincoln"
                        }
                    }
                ]
            },
            {
                "categoryIndex": 1,
                "categoryHint": "Name the state described in the clue",
                "answerKey": [
                    {
                        "level": 1,
                        "clue": {
                            "text": "Last state alphabetically",
                            "answer": ["Wyoming"]
                        }
                    },
                    {
                        "level": 2,
                        "clue": {
                            "text": "State with the lowest population",
                            "answer": ["Wyoming"]
                        }
                    },
                    {
                        "level": 3,
                        "clue": {
                            "text": "1 of the 4 states that begin with the letter 'I'",
                            "answer": ["Indiana", "Iowa", "Illinois", "Idaho"]
                        }
                    },
                    {
                        "level": 4,
                        "clue": {
                            "text": "A state that borders the Mississippi river.",
                            "answer": ["Louisiana", "Arkansas", "Mississippi", "Tennessee", "Missouri", "Illonois"]
                        }
                    },
                    {
                        "level": 5,
                        "clue": {
                            "text": "Largest state by Area",
                            "answer": ["Alaska"]
                        }
                    },
                    {
                        "level": 6,
                        "clue": {
                            "text": "Name one of the 15 states where the abbreviation is the first and last letter of the state name",
                            "answer": [
                                "California",
                                "Pennsylvania",
                                "Georgia",
                                "Virginia",
                                "Maryland",
                                "Colorado",
                                "Kentucky",
                                "Louisiana",
                                "Connecticut",
                                "Iowa",
                                "Kansas",
                                "Hawaii",
                                "Maine",
                                "Delaware",
                                "Vermont"
                            ]
                        }
                    }
                ]
            },
            {
                "categoryIndex": 2,
                "categoryHint": "Name the body of water",
                "answerKey": [
                    {
                        "level": 1,
                        "clue": {
                            "text": "Largest lake in the United States, 2nd largest in the world",
                            "answer": ["Lake Superior"]
                        }
                    },
                    {
                        "level": 2,
                        "clue": {
                            "text": "Largest lake in the world",
                            "answer": ["Caspian Sea"]
                        }
                    },
                    {
                        "level": 3,
                        "clue": {
                            "text": "Longest River",
                            "answer": ["Nile"]
                        }
                    },
                    {
                        "level": 4,
                        "clue": {
                            "text": "name of the waterway between Morocco and Spain",
                            "answer": ["Strait of Gibraltar"]
                        }
                    },
                    {
                        "level": 5,
                        "clue": {
                            "text": "man made passage that connects the Meriditerranean Sea to the Red Sea",
                            "answer": ["Suez Canal"]
                        }
                    },
                    {
                        "level": 6,
                        "clue": {
                            "text": "name of the sea that is south of China",
                            "answer": ["South China Sea"]
                        }
                    }
                ]
            },
            {
                "categoryIndex": 3,
                "categoryHint": "We name the city, you name the country",
                "answerKey": [
                    {
                        "level": 1,
                        "clue": {
                            "text": "Vienna",
                            "answer": ["Austria"]
                        }
                    },
                    {
                        "level": 2,
                        "clue": {
                            "text": "Rome",
                            "answer": ["Italy"]
                        }
                    },
                    {
                        "level": 3,
                        "clue": {
                            "text": "Sarajevo",
                            "answer": ["Bosnia", "Herzegovina"]
                        }
                    },
                    {
                        "level": 4,
                        "clue": {
                            "text": "Seville",
                            "answer": ["Spain"]
                        }
                    },
                    {
                        "level": 5,
                        "clue": {
                            "text": "Cologne, 2 of the 3",
                            "answer": ["Germany", "France", "Italy"],
                            "required_responses": 2
                        }
                    },
                    {
                        "level": 6,
                        "clue": {
                            "text": "Antwerp",
                            "answer": ["Brussels"]
                        }
                    }
                ]
            },
            {
                "categoryIndex": 4,
                "categoryHint": "We name the city, you name the country",
                "answerKey": [
                    {
                        "level": 1,
                        "clue": {
                            "text": "Lima",
                            "answer": ["Peru"]
                        }
                    },
                    {
                        "level": 2,
                        "clue": {
                            "text": "Sao Paulo",
                            "answer": ["Brazil"]
                        }
                    },
                    {
                        "level": 3,
                        "clue": {
                            "text": "Caracas",
                            "answer": ["Venezuela"]
                        }
                    },
                    {
                        "level": 4,
                        "clue": {
                            "text": "Bogota",
                            "answer": ["Colombia"]
                        }
                    },
                    {
                        "level": 5,
                        "clue": {
                            "text": "Santiago",
                            "answer": ["Chile"]
                        }
                    },
                    {
                        "level": 6,
                        "clue": {
                            "text": "Guayaquil",
                            "answer": ["Ecuador"]
                        }
                    }
                ]
            },
            {
                "categoryIndex": 5,
                "categoryHint": "What character is most associated this color?",
                "answerKey": [
                    {
                        "level": 1,
                        "clue": {
                            "text": "yellow",
                            "answer": ["Big Bird"]
                        }
                    },
                    {
                        "level": 2,
                        "clue": {
                            "text": "blue",
                            "answer": ["Grover", "Cookie Monster"]
                        }
                    },
                    {
                        "level": 3,
                        "clue": {
                            "text": "green",
                            "answer": ["Oscar", "Oscar the Grouch"]
                        }
                    },
                    {
                        "level": 4,
                        "clue": {
                            "text": "red",
                            "answer": ["Elmo"]
                        }
                    },
                    {
                        "level": 5,
                        "clue": {
                            "text": "purple",
                            "answer": ["The Count", "Count"]
                        }
                    },
                    {
                        "level": 6,
                        "clue": {
                            "text": "Orange and Yellow (2 puppets)",
                            "answer": ["Ernie", "Bert", "Ernie and Bert", "Ernie & Bert", "Bert & Ernie", "Bert and Ernie"]
                        }
                    }
                ]
            }
        ]
    },
    "double_jeopardy": {
        "categories": ["Bravo Abbrev", "", "", "", "", ""],
        "clues": [
            {
                "categoryIndex": 0,
                "categoryHint": "We give you the initials for the show, you give us the title.",
                "answerKey": [
                    {
                        "level": 1,
                        "clue": {
                            "text": "RHONY",
                            "answer": ["The Real Housewives of New York"]
                        }
                    },
                    {
                        "level": 2,
                        "clue": {
                            "text": "WWHL",
                            "answer": ["Watch what happens LIVE!"]
                        }
                    },
                    {
                        "level": 3,
                        "clue": {
                            "text": "MDLLA",
                            "answer": ["Million Dollar Listing Los Angeles"]
                        }
                    },
                    {
                        "level": 4,
                        "clue": {
                            "text": "VR",
                            "answer": ["Vanderpump Rules"]
                        }
                    },
                    {
                        "level": 5,
                        "clue": {
                            "text": "SOS",
                            "answer": ["Shahs of Sunset"]
                        }
                    },
                    {
                        "level": 6,
                        "clue": {
                            "text": "LCK",
                            "answer": ["Last Chance Kitchen"]
                        }
                    }
                ]
            },
            {
                "categoryIndex": 1,
                "categoryHint": "Planets",
                "answerKey": [
                    {
                        "level": 1,
                        "clue": {
                            "text": "where we live",
                            "answer": ["Earth"]
                        }
                    },
                    {
                        "level": 2,
                        "clue": {
                            "text": "Closest planet to the Sun",
                            "answer": ["Mercury"]
                        }
                    },
                    {
                        "level": 3,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    },
                    {
                        "level": 4,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    },
                    {
                        "level": 5,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    },
                    {
                        "level": 6,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    }
                ]
            },
            {
                "categoryIndex": 2,
                "answerKey": [
                    {
                        "level": 1,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    },
                    {
                        "level": 2,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    },
                    {
                        "level": 3,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    },
                    {
                        "level": 4,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    },
                    {
                        "level": 5,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    },
                    {
                        "level": 6,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    }
                ]
            },
            {
                "categoryIndex": 3,
                "answerKey": [
                    {
                        "level": 1,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    },
                    {
                        "level": 2,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    },
                    {
                        "level": 3,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    },
                    {
                        "level": 4,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    },
                    {
                        "level": 5,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    },
                    {
                        "level": 6,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    }
                ]
            },
            {
                "categoryIndex": 4,
                "answerKey": [
                    {
                        "level": 1,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    },
                    {
                        "level": 2,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    },
                    {
                        "level": 3,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    },
                    {
                        "level": 4,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    },
                    {
                        "level": 5,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    },
                    {
                        "level": 6,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    }
                ]
            },
            {
                "categoryIndex": 5,
                "answerKey": [
                    {
                        "level": 1,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    },
                    {
                        "level": 2,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    },
                    {
                        "level": 3,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    },
                    {
                        "level": 4,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    },
                    {
                        "level": 5,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    },
                    {
                        "level": 6,
                        "clue": {
                            "text": "",
                            "answer": [""]
                        }
                    }
                ]
            }
        ]
    }
};
var GameController = {
    current_round: __gamedata.jeopardy,
    cluesRemaining: 30,
    setupEventHandlers : function () {
        // handler to close clue pop-up
        $(".clue-popup .close-button").on("click", function () {
            window.clearTimeout(GameController.__timeoutId);
            $(".clue-popup").hide();
        });

        // load clue on click.
        $(".clue").on("click", function () {
            var className = $(this).prop("class").toString();
            if (className.indexOf("used") > -1) return; // no clue replay
            var clue_target = className.replace(" clue", "");
            var indicies = clue_target.replace("level_", "");
            var parts = indicies.split('_');
            var level_id = parts[0];
            var cat_index = parseInt(parts[1]) - 1;

//            var clue_data = GameController.current_round.clues.filter((cat) => cat.categoryIndex == cat_index)[0].answerKey.filter((clue) => clue.level === level_id)[0];
  //          clue_data.clue["category"] = GameController.current_round.categories[cat_index];
    //        clue_data.clue["hint"] = cat_data.categoryHint;
      //      GameController.ShowClue(className, clue_data.clue);

            // TODO: improve this to remove for loops
             for (var x = 0; GameController.current_round.clues.length; x++) {
                 var cat_data = GameController.current_round.clues[x];
                 if (cat_data.categoryIndex == cat_index) {
                     // find clue in category_dataset
                     for (var y = 0; y < cat_data.answerKey.length; y++) {
                         var clue_data = cat_data.answerKey[y];
                         if (clue_data.level == level_id) {
                             clue_data.clue["category"] = GameController.current_round.categories[cat_index];
                             clue_data.clue["hint"] = cat_data.categoryHint;
                             GameController.ShowClue(className, clue_data.clue);
                             return;
                         }
                     }
                 }
             }
        });

        // submit answer click
        $(".clue-popup .clue-response button").on("click", function () {
            $(this).prop("disabled", true);
            $(".clue-popup .clue-response button").css("background-color", "darkgray");
            $(".clue-answer").show();
            if ($(".clue-popup .clue-mask .clue-answer").text() == $(".clue-popup .clue-mask .clue-response-text").val()) {
                $(".clue-popup .clue-mask .clue-response-text").css("background-color", "green");              
            }
            $(GameController.lastCellSelected).addClass("used");
            GameController.__timeoutId = window.setTimeout(function () { $(".clue-popup").hide(); }, 7000);
        });
    },
    loadRound: function (round_num) {
        // category titles
        GameController.cluesRemaining = 30; // reset to 30 left. 5 x 6 

        if (round_num === 2) {
            GameController.current_round = __gamedata.double_jeopardy;
        }

        // show category titles
        for (var q = 0; q < GameController.current_round.categories.length; q++) {
            var title_index = q + 1;
            var element_selector = ".title.title_" + title_index.toString();
            var cat_title = GameController.current_round.categories[q];
            $(element_selector).html(cat_title);
        }

        // TODO: remove 'used' flag from all clues. 

        if (round_num === 1) {
            GameController.setupEventHandlers();
        }
    },
    __timeoutId : 0,
    ShowClue: function (el, data) {

        var el_selector = ("." + el).replace(" ", ".");

        GameController.lastCellSelected = el_selector;

        var clue_element = $(el_selector);
        var dollar_amount = clue_element.text();
        $(".clue-popup .clue-response button").prop("disabled", false);
        $(".clue-popup .clue-response button").css("background-color", "darkblue");

        $(".clue-answer").hide();
        $(".clue-popup .clue-mask .clue-response-text").css("background-color", "white");              

        $(".clue-popup .clue-mask .clue-title").text(data.category);
        $(".clue-popup .clue-mask .clue-hint").text(data.hint);
        $(".clue-popup .clue-mask .clue-amount").text(dollar_amount);
        $(".clue-popup .clue-mask .clue-text").text(data.text);
        $(".clue-popup .clue-mask .clue-answer").text(data.answer);

        $(".clue-popup .clue-mask .clue-response-text").val("");

        $(".clue-popup").show();
    }, 
    lastCellSelected : ""
};
