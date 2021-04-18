const fakeDB = {

    items : [
        {
            id:01,
            title:'Greenland',
            synopsis: "A family fights for survival as a planet-killing comet races to Earth. John Garrity (Gerard Butler), his estranged wife Allison (Morena Baccarin), and young son Nathan make a perilous journey to their only hope for sanctuary. Amid terrifying news accounts of cities around the world being leveled by the comet's fragments, the Garrity's experience the best and worst in humanity while they battle the increasing panic and lawlessness surrounding them. As the countdown to global apocalypse approaches zero, their incredible trek culminates in a desperate and last-minute flight to a possible safe haven.",
            s_image:'Greenland_S',
            l_image:'Greenland_L',
		    stars: 4,
            rent:5.99,
            purchase:19.99,
            featured: true,
            gerne: ['Action', 'Crime & Thrillers'],
	        date: 2020,
            length: 120,
            rating: 'PG-13',
            studio: 'STX Entertainment',
            language: 'English',
            score: 79,
	        UHD: '4K, HDR10, Dolby Digital Plus 5.1',
            HDX: '1080p, Dolby Digital Plus 5.1',
            SD: '480p, Enhanced Widescreen, Dolby Digital Plus 5.1',
            CC: 'English'
	        
		

        },

        {
            id: 02,
            title: 'Tenet',
            synopsis: "Armed with only one word--Tenet-- and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
            s_image: 'Tenet_S',
            l_image: 'Tenet_L',
		    stars: 4,
            rent: 5.99,
            purchase: 19.99,
            featured: true,
            gerne: ['Action', 'Crime & Thrillers'],
	        date: 2020,
            length: 150,
            rating: 'PG-13',
            studio: 'Warner Bros.',
            language: 'English',
            score: 70,
		    UHD: '4K, Dolby Vision, HDR10, Dolby Digital Plus 5.1',
            HDX: '1080p, Dolby Digital Plus 5.1',
            SD: '480p, Enhanced Widescreen, Dolby Digital Plus 5.1',
            CC: 'English'
        },

        {
            id: 03,
            title: 'The Croods: A New Age',
            synopsis: 'In search of a new home, the Croods encounter the more sophisticated Betterman family. A new threat forces the two families to set aside their differences to avoid extinction.',
            s_image: 'The_Croods_A_New_Age_S',
            l_image: 'The_Croods_A_New_Age_L',
		    stars: 5,
            rent: 5.99,
            purchase: 19.99,
            featured: true,
            gerne: ['Adventure', 'Animation'],
	        date: 2020,
            length: 95,
            rating: 'PG',
            studio: 'Universal Studios',
            language: 'English',
            score: 77,
		    UHD: '4K, Dolby Vision, HDR10, Dolby Atmos',
            HDX: '1080p, Dolby Digital Plus 5.1',
            SD: '480p, Enhanced Widescreen, Dolby Digital Plus 5.1',
            CC: 'English'

        },

        {
            id: 04,
            title: 'The Croods',
            synopsis: 'Join the Croods on the journey of a lifetime in this epic comedy-adventure. When their cave is destroyed, the Croods set out to explore a spectacular landscape filled with fantastic creatures, strange surprises, and a whole new world of adventure.',
            s_image: 'The_Croods_S',
            l_image: 'The_Croods_L',
		    stars: 5,
            rent: 3.99,
            purchase: 14.99,
            featured: true,
            gerne: ['Adventure', 'Animation'],
	        date: 2013,
            length: 99,
            rating: 'PG',
            studio: 'DreamWorks Animation',
            language: 'English',
            score: 72,
		    UHD: '4K, HDR10, Dolby Digital Plus 5.1',
            HDX: '1080p, Dolby Digital Plus 5.1',
            SD: '480p, Enhanced Widescreen, Dolby Digital Plus 5.1',
            CC: 'English'
        },

        {
            id: 05,
            title: 'Honest Thief',
            synopsis: 'A bank robber meets the love his life who works at the front desk of a storage facility where he hid $7 million in stolen loot.',
            s_image: 'Honest_Thief_S',
            l_image: 'Honest_Thief_L',
		    stars: 4,
            rent: 5.99,
            purchase: 14.99,
            featured: true,
            gerne: ['Action', 'Crime & Thrillers'],
            date: 2020,
            length: 99,
            rating: 'PG-13',
            studio: 'Universal Studios',
            language: 'English',
            score: 39,
		    UHD: false,
            HDX: '1080p, Dolby Digital Plus 5.1',
            SD: '480p, Enhanced Widescreen, Dolby Digital Plus 5.1',
            CC: 'English'
        },

        {
            id: 06,
            title: 'Buddy Games',
            synopsis: 'Josh Duhamel (Transformers) stars as the leader of a group of lifelong friends who reunite for the ultimate bro-fest contest in this star-studded comedy with Dax Shepard (CHiPs), Olivia Munn (Office Christmas Party) and Kevin Dillon ("Entourage").',
            s_image: 'Buddy_Games_S',
            l_image: 'Buddy_Games_L',
		    stars: 4,
            rent: 2.99,
            purchase: 12.99,
            featured: false,
            gerne: ['Comedy', 'Special Interest'],
            date: 2020,
            length: 97,
            rating: 'R',
            studio: 'Paramount Pictures',
            language: 'English',
            score: 17,
		    UHD: false,
            HDX: '1080p, Dolby Digital Plus 5.1',
            SD: '480p, Enhanced Widescreen, Dolby Digital Plus 5.1',
            CC: 'English'
        },

        {
            id: 07,
            title: 'The New Mutants',
            synopsis: "In this terrifying, action-filled film based on the MARVEL comic series, five young people who demonstrate special powers are forced to undergo treatment at a secret institution -- allegedly to cure them of the dangers of their powers. But it's soon clear that their containment is part of a much bigger battle between the forces of good and evil.",
            s_image: 'The_New_Mutants_S',
            l_image: 'The_New_Mutants_L',
		    stars: 4,
            rent: 5.99,
            purchase: 19.99,
            featured: true,
            gerne: ['Action', 'Sci-Fi'],
            date: 2020,
            length: 97,
            rating: 'PG-13',
            studio: '20th Century Fox',
            language: 'English',
            score: 35,
		    UHD: '4K, Dolby Vision, HDR10, Dolby Atmos',
            HDX: '1080p, Dolby Digital Plus 5.1',
            SD: '480p, Enhanced Widescreen, Dolby Digital Plus 5.1',
            CC: 'English'

        },

        {
            id: 08,
            title: 'The Silence of the Lambs',
            synopsis: 'An FBI trainee is assigned by her superior to interview an imprisoned, cannibalistic psychopath, Hannibal "the Cannibal" Lecter, in the hope that he may help uncover the identity of an elusive serial killer.',
            s_image: 'The_Silence_of_the_Lambs_S',
            l_image: 'The_Silence_of_the_Lambs_L',
		    stars: 5,
            rent: 3.99,
            purchase: 14.99,
            featured: false,
            gerne: ['Crime & Thrillers', 'Special Interest'],
            date: 1991,
            length: 119,
            rating: 'R',
            studio: 'MGM',
            language: 'English',
            score: 96,
		    UHD: '4K, Dolby Vision, HDR10, Dolby Digital Plus 5.1',
            HDX: '1080p, Dolby Digital Plus 5.1',
            SD: '480p, Enhanced Widescreen, Dolby Digital Plus 5.1',
            CC: 'English'
        },


        {
            id: 09,
            title: 'The Empty Man',
            synopsis: 'This supernatural horror film, drawn from the Boom! Studios graphic novel, centers on shocking events originating in a small Midwestern town. After the mysterious disappearance of a group of teenagers, James Lasombra (James Badge Dale), a troubled retired cop, is thrust into action to investigate. Following leads that may tie a secretive occult-minded group to a terrifying local legend, he soon realizes that his life -- and the lives of those close to him -- are in terrible danger.',
            s_image: 'The_Empty_Man_S',
            l_image: 'The_Empty_Man_L',
		    stars: 3,
            rent: 5.99,
            purchase: 7.99,
            featured: true,
            gerne: ['Crime & Thrillers', 'Horror'],
            date: 2012,
            length: 137,
            rating: 'R',
            studio: 'Walt Disney Studios',
            language: 'English',
            score: 42,
		    UHD: '4K, Dolby Vision, HDR10, Dolby Digital Plus 5.1',
            HDX: '1080p, Dolby Digital Plus 5.1',
            SD: '480p, Enhanced Widescreen, Dolby Digital Plus 5.1',
            CC: 'English'
        },

        {
            id: 10,
            title: 'Titanic',
            synopsis: 'Leonardo DiCaprio and Kate Winslet light up the screen as Jack and Rose, the young lovers who find one another on the maiden voyage of the "unsinkable" R.M.S. Titanic. But when the doomed luxury liner collides with an iceberg in the frigid North Atlantic, their passionate love affair becomes a thrilling race for survival.',
            s_image: 'Titanic_S',
            l_image: 'Titanic_L',
		    stars: 5,
            rent: 2.99,
            purchase: 14.99,
            featured: false,
            gerne: ['Drama', 'Romance'],
            date: 1997,
            length: 195,
            rating: 'PG-13',
            studio: 'Paramount Pictures',
            language: 'English',
            score: 89,
		    UHD: false,
            HDX: '1080p, Dolby Digital Plus 5.1',
            SD: '480p, Enhanced Widescreen, Dolby Digital Plus Stereo',
            CC: 'English'
        },

        {
            id: 11,
            title: 'Game of Thrones: Season 1',
            synopsis: "Get in the 'Game'! Experience the first season of this visionary HBO series set in a mythical world whose inhabitants vie for control of the Iron Throne. But in a land where seasons can last a lifetime, winter is coming...and an ancient evil has awakened.",
            s_image: 'Game_of_Thrones_Season_1_S',
            l_image: 'Game_of_Thrones_Season_1_L',
		    stars: 5,
            rent:  2.99,
            purchase: 24.99,
            featured: true,
            gerne: ['Adventure', 'Drama'],
	        date: 2011,
            length: '10 Episodes',
            rating: 'TV-MA',
            studio: 'HBO',
            language: 'English',
            score: false,
		    UHD: false,
            HDX: '1080p',
            SD: '480p, Fullscreen',
            CC: false

        },


        {
            id: 12,
            title: 'Once Upon a Time: Season 1',
            synopsis: "Emma Swan wonders if the residents of Storybrooke, Maine are somehow actual characters from legendary children's tales. Parallel worlds unravel in this modern take on classic fables where a curse has trapped famed storybook characters in our world.",
            s_image: 'Once_Upon_a_Time_Season_1_S',
            l_image: 'Once_Upon_a_Time_Season_1_L',
		    stars: 5,
            rent: 1.99,
            purchase: 14.99,
            featured: false,
            gerne: ['Adventure', 'Drama'],
	        date: 2011,
            length: '22 Episodes',
            rating: 'TV-PG',
            studio: 'ABC',
            language: 'English',
            score: false,
		    UHD: false,
            HDX: '1080p',
            SD: '480p, Fullscreen',
            CC: false
        },

        {
            id: 13,
            title: 'Fringe: Season 1',
            synopsis: 'The first electrifying season of FRINGE follows an unlikely trio who uncover a deadly mystery that may be part of a larger and more disturbing pattern that lives somewhere between science fiction and reality.',
            s_image: 'Fringe_Season_1_S',
            l_image: 'Fringe_Season_1_L',
		    stars: 5,
            rent: 3.99,
            purchase: 24.99,
            featured: true,
            gerne: ['Horror', 'Sci-Fi'],
	        date: 2008,
            length: '20 Episodes',
            rating: 'TV-14',
            studio: 'FOX',
            language: 'English',
            score: false,
		    UHD: false,
		    HDX: '1080p',
            SD: '480p, Fullscreen',
            CC: false
        },

        {
            id: 14,
            title: 'Person of Interest: Season 1',
            synopsis: "Jim Caviezel (The Thin Red Line), Michael Emerson (Lost) and Taraji P. Henson (Hustle & Flow) team up in this thought-provoking crime action drama from The Dark Knight's Jonathan Nolan and J.J. Abrams' Bad Robot Productions (Fringe, Lost, Alias). Set in New York City, this procedural centers on an ex-CIA agent, presumed dead, who partners with a mysterious billionaire to prevent violent crimes.",
            s_image: 'Person_of_Interest_Season_1_S',
            l_image: 'Person_of_Interest_Season_1_L',
		    stars: 5,
            rent: 3.99,
            purchase: 24.99,
            featured: false,
            gerne: ['Action', 'Crime & Thrillers'],
	        date: 2011,
            length: '23 Episodes',
            rating: 'TV-14',
            studio: 'Warner Bros.',
            language: 'English',
            score: false,
		    UHD: false,
		    HDX: '1080p',
            SD: '480p, Fullscreen',
            CC: false
        },

        {
            id: 15,
            title: 'Chuck: Season 1',
            synopsis: "Chuck Bartowski is just an ordinary guy who spends his days solving problems at a computer store with a band of nerdy cohorts and longing to find a woman who can appreciate him. He never asked to become the government's most powerful weapon.",
            s_image: 'Chuck_Season_1_S',
            l_image: 'Chuck_Season_1_L',
		    stars: 5,
            rent: 3.99,
            purchase: 19.99,
            featured: true,
            gerne: ['Action', 'Comedy'],
	        date: 2007,
            length: '13 Episodes',
            rating: 'TV-PG',
            studio: 'NBC',
            language: 'English',
            score: false,
		    UHD: false,
		    HDX: '1080p',
            SD: '480p, Fullscreen',
            CC: false

        },

        {
            id: 16,
            title: 'Sex and the City: Season 1',
            synopsis: "Life imitates art for thirtysomething writer Carrie Bradshaw, whose firsthand experiences on the New York singles scene serve as the inspiration for her newspaper column: 'Sex and the City. In the first season of HBO's hit comedy series, the struggles of finding a mate are seen through the eyes of Carrie (Sarah Jessica Parker) and her three best friends - Samantha (Kim Cattrall), a public-relations executive who's seen (and done) it all in the bedroom; Charlotte (Kristin Davis), a hard-luck art dealer who still believes that love will conquer all; and Miranda (Cynthia Nixon), a cynical corporate lawyer who may (or may not) be a pushover for romance. Chris Noth co-stars as one of Carrie's lovers, the notorious Mr. Big.",
            s_image: 'Sex_and_the_City_Season_1_S',
            l_image: 'Sex_and_the_City_Season_1_L',
		    stars: 4,
            rent: 3.99,
            purchase: 14.99,
            featured: false,
            gerne: ['Comedy', 'Drama'],
	        date: 1998,
            length: '12 Episodes',
            rating: 'TV-MA',
            studio: 'HBO',
            language: 'English',
            score: false,
		    UHD: false,
		    HDX: false,
            SD: '480p, Fullscreen',
            CC: false


        },

        {
            id: 17,
            title: 'Babylon 5: Season 1',
            synopsis: 'All 22 Original Episodes Fully Remastered! Babylon 5, a flash point for conflict located between five competing races, home to diplomats, smugglers, terrorists and dreamers. Combining action, adventure, drama and state-of-the-art effects, Babylon 5 has become a modern-day science-fiction classic popular around the world.',
            s_image: 'Babylon_5_Season_1_S',
            l_image: 'Babylon_5_Season_1_L',
		    stars: 5,
            rent: 3.99,
            purchase: 29.99,
            featured: true,
            gerne: ['Action', 'Adventure'],
	        date: 1993,
            length: '22 Episodes',
            rating: 'TV-PG',
            studio: 'TNT',
            language: 'English',
            score: false,
		    UHD: false,
		    HDX: '1080p',
            SD: '480p, Fullscreen',
            CC: false
        },

        {
            id: 18,
            title: 'The Walking Dead: Season 1',
            synopsis: "After waking from a coma in an abandoned hospital, police officer Rick Grimes finds the world he knew gone - ravaged by a zombie epidemic of apocalyptic proportions. Nearby, on the outskirts of Atlanta, a small encampment struggles to survive as 'the dead' stalk them at every turn. Can Rick and the others hold onto their humanity as they fight to live in this terrifying new world? And, amidst dire conditions and personal rivalries, will they ultimately survive one another.",
            s_image: 'Babylon_5_Season_1_S',
            l_image: 'Babylon_5_Season_1_L',
		    stars: 5,
            rent: 3.99,
            purchase: 9.99,
            featured: false,
            gerne: ['Drama', 'Horror'],
	        date: 2010,
            length: '6 Episodes',
            rating: 'TV-MA',
            studio: 'AMC',
            language: 'English',
            score: false,
		    UHD: false,
		    HDX: '1080p',
            SD: '480p, Fullscreen',
            CC: false
        },

        {
            id: 19,
            title: 'Boardwalk Empire: Season 1',
            synopsis: "Atlantic City, 1920. When alcohol was outlawed, outlaws became kings. HBO presents Season One of this epic new drama series that follows the birth and rise of organized crime in 'the world's playground' at the dawn of Prohibition. Steve Buscemi stars.",
            s_image: 'Boardwalk_Empire_Season_1_S',
            l_image: 'Boardwalk_Empire_Season_1_L',
		    stars: 4,
            rent: 3.99,
            purchase: 24.99,
            featured: true,
            gerne: ['Crime & Thrillers', 'Drama'],
	        date: 2010,
            length: '12 Episodes',
            rating: 'TV-MA',
            studio: 'HBO',
            language: 'English',
            score: false,
		    UHD: false,
		    HDX: '1080p',
            SD: '480p, Fullscreen',
            CC: false
        },

        {
            id: 20,
            title: 'Smallville: Season 1',
            synopsis: "Between the boy Clark Kent thought he was and the man he is destined to become...lie the compelling stories of SMALLVILLE, the popular action series that reimagines the Superman saga from its roots. All twenty-one of the first season's episodes are here for you to watch, wonder and enjoy as a legend grows up in Smallville. As the years passed, it was painfully obvious that Clark possessed Herculean strength and other powers 'far beyond those of mortal men.",
            s_image: 'Smallville_Season_1_S',
            l_image: 'Smallville_Season_1_L',
		    stars: 5,
            rent: 3.99,
            purchase: 29.99,
            featured: true,
            gerne: ['Drama', 'Teen'],
	        date: 2001,
            length: '21 Episodes',
            rating: 'TV-14',
            studio: 'The WB / The CW',
            language: 'English',
            score: false,
		    UHD: false,
		    HDX: '1080p',
            SD: '480p, Fullscreen',
            CC: false
        },

        {
            id: 21,
            title: 'Godzilla: King of the Monsters',
            synopsis: "Buy any quality, get every quality: All qualities up to 4K UHD included with purchase. Members of the crypto-zoological agency Monarch face off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah. When these ancient super- species-thought to be mere myths-rise again, they all vie for supremacy, leaving humanity's very existence hanging in the balance.",
            s_image: 'Godzilla_King_of_the_Monsters_S',
            l_image: 'Godzilla_King_of_the_Monsters_L',
		    stars: 4,
            rent: 3.99,
            purchase: 14.99,
            featured: false,
            gerne: ['Action','Sci-Fi'],
	        date: 2019,
            length: 132,
            rating: 'PG-13',
            studio: 'Warner Bros.',
            language: 'English',
            score: 42,
		    UHD: '4K, Dolby Vision, HDR10, Dolby Atmos',
		    HDX: '1080p, Dolby Digital Plus 5.1',
            SD: '480p, Enhanced Widescreen, Dolby Digital Plus 5.1',
            CC: 'English'
        },


        {
            id: 22,
            title: 'John Wick',
            synopsis: "When sadistic young thugs senselessly attack John Wick (Keanu Reeves) - a brilliantly lethal ex-assassin - they have no idea they've messed with the wrong guy. With New York City as his bullet-riddled playground, Wick embarks on a merciless rampage, hunting down his adversaries with the skill and ruthlessness that made him an underworld legend.",
            s_image: 'John_Wick_S',
            l_image: 'John_Wick_L',
		    stars: 5,
            rent: 3.99,
            purchase: 7.99,
            featured: true,
            gerne: ['Action','Crime & Thrillers'],
	        date: 2014,
            length: 101,
            rating: 'R',
            studio: 'Lionsgate',
            language: 'English',
            score: 86,
		    UHD: '4K, Dolby Vision, HDR10, Dolby Atmos',
		    HDX: '1080p, Dolby Digital Plus 5.1',
            SD: '480p, Enhanced Widescreen, Dolby Digital Plus 5.1',
            CC: 'English'
        },


        {
            id: 23,
            title: 'The Greatest Showman',
            synopsis: "Hugh Jackman stars in this bold and original musical -- inspired by the ambition and imagination of P.T. Barnum -- celebrating the birth of show business and dreams coming to life.",
            s_image: 'The_Greatest_Showman_S',
            l_image: 'The_Greatest_Showman_L',
		    stars: 5,
            rent: 3.99,
            purchase: 19.99,
            featured: false,
            gerne: ['Drama','Musicals'],
	        date: 2017,
            length: 105,
            rating: 'PG',
            studio: '20th Century Fox',
            language: 'English',
            score: 57,
		    UHD: '4K, HDR10, Dolby Digital Plus 5.1',
		    HDX: '1080p, Dolby Digital Plus 5.1',
            SD: '480p, Enhanced Widescreen, Dolby Digital Plus 5.1',
            CC: 'English'

        },

        {
            id: 24,
            title: 'The Wolf of Wall Street',
            synopsis: "Sex. Money. Power. Drugs. Brace yourself for an outrageous true story from legendary filmmaker Martin Scorsese. Leonardo DiCaprio stars as a young stockbroker hungry for a life of non-stop thrills, where corruption was king and more was never enough.",
            s_image: 'The_Wolf_of_Wall_Street_S',
            l_image: 'The_Wolf_of_Wall_Street_L',
		    stars: 4,
            rent: 2.99,
            purchase: 13.99,
            featured: true,
            gerne: ['Comedy','Crime'],
	        date: 2014,
            length: 180,
            rating: 'R',
            studio: 'Paramount Pictures',
            language: 'English',
            score: 79,
		    UHD: false,
		    HDX: '1080p, Dolby Digital Plus 5.1',
            SD: '480p, Enhanced Widescreen, Dolby Digital Plus 5.1',
            CC: 'English'
        },


        {          
            id: 25,
            title: 'Catch Me if You Can',
            synopsis: "Frank didn't go to flight school...Frank didn't go to medical school...Frank didn't go to law school...because Frank's still in high school! Inspired by the true story of a brilliant young master of deception and the FBI agent hot on his trail. Directed by Steven Spielberg and starring Leonardo DiCaprio and Tom Hanks. Frank W. Abagnale, Jr. successfully passes himself off as a pilot, a lawyer and a doctor - all before his 21st birthday!",
            s_image: 'Catch_Me_if_You_Can_S',
            l_image: 'Catch_Me_if_You_Can_L',
		    stars: 5,
            rent: 2.99,
            purchase: 9.99,
            featured: false,
            gerne: ['Adventure','Crime & Thrillers'],
	        date: 2002,
            length: 141,
            rating: 'PG-13',
            studio: 'DreamWorks',
            language: 'English',
            score: 96, 
		    UHD: false,
		    HDX: '1080p, Dolby Digital Stereo',
            SD: '480p, Enhanced Widescreen, Dolby Digital Stereo',
            CC: 'English'
        },

        {
            id: 26,
            title: 'VIKINGS: Season 3',
            synopsis: "With the promise of new land from the English, Ragnar leads his people to an uncertain fate on the shores of Wessex. King Ecbert has made many promises and it remains to be seen if he will keep them. But ever the restless wanderer, Ragnar is searching for something more and he finds it in the mythical city of Paris.",
            s_image: 'VIKINGS_Season_3_S',
            l_image: 'VIKINGS_Season_3_L',
		    stars: 5,
            rent: 0,
            purchase: 14.99,
            featured: true,
            gerne: ['Action','Adventure'],
	        date: 2015,
            length: '10 Episodes',
            rating: 'TV-14',
            studio: 'History Channel',
            language: 'English',
            score: false,
		    UHD: false,
		    HDX: '1080p',
            SD: '480p, Fullscreen',
            CC: false
        },

        {
            id: 27,
            title: 'Marco Polo: Season 1',
            synopsis: "Set in a world of greed, betrayal, sexual intrigue, and rivalry, 'Marco Polo' is based on the famed explorer's adventures in Kublai Khan's court.",
            s_image: 'Marco_Polo_Season_1_S',
            l_image: 'Marco_Polo_Season_1_L',
		    stars: 4,
            rent: 0,
            purchase: 9.99,
            featured: false,
            gerne: ['Adventure','Drama'],
	        date: 2014,
            length: '10 Episodes',
            rating: 'TV-MA',
            studio: 'Netflix',
            language: 'English',
            score: false,
		    UHD: false,
		    HDX: '1080p',
            SD: '480p, Fullscreen',
            CC: false

        },

        {
            id: 28,
            title: 'Nurse Jackie: Season 1',
            synopsis: "Edie Falco is 'outstanding' as Jackie Peyton, a nurse trying to survive the chaotic grind of saving lives in a hectic New York City hospital. Sharp-tongued and quick-witted, Jackie's a woman of substance who knows how to handle it all. With a white lie here, a bent rule there, and a steady dose of pain relievers for her chronic back pain, Jackie does whatever it takes to get the job done.",
            s_image: 'Nurse_Jackie_Season_1_S',
            l_image: 'Nurse_Jackie_Season_1_L',
		    stars: 4,
            rent: 0,
            purchase: 9.99,
            featured: true,
            gerne: ['Comedy','Drama'],
	        date: 2009,
            length: '12 Episodes',
            rating: 'TV-MA',
            studio: 'Showtime',
            language: 'English',
            score: false,
		    UHD: false,
		    HDX: '1080p',
            SD: '480p, Fullscreen',
            CC: false


        },


        {
            id: 29,
            title: 'Californication: Season 1',
            synopsis: "David Duchovny stars as a novelist Hank Moody, who struggles to help raise his 13-year-old daughter, while carrying a torch for his ex-girlfriend Karen. His obsession with honesty and his self-destructive behavior are simultaneously destroying and enriching his career...all this in the city he loathes the most: Los Angeles.",
            s_image: 'Californication_Season_1_S',
            l_image: 'Californication_Season_1_L',
		    stars: 4,
            rent: 0,
            purchase: 19.99,
            featured: false,
            gerne: ['Comedy','Drama'],
	        date: 2007,
            length: '12 Episodes',
            rating: 'TV-MA',
            studio: 'Showtime',
            language: 'English',
            score: false,
		    UHD: false,
		    HDX: '1080p',
            SD: '480p, Fullscreen',
            CC: false
        },


        {
            id: 30,
            title: 'The Tudors: Season 1',
            synopsis: "The Tudors presents the rarely dramatized, tumultuous early years of King Henry VIII's nearly 40-year omnipotent reign (1509-1547) of England. In addition to his famous female consorts, a 20+ year marriage to Catherine of Aragon and the infamous dalliance with Anne Boleyn, the series delves into Henry's most notable political relationship and the deconstruction of the Roman Catholic Church in England.",
            s_image: 'The_Tudors_Season_1_S',
            l_image: 'The_Tudors_Season_1_L',
		    stars: 5,
            rent: 0,
            purchase: 15.99,
            featured: true,
            gerne: ['Drama','History'],
	        date: 2007,
            length: '10 Episodes',
            rating: 'TV-MA',
            studio: 'Showtime',
            language: 'English',
            score: false,
		    UHD: false,
		    HDX: '1080p',
            SD: '480p, Fullscreen',
            CC: false
        }

    ],


    getAllItems()
    {
    return this.items;
    },

    getAllMovies()
    {
        return this.items.filter(item => item.rating.substring(0,2)!='TV');
    },

    getAllShows()
    {
        return this.items.filter(item => item.rating.substring(0,2)=='TV');
    },

    getAllMoviesFeatured()
    {
        return this.items.filter(item => item.featured==true && item.rating.substring(0,2)!='TV');
    },

    getAllShowsFeatured()
    {
        return this.items.filter(item => item.featured==true && item.rating.substring(0,2)=='TV');
    },

    getAnItem(id)
    {
      const itemReturned=  this.items.find((item)=>{
            return item.id == id;
        })
        return itemReturned;
    },

    getSimilarGerneItems(id)
    {
        const itemReturned=  this.items.find((item)=>{
            return item.id == id;
        })
        return this.items.filter(item => item.id != itemReturned.id && item.gerne.some(g => g==itemReturned.gerne[0] || g==itemReturned.gerne[1] ))
        
    }
}


module.exports=fakeDB;
