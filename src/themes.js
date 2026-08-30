// 115 thèmes · 1150 questions · français calibré (v3 réécriture propre)
// Format : ["Q?","m",[A,B,C,D],idx] · ["Q?","o","réponse"]
// L1 = quasi tout le monde · L5 = culture solide · L10 = expert

export const THEMES = [

/* ═══════════ HISTOIRE ═══════════ */

{"t":"Les rois de France","e":"👑","q":[
["Quel roi français est surnommé le Roi-Soleil ?","m",["Louis XIV","Louis XVI","François Ier","Henri IV"],0],
["Quel roi de France a été guillotiné en 1793 ?","m",["Louis XV","Louis XVI","Louis XVII","Charles X"],1],
["Quel roi a signé l'édit de Nantes en 1598 ?","m",["Henri IV","Henri III","Louis XIII","François Ier"],0],
["Dans quel château Louis XIV a-t-il installé sa cour ?","o","Versailles"],
["Quel roi mérovingien s'est fait baptiser à Reims vers 496 ?","m",["Dagobert","Clovis","Childéric","Clotaire"],1],
["Quel roi capétien est surnommé Philippe Auguste ?","m",["Philippe II","Philippe III","Philippe IV","Philippe V"],0],
["Quel roi a été fait prisonnier à la bataille de Pavie en 1525 ?","o","François Ier"],
["Quel roi de France a été assassiné par Ravaillac en 1610 ?","m",["Henri III","Henri IV","Louis XIII","François II"],1],
["Quel roi a instauré la pragmatique sanction de Bourges en 1438 ?","o","Charles VII"],
["Quel roi carolingien a été sacré empereur à Rome en 875 ?","o","Charles le Chauve"]
]},

{"t":"Napoléon Bonaparte","e":"⚔️","q":[
["Sur quelle île Napoléon est-il né ?","m",["Corse","Sardaigne","Elbe","Sicile"],0],
["Où Napoléon est-il mort en exil en 1821 ?","m",["Sainte-Hélène","Île d'Elbe","Corse","Malte"],0],
["En quelle année Napoléon s'est-il fait sacrer empereur ?","m",["1802","1804","1806","1810"],1],
["Quelle bataille marque la défaite finale de Napoléon en 1815 ?","o","Waterloo"],
["Quel code civil promulgué en 1804 porte son nom ?","o","Code Napoléon"],
["Contre quelles puissances Napoléon triomphe-t-il à Austerlitz ?","m",["Russie et Autriche","Prusse et Autriche","Angleterre et Russie","Prusse et Russie"],0],
["Comment s'appelle la seconde épouse de Napoléon, fille de l'empereur d'Autriche ?","o","Marie-Louise"],
["Quel maréchal fut surnommé « le Brave des braves » par Napoléon ?","m",["Murat","Ney","Davout","Masséna"],1],
["En quelle année a eu lieu la bataille d'Iéna ?","o","1806"],
["Quel traité signé en 1807 partage l'Europe entre Napoléon et le tsar Alexandre Ier ?","o","Traité de Tilsit"]
]},

{"t":"La Révolution française","e":"🇫🇷","q":[
["Quelle prison parisienne a été prise le 14 juillet 1789 ?","m",["La Bastille","Le Châtelet","La Conciergerie","Vincennes"],0],
["Quelle reine de France a été guillotinée en 1793 ?","o","Marie-Antoinette"],
["Quel texte fondamental est adopté le 26 août 1789 ?","m",["Déclaration des droits de l'homme","Constitution civile","Serment du Jeu de paume","Édit de tolérance"],0],
["Quel révolutionnaire a été assassiné dans sa baignoire par Charlotte Corday ?","o","Marat"],
["Quelle période sanglante s'étend de septembre 1793 à juillet 1794 ?","m",["La Terreur","Le Directoire","Thermidor","La Grande Peur"],0],
["Quel club révolutionnaire compte Robespierre et Saint-Just parmi ses membres ?","o","Les Jacobins"],
["Quelle assemblée succède à l'Assemblée législative en septembre 1792 ?","m",["Convention nationale","Directoire","Consulat","Constituante"],0],
["Qui dirige la fuite avortée du roi arrêté à Varennes en juin 1791 ?","m",["Fersen","La Fayette","Bouillé","Mirabeau"],0],
["Quel député girondin, orateur célèbre, est guillotiné en octobre 1793 ?","o","Vergniaud"],
["Quel décret adopté en juin 1794 supprime les défenseurs devant le Tribunal révolutionnaire ?","o","Loi de Prairial"]
]},

{"t":"La Seconde Guerre mondiale","e":"💣","q":[
["Quel dictateur allemand a déclenché la guerre en 1939 ?","o","Hitler"],
["Quel jour a eu lieu le Débarquement de Normandie ?","m",["6 juin 1944","6 juillet 1944","8 mai 1944","1er septembre 1944"],0],
["Sur quelle ville japonaise la première bombe atomique a-t-elle été larguée ?","o","Hiroshima"],
["Quel général français a lancé l'appel du 18 juin 1940 depuis Londres ?","o","Charles de Gaulle"],
["Quelle bataille de 1942-1943 marque le tournant sur le front de l'Est ?","m",["Stalingrad","Koursk","Moscou","Leningrad"],0],
["Quel régime français collabore avec l'Allemagne à partir de 1940 ?","m",["Régime de Vichy","IIIe République","IVe République","État libre"],0],
["Qui commande les forces alliées lors du débarquement en Normandie ?","o","Eisenhower"],
["Quel accord signé en septembre 1938 livre les Sudètes à Hitler ?","o","Accords de Munich"],
["Quel amiral japonais planifie l'attaque de Pearl Harbor ?","m",["Yamamoto","Nagano","Nagumo","Tojo"],0],
["Quel chef de la Résistance a été torturé et est mort en 1943 après son arrestation à Caluire ?","o","Jean Moulin"]
]},

{"t":"La Première Guerre mondiale","e":"🎖️","q":[
["En quelle année la Première Guerre mondiale a-t-elle commencé ?","m",["1912","1914","1916","1918"],1],
["Quel traité signé en 1919 met fin à la guerre ?","o","Traité de Versailles"],
["Comment appelait-on les soldats français de cette guerre ?","m",["Les poilus","Les sans-culottes","Les grognards","Les gueules cassées"],0],
["Quelle bataille française de 1916 a duré près de dix mois ?","o","Bataille de Verdun"],
["Quel archiduc a été assassiné à Sarajevo en juin 1914 ?","m",["François-Ferdinand","François-Joseph","Rodolphe","Charles"],0],
["Quel général français dirige la victoire de la Marne en septembre 1914 ?","o","Joffre"],
["Quelle offensive britannique de 1916 fait plus d'un million de victimes ?","m",["Somme","Ypres","Passchendaele","Arras"],0],
["En quel mois de 1917 les États-Unis entrent-ils en guerre ?","o","Avril"],
["Quel homme politique français, surnommé « le Tigre », dirige le gouvernement en 1917-1920 ?","o","Clemenceau"],
["Quel traité signé en mars 1918 fait sortir la Russie du conflit ?","o","Traité de Brest-Litovsk"]
]},

{"t":"L'Égypte antique","e":"🏺","q":[
["Comment appelle-t-on les tombeaux monumentaux des pharaons ?","m",["Pyramides","Ziggourats","Mastabas","Obélisques"],0],
["Quel fleuve traverse l'Égypte antique du sud au nord ?","o","Nil"],
["Quel pharaon très jeune a été retrouvé dans une tombe intacte en 1922 ?","m",["Toutânkhamon","Ramsès II","Khéops","Akhenaton"],0],
["Quelle reine égyptienne a séduit César puis Marc Antoine ?","o","Cléopâtre"],
["À quel pharaon attribue-t-on la Grande Pyramide de Gizeh ?","m",["Khéops","Khéphren","Mykérinos","Djéser"],0],
["Quel dieu égyptien à tête de chacal préside à l'embaumement ?","o","Anubis"],
["Quelle pierre découverte en 1799 a permis à Champollion de déchiffrer les hiéroglyphes ?","o","Pierre de Rosette"],
["Quel pharaon a instauré un culte monothéiste voué à Aton ?","m",["Akhenaton","Ramsès II","Thoutmôsis III","Séthi Ier"],0],
["Quelle bataille de 1274 av. J.-C. oppose Ramsès II aux Hittites ?","o","Bataille de Qadesh"],
["Quel dieu à tête de faucon incarne la royauté pharaonique ?","o","Horus"]
]},

{"t":"La Grèce antique","e":"🏛️","q":[
["Quelle cité grecque a donné naissance à la démocratie ?","o","Athènes"],
["Quel philosophe grec a été condamné à boire la ciguë ?","m",["Socrate","Platon","Aristote","Épicure"],0],
["Sur quel mont les dieux grecs résidaient-ils selon la mythologie ?","o","Olympe"],
["Quel héros a tué le Minotaure dans le labyrinthe de Cnossos ?","m",["Thésée","Persée","Héraclès","Achille"],0],
["Quel poète grec est l'auteur présumé de L'Iliade et de L'Odyssée ?","o","Homère"],
["Quelle bataille navale de 480 av. J.-C. voit la victoire grecque sur les Perses ?","m",["Salamine","Marathon","Platées","Thermopyles"],0],
["Quel roi spartiate est mort avec ses trois cents hoplites aux Thermopyles ?","o","Léonidas"],
["Quel philosophe fut le précepteur d'Alexandre le Grand ?","m",["Aristote","Platon","Xénophon","Isocrate"],0],
["Quelle guerre du Ve siècle av. J.-C. oppose Athènes à Sparte ?","o","Guerre du Péloponnèse"],
["Quel législateur athénien a rédigé une constitution particulièrement sévère vers 621 av. J.-C. ?","o","Dracon"]
]},

{"t":"La Rome antique","e":"🏟️","q":[
["Selon la légende, quels jumeaux ont fondé Rome ?","m",["Romulus et Remus","Castor et Pollux","Énée et Turnus","Numa et Tullus"],0],
["Quel amphithéâtre romain accueillait les combats de gladiateurs ?","o","Colisée"],
["Quel général romain a franchi le Rubicon en 49 av. J.-C. ?","m",["Jules César","Pompée","Crassus","Marius"],0],
["Quel empereur a fait construire un mur défensif en Bretagne ?","o","Hadrien"],
["Quel général carthaginois a traversé les Alpes avec des éléphants ?","m",["Hannibal","Hamilcar","Hasdrubal","Magon"],0],
["En quelle année Jules César a-t-il été assassiné ?","o","44 av. J.-C."],
["Quel empereur, dernier des « bons empereurs », est aussi un philosophe stoïcien ?","m",["Marc Aurèle","Trajan","Hadrien","Antonin"],0],
["Quelle bataille de 216 av. J.-C. voit l'écrasement des Romains par Hannibal ?","o","Cannes"],
["Quel empereur a divisé l'Empire en quatre parts en instaurant la tétrarchie ?","o","Dioclétien"],
["Quel consul romain a réprimé la conjuration de Catilina en 63 av. J.-C. ?","o","Cicéron"]
]},

{"t":"Les Vikings","e":"🛡️","q":[
["De quelle région d'Europe les Vikings sont-ils originaires ?","m",["Scandinavie","Balkans","Ibérie","Balte"],0],
["Comment appelle-t-on les navires longs des Vikings ?","o","Drakkars"],
["Quel dieu nordique manie le marteau Mjöllnir ?","m",["Thor","Odin","Loki","Freyr"],0],
["Quel explorateur viking aurait atteint l'Amérique vers l'an 1000 ?","o","Leif Erikson"],
["Quel chef viking a reçu la Normandie du roi Charles III en 911 ?","m",["Rollon","Ragnar","Harald","Erik"],0],
["Quel dieu borgne règne sur Asgard dans la mythologie nordique ?","o","Odin"],
["Comment appelait-on le paradis des guerriers vikings morts au combat ?","o","Valhalla"],
["Quel traité signé en 911 cède la future Normandie à Rollon ?","o","Traité de Saint-Clair-sur-Epte"],
["Quel roi danois, surnommé « à la Dent bleue », a christianisé son royaume au Xe siècle ?","o","Harald Ier (Harald à la Dent bleue)"],
["Sur quel site islandais se tenait l'assemblée viking, considérée comme l'un des plus anciens parlements ?","o","Thingvellir"]
]},

{"t":"Le Moyen Âge","e":"🏰","q":[
["Comment appelle-t-on le guerrier à cheval du Moyen Âge ?","m",["Chevalier","Manant","Vassal","Écuyer"],0],
["Quelle épidémie a décimé l'Europe au XIVe siècle ?","o","Peste noire"],
["Quelle jeune fille a libéré Orléans en 1429 ?","m",["Jeanne d'Arc","Aliénor","Blanche de Castille","Isabeau"],0],
["Quelle guerre a opposé la France et l'Angleterre de 1337 à 1453 ?","o","Guerre de Cent Ans"],
["Quelle bataille de 1214 assure la victoire de Philippe Auguste ?","m",["Bouvines","Azincourt","Crécy","Poitiers"],0],
["Quel pape a lancé la première croisade au concile de Clermont en 1095 ?","o","Urbain II"],
["Quel roi anglais a signé la Magna Carta en 1215 ?","m",["Jean sans Terre","Richard Cœur de Lion","Henri III","Édouard Ier"],0],
["Quelle bataille de 1415 voit la déroute de la chevalerie française face aux archers anglais ?","o","Azincourt"],
["Quel ordre militaire, fondé en 1119, a été supprimé par Philippe le Bel en 1312 ?","o","Ordre du Temple (Templiers)"],
["Quel traité signé en 1259 règle le sort de l'Aquitaine entre Louis IX et Henri III d'Angleterre ?","o","Traité de Paris"]
]},

{"t":"La mythologie grecque","e":"⚡","q":[
["Qui est le roi des dieux de l'Olympe ?","m",["Zeus","Hadès","Apollon","Hermès"],0],
["Quel héros a tué la Méduse ?","m",["Thésée","Persée","Héraclès","Jason"],1],
["Combien de travaux Héraclès a-t-il accomplis ?","m",["7","10","12","14"],2],
["Quel dieu règne sur les Enfers ?","m",["Poséidon","Arès","Hadès","Cronos"],2],
["Qui a ouvert la boîte contenant tous les maux ?","m",["Pandore","Héra","Athéna","Léda"],0],
["Quel héros a tué le Minotaure grâce au fil d'Ariane ?","o","Thésée"],
["Quel musicien descend aux Enfers pour ramener Eurydice ?","m",["Orphée","Apollon","Pan","Marsyas"],0],
["Qui a tissé et défait sa toile en attendant Ulysse ?","o","Pénélope"],
["Quelle nymphe fut condamnée à ne répéter que les derniers mots ?","o","Écho"],
["Quel roi de Phrygie transformait en or tout ce qu'il touchait ?","o","Midas"]
]},

{"t":"Les pharaons","e":"👁️","q":[
["Quel jeune pharaon a été découvert par Howard Carter en 1922 ?","m",["Ramsès II","Toutânkhamon","Khéops","Akhenaton"],1],
["Quelle reine d'Égypte fut la dernière à régner ?","m",["Néfertiti","Hatchepsout","Cléopâtre VII","Nitocris"],2],
["Quel pharaon fit construire la Grande Pyramide de Gizeh ?","m",["Khéphren","Mykérinos","Khéops","Snéfrou"],2],
["Comment appelait-on l'écriture sacrée des Égyptiens ?","m",["Cunéiforme","Hiéroglyphes","Démotique","Runes"],1],
["Quel pharaon a régné le plus longtemps, environ 66 ans ?","m",["Ramsès II","Thoutmôsis III","Séthi Ier","Amenhotep III"],0],
["Quel pharaon a imposé le culte du dieu unique Aton ?","o","Akhenaton"],
["Quelle célèbre reine était l'épouse d'Akhenaton ?","m",["Hatchepsout","Néfertiti","Tiyi","Ânkhésenamon"],1],
["Contre quel peuple Ramsès II combattit-il à Qadesh ?","m",["Les Assyriens","Les Perses","Les Hittites","Les Nubiens"],2],
["Quelle femme pharaon s'est fait représenter avec une barbe postiche ?","o","Hatchepsout"],
["Quel pharaon fondateur unifia la Haute et la Basse-Égypte vers 3100 av. J.-C. ?","o","Narmer"]
]},

{"t":"Les Amérindiens","e":"🪶","q":[
["Quel type d'habitation conique utilisaient les Amérindiens des plaines ?","m",["Igloo","Tipi","Wigwam","Hogan"],1],
["Quel animal sacré chassaient massivement les tribus des Grandes Plaines ?","m",["Cerf","Bison","Ours","Élan"],1],
["Quel objet à plumes servait à attraper les mauvais rêves ?","o","Un attrape-rêves"],
["Quel chef sioux vainquit Custer à Little Bighorn en 1876 ?","m",["Sitting Bull","Geronimo","Cochise","Red Cloud"],0],
["À quelle tribu appartenait le célèbre chef Geronimo ?","m",["Sioux","Apache","Cheyenne","Navajo"],1],
["Quelle civilisation précolombienne bâtit Machu Picchu ?","m",["Aztèques","Mayas","Incas","Olmèques"],2],
["Comment nomme-t-on la marche forcée des Cherokees en 1838 ?","o","La Piste des Larmes"],
["Quelle tribu vivait dans les pueblos du sud-ouest américain ?","m",["Hopis","Iroquois","Comanches","Séminoles"],0],
["Quel chef apache résista jusqu'en 1886 aux États-Unis ?","o","Geronimo"],
["Quelle confédération regroupait cinq nations du nord-est américain ?","o","La Ligue iroquoise"]
]},

/* ═══════════ GÉOGRAPHIE ═══════════ */

{"t":"Les capitales","e":"🌍","q":[
["Quelle est la capitale de l'Italie ?","m",["Milan","Rome","Naples","Florence"],1],
["Quelle est la capitale du Japon ?","m",["Kyoto","Osaka","Tokyo","Séoul"],2],
["Quelle est la capitale de l'Espagne ?","m",["Barcelone","Séville","Madrid","Valence"],2],
["Quelle est la capitale du Canada ?","m",["Toronto","Montréal","Vancouver","Ottawa"],3],
["Quelle est la capitale de l'Australie ?","m",["Sydney","Melbourne","Canberra","Perth"],2],
["Quelle est la capitale du Brésil ?","m",["Rio de Janeiro","São Paulo","Brasília","Salvador"],2],
["Quelle est la capitale de la Turquie ?","o","Ankara"],
["Quelle capitale kazakhe s'appelait Nour-Soultan puis a été renommée en 2022 ?","o","Astana"],
["Quelle est la capitale administrative de l'Afrique du Sud ?","o","Pretoria"],
["Quelle est la capitale du Bhoutan ?","o","Thimphou"]
]},

{"t":"Les fleuves du monde","e":"🏞️","q":[
["Quel fleuve traverse l'Égypte du sud au nord ?","m",["Le Congo","Le Nil","Le Niger","Le Zambèze"],1],
["Quel fleuve traverse Paris ?","m",["La Loire","Le Rhône","La Seine","La Garonne"],2],
["Quel fleuve d'Amazonie est le plus long d'Amérique du Sud ?","m",["Le Paraná","L'Orénoque","L'Amazone","Le Rio Negro"],2],
["Quel fleuve traverse Londres ?","m",["La Tamise","La Mersey","La Severn","La Clyde"],0],
["Quel fleuve sacré traverse Varanasi en Inde ?","m",["L'Indus","Le Gange","Le Brahmapoutre","Le Mékong"],1],
["Quel fleuve marque la frontière entre le Mexique et les États-Unis ?","o","Le Rio Grande"],
["Quel fleuve chinois est surnommé le fleuve Jaune ?","o","Le Huang He"],
["Quel fleuve européen se jette dans la mer Noire après avoir traversé dix pays ?","o","Le Danube"],
["Quel fleuve africain se jette dans l'océan Atlantique après avoir traversé la RDC ?","o","Le fleuve Congo"],
["Quel fleuve sibérien se jette dans l'océan Arctique et mesure environ 4400 km ?","o","La Lena"]
]},

{"t":"Les océans et mers","e":"🌊","q":[
["Quel est le plus grand océan du monde ?","m",["Atlantique","Indien","Pacifique","Arctique"],2],
["Combien y a-t-il d'océans sur Terre ?","m",["3","4","5","6"],2],
["Quelle mer sépare la France de l'Angleterre ?","m",["Mer du Nord","Manche","Mer Baltique","Mer d'Irlande"],1],
["Quelle mer très salée se trouve entre Israël et la Jordanie ?","m",["Mer Rouge","Mer Morte","Mer Caspienne","Mer d'Aral"],1],
["Quelle mer borde le sud de la France ?","m",["Adriatique","Égée","Méditerranée","Ionienne"],2],
["Quel océan borde la côte est des États-Unis ?","o","L'océan Atlantique"],
["Quelle mer se trouve entre l'Italie et les Balkans ?","o","La mer Adriatique"],
["Quelle fosse océanique est la plus profonde du monde ?","o","La fosse des Mariannes"],
["Quelle mer intérieure d'Asie centrale a quasiment disparu depuis les années 1960 ?","o","La mer d'Aral"],
["Quel bras de mer sépare l'Alaska de la Russie ?","o","Le détroit de Béring"]
]},

{"t":"Les déserts","e":"🏜️","q":[
["Quel est le plus grand désert chaud du monde ?","m",["Gobi","Kalahari","Sahara","Atacama"],2],
["Sur quel continent se trouve le Sahara ?","m",["Asie","Afrique","Océanie","Amérique"],1],
["Quel animal est surnommé le vaisseau du désert ?","m",["Le cheval","Le dromadaire","Le zèbre","L'âne"],1],
["Dans quel pays se trouve le désert de Gobi principalement ?","m",["Chine","Inde","Mongolie","Kazakhstan"],2],
["Quel désert d'Amérique du Sud est le plus aride du monde ?","m",["Patagonie","Atacama","Sechura","Sonora"],1],
["Dans quel pays se trouve le désert du Kalahari en majorité ?","o","Le Botswana"],
["Comment appelle-t-on les grandes dunes de sable du Sahara ?","o","Un erg"],
["Quel désert froid recouvre en grande partie l'Antarctique ?","o","Le désert Antarctique"],
["Quel désert nord-américain abrite la Vallée de la Mort ?","o","Le désert des Mojaves"],
["Comment appelle-t-on une étendue désertique de cailloux et de pierres au Sahara ?","o","Un reg"]
]},

{"t":"Les régions de France","e":"🇫🇷","q":[
["Dans quelle région se trouve Paris ?","m",["Normandie","Île-de-France","Centre","Hauts-de-France"],1],
["Dans quelle région se trouve Marseille ?","m",["Occitanie","PACA","Corse","Nouvelle-Aquitaine"],1],
["Combien y a-t-il de régions en France métropolitaine depuis 2016 ?","m",["11","12","13","14"],2],
["Dans quelle région se trouve Bordeaux ?","m",["Occitanie","Nouvelle-Aquitaine","Pays de la Loire","Bretagne"],1],
["Dans quelle région se trouve Strasbourg ?","m",["Bourgogne-Franche-Comté","Grand Est","Hauts-de-France","Centre"],1],
["Quelle région française a pour préfecture Lyon ?","m",["Bourgogne-Franche-Comté","Auvergne-Rhône-Alpes","PACA","Occitanie"],1],
["Quelle est la plus petite région de France métropolitaine par la superficie ?","o","L'Île-de-France"],
["Quelle région a pour chef-lieu Rennes ?","o","La Bretagne"],
["Quelle région française résulte de la fusion du Limousin, Poitou-Charentes et Aquitaine ?","o","La Nouvelle-Aquitaine"],
["Quel est le chef-lieu de la région Centre-Val de Loire ?","o","Orléans"]
]},

{"t":"Paris","e":"🗼","q":[
["Quel monument en fer a été construit pour l'Exposition de 1889 ?","m",["Arc de Triomphe","Tour Eiffel","Panthéon","Invalides"],1],
["Sur quel fleuve se trouve Paris ?","m",["La Loire","Le Rhône","La Seine","La Marne"],2],
["Combien y a-t-il d'arrondissements à Paris ?","m",["18","19","20","21"],2],
["Quelle célèbre avenue relie la Concorde à l'Étoile ?","m",["Rue de Rivoli","Champs-Élysées","Boulevard Haussmann","Avenue Foch"],1],
["Dans quel musée peut-on voir la Joconde ?","m",["Orsay","Louvre","Pompidou","Rodin"],1],
["Quel cimetière parisien abrite les tombes de Jim Morrison et Édith Piaf ?","o","Le Père-Lachaise"],
["Quel architecte a redessiné Paris au XIXe siècle sous Napoléon III ?","o","Haussmann"],
["Comment s'appelle la plus ancienne église de Paris, dans le 6e arrondissement ?","o","Saint-Germain-des-Prés"],
["Quel roi a fait construire la place des Vosges, achevée en 1612 ?","o","Henri IV"],
["Comment s'appelait Paris à l'époque gallo-romaine ?","o","Lutèce"]
]},

{"t":"Les îles","e":"🏝️","q":[
["Sur quelle île est né Napoléon Bonaparte ?","m",["Sardaigne","Corse","Sicile","Malte"],1],
["Quelle est la plus grande île du monde ?","m",["Australie","Groenland","Nouvelle-Guinée","Bornéo"],1],
["De quel pays fait partie l'île de Sicile ?","m",["Grèce","Italie","Espagne","Malte"],1],
["Quelle île française se trouve dans l'océan Indien à l'est de Madagascar ?","m",["Mayotte","La Réunion","Maurice","Comores"],1],
["Quelle île britannique se trouve à l'ouest de la Grande-Bretagne ?","m",["Islande","Irlande","Man","Wight"],1],
["Quel archipel du Pacifique appartient aux États-Unis et regroupe huit îles principales ?","o","Hawaï"],
["Quelle île grecque est célèbre pour ses maisons blanches et sa caldeira ?","o","Santorin"],
["Quelle île de la Méditerranée, au sud de la Sicile, est un État indépendant ?","o","Malte"],
["Quel archipel portugais se situe dans l'Atlantique à l'ouest de Lisbonne ?","o","Les Açores"],
["Quelle île indonésienne partage son territoire avec la Malaisie et Brunei ?","o","Bornéo"]
]},

{"t":"Les volcans","e":"🌋","q":[
["De quelle couleur est la lave en fusion ?","m",["Bleue","Verte","Rouge orangé","Noire"],2],
["Quel volcan italien a détruit Pompéi en 79 ?","m",["L'Etna","Le Stromboli","Le Vésuve","Le Vulcano"],2],
["Comment appelle-t-on la cheminée principale d'un volcan ?","m",["Le cratère","Le magma","Le cône","La caldeira"],0],
["Sur quelle île française se trouve le Piton de la Fournaise ?","m",["Mayotte","La Réunion","La Guadeloupe","La Martinique"],1],
["Quel volcan japonais est le plus haut sommet du pays ?","m",["Le Fuji","L'Aso","Le Sakurajima","L'Ontake"],0],
["Quelle éruption islandaise a paralysé le trafic aérien en 2010 ?","o","Eyjafjallajökull"],
["Comment nomme-t-on un mélange de gaz et de cendres dévalant un volcan ?","m",["Une coulée","Une nuée ardente","Un lahar","Un geyser"],1],
["Sur quel continent se trouve le volcan Ojos del Salado ?","o","Amérique du Sud"],
["Quelle éruption indonésienne de 1815 a provoqué l'année sans été ?","o","Le Tambora"],
["Quel indice mesure l'explosivité d'une éruption volcanique ?","o","L'indice VEI (Volcanic Explosivity Index)"]
]},

{"t":"Les continents","e":"🌐","q":[
["Combien la Terre compte-t-elle traditionnellement de continents ?","m",["Cinq","Six","Sept","Huit"],2],
["Quel est le plus grand continent du monde par sa superficie ?","m",["L'Afrique","L'Asie","L'Amérique","L'Europe"],1],
["Sur quel continent se trouve le désert du Sahara ?","m",["L'Asie","L'Océanie","L'Afrique","L'Amérique"],2],
["Quel continent est entièrement recouvert de glace ?","m",["Le Groenland","L'Antarctique","L'Arctique","La Sibérie"],1],
["Quel continent abrite le fleuve Amazone ?","m",["Afrique","Asie","Amérique du Sud","Océanie"],2],
["Quel détroit sépare géographiquement l'Europe de l'Asie ?","o","Le Bosphore"],
["Quel est le plus petit continent du monde par la superficie ?","o","L'Océanie (ou l'Australie)"],
["Comment se nommait le supercontinent unique il y a 250 millions d'années ?","o","La Pangée"],
["Quel massif marque la frontière conventionnelle entre l'Europe et l'Asie ?","o","L'Oural"],
["Comment nomme-t-on la théorie du mouvement des continents proposée par Wegener ?","o","La dérive des continents"]
]},

{"t":"Les frontières","e":"🗺️","q":[
["Quel pays partage la plus longue frontière avec la France métropolitaine ?","m",["L'Allemagne","L'Espagne","L'Italie","La Belgique"],1],
["Quel fleuve marque une grande partie de la frontière franco-allemande ?","m",["La Seine","Le Rhin","Le Danube","La Moselle"],1],
["Quel mur séparait Berlin de 1961 à 1989 ?","o","Le mur de Berlin"],
["Quelle chaîne de montagnes sépare la France de l'Espagne ?","m",["Les Alpes","Les Vosges","Les Pyrénées","Le Jura"],2],
["Quel parallèle divise la Corée en deux États ?","m",["Le 30e","Le 38e","Le 45e","Le 49e"],1],
["Combien de pays partagent une frontière terrestre avec la Chine ?","m",["10","12","14","16"],2],
["Quel pays a la plus longue frontière du monde avec un seul voisin ?","o","Le Canada (avec les États-Unis)"],
["Quelle ligne imaginaire fixée en 1494 partageait le monde entre Espagne et Portugal ?","o","La ligne de Tordesillas"],
["Quels accords de 1985 ont supprimé les contrôles aux frontières intérieures européennes ?","o","Les accords de Schengen"],
["Quelle ligne sépare l'Inde du Pakistan depuis 1947 ?","o","La ligne Radcliffe"]
]},

{"t":"Les mégapoles","e":"🏙️","q":[
["Quelle est la capitale de la France ?","m",["Lyon","Paris","Marseille","Bordeaux"],1],
["Dans quel pays se trouve Tokyo ?","m",["La Chine","La Corée","Le Japon","Le Vietnam"],2],
["Quelle mégapole américaine est surnommée la Grosse Pomme ?","m",["Chicago","Los Angeles","New York","Boston"],2],
["Dans quel pays se trouve la mégapole de Mumbai ?","m",["Pakistan","Bangladesh","Inde","Sri Lanka"],2],
["Quelle est la capitale et plus grande ville d'Égypte ?","m",["Alexandrie","Louxor","Le Caire","Assouan"],2],
["Quelle mégapole mexicaine est bâtie sur un ancien lac ?","o","Mexico"],
["Quelle ville brésilienne est la plus peuplée d'Amérique du Sud ?","o","São Paulo"],
["Quelle mégapole nigériane est la plus peuplée d'Afrique ?","o","Lagos"],
["Comment nomme-t-on la mégalopole japonaise reliant Tokyo à Fukuoka ?","o","Le Tokaido"],
["Quelle mégapole indonésienne va être remplacée comme capitale par Nusantara ?","o","Jakarta"]
]},

/* ═══════════ SCIENCES ═══════════ */

{"t":"Le corps humain","e":"🧠","q":[
["Combien de doigts a une main humaine ?","m",["Trois","Quatre","Cinq","Six"],2],
["Quel organe pompe le sang dans le corps ?","m",["Le foie","Le cœur","Le poumon","Le rein"],1],
["Combien de dents compte une dentition adulte complète ?","m",["28","30","32","34"],2],
["Quel est le plus grand organe du corps humain ?","m",["Le foie","Le cerveau","La peau","L'intestin"],2],
["Combien d'os compte un squelette adulte ?","m",["186","206","226","246"],1],
["Quel os du corps humain est le plus long ?","o","Le fémur"],
["Quelle glande produit l'insuline ?","o","Le pancréas"],
["Combien de paires de côtes possède l'être humain ?","o","Douze (12)"],
["Quel est le plus petit os du corps humain ?","o","L'étrier (dans l'oreille moyenne)"],
["Comment se nomme la membrane qui entoure le cœur ?","o","Le péricarde"]
]},

{"t":"Le système solaire","e":"🪐","q":[
["Quelle étoile est au centre du système solaire ?","m",["La Lune","Le Soleil","Sirius","Véga"],1],
["Quelle est la planète la plus proche du Soleil ?","m",["Vénus","Mercure","Mars","Terre"],1],
["Quelle planète est surnommée la planète rouge ?","m",["Vénus","Jupiter","Mars","Saturne"],2],
["Quelle est la plus grosse planète du système solaire ?","m",["Saturne","Neptune","Jupiter","Uranus"],2],
["Quelle planète est célèbre pour ses anneaux visibles ?","m",["Uranus","Neptune","Saturne","Jupiter"],2],
["Combien de satellites naturels possède Mars ?","o","Deux (Phobos et Déimos)"],
["Quelle planète a été rétrogradée en planète naine en 2006 ?","o","Pluton"],
["Comment se nomme la ceinture d'astéroïdes située entre Mars et Jupiter ?","o","La ceinture principale d'astéroïdes"],
["Quelle sonde lancée en 1977 a quitté l'héliosphère en 2012 ?","o","Voyager 1"],
["Comment se nomme le nuage sphérique de comètes aux confins du système solaire ?","o","Le nuage d'Oort"]
]},

{"t":"Les dinosaures","e":"🦖","q":[
["Quel dinosaure carnivore aux petits bras est le plus célèbre ?","m",["Diplodocus","Tricératops","Tyrannosaure","Stégosaure"],2],
["Combien de cornes possède le Tricératops sur sa tête ?","m",["Une","Deux","Trois","Quatre"],2],
["Comment appelle-t-on la science qui étudie les fossiles ?","m",["La géologie","La paléontologie","L'archéologie","La zoologie"],1],
["À quelle ère géologique appartiennent principalement les dinosaures ?","m",["Paléozoïque","Mésozoïque","Cénozoïque","Précambrien"],1],
["Quel dinosaure herbivore portait des plaques osseuses sur le dos ?","m",["Ankylosaure","Stégosaure","Iguanodon","Brachiosaure"],1],
["Quel événement a provoqué l'extinction des dinosaures il y a 66 millions d'années ?","o","La chute d'un astéroïde"],
["Dans quelle région du Mexique se trouve le cratère de Chicxulub ?","o","Le Yucatán"],
["Que signifie le nom Vélociraptor ?","o","Voleur rapide"],
["Quelles sont les trois périodes du Mésozoïque ?","o","Trias, Jurassique et Crétacé"],
["Quel oiseau primitif du Jurassique est considéré comme un chaînon entre dinosaures et oiseaux ?","o","L'Archéoptéryx"]
]},

{"t":"La chimie","e":"⚗️","q":[
["Quelle est la formule chimique de l'eau ?","m",["CO2","H2O","O2","NaCl"],1],
["Quel gaz respirons-nous pour vivre ?","m",["L'azote","L'hydrogène","L'oxygène","Le méthane"],2],
["Quel est le symbole chimique de l'or ?","m",["Or","Ag","Au","Go"],2],
["Combien d'éléments compte le tableau périodique actuel ?","m",["108","118","128","138"],1],
["Quel gaz noble est utilisé dans les enseignes lumineuses rouges ?","m",["L'hélium","L'argon","Le néon","Le krypton"],2],
["Quel scientifique russe a établi le tableau périodique des éléments ?","o","Dmitri Mendeleïev"],
["Quel est le pH d'une solution neutre à 25 °C ?","o","7"],
["Quel élément chimique porte le numéro atomique 6 ?","o","Le carbone"],
["Comment nomme-t-on une réaction qui libère de la chaleur ?","o","Une réaction exothermique"],
["Quelle constante donne le nombre d'entités par mole ?","o","Le nombre d'Avogadro"]
]},

{"t":"La physique","e":"⚛️","q":[
["Quelle force nous attire vers le sol ?","m",["Le magnétisme","La gravité","L'électricité","La friction"],1],
["Quelle est l'unité de mesure de la puissance électrique ?","m",["Le volt","L'ampère","Le watt","L'ohm"],2],
["À quelle vitesse approximative se déplace la lumière dans le vide ?","m",["30 000 km/s","300 000 km/s","3 000 000 km/s","30 000 000 km/s"],1],
["Qui a formulé la célèbre équation E = mc² ?","m",["Newton","Einstein","Bohr","Planck"],1],
["Quelle particule élémentaire porte une charge négative dans l'atome ?","m",["Le proton","Le neutron","L'électron","Le photon"],2],
["Quelle unité mesure la fréquence en physique ?","o","Le hertz"],
["Quel physicien a énoncé les trois lois du mouvement au XVIIe siècle ?","o","Isaac Newton"],
["Quel principe interdit à deux fermions d'occuper le même état quantique ?","o","Le principe d'exclusion de Pauli"],
["Comment nomme-t-on le rayonnement fossile découvert en 1965 ?","o","Le fond diffus cosmologique"],
["Quelle expérience de 1887 a montré la constance de la vitesse de la lumière ?","o","L'expérience de Michelson-Morley"]
]},

{"t":"Les inventions","e":"💡","q":[
["Qui a popularisé l'invention de l'ampoule électrique ?","m",["Tesla","Edison","Bell","Marconi"],1],
["Quel objet permet d'appeler quelqu'un à distance vocalement ?","m",["La radio","Le télégraphe","Le téléphone","La télévision"],2],
["Quels frères ont inventé le cinématographe en 1895 ?","m",["Les Wright","Les Lumière","Les Montgolfier","Les Grimm"],1],
["Qui a inventé l'imprimerie à caractères mobiles en Europe ?","m",["Gutenberg","Newton","Da Vinci","Pascal"],0],
["Quel Écossais a découvert la pénicilline en 1928 ?","m",["Watt","Fleming","Darwin","Bell"],1],
["En quelle année Louis Pasteur a-t-il testé son vaccin contre la rage ?","o","1885"],
["Qui a inventé la pile électrique en 1800 ?","o","Alessandro Volta"],
["Quel Français a inventé la photographie en 1826 ?","o","Nicéphore Niépce"],
["Quel ingénieur hongrois a inventé le stylo à bille moderne en 1938 ?","o","László Bíró"],
["Qui a inventé le métier à tisser à cartes perforées en 1801 ?","o","Joseph Marie Jacquard"]
]},

{"t":"La médecine","e":"⚕️","q":[
["Quel organe pompe le sang dans le corps ?","m",["Le foie","Le cœur","Le poumon","Le rein"],1],
["Quel médecin soigne spécifiquement les enfants ?","m",["Le cardiologue","Le pédiatre","Le dentiste","Le dermatologue"],1],
["Quel liquide rouge circule dans nos veines ?","m",["La lymphe","La bile","Le sang","La salive"],2],
["Combien de dents possède un adulte en général ?","m",["28","30","32","34"],2],
["Qui a découvert la pénicilline en 1928 ?","m",["Louis Pasteur","Alexander Fleming","Robert Koch","Marie Curie"],1],
["Quel organe filtre le sang pour produire l'urine ?","m",["Le foie","Le rein","La rate","Le pancréas"],1],
["Comment appelle-t-on la spécialité médicale de la peau ?","o","La dermatologie"],
["Quelle vitamine est synthétisée grâce au soleil ?","o","La vitamine D"],
["Qui a réalisé la première greffe de cœur humain en 1967 ?","o","Christiaan Barnard"],
["Quel os long relie l'épaule au coude chez l'humain ?","o","L'humérus"]
]},

{"t":"Les mathématiques","e":"🔢","q":[
["Combien font deux plus deux ?","m",["Trois","Quatre","Cinq","Six"],1],
["Quel est le résultat de sept multiplié par huit ?","m",["54","56","58","64"],1],
["Comment appelle-t-on un triangle à trois côtés égaux ?","m",["Isocèle","Rectangle","Équilatéral","Scalène"],2],
["Quelle est la valeur approchée de Pi à deux décimales ?","m",["3,12","3,14","3,16","3,18"],1],
["Quel mathématicien grec a démontré un théorème sur le triangle rectangle ?","m",["Euclide","Pythagore","Thalès","Archimède"],1],
["Combien de faces possède un dodécaèdre régulier ?","m",["8","10","12","20"],2],
["Comment nomme-t-on un nombre divisible uniquement par un et lui-même ?","o","Un nombre premier"],
["Quel mathématicien a fondé la géométrie analytique au XVIIe siècle ?","o","René Descartes"],
["Quelle constante mathématique vaut environ 2,718 ?","o","Le nombre e"],
["Quelle conjecture célèbre porte sur les zéros non triviaux d'une fonction zêta ?","o","L'hypothèse de Riemann"]
]},

{"t":"L'évolution","e":"🧬","q":[
["Quel scientifique a publié L'Origine des espèces en 1859 ?","m",["Mendel","Darwin","Lamarck","Pasteur"],1],
["De quel animal l'humain est-il le plus proche génétiquement ?","m",["Le gorille","Le chimpanzé","L'orang-outan","Le gibbon"],1],
["Quel mécanisme central explique l'évolution selon Darwin ?","m",["La mutation","La sélection naturelle","La dérive","L'hérédité"],1],
["Comment appelle-t-on les restes fossilisés d'anciens êtres vivants ?","m",["Reliques","Fossiles","Vestiges","Sédiments"],1],
["Quel naturaliste français défendait l'hérédité des caractères acquis ?","m",["Buffon","Cuvier","Lamarck","Geoffroy"],2],
["Quelle molécule porte l'information génétique héréditaire ?","m",["L'ARN","L'ADN","Les lipides","Les protéines"],1],
["Quel hominidé fossile célèbre a été découvert en Éthiopie en 1974 ?","o","Lucy"],
["Qui a établi les lois de l'hérédité en étudiant des petits pois ?","o","Gregor Mendel"],
["Quel événement il y a 66 millions d'années a fait disparaître les dinosaures non aviens ?","o","L'extinction Crétacé-Paléogène"],
["Quelle théorie explique l'apparition brutale des grands groupes animaux au Cambrien ?","o","L'explosion cambrienne"]
]},

{"t":"La météo","e":"🌤️","q":[
["Que tombe-t-il des nuages quand il pleut ?","m",["De la neige","De l'eau","Du sable","De la grêle"],1],
["Quel phénomène coloré apparaît après la pluie avec le soleil ?","m",["L'aurore","L'arc-en-ciel","L'éclair","Le halo"],1],
["Avec quel instrument mesure-t-on la température ?","m",["Baromètre","Thermomètre","Anémomètre","Hygromètre"],1],
["Que mesure un anémomètre ?","m",["La pluie","La pression","Le vent","L'humidité"],2],
["Comment appelle-t-on un tourbillon violent aux États-Unis ?","m",["Cyclone","Typhon","Tornade","Mousson"],2],
["Sur quelle échelle mesure-t-on l'intensité des tornades ?","m",["Richter","Beaufort","Fujita","Mercalli"],2],
["Comment nomme-t-on un nuage vertical d'orage porteur de pluie intense ?","o","Un cumulonimbus"],
["Quel vent chaud et sec descend des Alpes suisses ?","o","Le foehn"],
["Quel phénomène climatique périodique réchauffe le Pacifique équatorial ?","o","El Niño"],
["Quelle échelle classe la force des vents de 0 à 12 depuis 1805 ?","o","L'échelle de Beaufort"]
]},

/* ═══════════ ANIMAUX ═══════════ */

{"t":"Les grands félins","e":"🐆","q":[
["Quel grand félin est surnommé le roi des animaux ?","m",["Le tigre","Le lion","Le léopard","Le jaguar"],1],
["Quel est le plus grand félin sauvage du monde ?","m",["Le lion","Le tigre","Le jaguar","Le puma"],1],
["Quel félin est réputé être l'animal terrestre le plus rapide ?","m",["Le léopard","Le guépard","Le lynx","Le puma"],1],
["Sur quel continent vivent naturellement les jaguars ?","m",["Afrique","Asie","Amérique","Océanie"],2],
["Comment appelle-t-on un groupe de lions vivant ensemble ?","m",["Une meute","Une horde","Une troupe","Une bande"],2],
["Quel félin d'Asie centrale vit dans les montagnes enneigées ?","m",["Le lynx boréal","La panthère des neiges","Le caracal","Le serval"],1],
["Quel félin sud-américain a une morsure parmi les plus puissantes ?","o","Le jaguar"],
["Quel petit félin d'Afrique aux longues pattes chasse surtout les oiseaux ?","o","Le serval"],
["Quelle sous-espèce de tigre, la plus grande, vit en Extrême-Orient russe ?","o","Le tigre de Sibérie"],
["Quel félin nocturne d'Asie du Sud-Est possède les plus longues canines proportionnellement ?","o","La panthère nébuleuse"]
]},

{"t":"Les baleines","e":"🐋","q":[
["Les baleines sont-elles des poissons ou des mammifères ?","m",["Poissons","Reptiles","Mammifères","Amphibiens"],2],
["Quelle est la plus grande baleine du monde ?","m",["La baleine à bosse","La baleine bleue","Le cachalot","L'orque"],1],
["Par où respirent les baleines à la surface ?","m",["Les branchies","Les évents","La bouche","Les narines"],1],
["Quelle baleine à dents est le plus grand prédateur à dents au monde ?","m",["L'orque","Le cachalot","Le béluga","Le narval"],1],
["Comment appelle-t-on les lames cornées qui filtrent l'eau chez certaines baleines ?","m",["Écailles","Fanons","Cils","Barbillons"],1],
["De quelle famille l'orque fait-elle partie ?","m",["Baleines à fanons","Dauphins","Marsouins","Bélugas"],1],
["Quel cétacé arctique mâle porte une longue défense en spirale ?","o","Le narval"],
["Quelle baleine chante des mélodies complexes étudiées depuis les années 1970 ?","o","La baleine à bosse"],
["Quelle substance parfumée précieuse est produite par le cachalot ?","o","L'ambre gris"],
["Quel est le nom scientifique de la baleine bleue ?","o","Balaenoptera musculus"]
]},

{"t":"Les serpents","e":"🐍","q":[
["Comment les serpents se déplacent-ils ?","m",["En marchant","En rampant","En sautant","En volant"],1],
["Quel serpent africain à capuche est un symbole de l'Égypte antique ?","m",["La vipère","Le python","Le cobra","Le mamba"],2],
["Quel est le plus long serpent du monde ?","m",["Le boa","L'anaconda","Le python réticulé","Le cobra royal"],2],
["Quel serpent d'Amérique du Sud tue en étouffant sa proie dans l'eau ?","m",["Le boa","L'anaconda","Le python","Le mamba"],1],
["Quel organe le serpent utilise-t-il pour sentir les odeurs ?","m",["Les yeux","La langue","Les oreilles","La peau"],1],
["Quel serpent africain rapide est réputé pour son venin neurotoxique ?","m",["La vipère heurtante","Le mamba noir","Le cobra cracheur","Le boomslang"],1],
["Quelle espèce détient le record du serpent venimeux le plus long ?","o","Le cobra royal"],
["Quel serpent australien est considéré comme le plus venimeux au monde ?","o","Le taïpan du désert"],
["Comment appelle-t-on le phénomène de changement de peau chez le serpent ?","o","La mue"],
["Quelle famille regroupe les vipères à fossette comme les crotales ?","o","Les crotalinés"]
]},

{"t":"Les oiseaux","e":"🦅","q":[
["Quel oiseau noir et blanc ne vole pas et vit en Antarctique ?","m",["Le puffin","Le manchot","Le pingouin","Le fou"],1],
["Quel est le plus grand oiseau vivant sur Terre ?","m",["Le condor","L'aigle royal","L'autruche","L'émeu"],2],
["Quel oiseau minuscule peut voler sur place en battant très vite des ailes ?","m",["La mésange","Le colibri","Le martinet","Le roitelet"],1],
["Quel rapace est le symbole des États-Unis ?","m",["L'aigle royal","Le faucon pèlerin","Le pygargue à tête blanche","Le condor"],2],
["Quel oiseau est réputé être l'animal le plus rapide du monde en piqué ?","m",["L'aigle","Le faucon pèlerin","Le martinet","Le condor"],1],
["Quel oiseau incapable de voler vit uniquement en Nouvelle-Zélande ?","m",["L'émeu","Le casoar","Le kiwi","Le nandou"],2],
["Quel oiseau disparu de l'île Maurice est devenu symbole d'extinction ?","o","Le dodo"],
["Quel oiseau marin détient l'envergure d'ailes la plus large au monde ?","o","L'albatros hurleur"],
["Quel passereau est réputé imiter parfaitement les sons de son environnement en Australie ?","o","L'oiseau-lyre"],
["Quel ordre regroupe les oiseaux coureurs comme l'autruche et le kiwi ?","o","Les ratites"]
]},

{"t":"Les insectes","e":"🐛","q":[
["Combien de pattes possède un insecte adulte ?","m",["Quatre","Six","Huit","Dix"],1],
["Quel insecte produit le miel dans une ruche ?","m",["La guêpe","L'abeille","Le frelon","Le bourdon"],1],
["Quel insecte devient un papillon après sa métamorphose ?","m",["La larve","La chenille","Le ver","La nymphe"],1],
["Quel insecte social construit des fourmilières ?","m",["La guêpe","La fourmi","L'abeille","Le termite"],1],
["Quel insecte transmet le paludisme à l'humain ?","m",["La mouche tsé-tsé","Le moustique anophèle","La tique","Le pou"],1],
["Comment appelle-t-on l'étude scientifique des insectes ?","m",["Ornithologie","Entomologie","Herpétologie","Ichtyologie"],1],
["Quel insecte détient le record de saut relatif à sa taille ?","o","La puce"],
["Quel criquet migrateur est ravageur en Afrique du Nord ?","o","Le criquet pèlerin"],
["Comment nomme-t-on la femelle qui pond chez les abeilles et les fourmis ?","o","La reine"],
["Quel ordre regroupe les coléoptères, les insectes les plus nombreux au monde ?","o","Les Coléoptères"]
]},

{"t":"Les chiens","e":"🐕","q":[
["De quel animal sauvage le chien domestique descend-il ?","m",["Le renard","Le loup","Le coyote","Le chacal"],1],
["Quel petit chien saucisse a le corps long et les pattes courtes ?","m",["Le beagle","Le teckel","Le corgi","Le carlin"],1],
["Quel chien blanc et noir est célèbre pour ses taches ?","m",["Le bouledogue","Le dalmatien","Le beagle","Le braque"],1],
["Quel sens est particulièrement développé chez le chien ?","m",["La vue","L'ouïe","L'odorat","Le toucher"],2],
["Quelle race suisse porte un tonneau autour du cou dans l'imagerie populaire ?","m",["Le bouvier bernois","Le saint-bernard","Le berger allemand","Le terre-neuve"],1],
["Quelle race japonaise a rendu célèbre le fidèle Hachikō ?","m",["Le shiba","L'akita","Le kishu","Le tosa"],1],
["Quelle race hongroise possède un pelage cordé caractéristique ?","o","Le puli"],
["Quel chien de traîneau sibérien est réputé pour ses yeux bleus ?","o","Le husky sibérien"],
["Combien de races de chiens sont officiellement reconnues par la FCI environ ?","o","Environ 350 races"],
["Quelle race africaine est reconnaissable à la crête de poils inversés sur le dos ?","o","Le rhodesian ridgeback"]
]},

{"t":"Les chats","e":"🐈","q":[
["Combien de pattes possède un chat ?","m",["Deux","Trois","Quatre","Six"],2],
["Quel son émet un chat content ?","o","Le ronronnement"],
["Quel dessin animé met en scène un chat nommé Tom ?","m",["Tom et Jerry","Titi et Grosminet","Garfield","Les Aristochats"],0],
["Quel organe du chat lui permet de voir dans la pénombre ?","m",["Le tapetum lucidum","La rétine froide","Le cristallin double","La cornée bleue"],0],
["Quelle race de chat est réputée sans poils ?","o","Le sphynx"],
["Quel félin domestique aux yeux bleus est originaire de Thaïlande ?","m",["Le Siamois","Le Persan","Le Bengal","Le Maine Coon"],0],
["Combien de vertèbres compte en moyenne la colonne d'un chat ?","m",["Une trentaine","Une cinquantaine","Une soixantaine","Une centaine"],1],
["Quel chat sauvage d'Écosse est menacé d'extinction ?","o","Le chat sauvage d'Écosse"],
["Quel gène est responsable de la robe écaille de tortue chez le chat ?","m",["Le gène orange lié à l'X","Le gène agouti","Le gène dilution","Le gène tabby"],0],
["Combien de côtes en moyenne un chat domestique possède-t-il ?","o","Treize paires (26 côtes)"]
]},

{"t":"Les poissons","e":"🐠","q":[
["Quel poisson doré orne souvent les bocaux domestiques ?","o","Le poisson rouge"],
["Quel poisson plat vit couché sur le fond marin ?","m",["La sole","Le thon","Le maquereau","La sardine"],0],
["Quel organe permet aux poissons de respirer sous l'eau ?","m",["Les branchies","Les poumons","Les nageoires","La vessie natatoire"],0],
["Quel poisson d'eau douce est réputé pour ses œufs, le caviar ?","o","L'esturgeon"],
["Quel requin est le plus grand poisson du monde ?","m",["Le requin-baleine","Le grand blanc","Le requin-tigre","Le requin-marteau"],0],
["Quelle classe regroupe les poissons cartilagineux comme les raies ?","o","Les chondrichtyens"],
["Quel poisson abyssal utilise un leurre lumineux pour chasser ?","m",["La baudroie","Le mérou","Le colin","La dorade"],0],
["Quel poisson africain peut survivre plusieurs mois enfoui dans la boue ?","o","Le protoptère"],
["Quel poisson vivant redécouvert en 1938 est un fossile vivant ?","o","Le cœlacanthe"],
["En quelle année le cœlacanthe fut-il redécouvert vivant en Afrique du Sud ?","o","1938"]
]},

{"t":"Les papillons","e":"🦋","q":[
["Comment appelle-t-on la larve du papillon ?","o","Une chenille"],
["Combien d'ailes possède un papillon adulte ?","m",["Deux","Quatre","Six","Huit"],1],
["Quel stade précède l'émergence du papillon adulte ?","m",["La chrysalide","L'œuf","La nymphe aquatique","Le cocon"],0],
["Quel papillon migre chaque année du Canada au Mexique ?","o","Le monarque"],
["À quel ordre d'insectes appartiennent les papillons ?","m",["Lépidoptères","Coléoptères","Diptères","Hyménoptères"],0],
["Quel grand papillon européen porte des ocelles bleus sur les ailes ?","m",["Le paon-du-jour","Le vulcain","Le citron","La piéride"],0],
["Quel papillon nocturne est aussi appelé Sphinx tête-de-mort ?","o","Acherontia atropos"],
["Quel organe sensoriel du papillon lui sert principalement à goûter ?","m",["Les pattes","Les antennes","La trompe","Les palpes"],0],
["Quelle plante l'asclépiade nourrit le monarque et le rend toxique ?","o","L'asclépiade (Milkweed)"],
["Quel écrivain russe, aussi lépidoptérologue, a étudié les Lycaenidae ?","o","Vladimir Nabokov"]
]},

/* ═══════════ ARTS & LETTRES ═══════════ */

{"t":"Les peintres impressionnistes","e":"🎨","q":[
["Quel peintre est célèbre pour ses Nymphéas ?","o","Claude Monet"],
["De quel tableau de Monet vient le nom Impressionnisme ?","m",["Impression, soleil levant","Les Coquelicots","La Gare Saint-Lazare","La Grenouillère"],0],
["Quel peintre impressionniste a peint le Bal du moulin de la Galette ?","o","Auguste Renoir"],
["En quelle année eut lieu la première exposition impressionniste ?","m",["1874","1863","1889","1900"],0],
["Quel peintre impressionniste est connu pour ses danseuses ?","o","Edgar Degas"],
["Quelle peintre américaine rejoignit le groupe impressionniste à Paris ?","m",["Mary Cassatt","Berthe Morisot","Eva Gonzalès","Suzanne Valadon"],0],
["Quel peintre réalisa la série des Meules à Giverny ?","m",["Claude Monet","Camille Pissarro","Alfred Sisley","Gustave Caillebotte"],0],
["Quel critique inventa le terme impressionniste en 1874 ?","o","Louis Leroy"],
["Quel peintre impressionniste anglais mourut à Moret-sur-Loing en 1899 ?","m",["Alfred Sisley","James Whistler","John Constable","Walter Sickert"],0],
["Quel marchand d'art défendit tôt les impressionnistes à Paris ?","o","Paul Durand-Ruel"]
]},

{"t":"La Renaissance italienne","e":"🖼️","q":[
["Qui a peint La Joconde ?","o","Léonard de Vinci"],
["Dans quelle ville italienne la Renaissance a-t-elle pris son essor ?","m",["Florence","Venise","Rome","Milan"],0],
["Quel sculpteur a réalisé le David de marbre à Florence ?","o","Michel-Ange"],
["Quelle famille de banquiers a mécéné la Renaissance florentine ?","m",["Les Médicis","Les Sforza","Les Borgia","Les Este"],0],
["Quel peintre a réalisé L'École d'Athènes au Vatican ?","o","Raphaël"],
["Quel architecte a conçu la coupole du Duomo de Florence ?","m",["Filippo Brunelleschi","Leon Battista Alberti","Donato Bramante","Andrea Palladio"],0],
["Quel peintre vénitien est célèbre pour ses coloris et l'Assomption ?","o","Titien"],
["Quel traité d'architecture Alberti publia-t-il en 1450 ?","m",["De re aedificatoria","Il Principe","Vita Nuova","De pictura"],0],
["Quel peintre florentin réalisa La Naissance de Vénus ?","o","Sandro Botticelli"],
["Quel pape commanda à Michel-Ange le plafond de la Sixtine ?","m",["Jules II","Léon X","Alexandre VI","Paul III"],0]
]},

{"t":"La musique classique","e":"🎼","q":[
["Combien de touches compte un piano standard ?","m",["76","88","92","102"],1],
["Qui a composé la Symphonie du Nouveau Monde ?","o","Antonín Dvořák"],
["Quel compositeur autrichien mourut à Vienne en 1791 à 35 ans ?","m",["Wolfgang Amadeus Mozart","Joseph Haydn","Franz Schubert","Ludwig van Beethoven"],0],
["Combien de symphonies Beethoven a-t-il achevées ?","o","Neuf"],
["Quel compositeur est l'auteur du Boléro créé en 1928 ?","m",["Maurice Ravel","Claude Debussy","Erik Satie","Gabriel Fauré"],0],
["Quel compositeur allemand a écrit L'Art de la fugue ?","o","Jean-Sébastien Bach"],
["Quel compositeur russe a composé le ballet Le Sacre du printemps ?","m",["Igor Stravinsky","Piotr Tchaïkovski","Sergueï Prokofiev","Modest Moussorgski"],0],
["Quel compositeur autrichien inventa la technique dodécaphonique ?","m",["Arnold Schoenberg","Béla Bartók","Franz Liszt","György Ligeti"],0],
["Quel opéra de Monteverdi, créé en 1607, est un jalon fondateur ?","o","L'Orfeo"],
["Quelle œuvre chorale Thomas Tallis composa-t-il à quarante voix ?","o","Spem in alium"]
]},

{"t":"Le jazz","e":"🎷","q":[
["De quel instrument Louis Armstrong jouait-il principalement ?","o","La trompette"],
["Dans quelle ville américaine le jazz est-il né ?","m",["La Nouvelle-Orléans","Chicago","New York","Memphis"],0],
["Quel pianiste composa Take Five avec son quartet ?","m",["Dave Brubeck","Bill Evans","Thelonious Monk","Herbie Hancock"],0],
["Quel saxophoniste enregistra Kind of Blue avec Miles Davis en 1959 ?","o","John Coltrane"],
["Quelle chanteuse est surnommée Lady Day ?","m",["Billie Holiday","Ella Fitzgerald","Sarah Vaughan","Nina Simone"],0],
["Quel style de jazz Charlie Parker contribua-t-il à fonder ?","o","Le bebop"],
["Quel album de Miles Davis, sorti en 1970, inaugure le jazz-fusion ?","m",["Bitches Brew","In a Silent Way","On the Corner","Sketches of Spain"],0],
["Quel pianiste cubain fonda Irakere en 1973 ?","o","Chucho Valdés"],
["Quel saxophoniste enregistra The Shape of Jazz to Come en 1959 ?","m",["Ornette Coleman","Sonny Rollins","Wayne Shorter","Eric Dolphy"],0],
["Quel label fondé par Alfred Lion en 1939 marqua le hard bop ?","o","Blue Note"]
]},

{"t":"La littérature française","e":"📚","q":[
["Qui a écrit Les Misérables ?","o","Victor Hugo"],
["Quel auteur français a écrit Le Petit Prince ?","m",["Antoine de Saint-Exupéry","Jean Giono","Marcel Aymé","André Gide"],0],
["Quel écrivain a créé le personnage de Madame Bovary ?","o","Gustave Flaubert"],
["Quel roman de Camus s'ouvre par Aujourd'hui, maman est morte ?","m",["L'Étranger","La Peste","La Chute","Les Justes"],0],
["Quel poète est l'auteur des Fleurs du mal ?","o","Charles Baudelaire"],
["Quel écrivain publia À la recherche du temps perdu ?","m",["Marcel Proust","André Gide","Paul Valéry","Louis Aragon"],0],
["Quel roman de Rabelais paraît en 1532 sous pseudonyme ?","o","Pantagruel"],
["Quel écrivain fonda l'Oulipo en 1960 avec Raymond Queneau ?","m",["François Le Lionnais","Georges Perec","Italo Calvino","Jacques Roubaud"],0],
["Quel poète symboliste écrivit Une saison en enfer en 1873 ?","o","Arthur Rimbaud"],
["Quel poète médiéval composa la première partie du Roman de la Rose vers 1230 ?","m",["Guillaume de Lorris","Chrétien de Troyes","Rutebeuf","Jean de Meung"],0]
]},

{"t":"L'architecture","e":"🏛️","q":[
["Dans quelle ville se dresse la tour Eiffel ?","o","Paris"],
["Quel monument romain accueillait les combats de gladiateurs ?","m",["Le Colisée","Le Panthéon","Le Forum","Les thermes de Caracalla"],0],
["Quel architecte a conçu la Sagrada Família à Barcelone ?","o","Antoni Gaudí"],
["Quel style architectural médiéval se caractérise par l'arc brisé ?","m",["Le gothique","Le roman","Le baroque","Le classique"],0],
["Quel architecte franco-suisse a conçu la Villa Savoye ?","o","Le Corbusier"],
["Quel architecte américain a dessiné la Fallingwater en Pennsylvanie ?","m",["Frank Lloyd Wright","Louis Kahn","Richard Neutra","Philip Johnson"],0],
["Quel architecte a conçu le musée Guggenheim de Bilbao ?","o","Frank Gehry"],
["Quel architecte de la Renaissance a écrit les Quatre Livres de l'architecture ?","m",["Andrea Palladio","Vitruve","Sebastiano Serlio","Vignole"],0],
["Quel architecte a conçu le pavillon allemand de Barcelone en 1929 ?","o","Ludwig Mies van der Rohe"],
["Quel architecte sino-américain a dessiné la pyramide du Louvre ?","m",["Ieoh Ming Pei","Renzo Piano","Norman Foster","Jean Nouvel"],0]
]},

{"t":"La photographie","e":"📷","q":[
["Comment appelle-t-on l'organe qui règle la lumière dans un appareil photo ?","m",["Le diaphragme","L'obturateur","La bague","Le viseur"],0],
["Quel appareil photo instantané fut lancé par Edwin Land en 1948 ?","o","Le Polaroid"],
["Quel photographe français est l'auteur de l'instant décisif ?","m",["Henri Cartier-Bresson","Robert Doisneau","Willy Ronis","Édouard Boubat"],0],
["Quelle unité mesure la sensibilité d'un film photographique ?","o","L'ISO"],
["Quel inventeur français annonça son procédé photographique en 1839 à Paris ?","m",["Louis Daguerre","Nicéphore Niépce","Hippolyte Bayard","Nadar"],0],
["Quel photographe américain a créé le Zone System avec Fred Archer ?","o","Ansel Adams"],
["Quelle photographe américaine documenta la Grande Dépression pour la FSA ?","m",["Dorothea Lange","Margaret Bourke-White","Berenice Abbott","Diane Arbus"],0],
["Quel photographe brésilien a publié le livre Genesis en 2013 ?","o","Sebastião Salgado"],
["Quel photographe hongrois cofonda l'agence Magnum en 1947 ?","m",["Robert Capa","André Kertész","Brassaï","László Moholy-Nagy"],0],
["Quel procédé photographique fut breveté par Talbot en 1841 ?","o","Le calotype"]
]},

{"t":"La BD franco-belge","e":"💬","q":[
["Quel petit reporter belge voyage avec son chien Milou ?","o","Tintin"],
["Quel village gaulois résiste encore et toujours à l'envahisseur ?","o","Le village d'Astérix"],
["Quels quatre cow-boys jumeaux Morris a-t-il opposés à Lucky Luke ?","m",["Les Dalton","Les Rapetou","Les Pieds Nickelés","Les Bogdanoff"],0],
["Quel Schtroumpf porte un pantalon et un bonnet rouges ?","m",["Le Grand Schtroumpf","Le Schtroumpf farceur","Le Schtroumpf costaud","Le Schtroumpf bricoleur"],0],
["Qui a créé le personnage de Gaston Lagaffe ?","o","André Franquin"],
["Dans quel magazine Tintin fut-il d'abord publié en 1929 ?","m",["Le Petit Vingtième","Spirou","Pilote","Pif Gadget"],0],
["Quel dessinateur a créé Blake et Mortimer ?","m",["Edgar P. Jacobs","Hergé","Peyo","Jean Van Hamme"],0],
["Quel scénariste est à l'origine de XIII et de Thorgal ?","o","Jean Van Hamme"],
["Quel dessinateur français a créé Blueberry avec Jean-Michel Charlier ?","m",["Jean Giraud","Jacques Tardi","Enki Bilal","François Bourgeon"],0],
["En quelle année Hergé a-t-il publié le premier album de Tintin ?","o","1930"]
]},

/* ═══════════ SPORTS ═══════════ */

{"t":"Le football","e":"⚽","q":[
["Combien de joueurs compte une équipe de football sur le terrain ?","o","11"],
["Quel pays a remporté la Coupe du monde de football en 2018 ?","m",["France","Croatie","Allemagne","Brésil"],0],
["Quel club anglais est surnommé les Red Devils ?","m",["Manchester United","Liverpool","Arsenal","Chelsea"],0],
["Quel joueur argentin a remporté huit Ballons d'Or ?","o","Lionel Messi"],
["Dans quel club Zinédine Zidane a-t-il terminé sa carrière ?","m",["Real Madrid","Juventus","Bordeaux","Cannes"],0],
["Quel gardien italien a soulevé la Coupe du monde 2006 ?","m",["Gianluigi Buffon","Dino Zoff","Walter Zenga","Gianluca Pagliuca"],0],
["Quel entraîneur a mené le Portugal à l'Euro 2016 ?","o","Fernando Santos"],
["Quel club a remporté la première Coupe d'Europe des clubs champions en 1956 ?","m",["Real Madrid","Benfica","AC Milan","Reims"],0],
["Qui a inscrit le but vainqueur de la finale du Mondial 2014 ?","o","Mario Götze"],
["Quel joueur détient le record de buts en une saison de Liga avec 50 ?","o","Lionel Messi"]
]},

{"t":"Le tennis","e":"🎾","q":[
["Combien de sets faut-il gagner pour remporter un match masculin en Grand Chelem ?","o","3"],
["Sur quelle surface se joue Roland-Garros ?","m",["Terre battue","Gazon","Dur","Moquette"],0],
["Quel joueur suisse a remporté vingt titres du Grand Chelem ?","o","Roger Federer"],
["Quelle Française a remporté Roland-Garros en 2000 ?","m",["Mary Pierce","Amélie Mauresmo","Marion Bartoli","Nathalie Tauziat"],0],
["Combien de titres à Roland-Garros compte Rafael Nadal ?","o","14"],
["Quel tournoi du Grand Chelem se dispute à Melbourne ?","m",["Open d'Australie","US Open","Wimbledon","Roland-Garros"],0],
["Quelle joueuse a remporté 23 titres du Grand Chelem en simple ?","o","Serena Williams"],
["Quel Suédois a remporté six fois Roland-Garros dans les années 1970-1980 ?","m",["Björn Borg","Mats Wilander","Stefan Edberg","Ivan Lendl"],0],
["Quel Français a remporté Roland-Garros en 1983 ?","o","Yannick Noah"],
["En quelle année le tie-break a-t-il été instauré à Wimbledon dans le set décisif ?","o","2019"]
]},

{"t":"Les JO","e":"🥇","q":[
["Combien d'anneaux figurent sur le drapeau olympique ?","o","5"],
["Dans quelle ville se sont déroulés les JO d'été 2024 ?","m",["Paris","Tokyo","Los Angeles","Londres"],0],
["Quel nageur américain a remporté 23 médailles d'or olympiques ?","o","Michael Phelps"],
["En quelle année se sont tenus les premiers JO modernes ?","m",["1896","1900","1888","1912"],0],
["Quel sprinter jamaïcain a été triple champion olympique du 100 m ?","o","Usain Bolt"],
["Dans quelle ville se sont tenus les JO d'hiver 1992 en France ?","m",["Albertville","Grenoble","Chamonix","Val-d'Isère"],0],
["Quelle escrimeuse française a remporté cinq médailles d'or olympiques ?","m",["Laura Flessel","Corinne Coutant","Anne-Lise Touya","Astrid Guyart"],0],
["Quel décathlonien tchèque a remporté les JO de 2004 ?","o","Roman Šebrle"],
["Quelle ville a organisé les JO d'été de 1912 ?","m",["Stockholm","Anvers","Paris","Berlin"],0],
["Qui a rétabli les Jeux olympiques modernes en 1894 ?","o","Pierre de Coubertin"]
]},

{"t":"Le Tour de France","e":"🚴","q":[
["De quelle couleur est le maillot du leader du Tour de France ?","o","Jaune"],
["Quel maillot récompense le meilleur grimpeur ?","m",["À pois rouges","Vert","Blanc","Arc-en-ciel"],0],
["Combien de Tours de France a remporté Bernard Hinault ?","o","5"],
["Quel Français a gagné le Tour en 1983 et 1984 ?","m",["Laurent Fignon","Bernard Hinault","Raymond Poulidor","Louison Bobet"],0],
["Quel cycliste britannique a gagné le Tour en 2012 ?","m",["Bradley Wiggins","Chris Froome","Mark Cavendish","Geraint Thomas"],0],
["En quelle année a eu lieu la première édition du Tour de France ?","o","1903"],
["Quel col mythique culmine à 2 645 m dans les Alpes ?","m",["Col du Galibier","Col du Tourmalet","Col d'Izoard","Alpe d'Huez"],0],
["Quel Belge a remporté cinq Tours de France entre 1969 et 1974 ?","o","Eddy Merckx"],
["Quel coureur luxembourgeois a hérité du Tour 2010 après le déclassement d'Alberto Contador ?","o","Andy Schleck"],
["Qui a remporté le premier Tour de France en 1903 ?","o","Maurice Garin"]
]},

{"t":"Le rugby","e":"🏉","q":[
["Combien de joueurs compose une équipe de rugby à XV sur le terrain ?","o","15"],
["Combien de points rapporte un essai au rugby à XV ?","o","5"],
["Dans quel pays se joue le Haka avant les matchs ?","m",["Nouvelle-Zélande","Australie","Fidji","Samoa"],0],
["Quel pays a remporté la Coupe du monde de rugby en 2023 ?","m",["Afrique du Sud","Nouvelle-Zélande","France","Angleterre"],0],
["Quel Français a inscrit le drop victorieux face à la Nouvelle-Zélande en 1999 ?","m",["Christophe Lamaison","Fabien Galthié","Thomas Castaignède","Frédéric Michalak"],0],
["Combien de titres compte l'Afrique du Sud en Coupe du monde de rugby ?","o","4"],
["Quel joueur néo-zélandais est le meilleur marqueur d'essais en test-match ?","m",["Doug Howlett","Jonah Lomu","Julian Savea","Ben Smith"],0],
["Quel ouvreur anglais a marqué le drop vainqueur de la finale 2003 ?","o","Jonny Wilkinson"],
["Dans quelle ville se trouve le stade Millennium, temple du rugby gallois ?","m",["Cardiff","Swansea","Newport","Wrexham"],0],
["Quel demi de mêlée argentin fut surnommé El Pibe et capitaine des Pumas ?","o","Agustín Pichot"]
]},

{"t":"La Formule 1","e":"🏎️","q":[
["De quelle couleur est le drapeau agité à la fin d'une course de F1 ?","m",["À damier","Rouge","Jaune","Vert"],0],
["Quel pilote allemand a remporté sept titres mondiaux dans les années 2000 ?","o","Michael Schumacher"],
["Quelle écurie italienne est la plus ancienne en F1 ?","m",["Ferrari","Alfa Romeo","Maserati","Lancia"],0],
["Quel pilote britannique a remporté sept titres mondiaux dans les années 2010 ?","o","Lewis Hamilton"],
["Sur quel circuit se dispute le Grand Prix de Monaco ?","m",["Monte-Carlo","Fiorano","Imola","Mugello"],0],
["Quel pilote français a remporté quatre titres de champion du monde ?","o","Alain Prost"],
["Quelle écurie autrichienne a remporté son premier titre constructeurs en 2010 ?","m",["Red Bull","Sauber","Toro Rosso","Minardi"],0],
["Quel pilote brésilien est mort à Imola en 1994 ?","o","Ayrton Senna"],
["Combien de Grands Prix a remportés Jim Clark durant sa carrière ?","o","25"],
["En quelle année a eu lieu le premier championnat du monde de F1 ?","o","1950"]
]},

{"t":"L'alpinisme","e":"🏔️","q":[
["Quel est le plus haut sommet du monde ?","o","L'Everest"],
["Dans quelle chaîne se trouve le mont Blanc ?","m",["Les Alpes","Les Pyrénées","Le Jura","Les Vosges"],0],
["Quelle est l'altitude approximative du mont Blanc en mètres ?","m",["4 809","3 842","5 200","4 300"],0],
["Qui a été le premier à atteindre le sommet de l'Everest en 1953 avec Tenzing Norgay ?","o","Edmund Hillary"],
["Combien de sommets de plus de 8 000 m compte la planète ?","o","14"],
["Quel alpiniste italien a été le premier à gravir les 14 sommets de plus de 8 000 m ?","m",["Reinhold Messner","Walter Bonatti","Riccardo Cassin","Simone Moro"],0],
["Quel sommet est surnommé la Montagne sauvage et culmine à 8 611 m ?","m",["K2","Nanga Parbat","Kangchenjunga","Annapurna"],0],
["Qui a réalisé la première ascension du mont Blanc en 1786 ?","o","Jacques Balmat et Michel Paccard"],
["Quel massif suisse abrite l'Eiger et sa face nord redoutée ?","m",["Oberland bernois","Valais","Dolomites","Mont-Rose"],0],
["En quelle année la face nord de l'Eiger a-t-elle été vaincue pour la première fois ?","o","1938"]
]},

/* ═══════════ CULTURE POP ═══════════ */

{"t":"Star Wars","e":"⚡","q":[
["Comment s'appelle le père de Luke Skywalker ?","o","Anakin Skywalker"],
["De quelle couleur est le sabre laser de Yoda ?","m",["Vert","Bleu","Rouge","Violet"],0],
["Quel contrebandier pilote le Faucon Millenium ?","o","Han Solo"],
["Quelle planète désertique est la planète natale de Luke Skywalker ?","m",["Tatooine","Jakku","Dagobah","Naboo"],0],
["Quel personnage prononce la phrase Je suis ton père dans L'Empire contre-attaque ?","o","Dark Vador"],
["Quel Wookiee accompagne Han Solo depuis des années ?","m",["Chewbacca","Tarfful","Wullffwarro","Snoova"],0],
["Quel réalisateur a créé la saga Star Wars ?","o","George Lucas"],
["De quelle espèce est Yoda selon les films officiels ?","m",["Inconnue","Whill","Kaminoan","Neimoidien"],0],
["Comment s'appelle la planète natale de Chewbacca ?","o","Kashyyyk"],
["Qui a composé la musique de la saga Star Wars ?","o","John Williams"]
]},

{"t":"Harry Potter","e":"⚡","q":[
["Comment s'appelle l'école de sorcellerie de Harry Potter ?","o","Poudlard"],
["Dans quelle maison Harry Potter est-il envoyé ?","m",["Gryffondor","Serpentard","Serdaigle","Poufsouffle"],0],
["Comment s'appelle la chouette de Harry Potter ?","o","Hedwige"],
["Quel est le nom complet du principal antagoniste de la saga ?","m",["Tom Elvis Jedusor","Salazar Serpentard","Gellert Grindelwald","Barty Croupton"],0],
["Quel poste occupe Rubeus Hagrid à Poudlard au premier tome ?","m",["Garde-chasse","Professeur de potions","Directeur","Concierge"],0],
["Qui a écrit la saga Harry Potter ?","o","J. K. Rowling"],
["Quel objet permet à Harry de voir ses parents disparus dans le premier tome ?","o","Le miroir du Riséd"],
["Quel dragon Harry affronte-t-il lors de la première tâche du Tournoi des Trois Sorciers ?","m",["Magyar à pointes","Vert gallois","Suédois à museau court","Boutefeu chinois"],0],
["Quel est le prénom de la mère de Harry Potter ?","o","Lily"],
["Comment s'appelle le hibou de Ron Weasley offert par Sirius ?","o","Coquecigrue"]
]},

{"t":"Disney","e":"🏰","q":[
["Quelle est la souris la plus célèbre de Disney ?","o","Mickey"],
["Quel canard porte un costume de marin bleu ?","o","Donald"],
["Quelle princesse Disney perd une pantoufle de verre ?","o","Cendrillon"],
["Dans quel film trouve-t-on le lion Simba ?","o","Le Roi Lion"],
["Qui est le meilleur ami de Woody dans Toy Story ?","m",["Buzz l'Éclair","Rex","Jessie","Zurg"],0],
["Quelle est la couleur de la robe de Belle au bal ?","m",["Rouge","Bleue","Jaune","Verte"],2],
["Qui a fondé la société Disney avec son frère Roy ?","o","Walt Disney"],
["Dans quelle ville se déroule le film Ratatouille ?","o","Paris"],
["Quel est le nom du village de Vaiana ?","m",["Motunui","Kahiki","Tefiti","Lalotai"],0],
["En quelle année sort Blanche-Neige et les Sept Nains ?","m",["1928","1937","1942","1950"],1]
]},

{"t":"Marvel","e":"🦸","q":[
["Quelle est la couleur de la peau de Hulk ?","o","Verte"],
["Quel milliardaire se cache derrière l'armure d'Iron Man ?","o","Tony Stark"],
["Quel super-héros lance des toiles depuis ses poignets ?","o","Spider-Man"],
["Quel marteau appartient au dieu du tonnerre Thor ?","o","Mjolnir"],
["Quel métal compose le bouclier de Captain America ?","m",["Adamantium","Vibranium","Uru","Titane"],1],
["Qui réalise le premier film Iron Man en 2008 ?","m",["Joss Whedon","Jon Favreau","Kenneth Branagh","Sam Raimi"],1],
["Comment se nomme le royaume d'origine de Black Panther ?","o","Wakanda"],
["Quel personnage claque des doigts avec le Gant de l'Infini ?","o","Thanos"],
["Qui crée Spider-Man avec Steve Ditko en 1962 ?","m",["Stan Lee","Jack Kirby","Bob Kane","Jim Starlin"],0],
["Quel est le vrai nom de la Sorcière Rouge ?","m",["Wanda Maximoff","Jean Grey","Carol Danvers","Natasha Romanoff"],0]
]},

{"t":"Les Beatles","e":"🎸","q":[
["De quelle ville anglaise sont originaires les Beatles ?","o","Liverpool"],
["Combien de membres compte le groupe des Beatles ?","o","Quatre"],
["Qui chante la chanson Imagine en solo après le groupe ?","o","John Lennon"],
["Quel Beatle est le batteur du groupe ?","o","Ringo Starr"],
["Quel album montre le groupe traversant un passage piéton ?","m",["Let It Be","Abbey Road","Help!","Revolver"],1],
["En quelle année les Beatles se séparent-ils officiellement ?","m",["1968","1969","1970","1972"],2],
["Qui produit la majorité des albums des Beatles ?","o","George Martin"],
["Quel titre commence par Yesterday, all my troubles seemed so far away ?","o","Yesterday"],
["Devant quel hôtel John Lennon est-il assassiné en 1980 ?","m",["Le Dakota","Le Chelsea","Le Plaza","Le Waldorf"],0],
["Quel album blanc sort en novembre 1968 ?","m",["Revolver","The Beatles","Rubber Soul","Magical Mystery Tour"],1]
]},

{"t":"Les Rolling Stones","e":"🎸","q":[
["Quel est le logo emblématique des Rolling Stones ?","o","La langue"],
["Qui est le chanteur principal des Rolling Stones ?","o","Mick Jagger"],
["De quel pays sont originaires les Rolling Stones ?","o","Royaume-Uni"],
["Quel guitariste emblématique accompagne Jagger depuis les débuts ?","o","Keith Richards"],
["Quelle chanson commence par I can't get no satisfaction ?","m",["Angie","Satisfaction","Paint It Black","Start Me Up"],1],
["Dans quelle décennie le groupe est-il fondé ?","m",["1950","1960","1970","1980"],1],
["Quel guitariste fondateur meurt noyé en 1969 ?","o","Brian Jones"],
["Sur quel album figure la chanson Gimme Shelter ?","m",["Let It Bleed","Sticky Fingers","Exile on Main St.","Aftermath"],0],
["Qui dessine la célèbre pochette de Sticky Fingers ?","o","Andy Warhol"],
["En quelle année sort l'album Exile on Main St. ?","m",["1969","1971","1972","1975"],2]
]},

{"t":"Les jeux vidéo","e":"🎮","q":[
["Quel plombier moustachu est la mascotte de Nintendo ?","o","Mario"],
["Quel jeu consiste à empiler des blocs colorés qui tombent ?","o","Tetris"],
["Quelle console portable sort chez Nintendo en 1989 ?","o","La Game Boy"],
["De quelle couleur est le hérisson mascotte de Sega ?","o","Bleu"],
["Qui est la princesse à sauver dans Zelda ?","m",["Peach","Zelda","Daisy","Rosalina"],1],
["Quel studio développe la série Assassin's Creed ?","m",["Ubisoft","EA","Rockstar","Activision"],0],
["Quel jeu de Mojang permet de construire avec des cubes ?","o","Minecraft"],
["Quel personnage collecte des anneaux dorés dans ses jeux ?","o","Sonic"],
["Quel jeu de FromSoftware remporte le GOTY 2022 ?","m",["Dark Souls III","Elden Ring","Sekiro","Bloodborne"],1],
["Qui crée la série Metal Gear Solid ?","m",["Shigeru Miyamoto","Hideo Kojima","Yuji Naka","Hironobu Sakaguchi"],1]
]},

{"t":"Le cinéma français","e":"🎬","q":[
["Quel acteur joue Astérix dans le film avec Depardieu en Obélix ?","o","Christian Clavier"],
["Quelle actrice française incarne Amélie Poulain ?","o","Audrey Tautou"],
["Quel duo réalise le film Intouchables sorti en 2011 ?","o","Olivier Nakache et Éric Toledano"],
["Quel festival de cinéma se tient chaque année en mai sur la Croisette ?","o","Cannes"],
["Quel acteur joue le rôle principal du Fabuleux Destin d'Amélie Poulain ?","m",["Jamel Debbouze","Mathieu Kassovitz","Vincent Cassel","Romain Duris"],1],
["Qui réalise le film La Haine sorti en 1995 ?","m",["Luc Besson","Mathieu Kassovitz","Cédric Klapisch","Jacques Audiard"],1],
["Comment s'appelle la récompense principale du Festival de Cannes ?","o","La Palme d'or"],
["Quel film de Jean-Pierre Jeunet remporte plusieurs Césars en 2002 ?","o","Le Fabuleux Destin d'Amélie Poulain"],
["Qui réalise Les Quatre Cents Coups en 1959 ?","m",["Jean-Luc Godard","François Truffaut","Claude Chabrol","Éric Rohmer"],1],
["Quel film français remporte la Palme d'or en 2021 ?","m",["Titane","Anatomie d'une chute","La Vie d'Adèle","Portrait de la jeune fille en feu"],0]
]},

{"t":"Le cinéma américain","e":"🎥","q":[
["Dans quelle ville américaine se trouve Hollywood ?","o","Los Angeles"],
["Quel acteur joue Jack dans le film Titanic de 1997 ?","o","Leonardo DiCaprio"],
["Quelle récompense en forme de statuette dorée est remise chaque année ?","o","L'Oscar"],
["Quel réalisateur signe Jurassic Park et E.T. ?","o","Steven Spielberg"],
["Qui réalise le film Pulp Fiction sorti en 1994 ?","m",["Martin Scorsese","Quentin Tarantino","David Lynch","Oliver Stone"],1],
["Quel film remporte l'Oscar du meilleur film en 2020 ?","m",["1917","Joker","Parasite","Once Upon a Time in Hollywood"],2],
["Qui réalise la trilogie du Parrain ?","o","Francis Ford Coppola"],
["Quel acteur incarne Vito Corleone dans Le Parrain de 1972 ?","o","Marlon Brando"],
["Qui réalise Citizen Kane en 1941 ?","m",["Orson Welles","John Ford","Alfred Hitchcock","Howard Hawks"],0],
["Quel film des frères Coen remporte l'Oscar du meilleur film en 2008 ?","m",["Fargo","No Country for Old Men","True Grit","A Serious Man"],1]
]},

{"t":"Les mangas","e":"📖","q":[
["De quel pays proviennent les mangas ?","o","Japon"],
["Quel pirate au chapeau de paille cherche le One Piece ?","o","Luffy"],
["Quel ninja blond rêve de devenir Hokage ?","o","Naruto"],
["Quel manga met en scène Son Goku et les boules de cristal ?","o","Dragon Ball"],
["Qui est l'auteur de Dragon Ball ?","m",["Eiichiro Oda","Akira Toriyama","Masashi Kishimoto","Tite Kubo"],1],
["Dans quel manga combat-on des Titans mangeurs d'hommes ?","m",["Tokyo Ghoul","L'Attaque des Titans","Berserk","Chainsaw Man"],1],
["Qui est l'auteur du manga One Piece ?","o","Eiichiro Oda"],
["Quel manga suit Tanjiro chassant des démons pour sauver sa sœur ?","o","Demon Slayer"],
["Qui réalise le film d'animation Le Voyage de Chihiro ?","m",["Isao Takahata","Hayao Miyazaki","Makoto Shinkai","Mamoru Hosoda"],1],
["Quel mangaka crée Berserk en 1989 ?","m",["Kentaro Miura","Naoki Urasawa","Katsuhiro Otomo","Takehiko Inoue"],0]
]},

{"t":"Les séries TV","e":"📺","q":[
["Dans quelle série suit-on un groupe de six amis à New York ?","o","Friends"],
["Quelle série met en scène des dragons et le trône de fer ?","o","Game of Thrones"],
["Dans quelle série Walter White fabrique-t-il de la méthamphétamine ?","o","Breaking Bad"],
["Quelle série espagnole met en scène un braquage à la Fabrique nationale de la monnaie ?","o","La Casa de Papel"],
["Dans quelle ville se déroule la série Peaky Blinders ?","m",["Londres","Manchester","Birmingham","Liverpool"],2],
["Qui joue Sheldon Cooper dans The Big Bang Theory ?","m",["Johnny Galecki","Jim Parsons","Simon Helberg","Kunal Nayyar"],1],
["Quel personnage principal incarne Bryan Cranston dans Breaking Bad ?","o","Walter White"],
["Dans quelle série se trouve la ville fictive de Hawkins ?","o","Stranger Things"],
["Qui crée la série Twin Peaks avec Mark Frost en 1990 ?","m",["David Lynch","David Fincher","David Chase","David Simon"],0],
["Quel showrunner est derrière The Wire diffusée sur HBO ?","m",["David Chase","David Simon","Vince Gilligan","Matthew Weiner"],1]
]},

/* ═══════════ GASTRONOMIE ═══════════ */

{"t":"La cuisine française","e":"🥐","q":[
["Quelle viennoiserie feuilletée en forme de croissant se mange au petit-déjeuner ?","o","Le croissant"],
["Quel fromage à pâte molle vient de Normandie et porte le nom d'un village ?","o","Le camembert"],
["Quel plat à base d'escargots est typique de la Bourgogne ?","o","Les escargots de Bourgogne"],
["Quelle pâtisserie ronde à deux coques est colorée et parfumée ?","o","Le macaron"],
["Quel plat mijoté à base de bœuf et vin rouge vient de Bourgogne ?","m",["Le pot-au-feu","Le bœuf bourguignon","Le navarin","La daube"],1],
["Quelle ville est réputée pour ses bouchons et sa gastronomie lyonnaise ?","m",["Bordeaux","Lyon","Marseille","Strasbourg"],1],
["Quelle sauce à base de beurre, jaune d'œuf et estragon accompagne le steak ?","o","La sauce béarnaise"],
["Quel dessert consiste en une pâte feuilletée renversée avec des pommes caramélisées ?","o","La tarte Tatin"],
["Qui est considéré comme le père de la cuisine française moderne au XIXe siècle ?","m",["Auguste Escoffier","Marie-Antoine Carême","Paul Bocuse","Alain Chapel"],1],
["De quelle région provient la garbure, soupe épaisse au chou et confit ?","m",["Auvergne","Béarn","Bretagne","Alsace"],1]
]},

{"t":"Le vin français","e":"🍷","q":[
["De quelle couleur est un vin de Bourgogne rouge ?","o","Rouge"],
["Quelle région française produit le champagne ?","o","La Champagne"],
["Quel cépage blanc domine en Alsace ?","m",["Riesling","Merlot","Syrah","Gamay"],0],
["Dans quelle région produit-on le Beaujolais nouveau ?","o","Le Beaujolais"],
["Quel cépage rouge fait la renommée des vins de Bourgogne ?","m",["Pinot noir","Cabernet","Grenache","Syrah"],0],
["Quelle appellation du Rhône est associée aux papes d'Avignon ?","o","Châteauneuf-du-Pape"],
["Combien y a-t-il de premiers grands crus classés A à Saint-Émilion en 2012 ?","m",["2","4","6","8"],1],
["Quel groupe familial est propriétaire du Château Latour depuis 1993 ?","m",["Artémis (Pinault)","LVMH","Bolloré","Wertheimer"],0],
["Quel cépage blanc rare compose le Château-Chalon dans le Jura ?","o","Le savagnin"],
["En quelle année fut instaurée la classification officielle des vins de Bordeaux ?","m",["1789","1855","1900","1936"],1]
]},

{"t":"Les fromages","e":"🧀","q":[
["De quel animal provient le lait du camembert ?","o","La vache"],
["Quel fromage bleu français est affiné dans des caves de l'Aveyron ?","m",["Roquefort","Cantal","Comté","Brie"],0],
["De quelle région provient le reblochon ?","o","La Savoie"],
["Quel fromage suisse est célèbre pour ses trous ?","m",["Emmental","Gruyère","Tomme","Vacherin"],0],
["Quel fromage normand se présente en forme de cœur ?","o","Le Neufchâtel"],
["Quel fromage sarde ou corse contient parfois des larves vivantes ?","m",["Le casu marzu","Le brocciu","Le venaco","Le pecorino"],0],
["Quelle race bovine fournit le lait du véritable camembert AOP ?","o","La Normande"],
["Combien de mois d'affinage minimum pour un comté AOP ?","m",["2","4","6","12"],1],
["Quel fromage anglais orangé est le plus vendu au monde ?","o","Le cheddar"],
["Quel fromage italien à pâte pressée cuite est râpé depuis le Moyen Âge ?","o","Le parmesan (Parmigiano Reggiano)"]
]},

{"t":"Le chocolat","e":"🍫","q":[
["De quelle plante provient le chocolat ?","o","Le cacaoyer"],
["Quelle marque commercialise les œufs Kinder Surprise ?","m",["Ferrero","Nestlé","Lindt","Milka"],0],
["Quel pays européen est célèbre pour ses pralines et sa tradition chocolatière ?","o","La Belgique"],
["Quel chocolatier français a fondé sa maison à Bayonne au XIXe siècle ?","m",["Cazenave","Valrhona","Weiss","Bonnat"],0],
["Quelle fève de cacao rare représente moins de 5 % de la production mondiale ?","m",["Criollo","Forastero","Trinitario","Nacional"],0],
["Quel peuple précolombien consommait le cacao sous forme de boisson amère ?","o","Les Aztèques"],
["Quel Suisse a inventé le chocolat au lait en 1875 ?","m",["Daniel Peter","Henri Nestlé","Rodolphe Lindt","François-Louis Cailler"],0],
["Quel procédé inventé par Lindt en 1879 donne au chocolat sa texture fondante ?","o","Le conchage"],
["Quel alcaloïde du cacao est toxique pour les chiens ?","m",["Théobromine","Caféine","Théine","Tanin"],0],
["En quelle année Jean Neuhaus inventa-t-il la praline belge fourrée ?","m",["1857","1887","1912","1925"],2]
]},

{"t":"Les épices","e":"🌶️","q":[
["De quelle couleur est le curcuma en poudre ?","o","Jaune orangé"],
["Quelle épice rouge orne traditionnellement la paella ?","m",["Safran","Paprika","Piment","Curcuma"],0],
["De quelle plante provient la vanille ?","o","L'orchidée (vanillier)"],
["Quel pays est le premier producteur mondial de poivre noir ?","m",["Vietnam","Inde","Brésil","Indonésie"],0],
["Quelle épice provient du pistil d'une fleur de crocus ?","o","Le safran"],
["Quelle épice indienne parfume traditionnellement le garam masala et le chai ?","m",["Cardamome","Fenugrec","Anis étoilé","Nigelle"],0],
["De quelle île indonésienne provient historiquement la noix de muscade ?","o","Les îles Banda (Moluques)"],
["Quel composé chimique donne au piment sa sensation de brûlure ?","m",["Capsaïcine","Pipérine","Curcumine","Eugénol"],0],
["Quel piment est classé comme l'un des plus forts au monde sur l'échelle Scoville ?","o","Le Carolina Reaper"],
["Quel navigateur portugais atteignit les Indes en 1498, ouvrant la route des épices ?","m",["Vasco de Gama","Magellan","Bartolomeu Dias","Cabral"],0]
]},

/* ═══════════ FAITS DIVERS & HISTOIRE INSOLITE ═══════════ */

{"t":"Les guillotinés célèbres","e":"⚔️","q":[
["Quel roi de France fut guillotiné en 1793 ?","o","Louis XVI"],
["Quelle reine de France fut guillotinée en octobre 1793 ?","m",["Marie-Antoinette","Marie Leszczynska","Marie de Médicis","Anne d'Autriche"],0],
["Quel révolutionnaire fut guillotiné le 28 juillet 1794 ?","o","Robespierre"],
["Quel révolutionnaire, longtemps ami de Robespierre, fut guillotiné en avril 1794 ?","m",["Danton","Marat","Saint-Just","Hébert"],0],
["Quel chimiste père de la chimie moderne fut guillotiné en 1794 ?","o","Antoine Lavoisier"],
["Quel poète guillotiné en 1794 est l'auteur des Iambes ?","m",["André Chénier","Chamfort","Fabre d'Églantine","Roucher"],0],
["Quelle militante des droits des femmes fut guillotinée en novembre 1793 ?","o","Olympe de Gouges"],
["Quel fut le dernier condamné guillotiné en France, à Marseille en 1977 ?","m",["Hamida Djandoubi","Christian Ranucci","Roger Bontems","Claude Buffet"],0],
["Sur quelle place actuelle Louis XVI fut-il exécuté à Paris ?","o","La place de la Concorde"],
["En quelle année la peine de mort par guillotine fut-elle officiellement abolie en France ?","m",["1977","1981","1986","1992"],1]
]},

{"t":"Les naufrages","e":"🚢","q":[
["En quelle année a sombré le Titanic ?","o","1912"],
["Contre quoi le Titanic a-t-il heurté avant de couler ?","m",["Un iceberg","Une mine","Une torpille","Un récif"],0],
["Quel paquebot torpillé en 1915 précipita l'entrée en guerre des États-Unis ?","o","Le Lusitania"],
["Quel pétrolier fit naufrage devant la Bretagne en mars 1978 ?","m",["Amoco Cadiz","Torrey Canyon","Erika","Prestige"],0],
["Quel ferry estonien coula en mer Baltique en septembre 1994 ?","o","L'Estonia"],
["Combien de personnes environ périrent dans le naufrage du Titanic ?","m",["Environ 1 500","Environ 800","Environ 2 200","Environ 500"],0],
["Quel navire suédois du XVIIe siècle sombra dans le port de Stockholm en 1628 ?","o","Le Vasa"],
["Quel navire allemand coulé en 1945 causa la plus meurtrière catastrophe maritime ?","m",["Wilhelm Gustloff","Bismarck","Tirpitz","Cap Arcona"],0],
["Quel paquebot italien coula après une collision au large de Nantucket en 1956 ?","o","L'Andrea Doria"],
["Quel navire de la flotte de La Pérouse fit naufrage à Vanikoro en 1788 avec la Boussole ?","m",["L'Astrolabe","La Belle","Le Griffon","Le Soleil Royal"],0]
]},

{"t":"Les rockstars mortes à 27 ans","e":"🎸","q":[
["Quel guitariste américain gaucher mourut à 27 ans en 1970 ?","o","Jimi Hendrix"],
["Quelle chanteuse de blues rock mourut à 27 ans en 1970 ?","m",["Janis Joplin","Grace Slick","Tina Turner","Aretha Franklin"],0],
["Quel chanteur des Doors mourut à Paris en 1971 à 27 ans ?","o","Jim Morrison"],
["Quel leader de Nirvana s'est suicidé en 1994 à 27 ans ?","m",["Kurt Cobain","Chris Cornell","Layne Staley","Eddie Vedder"],0],
["Quelle chanteuse britannique de Back to Black mourut à 27 ans en 2011 ?","o","Amy Winehouse"],
["Quel guitariste des Rolling Stones fut retrouvé mort dans sa piscine en 1969 ?","m",["Brian Jones","Mick Taylor","Ronnie Wood","Bill Wyman"],0],
["Dans quel arrondissement de Paris Jim Morrison est-il enterré ?","o","Le 20e (Père-Lachaise)"],
["Quel bluesman du Delta, mort en 1938 à 27 ans, aurait vendu son âme au diable ?","m",["Robert Johnson","Son House","Muddy Waters","Skip James"],0],
["Quel claviériste des Grateful Dead précurseur mourut à 27 ans en 1973 ?","o","Ron McKernan (Pigpen)"],
["Quel guitariste des Allman Brothers mourut à 24 ans en moto avant d'inspirer le club des 27 ?","m",["Duane Allman","Berry Oakley","Dickey Betts","Gregg Allman"],0]
]},

{"t":"Les diamants célèbres","e":"💎","q":[
["De quelle couleur est le diamant Hope ?","o","Bleu"],
["Où sont conservés les joyaux de la Couronne britannique ?","m",["Tour de Londres","Buckingham","Windsor","British Museum"],0],
["Quel diamant bleu célèbre est exposé au Smithsonian à Washington ?","o","Le Hope"],
["Quel immense diamant brut fut découvert en Afrique du Sud en 1905 ?","m",["Cullinan","Koh-i-Noor","Excelsior","Régent"],0],
["Quel diamant orne le sceptre royal britannique et pèse 530 carats ?","o","La Grande Étoile d'Afrique (Cullinan I)"],
["Quel diamant indien, aujourd'hui à la Couronne britannique, signifie Montagne de Lumière ?","m",["Koh-i-Noor","Darya-i-Noor","Orlov","Shah"],0],
["Quel diamant du Louvre appartint à la Régence de Philippe d'Orléans ?","o","Le Régent"],
["Quel diamant rose de 182 carats appartient au trésor iranien ?","m",["Darya-i-Noor","Nur-ul-Ain","Taj-e-Mah","Shah"],0],
["Quel diamant bleu de Louis XIV disparut lors du vol du Garde-Meuble en 1792 ?","o","Le Bleu de France"],
["Combien de pierres majeures furent taillées dans le Cullinan brut ?","m",["3","9","15","21"],1]
]},

{"t":"Les tueurs en série","e":"🔪","q":[
["Dans quelle ville britannique Jack l'Éventreur sévit-il en 1888 ?","o","Londres (Whitechapel)"],
["Quel médecin français fut surnommé le Docteur Satan ?","m",["Marcel Petiot","Landru","Fourniret","Guy Georges"],0],
["Quel séducteur français fut guillotiné en 1922 pour meurtres à Gambais ?","o","Henri Désiré Landru"],
["Quel Américain, connu comme le Killer Clown, fut exécuté en 1994 ?","m",["John Wayne Gacy","Ted Bundy","Jeffrey Dahmer","Ed Gein"],0],
["Quel tueur français, dit l'Ogre des Ardennes, fut condamné en 2008 ?","o","Michel Fourniret"],
["Quel tueur russe fut surnommé le Boucher de Rostov ?","m",["Andreï Tchikatilo","Alexander Pichushkin","Anatoly Onoprienko","Sergei Golovkin"],0],
["Quel tueur français fut surnommé le Tueur de l'Est parisien dans les années 1990 ?","o","Guy Georges"],
["Quel médecin britannique tua plus de 200 patients avant sa condamnation en 2000 ?","m",["Harold Shipman","John Bodkin Adams","Michael Swango","Colin Norris"],0],
["Quel tueur colombien avoua plus de 300 meurtres d'enfants dans les années 1980 ?","o","Pedro López"],
["Quel serial killer américain, séducteur, fut exécuté en Floride en 1989 ?","m",["Ted Bundy","John Wayne Gacy","Ed Kemper","Richard Ramirez"],0]
]},

{"t":"Les palais présidentiels","e":"🏛️","q":[
["Quel palais parisien est la résidence officielle du président français ?","o","L'Élysée"],
["Dans quelle ville se trouve la Maison-Blanche ?","m",["Washington","New York","Boston","Philadelphie"],0],
["Quel palais romain est la résidence officielle du président italien ?","o","Le Quirinal"],
["Quel palais moscovite abrite la présidence russe ?","m",["Le Kremlin","L'Ermitage","Peterhof","Tsaritsyno"],0],
["Dans quelle rue parisienne se situe l'entrée principale de l'Élysée ?","o","Rue du Faubourg-Saint-Honoré"],
["Sous quel président français l'Élysée devint-il officiellement la résidence en 1848 ?","m",["Louis-Napoléon Bonaparte","Adolphe Thiers","Mac Mahon","Jules Grévy"],0],
["Quel palais de Lisbonne est la résidence officielle du président portugais ?","o","Le palais de Belém"],
["Quel palais brésilien à Brasília fut conçu par Oscar Niemeyer pour le président ?","m",["Palácio da Alvorada","Palácio do Planalto","Palácio Itamaraty","Palácio Guanabara"],0],
["Quel palais présidentiel turc, inauguré en 2014 à Ankara, compte plus de 1000 pièces ?","o","Le Ak Saray"],
["Quel palais londonien est la résidence officielle du monarque britannique ?","o","Buckingham Palace"]
]},

{"t":"Les hôtels de légende","e":"🏨","q":[
["Dans quelle ville se trouve le célèbre Ritz ?","o","Paris"],
["Quel palace londonien donne son nom à un cocktail au champagne ?","m",["Le Savoy","Le Ritz","Le Claridge's","Le Dorchester"],0],
["Quel hôtel new-yorkais a hébergé John Lennon et Sid Vicious ?","o","Le Chelsea Hotel"],
["Dans quelle ville se dresse le Burj Al Arab en forme de voile ?","o","Dubaï"],
["Quel hôtel de Singapour a vu naître le cocktail Singapore Sling ?","m",["Le Raffles","Le Marina Bay Sands","Le Fullerton","Le Goodwood Park"],0],
["Quel palace parisien Coco Chanel a-t-elle habité plus de trente ans ?","o","Le Ritz"],
["Dans quel hôtel de Los Angeles Janis Joplin est-elle morte en 1970 ?","m",["Le Landmark","Le Chateau Marmont","Le Beverly Hills","Le Roosevelt"],0],
["Quel hôtel de La Havane Hemingway fréquentait-il pour écrire ?","o","L'Ambos Mundos"],
["Quel hôtel du Caire est associé à la conférence entre Churchill et Roosevelt en 1943 ?","m",["Le Mena House","Le Shepheard's","Le Semiramis","Le Marriott"],0],
["Dans quel hôtel de Zurich Thomas Mann séjourna-t-il en exil ?","o","L'hôtel Baur au Lac"]
]},

{"t":"Les évasions célèbres","e":"⛓️","q":[
["De quelle île Napoléon s'est-il évadé en 1815 ?","o","L'île d'Elbe"],
["Quelle prison parisienne fut prise d'assaut le 14 juillet 1789 ?","o","La Bastille"],
["Quel personnage de Dumas s'évade du château d'If ?","m",["D'Artagnan","Edmond Dantès","Athos","Chicot"],1],
["De quelle prison américaine trois détenus se sont-ils évadés en 1962 ?","o","Alcatraz"],
["Quel séducteur vénitien s'est évadé des Plombs de Venise en 1756 ?","o","Casanova"],
["Combien de prisonniers alliés s'échappèrent lors de la Grande Évasion de 1944 ?","m",["50","76","124","200"],1],
["Quel narcotrafiquant mexicain s'est évadé deux fois de prison, dont une par tunnel ?","o","El Chapo"],
["De quel château Henri Latude s'évada-t-il en 1756 ?","m",["La Bastille","Vincennes","Le Fort l'Évêque","La Conciergerie"],0],
["Quel général français s'évada de la forteresse de Königstein en 1942 ?","o","Henri Giraud"],
["Quel bagnard s'évada de Cayenne et raconta son périple dans Papillon ?","o","Henri Charrière"]
]},

{"t":"Les cambriolages célèbres","e":"💰","q":[
["Quelle œuvre de Vinci fut volée au Louvre en 1911 ?","o","La Joconde"],
["Quel cambrioleur gentleman est le héros des romans de Maurice Leblanc ?","o","Arsène Lupin"],
["Dans quelle région anglaise eut lieu le Grand Vol du Train en 1963 ?","m",["Buckinghamshire","Manchester","Bristol","Liverpool"],0],
["Quel musée de Boston fut cambriolé en 1990 pour 500 millions de dollars ?","o","Le musée Isabella Stewart Gardner"],
["Combien de coffres furent pillés lors du casse de la Société générale de Nice en 1976 ?","m",["371","150","500","800"],0],
["Qui dirigea le fameux casse de Nice en creusant un tunnel depuis les égouts ?","o","Albert Spaggiari"],
["Quel type de bijoux fut dérobé lors du casse du musée Grüne Gewölbe de Dresde en 2019 ?","m",["Des diamants","Des saphirs","Des émeraudes","Des perles"],0],
["Quel tableau de Munch fut volé à Oslo en 1994 pendant les JO ?","o","Le Cri"],
["Dans quelle capitale libanaise une banque fut cambriolée par tunnel en 1976 ?","m",["Beyrouth","Damas","Amman","Riyad"],0],
["Quel voleur français, dit l'homme-araignée, a dérobé Picasso et Modigliani au musée d'Art moderne de Paris ?","o","Vjeran Tomic"]
]},

{"t":"Les trésors perdus","e":"💰","q":[
["Quel métal jaune symbolise traditionnellement les trésors de pirates ?","o","L'or"],
["Quelle cité mythique d'or les conquistadors cherchèrent-ils en Amérique du Sud ?","o","L'Eldorado"],
["Quel galion espagnol chargé d'or coula près de Carthagène en 1708 ?","m",["Le San José","L'Atocha","Le San Salvador","La Trinidad"],0],
["Quel roi wisigoth aurait emporté le trésor de Salomon ?","o","Alaric"],
["Dans quel pays cherche-t-on encore l'Or de Yamashita, caché par les Japonais ?","o","Aux Philippines"],
["Que serait immergé au fond du lac autrichien Toplitz selon la légende nazie ?","m",["De l'or","Des faux billets","Des tableaux","Des documents"],1],
["Quelle chambre d'ambre disparut du palais de Tsarskoïe Selo en 1945 ?","o","La Chambre d'ambre"],
["Sur quelle île canadienne creuse-t-on le Puits d'argent depuis 1795 ?","m",["Oak Island","Sable Island","Anticosti","Cape Breton"],0],
["Quel trésor cathare aurait été mis à l'abri avant la chute de Montségur en 1244 ?","o","Le trésor cathare"],
["Quel jeu-énigme de 1993 a caché la Chouette d'or en France ?","o","La Chouette d'or (Max Valentin, Régis Hauser)"]
]},

{"t":"Les explorateurs disparus","e":"🧭","q":[
["Quelle aviatrice américaine disparut au-dessus du Pacifique en 1937 ?","o","Amelia Earhart"],
["Quel écrivain-pilote français disparut en Méditerranée en 1944 ?","o","Antoine de Saint-Exupéry"],
["Quel navigateur anglais disparut en cherchant le passage du Nord-Ouest en 1845 ?","m",["Cook","Franklin","Ross","Parry"],1],
["Quel journaliste retrouva Livingstone en Afrique en 1871 ?","o","Stanley"],
["Quel explorateur norvégien disparut en avion en secourant Nobile en 1928 ?","o","Amundsen"],
["Quel colonel britannique disparut en Amazonie en 1925 en cherchant la cité Z ?","m",["Percy Fawcett","Richard Burton","Henry Bates","John Hanning Speke"],0],
["Quel Français disparut lors de son expédition dans le Pacifique après Botany Bay en 1788 ?","o","La Pérouse"],
["Quelle expédition allemande périt sur le Nanga Parbat en 1934 sous Willy Merkl ?","o","L'expédition allemande au Nanga Parbat"],
["Quel alpiniste britannique disparut sur l'Everest en 1924 avec Andrew Irvine ?","o","George Mallory"],
["Quel navigateur portugais disparut lors de son tour du monde et son navire rentra sans lui ?","o","Fernand de Magellan"]
]},

{"t":"Les cryptides","e":"🦕","q":[
["Quel monstre lacustre légendaire hante un loch écossais ?","o","Le monstre du Loch Ness"],
["Quel homme-singe velu arpenterait les forêts du nord-ouest américain ?","o","Bigfoot"],
["Quel équivalent himalayen du Yéti est aussi appelé abominable homme des neiges ?","o","Le Yéti"],
["Dans quel pays africain traquerait-on le Mokélé-Mbembé, sorte de sauropode ?","m",["Le Congo","Le Kenya","Le Mali","Le Sénégal"],0],
["Quel cryptide ailé aux yeux rouges terrifia la Virginie-Occidentale en 1966 ?","o","Le Mothman"],
["Quel vampire cornu vide le bétail de son sang en Amérique latine ?","m",["Le Chupacabra","Le Nahual","L'Alicanto","Le Cadejo"],0],
["Quel serpent de mer canadien vivrait dans le lac Okanagan ?","o","Ogopogo"],
["Quel cryptide australien évoque un mélange de castor et de dragon dans les billabongs ?","m",["Le Bunyip","Le Yowie","Le Drop bear","Le Min Min"],0],
["Quel cryptide congolais serait un rhinocéros survivant dinosaurien à corne unique ?","o","L'Emela-ntouka"],
["Quel oiseau géant amérindien serait à l'origine du mythe du Thunderbird ?","o","Le Teratornis"]
]},

{"t":"Les superstitions","e":"🐈","q":[
["Quel animal noir croisant votre chemin porterait malheur en France ?","o","Le chat"],
["Combien d'années de malheur promet un miroir brisé ?","o","Sept"],
["Quel geste conjure le sort après avoir renversé du sel ?","m",["En jeter par-dessus l'épaule","Cracher dessus","Le brûler","L'enterrer"],0],
["Quel numéro d'étage est souvent évité dans les hôtels américains ?","o","Le 13"],
["Que redoute-t-on d'ouvrir à l'intérieur d'une maison en France ?","o","Un parapluie"],
["Quel chiffre porte malheur en Asie de l'Est car il sonne comme mort ?","m",["Le 4","Le 6","Le 9","Le 14"],0],
["Quelle plante placée au-dessus d'une porte inviterait à s'embrasser à Noël ?","o","Le gui"],
["Comment nomme-t-on la peur superstitieuse du vendredi 13 ?","m",["Paraskevidékatriaphobie","Triskaidékaphobie","Friggatriskaidékaphobie","Décatriaphobie"],0],
["Pourquoi les marins bretons refusaient-ils de prononcer le mot lapin à bord ?","o","Il rongeait les cordages"],
["Selon la tradition anglaise, quel oiseau vu seul annonce le malheur ?","o","La pie"]
]},

{"t":"Les records du monde étranges","e":"🏆","q":[
["Quel livre annuel recense les records du monde depuis 1955 ?","o","Le Guinness des records"],
["Quel légume géant fait l'objet de concours de poids records ?","m",["La citrouille","La courgette","Le navet","La betterave"],0],
["Combien de minutes le record d'apnée statique masculin dépasse-t-il aujourd'hui ?","m",["11 minutes","20 minutes","24 minutes","30 minutes"],2],
["Quel Américain détient le record du plus grand nombre de hot-dogs avalés en 10 minutes ?","o","Joey Chestnut"],
["Quel Américain a détenu le record du plus grand nombre de records Guinness ?","m",["Ashrita Furman","David Rush","Suresh Joachim","Cherry Yoshitake"],0],
["Quelle est la personne la plus âgée jamais documentée au monde ?","m",["Environ 110 ans","Environ 115 ans","Environ 122 ans","Environ 130 ans"],2],
["Quel Indien a laissé pousser ses ongles pendant plus de 66 ans ?","m",["Shridhar Chillal","Melvin Boothe","Lee Redmond","Ram Singh Chauhan"],0],
["Combien mesure la plus longue moustache jamais mesurée, détenue par Ram Singh Chauhan ?","m",["4,29 m","2,50 m","3,10 m","5,60 m"],0],
["Quel Turc détient le record de l'homme vivant le plus grand, à 2,51 mètres ?","o","Sultan Kösen"],
["Combien de temps a duré le hoquet de Charles Osborne, record mondial ?","o","68 ans"]
]},

{"t":"Les inventions ratées","e":"🔧","q":[
["Quel format vidéo de Sony a perdu la guerre face au VHS ?","o","Le Betamax"],
["Quelle voiture Ford lancée en 1957 devint un fiasco commercial retentissant ?","m",["L'Edsel","La Pinto","La Falcon","La Fairlane"],0],
["Quel nouveau Coca lancé en 1985 fut retiré après tollé ?","o","New Coke"],
["Quel dirigeable allemand explosa à Lakehurst en 1937 ?","o","Le Hindenburg"],
["Quel avion supersonique commercial fut retiré après le crash de Gonesse en 2000 ?","o","Le Concorde"],
["Quel véhicule Tesla dévoilé en 2019 fut moqué pour ses vitres brisées lors de la démo ?","o","Le Cybertruck"],
["Quel véhicule à deux roues autoéquilibré de Dean Kamen n'a jamais révolutionné les transports ?","m",["Le Segway","Le Solowheel","L'Airwheel","Le Ninebot"],0],
["Quel assistant de Microsoft, un trombone animé, fut abandonné en 2001 ?","o","Clippy"],
["Quel sous-marin confédéré coula après son unique attaque en 1864 ?","m",["Le Hunley","Le Nautilus","Le Turtle","Le Plongeur"],0],
["Quel smartphone Samsung fut rappelé en 2016 pour risque d'explosion ?","o","Le Galaxy Note 7"]
]},

{"t":"Les phares","e":"🗼","q":[
["Quelle merveille antique d'Alexandrie était un phare monumental ?","o","Le phare d'Alexandrie"],
["De quelle couleur sont peints la plupart des phares français côté terre ?","m",["Blanc","Rouge","Noir","Jaune"],0],
["Quel phare breton, en pleine mer d'Iroise, est surnommé l'Enfer des enfers ?","o","La Jument"],
["Sur quelle île égéenne se dressait le phare antique construit sous Ptolémée II ?","o","Pharos"],
["Quel phare américain de Boston, allumé en 1716, est le plus ancien des États-Unis ?","m",["Boston Light","Sandy Hook","Cape Henry","Portland Head"],0],
["Quel photographe rendit célèbre le phare de La Jument par un cliché de 1989 ?","o","Jean Guichard"],
["Quel phare breton, à la pointe du Raz, veille sur le raz de Sein ?","m",["La Vieille","Ar-Men","Kéréon","Le Créac'h"],0],
["Quel phare finistérien sur l'île d'Ouessant est l'un des plus puissants d'Europe ?","o","Le Créac'h"],
["Quel ingénieur écossais bâtit le célèbre phare de Bell Rock en 1810 ?","m",["Robert Stevenson","John Smeaton","Thomas Telford","James Douglass"],0],
["Quelle disparition mystérieuse en 1900 frappa les trois gardiens du phare d'Eilean Mòr ?","o","Les gardiens de Flannan"]
]},

/* ═══════════ DIVERS ═══════════ */

{"t":"Les aurores boréales","e":"🌌","q":[
["De quelle couleur est le plus souvent une aurore boréale ?","m",["Verte","Bleue","Rouge","Jaune"],0],
["Dans quel hémisphère observe-t-on les aurores boréales ?","m",["Nord","Sud","Est","Ouest"],0],
["Comment appelle-t-on l'équivalent austral des aurores boréales ?","o","Les aurores australes"],
["Quel astre est à l'origine des aurores boréales ?","m",["Le Soleil","La Lune","Jupiter","Mars"],0],
["Quel pays scandinave est réputé pour observer les aurores ?","m",["Norvège","Portugal","Grèce","Espagne"],0],
["Quelles particules solaires provoquent les aurores boréales ?","o","Le vent solaire (particules chargées)"],
["Avec quoi ces particules interagissent-elles pour créer l'aurore ?","m",["Le champ magnétique terrestre","La couche d'ozone","Les nuages","La stratosphère"],0],
["Quel gaz atmosphérique produit la couleur verte de l'aurore ?","m",["L'oxygène","L'azote","L'hélium","Le méthane"],0],
["À quelle altitude approximative se forment les aurores boréales ?","m",["100 à 300 km","10 km","1 000 km","5 km"],0],
["Quel nom scientifique désigne l'aurore boréale en latin ?","o","Aurora borealis"]
]},

{"t":"Les tatouages","e":"🖊️","q":[
["Avec quel instrument principal réalise-t-on un tatouage moderne ?","m",["Une aiguille","Un pinceau","Un stylo","Un feutre"],0],
["Dans quelle couche de la peau est déposée l'encre du tatouage ?","m",["Le derme","L'épiderme","L'hypoderme","Le muscle"],0],
["Comment appelle-t-on un tatouage temporaire fait à base de plante ?","o","Un tatouage au henné"],
["Quel peuple polynésien a donné son nom au mot tatouage ?","m",["Les Tahitiens","Les Aztèques","Les Vikings","Les Zoulous"],0],
["Quelle technique permet d'effacer un tatouage aujourd'hui ?","m",["Le laser","La cire","Le savon","Le froid"],0],
["De quelle langue polynésienne vient le mot tatouage, dérivé de tatau ?","o","Le tahitien (ou samoan)"],
["Quel explorateur a rapporté le mot tatouage en Europe au XVIIIe siècle ?","m",["James Cook","Christophe Colomb","Marco Polo","Magellan"],0],
["Comment nomme-t-on le style japonais de tatouage traditionnel ?","o","Irezumi"],
["Quelle célèbre momie des Alpes portait des tatouages datant du néolithique ?","m",["Ötzi","Toutânkhamon","Ramsès II","La dame de Brassempouy"],0],
["Quel style de tatouage utilise uniquement des points minuscules ?","o","Le dotwork"]
]},

{"t":"Les monnaies","e":"💶","q":[
["Quelle est la monnaie officielle de la France ?","m",["L'euro","Le franc","La livre","Le dollar"],0],
["Quelle monnaie utilise-t-on aux États-Unis ?","m",["Le dollar","L'euro","Le peso","Le yen"],0],
["Quelle est la monnaie du Japon ?","o","Le yen"],
["Quelle monnaie utilise-t-on au Royaume-Uni ?","m",["La livre sterling","L'euro","La couronne","Le franc"],0],
["En quelle année l'euro est-il devenu la monnaie fiduciaire française ?","m",["2002","1999","2000","2005"],0],
["Quelle est la monnaie officielle de la Suisse ?","o","Le franc suisse"],
["Quelle monnaie utilise-t-on en Inde ?","m",["La roupie","Le dinar","Le rial","Le baht"],0],
["Comment appelle-t-on la monnaie officielle de la Chine ?","o","Le yuan (renminbi)"],
["Quelle monnaie africaine est utilisée par plusieurs pays d'Afrique de l'Ouest ?","m",["Le franc CFA","Le rand","Le naira","Le shilling"],0],
["Quelle est la monnaie officielle du Vietnam ?","o","Le dong"]
]},

{"t":"Les langues du monde","e":"🗣️","q":[
["Quelle langue parle-t-on majoritairement en Espagne ?","m",["L'espagnol","Le portugais","L'italien","Le français"],0],
["Quelle langue est la plus parlée comme langue maternelle au monde ?","m",["Le mandarin","L'anglais","L'espagnol","Le français"],0],
["Quelle langue officielle parle-t-on au Brésil ?","o","Le portugais"],
["Combien de langues officielles la Suisse compte-t-elle ?","m",["Quatre","Deux","Trois","Cinq"],0],
["Quelle langue parle-t-on principalement en Égypte ?","m",["L'arabe","Le turc","Le persan","L'hébreu"],0],
["Quelle langue construite fut inventée par Ludwik Zamenhof en 1887 ?","o","L'espéranto"],
["Quelle famille linguistique regroupe le français, l'italien et l'espagnol ?","m",["Les langues romanes","Les langues slaves","Les langues germaniques","Les langues celtiques"],0],
["Combien de langues sont recensées environ dans le monde aujourd'hui ?","m",["Environ 7 000","Environ 1 000","Environ 20 000","Environ 500"],0],
["Quel pays du Pacifique compte le plus grand nombre de langues au monde ?","o","La Papouasie-Nouvelle-Guinée"],
["Quelle langue caucasienne est réputée pour sa grammaire complexe et son alphabet unique ?","o","Le géorgien"]
]},

{"t":"Les drapeaux","e":"🚩","q":[
["Combien de couleurs comporte le drapeau français ?","m",["Trois","Deux","Quatre","Cinq"],0],
["Quel symbole figure au centre du drapeau canadien ?","m",["Une feuille d'érable","Un ours","Un castor","Une étoile"],0],
["Quel drapeau européen est entièrement rouge avec une croix blanche ?","o","Le drapeau suisse"],
["Combien d'étoiles compte le drapeau des États-Unis ?","m",["50","48","51","52"],0],
["Quel drapeau est vert avec en son centre une roue bleue à 24 rayons ?","m",["L'Inde","Le Brésil","Le Pakistan","L'Iran"],0],
["Quel pays possède le seul drapeau national non rectangulaire ?","o","Le Népal"],
["Quel drapeau nordique arbore une croix jaune sur fond bleu ?","m",["La Suède","La Norvège","La Finlande","Le Danemark"],0],
["Quel oiseau figure sur le drapeau mexicain ?","m",["Un aigle","Un condor","Un colibri","Un perroquet"],0],
["Quel pays africain a un drapeau vert orné d'un pentacle rouge ?","o","Le Maroc"],
["Quel est le seul drapeau national à comporter deux faces différentes ?","o","Le Paraguay"]
]},

{"t":"Les hymnes nationaux","e":"🎵","q":[
["Comment s'appelle l'hymne national français ?","m",["La Marseillaise","Le Chant du Départ","La Carmagnole","L'Internationale"],0],
["Dans quelle ville l'hymne français a-t-il été composé ?","m",["Strasbourg","Paris","Marseille","Lyon"],0],
["Qui est l'auteur de La Marseillaise ?","o","Rouget de Lisle"],
["Comment s'appelle l'hymne des États-Unis ?","m",["The Star-Spangled Banner","God Bless America","America the Beautiful","Yankee Doodle"],0],
["Quel hymne européen est aussi l'hymne officiel de l'Union européenne ?","m",["L'Ode à la joie","La Marseillaise","God Save the King","Deutschlandlied"],0],
["En quelle année La Marseillaise fut-elle composée ?","o","1792"],
["Quel compositeur allemand a signé la musique de l'hymne européen ?","m",["Beethoven","Bach","Mozart","Wagner"],0],
["Quel est le titre officiel de l'hymne national allemand actuel ?","o","Das Lied der Deutschen"],
["Quel hymne national est réputé être le plus ancien encore en usage ?","m",["Le Wilhelmus (Pays-Bas)","La Marseillaise","God Save the King","Kimigayo"],0],
["Quel hymne national compte officiellement le plus grand nombre de couplets ?","o","L'hymne grec (158 strophes)"]
]},

{"t":"La poésie française","e":"🖋️","q":[
["Qui a écrit le recueil Les Fleurs du mal ?","m",["Charles Baudelaire","Victor Hugo","Arthur Rimbaud","Paul Verlaine"],0],
["Combien de vers compte un sonnet classique ?","m",["Quatorze","Douze","Seize","Dix"],0],
["Quel poète adolescent a écrit Le Bateau ivre ?","o","Arthur Rimbaud"],
["Quel vers de douze syllabes est le plus classique en poésie française ?","m",["L'alexandrin","L'octosyllabe","Le décasyllabe","L'hexasyllabe"],0],
["Qui a écrit le poème Demain, dès l'aube ?","m",["Victor Hugo","Alfred de Musset","Lamartine","Vigny"],0],
["Quel poète a écrit Chanson d'automne, dont les vers servirent de signal au Débarquement ?","o","Paul Verlaine"],
["Quel recueil de Guillaume Apollinaire, publié en 1913, contient Le Pont Mirabeau ?","o","Alcools"],
["Qui a écrit le recueil Poèmes saturniens en 1866 ?","m",["Paul Verlaine","Charles Baudelaire","Stéphane Mallarmé","Théophile Gautier"],0],
["Quel poème de Mallarmé publié en 1897 révolutionne la mise en page poétique ?","o","Un coup de dés jamais n'abolira le hasard"],
["Comment s'appelle la figure de style consistant à répéter une consonne ?","o","Une allitération"]
]},

{"t":"Les fables de La Fontaine","e":"🦊","q":[
["Quels deux animaux s'affrontent dans une célèbre course de La Fontaine ?","m",["Le lièvre et la tortue","Le loup et l'agneau","Le renard et la cigogne","Le rat et la grenouille"],0],
["Quel oiseau se fait voler son fromage par un renard ?","m",["Le corbeau","Le pigeon","La corneille","La pie"],0],
["Quel insecte chante tout l'été dans une célèbre fable ?","o","La cigale"],
["Dans La Cigale et la Fourmi, qui refuse de partager ses provisions ?","m",["La fourmi","La cigale","Le grillon","L'abeille"],0],
["Au XVIIe siècle, à qui La Fontaine dédia-t-il son premier recueil de fables ?","m",["Au Dauphin","À Louis XIV","À Colbert","À Fouquet"],0],
["En quelle année parut le premier recueil des Fables de La Fontaine ?","o","1668"],
["De quel auteur grec antique La Fontaine s'est-il beaucoup inspiré ?","m",["Ésope","Homère","Sophocle","Hésiode"],0],
["Combien de livres au total composent les Fables de La Fontaine ?","o","Douze"],
["Dans quelle fable un rat vient-il en aide à un lion pris au piège ?","o","Le Lion et le Rat"],
["Quel personnage rencontre la Mort dans une fable où il l'appelle par mégarde ?","o","Le Bûcheron"]
]},

{"t":"Molière","e":"🎭","q":[
["Quel est le véritable nom de Molière ?","m",["Jean-Baptiste Poquelin","Jean Racine","Pierre Corneille","Jean de La Fontaine"],0],
["Molière était-il dramaturge, peintre ou musicien ?","m",["Dramaturge","Peintre","Musicien","Sculpteur"],0],
["Dans quelle pièce Molière met-il en scène Harpagon, un avare ?","o","L'Avare"],
["Quel roi fut le protecteur de Molière ?","m",["Louis XIV","Louis XIII","Henri IV","Louis XV"],0],
["Quel personnage hypocrite donne son titre à une célèbre pièce de 1664 ?","m",["Tartuffe","Dom Juan","Alceste","Sganarelle"],0],
["Sur scène de quelle pièce Molière s'effondra-t-il avant de mourir ?","o","Le Malade imaginaire"],
["En quelle année Molière est-il mort ?","o","1673"],
["Comment s'appelait la troupe fondée par Molière en 1643 ?","m",["L'Illustre-Théâtre","La Comédie-Française","Les Comédiens du Roi","Le Théâtre du Marais"],0],
["Quelle pièce de Molière, créée en 1666, met en scène Alceste le misanthrope ?","o","Le Misanthrope"],
["Quelle comédie-ballet Molière écrivit-il avec Lully en 1670 ?","o","Le Bourgeois gentilhomme"]
]},

{"t":"Victor Hugo","e":"📜","q":[
["Quel roman de Victor Hugo met en scène Quasimodo ?","m",["Notre-Dame de Paris","Les Misérables","Ruy Blas","Hernani"],0],
["Quel célèbre roman de Hugo raconte l'histoire de Jean Valjean ?","o","Les Misérables"],
["De quel siècle Victor Hugo est-il l'écrivain emblématique ?","m",["Le XIXe siècle","Le XVIIIe siècle","Le XVIIe siècle","Le XXe siècle"],0],
["En quelle année est né Victor Hugo ?","m",["1802","1810","1795","1820"],0],
["Sur quelle île anglo-normande Hugo vécut-il en exil ?","o","Guernesey"],
["Quel empereur Hugo combattit-il farouchement depuis l'exil ?","m",["Napoléon III","Napoléon Ier","Louis-Philippe","Charles X"],0],
["En quelle année parurent Les Misérables ?","o","1862"],
["Quel drame romantique de Hugo provoqua une célèbre bataille en 1830 ?","o","Hernani"],
["Quel recueil poétique Hugo publia-t-il en 1856 depuis l'exil ?","m",["Les Contemplations","Les Châtiments","La Légende des siècles","Les Orientales"],0],
["Comment s'appelait la fille de Hugo, noyée à Villequier en 1843 ?","o","Léopoldine"]
]},

/* ═══════════ BATCH BONUS — CULTURE POP & GOURMANDE ═══════════ */

{"t":"Le café","e":"☕","q":[
["Quelle molécule du café tient éveillé ?","m",["Nicotine","Caféine","Théine","Taurine"],1],
["Quel pays est le 1er producteur mondial de café ?","m",["Colombie","Vietnam","Éthiopie","Brésil"],3],
["Comment appelle-t-on un espresso très court ?","m",["Lungo","Ristretto","Doppio","Macchiato"],1],
["Quelle boisson italienne mélange espresso et lait moussé ?","m",["Americano","Latte","Cappuccino","Mocha"],2],
["Dans quel pays d'Afrique de l'Est le café serait-il originaire ?","o","Éthiopie"],
["Quelles sont les deux grandes variétés de café cultivées dans le monde ?","o","Arabica et Robusta"],
["Quelle légende raconte la découverte du café grâce à un berger et ses chèvres ?","o","La légende de Kaldi"],
["Quel café indonésien très cher est fait à partir de baies digérées par une civette ?","o","Le Kopi Luwak"],
["Quel procédé d'infusion à froid, de 12 à 24h, est très à la mode ?","o","Le cold brew"],
["Quel chimiste allemand a inventé la décaféination commerciale en 1906 ?","o","Ludwig Roselius"]
]},

{"t":"Les cocktails","e":"🍸","q":[
["Quel cocktail cubain contient rhum, menthe et citron vert ?","m",["Cuba libre","Mojito","Daiquiri","Piña colada"],1],
["Quel alcool est la base d'un Margarita ?","m",["Rhum","Vodka","Tequila","Gin"],2],
["Quel cocktail italien mélange Aperol, prosecco et eau gazeuse ?","m",["Bellini","Spritz","Negroni","Americano"],1],
["Comment James Bond commande-t-il son Martini ?","m",["À la cuillère","Au shaker, pas à la cuillère","Sur glace","Sec sans olive"],1],
["Quel cocktail classique associe whisky, sucre, bitter et zeste d'orange ?","m",["Manhattan","Sazerac","Old Fashioned","Whisky sour"],2],
["Quel cocktail italien mélange gin, Campari et vermouth rouge à parts égales ?","o","Le Negroni"],
["Quel cocktail brésilien à base de cachaça ressemble au mojito ?","o","La Caïpirinha"],
["Quel barman américain a publié le premier livre de cocktails en 1862 ?","o","Jerry Thomas"],
["Quelle ville américaine revendique la naissance du Sazerac vers 1838 ?","o","La Nouvelle-Orléans"],
["Quel bitter aromatique du Venezuela est indispensable au Pisco Sour et à l'Old Fashioned ?","o","L'Angostura"]
]},

{"t":"La pizza","e":"🍕","q":[
["De quel pays est originaire la pizza ?","m",["France","Grèce","Italie","États-Unis"],2],
["Quel fromage est indispensable à une Margherita ?","m",["Gruyère","Mozzarella","Parmesan","Cheddar"],1],
["Quelle ville italienne est le berceau de la pizza moderne ?","m",["Rome","Milan","Naples","Florence"],2],
["Quelle pizza porte le nom d'une reine d'Italie ?","m",["Napolitaine","Margherita","Regina","Capricciosa"],1],
["Quel type de four donne le meilleur résultat pour une napolitaine ?","m",["Électrique","Gaz","Bois","Micro-ondes"],2],
["À quelle température (approx) cuit un four à bois pour une napolitaine ?","m",["200 °C","300 °C","400 °C","480 °C"],3],
["Comment s'appelle la pizza américaine de Chicago cuite dans un moule profond ?","o","La deep-dish"],
["Quel pizzaïolo napolitain aurait créé la Margherita pour la reine en 1889 ?","o","Raffaele Esposito"],
["Quelle association défend la vraie pizza napolitaine avec un cahier des charges strict ?","o","L'AVPN"],
["Quel label européen protège la Pizza Napoletana depuis 2010 ?","o","La STG"]
]},

{"t":"Le sushi","e":"🍣","q":[
["Quel est l'ingrédient de base d'un sushi ?","m",["Poisson cru","Riz vinaigré","Nouilles","Tofu"],1],
["Quelle algue enveloppe un maki ?","m",["Wakame","Kombu","Nori","Hijiki"],2],
["Quel condiment vert et piquant accompagne les sushis ?","m",["Moutarde","Wasabi","Gingembre","Piment"],1],
["Quel poisson gras est très prisé pour les sushis haut de gamme ?","m",["Cabillaud","Thon rouge","Sole","Merlan"],1],
["Comment appelle-t-on du poisson cru servi sans riz ?","o","Le sashimi"],
["Comment appelle-t-on la partie la plus grasse du thon rouge, très recherchée ?","o","L'otoro"],
["Quel poisson japonais mortel s'il est mal préparé nécessite un permis pour être servi ?","o","Le fugu"],
["Quel chef tokyoïte est au cœur du documentaire Jiro Dreams of Sushi (2011) ?","o","Jiro Ono"],
["Quel marché aux poissons de Tokyo a déménagé à Toyosu en 2018 ?","o","Le marché de Tsukiji"],
["Comment appelle-t-on le vinaigre de riz assaisonné qui parfume le riz à sushi ?","o","Le sushi-zu"]
]},

{"t":"La bière","e":"🍺","q":[
["Quels sont les quatre ingrédients de base d'une bière ?","m",["Eau, malt, houblon, levure","Raisin, sucre, eau, levure","Blé, miel, eau, épices","Orge, sucre, eau, colorant"],0],
["Quel pays est célèbre pour l'Oktoberfest ?","m",["Belgique","Autriche","Allemagne","Pays-Bas"],2],
["De quelle couleur/aspect est une bière blanche ?","m",["Transparente","Trouble et pâle","Rouge","Noire"],1],
["Quel pays produit le plus de bière au monde ?","m",["Allemagne","États-Unis","Chine","Belgique"],2],
["Quelle bière belge trappiste est régulièrement élue meilleure au monde ?","m",["Chimay","Westvleteren","Orval","Rochefort"],1],
["Quelle loi allemande de 1516 encadre la composition de la bière ?","o","Le Reinheitsgebot"],
["Quel style de bière belge est brassé par fermentation spontanée à l'air libre ?","o","Le lambic"],
["Que signifie l'acronyme IPA ?","o","India Pale Ale"],
["Quelle levure sert aux bières de fermentation haute (ales) ?","o","Saccharomyces cerevisiae"],
["Combien de brasseries portent le label Trappiste Authentique dans le monde (approx) ?","o","Une douzaine"]
]},

{"t":"James Bond","e":"🕶️","q":[
["Quel est le numéro d'agent de James Bond ?","m",["001","007","008","009"],1],
["Comment Bond commande-t-il son Martini ?","m",["Remué","Au shaker, pas à la cuillère","Sec sans glace","Chaud"],1],
["Quel constructeur automobile est indissociable de Bond ?","m",["Ferrari","Aston Martin","Jaguar","Bentley"],1],
["Comment s'appelle la secrétaire de M au MI6 ?","m",["Q","Vesper","Moneypenny","Solitaire"],2],
["Quel écrivain britannique a créé James Bond ?","o","Ian Fleming"],
["Quel acteur écossais fut le premier Bond au cinéma ?","o","Sean Connery"],
["Quel acteur incarne Bond dans Casino Royale (2006) ?","o","Daniel Craig"],
["Quel film de 1995 marque le retour de Bond avec Pierce Brosnan ?","o","GoldenEye"],
["Comment s'appelle l'organisation criminelle récurrente que Bond combat ?","o","SPECTRE"],
["Quel est le titre du dernier film avec Daniel Craig, sorti en 2021 ?","o","Mourir peut attendre"]
]},

{"t":"Pixar","e":"🎥","q":[
["Quel film Pixar raconte des jouets qui prennent vie ?","m",["Cars","Toy Story","Monstres & Cie","Le Monde de Nemo"],1],
["Comment s'appelle le poisson-clown père de Nemo ?","m",["Marin","Marlin","Nick","Bob"],1],
["Quel est le prénom du rat cuisinier de Ratatouille ?","m",["Louis","Remy","Emile","Django"],1],
["Quel film Pixar suit un vieux monsieur qui accroche des ballons à sa maison ?","m",["Wall-E","Là-haut","Vice-Versa","Ratatouille"],1],
["Quelle major du cinéma a racheté Pixar en 2006 ?","o","Disney"],
["Quel cofondateur de Pixar a longtemps dirigé Apple ?","o","Steve Jobs"],
["Quel a été le premier long-métrage entièrement en images de synthèse, en 1995 ?","o","Toy Story"],
["Quel film Pixar de 2015 se passe dans la tête d'une petite fille ?","o","Vice-Versa"],
["Quel réalisateur emblématique de Pixar a signé Le Monde de Nemo et Wall-E ?","o","Andrew Stanton"],
["Quel court-métrage de 1986 mettant en scène une lampe sert de logo au studio ?","o","Luxo Jr."]
]},

{"t":"Pokémon","e":"⚡","q":[
["Combien de Pokémon comptait la première génération ?","m",["100","130","151","200"],2],
["Quel Pokémon jaune est la mascotte de la licence ?","m",["Salamèche","Bulbizarre","Pikachu","Carapuce"],2],
["Dans quel pays Pokémon a-t-il été créé ?","m",["Corée","Chine","Japon","États-Unis"],2],
["Salamèche évolue en Reptincel puis en quel Pokémon final ?","m",["Dracaufeu","Tortank","Florizarre","Léviator"],0],
["Comment s'appelle le jeu mobile en réalité augmentée sorti en 2016 ?","o","Pokémon GO"],
["Quel créateur japonais a inventé Pokémon ?","o","Satoshi Tajiri"],
["Quel Pokémon rose mythique de la gen 1 peut prendre l'apparence de n'importe quel autre ?","o","Mew"],
["Combien de types différents de Pokémon existe-t-il aujourd'hui ?","o","18"],
["Quel Pokémon issu du clonage de Mew apparaît dans le premier film ?","o","Mewtwo"],
["Quel studio japonais développe les jeux principaux depuis 1996 ?","o","Game Freak"]
]},

{"t":"Les Simpsons","e":"🍩","q":[
["Quel personnage adore les donuts et la bière Duff ?","m",["Bart","Homer","Marge","Lisa"],1],
["De quelle couleur est la peau des Simpson ?","m",["Verte","Jaune","Orange","Bleue"],1],
["Comment s'appelle le bar où Homer boit ses bières ?","m",["Le Duff","Chez Moe","Krusty Bar","Chez Flanders"],1],
["Dans quelle ville fictive vit la famille Simpson ?","m",["Shelbyville","Springfield","Sacramento","San Diego"],1],
["Combien d'enfants ont Homer et Marge ?","o","3"],
["Comment s'appelle leur voisin ultra-religieux ?","o","Ned Flanders"],
["Qui a créé la série en 1989 ?","o","Matt Groening"],
["Quel milliardaire radin dirige la centrale nucléaire ?","o","Monsieur Burns"],
["Combien de saisons la série avait-elle dépassées en 2024 ?","o","Plus de 35"],
["En quelle année est sorti le film Les Simpson au cinéma ?","o","2007"]
]},

{"t":"Le studio Ghibli","e":"🌸","q":[
["De quel pays vient le studio Ghibli ?","m",["Chine","Corée","Japon","Taïwan"],2],
["Quel film Ghibli met en scène un gros esprit gris tout doux de la forêt ?","m",["Ponyo","Chihiro","Totoro","Kiki"],2],
["Quel réalisateur emblématique a cofondé le studio ?","m",["Ozu","Miyazaki","Kurosawa","Kore-eda"],1],
["Quel film Ghibli suit une fillette dans un monde de bains pour esprits ?","m",["Mononoké","Ponyo","Le Voyage de Chihiro","Nausicaä"],2],
["Quel autre cofondateur du studio a réalisé Le Tombeau des lucioles ?","o","Isao Takahata"],
["Quel film Ghibli a remporté l'Oscar du meilleur film d'animation en 2003 ?","o","Le Voyage de Chihiro"],
["Comment s'appelle le poisson rouge qui devient une petite fille dans un film de Miyazaki ?","o","Ponyo"],
["Quel film met en scène un magicien nommé Hauru et une jeune fille transformée en vieille dame ?","o","Le Château ambulant"],
["Quel compositeur signe la quasi-totalité des BO du studio ?","o","Joe Hisaishi"],
["Quel film Ghibli de 2023 a valu à Miyazaki son second Oscar ?","o","Le Garçon et le Héron"]
]},

{"t":"Léonard de Vinci","e":"🖼️","q":[
["De quel pays vient Léonard de Vinci ?","m",["France","Italie","Espagne","Grèce"],1],
["Quel tableau représente une femme au sourire mystérieux ?","m",["La Joconde","La Vénus","La Cène","La Vierge"],0],
["Dans quel musée est exposée La Joconde ?","m",["British Museum","Louvre","Prado","Uffizi"],1],
["Quelle fresque murale représente le dernier repas du Christ ?","m",["La Vénus","La Cène","L'Annonciation","La Vierge aux rochers"],1],
["Dans quel village toscan Léonard est-il né en 1452 ?","o","Vinci"],
["Quel roi de France l'a accueilli à Amboise à la fin de sa vie ?","o","François Ier"],
["Dans quelle demeure d'Amboise Léonard est-il mort en 1519 ?","o","Le Clos Lucé"],
["Quel dessin de proportions humaines inscrit dans un cercle et un carré est célébrissime ?","o","L'Homme de Vitruve"],
["Combien de tableaux authentifiés de Léonard existe-t-il environ ?","o","Une vingtaine"],
["Quel tableau attribué à Léonard a été vendu 450 M$ en 2017 ?","o","Salvator Mundi"]
]},

{"t":"Van Gogh","e":"🌻","q":[
["De quel pays vient Vincent Van Gogh ?","m",["France","Belgique","Pays-Bas","Danemark"],2],
["Quelle fleur est le sujet d'une célèbre série de tableaux ?","m",["Coquelicots","Tournesols","Roses","Iris"],1],
["Quelle partie de son corps s'est-il coupée en 1888 ?","m",["Un doigt","Le nez","Une oreille","La langue"],2],
["Quel tableau ondulant représente un ciel nocturne au-dessus d'un village ?","m",["Nuit sur le fleuve","La Nuit étoilée","Ciel de Provence","Nuit d'été"],1],
["Comment s'appelle son frère qui l'a soutenu financièrement toute sa vie ?","o","Théo"],
["Dans quelle ville du sud de la France peint-il énormément en 1888-1889 ?","o","Arles"],
["Dans quel asile près d'Avignon s'est-il fait interner en 1889 ?","o","Saint-Rémy-de-Provence"],
["Dans quel village d'Île-de-France est-il mort en 1890 ?","o","Auvers-sur-Oise"],
["Combien de tableaux aurait-il vendus de son vivant, selon la légende ?","o","Un seul"],
["Quel autre peintre a partagé la Maison jaune à Arles avec lui avant le drame de l'oreille ?","o","Paul Gauguin"]
]},

{"t":"L'espace","e":"🚀","q":[
["Quelle planète est la plus proche du Soleil ?","m",["Vénus","Mercure","Mars","Terre"],1],
["Qui a posé le pied sur la Lune en premier, en 1969 ?","m",["Buzz Aldrin","Neil Armstrong","Iouri Gagarine","John Glenn"],1],
["Combien de planètes compte le système solaire depuis 2006 ?","m",["7","8","9","10"],1],
["Quelle sonde de la NASA a survolé Pluton en 2015 ?","m",["Voyager 1","Cassini","New Horizons","Juno"],2],
["Comment appelle-t-on la station orbitale internationale en abrégé ?","o","ISS"],
["Quel télescope spatial lancé fin 2021 succède à Hubble ?","o","James Webb"],
["Qui a été la première femme dans l'espace, en 1963 ?","o","Valentina Terechkova"],
["Quel programme de la NASA vise à ramener des humains sur la Lune ?","o","Artemis"],
["Quelle est la distance moyenne Terre-Soleil (à ±5 %) ?","o","Environ 150 millions de km"],
["Quel astrophysicien belge est considéré comme le père de la théorie du Big Bang ?","o","Georges Lemaître"]
]},

{"t":"Apple","e":"🍎","q":[
["Quel fruit est le logo d'Apple ?","m",["Orange","Pomme","Poire","Cerise"],1],
["Quel produit iconique d'Apple sort en 2007 ?","m",["iPod","iPad","iPhone","iMac"],2],
["Qui cofonde Apple avec Steve Jobs en 1976 ?","m",["Bill Gates","Steve Wozniak","Elon Musk","Tim Cook"],1],
["Dans quelle ville de Californie se trouve le siège d'Apple ?","m",["San Francisco","Palo Alto","Cupertino","Mountain View"],2],
["Qui dirige Apple depuis 2011 ?","o","Tim Cook"],
["En quelle année Steve Jobs est-il mort ?","o","2011"],
["Quel produit révolutionne l'écoute musicale portable en 2001 ?","o","L'iPod"],
["Comment s'appelle le siège circulaire d'Apple inauguré en 2017 ?","o","Apple Park"],
["Quel spot publicitaire réalisé par Ridley Scott lance le Macintosh en 1984 ?","o","La pub 1984"],
["Quel studio d'animation Steve Jobs a-t-il racheté à George Lucas en 1986 ?","o","Pixar"]
]},

{"t":"Astérix","e":"🍖","q":[
["Comment s'appelle le meilleur ami d'Astérix ?","m",["Panoramix","Obélix","Idéfix","Assurancetourix"],1],
["Que boivent les Gaulois pour devenir invincibles ?","m",["Du vin","De la cervoise","De la potion magique","De l'hydromel"],2],
["Comment s'appelle le petit chien d'Obélix ?","m",["Idéfix","Trafic","Bonemine","Ordralfabétix"],0],
["Qui a créé Astérix en 1959 ?","m",["Hergé","Franquin","Goscinny et Uderzo","Gotlib"],2],
["Quel druide fabrique la potion magique ?","o","Panoramix"],
["Comment s'appelle le poissonnier du village ?","o","Ordralfabétix"],
["Quel est le titre du tout premier album, paru en 1961 ?","o","Astérix le Gaulois"],
["Quel empereur romain apparaît régulièrement dans la série ?","o","Jules César"],
["Dans quel album Astérix participe-t-il aux Jeux Olympiques ?","o","Astérix aux Jeux Olympiques"],
["Quel scénariste a écrit Astérix jusqu'à sa mort brutale en 1977 ?","o","René Goscinny"]
]}

]
