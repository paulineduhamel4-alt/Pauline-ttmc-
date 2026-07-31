// 100 thèmes · 1000 questions · français calibré
// Format : ["Q?","m",[A,B,C,D],idx] · ["Q?","o","réponse"]
// L1 = quasi tout le monde · L5 = culture solide · L10 = expert

export const THEMES = [

/* ═══════════ HISTOIRE ═══════════ */

{"t":"Les rois de France","e":"👑","q":[
["Quel roi est surnommé le Roi-Soleil ?","m",["Louis XIII","Louis XIV","Louis XV","Louis XVI"],1],
["Quel château Louis XIV a-t-il fait construire ?","m",["Chambord","Fontainebleau","Versailles","Chenonceau"],2],
["Quel roi a été guillotiné en 1793 ?","m",["Louis XIV","Louis XV","Louis XVI","Louis XVIII"],2],
["Qui a signé l'Édit de Nantes en 1598 ?","m",["François Ier","Henri IV","Louis XIII","Henri III"],1],
["Combien d'années dura le règne de Louis XIV ?","m",["42 ans","54 ans","62 ans","72 ans"],3],
["Comment surnomme-t-on Saint Louis ?","o","Louis IX"],
["Quelle dynastie Hugues Capet fonda-t-il en 987 ?","o","Les Capétiens"],
["Quel roi a été assassiné par Ravaillac en 1610 ?","m",["Henri III","Henri IV","Louis XIII","François II"],1],
["Quel dernier roi de France régna après 1830 ?","m",["Charles X","Louis-Philippe","Napoléon III","Louis XVIII"],1],
["Quel roi a construit Chambord au XVIe siècle ?","m",["Louis XI","Charles VIII","François Ier","Henri II"],2]
]},

{"t":"Napoléon Bonaparte","e":"⚔️","q":[
["Sur quelle île est-il né ?","m",["Malte","Corse","Sardaigne","Sicile"],1],
["Sur quelle île est-il mort en exil ?","m",["Corse","Elbe","Malte","Sainte-Hélène"],3],
["En quelle année devient-il empereur ?","m",["1799","1804","1810","1815"],1],
["Quelle bataille marque sa défaite finale ?","m",["Austerlitz","Waterloo","Trafalgar","Iéna"],1],
["Qui a peint le Sacre de Napoléon ?","m",["Ingres","David","Delacroix","Géricault"],1],
["Comment s'appelait sa première épouse ?","o","Joséphine de Beauharnais"],
["Quel code juridique a-t-il fait rédiger en 1804 ?","o","Le Code civil (Code Napoléon)"],
["Quel neveu a fondé le Second Empire ?","m",["Napoléon II","Napoléon III","Louis-Napoléon","Jérôme"],1],
["Combien de maréchaux a-t-il nommés au total ?","m",["10","18","26","32"],2],
["Quel amiral britannique l'a battu à Trafalgar ?","m",["Cochrane","Nelson","Collingwood","Jervis"],1]
]},

{"t":"La Révolution française","e":"🇫🇷","q":[
["Quelle date est la Prise de la Bastille ?","m",["14 juillet 1789","4 août 1789","20 juin 1789","10 août 1792"],0],
["Quel roi fut guillotiné en janvier 1793 ?","m",["Louis XIV","Louis XV","Louis XVI","Charles X"],2],
["Quelle est la devise républicaine née de la Révolution ?","m",["Union sacrée","Ordre et progrès","Liberté Égalité Fraternité","Un pour tous"],2],
["Qui dirigea la Terreur ?","m",["Danton","Robespierre","Marat","Saint-Just"],1],
["Qui a poignardé Marat dans son bain ?","m",["Charlotte Corday","Mme Roland","Olympe de Gouges","Mme du Barry"],0],
["Qui a donné son nom à la guillotine ?","o","Joseph-Ignace Guillotin"],
["Quel texte fondamental fut adopté le 26 août 1789 ?","o","La Déclaration des droits de l'homme et du citoyen"],
["Comment s'appelaient les révolutionnaires modérés ?","m",["Jacobins","Girondins","Feuillants","Cordeliers"],1],
["Quel coup d'État a mis fin à la Révolution ?","m",["9 thermidor","18 brumaire","18 fructidor","10 août"],1],
["Combien de temps a duré la Terreur ?","m",["3 mois","10 mois","2 ans","5 ans"],1]
]},

{"t":"La Seconde Guerre mondiale","e":"💣","q":[
["En quelle année a-t-elle commencé ?","m",["1914","1936","1939","1941"],2],
["Quelle date est le Débarquement de Normandie ?","m",["6 juin 1944","8 mai 1945","11 nov. 1944","1 sept. 1939"],0],
["Quelle ville a subi la 1ère bombe atomique ?","m",["Tokyo","Nagasaki","Hiroshima","Osaka"],2],
["Qui dirigeait la France Libre depuis Londres ?","m",["Pétain","de Gaulle","Mendès France","Blum"],1],
["Quel plan nazi visait l'invasion de l'URSS ?","m",["Overlord","Barbarossa","Sichel","Ardennes"],1],
["Comment s'appelle le régime français collaborationniste ?","o","Le régime de Vichy"],
["Quel général allié a libéré Paris avec Leclerc ?","o","Eisenhower (commandement) / Charles de Gaulle entre dans Paris"],
["Quelle bataille russe fut le tournant de 1942 ?","m",["Moscou","Stalingrad","Koursk","Sébastopol"],1],
["Combien de morts environ pendant la 2nde guerre ?","m",["20 M","40 M","60 M","100 M"],2],
["Qui a signé la reddition allemande à Reims ?","m",["Keitel","Dönitz","Jodl","Göring"],2]
]},

{"t":"La Première Guerre mondiale","e":"🎖️","q":[
["Quelles années ?","m",["1912-1917","1914-1918","1915-1919","1913-1918"],1],
["Quel assassinat déclencha la guerre ?","m",["Franz-Ferdinand","Guillaume II","Nicolas II","Jaurès"],0],
["Comment appelle-t-on le front de tranchées français ?","m",["Front de l'Est","Front de l'Ouest","Front du Nord","Front d'Orient"],1],
["Quel traité met fin à la guerre en 1919 ?","m",["Yalta","Versailles","Munich","Trianon"],1],
["Quelle bataille française symbolise l'horreur des tranchées ?","m",["La Somme","Verdun","La Marne","Le Chemin des Dames"],1],
["Comment appelait-on les jeunes soldats français ?","o","Les Poilus"],
["Quel gaz de combat a été utilisé pour la première fois ?","o","Le chlore (ou l'ypérite, ou le gaz moutarde)"],
["Combien de morts français ?","m",["600 000","900 000","1,4 million","2 millions"],2],
["Qui était président du Conseil français en 1917 ?","m",["Poincaré","Clemenceau","Briand","Painlevé"],1],
["Quelle date signe l'armistice ?","m",["1 sept.","11 nov.","25 déc.","14 juil."],1]
]},

{"t":"L'Égypte antique","e":"🏺","q":[
["Sur quel fleuve se développa cette civilisation ?","m",["Congo","Nil","Euphrate","Niger"],1],
["Comment appelle-t-on l'écriture égyptienne à images ?","m",["Cunéiforme","Hiéroglyphes","Démotique","Copte"],1],
["Quelle est la plus grande pyramide de Gizeh ?","m",["Khéphren","Khéops","Mykérinos","Djéser"],1],
["Quel dieu avait une tête de chacal ?","m",["Horus","Rê","Anubis","Seth"],2],
["Quelle reine fut la maîtresse de César et d'Antoine ?","m",["Néfertiti","Hatchepsout","Cléopâtre","Néfertari"],2],
["Quel Français a déchiffré les hiéroglyphes ?","o","Jean-François Champollion"],
["Quelle pierre a permis ce déchiffrage ?","o","La pierre de Rosette"],
["Quel jeune pharaon a une tombe retrouvée intacte en 1922 ?","m",["Ramsès II","Séthi Ier","Toutânkhamon","Akhenaton"],2],
["Quel pharaon monothéiste bouleversa la religion ?","m",["Ramsès II","Akhenaton","Thoutmôsis III","Khéops"],1],
["Combien de dynasties compte l'Égypte antique ?","m",["10","20","30","50"],2]
]},

{"t":"La Grèce antique","e":"🏛️","q":[
["Quelle ville organisait les Jeux olympiques antiques ?","m",["Athènes","Sparte","Delphes","Olympie"],3],
["Qui a écrit l'Iliade et l'Odyssée ?","m",["Sophocle","Homère","Euripide","Hésiode"],1],
["Quel philosophe a été condamné à boire la ciguë ?","m",["Platon","Aristote","Socrate","Épicure"],2],
["Quelle bataille de -490 opposa Grecs et Perses ?","m",["Thermopyles","Marathon","Salamine","Platées"],1],
["Quel roi macédonien conquit un immense empire ?","m",["Philippe II","Alexandre","Périclès","Léonidas"],1],
["Combien de cités formaient la Grèce antique ?","o","Des centaines (les poleis)"],
["Quel oracle célèbre les Grecs consultaient-ils ?","o","L'oracle de Delphes"],
["Quelle bataille navale opposa Athéniens et Perses en -480 ?","m",["Marathon","Salamine","Thermopyles","Actium"],1],
["Qui est considéré comme le père de l'histoire ?","m",["Hérodote","Thucydide","Xénophon","Plutarque"],0],
["Quel philosophe fut le maître d'Alexandre ?","m",["Platon","Aristote","Socrate","Diogène"],1]
]},

{"t":"La Rome antique","e":"🏟️","q":[
["Qui a fondé Rome selon la légende ?","m",["César","Romulus","Auguste","Énée"],1],
["Où combattaient les gladiateurs ?","m",["Forum","Panthéon","Colisée","Circus Maximus"],2],
["Quel général traversa les Alpes avec des éléphants ?","m",["Scipion","Hannibal","Pyrrhus","Attila"],1],
["Qui fut assassiné aux Ides de mars -44 ?","m",["Auguste","Néron","Jules César","Marc-Antoine"],2],
["Quel empereur fit incendier Rome selon la rumeur ?","m",["Caligula","Néron","Commode","Domitien"],1],
["Qui fut le premier empereur romain ?","o","Auguste (Octavien)"],
["Quel mur romain traversait le nord de l'Angleterre ?","o","Le mur d'Hadrien"],
["Combien de temps a duré l'Empire romain d'Occident ?","m",["200","500","1 000","1 500"],1],
["Quelle bataille de -31 av. J.-C. donne Rome à Octave ?","m",["Cannes","Actium","Zama","Pharsale"],1],
["Quel empereur romain devint chrétien au IVe siècle ?","m",["Théodose","Constantin","Julien","Justinien"],1]
]},

{"t":"Les Vikings","e":"🛡️","q":[
["De quelle région venaient-ils ?","m",["Écosse","Scandinavie","Balkans","Islande"],1],
["Quel bateau plat leur permettait de remonter les fleuves ?","m",["Trirème","Drakkar","Galion","Caravelle"],1],
["Qui atteignit l'Amérique 500 ans avant Colomb ?","m",["Erik le Rouge","Leif Erikson","Ragnar","Olaf"],1],
["Qui est le dieu principal des Vikings ?","m",["Thor","Loki","Freyr","Odin"],3],
["Comment appelle-t-on leur paradis guerrier ?","m",["Asgard","Midgard","Valhalla","Bifröst"],2],
["Quel Viking fonda le Groenland vers 985 ?","o","Erik le Rouge"],
["Comment appelaient-ils leur raid armé ?","o","Faire du viking (aller en expédition)"],
["Portaient-ils des casques à cornes ?","m",["Toujours","Seulement les chefs","Non, c'est un mythe","En cérémonie"],2],
["Quelle ville russe fut fondée par un Viking ?","m",["Moscou","Kiev","Novgorod","Saint-Pétersbourg"],2],
["Quel royaume anglais du nord-est fut sous domination viking ?","m",["Wessex","Mercie","Danelaw","Northumbrie"],2]
]},

{"t":"Le Moyen Âge","e":"🏰","q":[
["Combien de temps a duré le Moyen Âge (environ) ?","m",["5 siècles","10 siècles","15 siècles","20 siècles"],1],
["Quel événement marque sa fin en 1453 ?","m",["Chute Rome","Chute Constantinople","Découverte Amérique","Réforme"],1],
["Combien de croisades officielles y eut-il ?","m",["4","6","8","10"],2],
["Qui remporta Azincourt en 1415 ?","m",["Français","Anglais","Bourguignons","Écossais"],1],
["Qui délivra Orléans en 1429 ?","m",["Bertrand du Guesclin","Jeanne d'Arc","Charles VII","Bayard"],1],
["Quelle épidémie a tué un tiers de l'Europe au XIVe siècle ?","o","La peste noire"],
["Quelle guerre opposa France et Angleterre pendant 116 ans ?","o","La guerre de Cent Ans"],
["Quel ordre de chevaliers religieux fut dissous en 1312 ?","m",["Hospitaliers","Teutoniques","Templiers","Malte"],2],
["Quel style architectural médiéval succède au roman ?","m",["Baroque","Gothique","Classique","Byzantin"],1],
["Où fut brûlée Jeanne d'Arc en 1431 ?","m",["Paris","Reims","Rouen","Orléans"],2]
]},

{"t":"La mythologie grecque","e":"⚡","q":[
["Qui est le roi des dieux ?","m",["Poséidon","Hadès","Zeus","Apollon"],2],
["Qui a tué la Méduse ?","m",["Persée","Hercule","Ulysse","Thésée"],0],
["Qui a affronté le Cyclope Polyphème ?","m",["Achille","Ulysse","Jason","Énée"],1],
["Quelle déesse naît de la mer ?","m",["Athéna","Aphrodite","Héra","Artémis"],1],
["Combien de travaux fit Hercule ?","m",["7","10","12","15"],2],
["Qui a affronté le Minotaure dans le labyrinthe ?","o","Thésée"],
["Quel roi doit rouler éternellement un rocher ?","o","Sisyphe"],
["Qui porte le monde sur ses épaules ?","m",["Titan","Prométhée","Atlas","Cronos"],2],
["Combien de Muses existent ?","m",["3","7","9","12"],2],
["Qui a volé le feu aux dieux pour les humains ?","m",["Hermès","Prométhée","Icare","Sisyphe"],1]
]},

{"t":"Les pharaons","e":"👁️","q":[
["Quel pharaon a fait construire Khéops ?","m",["Kheops","Khéphren","Ramsès II","Djéser"],0],
["Quel pharaon régna le plus longtemps (66 ans) ?","m",["Ramsès II","Kheops","Toutânkhamon","Amenhotep III"],0],
["Quelle reine pharaonne se fit représenter en homme ?","m",["Cléopâtre","Hatchepsout","Néfertiti","Néfertari"],1],
["De quoi Toutânkhamon serait-il mort ?","m",["Assassinat","Maladie","Blessure de char","Cause encore débattue"],3],
["Combien d'années régna Toutânkhamon ?","m",["3","10","25","40"],1],
["Quelle reine pharaonne fut aussi épouse d'Akhenaton ?","o","Néfertiti"],
["Quelle bataille Ramsès II mena contre les Hittites ?","o","La bataille de Qadesh (1274 av. J.-C.)"],
["Quel pharaon fit ériger les temples d'Abou Simbel ?","m",["Kheops","Ramsès II","Toutânkhamon","Ptolémée"],1],
["Comment fut retrouvée la tombe de Toutânkhamon ?","m",["Par hasard","Après 6 ans de fouilles","Par un pilleur","Sous une autre tombe"],3],
["Quelle dynastie régnait à la mort de Cléopâtre ?","m",["Ramesside","Ptolémaïque","Saïte","Ancien Empire"],1]
]},

{"t":"Les Amérindiens","e":"🪶","q":[
["Quelle civilisation a construit le Machu Picchu ?","m",["Aztèques","Mayas","Incas","Olmèques"],2],
["Quelle civilisation régnait au Mexique à l'arrivée de Cortés ?","m",["Aztèques","Mayas","Incas","Toltèques"],0],
["Qui étaient les Sioux ?","m",["Une tribu du Sud","Une confédération des plaines","Un peuple andin","Des Inuits"],1],
["Quel chef sioux a battu Custer en 1876 ?","m",["Geronimo","Sitting Bull","Crazy Horse","Cochise"],2],
["Quelle bataille marque cette victoire sioux ?","m",["Wounded Knee","Little Big Horn","Sand Creek","Fetterman"],1],
["Quel peuple a construit les cités mayas de la jungle ?","o","Les Mayas"],
["Comment appelle-t-on la conquête de l'empire aztèque par Cortés ?","o","La Conquête espagnole (Conquista)"],
["Quel chef apache résista longtemps aux Américains ?","m",["Sitting Bull","Cochise","Geronimo","Red Cloud"],2],
["En quelle année eut lieu le massacre de Wounded Knee ?","m",["1870","1876","1890","1900"],2],
["Comment s'appelle la déesse-serpent aztèque ?","m",["Coatlicue","Quetzalcoatl","Tlaloc","Huitzilopochtli"],1]
]},

/* ═══════════ GÉOGRAPHIE ═══════════ */

{"t":"Les capitales","e":"🌍","q":[
["Capitale de l'Australie ?","m",["Sydney","Melbourne","Canberra","Perth"],2],
["Capitale de la Belgique ?","m",["Bruges","Bruxelles","Anvers","Gand"],1],
["Capitale du Canada ?","m",["Montréal","Toronto","Ottawa","Vancouver"],2],
["Capitale du Brésil ?","m",["Rio","São Paulo","Brasília","Salvador"],2],
["Capitale de la Turquie ?","m",["Istanbul","Ankara","Izmir","Antalya"],1],
["Capitale de la Nouvelle-Zélande ?","o","Wellington"],
["Capitale du Kazakhstan (rebaptisée) ?","o","Astana (ex-Nur-Sultan)"],
["Capitale de la Norvège ?","m",["Stockholm","Oslo","Helsinki","Bergen"],1],
["Capitale de l'Afrique du Sud (une des trois) ?","m",["Pretoria","Johannesburg","Durban","Le Cap"],0],
["Capitale du Bhoutan ?","m",["Katmandou","Thimphou","Colombo","Vientiane"],1]
]},

{"t":"Les fleuves du monde","e":"🏞️","q":[
["Le plus long fleuve du monde ?","m",["Amazone","Nil","Yangtsé","Mississippi"],1],
["Fleuve qui traverse Londres ?","m",["Tamise","Rhin","Escaut","Meuse"],0],
["Fleuve qui traverse Rome ?","m",["Pô","Tibre","Arno","Adige"],1],
["Fleuve qui traverse le Grand Canyon ?","m",["Colorado","Rio Grande","Missouri","Yukon"],0],
["Fleuve chinois surnommé le fleuve Jaune ?","m",["Yangtsé","Huang He","Mékong","Amour"],1],
["Fleuve européen qui traverse 10 pays ?","o","Le Danube"],
["Source de la Loire (Ardèche) ?","o","Le mont Gerbier-de-Jonc"],
["Fleuve qui sépare France et Allemagne ?","m",["Meuse","Rhin","Escaut","Moselle"],1],
["Fleuve indien sacré pour les hindous ?","m",["Indus","Gange","Brahmapoutre","Godavari"],1],
["Fleuve d'Afrique au plus fort débit ?","m",["Nil","Congo","Niger","Zambèze"],1]
]},

{"t":"Les océans et mers","e":"🌊","q":[
["Combien d'océans reconnus ?","m",["3","4","5","7"],2],
["Le plus grand océan ?","m",["Atlantique","Pacifique","Indien","Arctique"],1],
["La fosse océanique la plus profonde ?","m",["Puerto Rico","Kouriles","Mariannes","Java"],2],
["La plus grande mer intérieure du monde ?","m",["Baltique","Noire","Caspienne","Rouge"],2],
["Quelle mer très salée fait flotter ?","m",["Rouge","Morte","Aral","Noire"],1],
["Détroit qui sépare Europe et Afrique ?","o","Gibraltar"],
["Mer disparue à cause de l'irrigation soviétique ?","o","La mer d'Aral"],
["Mer bordée par la Grèce à l'ouest ?","m",["Adriatique","Égée","Ionienne","Marmara"],1],
["Combien de pays bordent la Méditerranée ?","m",["12","16","21","28"],2],
["Détroit entre Asie et Amérique ?","m",["Béring","Malacca","Hormuz","Bab-el-Mandeb"],0]
]},

{"t":"Les déserts","e":"🏜️","q":[
["Plus grand désert chaud du monde ?","m",["Gobi","Atacama","Sahara","Kalahari"],2],
["Désert le plus aride du monde ?","m",["Sonoran","Atacama","Sahara","Gobi"],1],
["Désert d'Asie Chine-Mongolie ?","m",["Gobi","Taklamakan","Karakoum","Kyzylkoum"],0],
["Plus grand désert (au total) sur Terre ?","m",["Arctique","Antarctique","Sahara","Kalahari"],1],
["Désert namibien aux dunes rouges ?","m",["Kalahari","Namib","Sossusvlei","Skeleton"],1],
["Comment appelle-t-on un point d'eau désertique ?","o","Une oasis"],
["Quel peuple nomade traverse le Sahara ?","o","Les Touaregs"],
["Désert américain de la Vallée de la Mort ?","m",["Sonoran","Mojave","Chihuahuan","Grand Bassin"],1],
["Précipitations max annuelles pour être désert ?","m",["< 250 mm","< 500 mm","< 100 mm","< 750 mm"],0],
["Désert éthiopien parmi les plus chauds ?","m",["Danakil","Kalahari","Gobi","Rub al Khali"],0]
]},

{"t":"Les régions de France","e":"🇫🇷","q":[
["Combien de régions métropolitaines ?","m",["13","18","22","27"],0],
["Région la plus peuplée ?","m",["Île-de-France","Auvergne-Rhône-Alpes","Hauts-de-France","Occitanie"],0],
["Préfecture des Bouches-du-Rhône ?","m",["Aix","Marseille","Arles","Toulon"],1],
["Région des châteaux de la Loire ?","m",["Bretagne","Centre-Val de Loire","Pays de la Loire","Nouvelle-Aquitaine"],1],
["Région qui produit le champagne ?","m",["Bourgogne","Grand Est","Hauts-de-France","Alsace"],1],
["Département le plus étendu de France ?","o","La Guyane (5e la plus grande hors DOM : Gironde)"],
["Département numéro 75 ?","o","Paris"],
["Combien de départements en France ?","m",["93","96","101","110"],2],
["Nouvelle région formée de Nord et Picardie ?","m",["Hauts-de-France","Grand Est","Normandie","Île-de-France"],0],
["Combien de communes en France (environ) ?","m",["10 000","20 000","35 000","50 000"],2]
]},

{"t":"Paris","e":"🗼","q":[
["Combien d'arrondissements ?","m",["16","18","20","22"],2],
["Hauteur de la Tour Eiffel (antennes) ?","m",["250 m","300 m","330 m","400 m"],2],
["Quel fleuve traverse Paris ?","m",["Loire","Seine","Marne","Oise"],1],
["Sur quelle île se trouve Notre-Dame ?","m",["St-Louis","Cité","Cygnes","St-Germain"],1],
["Année de construction de la Tour Eiffel ?","m",["1878","1889","1900","1910"],1],
["Avenue qui relie Concorde à l'Arc de Triomphe ?","o","Les Champs-Élysées"],
["Musée dans une ancienne gare ?","o","Le musée d'Orsay"],
["Basilique qui domine Montmartre ?","m",["Notre-Dame","Sacré-Cœur","St-Sulpice","La Madeleine"],1],
["Nombre de ponts sur la Seine dans Paris ?","m",["19","28","37","45"],2],
["Jardin entre Louvre et Concorde ?","m",["Luxembourg","Tuileries","Palais-Royal","Plantes"],1]
]},

{"t":"Les îles","e":"🏝️","q":[
["Plus grande île du monde ?","m",["Madagascar","Bornéo","Groenland","N.-Guinée"],2],
["Île du Christ Rédempteur ?","m",["Cuba","Manhattan","Aucune (continent)","Rio-péninsule"],2],
["Archipel qui inspira Darwin ?","m",["Galápagos","Hawaï","Canaries","Açores"],0],
["Combien d'îles compose le Japon ?","m",["~1 000","~3 000","~6 800","~15 000"],2],
["Île sicilienne à volcan actif permanent ?","o","Stromboli"],
["Île grecque aux maisons blanches et bleues ?","o","Santorin"],
["Île où Napoléon mourut en exil ?","m",["Elbe","Corse","Sainte-Hélène","Malte"],2],
["Île indonésienne au dragon géant ?","m",["Bali","Java","Komodo","Sumatra"],2],
["Île française surnommée l'île intense ?","m",["Réunion","Martinique","Guadeloupe","Corse"],0],
["Plus grande île de la Méditerranée ?","m",["Corse","Sicile","Sardaigne","Chypre"],1]
]},

{"t":"Les volcans","e":"🌋","q":[
["Volcan qui a enseveli Pompéi ?","m",["Etna","Stromboli","Vésuve","Vulcano"],2],
["Volcan italien de Sicile ?","m",["Vésuve","Etna","Stromboli","Vulcano"],1],
["Volcan islandais qui a bloqué les avions en 2010 ?","m",["Hekla","Eyjafjallajökull","Katla","Grimsvötn"],1],
["Volcan hawaïen le plus grand du monde ?","m",["Mauna Kea","Mauna Loa","Kilauea","Diamond Head"],1],
["Ceinture volcanique du Pacifique ?","m",["Anneau de lave","Ceinture de feu","Chaîne pacifique","Couronne"],1],
["Éruption de 1815 qui provoqua une année sans été ?","o","Le Tambora"],
["Volcan philippin qui a explosé en 1991 ?","o","Le Pinatubo"],
["Index qui mesure l'explosivité ?","m",["Richter","VEI","Mercalli","Saffir"],1],
["Éruption qui tua 30 000 personnes en 1902 (Martinique) ?","m",["Vésuve","Pelée","Krakatoa","Etna"],1],
["Volcan sous Yellowstone ?","m",["Rien","Une caldeira","Un simple lac","Un geyser"],1]
]},

{"t":"Les continents","e":"🌐","q":[
["Combien de continents ?","m",["5","6","7","8"],2],
["Continent le plus peuplé ?","m",["Afrique","Asie","Amérique","Europe"],1],
["Continent le plus grand ?","m",["Asie","Afrique","Amérique","Europe"],0],
["Continent sans pays officiel ?","m",["Antarctique","Océanie","Arctique","Aucun"],0],
["Combien de pays en Afrique (env.) ?","m",["30","40","54","70"],2],
["Continent découvert par Colomb en 1492 ?","o","L'Amérique"],
["Comment appelle-t-on Océanie + Australie ?","o","L'Océanie (Australie fait partie de l'Océanie)"],
["Point culminant d'Amérique du Sud ?","m",["Kilimandjaro","Aconcagua","Denali","Elbrouz"],1],
["Plus grand pays d'Europe ?","m",["Allemagne","France","Espagne","Ukraine (hors Russie)"],3],
["Combien de pays en Europe ?","m",["27","33","45","57"],2]
]},

{"t":"Les frontières","e":"🗺️","q":[
["Pays enclavé dans l'Afrique du Sud ?","m",["Swaziland","Lesotho","Botswana","Zimbabwe"],1],
["Micro-État enclavé dans l'Italie ?","m",["Malte","Andorre","Saint-Marin","Monaco"],2],
["Enclaves espagnoles en Afrique du Nord ?","m",["Ceuta et Melilla","Tanger","Gibraltar","Casablanca"],0],
["Pays qui donne son nom à l'équateur ?","m",["Colombie","Équateur","Pérou","Brésil"],1],
["Plus petit État du monde ?","m",["Monaco","Nauru","Vatican","Tuvalu"],2],
["Frontière la plus longue au monde ?","o","Canada – États-Unis (8 891 km)"],
["Combien de pays sans accès à la mer ?","o","44 pays enclavés"],
["Combien de voisins a la France ?","m",["6","8","11","14"],2],
["Combien de voisins a la Russie ?","m",["10","14","18","22"],1],
["Frontière naturelle entre France et Espagne ?","m",["Pyrénées","Alpes","Ardennes","Vosges"],0]
]},

{"t":"Les mégapoles","e":"🏙️","q":[
["Plus grande aire urbaine du monde ?","m",["Tokyo","Delhi","Shanghai","Mexico"],0],
["Ville chinoise la plus peuplée ?","m",["Pékin","Shanghai","Guangzhou","Chongqing"],1],
["Capitale africaine la plus peuplée ?","m",["Caire","Lagos","Kinshasa","Addis-Abeba"],2],
["Capitale de l'Inde ?","m",["Mumbai","Delhi","Kolkata","Chennai"],1],
["Nombre de mégapoles > 10M habitants (env.) ?","m",["10","20","33","50"],2],
["Mégapole mexicaine la plus peuplée ?","o","Mexico"],
["Ville surnommée la Grosse Pomme ?","o","New York"],
["Capitale du Bangladesh très dense ?","m",["Chittagong","Dacca","Sylhet","Khulna"],1],
["Ancienne capitale du Nigeria ?","m",["Ibadan","Lagos","Kano","Port Harcourt"],1],
["Ville avec le plus de gratte-ciels ?","m",["New York","Dubaï","Shanghai","Hong Kong"],3]
]},

/* ═══════════ SCIENCES ═══════════ */

{"t":"Le corps humain","e":"🧠","q":[
["Combien d'os chez un adulte ?","m",["150","206","250","300"],1],
["Combien de litres de sang ?","m",["2","5","8","12"],1],
["Os le plus long du corps ?","m",["Tibia","Fémur","Humérus","Colonne"],1],
["Combien de dents adulte (avec dents de sagesse) ?","m",["28","30","32","36"],2],
["Quel organe filtre l'urée ?","m",["Foie","Reins","Pancréas","Rate"],1],
["Combien de neurones dans le cerveau ?","o","Environ 86 milliards"],
["Plus petit os du corps ?","o","L'étrier (dans l'oreille)"],
["Combien de chromosomes chez l'humain ?","m",["23","46","48","64"],1],
["Groupe sanguin donneur universel ?","m",["A+","B+","AB-","O-"],3],
["Durée de vie d'un globule rouge ?","m",["1 semaine","1 mois","4 mois","1 an"],2]
]},

{"t":"Le système solaire","e":"🪐","q":[
["Combien de planètes ?","m",["7","8","9","12"],1],
["Planète la plus proche du Soleil ?","m",["Vénus","Mercure","Mars","Terre"],1],
["Planète la plus grosse ?","m",["Jupiter","Saturne","Uranus","Neptune"],0],
["Temps de trajet lumière Soleil → Terre ?","m",["1 s","8 min","1 h","1 jour"],1],
["Rover actuel sur Mars ?","m",["Curiosity","Opportunity","Perseverance","Spirit"],2],
["Nom de notre galaxie ?","o","La Voie lactée"],
["Étoile la plus proche du Soleil ?","o","Proxima Centauri"],
["Planète aux anneaux les plus spectaculaires ?","m",["Jupiter","Saturne","Uranus","Neptune"],1],
["Télescope spatial lancé en 2021 ?","m",["Hubble","James Webb","Kepler","Chandra"],1],
["Nombre de lunes de Jupiter (connues) ?","m",["16","50","80","95+"],3]
]},

{"t":"Les dinosaures","e":"🦖","q":[
["Il y a combien d'années les dinos ont-ils disparu ?","m",["10 M","66 M","150 M","250 M"],1],
["Dinosaure carnivore le plus célèbre ?","m",["Vélociraptor","T-Rex","Allosaure","Spinosaure"],1],
["Dinosaure à collerette et 3 cornes ?","m",["Stégosaure","Tricératops","Ankylosaure","Iguanodon"],1],
["Cause probable de leur extinction ?","m",["Éruption","Astéroïde","Virus","Climat seul"],1],
["Combien de temps ont-ils régné ?","m",["50 M","100 M","165 M","300 M"],2],
["Science qui étudie les fossiles ?","o","La paléontologie"],
["Cratère de l'astéroïde qui les tua ?","o","Chicxulub (Yucatán, Mexique)"],
["Sur quel continent vivait le T-Rex ?","m",["Afrique","Asie","Europe","Amérique du Nord"],3],
["Descendants directs des dinosaures ?","m",["Crocodiles","Lézards","Oiseaux","Tortues"],2],
["Combien de dents un T-Rex adulte ?","m",["30","60","100","200+"],1]
]},

{"t":"La chimie","e":"⚗️","q":[
["Combien d'éléments dans le tableau périodique ?","m",["92","108","118","150"],2],
["Symbole chimique de l'or ?","m",["Or","Au","Ag","O"],1],
["Symbole chimique du fer ?","m",["Fe","Ir","Fr","Fl"],0],
["Combien de couches électroniques dans l'atome de carbone ?","m",["1","2","3","4"],1],
["Qu'est-ce que le H2O ?","m",["Sel","Eau","Ozone","Air"],1],
["Qui a créé le tableau périodique en 1869 ?","o","Dmitri Mendeleïev"],
["Quel gaz inerte porte le n°2 dans le tableau ?","o","L'hélium (He)"],
["Élément le plus abondant dans l'univers ?","m",["Oxygène","Hydrogène","Carbone","Fer"],1],
["Quel élément a le numéro atomique 1 ?","m",["Hélium","Hydrogène","Lithium","Carbone"],1],
["Combien d'atomes de carbone dans un diamant ?","m",["Millions","Milliards","Trillions","Sextillions"],3]
]},

{"t":"La physique","e":"⚛️","q":[
["Qui a formulé E=mc² ?","m",["Newton","Einstein","Planck","Bohr"],1],
["Vitesse de la lumière (km/s) ?","m",["150 000","300 000","500 000","1 million"],1],
["Force de gravitation découverte par ?","m",["Galilée","Newton","Einstein","Kepler"],1],
["Unité de force ?","m",["Watt","Joule","Newton","Pascal"],2],
["Particule chargée négativement ?","m",["Proton","Neutron","Électron","Quark"],2],
["Quel physicien a inventé l'ampoule ?","o","Thomas Edison"],
["Théorie qui décrit l'infiniment petit ?","o","La mécanique quantique"],
["Combien d'états physiques standard ?","m",["3","4","5","7"],1],
["Boson découvert au CERN en 2012 ?","m",["W","Higgs","Z","Photon"],1],
["Où fut construit le LHC ?","m",["USA","Suisse-France (CERN)","Japon","Allemagne"],1]
]},

{"t":"Les inventions","e":"💡","q":[
["Qui a inventé l'ampoule commercialisable ?","m",["Franklin","Edison","Tesla","Bell"],1],
["Qui a inventé le téléphone en 1876 ?","m",["Meucci","Bell","Edison","Marconi"],1],
["Français qui a inventé la photographie ?","m",["Daguerre","Niépce","Lumière","Bayard"],1],
["Frères qui ont projeté le 1er film en 1895 ?","o","Les frères Lumière"],
["Qui a inventé le World Wide Web ?","o","Tim Berners-Lee (au CERN)"],
["Qui a inventé la pénicilline ?","m",["Pasteur","Fleming","Koch","Curie"],1],
["Année d'invention de l'imprimerie par Gutenberg ?","m",["1350","1450","1550","1650"],1],
["Qui a inventé la dynamite ?","m",["Nobel","Pasteur","Bell","Nietzsche"],0],
["Qui a inventé l'aspirine chez Bayer ?","m",["Hoffmann","Pasteur","Lister","Ehrlich"],0],
["Qui a perfectionné la machine à vapeur ?","m",["Papin","Watt","Newcomen","Trévithick"],1]
]},

{"t":"La médecine","e":"⚕️","q":[
["Qui est le père de la médecine ?","m",["Galien","Hippocrate","Pasteur","Fleming"],1],
["Qui a découvert les vaccins (vache/variole) ?","m",["Pasteur","Jenner","Koch","Fleming"],1],
["Qui a créé le vaccin contre la rage ?","m",["Pasteur","Jenner","Koch","Fleming"],0],
["Quel prix Nobel médecine a créé Fleming ?","m",["Insuline","Pénicilline","Aspirine","Morphine"],1],
["Combien de temps dure la formation d'un médecin en France ?","m",["6","9","12","15"],1],
["Comment appelle-t-on la peur des piqûres ?","o","La bélonéphobie (ou trypanophobie)"],
["Comment appelle-t-on l'étude des maladies du sang ?","o","L'hématologie"],
["Qui a fondé la Croix-Rouge ?","m",["Dunant","Pasteur","Schweitzer","Kellogg"],0],
["En quelle année fut découverte l'insuline ?","m",["1901","1921","1945","1960"],1],
["Combien de globules rouges dans une goutte de sang ?","m",["10 000","500 000","5 millions","1 milliard"],2]
]},

{"t":"Les mathématiques","e":"🔢","q":[
["Valeur approchée de Pi ?","m",["3,14","3,16","3,17","3,18"],0],
["Combien de côtés a un hexagone ?","m",["4","5","6","8"],2],
["Théorème du triangle rectangle ?","m",["Thalès","Pythagore","Euclide","Archimède"],1],
["Combien de degrés dans un cercle ?","m",["180","270","360","720"],2],
["Que vaut 7² ?","m",["47","49","51","55"],1],
["Comment appelle-t-on la moyenne du milieu d'une liste triée ?","o","La médiane"],
["Nombre d'or approximatif ?","o","1,618 (φ)"],
["Qui a démontré le dernier théorème de Fermat ?","m",["Perelman","Wiles","Grothendieck","Villani"],1],
["Combien de solides platoniciens ?","m",["3","5","7","10"],1],
["Qui est considéré comme le père de la géométrie ?","m",["Pythagore","Euclide","Thalès","Archimède"],1]
]},

{"t":"L'évolution","e":"🧬","q":[
["Qui a formulé la théorie de l'évolution ?","m",["Lamarck","Darwin","Wallace","Mendel"],1],
["De quel primate descend l'humain ?","m",["Chimpanzé","Gorille","Ancêtre commun","Orang-outan"],2],
["Quand est apparu Homo sapiens ?","m",["50 000 ans","300 000 ans","1 M ans","5 M ans"],1],
["Où fut découverte Lucy en 1974 ?","m",["Kenya","Éthiopie","Tanzanie","Afrique du Sud"],1],
["Combien de temps ont régné les dinos ?","o","Environ 165 millions d'années"],
["% d'ADN partagé avec le chimpanzé ?","o","Environ 98,8%"],
["Quelle espèce humaine a coexisté avec sapiens ?","m",["Neandertal","Denisova","Floresiensis","Toutes"],3],
["Année de publication de l'Origine des espèces ?","m",["1789","1859","1899","1929"],1],
["Cause probable de la disparition des dinos ?","m",["Éruption","Astéroïde","Virus","Climat"],1],
["Première forme de vie sur Terre ?","m",["Bactéries","Poissons","Plantes","Vers"],0]
]},

{"t":"La météo","e":"🌤️","q":[
["Instrument qui mesure la pression ?","m",["Anémomètre","Baromètre","Hygromètre","Pluviomètre"],1],
["Échelle qui mesure le vent ?","m",["Beaufort","Richter","Mercalli","Saffir"],0],
["Vitesse minimale d'un ouragan ?","m",["50 km/h","118 km/h","150 km/h","200 km/h"],1],
["Cyclone dans le Pacifique nord-ouest ?","m",["Ouragan","Typhon","Tornade","Sirocco"],1],
["Combien de gouttes dans un cumulus ?","m",["1 M","1 milliard","1 000 milliards","Innombrables"],2],
["Comment appelle-t-on la vitesse maximale enregistrée dans une tornade ?","o","484 km/h (Oklahoma, 1999)"],
["Vent chaud et sec des Alpes ?","o","Le foehn"],
["Comment se forme la grêle ?","m",["Pluie gelée","Neige tassée","Cristaux dans cumulonimbus","Vent glacial"],2],
["Température moyenne surface Terre ?","m",["10°C","15°C","20°C","25°C"],1],
["Endroit le plus pluvieux du monde ?","m",["Cherrapunji","Bora Bora","Amazonie","Hawaï"],0]
]},

/* ═══════════ ANIMAUX ═══════════ */

{"t":"Les grands félins","e":"🐆","q":[
["Plus grand félin du monde ?","m",["Lion","Tigre","Jaguar","Puma"],1],
["Félin le plus rapide ?","m",["Léopard","Tigre","Guépard","Lynx"],2],
["Combien de tigres sauvages restent ?","m",["500","4 500","40 000","150 000"],1],
["Félin d'Amérique aussi appelé lion des montagnes ?","o","Le puma (ou cougar)"],
["Seul grand félin qui vit en groupe ?","o","Le lion (les lionnes chassent en meute)"],
["Félin à touffes sur les oreilles ?","m",["Lynx","Caracal","Serval","Tous"],3],
["Combien de viande un lion peut-il manger d'un coup ?","m",["5 kg","15 kg","40 kg","100 kg"],2],
["Panthère noire = ?","m",["Espèce","Jaguar/léopard mélanique","Sous-genre","Puma noir"],1],
["Où vit le tigre de Sumatra ?","m",["Chine","Indonésie","Inde","Vietnam"],1],
["Particularité anatomique du guépard ?","m",["Griffes non-rétractiles","Ne rugit pas","Vue en couleur","Toutes"],3]
]},

{"t":"Les baleines","e":"🐋","q":[
["Plus grand animal ayant vécu ?","m",["Mégalodon","Rorqual bleu","Cachalot","Brachiosaure"],1],
["Taille maximale d'un rorqual bleu ?","m",["15 m","20 m","30 m","40 m"],2],
["Cétacé plongeur profond à dents ?","m",["Bosse","Cachalot","Rorqual","Grise"],1],
["Cétacé aux chants complexes ?","m",["Rorqual bleu","Baleine à bosse","Cachalot","Béluga"],1],
["Combien de temps une baleine en apnée max ?","m",["10 min","30 min","1 h","2 h"],3],
["Combien de litres de lait/jour pour une baleine bleue ?","o","Environ 600 litres"],
["Roman de Melville sur une baleine blanche ?","o","Moby Dick"],
["Pays qui a repris la chasse commerciale en 2019 ?","m",["Norvège","Islande","Japon","Russie"],2],
["Combien de fanons chez une baleine à bosse ?","m",["30","150","330","500"],2],
["Combien de dents un cachalot ?","m",["0","20","50","200"],2]
]},

{"t":"Les serpents","e":"🐍","q":[
["Combien d'espèces dans le monde ?","m",["500","1 500","3 800","10 000"],2],
["Serpent le plus long ?","m",["Cobra royal","Anaconda","Python réticulé","Boa"],2],
["Serpent le plus venimeux ?","m",["Mamba noir","Cobra","Taïpan du désert","Crotale"],2],
["Île interdite à cause des serpents (Brésil) ?","o","Ilha da Queimada Grande"],
["Comment un serpent avale une proie plus grosse ?","m",["Il mâche","Mâchoire déboîtée","Il découpe","Il vomit avant"],1],
["Comment appelle-t-on la mue ?","o","L'exuviation"],
["Serpent qui tue le plus d'humains/an ?","m",["Cobra","Vipère de Russell","Mamba","Taïpan"],1],
["Comment perçoit-il la chaleur des proies ?","m",["Yeux","Langue","Fossettes","Peau"],2],
["Serpent qui se dresse pour attaquer ?","m",["Cobra royal","Vipère","Boa","Python"],0],
["Temps qu'un serpent peut jeûner ?","m",["1 mois","6 mois","1 an","2 ans"],3]
]},

{"t":"Les oiseaux","e":"🦅","q":[
["Plus grand oiseau vivant (non-volant) ?","m",["Aigle","Autruche","Émeu","Condor"],1],
["Oiseau le plus rapide en piqué ?","m",["Aigle","Faucon pèlerin","Vautour","Albatros"],1],
["Combien d'espèces d'oiseaux ?","m",["3 000","6 000","10 000","20 000"],2],
["Oiseau qui migre le plus loin ?","m",["Cigogne","Grue","Sterne arctique","Hirondelle"],2],
["Rapace nocturne qui tourne sa tête à 270° ?","m",["Aigle","Faucon","Hibou","Vautour"],2],
["Vitesse max du faucon pèlerin en piqué ?","o","Plus de 350 km/h"],
["Quel oiseau plonge à 500 m pour pêcher ?","o","Le manchot empereur"],
["Combien d'ans peut vivre un albatros ?","m",["10","30","60","100"],2],
["Oiseau bleu et jaune familier des Alpes ?","m",["Merle","Mésange","Chocard","Rouge-gorge"],1],
["Combien d'œufs pond un moineau/an ?","m",["3-6","10","20","50"],1]
]},

{"t":"Les insectes","e":"🐛","q":[
["Combien d'espèces d'insectes ?","m",["100 000","500 000","1 M","+10 M"],2],
["Combien de pattes un insecte ?","m",["4","6","8","10"],1],
["Insecte le plus utile pour l'homme ?","m",["Fourmi","Abeille","Coccinelle","Papillon"],1],
["Insecte qui migre 4 000 km ?","m",["Machaon","Monarque","Morpho","Paon"],1],
["Combien d'yeux un fourmi ?","m",["2","3","5","1 000"],0],
["Combien de temps vit une abeille en été ?","o","6 semaines"],
["Insecte à métamorphose complète ?","o","Papillon, coléoptère, mouche, abeille..."],
["Insecte le plus rapide (vol) ?","m",["Guêpe","Libellule","Papillon","Frelon"],1],
["Combien d'orifices olfactifs a un papillon ?","m",["2","4","24","2 000"],3],
["Combien de fois par seconde bat une abeille ?","m",["50","230","500","1 000"],1]
]},

{"t":"Les chiens","e":"🐕","q":[
["Combien de races reconnues (FCI) ?","m",["100","250","370","500"],2],
["Plus grande race de chien ?","m",["Berger","Saint-Bernard","Dogue allemand","Terre-Neuve"],2],
["Race la plus rapide ?","m",["Berger","Lévrier","Bouledogue","Chihuahua"],1],
["Race originaire du Groenland ?","m",["Husky","Malamute","Samoyède","Groenlandais"],3],
["Combien de dents un chien adulte ?","m",["28","32","42","48"],2],
["Race la plus populaire au monde ?","o","Le Labrador"],
["Combien d'odeurs distingue un chien ?","o","Environ 1 million (nez 40x plus sensible)"],
["Sport canin qu'est l'agility ?","m",["Course de fond","Parcours d'obstacles","Ballon","Chasse"],1],
["Race française à poils longs de berger ?","m",["Beauceron","Briard","Bouvier","Berger picard"],1],
["Combien de temps vit un petit chien ?","m",["5-8","10-12","14-16","20+"],2]
]},

{"t":"Les chats","e":"🐈","q":[
["Combien de temps un chat dort par jour ?","m",["8 h","12 h","16 h","20 h"],2],
["Combien de dents un chat adulte ?","m",["24","30","36","42"],1],
["De quel pays vient le Siamois ?","m",["Chine","Thaïlande","Japon","Inde"],1],
["Race sans poils ?","m",["Persan","Sphynx","Maine Coon","Ragdoll"],1],
["Un chat retombe-t-il toujours sur ses pattes ?","m",["Oui","Non","Souvent","Jamais"],2],
["Combien de vibrisses (moustaches) un chat ?","o","Environ 24 (12 de chaque côté)"],
["Race originaire du Maine (USA) ?","o","Le Maine Coon"],
["Un chat voit-il les couleurs ?","m",["Oui, comme nous","Non","Partiellement","Uniquement le vert"],2],
["Combien de chats domestiques dans le monde ?","m",["50 M","150 M","600 M","1 milliard"],2],
["Pays qui vénérait les chats ?","m",["Grèce","Égypte","Rome","Perse"],1]
]},

{"t":"Les poissons","e":"🐠","q":[
["Combien d'espèces de poissons ?","m",["10 000","20 000","33 000","50 000"],2],
["Poisson le plus grand du monde ?","m",["Baleine","Requin blanc","Requin baleine","Mérou"],2],
["Poisson le plus dangereux pour l'homme ?","m",["Requin","Piranha","Poisson-pierre","Barracuda"],2],
["Poisson qui remonte les rivières pour pondre ?","m",["Truite","Saumon","Sandre","Brochet"],1],
["Combien de temps vit une carpe ?","m",["10","30","60","100+"],3],
["Combien de nageoires un poisson ?","o","Généralement 7 (dorsale, caudale, anale, 2 pectorales, 2 pelviennes)"],
["Poisson-serpent des grands fonds ?","o","La murène (ou anguille)"],
["Requin le plus dangereux ?","m",["Marteau","Blanc","Taureau","Tigre"],1],
["Combien d'os dans un poisson ?","m",["Aucun (arêtes)","50","100","200"],3],
["Poisson qui change de sexe ?","m",["Aucun","Mérou","Requin","Thon"],1]
]},

{"t":"Les papillons","e":"🦋","q":[
["Temps de vie d'un papillon adulte ?","m",["1 j","2 sem","3 mois","1 an"],1],
["Papillon qui migre 4 000 km ?","m",["Machaon","Monarque","Morpho","Paon"],1],
["De quoi se nourrissent-ils ?","m",["Pollen","Nectar","Feuilles","Insectes"],1],
["Combien de battements d'ailes/s ?","m",["1-3","5-12","20-30","60-100"],1],
["Nom de la métamorphose complète ?","o","Métamorphose complète (holométabolie)"],
["Grand papillon nocturne européen aux yeux dessinés ?","o","Le grand paon de nuit"],
["Où sont les papilles gustatives ?","m",["Langue","Pattes","Antennes","Ailes"],1],
["Grand papillon bleu d'Amazonie ?","m",["Sphinx","Morpho","Paon","Atlas"],1],
["Pourquoi le monarque est-il toxique ?","m",["Il produit venin","Il mange asclépiades","Il vole vite","Aucune raison"],1],
["Combien d'espèces de papillons dans le monde ?","m",["10 000","50 000","165 000","1 M"],2]
]},

/* ═══════════ ARTS ═══════════ */

{"t":"Les peintres impressionnistes","e":"🎨","q":[
["Qui a peint les Nymphéas ?","m",["Manet","Monet","Renoir","Degas"],1],
["Tableau qui a donné son nom au mouvement ?","m",["Déjeuner sur l'herbe","Impression soleil levant","Grande Jatte","Bal du Moulin"],1],
["Peintre qui s'est coupé l'oreille ?","m",["Van Gogh","Gauguin","Cézanne","Toulouse-Lautrec"],0],
["Où Monet a-t-il peint les Nymphéas ?","m",["Argenteuil","Giverny","Auvers","Honfleur"],1],
["Peintre célèbre pour ses danseuses ?","m",["Manet","Degas","Renoir","Sisley"],1],
["Musée parisien qui expose les Nymphéas ?","o","Musée de l'Orangerie"],
["Peintre parti vivre en Polynésie ?","o","Paul Gauguin"],
["Peintre pointilliste de La Grande Jatte ?","m",["Signac","Seurat","Cross","Pissarro"],1],
["Où se trouve la maison-jardin de Monet ?","m",["Barbizon","Giverny","Auvers","Rouen"],1],
["Musée avec la plus grande collection impressionniste ?","m",["Louvre","Orsay","Orangerie","Marmottan"],1]
]},

{"t":"La Renaissance italienne","e":"🖼️","q":[
["Qui a peint la Joconde ?","m",["Michel-Ange","Léonard","Raphaël","Botticelli"],1],
["Qui a sculpté le David ?","m",["Michel-Ange","Léonard","Donatello","Bernin"],0],
["Qui a peint la Chapelle Sixtine ?","m",["Léonard","Michel-Ange","Raphaël","Botticelli"],1],
["Qui a peint La Naissance de Vénus ?","m",["Botticelli","Titien","Raphaël","Piero"],0],
["Ville italienne berceau de la Renaissance ?","m",["Rome","Venise","Florence","Milan"],2],
["Famille qui a financé la Renaissance à Florence ?","o","Les Médicis"],
["Où se trouve la Joconde ?","o","Musée du Louvre (Paris)"],
["Combien de temps Michel-Ange peignit-il la Sixtine ?","m",["1 an","4 ans","10 ans","20 ans"],1],
["Où se trouve le David de Michel-Ange ?","m",["Uffizi","Accademia","Louvre","Vatican"],1],
["Père du portrait moderne italien ?","m",["Titien","Raphaël","Léonard","Caravage"],0]
]},

{"t":"La musique classique","e":"🎼","q":[
["Combien de symphonies Beethoven ?","m",["7","9","11","15"],1],
["Compositeur autrichien mort à 35 ans en 1791 ?","m",["Haydn","Mozart","Schubert","Beethoven"],1],
["Français qui a composé le Boléro ?","m",["Debussy","Fauré","Ravel","Saint-Saëns"],2],
["Italien qui a composé Les Quatre Saisons ?","m",["Verdi","Vivaldi","Puccini","Rossini"],1],
["Compositeur allemand devenu sourd ?","m",["Bach","Mozart","Beethoven","Wagner"],2],
["Combien de touches sur un piano ?","o","88 touches"],
["Compositeur baroque allemand mort en 1750 ?","o","Jean-Sébastien Bach"],
["Opéra de Bizet aux femmes gitanes ?","m",["Aïda","Carmen","Tosca","Traviata"],1],
["Meilleure marque de violon italien ?","m",["Stradivarius","Guarnerius","Amati","Tous"],3],
["Compositeur de la Marche nuptiale ?","m",["Wagner","Mendelssohn","Chopin","Schumann"],1]
]},

{"t":"Le jazz","e":"🎷","q":[
["Ville berceau du jazz ?","m",["Chicago","New York","Nouvelle-Orléans","Memphis"],2],
["Trompettiste surnommé Satchmo ?","m",["Miles Davis","Louis Armstrong","Dizzy","Chet Baker"],1],
["Style rapide né dans les 40s ?","m",["Swing","Bebop","Cool","Fusion"],1],
["Pianiste noir aveugle américain ?","m",["Monk","Peterson","Ray Charles","Waller"],2],
["Compositeur de Kind of Blue (1959) ?","m",["Coltrane","Davis","Parker","Rollins"],1],
["Instrument principal de Coltrane ?","o","Le saxophone"],
["Chanteuse américaine surnommée Lady Day ?","o","Billie Holiday"],
["Genre jazz mêlé au rock 60-70 ?","m",["Bebop","Fusion","Cool","Swing"],1],
["Festival de jazz du Sud de la France ?","m",["Antibes","Nice","Vienne","Tous"],3],
["Combien de mesures dans un blues standard ?","m",["8","12","16","32"],1]
]},

{"t":"La littérature française","e":"📚","q":[
["Qui a écrit Les Misérables ?","m",["Zola","Balzac","Hugo","Dumas"],2],
["Auteur du Petit Prince ?","m",["Camus","Saint-Exupéry","Gide","Malraux"],1],
["Auteur de Madame Bovary ?","m",["Zola","Flaubert","Maupassant","Balzac"],1],
["Qui a écrit Le Comte de Monte-Cristo ?","m",["Hugo","Dumas","Sue","Balzac"],1],
["Roman de Camus commençant par Aujourd'hui maman est morte ?","m",["Peste","Étranger","Chute","Premier Homme"],1],
["Auteur de La Comédie humaine ?","o","Honoré de Balzac"],
["Poète des Fleurs du Mal ?","o","Charles Baudelaire"],
["Combien de tomes fait la Recherche de Proust ?","m",["3","5","7","10"],2],
["Français prix Nobel avec L'Étranger ?","m",["Sartre","Camus","Gide","Aragon"],1],
["Fondateur du naturalisme français ?","m",["Balzac","Zola","Maupassant","Hugo"],1]
]},

{"t":"L'architecture","e":"🏛️","q":[
["Architecte de la Sagrada Familia ?","m",["Gaudí","Calatrava","Nouvel","Bofill"],0],
["Qui a conçu la Pyramide du Louvre ?","m",["Le Corbusier","Perrault","Pei","Nouvel"],2],
["Plus haute tour du monde ?","m",["Burj Khalifa","Merdeka 118","Shanghai T.","One World"],0],
["Père de l'Art nouveau à Bruxelles ?","m",["Guimard","Horta","Van de Velde","Bofill"],1],
["Architecte de l'Opéra Garnier ?","o","Charles Garnier"],
["Qui a construit la Tour Eiffel ?","o","Gustave Eiffel"],
["Style qui suit le roman au Moyen Âge ?","m",["Baroque","Gothique","Classique","Byzantin"],1],
["Combien de temps construction Notre-Dame ?","m",["50 ans","100 ans","200 ans","500 ans"],2],
["Père du modernisme architectural ?","m",["Le Corbusier","Mies","Wright","Aalto"],0],
["Qui a construit le pont du Millénium à Londres ?","m",["Foster","Rogers","Piano","Herzog"],0]
]},

{"t":"La photographie","e":"📷","q":[
["Année de la 1ère photo (Niépce) ?","m",["1789","1826","1889","1900"],1],
["Nom du procédé de Daguerre ?","m",["Ambrotype","Daguerréotype","Calotype","Ferrotype"],1],
["Marque japonaise Nikon fondée en ?","m",["1917","1935","1959","1975"],0],
["Combien de pixels dans un iPhone récent (env.) ?","m",["8 MP","12 MP","48 MP","100 MP"],2],
["Photographe américain de la Guerre de Sécession ?","o","Mathew Brady"],
["Ouverture standard qui laisse rentrer le plus de lumière ?","o","f/1.4 (ou plus petit chiffre = plus grande ouverture)"],
["Marque française d'appareils argentiques ?","m",["Kodak","Fuji","Leica","Foca"],3],
["Format film le plus courant du XXe siècle ?","m",["35 mm","6x6","6x9","4x5"],0],
["Photographe français de Paris qui a documenté la ville ?","m",["Doisneau","Cartier-Bresson","Ronis","Tous"],3],
["Combien de temps vit une photo argentique (env.) ?","m",["10 ans","50 ans","100 ans","+200 ans"],3]
]},

{"t":"La BD franco-belge","e":"💬","q":[
["Qui a créé Tintin ?","m",["Franquin","Hergé","Uderzo","Peyo"],1],
["Qui sont les 2 créateurs d'Astérix ?","m",["Hergé + Franquin","Uderzo + Goscinny","Franquin + Peyo","Peyo + Hergé"],1],
["Qui a créé les Schtroumpfs ?","m",["Franquin","Hergé","Peyo","Uderzo"],2],
["Album le plus vendu de Tintin ?","m",["Objectif Lune","Tibet","On a marché sur la Lune","Trésor Rackham"],3],
["Ville belge natale d'Hergé ?","m",["Bruxelles","Anvers","Liège","Bruges"],0],
["Créateur de Gaston Lagaffe ?","o","André Franquin"],
["Compagnon canin de Tintin ?","o","Milou"],
["Village gaulois d'Astérix (imaginaire) ?","m",["Gergovie","Bibracte","Aléria","Petit Bonum"],3],
["Créateur de Lucky Luke ?","m",["Morris","Goscinny","Uderzo","Peyo"],0],
["Combien d'aventures de Tintin (albums) ?","m",["16","24","32","40"],1]
]},

/* ═══════════ SPORT ═══════════ */

{"t":"Le football","e":"⚽","q":[
["Combien de joueurs par équipe ?","m",["10","11","12","15"],1],
["Fois où la France a gagné la CM ?","m",["1","2","3","4"],1],
["Pays le plus titré en CM ?","m",["Allemagne","Argentine","Brésil","Italie"],2],
["Adversaire en finale CM 1998 ?","m",["Brésil","Italie","Croatie","Allemagne"],0],
["Adversaire en finale CM 2018 ?","m",["Argentine","Croatie","Belgique","Brésil"],1],
["Combien de Ballons d'Or Messi ?","o","8"],
["Numéro 10 iconique brésilien (3 CM) ?","o","Pelé"],
["Qui a marqué la Main de Dieu en 1986 ?","m",["Maradona","Pelé","Zico","Baggio"],0],
["Adversaire de la France en finale Euro 2016 ?","m",["Portugal","Allemagne","Italie","Espagne"],0],
["Joueur français à 2 buts en finale CM 98 ?","m",["Deschamps","Zidane","Petit","Djorkaeff"],1]
]},

{"t":"Le tennis","e":"🎾","q":[
["Surface de Roland-Garros ?","m",["Gazon","Dur","Terre battue","Moquette"],2],
["Quels sont les 4 Grands Chelems ?","m",["Aus/Fra/UK/US","Fra/Esp/UK/US","Fra/It/UK/US","Aus/Fra/It/US"],0],
["Combien de sets pour gagner Chelem hommes ?","m",["2","3","4","5"],1],
["Français vainqueur Roland-Garros 1983 ?","m",["Leconte","Noah","Forget","Pioline"],1],
["Titres Nadal à Roland-Garros ?","m",["10","12","14","16"],2],
["Record de Grands Chelems hommes ?","o","Novak Djokovic (24)"],
["Comment appelle-t-on 40-40 ?","o","Égalité (deuce)"],
["Suisse n°1 mondial 310 semaines ?","m",["Wawrinka","Federer","Djokovic","Nadal"],1],
["Sœur Williams la plus titrée ?","m",["Venus","Serena","Ex-æquo","Aucune"],1],
["Ville de Wimbledon ?","m",["Paris","Londres","New York","Melbourne"],1]
]},

{"t":"Les JO","e":"🥇","q":[
["Fréquence des JO d'été ?","m",["2","3","4","5"],2],
["Combien d'anneaux dans le logo ?","m",["4","5","6","7"],1],
["Ville de la naissance des JO antiques ?","m",["Athènes","Sparte","Delphes","Olympie"],3],
["Qui a rétabli les JO modernes en 1896 ?","m",["Coubertin","Diagoras","Brundage","Samaranch"],0],
["Ville-hôte des JO 2024 ?","o","Paris"],
["Nageur américain aux 23 médailles d'or ?","o","Michael Phelps"],
["Année des JO à Barcelone ?","m",["1988","1992","1996","2000"],1],
["Athlète noir 4 or à Berlin 1936 ?","m",["Owens","Louis","Ali","Metcalfe"],0],
["Nouvelle discipline aux JO 2024 ?","m",["Skate","Breakdance","Karaté","Surf"],1],
["Combien de médailles France aux JO 2024 (au total) ?","m",["49","64","78","95"],2]
]},

{"t":"Le Tour de France","e":"🚴","q":[
["Année de création du Tour ?","m",["1873","1903","1923","1953"],1],
["Combien d'étapes typiquement ?","m",["15","21","28","35"],1],
["Couleur du maillot de leader ?","m",["Rouge","Vert","Jaune","Blanc"],2],
["Couleur du maillot de meilleur grimpeur ?","m",["Jaune","Vert","Blanc","À pois"],3],
["Français qui a gagné 5 fois ?","m",["Anquetil","Hinault","Merckx","Fignon"],1],
["Belge qui a gagné 5 fois (Eddy) ?","o","Eddy Merckx"],
["Distance moyenne du Tour (km) ?","o","Environ 3 500 km"],
["Ville d'arrivée finale traditionnelle ?","m",["Paris","Lyon","Nice","Marseille"],0],
["Coureur américain déchu (dopage) ?","m",["Armstrong","LeMond","Landis","Hincapie"],0],
["Combien de fois Anquetil, Hinault, Merckx et Indurain ont-ils gagné (chacun) ?","m",["3","5","7","10"],1]
]},

{"t":"Le rugby","e":"🏉","q":[
["Combien de joueurs par équipe ?","m",["11","13","15","17"],2],
["Combien de points pour un essai ?","m",["3","5","7","10"],1],
["Adversaire de la France en finale CM 2023 (élimination) ?","m",["Afrique du Sud","N.-Zélande","Angleterre","Irlande"],0],
["Pays fondateur du rugby moderne ?","m",["France","Angleterre","Écosse","Pays de Galles"],1],
["Combien d'équipes dans le Tournoi ?","m",["4","5","6","8"],2],
["Nom de la Coupe du Monde de rugby ?","o","La Coupe Webb Ellis (nom William Webb Ellis)"],
["Combien de fois la France a gagné la CM ?","o","0 fois (jamais)"],
["Combien de points pour une transformation ?","m",["1","2","3","5"],1],
["Ville du stade Ellis Park ?","m",["Le Cap","Durban","Johannesburg","Pretoria"],2],
["N-Zélandais surnommé les All Blacks à cause de ?","m",["Maillot","Peau","Casque","Cheveux"],0]
]},

{"t":"La Formule 1","e":"🏎️","q":[
["Combien de titres mondiaux pour Schumacher ?","m",["5","6","7","8"],2],
["Combien de titres pour Hamilton ?","m",["5","6","7","8"],2],
["Écurie italienne mythique ?","m",["McLaren","Ferrari","Williams","Alpine"],1],
["Pilote brésilien mort à Imola en 1994 ?","m",["Piquet","Fittipaldi","Senna","Barrichello"],2],
["Circuit de Monaco = ?","m",["Route de campagne","Rue de ville","Circuit permanent","Autoroute"],1],
["Combien de GP dans une saison actuelle ?","m",["16","20","24","30"],2],
["Coureur français aux 3 podiums en 2015 (Lotus) ?","m",["Grosjean","Ocon","Gasly","Vergne"],0],
["Vitesse max en F1 (km/h) ?","m",["300","350","370","400"],2],
["Ville des 24 Heures d'endurance ?","m",["Silverstone","Le Mans","Nürburgring","Monza"],1],
["Age minimum pour piloter en F1 ?","m",["16","18","20","23"],1]
]},

{"t":"L'alpinisme","e":"🏔️","q":[
["Plus haut sommet du monde ?","m",["K2","Everest","Kangchenjunga","Aconcagua"],1],
["Altitude de l'Everest ?","m",["7 850 m","8 400 m","8 849 m","9 200 m"],2],
["Premier au sommet de l'Everest en 1953 ?","m",["Mallory","Hillary","Bonatti","Whymper"],1],
["Combien de sommets à plus de 8 000 m ?","m",["8","10","14","20"],2],
["Français ayant fait tous les 8 000 m ?","m",["Herzog","Terray","Loretan","Béghin"],2],
["Sommet des Alpes en France (culminant) ?","o","Le Mont Blanc (4 809 m)"],
["Sherpa népalais qui accompagna Hillary ?","o","Tenzing Norgay"],
["Combien de morts sur l'Everest (total) ?","m",["100","200","300","+320"],3],
["Premier français au sommet de l'Everest ?","m",["Bonatti","Mazeaud","Dujmovits","Devouassoux"],1],
["Combien de temps pour monter à l'Everest (base) ?","m",["1 sem","2 sem","2 mois","6 mois"],2]
]},

/* ═══════════ POP CULTURE ═══════════ */

{"t":"Star Wars","e":"⚡","q":[
["Créateur de la saga ?","m",["Spielberg","Lucas","Kubrick","Cameron"],1],
["Arme des Jedi ?","m",["Sabre plasma","Sabre laser","Sabre atomique","Sabre photonique"],1],
["Qui dit Je suis ton père ?","m",["Yoda","Obi-Wan","Dark Vador","Palpatine"],2],
["Père de qui, Dark Vador ?","m",["Han Solo","Luke uniquement","Luke et Leia","Rey"],2],
["Planète de Luke Skywalker ?","m",["Tatooine","Naboo","Coruscant","Endor"],0],
["Vrai nom de Dark Vador ?","o","Anakin Skywalker"],
["Vaisseau de Han Solo ?","o","Le Faucon Millenium"],
["Jour non-officiel Star Wars ?","m",["4 mai","25 mai","1 mai","4 juillet"],0],
["Combien de films de la saga Skywalker ?","m",["6","8","9","11"],2],
["Acteur de Han Solo dans les originaux ?","m",["Hamill","Ford","McGregor","Guinness"],1]
]},

{"t":"Harry Potter","e":"⚡","q":[
["Autrice ?","m",["Tolkien","Rowling","Lewis","Pullman"],1],
["Combien de tomes ?","m",["5","7","8","10"],1],
["École de sorcellerie ?","o","Poudlard (Hogwarts)"],
["Maison d'Harry ?","m",["Serpentard","Poufsouffle","Gryffondor","Serdaigle"],2],
["Ennemi principal d'Harry ?","o","Voldemort (Tom Jedusor)"],
["Hibou d'Harry ?","m",["Errol","Coquecigrue","Hedwige","Pattenrond"],2],
["Directeur bienveillant de Poudlard ?","m",["Dumbledore","Rogue","McGonagall","Slughorn"],0],
["Combien de reliques de la Mort ?","m",["1","3","5","7"],1],
["Actrice de Hermione ?","m",["Bonnie Wright","Emma Watson","Evanna Lynch","Emma Stone"],1],
["Sort de mort dans la saga ?","m",["Sectumsempra","Endoloris","Impero","Avada Kedavra"],3]
]},

{"t":"Disney","e":"🏰","q":[
["1er long-métrage animé Disney (1937) ?","m",["Bambi","Blanche-Neige","Cendrillon","Pinocchio"],1],
["Combien de nains dans Blanche-Neige ?","m",["5","7","9","12"],1],
["Créateur de Mickey ?","m",["Ub Iwerks","Walt Disney","Roy Disney","Fred Moore"],1],
["Film où Simba grandit ?","o","Le Roi Lion"],
["Princesse qui chante Libérée délivrée ?","o","Elsa (La Reine des Neiges)"],
["Combien de parcs Disneyland dans le monde ?","m",["4","5","6","8"],2],
["1ère production Pixar (1995) ?","m",["Toy Story","1001 pattes","Monstres Cie","Cars"],0],
["Amoureuse d'un prince nommé Éric ?","m",["Ariel","Belle","Cendrillon","Jasmine"],0],
["Année où Disney a racheté Star Wars ?","m",["2008","2010","2012","2015"],2],
["Nombre de dalmatiens dans le titre du film ?","m",["99","101","103","105"],1]
]},

{"t":"Marvel","e":"🦸","q":[
["Combien de Pierres d'Infinité ?","m",["4","5","6","7"],2],
["Vrai nom d'Iron Man ?","m",["Bruce","Tony","Steve","Peter"],1],
["Marteau de Thor ?","o","Mjolnir"],
["Ville de Peter Parker (Spider-Man) ?","m",["Boston","New York","Chicago","Los Angeles"],1],
["Créateur du Punisher (Marvel writer) ?","m",["Stan Lee","Kirby","Gerry Conway","Steve Ditko"],2],
["Comment Bruce Banner devient Hulk ?","o","Après une exposition à des rayons gamma"],
["Année du 1er film Marvel (Iron Man) ?","o","2008"],
["Combien de films dans la Phase 1 du MCU ?","m",["4","6","8","10"],1],
["Ennemi ultime dans Infinity War ?","m",["Loki","Thanos","Ultron","Kang"],1],
["Personnage bleue née de la Nébuleuse ?","m",["Gamora","Nebula","Mantis","Valkyrie"],1]
]},

{"t":"Les Beatles","e":"🎸","q":[
["Combien de membres ?","m",["3","4","5","6"],1],
["Ville anglaise natale ?","m",["Londres","Liverpool","Manchester","Birmingham"],1],
["Beatle assassiné à New York en 1980 ?","m",["Paul","John","George","Ringo"],1],
["Beatle batteur ?","m",["Paul","John","George","Ringo"],3],
["Année de la séparation ?","m",["1965","1968","1970","1972"],2],
["Épouse artiste de John Lennon ?","o","Yoko Ono"],
["Producteur légendaire du groupe ?","o","George Martin (le 5e Beatle)"],
["Dernier album studio ?","m",["Abbey Road","Let It Be","Sgt. Pepper","White Album"],1],
["1er n°1 aux USA en 1964 ?","m",["Let It Be","Hey Jude","I Want to Hold Your Hand","Yesterday"],2],
["Beatle mort du cancer en 2001 ?","m",["Paul","John","George","Ringo"],2]
]},

{"t":"Les Rolling Stones","e":"🎸","q":[
["Chanteur principal ?","m",["Mick Jagger","Keith Richards","Ronnie Wood","Charlie Watts"],0],
["Année de création du groupe ?","m",["1955","1962","1968","1975"],1],
["Batteur historique mort en 2021 ?","m",["Wyman","Watts","Wood","Jones"],1],
["Fondateur mort à 27 ans en 1969 ?","m",["Brian Jones","Bill Wyman","Charlie Watts","Ronnie Wood"],0],
["Chanson culte de 1965 ?","m",["Angie","Satisfaction","Paint It Black","Sympathy"],1],
["Ville natale du groupe ?","o","Londres"],
["Symbole des Stones (langue tirée) ?","o","La bouche à la langue tirée"],
["Album Sticky Fingers avec couverture d'?","m",["Warhol","Basquiat","Lichtenstein","Haring"],0],
["Guitariste principal ?","m",["Mick Taylor","Keith Richards","Brian Jones","Ronnie Wood"],1],
["Nombre de concerts stades depuis 1962 ?","m",["500","1 000","2 000","+3 000"],3]
]},

{"t":"Les jeux vidéo","e":"🎮","q":[
["Plombier moustachu de 1985 ?","m",["Sonic","Mario","Pac-Man","Zelda"],1],
["Créateur de la Game Boy ?","m",["Sega","Sony","Nintendo","Atari"],2],
["Jeu de blocs le plus vendu ?","m",["Tetris","Fortnite","Minecraft","GTA V"],2],
["Jeu de battle royale populaire dès 2017 ?","m",["Fortnite","PUBG","Apex","CoD"],0],
["Mascotte bleue rapide de Sega ?","o","Sonic (le hérisson)"],
["Console Sony lancée en 1994 ?","o","La PlayStation (PS1)"],
["Studio français d'Assassin's Creed ?","m",["Arkane","Ubisoft","Dontnod","Quantic Dream"],1],
["Jeu japonais aux monstres à capturer (1996) ?","m",["Digimon","Yu-Gi-Oh","Pokémon","Monster Hunter"],2],
["Jeu Nintendo 2017 avec Link (open world) ?","m",["Mario Odyssey","BOTW","Splatoon","Metroid"],1],
["1er jeu vidéo commercialisé (1972) ?","m",["Pong","Space Invaders","Pac-Man","Asteroids"],0]
]},

{"t":"Le cinéma français","e":"🎬","q":[
["Réalisateur d'Amélie Poulain ?","m",["Jeunet","Besson","Klapisch","Ozon"],0],
["Film 2011 avec Omar Sy ?","m",["Bronzés","Intouchables","Ch'tis","Prénom"],1],
["Française oscarisée pour La Môme ?","m",["Adjani","Cotillard","Binoche","Deneuve"],1],
["Actrice d'Amélie ?","m",["Marceau","Tautou","Delpy","Laurent"],1],
["Film français #1 en entrées ?","m",["Grande Vadrouille","Ch'tis","Intouchables","Astérix Cléo"],1],
["Réalisateur du Grand Bleu ?","o","Luc Besson"],
["Réalisateur de La Haine ?","o","Mathieu Kassovitz"],
["Palme d'Or 2023 française ?","m",["Titane","Anatomie chute","Portrait","Sibyl"],1],
["Duo de La Grande Vadrouille ?","m",["De Funès+Bourvil","Belmondo+Delon","Ventura+Gabin","Fernandel+Bourvil"],0],
["Français aux 5 Oscars pour The Artist ?","m",["Audiard","Hazanavicius","Klapisch","Chomet"],1]
]},

{"t":"Le cinéma américain","e":"🎥","q":[
["Réalisateur d'E.T. et Jurassic Park ?","m",["Lucas","Spielberg","Scorsese","Coppola"],1],
["Réalisateur du Parrain ?","m",["Coppola","Scorsese","Kubrick","De Palma"],0],
["Année du 1er Star Wars ?","m",["1975","1977","1980","1983"],1],
["Réalisateur d'Inception et Interstellar ?","m",["Nolan","Fincher","Villeneuve","Anderson"],0],
["Actrice de Kill Bill ?","m",["Thurman","Jolie","Bullock","Aniston"],0],
["Réalisateur du Titanic ?","o","James Cameron"],
["Palme d'Or 1994 (Tarantino) ?","o","Pulp Fiction"],
["Combien d'Oscars pour Le Retour du Roi ?","m",["7","9","11","13"],2],
["Réalisatrice oscarisée pour Nomadland ?","m",["Bigelow","Zhao","Coppola","DuVernay"],1],
["Film américain le plus rentable ?","m",["Titanic","Avengers Endgame","Avatar","Star Wars 7"],2]
]},

{"t":"Les mangas","e":"📖","q":[
["Auteur de Dragon Ball ?","m",["Oda","Toriyama","Kishimoto","Kubo"],1],
["Auteur de One Piece ?","m",["Toriyama","Oda","Kishimoto","Kubo"],1],
["Ville de Naruto ?","m",["Konoha","Suna","Kiri","Kumo"],0],
["Nombre de Chevaliers du Zodiaque de Bronze ?","m",["3","5","7","12"],1],
["Sport dans Slam Dunk ?","m",["Basket","Foot","Baseball","Volley"],0],
["Fondateur de Studio Ghibli ?","o","Hayao Miyazaki (avec Takahata)"],
["Manga aux âmes et pouvoirs (Nen) ?","o","Hunter x Hunter"],
["Combien de tomes One Piece (env. 2024) ?","m",["70","90","108","150"],2],
["Manga avec les Titans ?","m",["Berserk","Attack on Titan","Vagabond","Blame"],1],
["Genre de manga pour adolescentes ?","m",["Shōnen","Seinen","Shōjo","Josei"],2]
]},

{"t":"Les séries TV","e":"📺","q":[
["Série médicale phare des années 90 ?","m",["Urgences","Grey's","House","Scrubs"],0],
["Créateur de Breaking Bad ?","m",["Weiner","Chase","Gilligan","Simon"],2],
["Nombre de saisons de Game of Thrones ?","m",["6","7","8","10"],2],
["Chaîne américaine d'HBO diffuse ?","m",["Netflix","HBO","Amazon","Apple"],1],
["Série française à succès de Netflix (Adjani, Lellouche) ?","m",["Lupin","Marseille","Le Bureau","Balthazar"],0],
["Créateur des Simpsons ?","o","Matt Groening"],
["Ville de Friends ?","o","New York (Manhattan)"],
["Nombre de saisons de Friends ?","m",["8","10","12","15"],1],
["Personnage principal de Sherlock (BBC) ?","m",["Cumberbatch","Freeman","Hiddleston","Cavill"],0],
["Série coréenne à succès en 2021 (Netflix) ?","m",["Squid Game","Vincenzo","D.P.","Kingdom"],0]
]},

/* ═══════════ CUISINE ═══════════ */

{"t":"La cuisine française","e":"🥐","q":[
["Plat lyonnais fait de tripes ?","m",["Quenelles","Tablier","Andouillette","Rosette"],2],
["Région d'origine de la choucroute ?","m",["Bretagne","Alsace","Bourgogne","Lorraine"],1],
["Sauce du steak tartare ?","m",["Bourguignonne","Béarnaise","Aucune (cru)","Béchamel"],2],
["Fromage traditionnel de la fondue savoyarde ?","m",["Reblochon","Beaufort","Comté","Tous"],3],
["Région d'origine de la ratatouille ?","m",["Bretagne","Corse","Provence","Auvergne"],2],
["Ville d'origine du cassoulet ?","o","Castelnaudary (ou Toulouse, Carcassonne)"],
["Dessert alsacien en forme de spirale ?","o","Le kouglof (kougelhopf)"],
["Le repas gastronomique français est à l'UNESCO depuis ?","m",["2005","2010","2015","2020"],1],
["Nombre max d'étoiles Michelin ?","m",["2","3","4","5"],1],
["Chef français aux plus d'étoiles Michelin ?","m",["Bocuse","Ducasse","Robuchon","Trois-gros"],2]
]},

{"t":"Le vin français","e":"🍷","q":[
["Région du champagne ?","m",["Bourgogne","Alsace","Champagne","Bordelais"],2],
["Cépage rouge le plus planté au monde ?","m",["Merlot","Cabernet Sauvignon","Pinot noir","Syrah"],1],
["Vin pétillant de Vénétie ?","m",["Prosecco","Champagne","Cava","Crémant"],0],
["Bordeaux blanc liquoreux ?","m",["Barsac","Sauternes","Monbazillac","Jurançon"],1],
["Département des Côtes du Rhône ?","m",["Aveyron","Vaucluse","Ardèche","Drôme"],1],
["Science du vin ?","o","L'œnologie"],
["Insecte destructeur des vignes au XIXe ?","o","Le phylloxéra"],
["Bouteille qui contient 6 bouteilles standard ?","m",["Magnum","Jéroboam","Mathusalem","Salmanazar"],1],
["Degré moyen d'un bordeaux ?","m",["9-10","11-12","13-14","15-16"],2],
["Millésime bordelais légendaire (le siècle) ?","m",["1945","1961","1982","2005"],2]
]},

{"t":"Les fromages","e":"🧀","q":[
["Combien de fromages AOP en France ?","m",["20","45","65","100"],1],
["Région d'origine du camembert ?","m",["Bretagne","Normandie","Picardie","IdF"],1],
["Fromage bleu affiné dans des grottes ?","m",["Bleu d'Auvergne","Fourme","Roquefort","Bleu Causses"],2],
["Lait du roquefort ?","m",["Vache","Chèvre","Brebis","Bufflonne"],2],
["Fromage suisse troué ?","m",["Gruyère","Comté","Emmental","Appenzell"],2],
["Fromage corse à pâte molle réputé fort ?","o","Le brocciu"],
["Affinage minimum du comté ?","o","4 mois (souvent 12-36 mois)"],
["Fromage frais italien (mozzarella + crème) ?","m",["Burrata","Ricotta","Stracchino","Provolone"],0],
["Fromage grec au lait de brebis ?","m",["Halloumi","Feta","Manouri","Mizithra"],1],
["Consommation moyenne fromage/an par Français ?","m",["8","16","26","40"],2]
]},

{"t":"Le chocolat","e":"🍫","q":[
["De quel fruit vient le chocolat ?","m",["Café","Caroube","Cabosse cacao","Cola"],2],
["Peuple ancien qui utilisait le cacao comme monnaie ?","m",["Incas","Aztèques","Mayas","Olmèques"],1],
["1er producteur mondial de cacao ?","m",["Ghana","Brésil","Côte d'Ivoire","Cameroun"],2],
["Pays européen qui consomme le plus de chocolat/hab ?","m",["Belgique","France","Suisse","Allemagne"],2],
["Chocolat sans pâte de cacao ?","m",["Noir","Lait","Blanc","Ruby"],2],
["Processus qui rend le chocolat lisse ?","o","Le conchage"],
["Chocolatier suisse qui inventa le chocolat au lait (1875) ?","o","Daniel Peter"],
["Molécule stimulante du chocolat ?","m",["Caféine","Théobromine","Taurine","Adrénaline"],1],
["% min cacao pour un chocolat noir en France ?","m",["30 %","43 %","50 %","70 %"],1],
["Ville belge capitale du chocolat ?","m",["Anvers","Bruxelles","Bruges","Gand"],1]
]},

{"t":"Les épices","e":"🌶️","q":[
["Épice la plus chère au monde ?","m",["Vanille","Safran","Cardamome","Poivre noir"],1],
["Pays d'origine de la cannelle ?","m",["Inde","Sri Lanka","Chine","Vietnam"],1],
["De quelle plante vient la vanille ?","m",["Cactus","Orchidée","Palmier","Herbe"],1],
["De quel pays vient le paprika ?","m",["Hongrie","Roumanie","Espagne","Italie"],0],
["Nombre de baies utilisées pour 1 kg de safran ?","m",["1 000","10 000","150 000","500 000"],2],
["Épice jaune anti-inflammatoire ?","o","Le curcuma"],
["Combien de temps a duré la route des épices ?","o","Environ 1 500 ans"],
["Ville portugaise du commerce des épices vers 1500 ?","m",["Porto","Lisbonne","Faro","Braga"],1],
["Épice base du garam masala indien ?","m",["Cardamome","Cannelle","Cumin","Toutes"],3],
["Poivre le plus rare et cher au monde ?","m",["Kampot","Voatsiperifery","Sichuan","Sansho"],1]
]},

/* ═══════════ INSOLITE ═══════════ */

{"t":"Les guillotinés célèbres","e":"⚔️","q":[
["Roi guillotiné en 1793 ?","m",["Louis XIV","Louis XV","Louis XVI","Louis XVIII"],2],
["Reine guillotinée après lui ?","m",["Marie de Médicis","Marie-Antoinette","Anne","Catherine"],1],
["Révolutionnaire guillotiné juillet 1794 ?","m",["Marat","Robespierre","Danton","Saint-Just"],1],
["Médecin qui donna son nom à la guillotine ?","m",["Guillotin","Louis","Curie","Marat"],0],
["Mme Roland guillotinée aurait dit ?","m",["Vive le Roi","Ô Liberté...","Encore un moment","Le Comité"],1],
["Jeune poète guillotiné à 31 ans en 1794 ?","o","André Chénier"],
["Chimiste père de la chimie moderne guillotiné en 1794 ?","o","Antoine Lavoisier"],
["Année d'abolition de la peine de mort en France ?","m",["1976","1981","1985","1990"],1],
["Dernier guillotiné en France (1977) ?","m",["Djandoubi","Ranucci","Carrein","Bontemps"],0],
["Ministre qui fit abolir la peine de mort ?","m",["Peyrefitte","Badinter","Rocard","Chirac"],1]
]},

{"t":"Les naufrages","e":"🚢","q":[
["Paquebot coulé le 15 avril 1912 ?","m",["Lusitania","Titanic","Britannic","Andrea Doria"],1],
["Morts sur le Titanic (environ) ?","m",["800","1 200","1 500","2 000"],2],
["Cause du naufrage du Titanic ?","m",["Torpille","Iceberg","Tempête","Avarie"],1],
["Paquebot torpillé en 1915 ?","m",["Lusitania","Britannic","Empress","Athenia"],0],
["Réalisateur du film Titanic (1997) ?","o","James Cameron"],
["Océanographe ayant trouvé le Titanic (1985) ?","o","Robert Ballard"],
["Profondeur du Titanic (env.) ?","m",["1 500 m","2 500 m","3 800 m","5 000 m"],2],
["Sous-marin russe coulé en 2000 ?","m",["Koursk","Léningrad","Krasnoyarsk","Moskva"],0],
["Bataille navale de 1571 (chrétiens vs Turcs) ?","m",["Trafalgar","Lépante","Actium","Salamine"],1],
["Vaisseau qui a coulé en 2023 en visitant le Titanic ?","m",["Alvin","Titan","Nautile","Deep Sea"],1]
]},

{"t":"Les rockstars mortes à 27 ans","e":"🎸","q":[
["Nom du club regroupant ces musiciens ?","m",["Club 27","Club noir","Club Rock","Club étoiles"],0],
["Guitariste virtuose de Woodstock ?","m",["Clapton","Hendrix","Page","Richards"],1],
["Chanteuse blues morte en 1970 ?","m",["Franklin","Joplin","James","Simone"],1],
["Chanteur des Doors ?","m",["Iggy Pop","Jim Morrison","Lou Reed","Bowie"],1],
["Leader de Nirvana ?","o","Kurt Cobain"],
["Chanteuse britannique morte 2011 ?","o","Amy Winehouse"],
["Fondateur des Rolling Stones ?","m",["B. Jones","Wyman","Watts","Wood"],0],
["Ville où Jim Morrison est mort ?","m",["Los Angeles","Paris","Londres","New York"],1],
["Cimetière parisien où repose Morrison ?","m",["Montparnasse","Père-Lachaise","Passy","Montmartre"],1],
["Cause de la mort d'Amy Winehouse ?","m",["Héroïne","Cocaïne","Alcool","Barbituriques"],2]
]},

{"t":"Les diamants célèbres","e":"💎","q":[
["Diamant bleu au Smithsonian ?","m",["Koh-i-Nûr","Hope","Régent","Sancy"],1],
["Diamant britannique de 105 carats ?","m",["Hope","Koh-i-Nûr","Cullinan","Régent"],1],
["Où se trouve le Régent ?","m",["Louvre","Tour Londres","Smithsonian","Vatican"],0],
["Plus gros diamant brut (3 106 ct) ?","m",["Golden Jubilee","Cullinan","Excelsior","Great Star"],1],
["Où trouvé le Cullinan (1905) ?","m",["Inde","Brésil","Afrique du Sud","Russie"],2],
["Unité de poids du diamant ?","o","Le carat (0,2 g)"],
["Pays plus grand producteur ?","o","La Russie"],
["Diamant réputé maudit ?","m",["Hope","Régent","Sancy","Orlov"],0],
["Nombre de facettes standard (brillant) ?","m",["32","48","57","72"],2],
["Minéral plus dur que le diamant ?","m",["Aucun","Lonsdaléite","Corindon","Carborundum"],1]
]},

{"t":"Les tueurs en série","e":"🔪","q":[
["Le plus prolifique de l'histoire (nombre estimé) ?","m",["10","50","100","+300"],3],
["Tueur français des années 90 (5 morts) ?","m",["Guy Georges","Fourniret","Lelièvre","Heaulme"],0],
["Serial killer américain surnommé BTK ?","m",["Dahmer","Rader","Bundy","Gacy"],1],
["Ted Bundy avait combien de victimes reconnues ?","m",["15","30","50","100"],1],
["Où opéra Jack l'Éventreur ?","m",["Paris","Londres","Berlin","New York"],1],
["Français condamné à 8 meurtres d'enfants ?","o","Michel Fourniret"],
["Ville de Jeffrey Dahmer ?","o","Milwaukee (USA)"],
["Ted Bundy exécuté en ?","m",["1979","1989","1999","2009"],1],
["Le plus prolifique connu (Colombien) ?","m",["Garavito","Angelo","Trujillo","Ramirez"],0],
["Combien Guy Georges (le tueur de l'Est parisien) ?","m",["3","5","7","10"],1]
]},

{"t":"Les palais présidentiels","e":"🏛️","q":[
["Résidence du Président français ?","m",["Élysée","Matignon","Louvre","Assemblée"],0],
["Résidence du Président américain ?","m",["Capitole","Maison-Blanche","Pentagone","Camp David"],1],
["Résidence du Premier ministre britannique ?","m",["Buckingham","10 Downing","St James","Chequers"],1],
["Résidence du Pape ?","m",["Rome","Vatican","Assise","Florence"],1],
["Résidence russe (Moscou) ?","m",["Kremlin","Duma","Loubianka","Bleu"],0],
["Résidence secondaire du Président français ?","o","Le fort de Brégançon (Var)"],
["Ville de la Maison-Blanche ?","o","Washington D.C."],
["Combien de pièces à l'Élysée ?","m",["100","200","365","500"],2],
["Année d'élection de Macron ?","m",["2015","2017","2019","2021"],1],
["Durée d'un mandat en France ?","m",["4","5","6","7"],1]
]},

{"t":"Les hôtels de légende","e":"🏨","q":[
["Palace parisien de la place Vendôme ?","m",["Ritz","Meurice","Bristol","Crillon"],0],
["Hôtel favori de Coco Chanel ?","m",["Ritz","Meurice","Bristol","Crillon"],0],
["Palace célèbre du désert du Nevada ?","m",["Bellagio","Caesars","Wynn","Aria"],0],
["Palace de Marrakech aux jardins ?","m",["Mamounia","Beldi","Royal Mansour","Es Saadi"],0],
["Hôtel Chelsea (NY) célèbre pour les artistes ?","m",["Chelsea","Plaza","Waldorf","Algonquin"],0],
["Palace kényan des safaris ?","o","Le Treetops (ou Norfolk Nairobi)"],
["Grand hôtel de Venise sur le Grand Canal ?","o","Le Danieli (ou le Cipriani)"],
["Palace suisse au bord du lac Léman ?","m",["Beau-Rivage","Ritz","Grand Palais","Alpina"],0],
["Palace londonien de Piccadilly ?","m",["Savoy","Ritz","Claridge's","Dorchester"],1],
["Palace parisien racheté par le Sultan de Brunei ?","m",["Ritz","Bristol","Crillon","Plaza Athénée"],2]
]},

{"t":"Les évasions célèbres","e":"⛓️","q":[
["Île-prison de la baie de San Francisco ?","m",["Rikers","Alcatraz","Sing Sing","San Quentin"],1],
["Combien d'évasions réussies d'Alcatraz ?","m",["0 (confirmée)","3","5","10"],0],
["Vandel évadé du Guyane, connu comme Papillon ?","o","Henri Charrière"],
["Prison où furent enfermés les Templiers en 1307 ?","m",["Bastille","Vincennes","Temple","Louvre"],2],
["Homme masqué mystérieux emprisonné sous Louis XIV ?","o","L'homme au masque de fer"],
["Vandel évadé de la Santé en hélico en 1986 ?","m",["Vaujour","Mesrine","Ferrara","Léandri"],0],
["Alcatraz a fermé en ?","m",["1955","1963","1975","1990"],1],
["Nazi évadé d'Argentine avant sa capture (1960) ?","m",["Mengele","Eichmann","Bormann","Barbie"],1],
["Combien de fois s'est évadé Mesrine ?","m",["1","2","3","4"],2],
["Combien de tunnels furent creusés pour la Grande Évasion (1944) ?","m",["1","3","5","7"],1]
]},

{"t":"Les cambriolages célèbres","e":"💰","q":[
["Année du vol de la Joconde ?","m",["1901","1911","1921","1941"],1],
["Combien de temps la Joconde fut-elle disparue ?","m",["3 mois","2 ans","5 ans","10 ans"],1],
["Qui vola la Joconde ?","o","Vincenzo Peruggia (peintre italien)"],
["Cambriolage record de la banque de Zurich (2000, montant) ?","o","Environ 100-200 millions"],
["Combien d'or dérobé au Louvre en 1998 ?","m",["Aucun","2 tableaux","Bijoux Régent","Rien"],1],
["Vol du siècle en 2001 dans le musée d'Amsterdam ?","m",["Van Gogh","Rembrandt","Vermeer","Van der Weyden"],0],
["Cambriolage du Kim Kardashian à Paris en ?","m",["2014","2016","2018","2020"],1],
["Cambriolage de Nice (Musée matisse) en 2007 ?","m",["1 tableau","5 tableaux","10 tableaux","20 tableaux"],1],
["Vol de la couronne d'Iran en 1979 ?","m",["Retrouvée","Fondue","Encore introuvable","Récupérée en 1990"],2],
["Musée cambriolé de tableaux de Vermeer à Boston ?","m",["MFA","Isabella Stewart Gardner","Guggenheim","MET"],1]
]},

{"t":"Les trésors perdus","e":"💰","q":[
["Trésor de pirate jamais retrouvé (Kidd) ?","m",["Blackbeard","Kidd","Morgan","Lafitte"],1],
["Or nazi englouti dans le lac ?","o","Lac Toplitz (Autriche)"],
["Trésor perdu des Templiers à ?","o","Gisors (Normandie), selon la légende"],
["Trésor de l'or inca disparu (Cuzco) ?","m",["Bogotá","Cuzco","Lima","Quito"],1],
["Ville engloutie légendaire d'Atlantide décrite par ?","m",["Homère","Hérodote","Platon","Aristote"],2],
["Combien vaut le trésor Inca disparu (estimation) ?","m",["Millions","Milliards","Impossible à chiffrer","1 000$"],2],
["Trésor de la Trobriand en Papouasie fait de ?","m",["Coquillages","Or","Ivoire","Perles"],0],
["Cité perdue d'Eldorado supposée en ?","m",["Amérique du Sud","Afrique","Asie","Océanie"],0],
["Trésor de guerre nazi qui a disparu (train) ?","m",["Wroclaw","Berlin","Munich","Vienne"],0],
["Trésor de Baix (île du Levant) est ?","m",["Réel","Légendaire","Trouvé","Récupéré"],1]
]},

{"t":"Les explorateurs disparus","e":"🧭","q":[
["Explorateur perdu au pôle Sud en 1912 ?","m",["Amundsen","Scott","Shackleton","Peary"],1],
["Explorateur perdu en Antarctique en 1998 ?","m",["Bombard","Mitterrand","Étienne","Aucun"],3],
["Aviatrice disparue au-dessus du Pacifique 1937 ?","m",["Earhart","Coleman","Lindbergh","Batten"],0],
["Explorateur perdu au Groenland en 1930 ?","m",["Nansen","Wegener","Amundsen","Nobile"],1],
["Ballon dirigeable italien perdu en Arctique en 1928 ?","m",["Nobile","Zeppelin","Ferber","Amundsen"],0],
["Combien d'expéditions cherchèrent le Passage du Nord-Ouest sans le trouver ?","o","Environ 50 (jusqu'à Amundsen en 1906)"],
["Ville où fut retrouvé le corps d'Amelia Earhart ?","o","Jamais retrouvée"],
["Combien d'explorateurs ont disparu en 1911-1912 en polaire ?","m",["2","5","10","20"],1],
["Cause probable de la mort de Franklin (Arctique) ?","m",["Faim","Empoisonnement plomb","Combat","Bête"],1],
["Combien étaient dans l'expédition perdue de Franklin (1845) ?","m",["50","100","129","200"],2]
]},

{"t":"Les cryptides","e":"🦕","q":[
["Monstre lacustre écossais ?","m",["Kraken","Nessie","Champ","Ogopogo"],1],
["Primate géant américain ?","m",["Yéti","Bigfoot","Orang Pendek","Skunk Ape"],1],
["Yéti = équivalent himalayen de ?","m",["Sasquatch","Yéti","Yowie","Almasty"],1],
["Créature du Congo mi-dinosaure ?","m",["Ptérodactyle","Mokélé-mbembé","Ropen","Kongamato"],1],
["Créature américaine tueuse de chèvres ?","m",["Mothman","Wendigo","Jersey Devil","Chupacabra"],3],
["Primate mystérieux de Sumatra ?","o","L'Orang Pendek"],
["Créature amérindienne qui vole des enfants ?","o","Le Wendigo"],
["Monstre marin scandinave (calmar géant) ?","m",["Léviathan","Kraken","Charybde","Basilic"],1],
["Homme-papillon vu en Virginie-Occidentale ?","m",["Jersey Devil","Mothman","Flatwoods","Wendigo"],1],
["Lac canadien à créature Ogopogo ?","o","Le lac Okanagan (Colombie-Britannique)"]
]},

{"t":"Les superstitions","e":"🐈","q":[
["Chat noir qui traverse le chemin porte ?","m",["Chance","Malheur","Amour","Argent"],1],
["Chiffre censé porter malheur en Occident ?","m",["7","11","13","17"],2],
["Chiffre malheur en Asie ?","m",["4","7","9","13"],0],
["Miroir cassé = combien d'années malheur ?","m",["3","5","7","10"],2],
["Passer sous une échelle porte ?","m",["Chance","Malheur","Amour","Rien"],1],
["Quel jour porte-t-il malheur en France ?","o","Vendredi 13"],
["Quelle plante porte chance selon la tradition ?","o","Le trèfle à 4 feuilles"],
["Quel bruit d'oreiller signifie mort en Chine ?","m",["Toc","Non existant","Craquer","Tousser"],1],
["Éternuer signifie quoi en Grèce ?","m",["Bénédiction","Vérité","Rien","Danger"],1],
["Toucher du bois porte ?","m",["Chance","Malheur","Rien","Amour"],0]
]},

{"t":"Les records du monde étranges","e":"🏆","q":[
["Plus longue moustache du monde ?","m",["1 m","2 m","3,5 m","5 m"],2],
["Plus grand mangeur de hotdogs record ?","m",["50","75","83","100"],2],
["Ongle le plus long jamais mesuré ?","m",["30 cm","1 m","2 m","10 m"],3],
["Plus longue barbe du monde ?","m",["1 m","2 m","3 m","5 m"],2],
["Plus jeune docteur au monde ?","m",["11 ans","17 ans","20 ans","25 ans"],1],
["Homme le plus grand jamais mesuré ?","o","Robert Wadlow (2,72 m)"],
["Plus grand appétit humain enregistré (par jour) ?","o","Environ 25 000 kcal (Kobayashi)"],
["Personne la plus âgée vérifiée ?","m",["112","119","122","130"],2],
["Plus lourde crêpe jamais faite ?","m",["100 kg","1 tonne","3 tonnes","10 tonnes"],2],
["Record de mariages successifs ?","m",["10","23","29","40"],2]
]},

{"t":"Les inventions ratées","e":"🔧","q":[
["New Coke a-t-il été un succès ?","m",["Oui","Non","Moyen","Ça dépend"],1],
["Ford Edsel a-t-il fait faillite ?","m",["Oui","Non","Vendue à autre","Ils ont continué"],0],
["Segway a été un ?","m",["Succès mondial","Échec commercial","Interdit","Best-seller"],1],
["Zeppelin Hindenburg a-t-il eu un accident ?","m",["Oui, 1937","Oui, 1900","Non","1950"],0],
["Concorde a été mis à la retraite en ?","m",["1990","1998","2003","2010"],2],
["Google Glass a été retiré du marché en ?","m",["2013","2015","2017","2019"],1],
["Betamax perdit face à ?","o","VHS"],
["HD DVD a perdu face à ?","o","Blu-Ray"],
["Toyota Prius a-t-elle été un ?","m",["Échec","Succès","Neutre","Retirée"],1],
["Nintendo Virtual Boy fut un ?","m",["Succès mondial","Cult","Échec","Interdit"],2]
]},

{"t":"Les phares","e":"🗼","q":[
["Phare antique 7 merveilles ?","m",["Rhodes","Alexandrie","Syracuse","Athènes"],1],
["Combien mesurait le phare d'Alexandrie ?","m",["50","80","120","150"],2],
["Phare français à l'ouest de la Bretagne ?","o","Le phare du Créac'h (Ouessant)"],
["Phare de l'estuaire de la Gironde ?","o","Le phare de Cordouan (le plus ancien en activité)"],
["En quelle année le dernier phare gardé a-t-il été automatisé en France ?","m",["1990","1995","2004","2010"],2],
["Phare breton surnommé l'enfer des enfers ?","m",["Ar-Men","Jument","Kéréon","Eckmühl"],0],
["Roman de Virginia Woolf sur un phare ?","o","La Promenade au phare"],
["Combien de phares en France ?","m",["50","150","350","+800"],2],
["Combien de phares gardés reste-t-il en France ?","m",["0","5","20","50"],1],
["Combien de mètres monte le phare de Cordouan ?","m",["30","55","67","80"],2]
]},

{"t":"Les aurores boréales","e":"🌌","q":[
["Couleur la plus courante ?","m",["Rouge","Bleue","Verte","Violette"],2],
["Pays scandinave le plus renommé ?","m",["Danemark","Suède","Norvège","Finlande"],2],
["Cause solaire des aurores ?","m",["Éclipses","Vents solaires","Taches","Comètes"],1],
["Nom au pôle sud ?","m",["Australe","Polaire","Sud","Antarctique"],0],
["Gaz du vert ?","m",["Azote","Hélium","Oxygène","Hydrogène"],2],
["Altitude de formation (env.) ?","o","Entre 100 et 300 km"],
["Durée du cycle solaire ?","o","Environ 11 ans"],
["Peut-on en voir en France ?","m",["Jamais","Très rarement","Chaque hiver","En montagne"],1],
["Dieu nordique lié aux aurores ?","m",["Thor","Odin","Freya","Bifröst"],3],
["Sur quelle autre planète a-t-on observé des aurores ?","m",["Mars","Vénus","Jupiter","Toutes"],3]
]},

{"t":"Les tatouages","e":"🖊️","q":[
["Peuple polynésien à l'origine du mot ?","m",["Hawaïens","Samoans","Tahitiens","Maoris"],2],
["Tatouage facial maori ?","m",["Henné","Tā moko","Irezumi","Sak yant"],1],
["Pays asiatique du tatouage intégral (irezumi) ?","m",["Chine","Corée","Japon","Thaïlande"],2],
["Explorateur qui a rapporté le tatouage en Europe ?","m",["Colomb","Magellan","Cook","Drake"],2],
["Pigment noir du tatouage ?","m",["Fer","Carbone","Cobalt","Chrome"],1],
["Plus ancien corps tatoué retrouvé ?","o","Ötzi (5 300 ans)"],
["Pays interdisant les tatouages en bain public ?","o","Le Japon (onsen)"],
["Style basé uniquement sur des points ?","m",["Tribal","Dotwork","Watercolor","Old school"],1],
["Technologie pour effacer les tatouages ?","m",["Acide","Laser","Chirurgie","Électrolyse"],1],
["% des 18-35 ans tatoués en France ?","m",["10","20","30","40"],2]
]},

{"t":"Les monnaies","e":"💶","q":[
["Monnaie du Royaume-Uni ?","m",["Livre","Franc","Euro","Sterling"],0],
["Monnaie du Japon ?","m",["Won","Yuan","Yen","Ringgit"],2],
["Monnaie de la Corée du Sud ?","m",["Yen","Won","Yuan","Ringgit"],1],
["Monnaie de la Suisse ?","m",["Euro","Franc suisse","Corona","Krone"],1],
["Monnaie de la Russie ?","m",["Rouble","Ruble","Lat","Krone"],0],
["Monnaie de l'Inde ?","o","La roupie indienne"],
["Devise du Brésil ?","o","Le real"],
["Monnaie de l'Argentine ?","m",["Real","Peso","Bolivar","Escudo"],1],
["Monnaie disparue de la France (avant euro) ?","m",["Franc","Livre","Écu","Napoléon"],0],
["Combien de pays utilisent l'euro ?","m",["12","15","20","27"],2]
]},

{"t":"Les langues du monde","e":"🗣️","q":[
["Langue la plus parlée (natifs) ?","m",["Anglais","Mandarin","Espagnol","Hindi"],1],
["Langue la plus parlée en tout ?","m",["Anglais","Mandarin","Espagnol","Hindi"],0],
["Combien de langues officielles à l'ONU ?","m",["4","6","10","15"],1],
["Langue maternelle en Espagne (majoritaire) ?","m",["Espagnol","Catalan","Basque","Galicien"],0],
["Combien de langues existent au total ?","m",["1 000","3 000","7 000","15 000"],2],
["Combien de langues officielles en Suisse ?","o","4 (allemand, français, italien, romanche)"],
["Langue afroasiatique la plus parlée ?","o","L'arabe"],
["Combien de langues officielles en Inde ?","m",["1","4","22","50"],2],
["Langue morte du latin devint ?","m",["Grec","Français","Italien","Toutes les langues romanes"],3],
["Combien de sons dans une langue en moyenne ?","m",["20","40","100","500"],1]
]},

{"t":"Les drapeaux","e":"🚩","q":[
["Drapeau français (couleurs) ?","o","Bleu, blanc, rouge"],
["Drapeau italien (couleurs) ?","o","Vert, blanc, rouge"],
["Drapeau à l'étoile canadienne ?","m",["Étoile","Feuille d'érable","Lion","Aigle"],1],
["Drapeau au disque rouge ?","o","Le Japon"],
["Drapeau à croix nordique ?","m",["Danemark","Suède","Norvège","Tous"],3],
["Drapeau au dragon ?","m",["Chine","Pays de Galles","Bhoutan","Les 3 derniers"],3],
["Drapeau à la faucille et marteau (URSS) ?","o","Rouge avec faucille et marteau"],
["Drapeau africain avec la roue de Konark ?","m",["Éthiopie","Kenya","Sri Lanka (Asie!)","Inde"],3],
["Drapeau au cèdre du Liban ?","o","Rouge, blanc, cèdre vert"],
["Combien de drapeaux sont carrés ?","m",["1","2 (Vatican + Suisse)","5","10"],1]
]},

{"t":"Les hymnes nationaux","e":"🎵","q":[
["Hymne français ?","m",["Marseillaise","Marche","Ma Normandie","Chant"],0],
["Hymne américain ?","m",["Star-Spangled Banner","God Bless","America","My Country"],0],
["Hymne britannique ?","m",["God Save the King","Rule Britannia","Land of Hope","Jerusalem"],0],
["Hymne européen (mélodie) ?","m",["9e sym. Beethoven","Marseillaise","Marche royale","Deutschland"],0],
["Qui a composé la Marseillaise ?","o","Rouget de Lisle (1792)"],
["Ville où elle fut composée ?","o","Strasbourg"],
["Combien de couplets a la Marseillaise ?","m",["3","5","7","15"],3],
["Hymne allemand (paroles) ?","m",["Deutschland über alles","Éternelle Allemagne","Berlin","Hymne bleu"],0],
["Hymne canadien ?","m",["O Canada","Marche canadienne","Terre glorieuse","Nordique"],0],
["Combien d'hymnes chantés à Yalta 1945 ?","m",["2","3","4","5"],2]
]},

{"t":"La poésie française","e":"🖋️","q":[
["Auteur du Chat noir dans Les Chats ?","m",["Verlaine","Baudelaire","Rimbaud","Mallarmé"],1],
["Auteur du Bateau ivre ?","m",["Rimbaud","Verlaine","Hugo","Nerval"],0],
["Auteur des Feuilles d'automne ?","m",["Hugo","Lamartine","Vigny","Musset"],0],
["Poète français du siècle XVII ?","m",["Racine","La Fontaine","Malherbe","Villon"],1],
["Auteur des Cahiers de Douai ?","m",["Rimbaud","Verlaine","Mallarmé","Baudelaire"],0],
["Auteur du Cimetière marin ?","o","Paul Valéry"],
["Poète des Contemplations ?","o","Victor Hugo"],
["Prix Nobel de littérature français poète en 1901 ?","m",["Sully-Prudhomme","Rimbaud","Verlaine","Mallarmé"],0],
["Poète français de la Résistance ?","m",["Aragon","Éluard","Char","Tous"],3],
["Auteur du Pont Mirabeau ?","m",["Apollinaire","Éluard","Aragon","Cocteau"],0]
]},

{"t":"Les fables de La Fontaine","e":"🦊","q":[
["Qui gagne entre le lièvre et la tortue ?","m",["Lièvre","Tortue","Match nul","Ni l'un ni l'autre"],1],
["Le renard flatte quel oiseau pour son fromage ?","m",["Pie","Corbeau","Aigle","Colombe"],1],
["Qui se casse le pot au lait ?","m",["Perrette","Colette","Jeannette","Fanchette"],0],
["Quel insecte n'a pas amassé et vient quémander ?","m",["Fourmi","Cigale","Grillon","Sauterelle"],1],
["Combien de livres de fables a écrit La Fontaine ?","m",["3","6","12","24"],2],
["Quel loup vante-t-il devant l'agneau la raison du plus fort ?","o","Le loup (Le loup et l'agneau)"],
["Quel dieu La Fontaine fait-il souvent apparaître ?","o","Jupiter (et d'autres dieux de l'Olympe)"],
["De quel poète antique s'inspire La Fontaine ?","m",["Ovide","Ésope","Homère","Horace"],1],
["Combien de fables a-t-il écrites ?","m",["50","120","240","500"],2],
["À quel roi les fables sont-elles dédiées ?","m",["Louis XIII","Louis XIV","Louis XV","Le Dauphin"],3]
]},

{"t":"Molière","e":"🎭","q":[
["Vrai nom de Molière ?","o","Jean-Baptiste Poquelin"],
["Roi qui l'a protégé ?","m",["Louis XIII","Louis XIV","Louis XV","Henri IV"],1],
["Sur quelle scène est-il mort ?","m",["Le Malade imaginaire","Tartuffe","L'Avare","Le Misanthrope"],0],
["Qui joue-t-il dans Le Malade imaginaire ?","m",["Argan","Béralde","Purgon","Thomas"],0],
["Personnage avare de la pièce éponyme ?","m",["Harpagon","Alceste","Tartuffe","Sganarelle"],0],
["Qui est le personnage principal du Tartuffe ?","o","Tartuffe (l'imposteur)"],
["Année de la mort de Molière ?","o","1673"],
["Personnage hypocondriaque du Malade imaginaire ?","m",["Argan","Béralde","Purgon","Diafoirus"],0],
["Comédie de Molière avec les Femmes savantes ?","m",["Les Femmes savantes","Les Précieuses","Les Fourberies","L'École des femmes"],0],
["Où repose Molière ?","m",["Père-Lachaise","Panthéon","Saint-Sulpice","Sacré-Cœur"],0]
]},

{"t":"Victor Hugo","e":"📜","q":[
["Année de naissance ?","m",["1802","1815","1830","1848"],0],
["Roman avec Quasimodo ?","o","Notre-Dame de Paris"],
["Roman avec Jean Valjean ?","o","Les Misérables"],
["Comment s'appelle sa fille noyée ?","m",["Adèle","Léopoldine","Sophie","Julie"],1],
["Où fut-il exilé sous Napoléon III ?","m",["Belgique","Jersey/Guernesey","Suisse","Angleterre"],1],
["Combien d'années dura son exil ?","m",["5","10","15","19"],3],
["Où est-il enterré ?","m",["Père-Lachaise","Panthéon","Notre-Dame","Sacré-Cœur"],1],
["Roman qui décrit une bataille pieds-plats ?","m",["Notre-Dame","Les Misérables","93","Napoléon le Petit"],2],
["Année de sa mort ?","m",["1875","1885","1895","1900"],1],
["Poème le plus connu (une lampe...) ?","m",["Demain dès l'aube","Booz endormi","Océan","Le Ciel"],0]
]}

]
