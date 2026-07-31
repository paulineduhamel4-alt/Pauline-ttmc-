// Banque de 60 thèmes · 600 questions · français calibré niveau 1 à 10
// Format : ["question", "m"|"o", [options|-]|réponse, index correct|-, "explication"]

export const THEMES = [

/* ==================== NATURE & ENVIRONNEMENT ==================== */

{"t":"Les aurores boréales","e":"🌌","q":[
["De quelle couleur est l'aurore boréale la plus courante ?","m",["Rouge","Bleue","Verte","Violette"],2,"Le vert domine car il provient de l'oxygène excité à 100-300 km d'altitude."],
["Dans quel pays scandinave observe-t-on le plus d'aurores ?","m",["Le Danemark","La Suède","La Norvège","La Finlande"],2,"Le nord de la Norvège (Tromsø) est réputé le meilleur spot mondial."],
["Comment s'appelle l'aurore dans l'hémisphère sud ?","m",["Aurore australe","Aurore polaire","Aurore sud","Aurore antarctique"],0,"Aurore australe (australis = sud en latin), visible depuis la Tasmanie ou la Nouvelle-Zélande."],
["Quel phénomène solaire provoque les aurores ?","m",["Les éclipses","Les vents solaires","Les taches solaires","Les comètes"],1,"Le vent solaire projette des particules chargées vers la magnétosphère terrestre."],
["Quel gaz atmosphérique produit la couleur rouge des aurores ?","m",["L'azote","L'oxygène à haute altitude","L'hélium","L'hydrogène"],1,"L'oxygène au-dessus de 300 km produit du rouge, plus rare que le vert."],
["Comment s'appelle la science qui étudie ces phénomènes lumineux ?","o","L'aéronomie (ou physique de la haute atmosphère)","Elle étudie les phénomènes chimiques et physiques de la haute atmosphère."],
["Combien de temps dure un cycle solaire qui influence l'intensité des aurores ?","o","Environ 11 ans","Le cycle solaire de 11 ans alterne entre maximum et minimum d'activité."],
["Quel dieu nordique les Vikings associaient-ils aux aurores ?","m",["Thor","Odin","Freya","Les Valkyries"],3,"Les Vikings y voyaient les reflets des armures des Valkyries chevauchant dans le ciel."],
["Sur quelle autre planète a-t-on observé des aurores ?","m",["Mars","Vénus","Jupiter","Toutes les précédentes"],3,"Toutes les planètes avec magnétosphère (Jupiter, Saturne, Mars, Vénus) montrent des aurores."],
["Quel physicien norvégien a expliqué le premier le mécanisme des aurores en 1908 ?","m",["Bohr","Birkeland","Nansen","Amundsen"],1,"Kristian Birkeland a démontré expérimentalement l'origine solaire des aurores."]
]},

{"t":"Les volcans","e":"🌋","q":[
["Quel volcan a enseveli Pompéi en 79 après J.-C. ?","m",["L'Etna","Le Stromboli","Le Vésuve","Le Vulcano"],2,"Le Vésuve, près de Naples, a enseveli Pompéi et Herculanum sous 6 m de cendres."],
["Comment s'appelle le cercle de volcans autour du Pacifique ?","m",["La ceinture de feu","L'anneau de lave","La couronne pacifique","La chaîne de feu"],0,"La ceinture de feu concentre 75% des volcans actifs et 90% des séismes mondiaux."],
["Quel volcan islandais a paralysé le trafic aérien européen en 2010 ?","m",["L'Hekla","L'Eyjafjallajökull","Le Katla","Le Grimsvötn"],1,"L'Eyjafjallajökull a cloué 10 millions de passagers au sol pendant 6 jours."],
["Quel gaz est le plus émis par les volcans ?","m",["Le CO2","Le dioxyde de soufre","La vapeur d'eau","Le méthane"],2,"La vapeur d'eau représente 60-90% des émissions volcaniques."],
["Quel indice mesure l'explosivité d'une éruption ?","m",["L'échelle de Richter","Le VEI","L'échelle de Mercalli","L'indice Saffir-Simpson"],1,"Le VEI (Volcanic Explosivity Index) va de 0 à 8, échelle logarithmique."],
["Quelle éruption de 1815 a provoqué une année sans été ?","o","Le Tambora (Indonésie)","L'éruption du Tambora, VEI 7, a refroidi la planète et provoqué famines en 1816."],
["Quel est le plus grand volcan actif du monde ?","o","Le Mauna Loa (Hawaï)","Le Mauna Loa, volcan bouclier, s'élève à 9 km depuis le fond océanique."],
["Quelle est la plus violente éruption enregistrée dans l'histoire humaine ?","m",["Le Vésuve","Le Krakatoa","Le Tambora","Le Pinatubo"],2,"Le Tambora en 1815 (VEI 7) fut l'éruption historique la plus puissante."],
["Combien de personnes la montagne Pelée a-t-elle tuées en 1902 ?","m",["5 000","15 000","30 000","50 000"],2,"La nuée ardente a rayé Saint-Pierre en Martinique en quelques minutes, 30 000 morts."],
["Quel super-volcan sous le parc de Yellowstone menace-t-il d'entrer en éruption ?","m",["Il n'y en a pas","Le Yellowstone Caldera","Le Norris Volcano","Le Grand Teton"],1,"La caldeira de Yellowstone est un super-volcan surveillé de près par les géologues."]
]},

{"t":"Les tsunamis","e":"🌊","q":[
["Que signifie le mot japonais tsunami ?","m",["Grande vague","Vague de port","Vague meurtrière","Vague sismique"],1,"Tsunami = 津波, littéralement vague de port (car observée à l'arrivée dans les ports)."],
["Quelle est la cause principale des tsunamis ?","m",["Le vent","Les séismes sous-marins","Les tempêtes","Les marées"],1,"90% des tsunamis sont déclenchés par des séismes de subduction sous-marins."],
["Quel tsunami de 2004 a fait plus de 230 000 morts ?","m",["Du Japon","De l'océan Indien","Du Chili","D'Alaska"],1,"Le tsunami de Sumatra du 26 décembre 2004 a frappé 14 pays."],
["À quelle vitesse un tsunami se déplace-t-il en haute mer ?","m",["50 km/h","200 km/h","500 km/h","800 km/h"],3,"En eau profonde, un tsunami peut atteindre 800 km/h, la vitesse d'un avion."],
["Quel signe naturel précède souvent un tsunami ?","m",["Un orage","La mer se retire brutalement","Le ciel rougit","Le vent tombe"],1,"Le retrait rapide de la mer signale l'aspiration précédant la vague géante."],
["Quel séisme a provoqué le tsunami de Fukushima en 2011 ?","o","Le séisme de Tōhoku (magnitude 9,1)","Le 3ᵉ plus puissant jamais enregistré, il a déplacé le Japon de 2,4 m."],
["Combien de temps le tsunami de 2004 a-t-il mis pour atteindre l'Afrique ?","o","Environ 7 heures","Il a parcouru 5 000 km jusqu'à la Somalie, où il a fait des centaines de morts."],
["Quelle est la hauteur maximale jamais atteinte par un tsunami ?","m",["30 m","100 m","300 m","524 m"],3,"En 1958 à Lituya Bay (Alaska), un mégatsunami a atteint 524 m sur les flancs des montagnes."],
["Quel pays a le système d'alerte tsunami le plus développé ?","m",["Les États-Unis","L'Indonésie","Le Japon","Le Chili"],2,"Le Japon détient un réseau dense de capteurs et donne l'alerte en moins de 3 minutes."],
["Le tsunami de 2011 a-t-il provoqué la catastrophe nucléaire de Fukushima ?","m",["Non, indépendante","Oui, en inondant les groupes électrogènes","Non, c'était le séisme","Oui, en cassant les réacteurs"],1,"La vague a inondé les générateurs de secours, empêchant le refroidissement des réacteurs."]
]},

{"t":"Les glaciers","e":"🧊","q":[
["Où se trouve la plus grande masse de glace au monde ?","m",["Arctique","Antarctique","Groenland","Alpes"],1,"L'Antarctique concentre 90% des glaces mondiales, jusqu'à 4,8 km d'épaisseur."],
["Comment s'appelle un morceau de glacier qui se détache dans la mer ?","m",["Un glaçon","Un iceberg","Un banc de glace","Un vêlage"],1,"Un iceberg (né du vêlage) : seul 10% de sa masse dépasse de l'eau."],
["Quel iceberg a coulé le Titanic en 1912 ?","m",["Un iceberg antarctique","Un iceberg groenlandais","Un iceberg islandais","Un iceberg canadien"],1,"L'iceberg venait du Groenland, dérivant dans l'Atlantique Nord."],
["Quel glacier français est le plus long des Alpes ?","m",["Le glacier des Bossons","La Mer de Glace","Le glacier d'Argentière","Le glacier du Géant"],1,"La Mer de Glace, à Chamonix, fait 7 km de long et reste emblématique du Mont-Blanc."],
["Quel pourcentage de l'eau douce mondiale est stocké dans les glaciers ?","m",["30 %","50 %","69 %","90 %"],2,"Les glaciers contiennent environ 69% de l'eau douce de la planète."],
["Comment s'appelle le processus de formation des icebergs ?","o","Le vêlage","Le vêlage désigne la rupture d'un morceau de glacier qui tombe à la mer."],
["Quel glacier patagonien est célèbre pour avancer encore aujourd'hui ?","o","Le Perito Moreno (Argentine)","L'un des rares glaciers en équilibre : il gagne autant qu'il perd chaque année."],
["De combien de mètres les glaciers alpins ont-ils reculé en un siècle en moyenne ?","m",["100 m","500 m","1 km","2 km"],2,"Les glaciers alpins ont perdu environ 1 km de longueur au XXᵉ siècle."],
["Pourquoi la glace très comprimée d'un glacier est-elle bleue ?","m",["À cause d'algues","Elle absorbe le rouge","Elle reflète le ciel","À cause de bulles d'air"],1,"La glace dense absorbe les longueurs d'onde rouges et diffuse le bleu."],
["Quel lac se cache sous 4 km de glace en Antarctique ?","m",["Le lac Baïkal","Le lac Vostok","Le lac Ellsworth","Le lac Whillans"],1,"Le lac Vostok, isolé du monde depuis 15 millions d'années, contient peut-être une vie unique."]
]},

{"t":"Les déserts","e":"🏜️","q":[
["Quel est le plus grand désert chaud du monde ?","m",["Le Gobi","L'Atacama","Le Sahara","Le Kalahari"],2,"Le Sahara couvre 9 millions de km² à travers 11 pays d'Afrique."],
["Quel désert d'Amérique du Sud est le plus aride ?","m",["Le Sonoran","L'Atacama","La Patagonie","Le Nazca"],1,"L'Atacama au Chili peut passer 400 ans sans une goutte de pluie dans certaines zones."],
["Quel désert asiatique traverse la Chine et la Mongolie ?","m",["Le Gobi","Le Taklamakan","Le Kyzylkoum","Le Karakoum"],0,"Le Gobi s'étend sur 1,3 million de km² entre Chine et Mongolie."],
["Quel désert antarctique est en réalité le plus grand du monde ?","m",["L'Arctique","L'Antarctique","Le Groenland","La Sibérie"],1,"L'Antarctique (14 M km²) est un désert polaire car les précipitations y sont infimes."],
["Quel désert namibien est réputé pour ses dunes rouges ?","m",["Kalahari","Namib","Sossusvlei","Skeleton Coast"],1,"Le Namib possède les plus vieilles dunes du monde, hautes de 300 m."],
["Comment appelle-t-on une oasis dans le désert ?","o","Un point d'eau permettant la végétation","Une oasis se forme là où une nappe phréatique remonte à la surface."],
["Quel peuple nomade traverse le Sahara à dos de dromadaire ?","o","Les Touaregs","Peuple berbère surnommé les hommes bleus à cause de leur turban indigo."],
["Quel désert américain contient la Vallée de la Mort ?","m",["Sonoran","Mojave","Chihuahuan","Grand Bassin"],1,"La Death Valley, dans le Mojave, détient le record de chaleur mondiale (56,7°C)."],
["Combien de mm de pluie tombe en moyenne par an dans un désert ?","m",["Moins de 250 mm","Moins de 500 mm","Moins de 100 mm","Moins de 750 mm"],0,"Un désert est défini par moins de 250 mm de précipitations annuelles."],
["Quel phénomène crée les mirages dans le désert ?","m",["La chaleur seule","La réfraction due aux couches d'air chaud","L'humidité","Les particules de sable"],1,"L'air chaud près du sol dévie la lumière et projette l'image inversée du ciel."]
]},

{"t":"Les champignons","e":"🍄","q":[
["Quel champignon est le plus consommé dans le monde ?","m",["Le cèpe","La girolle","Le champignon de Paris","Le shiitake"],2,"L'Agaricus bisporus (champignon de Paris) représente 90% de la consommation mondiale."],
["Quel champignon mortel ressemble au champignon de Paris ?","m",["Le bolet satan","L'amanite phalloïde","La fausse girolle","Le coprin"],1,"L'amanite phalloïde cause 90% des morts par champignon. Une seule suffit à tuer."],
["Quel réseau souterrain de champignons connecte les arbres entre eux ?","m",["Le rhizome","Le mycélium","La racine","Le stolon"],1,"Le mycélium forme un internet forestier permettant aux arbres d'échanger nutriments et signaux."],
["Quel champignon japonais est réputé pour ses propriétés médicinales ?","m",["Le matsutake","Le shiitake","Le reishi","L'enoki"],2,"Le reishi (Ganoderma lucidum) est utilisé depuis 2000 ans en médecine chinoise."],
["Quel champignon hallucinogène contient de la psilocybine ?","m",["L'amanite tue-mouches","Le psilocybe","Le coprin","La truffe"],1,"Les psilocybes (magic mushrooms) sont étudiés aujourd'hui pour traiter la dépression."],
["Quel est le plus grand organisme vivant sur Terre ?","o","Un champignon (Armillaria en Oregon, 9 km²)","Un unique organisme d'Armillaria ostoyae s'étend sur 900 hectares en Oregon."],
["Comment s'appelle la science qui étudie les champignons ?","o","La mycologie","La mycologie compte parmi les branches les plus jeunes de la biologie."],
["Quel champignon comestible est le plus cher au monde ?","m",["La morille","Le cèpe","La truffe blanche d'Alba","Le matsutake"],2,"La truffe blanche du Piémont peut dépasser 5 000 €/kg lors des enchères."],
["Combien d'espèces de champignons existeraient sur Terre ?","m",["10 000","150 000","1,5 million","5 millions"],2,"Les mycologues estiment à 1,5 million d'espèces, dont seulement 150 000 sont décrites."],
["Le champignon appartient-il au règne végétal ?","m",["Oui","Non, animal","Non, ses propres règne","Non, bactérien"],2,"Les champignons forment leur propre règne (Fungi), plus proche des animaux que des plantes."]
]},

{"t":"Les coraux","e":"🪸","q":[
["Où se trouve la plus grande barrière de corail au monde ?","m",["Aux Bahamas","En Australie","En Floride","Aux Maldives"],1,"La Grande Barrière fait 2 300 km, visible depuis l'espace, au large du Queensland."],
["Le corail est-il un animal ?","m",["Non, une plante","Oui","Non, un minéral","Non, un champignon"],1,"Chaque corail est une colonie de polypes, animaux cnidaires apparentés aux méduses."],
["Comment s'appelle le phénomène de mort massive du corail ?","o","Le blanchissement","La chaleur expulse les algues symbiotiques, le corail perd sa couleur et meurt."],
["Quelle température fatale déclenche le blanchissement ?","m",["18°C","24°C","29°C","35°C"],2,"Au-dessus de 29-30°C soutenus, les zooxanthelles se détachent et le corail blanchit."],
["Quel pourcentage des récifs mondiaux a déjà été détruit ?","m",["10 %","25 %","50 %","75 %"],2,"Environ 50% des récifs ont disparu depuis 1950, dont 30% depuis 1980."],
["Quelles algues vivent en symbiose avec le corail ?","o","Les zooxanthelles","Ces micro-algues photosynthétisent et nourrissent le polype à 90%."],
["Combien de temps met un récif corallien à se former ?","o","Des milliers d'années (croissance 1-3 cm/an)","La Grande Barrière a environ 20 millions d'années dans sa forme actuelle."],
["Quel corail rouge de Méditerranée est utilisé en bijouterie ?","m",["Le corail noir","Le corail rouge","Le corail bleu","Le corail blanc"],1,"Le Corallium rubrum, prisé depuis l'Antiquité, est désormais protégé."],
["Combien d'espèces de poissons vivent dans les récifs coralliens ?","m",["1 000","4 000","8 000","15 000"],2,"Environ 4 000 espèces de poissons dépendent des récifs, soit 25% de la biodiversité marine."],
["Quel corail australien peut vivre plus de 500 ans ?","m",["Le corail cerveau","Le corail Porites","Le corail bulle","Le corail feu"],1,"Certains Porites de la Grande Barrière ont plus de 700 ans, véritables archives climatiques."]
]},

/* ==================== ANIMAUX ==================== */

{"t":"Les baleines","e":"🐋","q":[
["Quel est le plus grand animal ayant jamais existé sur Terre ?","m",["Le mégalodon","Le rorqual bleu","Le cachalot","Le brachiosaure"],1,"Le rorqual bleu (jusqu'à 30 m et 170 t) dépasse même les plus grands dinosaures."],
["Combien de mètres un rorqual bleu peut-il mesurer ?","m",["15 m","20 m","30 m","40 m"],2,"Le record est à 33 m, mais 25-30 m est la taille adulte moyenne."],
["Quelle baleine à dents plonge à 2 000 m de profondeur ?","m",["La baleine à bosse","Le cachalot","Le rorqual","La baleine grise"],1,"Le cachalot peut plonger 2h et jusqu'à 2 250 m pour chasser le calmar géant."],
["Comment les baleines à fanons se nourrissent-elles ?","m",["En chassant","En filtrant l'eau","En broutant","En aspirant"],1,"Les fanons filtrent krill et petits poissons par tonnes chaque jour."],
["Quelle baleine est célèbre pour ses chants complexes ?","m",["Le rorqual bleu","La baleine à bosse","Le cachalot","La baleine grise"],1,"Les mâles à bosse chantent des mélodies de 20 minutes qui évoluent selon les régions."],
["Combien de litres de lait une baleine bleue produit-elle par jour ?","o","Environ 600 litres","Le baleineau grossit de 90 kg par jour grâce à ce lait à 40% de matière grasse."],
["Quel roman met en scène la chasse à une baleine blanche ?","o","Moby Dick (Melville, 1851)","Le capitaine Achab traque un cachalot albinos qui lui a arraché la jambe."],
["Combien de temps une baleine peut-elle rester en apnée ?","m",["10 min","30 min","90 min","2 heures"],3,"Le cachalot détient le record parmi les mammifères : jusqu'à 2 heures."],
["Quel pays a quitté la Commission baleinière pour reprendre la chasse en 2019 ?","m",["La Norvège","L'Islande","Le Japon","La Russie"],2,"Le Japon s'est retiré de la CBI pour reprendre officiellement la chasse commerciale."],
["Combien de dents un cachalot possède-t-il ?","m",["Aucune","Environ 20","Environ 50","Environ 200"],2,"Il possède ~50 dents à la mâchoire inférieure uniquement, chacune pesant 1 kg."]
]},

{"t":"Les loups","e":"🐺","q":[
["Combien de loups compose typiquement une meute ?","m",["2","5-10","20-30","50+"],1,"Une meute type compte 5-10 individus formant une famille avec un couple alpha."],
["Quel pays a réintroduit le loup dans le parc de Yellowstone en 1995 ?","m",["Le Canada","Les USA","Le Mexique","La Russie"],1,"La réintroduction du loup gris a restauré tout l'écosystème du parc."],
["Le loup a-t-il été exterminé en France au XXᵉ siècle ?","m",["Non","Oui, avant de revenir","Il n'y en a jamais eu","Il a émigré au Canada"],1,"Éteint en 1937, il est revenu naturellement par l'Italie en 1992 dans le Mercantour."],
["Quel loup est le plus rare au monde ?","m",["Le loup rouge","Le loup arctique","Le loup d'Éthiopie","Le loup du Mackenzie"],2,"Le loup d'Éthiopie compte moins de 500 individus dans les hauts plateaux."],
["Comment un loup communique-t-il à longue distance ?","m",["Il aboie","Il hurle","Il grogne","Il siffle"],1,"Le hurlement porte jusqu'à 10 km et sert à localiser la meute ou marquer le territoire."],
["Quelle est la sous-espèce du loup dont descend le chien domestique ?","o","Le loup gris (Canis lupus)","Domestication survenue il y a 15 000 à 40 000 ans."],
["Comment appelle-t-on le mâle et la femelle qui dirigent la meute ?","o","Les alphas (ou couple reproducteur)","Seul le couple alpha se reproduit, les autres élèvent les petits."],
["Quel personnage mythologique romain fut allaité par une louve ?","m",["Jupiter","Hercule","Romulus et Rémus","César"],2,"Les jumeaux fondateurs de Rome furent recueillis par la louve capitoline."],
["Combien de kilomètres un loup peut-il parcourir en une nuit ?","m",["10 km","30 km","70 km","150 km"],2,"Un loup en dispersion peut faire 70 km en une seule nuit pour chercher un territoire."],
["Quelle est l'histoire du loup Slavc célèbre en France en 2011 ?","m",["Il a été empoisonné","Il a traversé les Alpes depuis la Slovénie","Il a été le dernier abattu","Il vit au zoo de Vincennes"],1,"Ce loup équipé d'un GPS a parcouru 2 000 km depuis la Slovénie jusqu'à l'Italie."]
]},

{"t":"Les pieuvres","e":"🐙","q":[
["Combien de cœurs possède une pieuvre ?","m",["1","2","3","8"],2,"Trois cœurs : un principal pour le corps, deux pour oxygéner les branchies."],
["De quelle couleur est le sang d'une pieuvre ?","m",["Rouge","Bleu","Vert","Transparent"],1,"Bleu car il transporte l'oxygène via l'hémocyanine (à base de cuivre) au lieu de l'hémoglobine."],
["Combien de bras une pieuvre possède-t-elle ?","m",["6","8","10","12"],1,"8 bras, contrairement au calamar qui en a 10 (dont 2 tentacules)."],
["Où se trouvent les 2/3 des neurones d'une pieuvre ?","m",["Dans le cerveau","Dans les bras","Dans les yeux","Dans les cœurs"],1,"Chaque bras a une quasi-autonomie neuronale et peut apprendre indépendamment."],
["Quelle capacité surprenante ont les pieuvres pour se camoufler ?","m",["Elles se transparents","Elles changent couleur et texture","Elles émettent de la lumière","Elles se déguisent"],1,"Grâce à des cellules chromatophores, elles imitent en 0,3 s l'environnement."],
["Comment s'appelle l'encre projetée par une pieuvre en défense ?","o","La sépia (ou mélanine)","Le nuage d'encre masque la fuite et perturbe l'odorat des prédateurs."],
["Combien de temps vit une pieuvre en moyenne ?","o","1 à 5 ans","Les pieuvres ont une vie courte, elles meurent souvent après leur unique reproduction."],
["Combien d'espèces de pieuvres existent ?","m",["50","150","300","3 000"],2,"Environ 300 espèces décrites, la plus grande étant la pieuvre géante du Pacifique."],
["Quelle pieuvre est mortelle pour l'homme ?","m",["La pieuvre géante","La pieuvre à anneaux bleus","La pieuvre de Californie","Aucune"],1,"La pieuvre à anneaux bleus (Australie) contient une neurotoxine sans antidote."],
["Comment une pieuvre passe-t-elle par un trou minuscule ?","m",["Elle se démembre","Elle liquéfie ses os","Elle n'a pas d'os","Elle se contorsionne magiquement"],2,"Sans squelette, une pieuvre passe par tout trou plus grand que son bec (seule partie dure)."]
]},

{"t":"Les serpents","e":"🐍","q":[
["Combien d'espèces de serpents existent dans le monde ?","m",["500","1 500","3 800","10 000"],2,"Environ 3 800 espèces recensées, dont 600 venimeuses et 200 dangereuses pour l'homme."],
["Quel serpent est le plus long du monde ?","m",["Le cobra royal","L'anaconda","Le python réticulé","Le boa"],2,"Le python réticulé atteint 6-7 m, jusqu'à 10 m pour les records."],
["Quel serpent est le plus venimeux ?","m",["Le mamba noir","Le cobra royal","Le taïpan du désert","Le crotale"],2,"Le taïpan d'Australie possède le venin le plus toxique connu, capable de tuer 100 humains."],
["Où se trouve la seule île interdite au monde à cause des serpents ?","o","Ilha da Queimada Grande (Brésil)","5 serpents par m² de jararaca dorée, seule l'armée peut s'y rendre."],
["Comment un serpent avale-t-il des proies plus grosses que sa tête ?","m",["Il les mâche","Sa mâchoire se déboîte","Il les découpe","Il les vomit d'abord"],1,"Sa mâchoire n'est pas soudée : les deux moitiés inférieures peuvent s'écarter indépendamment."],
["Comment appelle-t-on la mue chez les serpents ?","o","L'exuviation","Le serpent perd sa peau plusieurs fois par an pour grandir."],
["Quel serpent tue le plus d'humains chaque année ?","m",["Le cobra","La vipère de Russell","Le mamba","Le taïpan"],1,"La vipère de Russell (Asie du Sud) est responsable de plus de 25 000 morts par an."],
["Comment un serpent perçoit-il la chaleur de ses proies ?","m",["Par ses yeux","Par sa langue","Par des fossettes sensorielles","Par sa peau"],2,"Les crotales et pythons ont des fossettes thermosensibles précises au 1/1000 de degré."],
["Quel serpent-devin peut lever son corps pour attaquer face à face ?","m",["Le cobra royal","La vipère","Le boa","Le python"],0,"Le cobra royal peut se dresser jusqu'à 1,8 m, à hauteur d'homme."],
["Combien de temps un serpent peut-il vivre sans manger ?","m",["1 mois","6 mois","1 an","2 ans"],3,"Les grands boas et pythons peuvent jeûner 1 à 2 ans grâce à un métabolisme très lent."]
]},

{"t":"Les manchots","e":"🐧","q":[
["Sur quel continent vivent tous les manchots à l'état sauvage ?","m",["L'Arctique","L'hémisphère sud","Les deux pôles","L'Antarctique uniquement"],1,"Uniquement dans l'hémisphère sud : Antarctique, Afrique, Amérique du Sud, Océanie."],
["Combien d'espèces de manchots existent ?","m",["8","12","18","24"],2,"18 espèces reconnues, du minuscule manchot pygmée au grand manchot empereur."],
["Quel est le plus grand des manchots ?","m",["Le manchot royal","Le manchot empereur","Le gorfou","Le manchot papou"],1,"Le manchot empereur mesure 1,20 m et pèse 40 kg."],
["Où le manchot empereur pond-il ses œufs ?","m",["Dans un nid","Sur ses pieds","Dans le sable","Dans une grotte"],1,"Le mâle garde l'œuf posé sur ses pattes sous un repli de peau, à -40°C."],
["Combien de temps le mâle empereur couve-t-il sans manger ?","m",["30 jours","65 jours","100 jours","6 mois"],1,"Le mâle jeûne 65 jours pendant la couvaison en plein hiver antarctique."],
["Le pingouin et le manchot sont-ils la même chose ?","m",["Oui","Non, animaux différents","Oui en anglais","Ça dépend"],1,"Le pingouin vit dans l'Arctique et peut voler ; le manchot vit au Sud et ne vole pas."],
["Quel réalisateur a fait un documentaire oscarisé sur les manchots empereurs ?","o","Luc Jacquet (La Marche de l'empereur, 2005)","Le film a remporté l'Oscar du meilleur documentaire en 2006."],
["À quelle vitesse un manchot peut-il nager ?","m",["5 km/h","15 km/h","36 km/h","60 km/h"],2,"Les manchots papous atteignent 36 km/h, ce sont les plus rapides."],
["Où vit le seul manchot des climats chauds ?","m",["Aux Galápagos","À Madagascar","À Hawaï","À Bali"],0,"Le manchot des Galápagos est le seul à vivre au niveau de l'équateur."],
["De quoi se nourrissent principalement les manchots ?","m",["Poissons uniquement","Krill et poissons","Algues","Plancton"],1,"Ils avalent krill, calmars et poissons, jusqu'à 2 kg par jour."]
]},

{"t":"Les abeilles","e":"🐝","q":[
["Combien d'abeilles compose typiquement une ruche ?","m",["500","5 000","50 000","500 000"],2,"Une ruche en été abrite 40 000 à 80 000 abeilles."],
["Combien de kilomètres une abeille fait-elle pour produire 1 kg de miel ?","m",["1 000 km","10 000 km","40 000 km","100 000 km"],2,"Il faut environ 40 000 km, soit le tour de la Terre."],
["Combien de fleurs une abeille visite-t-elle en une journée ?","m",["50","500","2 000","10 000"],2,"Une butineuse visite jusqu'à 2 000 fleurs par jour."],
["Comment une abeille indique-t-elle la direction d'une source de nectar ?","m",["Par des sons","Par une danse","Par des phéromones","Par des couleurs"],1,"La danse frétillante décodée par von Frisch (Nobel 1973) indique distance et direction."],
["Combien de temps vit une abeille ouvrière en été ?","m",["1 semaine","6 semaines","6 mois","1 an"],1,"Environ 6 semaines : elle s'épuise à butiner. En hiver elle vit 6 mois."],
["Comment s'appelle le mâle de l'abeille ?","o","Le faux-bourdon","Il ne pique pas, sa seule fonction est de féconder la reine."],
["Quel virus décime les colonies d'abeilles dans le monde ?","o","Le varroa (acarien) ou syndrome d'effondrement","Le varroa destructor transmet aussi des virus fatals aux colonies."],
["Combien d'œufs une reine pond-elle par jour ?","m",["10","100","2 000","10 000"],2,"Une reine pond jusqu'à 2 000 œufs par jour, soit son propre poids."],
["De quoi est composé le miel ?","m",["Eau uniquement","Sucres et enzymes","Nectar recraché","Pollen liquide"],1,"Le miel est du nectar concentré (80% sucres) enrichi d'enzymes salivaires d'abeille."],
["Une abeille meurt-elle après avoir piqué ?","m",["Non, jamais","Oui, toujours","Oui, seulement l'ouvrière","Oui, mais pas la reine"],3,"L'aiguillon barbelé reste dans la peau, arrachant l'abdomen. La reine peut piquer plusieurs fois."]
]},

{"t":"Les grands félins","e":"🐆","q":[
["Quel est le plus grand félin du monde ?","m",["Le lion","Le tigre","Le jaguar","Le puma"],1,"Le tigre de Sibérie peut peser 300 kg, contre 250 kg pour le lion."],
["Quel félin est le plus rapide sur terre ?","m",["Le léopard","Le tigre","Le guépard","Le lynx"],2,"Le guépard atteint 110 km/h en 3 secondes, mais tient 30 s maximum."],
["Combien reste-t-il de tigres sauvages dans le monde ?","m",["500","4 500","40 000","150 000"],1,"Environ 4 500 tigres sauvages, contre 100 000 il y a un siècle."],
["Quel félin d'Amérique est aussi appelé lion des montagnes ?","o","Le puma (ou cougar)","Le puma a l'aire de répartition la plus vaste de tous les mammifères d'Amérique."],
["Quel est le seul grand félin qui vit en groupe ?","o","Le lion","Les lionnes chassent en meute, tandis que les autres félins sont solitaires."],
["Quel félin nocturne a des touffes de poils sur les oreilles ?","m",["Le lynx","Le caracal","Le serval","Tous les précédents"],3,"Lynx, caracal et serval ont tous des pinceaux d'oreilles, utilité encore débattue."],
["Combien de kilos de viande un lion peut-il manger en un repas ?","m",["5 kg","15 kg","40 kg","100 kg"],2,"Un lion mâle peut engloutir 40 kg d'un coup après plusieurs jours de jeûne."],
["Quel jaguar est né noir en raison d'une mutation ?","m",["L'ocelot","La panthère noire","Le puma","Le margay"],1,"La panthère noire est un jaguar ou léopard mélanique (surproduction de mélanine)."],
["Où vit le tigre de Sumatra, le plus petit tigre ?","m",["Chine","Indonésie","Inde","Vietnam"],1,"Sumatra abrite moins de 400 individus, en danger critique."],
["Quelle est la particularité anatomique unique du guépard ?","m",["Griffes non-rétractiles","Vue en couleurs","Pas de rugissement","Toutes les précédentes"],3,"Ses griffes ne se rétractent pas (adhérence), il ne rugit pas mais miaule."]
]},

{"t":"Les papillons","e":"🦋","q":[
["Combien de temps vit un papillon adulte en moyenne ?","m",["1 jour","2 semaines","3 mois","1 an"],1,"La plupart vivent 2 semaines, sauf le monarque qui peut vivre 9 mois."],
["Quel papillon migre sur 4 000 km entre Canada et Mexique ?","m",["Le machaon","Le monarque","Le morpho","Le paon-du-jour"],1,"Le monarque effectue chaque automne cette migration exceptionnelle sur plusieurs générations."],
["De quoi les papillons se nourrissent-ils principalement ?","m",["De pollen","De nectar","De feuilles","D'insectes"],1,"Ils aspirent le nectar avec leur trompe (spiritrompe) enroulée au repos."],
["Combien de fois un papillon bat-il des ailes par seconde ?","m",["1-3","5-10","20-30","60-100"],1,"Environ 5 à 12 battements/seconde, très lent comparé à d'autres insectes."],
["Comment appelle-t-on la métamorphose complète papillon → chenille → chrysalide → papillon ?","o","La métamorphose complète (holométabolie)","Le stade nymphal (chrysalide) transforme totalement l'anatomie de l'insecte."],
["Quel papillon nocturne est immense et a des yeux dessinés sur les ailes ?","o","Le grand paon de nuit","Plus grand papillon d'Europe (18 cm), les ocelles imitent des yeux prédateurs."],
["Combien d'espèces de papillons existent dans le monde ?","m",["3 000","20 000","165 000","1 million"],2,"Environ 165 000 espèces recensées (papillons de jour et de nuit confondus)."],
["Où se trouvent les papilles gustatives d'un papillon ?","m",["Sur la langue","Sur les pattes","Sur les antennes","Sur les ailes"],1,"Ils goûtent avec leurs pattes, ce qui permet d'évaluer une plante en s'y posant."],
["Quel papillon nocturne bleu géant vient d'Amazonie ?","m",["Le sphinx","Le morpho","Le paon","L'atlas"],1,"Le morpho bleu (Amazonie) atteint 15 cm et brille grâce aux nano-structures de ses ailes."],
["Pourquoi le monarque est-il toxique pour ses prédateurs ?","m",["Il produit du venin","Il mange des asclépiades","Il vole trop vite","Il est méchant"],1,"Sa chenille se nourrit d'asclépiades toxiques dont le monarque garde les toxines."]
]},

/* ==================== HISTOIRE ==================== */

{"t":"Les pirates","e":"🏴‍☠️","q":[
["Quel pirate portait une barbe qu'il tressait avec des mèches enflammées ?","m",["Jack Rackham","Henry Morgan","Barbe Noire","Francis Drake"],2,"Edward Teach dit Barbe Noire terrorisait les Caraïbes en 1716-1718."],
["Quel drapeau les pirates utilisaient-ils ?","m",["Le Jolly Roger","Le Black Jack","Le Skull Flag","Le Dead Man"],0,"Le Jolly Roger, souvent une tête de mort blanche sur fond noir, signalait le pirate."],
["Quelle femme pirate irlandaise a défié la reine Élisabeth Iʳᵉ ?","m",["Anne Bonny","Mary Read","Grace O'Malley","Ching Shih"],2,"Grace O'Malley (Grainne Ni Mhaille) régnait sur les côtes d'Irlande au XVIᵉ siècle."],
["Quelle île des Caraïbes était le repaire des pirates ?","m",["Cuba","La Jamaïque (Port Royal)","Haïti","La Barbade"],1,"Port Royal fut surnommée la Sodome du Nouveau Monde avant le séisme de 1692."],
["Quel corsaire français a servi Louis XIV ?","m",["Surcouf","Jean Bart","Duguay-Trouin","Les trois"],3,"Tous trois furent d'illustres corsaires français des XVIIᵉ-XVIIIᵉ siècles."],
["Quelle femme pirate chinoise a commandé la plus grande flotte de l'histoire ?","o","Ching Shih (Zheng Yi Sao)","Elle dirigeait 1 800 navires et 80 000 pirates en Mer de Chine vers 1810."],
["Quel trésor de pirate n'a jamais été retrouvé ?","o","Le trésor du capitaine Kidd","William Kidd aurait caché un butin qui alimente les chasses au trésor depuis 1701."],
["Quelle est la différence entre pirate et corsaire ?","m",["Aucune","Le corsaire a une lettre de course","Le pirate est plus violent","Le corsaire vole des rois"],1,"Le corsaire attaque pour un État avec un permis officiel (lettre de course), le pirate agit pour lui."],
["Vers quelles décennies s'étend l'âge d'or de la piraterie ?","m",["1550-1600","1650-1720","1720-1780","1780-1830"],1,"Environ 1650-1720, avec un pic entre 1716 et 1726 aux Caraïbes."],
["Quel pirate breton fut surnommé le roi des corsaires malouins ?","m",["Duguay-Trouin","Surcouf","La Bourdonnais","Cassard"],1,"Robert Surcouf captura le Kent au large de Sumatra en 1800."]
]},

{"t":"Les gladiateurs","e":"⚔️","q":[
["Dans quel bâtiment romain les gladiateurs combattaient-ils ?","m",["Le Panthéon","Le Forum","Le Colisée","Le Circus Maximus"],2,"Le Colisée (80 ap. J.-C.) pouvait accueillir 50 000 spectateurs sur 4 étages."],
["Quel gladiateur thrace a mené une révolte d'esclaves en 73 av. J.-C. ?","m",["Maximus","Crixus","Spartacus","Flamma"],2,"Spartacus tint tête à Rome pendant 2 ans avec 120 000 esclaves avant sa défaite."],
["Que signifiait le pouce baissé dans l'arène ?","m",["Grâce","Mort","Victoire","Égalité"],1,"Le pouce baissé (verso pollice) demandait l'estocade au gladiateur vaincu."],
["Quel type de gladiateur combattait avec un filet et un trident ?","m",["Le mirmillon","Le rétiaire","Le sécutor","Le thrace"],1,"Le rétiaire, léger et sans casque, imitait le pêcheur face au sécutor casqué."],
["Combien de spectateurs le Colisée pouvait-il accueillir ?","o","Environ 50 000","Sur 4 niveaux, avec une organisation sociale stricte des places."],
["Quel animal les gladiateurs affrontaient-ils dans les venationes ?","o","Lions, tigres, ours, éléphants, rhinocéros","Les chasses (venationes) causèrent la quasi-extinction de plusieurs espèces."],
["Quel empereur romain combattait lui-même comme gladiateur ?","m",["Néron","Caligula","Commode","Auguste"],2,"Commode s'illustra dans 735 combats truqués, se prenant pour Hercule."],
["Les combats étaient-ils toujours mortels ?","m",["Oui toujours","Non, l'issue variait","La moitié mouraient","Seuls les esclaves"],1,"Les gladiateurs coûtaient cher, seuls 10-20% des combats se terminaient par la mort."],
["Quelle école formait les gladiateurs à Capoue ?","m",["Ludus Magnus","Ludus Dacicus","Ludus de Lentulus Batiatus","Ludus Matutinus"],2,"C'est de cette école que s'échappa Spartacus avec 74 gladiateurs en 73 av. J.-C."],
["En quelle année les combats de gladiateurs furent-ils officiellement interdits ?","m",["200","325","404","500"],2,"L'empereur chrétien Honorius les interdit en 404 après le meurtre du moine Télémaque."]
]},

{"t":"Les Vikings","e":"⚔️","q":[
["De quelle région d'Europe venaient les Vikings ?","m",["Écosse","Scandinavie","Balkans","Islande"],1,"Vikings = habitants de Norvège, Suède, Danemark, VIIIᵉ-XIᵉ siècle."],
["Quel Viking a découvert l'Amérique 500 ans avant Christophe Colomb ?","m",["Erik le Rouge","Leif Erikson","Ragnar","Olaf"],1,"Leif Erikson atteignit Terre-Neuve (Vinland) vers l'an 1000."],
["Comment appelaient-ils leur bateau long à faible tirant d'eau ?","o","Le drakkar (ou langskip)","Ces bateaux permettaient d'atteindre les côtes et de remonter les fleuves."],
["Qui était le dieu principal des Vikings ?","m",["Thor","Loki","Freyr","Odin"],3,"Odin, dieu de la guerre et de la sagesse, régnait sur Asgard."],
["Où se trouve le paradis des guerriers vikings tombés au combat ?","o","Le Valhalla","Palais d'Odin où les guerriers combattent le jour et festoient la nuit."],
["Comment appelait-on le raid viking en langue nordique ?","m",["La saga","Le hird","Le viking","Le blot"],2,"Faire du viking (au singulier, en vieux norrois) signifiait partir en raid."],
["Quel royaume anglais fut créé par les Vikings ?","m",["Le Wessex","Le Danelaw","La Mercie","La Northumbrie"],1,"Le Danelaw (nord et est de l'Angleterre) fut sous domination viking dès 878."],
["Portaient-ils des casques à cornes ?","m",["Oui, systématiquement","Non, c'est un mythe du XIXᵉ","Seulement en cérémonie","Seulement les chefs"],1,"Les casques à cornes sont une invention romantique du XIXᵉ siècle (opéra de Wagner)."],
["Quel Viking a fondé les colonies vikings du Groenland ?","o","Erik le Rouge","Exilé d'Islande, il fonda Brattahlíð au Groenland vers 985."],
["Quelle ville russe fondée par un chef viking devint capitale ?","m",["Moscou","Kiev","Novgorod","Saint-Pétersbourg"],2,"Rurik le Varègue fonda Novgorod en 862, ancêtre de la principauté de Rus'."]
]},

{"t":"La Révolution française","e":"🇫🇷","q":[
["Quel événement a marqué le début de la Révolution française ?","m",["Le sacre de Napoléon","La prise de la Bastille","La mort de Louis XVI","Les États généraux"],1,"14 juillet 1789 : la prise de la Bastille symbolise la fin de l'absolutisme."],
["En quelle année Louis XVI a-t-il été guillotiné ?","m",["1789","1791","1793","1795"],2,"21 janvier 1793, place de la Révolution (place de la Concorde)."],
["Qui a inventé la guillotine ?","m",["Guillotin lui-même","Le docteur Louis avec Guillotin","Un charpentier allemand","Robespierre"],1,"Le Dr Antoine Louis en dessina les plans, Guillotin la fit adopter par humanité."],
["Comment appelait-on les révolutionnaires les plus radicaux ?","m",["Les Girondins","Les Feuillants","Les Jacobins","Les Cordeliers"],2,"Les Jacobins, menés par Robespierre, dominèrent la Convention en 1793-94."],
["Quelle est la devise républicaine française née de la Révolution ?","o","Liberté, Égalité, Fraternité","Elle apparaît en 1790, popularisée par Robespierre."],
["Quel révolutionnaire fut assassiné dans son bain par Charlotte Corday ?","o","Jean-Paul Marat","13 juillet 1793, événement immortalisé par le tableau de David."],
["Combien de temps a duré la Terreur ?","m",["6 mois","1 an","2 ans","5 ans"],1,"De septembre 1793 à juillet 1794 (chute de Robespierre)."],
["Qui a écrit la Déclaration des droits de l'homme et du citoyen ?","m",["Robespierre seul","L'Assemblée nationale","Napoléon","Louis XVI"],1,"Adoptée par l'Assemblée constituante le 26 août 1789."],
["Quelle reine fut décapitée le 16 octobre 1793 ?","m",["Marie de Médicis","Marie Leszczyńska","Marie-Antoinette","Anne d'Autriche"],2,"Marie-Antoinette, épouse de Louis XVI, guillotinée à 37 ans."],
["Quel coup d'État de Napoléon met fin à la Révolution ?","m",["18 brumaire","9 thermidor","10 août","Vendémiaire"],0,"Le 18 brumaire an VIII (9 novembre 1799), Bonaparte prend le pouvoir."]
]},

{"t":"Napoléon Bonaparte","e":"👑","q":[
["Sur quelle île Napoléon est-il né en 1769 ?","m",["Elbe","Sainte-Hélène","Corse","Sardaigne"],2,"Ajaccio, la Corse ayant été rattachée à la France l'année précédente."],
["En quelle année Napoléon s'est-il sacré empereur ?","m",["1799","1804","1810","1815"],1,"2 décembre 1804 à Notre-Dame, prenant la couronne des mains du pape Pie VII."],
["Quelle bataille marqua la défaite finale de Napoléon ?","m",["Iéna","Austerlitz","Waterloo","Trafalgar"],2,"18 juin 1815, face à Wellington et Blücher, en Belgique actuelle."],
["Sur quelle île Napoléon est-il mort en 1821 ?","m",["Elbe","Sainte-Hélène","Corse","Malte"],1,"Sainte-Hélène, dans l'Atlantique Sud, où il fut exilé après Waterloo."],
["Comment s'appelle le code juridique instauré par Napoléon en 1804 ?","o","Le Code civil (ou Code Napoléon)","Toujours en vigueur en France, il a inspiré plus de 70 pays."],
["Quel amiral anglais a battu Napoléon à Trafalgar en 1805 ?","o","L'amiral Nelson","Nelson mourut lors de sa victoire, empêchant l'invasion de l'Angleterre."],
["Comment s'appelait la première épouse de Napoléon ?","m",["Marie-Louise","Joséphine","Désirée","Pauline"],1,"Joséphine de Beauharnais, veuve, épousée en 1796, répudiée en 1810."],
["Quelle bataille de 1805 est considérée comme le chef-d'œuvre de Napoléon ?","m",["Marengo","Austerlitz","Wagram","Iéna"],1,"Austerlitz (bataille des Trois Empereurs) écrasa l'Autriche et la Russie."],
["Combien de frères et sœurs Napoléon a-t-il placés sur des trônes européens ?","m",["2","4","6","8"],2,"6 : Joseph (Naples/Espagne), Louis (Hollande), Jérôme (Westphalie), Élisa, Pauline, Caroline."],
["Quel maréchal fut le plus brave des braves selon Napoléon ?","m",["Murat","Ney","Davout","Masséna"],1,"Michel Ney reçut ce titre à la Moskova. Il fut fusillé après Waterloo."]
]},

{"t":"L'Égypte ancienne","e":"🏺","q":[
["Sur quel fleuve s'est développée la civilisation égyptienne ?","m",["Le Congo","Le Nil","L'Euphrate","Le Niger"],1,"Le Nil et ses crues annuelles fertilisaient les terres, source de vie."],
["Quel dieu égyptien avait une tête de chacal ?","m",["Horus","Osiris","Anubis","Thot"],2,"Anubis, dieu de la momification et guide des âmes vers l'au-delà."],
["Quelle pyramide égyptienne est la plus grande ?","m",["Khéops","Khéphren","Mykérinos","Djéser"],0,"La pyramide de Khéops (Gizeh) mesurait 146 m, seule merveille antique subsistante."],
["Quelle reine égyptienne fut la maîtresse de César puis d'Antoine ?","m",["Néfertiti","Cléopâtre","Hatchepsout","Néfertari"],1,"Cléopâtre VII (69-30 av. J.-C.), dernière pharaonne, se suicida par morsure de cobra."],
["Comment s'appelait l'écriture des scribes égyptiens ?","o","Les hiéroglyphes","Écriture pictographique, environ 700 signes de base."],
["Quelle pierre a permis à Champollion de déchiffrer les hiéroglyphes ?","o","La pierre de Rosette","Découverte en 1799, elle porte le même texte en 3 écritures dont le grec."],
["Combien d'années a duré la civilisation égyptienne (période pharaonique) ?","m",["500 ans","1 500 ans","3 000 ans","5 000 ans"],2,"Environ 3 000 ans, de -3150 à -30 av. J.-C. (conquête romaine)."],
["Quel pharaon est le plus célèbre pour sa tombe retrouvée intacte en 1922 ?","m",["Ramsès II","Toutânkhamon","Séthi Iᵉʳ","Akhenaton"],1,"Toutânkhamon régna 10 ans, sa tombe fut découverte intacte par Howard Carter."],
["Comment appelait-on la femme du pharaon ?","m",["La reine","La grande épouse royale","La sultane","La princesse"],1,"La grande épouse royale portait le titre officiel de mère du prochain pharaon."],
["Quel dieu égyptien à tête de faucon incarnait le pharaon ?","m",["Anubis","Rê","Horus","Seth"],2,"Horus, dieu du ciel, dont le pharaon était l'incarnation vivante sur Terre."]
]},

{"t":"La Seconde Guerre mondiale","e":"⚔️","q":[
["En quelle année a commencé la Seconde Guerre mondiale ?","m",["1914","1936","1939","1941"],2,"1er septembre 1939 avec l'invasion de la Pologne par l'Allemagne."],
["Quelle est la date du débarquement en Normandie ?","m",["6 juin 1944","8 mai 1945","11 novembre 1943","1 septembre 1939"],0,"D-Day : 6 juin 1944, plus grande opération amphibie de l'histoire."],
["Quelle ville japonaise fut détruite en premier par une bombe atomique ?","m",["Tokyo","Hiroshima","Nagasaki","Osaka"],1,"6 août 1945, Hiroshima. Nagasaki fut bombardée 3 jours plus tard."],
["Qui dirigeait la Résistance française depuis Londres ?","m",["Jean Moulin","Charles de Gaulle","Pierre Mendès France","Léon Blum"],1,"Le général de Gaulle lança l'Appel du 18 juin 1940 sur la BBC."],
["Comment s'appelait le plan d'invasion nazi de l'URSS en 1941 ?","o","L'opération Barbarossa","Plus grande opération militaire de l'histoire, 3 millions d'hommes."],
["Quel camp d'extermination est le symbole de la Shoah ?","o","Auschwitz-Birkenau","1,1 million de victimes, principalement des Juifs, dans ce camp polonais."],
["Combien de morts a fait la Seconde Guerre mondiale ?","m",["10 millions","30 millions","60 millions","150 millions"],2,"Environ 60 millions de morts, dont 40 millions de civils."],
["Qui étaient les Alliés principaux ?","m",["USA-URSS-Chine","USA-UK-URSS-France","Allemagne-Italie-Japon","USA-Allemagne-URSS"],1,"Les 4 grands Alliés étaient USA, Royaume-Uni, URSS et France Libre."],
["Quelle bataille de 1942 stoppa l'avancée nazie à l'Est ?","m",["Berlin","Moscou","Stalingrad","Koursk"],2,"Stalingrad (aujourd'hui Volgograd) : victoire soviétique majeure, 2 millions de morts."],
["Qui a signé la reddition allemande le 8 mai 1945 ?","m",["Hitler","Göring","Keitel","Dönitz"],2,"Wilhelm Keitel signa la capitulation à Berlin (Hitler s'était suicidé le 30 avril)."]
]},

{"t":"Les rois de France","e":"👑","q":[
["Qui est le premier roi de France officiellement reconnu ?","m",["Charlemagne","Clovis","Hugues Capet","Philippe Auguste"],1,"Clovis, roi des Francs saliens, baptisé à Reims vers 496."],
["Quel roi est appelé le Roi-Soleil ?","m",["Louis XIII","Louis XIV","Louis XV","Louis XVI"],1,"Louis XIV régna 72 ans (1643-1715), le plus long règne d'Europe."],
["Où Louis XIV a-t-il construit son palais ?","m",["Fontainebleau","Chambord","Versailles","Vaux-le-Vicomte"],2,"Versailles fut construit de 1661 à 1715, symbole de l'absolutisme."],
["Quel roi a mis fin aux guerres de religion par l'édit de Nantes ?","m",["Henri III","Henri IV","Louis XIII","François Iᵉʳ"],1,"Henri IV signa l'édit en 1598, garantissant la liberté de culte aux protestants."],
["Combien de rois de la dynastie capétienne se sont succédé ?","o","Environ 30 rois sur 8 siècles","Les Capétiens régnèrent de 987 (Hugues Capet) à 1848 (Louis-Philippe)."],
["Quel roi a été surnommé le Bien-Aimé puis le Mal-Aimé ?","o","Louis XV","Ses débuts populaires furent ternis par sa vie privée et les guerres."],
["Quel roi a construit Chambord ?","m",["Louis XI","Charles VIII","François Iᵉʳ","Henri II"],2,"François Iᵉʳ lança la construction en 1519 en pleine Renaissance."],
["Quel roi capétien a été guillotiné en 1793 ?","m",["Louis XV","Louis XVI","Charles X","Louis-Philippe"],1,"Louis XVI fut jugé et exécuté par la Convention nationale."],
["Combien d'épouses eut Henri VIII d'Angleterre ?","m",["3","6","8","12"],1,"6 épouses (dont 2 décapitées) : source des schismes anglicans."],
["Quel roi français a été surnommé le fondateur de Paris ?","m",["Louis IX","Philippe Auguste","François Iᵉʳ","Henri IV"],1,"Philippe Auguste (règne 1180-1223) fortifia et pava Paris, y construisit le Louvre."]
]},

{"t":"La Rome antique","e":"🏛️","q":[
["Selon la légende, qui a fondé Rome en 753 av. J.-C. ?","m",["César","Romulus","Auguste","Énée"],1,"Romulus tua son frère Rémus et fonda la ville sur le mont Palatin."],
["Qui a été assassiné aux ides de mars 44 av. J.-C. ?","m",["Auguste","Jules César","Néron","Caligula"],1,"Jules César fut poignardé au Sénat le 15 mars 44 av. J.-C. par 23 conjurés."],
["Comment appelait-on la langue parlée à Rome ?","m",["Le grec","Le latin","L'italien","L'étrusque"],1,"Le latin, langue mère des langues romanes (français, italien, espagnol...)."],
["Quel général carthaginois traversa les Alpes avec des éléphants ?","m",["Scipion","Hannibal","Hamilcar","Hasdrubal"],1,"Hannibal traversa les Alpes en 218 av. J.-C. avec 37 éléphants."],
["Combien de temps a duré l'Empire romain d'Occident ?","m",["200 ans","500 ans","1 000 ans","1 500 ans"],1,"De -27 av. J.-C. à 476 ap. J.-C., soit 503 ans."],
["Qui était le premier empereur romain ?","o","Auguste (Octavien)","Neveu de César, il prit le titre d'Auguste en -27 av. J.-C."],
["Comment s'appelait le port de Rome à l'embouchure du Tibre ?","o","Ostie","Ostia Antica servait au ravitaillement en blé de Rome."],
["Quel empereur romain était réputé fou et incendiaire ?","m",["Caligula","Néron","Commode","Tibère"],1,"Néron accusé (à tort probablement) d'avoir incendié Rome en 64 ap. J.-C."],
["Combien d'habitants comptait Rome à son apogée ?","m",["100 000","500 000","1 million","3 millions"],2,"Rome atteignit 1 million au IIᵉ siècle, cité la plus peuplée du monde antique."],
["Quel mur romain traversait le nord de l'Angleterre ?","m",["Le mur d'Antonin","Le mur d'Hadrien","Le mur de Sévère","Le mur de Trajan"],1,"Le mur d'Hadrien (117 km) marquait la frontière nord de l'Empire."]
]},

/* ==================== GÉOGRAPHIE ==================== */

{"t":"Les capitales du monde","e":"🌍","q":[
["Quelle est la capitale de l'Australie ?","m",["Sydney","Melbourne","Canberra","Perth"],2,"Canberra fut construite ex nihilo en 1913 pour départager Sydney et Melbourne."],
["Quelle est la capitale du Canada ?","m",["Toronto","Ottawa","Montréal","Vancouver"],1,"Ottawa fut choisie par la reine Victoria en 1857 pour son compromis anglais/français."],
["Quelle est la capitale du Brésil ?","m",["Rio","São Paulo","Brasília","Salvador"],2,"Brasília, construite en 1960 par Niemeyer, plateau central du pays."],
["Quelle est la capitale de la Turquie ?","m",["Istanbul","Ankara","Izmir","Bursa"],1,"Ankara fut préférée à Istanbul par Atatürk en 1923 pour marquer la rupture."],
["Quelle est la capitale du Kazakhstan ?","m",["Almaty","Astana","Tachkent","Bichkek"],1,"Astana (rebaptisée Nur-Sultan de 2019 à 2022) est la nouvelle capitale depuis 1997."],
["Quelle est la capitale de la Nouvelle-Zélande ?","o","Wellington","Contrairement à ce qu'on pense, ce n'est pas Auckland (plus grande ville)."],
["Quelle est la capitale de la Bolivie ?","o","Sucre (constitutionnelle) et La Paz (siège du gouvernement)","La Bolivie a deux capitales officielles depuis 1899."],
["Quelle est la capitale de la Corée du Sud ?","m",["Busan","Séoul","Incheon","Daegu"],1,"Séoul (10 millions d'habitants) est capitale depuis 1394."],
["Quelle capitale africaine est la plus haute du monde ?","m",["Addis-Abeba","La Paz","Quito","Lhassa"],0,"Addis-Abeba (Éthiopie) à 2 400 m d'altitude. La Paz est en Bolivie, pas en Afrique."],
["Quelle est la capitale de la Mongolie ?","m",["Ulan-Bator","Erdenet","Darkhan","Choibalsan"],0,"Oulan-Bator concentre près de la moitié de la population mongole."]
]},

{"t":"Les fleuves","e":"🏞️","q":[
["Quel est le plus long fleuve du monde ?","m",["Le Nil","L'Amazone","Le Mississippi","Le Yangtsé"],0,"Le Nil (6 650 km) devance l'Amazone (6 400 km), avec un débat scientifique."],
["Quel fleuve traverse Paris ?","m",["La Loire","La Seine","La Marne","L'Oise"],1,"La Seine traverse Paris sur 13 km, avec 37 ponts en ville."],
["Quel fleuve traverse Londres ?","m",["La Tamise","Le Rhin","La Meuse","L'Escaut"],0,"La Tamise (Thames) fait 346 km au total."],
["Quel fleuve traverse le Grand Canyon ?","m",["Le Rio Grande","Le Colorado","Le Mississippi","Le Missouri"],1,"Le Colorado a creusé le Grand Canyon pendant 6 millions d'années."],
["Quel fleuve d'Asie porte le surnom fleuve Jaune ?","m",["Le Yangtsé","Le Huang He","Le Gange","Le Mékong"],1,"Le Huang He tire son nom des sédiments jaunes de son bassin."],
["Quel fleuve européen forme la frontière naturelle entre France et Allemagne ?","o","Le Rhin","Le Rhin sépare les deux pays sur 190 km, avec Strasbourg comme grande ville."],
["Quel fleuve africain est le plus long après le Nil ?","o","Le Congo","4 700 km, deuxième débit mondial après l'Amazone."],
["Combien de pays traverse le Danube ?","m",["4","6","10","15"],2,"Le Danube traverse 10 pays, plus qu'aucun autre fleuve au monde."],
["Quel fleuve américain est chanté par Mark Twain ?","m",["Le Colorado","Le Mississippi","L'Hudson","Le Missouri"],1,"Le Mississippi (père des eaux) inspira Tom Sawyer et Huckleberry Finn."],
["Quel fleuve indien est sacré pour les hindous ?","m",["L'Indus","Le Gange","Le Brahmapoutre","Le Godavari"],1,"Le Gange, incarnation de la déesse Ganga, purifie selon l'hindouisme."]
]},

{"t":"Les océans et mers","e":"🌊","q":[
["Combien d'océans reconnaît-on officiellement ?","m",["3","4","5","7"],2,"5 océans depuis 2000 avec l'ajout de l'océan Austral autour de l'Antarctique."],
["Quel est le plus grand océan du monde ?","m",["Atlantique","Pacifique","Indien","Arctique"],1,"Le Pacifique couvre 30% de la surface terrestre, plus que toutes les terres émergées."],
["Quelle mer est en réalité le plus grand lac du monde ?","m",["Mer Noire","Mer d'Aral","Mer Caspienne","Mer Morte"],2,"La Caspienne, sans lien avec l'océan, est techniquement un lac salé."],
["Quelle est la mer la plus salée du monde ?","m",["Mer Rouge","Mer Morte","Grand Lac Salé","Mer Baltique"],1,"La mer Morte, 34% de salinité, permet de flotter sans effort."],
["Quel détroit sépare l'Europe de l'Afrique ?","m",["Le Bosphore","Gibraltar","Les Dardanelles","La Manche"],1,"Gibraltar (14 km au plus étroit) relie Méditerranée et Atlantique."],
["Quelle est la profondeur maximale de l'océan ?","o","Environ 11 000 m (fosse des Mariannes)","Le Challenger Deep atteint 10 984 m dans le Pacifique."],
["Quelle mer sépare la Grèce de la Turquie ?","o","La mer Égée","Parsemée de 6 000 îles grecques."],
["Quelle mer intérieure a quasiment disparu à cause de l'irrigation ?","m",["Mer Morte","Mer Caspienne","Mer d'Aral","Mer Rouge"],2,"La mer d'Aral a perdu 90% de sa surface entre 1960 et 2010 (URSS)."],
["Quel océan borde l'ouest de l'Amérique du Sud ?","m",["Atlantique","Pacifique","Indien","Antarctique"],1,"Le Pacifique, avec le courant froid de Humboldt le long des côtes chiliennes."],
["Combien de mers séparent-elles l'Europe de l'Asie ?","m",["1","2","3","4"],2,"3 : la Méditerranée, la mer Noire et la mer Caspienne (frontière conventionnelle)."]
]},

{"t":"Les îles célèbres","e":"🏝️","q":[
["Quelle est la plus grande île du monde ?","m",["Madagascar","Bornéo","Groenland","Nouvelle-Guinée"],2,"Le Groenland (2,1 M km²), l'Australie étant un continent."],
["Quelle île abrite la statue du Christ Rédempteur ?","m",["Cuba","Manhattan","Rio (péninsule)","Aucune, c'est sur le continent"],3,"Le Christ Rédempteur est sur le Corcovado à Rio, sur le continent brésilien."],
["Quel archipel est situé à 900 km au large de l'Équateur ?","m",["Les Galápagos","Hawaï","Les Canaries","Les Açores"],0,"Les Galápagos ont inspiré Darwin pour sa théorie de l'évolution."],
["Combien d'îles compose l'archipel du Japon ?","m",["Environ 100","Environ 1 000","Environ 6 800","Environ 15 000"],2,"6 852 îles au total, mais 4 principales concentrent la population."],
["Quelle île de la Manche appartient à la France ?","m",["Jersey","Guernesey","Aucune","Toutes les îles anglo-normandes"],2,"Les îles anglo-normandes sont britanniques ; seul l'îlot des Ecréhous fait débat."],
["Quel volcan italien forme une île sicilienne ?","o","Le Stromboli","L'île du Stromboli abrite un volcan en éruption quasi permanente."],
["Quelle île grecque est célèbre pour ses maisons blanches et bleues ?","o","Santorin","Cette île volcanique de la mer Égée est l'une des plus photographiées au monde."],
["Quelle île abritait Napoléon en exil final ?","m",["Elbe","Corse","Sainte-Hélène","Martinique"],2,"Sainte-Hélène, île britannique de l'Atlantique Sud, exil final de 1815 à 1821."],
["Quelle île indonésienne abrite un dragon géant ?","m",["Bali","Java","Komodo","Sumatra"],2,"Le dragon de Komodo, plus grand lézard au monde (3 m), y vit à l'état sauvage."],
["Quelle île française est surnommée l'île intense ?","m",["La Réunion","La Martinique","La Guadeloupe","La Corse"],0,"La Réunion pour ses volcans, cirques et biodiversité concentrée."]
]},

{"t":"Les régions de France","e":"🇫🇷","q":[
["Combien de régions administratives compte la France métropolitaine ?","m",["13","18","22","27"],0,"13 régions depuis la réforme de 2016 (contre 22 avant)."],
["Quelle région française est la plus peuplée ?","m",["Île-de-France","Auvergne-Rhône-Alpes","Hauts-de-France","Occitanie"],0,"L'Île-de-France concentre 12 millions d'habitants, soit 18% de la population."],
["Quelle est la préfecture des Bouches-du-Rhône ?","m",["Aix","Marseille","Arles","Toulon"],1,"Marseille, préfecture depuis 1800."],
["Quelle région est célèbre pour ses châteaux de la Loire ?","m",["Bretagne","Centre-Val de Loire","Pays de la Loire","Nouvelle-Aquitaine"],1,"Le Centre-Val de Loire abrite Chambord, Chenonceau, Amboise..."],
["Quelle région française produit le champagne ?","m",["Bourgogne","Grand Est","Hauts-de-France","Alsace"],1,"L'AOC Champagne se trouve dans le Grand Est (Marne, Aube)."],
["Quelle est la plus petite région française par superficie ?","o","L'Île-de-France (hors DOM-TOM)","12 000 km², contre 84 000 km² pour la Nouvelle-Aquitaine."],
["Quelle région porte le nom d'un peuple celte ?","o","La Bretagne (Bretons)","Nom hérité des Bretons chassés d'Angleterre au Vᵉ siècle."],
["Quel est le plus grand département français en superficie ?","m",["Les Landes","La Gironde","La Guyane","L'Aveyron"],2,"La Guyane fait 83 000 km² (16% de la France métropolitaine)."],
["Quel département porte le numéro 75 ?","m",["Paris","Marseille","Lyon","Bordeaux"],0,"75 = Paris, dans l'ordre alphabétique des départements."],
["Combien de départements compte la France ?","m",["93","96","101","110"],2,"101 départements dont 5 d'outre-mer."]
]},

{"t":"Les frontières bizarres","e":"🗺️","q":[
["Quel pays est enclavé dans l'Afrique du Sud ?","m",["Le Swaziland","Le Lesotho","Le Botswana","Le Zimbabwe"],1,"Le Lesotho, entièrement entouré par l'Afrique du Sud."],
["Quel pays est enclavé dans l'Italie ?","m",["Malte","Andorre","Saint-Marin","Monaco"],2,"Saint-Marin, plus vieille république au monde, entourée par l'Italie."],
["Quelle enclave espagnole se trouve en Afrique du Nord ?","m",["Ceuta et Melilla","Tanger","Gibraltar","Casablanca"],0,"Ceuta et Melilla, sur la côte marocaine, sont espagnoles."],
["Quel pays est traversé par la ligne de l'équateur et donne son nom ?","o","L'Équateur","Le pays sud-américain tire son nom de sa position géographique."],
["Quel micro-État est enclavé dans Rome ?","o","Le Vatican","Le plus petit État du monde (0,44 km²), État souverain depuis 1929."],
["Quel pays a la frontière la plus longue avec la Chine ?","m",["Inde","Russie","Mongolie","Kazakhstan"],1,"La Russie partage 4 200 km de frontière avec la Chine."],
["Combien de pays sont sans accès à la mer ?","m",["12","24","44","62"],2,"44 pays enclavés (landlocked), dont 16 en Afrique et 18 en Europe."],
["Quel pays a la frontière la plus longue au monde ?","m",["Chine","Russie","Canada-USA","Brésil"],2,"La frontière Canada-USA fait 8 891 km, la plus longue au monde."],
["Combien de fois la frontière franco-espagnole traverse-t-elle Andorre ?","m",["0","1","2","3"],0,"Andorre ne partage aucune frontière avec la France ET l'Espagne en même temps."],
["Quel pays a le plus de voisins au monde ?","m",["Chine","Russie","Brésil","Allemagne"],1,"Russie et Chine sont ex-æquo avec 14 pays voisins chacun."]
]},

{"t":"Les mégapoles","e":"🏙️","q":[
["Quelle est la plus grande aire urbaine du monde ?","m",["Tokyo","Delhi","Shanghai","Mexico"],0,"Tokyo-Yokohama concentre 37 millions d'habitants, la plus grande mégapole."],
["Quelle ville chinoise dépasse 24 millions d'habitants ?","m",["Pékin","Shanghai","Guangzhou","Chongqing"],1,"Shanghai est la 2ᵉ ville la plus peuplée du monde."],
["Quelle capitale africaine est la plus peuplée ?","m",["Le Caire","Lagos","Kinshasa","Addis-Abeba"],2,"Kinshasa dépasse 15 millions d'habitants (mais Lagos est plus peuplée bien qu'ex-capitale)."],
["Quelle mégapole indienne est capitale ?","m",["Mumbai","Delhi","Kolkata","Chennai"],1,"Delhi (32 millions dans l'aire urbaine) est capitale de l'Inde."],
["Combien de mégapoles (>10M habitants) existent dans le monde ?","m",["10","20","33","50"],2,"Environ 33 mégapoles en 2024, contre 10 en 1990."],
["Quelle mégapole d'Amérique latine dépasse 21 millions ?","o","Mexico (ou São Paulo)","Mexico atteint 22 M, São Paulo 22 M, dans un mouchoir de poche."],
["Quelle mégapole est célèbre pour son smog ?","o","Delhi (ou Pékin)","Delhi et Pékin luttent contre une pollution atmosphérique extrême."],
["Quelle ville est appelée la Grosse Pomme ?","m",["Chicago","New York","Los Angeles","Miami"],1,"Big Apple = New York, surnom popularisé par les jockeys dans les années 1920."],
["Quelle mégapole du Bangladesh est parmi les plus denses au monde ?","m",["Chittagong","Dacca","Sylhet","Khulna"],1,"Dacca a 44 000 habitants/km², l'une des plus fortes densités urbaines mondiales."],
["Quelle ancienne capitale du Nigeria fut remplacée par Abuja ?","m",["Ibadan","Lagos","Kano","Port Harcourt"],1,"Lagos, capitale jusqu'en 1991, reste la ville économique et la plus peuplée."]
]},

/* ==================== SCIENCES ==================== */

{"t":"L'astronomie","e":"🔭","q":[
["Combien de planètes composent le système solaire ?","m",["7","8","9","12"],1,"8 planètes depuis 2006 (Pluton reclassée en planète naine)."],
["Quelle est la planète la plus proche du Soleil ?","m",["Vénus","Mercure","Mars","Terre"],1,"Mercure orbite à 58 millions de km du Soleil."],
["Quelle planète est la plus grosse du système solaire ?","m",["Jupiter","Saturne","Neptune","Uranus"],0,"Jupiter (139 000 km de diamètre) pourrait contenir toutes les autres planètes."],
["À quelle distance se trouve la Lune de la Terre ?","m",["100 000 km","384 000 km","1 million km","10 millions km"],1,"En moyenne 384 400 km, ~30 fois le diamètre terrestre."],
["Quelle galaxie contient notre système solaire ?","o","La Voie lactée","Environ 200-400 milliards d'étoiles réparties en spirale."],
["Quelle est l'étoile la plus proche du Soleil ?","o","Proxima Centauri (4,24 années-lumière)","Étoile naine rouge du système Alpha Centauri."],
["Combien de temps met la lumière du Soleil pour atteindre la Terre ?","m",["1 s","8 min","1 h","1 jour"],1,"8 min 20 s pour parcourir 150 millions de km à 300 000 km/s."],
["Quel télescope spatial a remplacé Hubble en 2021 ?","m",["Kepler","James Webb","Spitzer","Chandra"],1,"Le JWST, situé à 1,5 million de km, observe en infrarouge."],
["Combien d'années-lumière fait le diamètre de la Voie lactée ?","m",["10 000","100 000","1 million","1 milliard"],1,"Environ 100 000 années-lumière de diamètre."],
["Comment s'appelle l'objet dense qui absorbe même la lumière ?","m",["Étoile à neutrons","Trou noir","Quasar","Nébuleuse"],1,"Un trou noir a une gravité si forte que rien ne peut s'en échapper, même la lumière."]
]},

{"t":"Le corps humain","e":"🧠","q":[
["Combien d'os le corps humain adulte possède-t-il ?","m",["150","206","250","300"],1,"206 os chez l'adulte, contre 270 à la naissance (fusion progressive)."],
["Quel est l'organe le plus lourd du corps humain ?","m",["Le cerveau","Le foie","La peau","Les poumons"],2,"La peau pèse 4 kg (15% du poids), c'est bien un organe."],
["Combien de litres de sang le corps humain contient-il ?","m",["2 L","5 L","8 L","12 L"],1,"5 à 6 litres chez l'adulte, soit 7-8% du poids corporel."],
["Combien de neurones le cerveau humain possède-t-il ?","m",["1 milliard","10 milliards","86 milliards","200 milliards"],2,"86 milliards de neurones, avec 100 000 milliards de connexions synaptiques."],
["Quel est le muscle le plus puissant du corps humain ?","m",["Le biceps","Le quadriceps","Le masséter","Le grand fessier"],2,"Le masséter (mâchoire) peut exercer 90 kg de pression par cm²."],
["Quel est l'os le plus long du corps humain ?","o","Le fémur","Il représente 25% de notre taille, environ 45 cm chez l'adulte."],
["Combien de kilomètres de vaisseaux sanguins avons-nous ?","o","Environ 100 000 km","Bout à bout, ils feraient 2,5 fois le tour de la Terre."],
["Quel est le plus petit os du corps humain ?","m",["Le fémur","L'étrier (oreille)","Le sacrum","La rotule"],1,"L'étrier, dans l'oreille moyenne, mesure 3 mm."],
["Combien d'heures dort en moyenne un adulte ?","m",["5 h","7-8 h","10 h","12 h"],1,"7-8 heures optimales, mais dépend de l'âge et de l'individu."],
["Quelle proportion d'eau constitue le corps humain adulte ?","m",["30 %","45 %","60 %","80 %"],2,"60% environ chez l'adulte, jusqu'à 78% chez le nouveau-né."]
]},

{"t":"Les mathématiques","e":"🔢","q":[
["Quel nombre décimal représente Pi ?","m",["3,14","3,16","3,17","3,18"],0,"π ≈ 3,14159, rapport constant entre circonférence et diamètre d'un cercle."],
["Combien vaut le nombre d'or approximativement ?","m",["1,41","1,62","2,72","3,14"],1,"φ = (1+√5)/2 ≈ 1,618, présent dans l'art, l'architecture et la nature."],
["Quel mathématicien grec est le père de la géométrie ?","m",["Pythagore","Euclide","Thalès","Archimède"],1,"Euclide (IIIᵉ av. J.-C.) rédigea les Éléments, base de la géométrie."],
["Quelle est la seule série paire des nombres premiers ?","m",["Aucun","2 uniquement","Tous les nombres premiers sont impairs","2 et 6"],1,"2 est le seul nombre premier pair (tous les autres pairs sont divisibles par 2)."],
["Quel théorème lie les côtés d'un triangle rectangle ?","o","Le théorème de Pythagore","a² + b² = c², où c est l'hypoténuse."],
["Combien de faces a un icosaèdre ?","o","20 faces triangulaires","Un des 5 solides de Platon, très utilisé en géométrie 3D."],
["Quel mathématicien indien a créé un système décimal moderne ?","m",["Ramanujan","Aryabhata","Brahmagupta","Bhāskara"],1,"Aryabhata (Vᵉ siècle) a formalisé le zéro et le système décimal."],
["Que vaut 1 + 2 + 3 + ... + 100 ?","m",["5 000","5 050","10 000","10 100"],1,"5050, formule n(n+1)/2 découverte par Gauss à l'école à 9 ans."],
["Combien de dimensions décrit la géométrie euclidienne ?","m",["1","2","3","4"],2,"3 dimensions spatiales (longueur, largeur, hauteur)."],
["Qui a démontré le dernier théorème de Fermat en 1994 ?","m",["Perelman","Wiles","Grothendieck","Villani"],1,"Andrew Wiles a démontré xⁿ + yⁿ = zⁿ n'a pas de solution entière pour n>2."]
]},

{"t":"Les inventions","e":"💡","q":[
["Qui a inventé l'ampoule électrique commercialisable ?","m",["Franklin","Edison","Tesla","Bell"],1,"Edison a breveté l'ampoule à filament de carbone en 1879."],
["Quel Français a inventé la photographie en 1826 ?","m",["Daguerre","Niépce","Lumière","Bayard"],1,"Nicéphore Niépce a réalisé la première photo (Point de vue du Gras) en 1826."],
["Qui a inventé la première ligne téléphonique en 1876 ?","m",["Meucci","Bell","Edison","Marconi"],1,"Alexander Graham Bell a breveté le téléphone (Meucci l'avait imaginé avant)."],
["Quels frères ont projeté le premier film en 1895 ?","o","Les frères Lumière","Séance publique à Paris le 28 décembre 1895 (Sortie de l'usine Lumière)."],
["Qui a inventé le World Wide Web en 1989 ?","o","Tim Berners-Lee (au CERN)","Il conçut HTTP, HTML et le premier navigateur pour le CERN à Genève."],
["Qui a inventé la pénicilline ?","m",["Pasteur","Fleming","Koch","Curie"],1,"Alexander Fleming, découverte accidentelle en 1928 sur une boîte de Petri oubliée."],
["En quelle année a été inventé l'imprimé par Gutenberg ?","m",["1350","1450","1550","1650"],1,"Vers 1450, Gutenberg imprima la Bible à 42 lignes à Mayence."],
["Qui a inventé la dynamite en 1867 ?","m",["Nobel","Pasteur","Bell","Nietzsche"],0,"Alfred Nobel a inventé la dynamite avant de fonder le prix Nobel."],
["Qui a inventé la première machine à vapeur industrielle ?","m",["Papin","Watt","Newcomen","Trévithick"],1,"James Watt a perfectionné la machine à vapeur en 1769, révolutionnant l'industrie."],
["Qui a inventé l'aspirine ?","m",["Bayer (Hoffmann)","Pasteur","Lister","Ehrlich"],0,"Felix Hoffmann chez Bayer a synthétisé l'aspirine en 1897."]
]},

{"t":"La météorologie","e":"🌤️","q":[
["Quelle échelle mesure la force du vent ?","m",["Beaufort","Richter","Mercalli","Saffir"],0,"L'échelle Beaufort va de 0 (calme) à 12 (ouragan)."],
["Quel instrument mesure la pression atmosphérique ?","m",["Anémomètre","Baromètre","Hygromètre","Pluviomètre"],1,"Le baromètre, inventé par Torricelli en 1643."],
["Que mesure un hygromètre ?","m",["La chaleur","Le vent","L'humidité","La pluie"],2,"L'humidité relative de l'air, en pourcentage."],
["Quelle est la vitesse minimale d'un ouragan ?","m",["50 km/h","118 km/h","150 km/h","200 km/h"],1,"À partir de 118 km/h (catégorie 1 sur l'échelle Saffir-Simpson)."],
["Comment appelle-t-on un cyclone dans le Pacifique nord-ouest ?","o","Un typhon","Cyclone (Océan Indien), ouragan (Atlantique), typhon (Pacifique)."],
["Quel phénomène naturel a la vitesse de vent la plus élevée ?","o","La tornade (jusqu'à 500 km/h)","Le record est à 484 km/h à Oklahoma en 1999."],
["Combien de gouttes composent en moyenne un nuage cumulus ?","m",["1 million","1 milliard","1 000 milliards","Trop pour compter"],2,"Environ 1000 milliards de gouttelettes microscopiques."],
["Quelle est la température moyenne à la surface de la Terre ?","m",["10°C","15°C","20°C","25°C"],1,"Environ 15°C en moyenne globale."],
["Quel nom porte le vent chaud et sec des Alpes ?","m",["Le sirocco","Le mistral","Le foehn","La tramontane"],2,"Le foehn souffle sur le versant sous le vent des montagnes."],
["Comment se forme la grêle ?","m",["Pluie gelée","Neige tassée","Cristaux dans cumulonimbus","Vent glacial"],2,"Les gouttes montent et descendent dans un cumulonimbus, gelant en couches."]
]},

{"t":"L'évolution","e":"🧬","q":[
["Quel naturaliste a formulé la théorie de l'évolution en 1859 ?","m",["Lamarck","Darwin","Wallace","Mendel"],1,"Darwin publia L'Origine des espèces après son voyage sur le Beagle."],
["De quel primate descend l'homme moderne ?","m",["Du singe","D'un ancêtre commun avec les grands singes","Du chimpanzé","Du gorille"],1,"L'humain et les grands singes partagent un ancêtre commun il y a 7 millions d'années."],
["Il y a combien de temps est apparu Homo sapiens ?","m",["50 000 ans","300 000 ans","1 million d'années","5 millions d'années"],1,"Environ 300 000 ans en Afrique, selon les découvertes de Jebel Irhoud (Maroc)."],
["Quelle espèce humaine cousine a coexisté avec sapiens ?","m",["Neandertal","Denisova","Homo floresiensis","Toutes les précédentes"],3,"Sapiens, Neandertal, Denisova et Floresiensis se sont côtoyés il y a 40 000 ans."],
["Où fut découverte Lucy en 1974 ?","m",["Kenya","Éthiopie","Tanzanie","Afrique du Sud"],1,"Lucy (Australopithecus afarensis, 3,2 M années) à Hadar, Éthiopie."],
["Combien de temps ont régné les dinosaures ?","o","Environ 165 millions d'années","Du Trias (245 M) jusqu'à leur extinction il y a 66 M d'années."],
["Qu'est-ce qui a probablement causé l'extinction des dinosaures ?","o","L'impact d'un astéroïde (au Yucatán)","Cratère de Chicxulub, il y a 66 M d'années."],
["Quelle est la première forme de vie apparue sur Terre ?","m",["Bactéries","Poissons","Plantes","Vers"],0,"Des bactéries il y a 3,8 milliards d'années, dans les océans primitifs."],
["Combien de pourcentage d'ADN partageons-nous avec le chimpanzé ?","m",["50 %","75 %","90 %","98,8 %"],3,"98,8% d'ADN commun avec le chimpanzé, notre plus proche cousin."],
["Quel processus permet aux espèces de s'adapter à leur environnement ?","m",["La sélection artificielle","La sélection naturelle","La mutation aléatoire","Le hasard"],1,"Sélection naturelle : les individus les mieux adaptés survivent et se reproduisent."]
]},

/* ==================== ARTS & CULTURE ==================== */

{"t":"Les peintres impressionnistes","e":"🎨","q":[
["Qui a peint les Nymphéas ?","m",["Manet","Monet","Renoir","Degas"],1,"Claude Monet, série de 250 toiles peintes dans son jardin de Giverny."],
["Quel tableau a donné son nom au mouvement impressionniste ?","m",["Le déjeuner sur l'herbe","Impression, soleil levant","Le bal du Moulin de la Galette","La Grande Jatte"],1,"Impression, soleil levant de Monet (1872) fut moqué, donnant le nom au mouvement."],
["Quel peintre impressionniste est célèbre pour ses danseuses ?","m",["Manet","Degas","Renoir","Sisley"],1,"Edgar Degas peignit et sculpta obsessionnellement les ballerines de l'Opéra."],
["Quel peintre s'est coupé une oreille ?","m",["Van Gogh","Gauguin","Cézanne","Toulouse-Lautrec"],0,"Vincent van Gogh en 1888 à Arles, lors d'une crise après une dispute avec Gauguin."],
["Où Van Gogh a-t-il peint les Tournesols ?","m",["Amsterdam","Paris","Arles","Auvers"],2,"À Arles en 1888, série de 7 tableaux pour décorer la chambre de Gauguin."],
["Quel peintre polynésien est célèbre pour ses toiles de Tahiti ?","o","Paul Gauguin","Il quitta la France en 1891 pour vivre en Polynésie."],
["Où se trouvent les Nymphéas les plus célèbres à Paris ?","o","Musée de l'Orangerie","Deux salles ovales conçues par Monet lui-même, cadeau à la France en 1922."],
["Quel peintre pointilliste a peint La Grande Jatte ?","m",["Signac","Seurat","Cross","Pissarro"],1,"Georges Seurat, technique du divisionnisme (points de couleur juxtaposés)."],
["Quelle est la nationalité de Monet ?","m",["Italien","Français","Néerlandais","Espagnol"],1,"Claude Monet (1840-1926), Français, né à Paris."],
["Quel peintre a été surnommé le maître de la lumière ?","m",["Turner","Monet","Vermeer","Van Gogh"],0,"J.M.W. Turner, précurseur anglais de l'impressionnisme au XIXᵉ siècle."]
]},

{"t":"Le cinéma français","e":"🎬","q":[
["Quel film de Jean-Pierre Jeunet a triomphé en 2001 ?","m",["Les Bronzés","Amélie","Intouchables","La Haine"],1,"Amélie Poulain a fait 33 millions d'entrées dans le monde."],
["Quel réalisateur a fait Intouchables (2011) ?","o","Toledano et Nakache","Duo qui a écrit et réalisé ce film aux 19 millions d'entrées en France."],
["Quelle actrice française a un Oscar pour La Môme ?","m",["Marion Cotillard","Isabelle Adjani","Juliette Binoche","Catherine Deneuve"],0,"Marion Cotillard, Oscar 2008 pour son incarnation d'Édith Piaf."],
["Quel Français a réalisé Le Grand Bleu ?","m",["Luc Besson","Kassovitz","Jeunet","Ozon"],0,"Luc Besson, film culte de 1988 avec Jean Reno et Rosanna Arquette."],
["Quel film de 1995 dénonce la banlieue avec Vincent Cassel ?","o","La Haine (Mathieu Kassovitz)","Palme du meilleur réalisateur à Cannes 1995."],
["Quel réalisateur a fait Les Choristes ?","o","Christophe Barratier","Film de 2004 avec Gérard Jugnot, 8,5 millions d'entrées."],
["Quelle actrice française a joué dans Belle de Jour ?","m",["Bardot","Deneuve","Moreau","Rampling"],1,"Catherine Deneuve dans le film de Buñuel en 1967."],
["Quel Français a réalisé The Artist, Oscar 2012 ?","m",["Hazanavicius","Audiard","Klapisch","Chomet"],0,"Michel Hazanavicius, 5 Oscars dont Meilleur film pour ce muet noir & blanc."],
["Quel film français a le plus d'entrées en France ?","m",["La Grande Vadrouille","Bienvenue chez les Ch'tis","Intouchables","Astérix Mission Cléopâtre"],1,"Bienvenue chez les Ch'tis (2008) avec 20,4 millions d'entrées."],
["Quel réalisateur emblématique de la Nouvelle Vague est mort en 2022 ?","o","Jean-Luc Godard","À bout de souffle, Le Mépris... figure majeure du cinéma français."]
]},

{"t":"La musique classique","e":"🎼","q":[
["Quel compositeur autrichien a écrit La Symphonie n°40 ?","m",["Beethoven","Mozart","Haydn","Schubert"],1,"Wolfgang Amadeus Mozart en 1788, l'une de ses œuvres les plus jouées."],
["Combien de symphonies Beethoven a-t-il composées ?","m",["7","9","11","15"],1,"9 symphonies dont la 9ᵉ avec l'Ode à la joie (hymne européen)."],
["Quel Français a composé le Boléro ?","m",["Debussy","Ravel","Saint-Saëns","Fauré"],1,"Maurice Ravel en 1928, œuvre à motif répété 169 fois en crescendo."],
["Quel Italien a écrit Les Quatre Saisons ?","m",["Verdi","Vivaldi","Puccini","Rossini"],1,"Antonio Vivaldi, 4 concertos pour violon composés vers 1723."],
["Combien de touches un piano moderne possède-t-il ?","o","88 touches (52 blanches, 36 noires)","Standardisé au XIXᵉ siècle."],
["Comment appelle-t-on un chef d'orchestre en anglais ?","o","Conductor","Terme utilisé mondialement, du latin conducere (mener)."],
["Quel compositeur allemand est devenu sourd à la fin de sa vie ?","m",["Bach","Mozart","Beethoven","Wagner"],2,"Beethoven a composé sa 9ᵉ symphonie totalement sourd."],
["Quel opéra de Bizet a Carmen comme héroïne ?","m",["Aïda","Carmen","Tosca","La Traviata"],1,"Carmen (1875), l'un des opéras les plus joués au monde."],
["Quel violon est légendaire pour sa sonorité ?","m",["Stradivarius","Guarnerius","Amati","Tous les précédents"],3,"Ces trois luthiers italiens de Crémone (XVIIᵉ-XVIIIᵉ) ont créé les meilleurs violons."],
["Quel compositeur baroque allemand est mort en 1750 ?","m",["Vivaldi","Bach","Haendel","Telemann"],1,"Jean-Sébastien Bach, mort le 28 juillet 1750 à Leipzig."]
]},

{"t":"La littérature classique","e":"📚","q":[
["Qui a écrit Les Misérables ?","m",["Hugo","Zola","Balzac","Dumas"],0,"Victor Hugo en 1862, sur fond de la révolte de juin 1832."],
["Quel roman de Camus commence par Aujourd'hui, maman est morte ?","m",["La Peste","L'Étranger","La Chute","Le Premier Homme"],1,"L'Étranger (1942), roman phare de l'absurde camusien."],
["Qui a écrit Le Rouge et le Noir ?","m",["Stendhal","Balzac","Flaubert","Hugo"],0,"Stendhal en 1830, portrait de l'ascension de Julien Sorel."],
["Combien de tomes compte À la recherche du temps perdu de Proust ?","m",["3","5","7","10"],2,"7 tomes de Du côté de chez Swann au Temps retrouvé."],
["Quel écrivain a inventé le personnage de Sherlock Holmes ?","o","Arthur Conan Doyle","4 romans et 56 nouvelles publiés entre 1887 et 1927."],
["Qui a écrit Le Petit Prince ?","o","Antoine de Saint-Exupéry","Publié en 1943 à New York, traduit en plus de 500 langues."],
["Quel poète français a écrit Les Fleurs du mal en 1857 ?","m",["Verlaine","Rimbaud","Baudelaire","Mallarmé"],2,"Charles Baudelaire, condamné pour outrage aux bonnes mœurs à sa parution."],
["Qui a écrit Le Comte de Monte-Cristo ?","m",["Hugo","Dumas","Balzac","Sue"],1,"Alexandre Dumas en 1844, histoire d'Edmond Dantès et de sa vengeance."],
["Quel prix Nobel de littérature Français a écrit L'Étranger ?","m",["Sartre","Camus","Gide","Aragon"],1,"Albert Camus a reçu le Nobel en 1957 à 44 ans."],
["Qui a écrit Madame Bovary ?","m",["Zola","Maupassant","Balzac","Flaubert"],3,"Gustave Flaubert en 1857, procès pour immoralité, chef-d'œuvre du réalisme."]
]},

{"t":"L'architecture","e":"🏛️","q":[
["Quel architecte espagnol a conçu la Sagrada Familia ?","m",["Gaudí","Calatrava","Mies","Nouvel"],0,"Antoni Gaudí y a travaillé de 1883 jusqu'à sa mort en 1926. Toujours inachevée."],
["Quel Français a conçu la Pyramide du Louvre ?","m",["Le Corbusier","Perrault","Pei","Nouvel"],2,"Ieoh Ming Pei, architecte américain d'origine chinoise, inaugurée en 1989."],
["Quelle est la plus haute tour du monde ?","m",["Burj Khalifa","Merdeka 118","Shanghai Tower","One World Trade"],0,"Burj Khalifa à Dubaï, 828 m, achevée en 2010."],
["Quel architecte a créé le style Art nouveau à Bruxelles ?","m",["Guimard","Horta","Van de Velde","Ricardo Bofill"],1,"Victor Horta, maison Tassel (1893), premier bâtiment Art nouveau."],
["Qui a conçu l'Opéra Garnier à Paris ?","o","Charles Garnier","Inauguré en 1875, style éclectique typique du Second Empire."],
["Qui a construit la Tour Eiffel ?","o","Gustave Eiffel","Pour l'Exposition universelle de 1889, 300 m, plus haut monument du monde jusqu'en 1930."],
["Quel monument marque le point le plus haut de Rio de Janeiro ?","m",["Le Corcovado","Le Pain de Sucre","Le stade Maracanã","Le Théâtre municipal"],0,"Le Christ Rédempteur au sommet du Corcovado (710 m)."],
["Quel style architectural domine le Moyen Âge ?","m",["Roman puis gothique","Renaissance","Baroque","Classique"],0,"Roman du XIᵉ au XIIᵉ, puis gothique du XIIᵉ au XVᵉ siècle."],
["Combien de temps a duré la construction de Notre-Dame de Paris ?","m",["50 ans","100 ans","200 ans","500 ans"],2,"Environ 200 ans, de 1163 à 1345 pour l'essentiel."],
["Quel architecte suisse-français est le père du modernisme ?","m",["Le Corbusier","Mies van der Rohe","Wright","Aalto"],0,"Le Corbusier (Charles-Édouard Jeanneret) et ses 5 points d'une architecture nouvelle."]
]},

/* ==================== SPORTS ==================== */

{"t":"Le football","e":"⚽","q":[
["Combien de joueurs compose une équipe de foot sur le terrain ?","m",["10","11","12","15"],1,"11 joueurs par équipe, dont 1 gardien."],
["Quel pays a gagné le plus de Coupes du monde ?","m",["Allemagne","Argentine","Brésil","Italie"],2,"Le Brésil (5 titres : 1958, 62, 70, 94, 2002)."],
["Qui a marqué en 2018 le but de Coupe du monde le plus célèbre en France ?","m",["Griezmann","Mbappé","Pogba","Umtiti"],1,"Mbappé, mais surtout Pogba et Griezmann pour la finale contre la Croatie."],
["Combien de fois l'équipe de France a-t-elle gagné la Coupe du monde ?","m",["1","2","3","4"],1,"2 fois : 1998 (Zidane) et 2018 (Deschamps entraîneur)."],
["Quel joueur argentin a marqué la main de Dieu en 1986 ?","o","Diego Maradona","Contre l'Angleterre en quart de finale de Coupe du monde, main non sifflée."],
["Qui a marqué le but en or de la finale de l'Euro 2000 ?","o","David Trezeguet","But en or après une passe de Robert Pirès, France 2-1 Italie."],
["Combien de Ballons d'Or Messi a-t-il ?","m",["5","7","8","10"],2,"8 Ballons d'Or (record), le dernier en 2023."],
["Quel stade français a accueilli la finale de la Coupe du monde 1998 ?","m",["Vélodrome","Parc des Princes","Stade de France","Bollaert"],2,"Le Stade de France à Saint-Denis, inauguré en janvier 1998."],
["Combien de temps dure un match de foot ?","m",["80 min","90 min","120 min","2 heures"],1,"90 min en deux mi-temps de 45 min (+ arrêts de jeu)."],
["Qui a battu la France en finale de l'Euro 2016 ?","m",["Espagne","Portugal","Allemagne","Italie"],1,"Le Portugal (1-0, but d'Eder en prolongation) au Stade de France."]
]},

{"t":"Les Jeux olympiques","e":"🥇","q":[
["Tous les combien d'années ont lieu les Jeux olympiques d'été ?","m",["2 ans","4 ans","5 ans","8 ans"],1,"Tous les 4 ans, comme dans l'Antiquité grecque."],
["Où ont eu lieu les JO de 1900 et 2024 ?","o","Paris","Paris a accueilli les JO en 1900, 1924 et 2024."],
["Combien d'anneaux compose le logo olympique ?","m",["4","5","6","7"],1,"5 anneaux entrelacés symbolisant les 5 continents."],
["Où sont nés les Jeux olympiques antiques ?","o","Olympie (Grèce)","Premiers Jeux en -776 av. J.-C. en Élide."],
["Qui a rétabli les JO modernes en 1896 ?","m",["Pierre de Coubertin","Jacques Rogge","Thomas Bach","Avery Brundage"],0,"Pierre de Coubertin, Français, à Athènes."],
["Quel athlète noir a gagné 4 médailles d'or à Berlin en 1936 ?","o","Jesse Owens","Il humilia le régime nazi lors des JO d'Hitler."],
["Combien de médailles d'or Michael Phelps a-t-il ?","m",["18","23","28","32"],1,"23 médailles d'or, record absolu tous sports confondus."],
["Quelle discipline a été retirée des JO en 2020 puis réintégrée ?","m",["Le tir à l'arc","Le baseball","La lutte","Le curling"],1,"Le baseball, retiré en 2008 puis réintégré à Tokyo 2020."],
["Quels JO ont été annulés en 1940 et 1944 ?","o","Guerre mondiale","La Seconde Guerre mondiale a annulé Tokyo 1940 et Londres 1944."],
["Quel pays a boycotté les JO de Moscou en 1980 ?","m",["Chine","Cuba","USA","Iran"],2,"Les USA (et 65 autres pays) suite à l'invasion de l'Afghanistan par l'URSS."]
]},

{"t":"Le tennis","e":"🎾","q":[
["Combien de sets faut-il gagner en Grand Chelem hommes ?","m",["2","3","4","5"],1,"3 sets sur 5. Pour les femmes, 2 sur 3."],
["Quels sont les 4 tournois du Grand Chelem ?","o","Australie, Roland-Garros, Wimbledon, US Open","Un chelem = les 4 gagnés la même année."],
["Sur quel surface se joue Roland-Garros ?","m",["Gazon","Terre battue","Dur","Moquette"],1,"Terre battue, unique surface du Grand Chelem à Roland-Garros."],
["Quel joueur a gagné le plus de Grands Chelems hommes ?","m",["Federer","Nadal","Djokovic","Sampras"],2,"Novak Djokovic (24 titres), record homme."],
["Quel Français a gagné Roland-Garros en 1983 ?","o","Yannick Noah","Dernier Français à gagner Roland-Garros en simple hommes."],
["Combien de fois Rafael Nadal a-t-il gagné Roland-Garros ?","o","14 fois","Record absolu, roi de la terre battue de 2005 à 2022."],
["Quel score met un serveur à un point du set ?","m",["30-15","40-15","40-30","Match point"],2,"40-30 (ou 40-0), le point suivant peut clore le jeu."],
["Comment s'appelle un score de 40 partout au tennis ?","o","Égalité (deuce en anglais)","Il faut ensuite gagner 2 points d'affilée."],
["Quelle sœur Williams a le plus de Grands Chelems ?","m",["Venus","Serena","Elles ont autant","Aucune"],1,"Serena Williams (23 titres) contre 7 pour Venus."],
["Quel Suisse a été n°1 mondial 310 semaines ?","o","Roger Federer","Record de longévité, 5 années consécutives (2004-2008)."]
]},

/* ==================== POP CULTURE ==================== */

{"t":"Les jeux vidéo","e":"🎮","q":[
["Quel jeu de 1985 met en scène un plombier qui sauve une princesse ?","m",["Pac-Man","Donkey Kong","Super Mario Bros","Sonic"],2,"Super Mario Bros sur NES, sauvé la princesse Peach de Bowser."],
["Quel jeu de construction en blocs est le plus vendu au monde ?","m",["Tetris","Fortnite","Minecraft","GTA V"],2,"Minecraft, plus de 300 millions d'exemplaires vendus."],
["Quel jeu japonais suit un hérisson bleu ultra-rapide ?","m",["Mario","Sonic","Mega Man","Crash"],1,"Sonic the Hedgehog, mascotte de SEGA depuis 1991."],
["Quel jeu de 1996 a inventé le survival horror ?","m",["Silent Hill","Alone in the Dark","Resident Evil","Fatal Frame"],2,"Resident Evil (Capcom) sur PlayStation, référence absolue."],
["Quel jeu a popularisé le battle royale en 2017 ?","m",["PUBG","Fortnite","Apex Legends","Call of Duty"],1,"Fortnite Battle Royale, sorti après PUBG mais rendu mainstream."],
["Quel jeu d'arcade de 1980 met en scène un personnage jaune mangeur de pastilles ?","o","Pac-Man","Créé par Toru Iwatani chez Namco, il inspira toute une culture."],
["Quelle console portable Nintendo a révolutionné le jeu mobile en 1989 ?","o","La Game Boy","118 millions d'unités vendues, lancée avec Tetris."],
["Quel studio français a créé Assassin's Creed ?","m",["Arkane","Ubisoft","Dontnod","Quantic Dream"],1,"Ubisoft Montréal a sorti Assassin's Creed en 2007."],
["Quel jeu ouvert de 2017 a redéfini le genre avec Link ?","m",["Skyrim","Elden Ring","Zelda Breath of the Wild","Horizon"],2,"BOTW sur Nintendo Switch, considéré comme une révolution du jeu ouvert."],
["Quelle franchise de jeu japonaise créée en 1996 met en scène des monstres à capturer ?","m",["Digimon","Pokémon","Yu-Gi-Oh","Bakugan"],1,"Pokémon Rouge/Bleu sur Game Boy, saga de plus de 480 M d'exemplaires."]
]},

{"t":"Star Wars","e":"⚔️","q":[
["Qui a créé la saga Star Wars ?","m",["Spielberg","Lucas","Kubrick","Cameron"],1,"George Lucas, dont Un nouvel espoir sortit en 1977."],
["Quel personnage a la célèbre réplique Je suis ton père ?","m",["Yoda","Dark Vador","Obi-Wan","Palpatine"],1,"Dark Vador à Luke Skywalker dans L'Empire contre-attaque (1980)."],
["Comment s'appelle l'arme laser des Jedi ?","o","Le sabre laser","Arme signature des chevaliers Jedi et des Sith."],
["Quel est le vrai nom de Dark Vador ?","o","Anakin Skywalker","Ancien Jedi passé du côté obscur, père de Luke et Leia."],
["De quelle espèce est Yoda ?","m",["Wookiee","Ewok","Espèce inconnue","Jawa"],2,"L'espèce de Yoda n'a jamais été nommée officiellement dans le canon Star Wars."],
["Sur quelle planète a grandi Luke Skywalker ?","m",["Tatooine","Naboo","Coruscant","Endor"],0,"Tatooine, planète désertique à deux soleils."],
["Combien de films compose la saga Skywalker (trilogies) ?","m",["6","9","10","12"],1,"9 films de la saga principale, de La Menace fantôme à L'Ascension de Skywalker."],
["Comment s'appelle le vaisseau de Han Solo ?","o","Le Faucon Millenium","Vaisseau corellien modifié, kessel run en moins de 12 parsecs."],
["Qui joue Han Solo dans les films originaux ?","m",["Mark Hamill","Harrison Ford","Ewan McGregor","Alec Guinness"],1,"Harrison Ford, rôle culte qui a lancé sa carrière."],
["Quel jour est officiellement le Star Wars Day ?","m",["1er mai","4 mai","25 mai","4 juillet"],1,"4 mai, jeu de mots May the Fourth be with you (May the Force be with you)."]
]},

{"t":"Disney","e":"🏰","q":[
["Quelle est la première princesse Disney ?","m",["Cendrillon","Blanche-Neige","Aurore","Belle"],1,"Blanche-Neige et les 7 Nains, premier long-métrage Disney en 1937."],
["Combien de nains apparaissent dans Blanche-Neige ?","m",["5","7","9","12"],1,"7 nains : Prof, Timide, Grincheux, Joyeux, Simplet, Dormeur, Atchoum."],
["Dans quel film le lion Simba grandit-il ?","m",["Le Livre de la Jungle","Le Roi Lion","Madagascar","Tarzan"],1,"Le Roi Lion (1994), inspiré de Hamlet."],
["Quel dessin animé Disney de 2013 avec Elsa a battu tous les records ?","m",["Raiponce","Rebelle","La Reine des neiges","Vaiana"],2,"La Reine des Neiges (Frozen), record de recettes pour un film d'animation."],
["Dans quel film joue Nemo ?","m",["Le Monde de Nemo","Bambi","Coco","Cars"],0,"Le Monde de Nemo (2003), Pixar."],
["Qui a créé la souris Mickey ?","o","Walt Disney (dessinée par Ub Iwerks)","Apparition en 1928 dans Steamboat Willie."],
["Combien de parcs Disneyland existent dans le monde ?","o","6 parcs Disneyland","Californie, Floride, Tokyo, Paris, Hong Kong, Shanghai."],
["Quelle est la première production Pixar ?","m",["Toy Story","1001 pattes","Monstres et Cie","Ratatouille"],0,"Toy Story (1995), premier long-métrage d'animation 3D."],
["Quel personnage Disney chante Libérée, délivrée ?","m",["Anna","Elsa","Ariel","Belle"],1,"Elsa dans La Reine des Neiges, chanson oscarisée en 2014."],
["Quelle chaîne Disney a racheté LucasFilm en 2012 ?","m",["Disney","Pixar","Marvel","Fox"],0,"Disney, pour 4 milliards de dollars, incluant Star Wars et Indiana Jones."]
]}

]
