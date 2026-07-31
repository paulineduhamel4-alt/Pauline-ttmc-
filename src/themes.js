// 35 thèmes soigneusement calibrés
// Format : ["Q?","m",[A,B,C,D],idxBonne] pour QCM · ["Q?","o","réponse"] pour ouverte
// Difficulté 1→10 : L1 = tout le monde sait · L5 = culture générale solide · L10 = expert

export const THEMES = [

/* ═══════════════════ HISTOIRE ═══════════════════ */

{"t":"Les rois de France","e":"👑","q":[
["Quel roi est surnommé le Roi-Soleil ?","m",["Louis XIII","Louis XIV","Louis XV","Louis XVI"],1],
["Quel château Louis XIV a-t-il fait construire ?","m",["Chambord","Fontainebleau","Versailles","Chenonceau"],2],
["Quel roi a été guillotiné en 1793 ?","m",["Louis XIV","Louis XV","Louis XVI","Louis XVIII"],2],
["Qui a signé l'Édit de Nantes en 1598 ?","m",["François Ier","Henri IV","Louis XIII","Henri III"],1],
["Combien d'années dura le règne de Louis XIV ?","m",["42 ans","54 ans","62 ans","72 ans"],3],
["Comment surnomme-t-on Saint Louis ?","o","Louis IX"],
["Quelle reine a été guillotinée après Louis XVI ?","o","Marie-Antoinette"],
["Quel roi a été assassiné par Ravaillac ?","m",["Henri III","Henri IV","Louis XIII","François II"],1],
["Quel dernier roi de France a régné après la Révolution de 1830 ?","m",["Charles X","Louis-Philippe","Napoléon III","Louis XVIII"],1],
["Quelle dynastie a fondé Hugues Capet en 987 ?","m",["Les Mérovingiens","Les Carolingiens","Les Capétiens","Les Valois"],2]
]},

{"t":"Napoléon Bonaparte","e":"⚔️","q":[
["Sur quelle île Napoléon est-il né ?","m",["Malte","Corse","Sardaigne","Sicile"],1],
["Sur quelle île est-il mort en exil ?","m",["Corse","Elbe","Malte","Sainte-Hélène"],3],
["En quelle année est-il devenu empereur ?","m",["1799","1804","1810","1815"],1],
["Quelle bataille marque sa défaite finale en 1815 ?","m",["Austerlitz","Waterloo","Trafalgar","Iéna"],1],
["Qui a peint le célèbre Sacre de Napoléon ?","m",["Ingres","David","Delacroix","Géricault"],1],
["Comment s'appelait sa première épouse ?","o","Joséphine (de Beauharnais)"],
["Quel code juridique a-t-il fait rédiger en 1804 ?","o","Le Code civil (ou Code Napoléon)"],
["Quel neveu a fondé le Second Empire en 1852 ?","m",["Napoléon II","Napoléon III","Louis-Napoléon","Jérôme"],1],
["Combien de maréchaux Napoléon a-t-il nommés au total ?","m",["10","18","26","32"],2],
["Quel amiral britannique a battu Napoléon à Trafalgar ?","m",["Cochrane","Nelson","Collingwood","Jervis"],1]
]},

{"t":"La Seconde Guerre mondiale","e":"💣","q":[
["En quelle année a-t-elle commencé ?","m",["1914","1936","1939","1941"],2],
["Qui dirigeait l'Allemagne nazie ?","m",["Himmler","Hitler","Goebbels","Göring"],1],
["Quelle date est le Débarquement de Normandie ?","m",["6 juin 1944","8 mai 1945","11 nov. 1944","1 sept. 1939"],0],
["Quelle ville japonaise a subi la 1ère bombe atomique ?","m",["Tokyo","Nagasaki","Hiroshima","Osaka"],2],
["Qui dirigeait la France Libre depuis Londres ?","m",["Pétain","de Gaulle","Mendès France","Blum"],1],
["Comment s'appelait le plan d'invasion nazi de l'URSS ?","o","Barbarossa (opération)"],
["Comment s'appelle le régime français collaborationniste ?","o","Le régime de Vichy (ou l'État français)"],
["Quel général allié a libéré Paris avec Leclerc ?","m",["Patton","Eisenhower","Bradley","Montgomery"],0],
["Quelle bataille russe fut le tournant de 1942-43 ?","m",["Moscou","Stalingrad","Koursk","Sébastopol"],1],
["Qui a signé la capitulation allemande à Reims ?","m",["Keitel","Dönitz","Jodl","Göring"],2]
]},

{"t":"L'Égypte antique","e":"🏺","q":[
["Sur quel fleuve s'est développée cette civilisation ?","m",["Le Congo","Le Nil","L'Euphrate","Le Niger"],1],
["Comment appelle-t-on l'écriture égyptienne à images ?","m",["Le cunéiforme","Les hiéroglyphes","Le démotique","Le copte"],1],
["Quelle est la plus grande pyramide de Gizeh ?","m",["Khéphren","Khéops","Mykérinos","Djéser"],1],
["Quel dieu avait une tête de chacal ?","m",["Horus","Rê","Anubis","Seth"],2],
["Quelle reine fut la maîtresse de César puis d'Antoine ?","m",["Néfertiti","Hatchepsout","Cléopâtre","Néfertari"],2],
["Quel Français a déchiffré les hiéroglyphes ?","o","Champollion"],
["Quelle pierre lui a permis ce déchiffrage ?","o","La pierre de Rosette"],
["Quel jeune pharaon a une tombe retrouvée intacte en 1922 ?","m",["Ramsès II","Séthi Ier","Toutânkhamon","Akhenaton"],2],
["Combien de temps a duré la civilisation pharaonique ?","m",["500 ans","1 000 ans","3 000 ans","5 000 ans"],2],
["Quel pharaon monothéiste a bouleversé la religion vers -1350 ?","m",["Ramsès II","Akhenaton","Thoutmôsis III","Khéops"],1]
]},

{"t":"La mythologie grecque","e":"🏛️","q":[
["Qui est le roi des dieux grecs ?","m",["Poséidon","Hadès","Zeus","Apollon"],2],
["Quel héros a tué la Méduse ?","m",["Persée","Hercule","Ulysse","Thésée"],0],
["Qui a survécu au Cyclope dans l'Odyssée ?","m",["Achille","Ulysse","Jason","Énée"],1],
["Quelle déesse est née de la mer selon Botticelli ?","m",["Athéna","Aphrodite","Héra","Artémis"],1],
["Combien de travaux Hercule a-t-il accomplis ?","m",["7","10","12","15"],2],
["Qui a coupé la tête de la Méduse ?","o","Persée"],
["Quel héros a affronté le Minotaure ?","o","Thésée"],
["Quel roi a été puni à rouler éternellement un rocher ?","m",["Tantale","Sisyphe","Prométhée","Atlas"],1],
["Qui a été puni à porter le monde sur ses épaules ?","m",["Titan","Prométhée","Atlas","Cronos"],2],
["Combien de Muses existent dans la mythologie ?","m",["3","7","9","12"],2]
]},

{"t":"La Rome antique","e":"🏟️","q":[
["Selon la légende, qui a fondé Rome ?","m",["César","Romulus","Auguste","Énée"],1],
["Où combattaient les gladiateurs à Rome ?","m",["Le Forum","Le Panthéon","Le Colisée","Le Circus Maximus"],2],
["Quelle langue parlait-on à Rome ?","m",["Le grec","Le latin","L'étrusque","L'italien"],1],
["Quel général a traversé les Alpes avec des éléphants ?","m",["Scipion","Hannibal","Pyrrhus","Attila"],1],
["Qui a été assassiné aux Ides de mars en -44 ?","m",["Auguste","Néron","Jules César","Marc-Antoine"],2],
["Qui fut le premier empereur romain ?","o","Auguste (Octavien)"],
["Quel mur romain traversait l'Angleterre du Nord ?","o","Le mur d'Hadrien"],
["Quel empereur aurait vu Rome brûler en 64 ?","m",["Caligula","Néron","Commode","Domitien"],1],
["Combien de temps a duré l'Empire romain d'Occident ?","m",["200 ans","500 ans","1 000 ans","1 500 ans"],1],
["Quelle bataille de -31 av. J.-C. donne Rome à Octave ?","m",["Cannes","Actium","Zama","Pharsale"],1]
]},

{"t":"La Révolution française","e":"🇫🇷","q":[
["Quelle date est la Prise de la Bastille ?","m",["14 juillet 1789","4 août 1789","20 juin 1789","10 août 1792"],0],
["Quel roi a été guillotiné pendant la Révolution ?","m",["Louis XIV","Louis XV","Louis XVI","Charles X"],2],
["Quelle est la devise républicaine née de la Révolution ?","m",["Union sacrée","Ordre et progrès","Liberté Égalité Fraternité","Un pour tous"],2],
["Qui était le principal chef de la Terreur ?","m",["Danton","Robespierre","Marat","Saint-Just"],1],
["Qui a assassiné Marat dans sa baignoire ?","m",["Charlotte Corday","Marie Roland","Olympe de Gouges","Théroigne de Méricourt"],0],
["Quel médecin a donné son nom à l'instrument d'exécution ?","o","Guillotin (Joseph-Ignace)"],
["Quel écrit fondamental fut adopté le 26 août 1789 ?","o","La Déclaration des droits de l'homme et du citoyen"],
["Comment s'appelaient les révolutionnaires modérés ?","m",["Les Jacobins","Les Girondins","Les Feuillants","Les Cordeliers"],1],
["Quel coup d'État a mis fin à la Révolution ?","m",["9 thermidor","18 brumaire","18 fructidor","10 août"],1],
["Combien de temps a duré la Terreur ?","m",["3 mois","10 mois","2 ans","5 ans"],1]
]},

/* ═══════════════════ CINÉMA & POP CULTURE ═══════════════════ */

{"t":"Le cinéma français","e":"🎬","q":[
["Qui a réalisé Amélie Poulain (2001) ?","m",["Jeunet","Besson","Klapisch","Ozon"],0],
["Quel film de 2011 avec Omar Sy a battu des records ?","m",["Les Bronzés","Intouchables","Bienvenue chez les Ch'tis","Le Prénom"],1],
["Quelle actrice française a un Oscar pour La Môme (2007) ?","m",["Adjani","Cotillard","Binoche","Deneuve"],1],
["Qui joue le rôle titre dans Amélie ?","m",["Sophie Marceau","Audrey Tautou","Julie Delpy","Mélanie Laurent"],1],
["Quel film français a fait le plus d'entrées de tous les temps ?","m",["La Grande Vadrouille","Bienvenue chez les Ch'tis","Intouchables","Astérix Mission Cléopâtre"],1],
["Qui a réalisé Le Grand Bleu ?","o","Luc Besson"],
["Qui a réalisé La Haine (1995) ?","o","Mathieu Kassovitz"],
["Quelle Palme d'Or française a triomphé à Cannes en 2023 ?","m",["Titane","Anatomie d'une chute","Portrait de la jeune fille en feu","Sibyl"],1],
["Quel comédien joue le rôle principal de La Grande Vadrouille avec Bourvil ?","m",["Louis de Funès","Fernandel","Michel Serrault","Pierre Richard"],0],
["Quel réalisateur français a remporté 5 Oscars pour The Artist ?","m",["Audiard","Hazanavicius","Klapisch","Chomet"],1]
]},

{"t":"Star Wars","e":"⚡","q":[
["Qui a créé la saga Star Wars ?","m",["Spielberg","Lucas","Kubrick","Cameron"],1],
["Comment s'appelle le sabre des Jedi ?","m",["Sabre plasma","Sabre laser","Sabre atomique","Sabre photonique"],1],
["Quel personnage dit Je suis ton père à Luke ?","m",["Yoda","Obi-Wan","Dark Vador","Palpatine"],2],
["De quel enfant Dark Vador est-il le père ?","m",["Han Solo","Luke uniquement","Luke et Leia","Rey"],2],
["Sur quelle planète a grandi Luke Skywalker ?","m",["Tatooine","Naboo","Coruscant","Endor"],0],
["Quel est le vrai nom de Dark Vador ?","o","Anakin Skywalker"],
["Comment s'appelle le vaisseau de Han Solo ?","o","Le Faucon Millenium"],
["Quel jour est le Star Wars Day non-officiel ?","m",["4 mai","25 mai","1er mai","4 juillet"],0],
["Combien de films Star Wars compose la saga Skywalker ?","m",["6","8","9","11"],2],
["Quel acteur incarne Han Solo dans les originaux ?","m",["Mark Hamill","Harrison Ford","Ewan McGregor","Alec Guinness"],1]
]},

{"t":"Harry Potter","e":"⚡","q":[
["Qui a écrit Harry Potter ?","m",["Tolkien","Rowling","Lewis","Pullman"],1],
["Combien de tomes compose la série de livres ?","m",["5","7","8","10"],1],
["Comment s'appelle l'école de sorcellerie ?","o","Poudlard (Hogwarts)"],
["Comment s'appelle la maison d'Harry à Poudlard ?","m",["Serpentard","Poufsouffle","Gryffondor","Serdaigle"],2],
["Comment s'appelle le méchant principal, ennemi d'Harry ?","o","Voldemort (ou Tom Jedusor)"],
["Quel est le nom du hibou d'Harry ?","m",["Errol","Coquecigrue","Hedwige","Pattenrond"],2],
["Comment s'appelle le directeur bienveillant de Poudlard ?","m",["Dumbledore","Rogue","McGonagall","Slughorn"],0],
["Combien de reliques de la Mort existe-t-il ?","m",["1","3","5","7"],1],
["Quelle actrice incarne Hermione Granger ?","m",["Bonnie Wright","Emma Watson","Evanna Lynch","Emma Stone"],1],
["Quel est le sort de la mort dans la saga ?","m",["Sectumsempra","Endoloris","Impero","Avada Kedavra"],3]
]},

{"t":"Les Beatles","e":"🎸","q":[
["Combien de membres composait le groupe ?","m",["3","4","5","6"],1],
["Dans quelle ville anglaise le groupe est-il né ?","m",["Londres","Liverpool","Manchester","Birmingham"],1],
["Quel Beatles a été assassiné à New York en 1980 ?","m",["Paul","John","George","Ringo"],1],
["Quel Beatles était batteur ?","m",["Paul","John","George","Ringo"],3],
["En quelle année le groupe s'est-il séparé ?","m",["1965","1968","1970","1972"],2],
["Quel Beatles était marié à Yoko Ono ?","o","John Lennon"],
["Quel producteur légendaire a signé la plupart de leurs albums ?","o","George Martin (le 5e Beatle)"],
["Quel est le dernier album studio des Beatles ?","m",["Abbey Road","Let It Be","Sgt. Pepper's","The White Album"],1],
["Quelle chanson a été n°1 aux USA pour la 1ère fois en 1964 ?","m",["Let It Be","Hey Jude","I Want to Hold Your Hand","Yesterday"],2],
["Quel Beatles est mort du cancer en 2001 ?","m",["Paul","John","George","Ringo"],2]
]},

{"t":"Disney","e":"🏰","q":[
["Quel est le premier long-métrage animé Disney (1937) ?","m",["Bambi","Blanche-Neige","Cendrillon","Pinocchio"],1],
["Combien de nains dans Blanche-Neige ?","m",["5","7","9","12"],1],
["Qui a créé Mickey Mouse ?","m",["Ub Iwerks","Walt Disney","Roy Disney","Fred Moore"],1],
["Dans quel film grandit le lion Simba ?","o","Le Roi Lion"],
["Quelle princesse Disney chante Libérée délivrée ?","o","Elsa (La Reine des Neiges)"],
["Combien de parcs Disneyland existent dans le monde ?","m",["4","5","6","8"],2],
["Quelle est la 1ère production Pixar (1995) ?","m",["Toy Story","1001 pattes","Monstres Cie","Cars"],0],
["Quelle princesse est amoureuse d'un prince nommé Éric ?","m",["Ariel","Belle","Cendrillon","Jasmine"],0],
["Quelle année Disney a-t-il racheté Star Wars à Lucas ?","m",["2008","2010","2012","2015"],2],
["Combien de dalmatiens dans le titre du film culte ?","m",["99","101","103","105"],1]
]},

{"t":"Les jeux vidéo","e":"🎮","q":[
["Quel jeu de 1985 met en scène un plombier moustachu ?","m",["Sonic","Super Mario Bros","Pac-Man","Zelda"],1],
["Quelle marque a créé la Game Boy ?","m",["Sega","Sony","Nintendo","Atari"],2],
["Quel jeu de blocs est le plus vendu de tous les temps ?","m",["Tetris","Fortnite","Minecraft","GTA V"],2],
["Quel jeu a lancé le battle royale mainstream en 2017 ?","m",["Fortnite","PUBG","Apex","Call of Duty"],0],
["Comment s'appelle la mascotte bleue rapide de Sega ?","o","Sonic (le hérisson)"],
["Quelle console Sony a été lancée en 1994 ?","o","La PlayStation (PS1)"],
["Quel studio français a créé Assassin's Creed ?","m",["Arkane","Ubisoft","Dontnod","Quantic Dream"],1],
["Quel jeu japonais avec des monstres à capturer est sorti en 1996 ?","m",["Digimon","Yu-Gi-Oh","Pokémon","Monster Hunter"],2],
["Quel jeu Nintendo de 2017 a redéfini le monde ouvert ?","m",["Mario Odyssey","Zelda BOTW","Splatoon","Metroid"],1],
["Quel est le 1er jeu vidéo commercialisé (1972) ?","m",["Pong","Space Invaders","Pac-Man","Asteroids"],0]
]},

/* ═══════════════════ SPORTS ═══════════════════ */

{"t":"Le football","e":"⚽","q":[
["Combien de joueurs par équipe sur le terrain ?","m",["10","11","12","15"],1],
["Combien de fois la France a-t-elle gagné la Coupe du monde ?","m",["1","2","3","4"],1],
["Quel pays a gagné le plus de Coupes du monde ?","m",["Allemagne","Argentine","Brésil","Italie"],2],
["Contre quel pays la France a-t-elle gagné en finale 1998 ?","m",["Brésil","Italie","Croatie","Allemagne"],0],
["Contre quel pays la France a-t-elle gagné en finale 2018 ?","m",["Argentine","Croatie","Belgique","Brésil"],1],
["Combien de Ballons d'Or possède Lionel Messi ?","o","8"],
["Quel joueur brésilien porta le n°10 pendant les 3 Coupes du monde 58-62-70 ?","o","Pelé"],
["Qui a marqué la Main de Dieu en 1986 ?","m",["Maradona","Pelé","Zico","Baggio"],0],
["Qui a battu la France en finale de l'Euro 2016 ?","m",["Portugal","Allemagne","Italie","Espagne"],0],
["Quel joueur français a marqué 2 buts en finale de la CM 1998 ?","m",["Deschamps","Zidane","Petit","Djorkaeff"],1]
]},

{"t":"Le tennis","e":"🎾","q":[
["Sur quelle surface se joue Roland-Garros ?","m",["Gazon","Dur","Terre battue","Moquette"],2],
["Quels sont les 4 Grands Chelems ?","m",["Australie, France, UK, USA","France, Espagne, UK, USA","France, Italie, UK, USA","Australie, France, Italie, USA"],0],
["Combien de sets pour gagner un match hommes en Grand Chelem ?","m",["2","3","4","5"],1],
["Quel Français a gagné Roland-Garros en 1983 ?","m",["Leconte","Noah","Forget","Pioline"],1],
["Combien de titres Nadal a-t-il gagné à Roland-Garros ?","m",["10","12","14","16"],2],
["Quel joueur a le record de Grands Chelems hommes ?","o","Novak Djokovic (24)"],
["Comment appelle-t-on 40-40 au tennis ?","o","Égalité (deuce)"],
["Quel Suisse a été n°1 mondial 310 semaines ?","m",["Wawrinka","Federer","Djokovic","Nadal"],1],
["Quelle sœur Williams a gagné le plus de Grands Chelems ?","m",["Venus","Serena","Ex-æquo","Aucune"],1],
["Où se joue le tournoi de Wimbledon ?","m",["Paris","Londres","New York","Melbourne"],1]
]},

{"t":"Les Jeux olympiques","e":"🥇","q":[
["Tous les combien d'années ont lieu les JO d'été ?","m",["2","3","4","5"],2],
["Combien d'anneaux composent le logo olympique ?","m",["4","5","6","7"],1],
["Dans quelle ville de Grèce sont nés les JO antiques ?","m",["Athènes","Sparte","Delphes","Olympie"],3],
["Qui a rétabli les JO modernes en 1896 ?","m",["Coubertin","Diagoras","Brundage","Samaranch"],0],
["Quelle ville a accueilli les JO d'été 2024 ?","o","Paris"],
["Quel nageur américain a 23 médailles d'or, record absolu ?","o","Michael Phelps"],
["Combien de médailles pour la France aux JO 2024 (tous métaux) ?","m",["49","64","78","95"],2],
["En quelle année les JO ont-ils eu lieu à Barcelone ?","m",["1988","1992","1996","2000"],1],
["Quel athlète noir a gagné 4 or à Berlin en 1936 ?","m",["Owens","Louis","Ali","Metcalfe"],0],
["Quelle discipline a été ajoutée aux JO de Paris 2024 ?","m",["Skate","Breakdance","Karaté","Surf"],1]
]},

/* ═══════════════════ ARTS & CULTURE ═══════════════════ */

{"t":"Les peintres impressionnistes","e":"🎨","q":[
["Qui a peint les Nymphéas ?","m",["Manet","Monet","Renoir","Degas"],1],
["Quel tableau a donné son nom au mouvement ?","m",["Le déjeuner sur l'herbe","Impression soleil levant","La Grande Jatte","Le bal du Moulin"],1],
["Quel peintre s'est coupé l'oreille ?","m",["Van Gogh","Gauguin","Cézanne","Toulouse-Lautrec"],0],
["Où Monet a-t-il peint les Nymphéas ?","m",["Argenteuil","Giverny","Auvers","Honfleur"],1],
["Quel peintre est célèbre pour ses danseuses ?","m",["Manet","Degas","Renoir","Sisley"],1],
["Où se trouvent les Nymphéas les plus célèbres à Paris ?","o","Musée de l'Orangerie"],
["Quel peintre a fui en Polynésie en 1891 ?","o","Paul Gauguin"],
["Quel peintre pointilliste a peint La Grande Jatte ?","m",["Signac","Seurat","Cross","Pissarro"],1],
["Où se trouve la maison-jardin de Monet ?","m",["Barbizon","Giverny","Auvers","Rouen"],1],
["Quel musée abrite la plus grande collection impressionniste au monde ?","m",["Le Louvre","Orsay","L'Orangerie","Marmottan"],1]
]},

{"t":"La littérature française","e":"📚","q":[
["Qui a écrit Les Misérables ?","m",["Zola","Balzac","Hugo","Dumas"],2],
["Qui a écrit Le Petit Prince ?","m",["Camus","Saint-Exupéry","Gide","Malraux"],1],
["Qui a écrit Madame Bovary ?","m",["Zola","Flaubert","Maupassant","Balzac"],1],
["Qui a écrit Le Comte de Monte-Cristo ?","m",["Hugo","Dumas","Sue","Balzac"],1],
["Quel roman de Camus commence par Aujourd'hui maman est morte ?","m",["La Peste","L'Étranger","La Chute","Le Premier Homme"],1],
["Quel roi du roman fluvial a écrit La Comédie humaine ?","o","Balzac (Honoré de)"],
["Quel poète français a écrit Les Fleurs du mal ?","o","Charles Baudelaire"],
["Combien de tomes fait À la recherche du temps perdu de Proust ?","m",["3","5","7","10"],2],
["Quel Français prix Nobel a écrit L'Étranger ?","m",["Sartre","Camus","Gide","Aragon"],1],
["Quel écrivain français a fondé le roman naturaliste ?","m",["Balzac","Zola","Maupassant","Hugo"],1]
]},

{"t":"La musique classique","e":"🎼","q":[
["Combien de symphonies a composé Beethoven ?","m",["7","9","11","15"],1],
["Quel compositeur autrichien meurt jeune, à 35 ans, en 1791 ?","m",["Haydn","Mozart","Schubert","Beethoven"],1],
["Quel Français a composé le Boléro ?","m",["Debussy","Fauré","Ravel","Saint-Saëns"],2],
["Quel Italien a composé Les Quatre Saisons ?","m",["Verdi","Vivaldi","Puccini","Rossini"],1],
["Quel compositeur allemand devint sourd à la fin de sa vie ?","m",["Bach","Mozart","Beethoven","Wagner"],2],
["Combien de touches un piano moderne ?","o","88 touches"],
["Quel compositeur baroque allemand meurt en 1750 ?","o","Jean-Sébastien Bach"],
["Quel opéra de Bizet a une gitane pour héroïne ?","m",["Aïda","Carmen","Tosca","La Traviata"],1],
["Quelle marque de violon italien du XVIIIe est légendaire ?","m",["Stradivarius","Guarnerius","Amati","Toutes"],3],
["Qui a composé la Marche nuptiale du Songe d'une nuit d'été ?","m",["Wagner","Mendelssohn","Chopin","Schumann"],1]
]},

/* ═══════════════════ SCIENCES & NATURE ═══════════════════ */

{"t":"Le corps humain","e":"🧠","q":[
["Combien d'os un adulte possède-t-il ?","m",["150","206","250","300"],1],
["Combien de litres de sang chez un adulte ?","m",["2","5","8","12"],1],
["Quel est l'os le plus long du corps ?","m",["Le tibia","Le fémur","L'humérus","La colonne"],1],
["Combien de dents chez un adulte (dents de sagesse comprises) ?","m",["28","30","32","36"],2],
["Quel organe filtre le sang avec l'urée ?","m",["Le foie","Les reins","Le pancréas","La rate"],1],
["Combien de neurones environ dans le cerveau humain ?","o","Environ 86 milliards"],
["Quel est le plus petit os du corps humain ?","o","L'étrier (dans l'oreille)"],
["Combien de chromosomes possède l'être humain ?","m",["23","46","48","64"],1],
["Quel groupe sanguin est donneur universel ?","m",["A+","B+","AB-","O-"],3],
["Combien de temps vit un globule rouge ?","m",["1 semaine","1 mois","4 mois","1 an"],2]
]},

{"t":"L'espace et le système solaire","e":"🪐","q":[
["Combien de planètes dans notre système solaire ?","m",["7","8","9","12"],1],
["Quelle est la planète la plus proche du Soleil ?","m",["Vénus","Mercure","Mars","Terre"],1],
["Quelle est la plus grosse planète ?","m",["Jupiter","Saturne","Uranus","Neptune"],0],
["Combien de temps met la lumière du Soleil pour atteindre la Terre ?","m",["1 s","8 min","1 h","1 jour"],1],
["Sur quelle planète Perseverance roule-t-il ?","m",["Vénus","Mars","Jupiter","Titan"],1],
["Comment s'appelle la galaxie qui contient notre système solaire ?","o","La Voie lactée"],
["Quel est l'étoile la plus proche du Soleil ?","o","Proxima Centauri (Alpha Centauri C)"],
["Quelle planète a des anneaux les plus spectaculaires ?","m",["Jupiter","Saturne","Uranus","Neptune"],1],
["Quel télescope spatial a été lancé en 2021 ?","m",["Hubble","James Webb","Kepler","Chandra"],1],
["Combien de lunes possède Jupiter (connues) ?","m",["16","50","80","95"],3]
]},

{"t":"Les dinosaures","e":"🦖","q":[
["Il y a combien d'années les dinos ont-ils disparu ?","m",["10 M","66 M","150 M","250 M"],1],
["Quel dinosaure carnivore est le plus célèbre ?","m",["Vélociraptor","T-Rex","Allosaure","Spinosaure"],1],
["Quel dinosaure a une collerette et 3 cornes ?","m",["Stegosaure","Tricératops","Ankylosaure","Iguanodon"],1],
["Qu'est-ce qui a probablement causé leur extinction ?","m",["Une éruption","Un astéroïde","Un virus","Le climat seul"],1],
["Combien de temps ont régné les dinos sur Terre ?","m",["50 M","100 M","165 M","300 M"],2],
["Comment appelle-t-on la science qui étudie les fossiles ?","o","La paléontologie"],
["Où fut trouvé le cratère de l'astéroïde qui les a tués ?","o","Au Yucatán (Chicxulub, Mexique)"],
["Le T-Rex vivait sur quel continent ?","m",["Afrique","Asie","Europe","Amérique du Nord"],3],
["Combien de dents avait un T-Rex adulte ?","m",["Une trentaine","Une soixantaine","Une centaine","Plus de 200"],1],
["Qui est le descendant direct des dinos aujourd'hui ?","m",["Les crocodiles","Les lézards","Les oiseaux","Les tortues"],2]
]},

{"t":"Les animaux d'Afrique","e":"🦁","q":[
["Quel est le plus grand animal terrestre ?","m",["Rhino","Éléphant d'Afrique","Girafe","Hippopotame"],1],
["Quel félin est le plus rapide ?","m",["Lion","Léopard","Guépard","Tigre"],2],
["Combien de mètres peut mesurer une girafe ?","m",["3 m","4 m","6 m","8 m"],2],
["Quel primate géant africain est en danger d'extinction ?","m",["Chimpanzé","Gorille","Bonobo","Orang-outan"],1],
["Quel oiseau est le plus grand du monde ?","m",["Aigle","Autruche","Émeu","Condor"],1],
["Quel animal africain tue le plus d'humains chaque année ?","o","L'hippopotame (ou le moustique si on compte les maladies)"],
["Comment appelle-t-on un groupe de lions ?","o","Une troupe (ou pride)"],
["Quel serpent est le plus long d'Afrique ?","m",["Cobra","Python de Seba","Mamba noir","Boa"],1],
["Quel est le plus grand désert africain ?","m",["Kalahari","Namib","Sahara","Danakil"],2],
["Quel félin d'Afrique a des touffes sur les oreilles ?","m",["Serval","Caracal","Lynx","Guépard"],1]
]},

{"t":"Les océans","e":"🌊","q":[
["Combien d'océans reconnaît-on officiellement ?","m",["3","4","5","7"],2],
["Quel est le plus grand océan ?","m",["Atlantique","Pacifique","Indien","Arctique"],1],
["Quelle est la fosse océanique la plus profonde ?","m",["Puerto Rico","Kouriles","Mariannes","Java"],2],
["Quel mammifère marin est le plus grand ?","m",["Cachalot","Rorqual bleu","Orque","Requin blanc"],1],
["Quel poisson est le plus rapide ?","m",["Thon","Espadon","Requin","Voilier"],3],
["Quelle est la profondeur max de l'océan (en km) ?","o","Environ 11 km (fosse des Mariannes)"],
["Quelle mer très salée fait flotter les baigneurs ?","o","La mer Morte"],
["Combien de bras une pieuvre a-t-elle ?","m",["6","8","10","12"],1],
["Quel animal marin possède 3 cœurs ?","m",["Requin","Pieuvre","Baleine","Tortue"],1],
["Quelle mer sépare la France de l'Angleterre ?","m",["Baltique","Manche","Mer du Nord","Mer d'Iroise"],1]
]},

/* ═══════════════════ CUISINE & CULTURE ═══════════════════ */

{"t":"La cuisine française","e":"🥐","q":[
["Quel plat lyonnais est fait de tripes de porc ?","m",["Quenelles","Tablier de sapeur","Andouillette","Rosette"],2],
["De quelle région vient la choucroute ?","m",["Bretagne","Alsace","Bourgogne","Lorraine"],1],
["Quelle sauce accompagne traditionnellement le steak tartare ?","m",["Bourguignonne","Béarnaise","Aucune (cru)","Béchamel"],2],
["Quel fromage est traditionnel dans la fondue savoyarde ?","m",["Reblochon","Beaufort","Comté","Les trois"],3],
["De quelle région vient la ratatouille ?","m",["Bretagne","Corse","Provence","Auvergne"],2],
["Quelle est la région française d'origine du cassoulet ?","o","Le Languedoc (Castelnaudary, Toulouse, Carcassonne)"],
["Quel dessert alsacien est fait de farine, beurre, sucre en spirale ?","o","Le kougelhopf (ou kouglof)"],
["Quel plat français est inscrit à l'UNESCO en 2010 ?","m",["Le pot-au-feu","Le repas gastronomique français","La bouillabaisse","Le boeuf bourguignon"],1],
["Combien d'étoiles maximum au guide Michelin ?","m",["2","3","4","5"],1],
["Quel chef français a le plus d'étoiles Michelin de l'histoire ?","m",["Bocuse","Ducasse","Robuchon","Trois-gros"],2]
]},

{"t":"Le vin français","e":"🍷","q":[
["Quelle région produit le champagne ?","m",["Bourgogne","Alsace","Champagne","Bordelais"],2],
["Quel cépage rouge est le plus planté au monde ?","m",["Merlot","Cabernet Sauvignon","Pinot noir","Syrah"],1],
["Quel vin naturellement pétillant vient de Vénétie ?","m",["Prosecco","Champagne","Cava","Crémant"],0],
["Quel Bordeaux blanc liquoreux est célèbre ?","m",["Barsac","Sauternes","Monbazillac","Jurançon"],1],
["Quel département produit les Côtes du Rhône ?","m",["Aveyron","Vaucluse","Ardèche","Drôme"],1],
["Comment appelle-t-on la science du vin ?","o","L'œnologie"],
["Quel insecte a détruit les vignes européennes au XIXe ?","o","Le phylloxéra"],
["Quelle bouteille contient 6 bouteilles standard ?","m",["Magnum","Jéroboam","Mathusalem","Salmanazar"],1],
["Combien de degrés d'alcool en moyenne dans un Bordeaux ?","m",["9-10 °","11-12 °","13-14 °","15-16 °"],2],
["Quel millésime bordelais est légendaire (le siècle) ?","m",["1945","1961","1982","2005"],2]
]},

{"t":"Les fromages français","e":"🧀","q":[
["Combien de fromages AOP en France (environ) ?","m",["20","45","65","100"],1],
["De quelle région vient le camembert ?","m",["Bretagne","Normandie","Picardie","Île-de-France"],1],
["Quel fromage bleu est fabriqué dans des grottes ?","m",["Bleu d'Auvergne","Fourme d'Ambert","Roquefort","Bleu des Causses"],2],
["De quel lait est fait le roquefort ?","m",["Vache","Chèvre","Brebis","Bufflonne"],2],
["Quel fromage suisse est troué ?","m",["Gruyère","Comté","Emmental","Appenzell"],2],
["Quel fromage corse à pâte molle est réputé fort ?","o","Le brocciu (ou le casgiu merzu, le vieux corse)"],
["Combien de mois minimum affine-t-on un comté ?","o","4 mois (souvent 12 à 36 mois)"],
["Quel fromage frais italien fait avec la mozzarella ?","m",["Burrata","Ricotta","Stracchino","Provolone"],0],
["Quel fromage grec fait avec du lait de brebis ?","m",["Halloumi","Feta","Manouri","Mizithra"],1],
["Combien de kg de fromage un Français consomme par an ?","m",["8 kg","16 kg","26 kg","40 kg"],2]
]},

/* ═══════════════════ GÉOGRAPHIE ═══════════════════ */

{"t":"Paris","e":"🗼","q":[
["Combien d'arrondissements compose Paris ?","m",["16","18","20","22"],2],
["Quelle est la hauteur de la Tour Eiffel (antennes comprises) ?","m",["250 m","300 m","330 m","400 m"],2],
["Quel fleuve traverse Paris ?","m",["La Loire","La Seine","La Marne","L'Oise"],1],
["Sur quelle île se trouve Notre-Dame ?","m",["Île St-Louis","Île de la Cité","Île aux Cygnes","Île St-Germain"],1],
["En quelle année a été construite la Tour Eiffel ?","m",["1878","1889","1900","1910"],1],
["Quelle avenue relie Concorde à l'Arc de Triomphe ?","o","Les Champs-Élysées"],
["Quel musée est dans une ancienne gare ?","o","Le musée d'Orsay"],
["Quelle basilique domine Montmartre ?","m",["Notre-Dame","Sacré-Cœur","Saint-Sulpice","La Madeleine"],1],
["Combien de ponts traversent la Seine dans Paris intra-muros ?","m",["19","28","37","45"],2],
["Quel jardin est entre le Louvre et la Concorde ?","m",["Luxembourg","Tuileries","Palais-Royal","Jardin des Plantes"],1]
]},

{"t":"Les capitales du monde","e":"🌍","q":[
["Quelle est la capitale de l'Australie ?","m",["Sydney","Melbourne","Canberra","Perth"],2],
["Quelle est la capitale de la Belgique ?","m",["Bruges","Bruxelles","Anvers","Gand"],1],
["Quelle est la capitale du Canada ?","m",["Montréal","Toronto","Ottawa","Vancouver"],2],
["Quelle est la capitale du Brésil ?","m",["Rio","São Paulo","Brasília","Salvador"],2],
["Quelle est la capitale de la Turquie ?","m",["Istanbul","Ankara","Izmir","Antalya"],1],
["Quelle est la capitale de la Nouvelle-Zélande ?","o","Wellington"],
["Quelle est la capitale de l'Afrique du Sud (une des trois) ?","o","Pretoria (administrative), Le Cap (législative), ou Bloemfontein (judiciaire)"],
["Quelle est la capitale du Kazakhstan ?","m",["Almaty","Astana","Bichkek","Tachkent"],1],
["Quelle est la capitale de la Norvège ?","m",["Stockholm","Oslo","Helsinki","Bergen"],1],
["Quelle capitale africaine est la plus haute (2 400 m) ?","m",["Addis-Abeba","Nairobi","Bogotá","La Paz"],0]
]},

{"t":"Les fleuves","e":"🏞️","q":[
["Quel est le plus long fleuve du monde ?","m",["Amazone","Nil","Yangtsé","Mississippi"],1],
["Quel fleuve traverse Londres ?","m",["Tamise","Rhin","Escaut","Meuse"],0],
["Quel fleuve traverse Rome ?","m",["Pô","Tibre","Arno","Adige"],1],
["Quel fleuve traverse le Grand Canyon ?","m",["Colorado","Rio Grande","Missouri","Yukon"],0],
["Quel fleuve chinois est surnommé fleuve Jaune ?","m",["Yangtsé","Huang He","Mékong","Amour"],1],
["Quel fleuve européen traverse 10 pays ?","o","Le Danube"],
["Quel fleuve français prend sa source au Mont Gerbier de Jonc ?","o","La Loire"],
["Quel fleuve sépare France et Allemagne ?","m",["Meuse","Rhin","Escaut","Moselle"],1],
["Quel fleuve indien est sacré pour les hindous ?","m",["Indus","Gange","Brahmapoutre","Godavari"],1],
["Quel fleuve d'Afrique a le débit le plus important ?","m",["Nil","Congo","Niger","Zambèze"],1]
]},

/* ═══════════════════ INSOLITE ═══════════════════ */

{"t":"Les guillotinés célèbres","e":"⚔️","q":[
["Quel roi de France a été guillotiné en 1793 ?","m",["Louis XIV","Louis XV","Louis XVI","Louis XVIII"],2],
["Quelle reine a suivi son mari sur l'échafaud ?","m",["Marie de Médicis","Marie-Antoinette","Anne d'Autriche","Catherine"],1],
["Quel révolutionnaire fut guillotiné en juillet 1794 ?","m",["Marat","Robespierre","Danton","Saint-Just"],1],
["Quel médecin donna son nom à la guillotine ?","m",["Guillotin","Louis","Curie","Marat"],0],
["Quelle scientifique guillotinée en 1794 a dit Encore un moment monsieur le bourreau ?","m",["Émilie du Châtelet","Mme Lavoisier","Mme Roland","Charlotte Corday"],2],
["Quel jeune poète fut guillotiné en 1794 à 31 ans ?","o","André Chénier"],
["Quel chimiste, père de la chimie moderne, fut guillotiné en 1794 ?","o","Antoine Lavoisier"],
["En quelle année la peine de mort fut abolie en France ?","m",["1976","1981","1985","1990"],1],
["Qui fut le dernier guillotiné en France (1977) ?","m",["Hamida Djandoubi","Christian Ranucci","Jérôme Carrein","Roger Bontemps"],0],
["Quel ministre a fait abolir la peine de mort ?","m",["Peyrefitte","Badinter","Rocard","Chirac"],1]
]},

{"t":"Les naufrages célèbres","e":"🚢","q":[
["Quel paquebot a coulé le 15 avril 1912 ?","m",["Lusitania","Titanic","Britannic","Andrea Doria"],1],
["Combien de personnes moururent dans le Titanic (environ) ?","m",["800","1 200","1 500","2 000"],2],
["Qu'est-ce qui a coulé le Titanic ?","m",["Une torpille","Un iceberg","Une tempête","Une avarie"],1],
["Quel paquebot fut torpillé en 1915 pendant la 1re guerre ?","m",["Lusitania","Britannic","Empress","Athenia"],0],
["Qui a réalisé le film Titanic (1997) ?","o","James Cameron"],
["Quel océanographe a trouvé l'épave du Titanic en 1985 ?","o","Robert Ballard"],
["À quelle profondeur repose le Titanic ?","m",["1 500 m","2 500 m","3 800 m","5 000 m"],2],
["Quel navire russe a coulé en mer de Barents en 2000 ?","m",["Koursk","Léningrad","Krasnoyarsk","Moskva"],0],
["Quelle bataille navale de 1571 a opposé chrétiens et Turcs ?","m",["Trafalgar","Lépante","Actium","Salamine"],1],
["Combien de submersibles ont plongé sur l'épave du Titanic (au moins) ?","m",["50","100","200","500"],2]
]},

{"t":"Les rockstars mortes à 27 ans","e":"🎸","q":[
["Comment s'appelle le club regroupant ces musiciens ?","m",["Club des 27","Club noir","Club Rock","Club des étoiles"],0],
["Quel guitariste virtuose de Woodstock en fait partie ?","m",["Clapton","Hendrix","Page","Richards"],1],
["Quelle chanteuse blues morte en 1970 en fait partie ?","m",["Aretha Franklin","Janis Joplin","Etta James","Nina Simone"],1],
["Quel chanteur des Doors en fait partie ?","m",["Iggy Pop","Jim Morrison","Lou Reed","David Bowie"],1],
["Quel leader de Nirvana en fait partie ?","o","Kurt Cobain"],
["Quelle chanteuse britannique morte en 2011 en fait partie ?","o","Amy Winehouse"],
["Quel fondateur des Rolling Stones en fait partie ?","m",["Brian Jones","Bill Wyman","Charlie Watts","Ronnie Wood"],0],
["Dans quelle ville Jim Morrison est-il mort ?","m",["Los Angeles","Paris","Londres","New York"],1],
["Dans quel cimetière parisien repose Jim Morrison ?","m",["Montparnasse","Père-Lachaise","Passy","Montmartre"],1],
["De quelle overdose Amy Winehouse est-elle morte ?","m",["Héroïne","Cocaïne","Alcool","Barbituriques"],2]
]},

{"t":"Les palais présidentiels","e":"🏛️","q":[
["Où réside le Président français ?","m",["Élysée","Matignon","Louvre","Assemblée"],0],
["Où réside le Président américain ?","m",["Capitole","Maison-Blanche","Pentagone","Camp David"],1],
["Où réside le Premier ministre britannique ?","m",["Buckingham","10 Downing Street","St James","Chequers"],1],
["Où réside le Pape ?","m",["Rome","Vatican","Assise","Florence"],1],
["Où réside le Président russe (Moscou) ?","m",["Kremlin","Duma","Loubianka","Palais Bleu"],0],
["Quel palais est la résidence secondaire du Président français ?","o","Le fort de Brégançon (Var)"],
["Où se trouve la Maison-Blanche ?","o","Washington D.C."],
["Combien de pièces compte l'Élysée ?","m",["100","200","365","500"],2],
["En quelle année Emmanuel Macron est-il devenu Président ?","m",["2015","2017","2019","2021"],1],
["Combien de temps dure un mandat présidentiel en France ?","m",["4 ans","5 ans","6 ans","7 ans"],1]
]},

{"t":"Les diamants célèbres","e":"💎","q":[
["Quel diamant bleu est exposé au Smithsonian à Washington ?","m",["Koh-i-Nûr","Hope","Régent","Sancy"],1],
["Quel diamant de la Couronne britannique fait 105 carats ?","m",["Hope","Koh-i-Nûr","Cullinan","Régent"],1],
["Où se trouve le diamant Régent aujourd'hui ?","m",["Louvre","Tour de Londres","Smithsonian","Vatican"],0],
["Quel plus gros diamant brut jamais trouvé pesait 3 106 carats ?","m",["Golden Jubilee","Cullinan","Excelsior","Great Star"],1],
["Où fut découvert le Cullinan en 1905 ?","m",["Inde","Brésil","Afrique du Sud","Russie"],2],
["Quelle est l'unité de poids d'un diamant ?","o","Le carat (0,2 gramme)"],
["Quel pays produit le plus de diamants aujourd'hui ?","o","La Russie"],
["Quel diamant est réputé maudit et lié à des morts ?","m",["Hope","Régent","Sancy","Orlov"],0],
["Combien de facettes standard sur un diamant taille brillant ?","m",["32","48","57","72"],2],
["Quel minéral est plus dur que le diamant ?","m",["Aucun","La lonsdaléite","Le corindon","Le carborundum"],1]
]}

]
