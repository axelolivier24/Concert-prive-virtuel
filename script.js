// Configuration & State
const CONFIG = {
    girlName: "Livia",
    yourName: "Axel",
    playlist: [
        {
            title: "Le Temps",
            artist: "Tayc",
            src: "music/02 - Le temps.mp3",
            color: "#7b2cbf"
        },
        {
            title: "Umbrella",
            artist: "Tayc",
            src: "music/05 - Umbrella.mp3",
            color: "#3a86ff"
        },
        {
            title: "Le Miel",
            artist: "Tayc",
            src: "music/07 - Le miel.mp3",
            color: "#ffbe0b"
        },
        {
            title: "N'y pense plus",
            artist: "Tayc",
            src: "music/09 - N'y pense plus.mp3",
            color: "#ff006e"
        },
        {
            title: "Comme Toi",
            artist: "Tayc",
            src: "music/10 - Comme toi.mp3",
            color: "#8338ec"
        },
        {
            title: "African Sugar",
            artist: "Tayc",
            src: "music/13 - African Sugar (avec Tiwa Savage).mp3",
            color: "#fb5607"
        },
        {
            title: "Toxic Boy",
            artist: "Tayc",
            src: "music/21 - Toxic boy.mp3",
            color: "#e63946"
        },
        {
            title: "I Love You",
            artist: "Dadju",
            src: "music/Dadju - I love you (1).mp3",
            color: "#f72585"
        },
        {
            title: "Le Contrat",
            artist: "Dadju",
            src: "music/Dadju - Le contrat.mp3",
            color: "#4361ee"
        }
    ],
    message: `
        <h2 style="font-family: 'Playfair Display', serif; margin-bottom: 1rem; color: var(--secondary-color);">Bienvenue Livia</h2>
        <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 15px;">
            En ce 14 Février 2026, voici une expérience exclusive tirée de ta wishlist.
        </p>
        <p style="font-size: 1rem; line-height: 1.6; color: rgba(255,255,255,0.9);">
            Ce concert interactif est là pour t'accompagner. Profite de chaque note, tu n'es pas seule.
            Détends-toi et laisse la musique de Tayc t'envelopper.
        </p>
        <div style="margin-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 10px;">
            <p style="font-size: 0.9rem; font-style: italic; opacity: 0.7;">
                - Une attention pensée pour toi -
            </p>
        </div>
    `
};

const state = {
    currentSongIndex: 0,
    isPlaying: false,
    cameraView: 'front', // front, side, top, free
    particlesActive: true, // Default ON
    candlesActive: true,   // Default ON
    isMobile: window.innerWidth < 768
};

// Lyrics Data - Paroles complètes pour chaque chanson
const SONG_LYRICS = {
    "Le Temps": [
        "Hi", "Hi-hi, hi, hi-hi", "Oh, oh, oh", "Taykee di Taykee",
        "Manedo, manedo, manedo, manedo, manedo, manedo, manedo, manedo",
        "Mami oh, mami oh, mami oh, mami oh, mami oh, mami oh, mami oh",
        "Oh le temps, le temps m'a réparé",
        "Plus rien n'est comme avant, quelqu'un m'a déjà soigné",
        "Oh, oh, le vent, le vent a bien tourné",
        "Ne gaspille pas mon temps, une autre a su me soigner",
        "Toi là, tu disparais sans laisser un mot",
        "T'as préféré fuir comme un enfant (enfant)",
        "Partir sans te retourner",
        "J't'ai prêté mon cœur et tu lui as donné ton dos",
        "Toi tu m'as fait gaspiller mon temps (mon temps)",
        "Tu n'm'as pas laissé parler (ah, hi)",
        "Et maintenant (maintenant)",
        "Tu reviens (tu reviens)",
        "Et comme avant (comme avant)",
        "Tu espères retrouver celui qui t'as aimé",
        "Celui avec qui t'as joué, ah",
        "Et maintenant, maintenant c'est toi qui veux parler",
        "Et toutes tes meilleures phrases tu veux les caler",
        "Ne gaspille pas mon temps, yeah, yeah",
        "Oh le temps, le temps m'a réparé",
        "Plus rien n'est comme avant, quelqu'un m'a déjà soigné",
        "Oh, oh, le vent, le vent a bien tourné",
        "Ne gaspille pas mon temps, une autre a su me soigner",
        "Ne me fais pas croire que j'n'ai pas fait ce qu'il faut (oh yeah, yeah)",
        "Moi je t'ai fait passer avant tout",
        "J'en ai perdu la raison",
        "Sans aucun remord, toi, t'as tout jeté à l'eau, oh, oh",
        "J'étais devenu accroc à ton goût",
        "Le goût de ton poison (eh, yeah)",
        "Mais maintenant, yeah (maintenant)",
        "Moi ça va (moi ça va)",
        "Avec toi, j'avais comme l'impression de devoir supplier",
        "Pour quelque chose que tu me dois, non",
        "Et maintenant toi tu veux enfin m'entendre (oh na, na)",
        "On s'est arrêté, tu veux reprendre",
        "Ne gaspille pas mon temps, non-non, non-non, non-non",
        "Oh le temps, le temps m'a réparé (oh, le temps)",
        "Plus rien n'est comme avant, quelqu'un m'a déjà soigné",
        "Oh, oh, le vent, le vent a bien tourné",
        "Ne gaspille pas mon temps, une autre a su me soigner",
        "Oh, yeah, yeah, yeah",
        "Manedo, manedo, manedo, manedo, manedo, manedo, manedo",
        "Mami oh, mami oh, mami oh, mami oh, mami oh, mami oh",
        "Oh je ne céderai pas, yeah",
        "Maneo, manedo, manedo, manedo, manedo, manedo, manedo",
        "Mami oh, mami oh, mami oh, mami oh, mami oh, mami oh",
        "Taykee di Taykee"
    ],
    "Umbrella": [
        "I need to call my boo", "Taykee de Taykee", "(Bomboclaat)",
        "Une nuit sans lay down", "Aucune nuit sans qu'on lay down",
        "Déshabille-toi dans l'Maybach, yeah", "Donne-toi dans l'Maybach, yeah",
        "T'aimes quand je lay down", "T'aimes aussi quand je paye tout",
        "C'est les plus beaux d'mes atouts", "Eh, je whine bien, je paye tout, avoue",
        "T'es qu'une amie, t'es qu'une amie, no",
        "Mais nous deux c'est so deep, ouais, nous deux c'est so deep (so deep)",
        "T'es qu'une amie, juste une amie, no",
        "Nous deux c'est so deep, ouais, nous deux c'est so deep",
        "T'es qu'une amie, oh, rien qu'une amie, yeah, yeah",
        "Et moi j'suis ton Black soulja (Black soulja, yeah, yeah)",
        "Frotte-moi sur du Leg Over (Leg Over)",
        "I need to call my boo",
        "T'es venue pour moi, ironie du sort", "J'suis venu pour toi", "Comme un umbrella",
        "Mets-moi sur ton corps, fais de moi ta, oui",
        "Pour moi, ironie du sort, j'suis venu pour toi",
        "Comme un umbrella", "Mets-moi sur ton corps si tu crains la pluie",
        "Mécano, eh", "T'es ma Cadillac, j'suis mécano, eh",
        "J't'offrirais le plus beaux des cadeaux, yeah",
        "J'suis le seul qui sait plier ton dos en 'chata (let's go)",
        "Mami, j'sais que t'aimes les bails 'chata",
        "Tony va s'occuper ton boom shaka (shaka)",
        "J'veux caresser ce corps sous une bonne shower (oh, baby)",
        "T'es qu'une amie, t'es qu'une amie, no",
        "Mais nous deux c'est so deep, ouais, nous deux c'est so deep",
        "T'es qu'une amie, juste une amie, no",
        "Nous deux c'est so deep, ouais, nous deux c'est so deep",
        "T'es qu'une amie, oh, rien qu'une amie, yeah, yeah",
        "Et moi j'suis ton Black soulja (Black soulja, yeah, yeah)",
        "Frotte-moi sur du Leg Over (Leg Over)",
        "I need to call my boo",
        "T'es venue pour moi, ironie du sort", "J'suis venu pour toi", "Comme un umbrella",
        "Mets-moi sur ton corps, fais de moi ta, oui",
        "Pour moi, ironie du sort, j'suis venu pour toi",
        "Comme un umbrella", "Mets-moi sur ton corps si tu crains la pluie",
        "Ironie du sort, j'suis venu pour toi", "Comme un umbrella",
        "Mets-moi sur ton corps si tu crains la pluie",
        "Ironie du sort, j'suis venu pour toi",
        "Comme un umbrella (Bomboclaat, yeah)"
    ],
    "Le Miel": [
        "J'aimerai faire couler le miel", "Couler le miel",
        "J'aimerai faire couler le miel", "Le miel",
        "Elle ne l'a jamais fait (yeah)", "Elle cherche le bon (yeah)",
        "Aucune de mes phrases sur elle ne fait effet (yeah)",
        "Et ça devient long (yeah, ayy)",
        "J'lui ai déjà parlé d'une vie de famille", "De vacances dans le Kentucky",
        "On dort dans le même lit, yeah", "Mais si j'essaie d'la ken j'suis cuit",
        "Donc m'la joue fine, ouais, je n'lui parle jamais d'ça",
        "Non, pas la moindre allusions", "Toute façon c'est mieux comme ça",
        "J'aimerai faire couler le miel", "Me loger en elle",
        "Sans qu'ça ne gâche tout, sans qu'ça ne gâche tout",
        "Ooh, ooh, ooh", "Couler le miel, uh", "Apaiser ma haine",
        "Sans qu'ça ne gâche tout, sans qu'ça ne gâche tout",
        "Ooh, ooh, ooh", "Oui, parle moi d'amour",
        "Oui, parle moi de l'acte et non du sentiment", "Yeah, yeah, yeah",
        "Oui, parle moi d'amour, yeah",
        "Mais parle moi de l'acte et non du sentiment",
        "Hahaha, sacrée soirée",
        "Non, mais arrête, je sais très bien qu'c'est ringard c'que je te dit",
        "On sait tous que de nos jours le sexe est devenue quelque chose de banal",
        "Et c'est just que pour moi c'est, c'est important",
        "Tu comprends (t'as totalement raison)",
        "C'est vrai (et toutes les filles devraient avoir ton mental)",
        "Ça m'soulage que tu penses comme ça",
        "Trop longtemps j'ai du faire ce-vi, ce-vi j'suis pas là pour ça, non",
        "Il est déjà minuit, et j'ai toujours pas vu un d'tes draps",
        "Trop longtemps j'ai du m'empêcher, j'ai trop souvent fait des efforts",
        "Clairement j'suis dans l'pêché, mais ton fessier vaut plus que de l'or",
        "Et j'attend qu'tu dors pour me consoler",
        "Mais tous mes crédits j'ai déjà consommé",
        "J'suis impossible à consoler",
        "Vaginalement inconsommable, tu es, inconsommable tu es, oh, oh-oh, oh woah, oh",
        "J'aimerai faire couler le miel", "Me loger en elle",
        "Sans qu'ça ne gâche tout, sans qu'ça ne gâche tout",
        "Ooh, ooh, ooh", "Couler le miel, uh (couler le miel)",
        "Appaiser ma haine (oh, oh, oh)",
        "Sans qu'ça ne gâche tout, sans qu'ça ne gâche tout",
        "(Yeah, yeah, yeah)", "Oui, parle moi d'amour",
        "Oui, parle moi de l'acte et non du sentiment", "Yeah, yeah, yeah",
        "Oui, parle moi d'amour, ooh, ooh, ooh",
        "Mais parle moi de l'acte et non du sentiment",
        "Voulez-vous coucher, voulez-vous coucher",
        "Je n'veux pas coucher, je n'veux pas coucher",
        "Voulez-vous coucher, voulez-vous coucher",
        "Je n'veux pas coucher, je n'veux pas coucher",
        "Voulez-vous coucher, voulez-vous coucher",
        "Je n'veux pas coucher, je n'veux pas coucher",
        "Oh, ooh-woah (ooh woah)", "Ooh-woah (ooh woah)", "Ooh-woah (ooh woah)",
        "Oh-oh, na-na-na", "J'aimerai faire couler le miel", "Couler le miel",
        "J'aimerai faire couler le miel", "Le miel",
        "J'aimerai faire couler le miel (honey)",
        "Couler le miel (honey, ooh, ooh, oh woah)",
        "Yeah, yeah, woo, woo, ooh, ooh"
    ],
    "N'y pense plus": [
        "Ne pense plus à lui, tu t'fais du mal, s'te plaît n'y pense plus",
        "Il a souillé ton âme, toi tu t'es battue",
        "Ton cœur est plus précieux que de l'or", "Ne pense plus à lui",
        "Pour un homme, tu n'veux plus voir le jour",
        "Des milliers d'entre eux rêves de te faire l'amour",
        "Ton corps est aussi beau que l'or (que l'or)",
        "Ymih, ymih, ymih, ymih", "Ymih, ymih, ymih, ymih",
        "Ymih, ymih, ymih, ymih", "Ymih, ymih, ymih, ymih",
        "Ymih, ymih, ymih, ymih", "Ymih, ymih, ymih, ymih (Taykee day taykee)",
        "Ymih, ymih, ymih, ymih", "Ymih, ymih",
        "Encore tu pleures pour une histoire de love",
        "Ils vont encore dire que Tayc n'parle que d'amour, oh d'amour",
        "Mais c'est toi qui demande à être consolée, yeah",
        "Moi j'suis ton ami et les amis font ça toujours donc on va parler",
        "Tu t'es pliée en quatre pour un salaud",
        "Et pour vous tu t'es donnée sans compter",
        "Lui il a planté le couteau et il a regardé ton sang couler",
        "Et depuis tu ne sors plus", "J'ai demandé, on m'a dit 'Tu ne manges plus'",
        "Mon avis tu voulais, oh",
        "Ne pense plus à lui, tu t'fais du mal, s'te plaît n'y pense plus",
        "Il a souillé ton âme, toi tu t'es battue",
        "Ton cœur est plus précieux que de l'or", "Ne pense plus à lui",
        "Pour un homme, tu n'veux plus voir le jour",
        "Des milliers d'entre eux rêves de te faire l'amour",
        "Ton corps est aussi beau que l'or (que l'or)",
        "Ymih, ymih, ymih, ymih", "Ymih, ymih, ymih, ymih",
        "Ymih, ymih, ymih, ymih", "Ymih, ymih, ymih, ymih",
        "Ymih, ymih, ymih, ymih", "Ymih, ymih, ymih, ymih",
        "Ymih, ymih, ymih, ymih", "Ymih, ymih",
        "Tu veux ta mort, tout ça pour un petit fils de- yeah, yeah",
        "J'n'aurais jamais pensé qu'une femme comme toi puisse tomber aussi bas",
        "Tu l'aimais, lui il t'as fais payer",
        "Aujourd'hui tu le maudis, moi c'est toi que je maudis et tu vas comprendre pourquoi",
        "Personne ne t'as forcé à rester, non non, personne ne t'as forcé à rester",
        "Tu étais tellement fier de vous, fier de vous",
        "Aucun homme ne pourra te faire tomber",
        "Non non, aucun homme ne pourra te faire tomber",
        "T'es la fille de ta mère, le bijoux de ton père (ne pense plus à lui)",
        "Ymih, ymih, ymih, ymih (il est qui)",
        "Ymih, ymih, ymih, ymih (il est qui pour te faire pleurer), ymih, ymih, ymih, ymih",
        "Ne pense plus à lui", "Ymih, ymih, ymih, ymih (il est qui)",
        "Ymih, ymih, ymih, ymih (il est qui pour te faire pleurer)",
        "Ymih, ymih, ymih, ymih", "Ymih, ymih, ymih, ymih",
        "Ymih, ymih, ymih, ymih", "Ymih, ymih, ymih, ymih",
        "Ymih, ymih, ymih, ymih", "Ymih, ymih, ymih, ymih",
        "Ymih, ymih, ymih, ymih", "Ymih, ymih"
    ],
    "Comme Toi": [
        "Oh-oh-oh, oh-oh woah, oh woah", "Taykee de Taykee", "(You love, yeah)",
        "Ça fait des mois qu'on a refait nos lifes, toi tu voulais que je reste tranquille (yeah)",
        "Avec toi, j'ai perdu beaucoup trop d'time, c'est c'que j'pensais avant ma nouvelle vie, yeah",
        "J'me suis mis avec une autre, yeah (yeah, yeah)",
        "Les sentiments sont là mais faut qu'je laisse tomber, yeah (ooh, ooh woah)",
        "Car elle n'est pas comme toi, non (ooh, ooh)", "Ooh, ooh-ooh",
        "Elle ne sait rien faire comme toi, non (ooh, na-na, na-na)", "Ooh, ooh-ooh",
        "Elle ne veut rien faire comme toi, non (ooh, na-na, na-na)", "Ooh, ooh-ooh",
        "Elle ne sait rien faire comme toi, non (ooh, na-na, na-na)",
        "Elle ne me touche pas comme toi, non",
        "Elle est bien mais elle n'est pas comme toi, non (ooh, na-na, na-na)",
        "On m'a dit \"ne compare pas la femme que tu as avec la femme que t'avais avant\"",
        "On m'a dit \"ne prends aucune décision à chaud",
        "Tayc n'fait pas ça, s'te plaît prend l'temps\" (oh na, na, yeah)",
        "Si j'me suis barré c'est d'ta faute, yeah (c'est pas ta faute, yeah)",
        "Tu m'as fait du sale mais j'donnerai tout pour rentrer, yeah, ayy (ooh, ooh, ooh)",
        "Car elle n'est pas comme toi, no, ooh-ooh, ooh-ooh, ooh-ooh, ooh-ooh, ooh",
        "Ooh, ooh-ooh (ooh)", "Elle ne sait rien faire comme toi, non (oh-oh, oh-oh)",
        "Ooh, ooh-ooh, elle ne veut rien faire comme",
        "Elle ne veut rien faire comme toi, non (ooh, na-na, na-na)", "Ooh, ooh-ooh",
        "Elle ne sait rien faire comme toi, non (ooh, na-na, na-na)",
        "Elle ne me touche pas comme toi, non (hey)",
        "Elle est bien mais elle n'est pas comme toi, non (comprends-moi si je rentre, yeah)",
        "Ooh, na-na, na-na", "Oh-oh, oh-oh (ooh, hey, woo)", "Ooh, na-na, na-na",
        "Ooh-ooh, ooh-ooh, ooh-ooh, ooh-ooh, ooh, ah-ah",
        "Ooh, na-na, na-na (ha, ha, ha)", "Ooh, na-na, na-na (ooh, baby)",
        "Ooh, na-na, na-na (ooh, ooh)", "Ooh, ooh-ooh (ooh na-na)",
        "Elle ne sait rien faire comme toi, non (ooh, na-na, na-na)",
        "Ooh, ooh-ooh (ooh na-na)",
        "Elle ne veut rien faire comme toi, non (ooh, na-na, na-na)", "Ooh, ooh-ooh",
        "Elle ne sait rien faire comme toi, non (ooh, na-na, na-na)",
        "Elle ne me touche pas comme toi, non",
        "Elle est bien mais elle n'est pas comme toi, non"
    ],
    "African Sugar": [
        "African lady, African sugar", "Tayc dey Tayc",
        "Yeah African sugar",
        "You're my African lady, African sugar",
        "You're my African lady, African sugar",
        "Baby you're my African lady, African sugar",
        "African bad girl, givin' them sugar",
        "African bad girl, givin' them fire",
        "Baby you're my African queen",
        "African lady, African sugar",
        "Et pour toi je commettrai le pire",
        "Mais ton cœur est blindé, il me connait déjà",
        "Forcément il a bloqué tout sentiment, oh il a bloqué tout sentiment",
        "Baby sugar, pourquoi me fuir? C'est pas moi le pire",
        "T'es arrivé de Lagos à 6h30 et j'étais là à l'heure",
        "De Lagos, t'es arrivé, ça a égayé mon cœur, pull up",
        "Je t'ai fait visiter le Grand Paris",
        "Pour toi j'ai payé, non, non je ne compte pas",
        "Selfie sur le plus grand des paris, on a tout flambé",
        "My woman, oh my love, crazy for your love",
        "Nobody oh, nobody oh, crazy for your love",
        "My baby sugar, ah, crazy for your love",
        "Nobody oh, nobody oh, crazy for your love",
        "African bad girl, givin' them sugar",
        "African bad girl, givin' them sugar",
        "Tiny waist, wild like cougar",
        "Get the money, that's my slogan",
        "Everything na collection",
        "Mo ti so fun e pe, o ma pe ko to ya mi",
        "This waist is expensive, ma pami",
        "Leave what you're doing wa bami oh",
        "But take permission", "Everyday I'll be your",
        "I'll be your private entertainer",
        "In between my thighs for dinner",
        "You already know, you already know",
        "Pe ke le, pe ke le, oh my God",
        "You got me speaking in tongues, baby",
        "You got me losing my mind, baby",
        "Pe ke le, pe ke le, oh my God",
        "My woman, oh my love, crazy for your love",
        "Nobody oh, nobody oh, crazy for your love (African woman)",
        "My baby sugar, ah, crazy for your love",
        "Nobody oh, nobody oh, crazy for your love",
        "African bad girl, givin' them sugar",
        "African bad girl, givin' them fire",
        "African bad girl, givin' them sugar",
        "African bad girl, givin' them fire",
        "(African lady oh, African sugar)",
        "(African lady oh, African sugar)",
        "African woman no, no, no, no, yeah",
        "African bad girl, givin' them fire"
    ],
    "Toxic Boy": [
        "Ouh-wo, ouh-wo", "Oh-wo, ouh", "Ouh-wo, ouh-wo", "Ouh-wo",
        "Tu m'as traité, tu m'as traité", "Tu m'as traité de tous les noms",
        "Mais tu m'as aimé, tu m'as aimé", "Mais tu n'as jamais su me le dire, non",
        "Oh, ouh, t'as tout gardé", "Dans ta tête, yeah",
        "Dans ta chambre, sur ta peau", "Toutes les lettres, elles sont gravées",
        "T'as trop chialé pour moi, payé pour moi",
        "Girl, I'm your toxic", "Girl, j'suis ton toxic boy",
        "Girl, I'm your toxic", "Girl, j'suis ton toxic boy",
        "Girl, I'm your toxic", "Pour toi je suis nocif, yeah-yeah",
        "Pour ta vie j'suis nocif, yeah", "Tu ne sais pas m'oublier",
        "Ouh-ouh, ouh-ouh-ouh, girl, I'm your toxic boy (shit)",
        "(Bam, bam, yeah)",
        "Tu n'as jamais oublié, hey, chacune des fois (no, no)",
        "Où ton corps et le mien ont frôlés la lune (yeah)",
        "Tu n'as jamais nié sur toi j'ai tous les droits",
        "Tu connais encore mon num' (mon num')",
        "Mon numéro (numéro)",
        "Sur WhatsApp t'as encore tous mes mémos (bitches ain't worth shit)",
        "J'suis encore dans tes memories (ouais, ouais, na, na)",
        "Tu m'appelais ton héro",
        "Toxic, j'suis ton toxic, toxic boy (toxic, j'suis ton toxic)",
        "Ouh, ouh, ouh, toxic, j'suis ton toxic, toxic boy (toxic, j'suis ton toxic)",
        "Ouh, ouh, ouh, toxic, j'suis ton toxic, toxic boy (I'm your toxic boy)",
        "Ouh, ouh, ouh, toxic, j'suis ton toxic, toxic boy (your toxic boy)",
        "Ouh-wo, ouh-wo, oh-wo, ouh toxic boy (your toxic boy)",
        "Ouh-wo, ouh-wo, oh-wo, ouh toxic boy (your toxic boy)",
        "Oh no-no, no-no", "Toxic, toxic boy", "Ouh-ouh, ouh-ouh-ouh, toxic boy",
        "Girl, I'm your toxic", "Girl, j'suis ton toxic boy",
        "Girl, I'm your toxic", "Girl, j'suis ton toxic boy",
        "Girl, I'm your toxic, ouh, ouh, ouh, ouh, ouh",
        "Pour toi je suis nocif, yeah-yeah", "Pour ta vie j'suis nocif mais",
        "Tu ne sais pas m'oublier",
        "Ouh-ouh, ouh-ouh-ouh, girl, I'm your toxic boy (girl, I'm your toxic boy)",
        "Oublies-moi si tu peux", "Aimes-en un autre si tu peux",
        "Et passe à autre chose si tu peux (no, no-no, no-no)",
        "Ouh, oublies-moi si tu peux", "Aimes-en un autre si tu peux",
        "Et passe à autre chose si tu peux"
    ],
    "I Love You": [
        "I love you",
        "Et si je te dis que je t'aime", "tu dois me répondre que tu m'aimes",
        "c'est tellement simple un peu comme 1+1 font deux",
        "et si tu me dis que tu m'aimes", "je te répondrai que je t'aime",
        "je prends ta main, je ferme les yeux et je me sens mieux",
        "oh baby i love i love i love i love i love you (i love you beaucoup)",
        "i love i love i love i love i love you (i love you beaucoup)",
        "oh baby i love i love i love i love i love you (i love you beaucoup)",
        "i love i love i love i love i love you (i love you beaucoup)",
        "je vais casser toutes mes montres peu importe ce que ca va me coûter oh",
        "quand j'aime le temps doit pas s'écouler oh",
        "et depuis que toi c'est moi", "j'ai tout oublié du passé oh (ma chérie)",
        "dis moi où tu t'étais cachée oh", "oh pourquoi j'ai mal (mal)",
        "pourquoi je suis blessé oh",
        "j'ai demandé à Dieu de nous séparer mais il n'veut pas m'éxaucer oh",
        "oh c'est lui qui sait et son plan est déjà calé oh",
        "donc si c'est pour toi c'est avec la joie que je vais pleurer oh",
        "Et si je te dis que je t'aime", "tu dois me répondre que tu m'aimes",
        "c'est tellement simple un peu comme 1+1 font deux",
        "et si tu me dis que tu m'aimes", "je te répondrai que je t'aime",
        "je prends ta main, je ferme les yeux et je me sens mieux",
        "oh baby i love i love i love i love i love you (i love you beaucoup)",
        "i love i love i love i love i love you (i love you beaucoup)",
        "oh baby i love i love i love i love i love you (i love you beaucoup)",
        "i love i love i love i love i love you",
        "et si la foudre frappe une seconde", "l'amour lui n'peut pas finir",
        "laisse moi guérir de tous tes bobos ma chérie", "je n'peux plus souffrir",
        "souffrance même cherche à te fuire",
        "écoute ma poitrine mon coeur à des choses à te dire",
        "allez donne tes larmes, oh donne tes cris",
        "tout ce qu'ils t'ont fait on va oublier",
        "prends moi cadeau, fais moi oublier mon goumin",
        "allez prends moi tout, garde le pour toi",
        "et si le ciel me rappelle c'est devant toi que je veux fermer les yeux",
        "oh baby i love i love i love i love i love you (i love you beaucoup)",
        "i love i love i love i love i love you",
        "oh baby i love i love i love i love i love you",
        "i love i love i love i love i love you",
        "oh baby i love i love i love i love i love you (i love you beaucoup)",
        "i love i love i love i love i love you",
        "oh baby i love i love i love i love i love you",
        "i love i love i love i love i love you"
    ],
    "Le Contrat": [
        "Ouh-ouh-ouh", "Ouh-ouh-ouh", "Ouh, you love, you love, oh", "Ouh-woah",
        "Oh-oh-oh, j'ai signé le contrat, toi et moi, c'est bouclé (bah)",
        "La vie, c'est le combat, avec toi, je n'ai pas douté",
        "Oh-oh-oh, oh-oh, le contrat, oh, toi et moi c'est bouclé",
        "Oh-oh-oh, le contrat, oui, le contrat, oh",
        "Ils ont fui, trop tôt (tant pis)", "Eux là, ils ont fui un peu trop tôt",
        "Depuis qu'les comptes sont remplis", "On est beaucoup moins sur les photos (eh)",
        "Tu es la seule qui est restée, oh",
        "Seulement deux jours qu'on est lié, oh-woah (c'est vrai)",
        "Tu as les clés, faut verrouiller, oh-woah (c'est vrai)",
        "Tout est signé",
        "J'ai signé le contrat (uh-huh), toi et moi, c'est bouclé (okay)",
        "La vie, c'est le combat (uh-huh), avec toi, je n'ai pas douté",
        "Oh-oh-oh, oh-oh, le contrat, oh, toi et moi c'est bouclé",
        "Oh-oh-oh, le contrat, oui, le contrat, eh",
        "Na nga, yo na nga, yo na nga, yo na nga",
        "Oh yo na nga, yo na nga, yo na nga, yo na nga",
        "Oh yo na nga, yo na nga, yo na nga, yo na nga",
        "Oh yo na nga, yo na nga, yo na nga, yo na nga (signé)",
        "Ma chérie, viens t'asseoir, c'est maintenant qu'on doit parler",
        "On a dansé le Makossa, si y a kongossa, ça n'a qu'à continuer, hi, yeah, eh",
        "Tu portes mon nom, ne laisse aucun d'eux le salir",
        "Plus rien ne sera comme avant, j'ai mis à ton doigt du saphir",
        "Oh-oh-oh, j'ai signé le contrat (tout est signé)",
        "Toi et moi, c'est bouclé (j'suis un homme comblé)",
        "La vie, c'est le combat (la vie un combat), avec toi, je n'ai pas douté",
        "Oh-oh-oh, oh-oh, le contrat (le contrat, yeah)",
        "Oh, toi et moi, c'est bouclé (oh, oh, oh)",
        "Oh-oh-oh, le contrat, oui, le contrat, oh",
        "Na nga, yo na nga, yo na nga, yo na nga",
        "Oh yo na nga, yo na nga, yo na nga, yo na nga",
        "Oh yo na nga, yo na nga, yo na nga, yo na nga",
        "Oh yo na nga, yo na nga, yo na nga, yo na nga",
        "Okay, Casalova", "Man, I'm gonna be a Casanova",
        "Y a pas de Casanova", "Man, I'm gonna be a Casanova",
        "Oh-oh-oh, le contrat (Casanova)", "Oh-oh-oh, le contrat",
        "Oui, le contrat, yeah", "Non, non, non, c'est déjà bouclé",
        "C'est déjà bouclé", "J'veux pas, c'est moi j'te dis ça",
        "Pas, quand je dis \"pas\" j'ai pas",
        "Vous mettez toutes vos billes dans le même panier",
        "Êtes-vous vraiment prêt à l'assumer? C'est pour toute la vie",
        "À plein d'épreuves, vous serez confronté",
        "Crise après crise, faut tenir, rester unis",
        "Le projet de fonder une famille",
        "En faire votre priorité, c'est facile sur le papier",
        "Ce que vous avez entrepris, aujourd'hui, impose le respect",
        "Vos couples en mode yo na nga, yo na nga",
        "Impliquerons de nouvelles danses, oh-oh-oh",
        "Yo na nga, yo na nga, il aura des conséquences",
        "Vous en ferez des babys, mama, baby mama, mama",
        "Baby mama, évitez les dramas",
        "Oh, baby mama, baby mama, mama",
        "Même si elles prennent quelques kilogrammes"
    ]
};

// DOM Elements
const els = {
    audio: document.getElementById('audio-player'),
    playBtn: document.getElementById('play-btn'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    progressBar: document.getElementById('progress-bar'),
    progress: document.getElementById('progress'),
    timeDisplay: document.getElementById('time-display'),
    durationDisplay: document.getElementById('duration-display'),
    volumeSlider: document.getElementById('volume-slider'),
    playlist: document.getElementById('playlist'),
    nowPlayingTitle: document.getElementById('now-playing-title'),
    nowPlayingArtist: document.getElementById('now-playing-artist'),
    albumArt: document.getElementById('album-art'),
    personalMessage: document.getElementById('personal-message-content'),
    signature: document.getElementById('signature'),
    girlNameSpan: document.getElementById('girl-name-span'),
    candleBtn: document.getElementById('candle-btn'),
    cameraBtn: document.getElementById('camera-btn'),
    lyricsDisplay: document.querySelector('.current-lyric'),
    messageToggleBtn: document.getElementById('message-toggle'),
    messagePopup: document.getElementById('message-popup'),
    messagePopupClose: document.getElementById('message-popup-close'),
    popupMessageContent: document.getElementById('popup-message-content')
};

// Global 3D Variables
let scene, camera, renderer, controls;
let stageLights = [];
let screenMesh;
let particlesSystem;
let candlesGroup = new THREE.Group();
let analyser, dataArray, audioContext;
let lyricInterval;
let taycMesh; // Store for animation

// --- Three.js Setup ---
function initThree() {
    const container = document.getElementById('canvas-container');

    // Scene
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050510, 0.02);

    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.lookAt(0, 1, 0);

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Controls (Touch/Mouse)
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.1; // Prevent going below floor
    controls.minDistance = 3;
    controls.maxDistance = 20;

    // Set initial camera position AFTER controls are created
    setCameraPosition();

    // --- Scene Objects ---

    // Floor
    const floorGeo = new THREE.PlaneGeometry(50, 50);
    const floorMat = new THREE.MeshStandardMaterial({
        color: 0x111111,
        roughness: 0.1,
        metalness: 0.5
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    // Stage Platform
    const stageGeo = new THREE.CylinderGeometry(5, 5, 0.5, 64);
    const stageMat = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.2 });
    const stage = new THREE.Mesh(stageGeo, stageMat);
    stage.position.set(0, 0.25, -2);
    stage.receiveShadow = true;
    scene.add(stage);

    // Screen (Backdrop)
    const screenGeo = new THREE.PlaneGeometry(8, 4.5);
    const screenMat = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide });
    screenMesh = new THREE.Mesh(screenGeo, screenMat);
    screenMesh.position.set(0, 3, -5);
    scene.add(screenMesh);

    // Screen Frame
    const frameGeo = new THREE.BoxGeometry(8.2, 4.7, 0.2);
    const frameMat = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.8 });
    const frame = new THREE.Mesh(frameGeo, frameMat);
    frame.position.set(0, 3, -5.1);
    scene.add(frame);

    // Curtains
    createCurtains();

    // Microphone Stand (Tayc representation)
    createMicStand();

    // Tayc Billboard (Image from file)
    createTaycBillboard();

    // Chair (Livia)
    createChair();

    // Candles
    createCandles();
    if (state.candlesActive) scene.add(candlesGroup);

    // Particles (Glitter)
    createParticles();

    // Lights
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    // Spotlights
    const spot1 = createSpotLight(0x3a86ff, -6, 8, 2);
    const spot2 = createSpotLight(0xff006e, 6, 8, 2);
    const spot3 = createSpotLight(0x7b2cbf, 0, 8, 6); // Front light
    stageLights.push(spot1, spot2, spot3);
    scene.add(spot1, spot2, spot3);

    // Resize Handler
    window.addEventListener('resize', onWindowResize);

    // Start Loop
    animate();
}



// Redefine resetCamera later in file
function resetCamera() {
    // Cycle views: Front, Side Stickman, Livia Chair View
    if (!state.viewIndex) state.viewIndex = 0;
    state.viewIndex = (state.viewIndex + 1) % 3;

    let target = { x: 0, y: 2, z: 8 }; // Default Front Desktop

    if (state.viewIndex === 0) { // Default
        if (state.isMobile) {
            target = { x: 0, y: 3, z: 9 };
        } else {
            target = { x: 0, y: 2, z: 8 };
        }
    } else if (state.viewIndex === 1) { // Close up on Tayc
        // Closer front view
        target = { x: 0, y: 2.4, z: 3 };
    } else if (state.viewIndex === 2) { // View from Chair
        // View from Livia's chair
        target = { x: 1.5, y: 1.5, z: 4.5 };
    }

    gsap.to(camera.position, {
        x: target.x, y: target.y, z: target.z,
        duration: 2,
        ease: "power2.inOut",
        onUpdate: () => controls.update()
    });
}

function setCameraPosition() {
    if (state.isMobile) {
        // Mobile : vue optimale du podium et de Tayc
        camera.position.set(0, 2.5, 7); // Plus proche et centré sur le podium
        controls.target.set(0, 2, -1); // Vise directement Tayc
    } else {
        camera.position.set(0, 2, 8);
        controls.target.set(0, 2, 0);
    }
    controls.update();
}

function createTaycBillboard() {
    console.log("🎤 Chargement de l'image Tayc...");

    // Détecte si on est en mode file://
    const isFileProtocol = window.location.protocol === 'file:';

    if (isFileProtocol) {
        console.log("📁 Mode fichier local détecté - Utilisation de la texture de secours");
        const fallbackTexture = createTaycFallbackTexture();
        setupBillboard(fallbackTexture);
        return;
    }

    // Sinon, essaie de charger l'image normalement
    new THREE.TextureLoader().load(
        'img/tayc.jpg',
        (texture) => {
            console.log("✅ Image Tayc chargée avec succès !");
            setupBillboard(texture);
        },
        undefined,
        (error) => {
            console.error("❌ Erreur de chargement:", error);
            console.log("🎨 Utilisation de la texture de secours");
            const fallbackTexture = createTaycFallbackTexture();
            setupBillboard(fallbackTexture);
        }
    );
}

function setupBillboard(texture) {
    if (taycMesh) scene.remove(taycMesh); // Remove old if exists

    taycMesh = new THREE.Group();

    // 1. L'Image (Plane) - Garantie visible
    const aspect = 3 / 4;
    const height = 5.0;
    const width = height * aspect;

    const planeGeo = new THREE.PlaneGeometry(width, height);
    // Utilisation de MeshBasicMaterial pour être sûr que l'image soit visible même sans lumière
    const planeMat = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide, // Visible des deux côtés au cas où
        transparent: true
    });
    const plane = new THREE.Mesh(planeGeo, planeMat);
    plane.position.z = 0.26; // Légèrement devant le volume
    plane.castShadow = true;

    // 2. Le Volume (Box) - Pour l'épaisseur
    const boxGeo = new THREE.BoxGeometry(width, height, 0.5);
    const boxMat = new THREE.MeshStandardMaterial({ color: 0x111111 }); // Noir mat
    const box = new THREE.Mesh(boxGeo, boxMat);

    taycMesh.add(box);
    taycMesh.add(plane);

    taycMesh.position.set(0, 3.0, -1); // Centered, standing ON top of stage (0.5 + 2.5)

    // Add a base/stand
    const standGeo = new THREE.BoxGeometry(width + 0.2, 0.1, 0.7);
    const standMat = new THREE.MeshStandardMaterial({ color: 0x333333, metalness: 0.8, roughness: 0.2 });
    const stand = new THREE.Mesh(standGeo, standMat);
    stand.position.y = -height / 2 - 0.05; // Below the billboard
    taycMesh.add(stand);

    // Add a subtle spotlight specifically for the artist
    const artistLight = new THREE.SpotLight(0xffffff, 1.2);
    artistLight.position.set(0, 6, 4);
    artistLight.target = taycMesh;
    artistLight.angle = Math.PI / 6;
    artistLight.penumbra = 0.4;
    scene.add(artistLight);

    scene.add(taycMesh);

    // Slow rotation animation
    gsap.to(taycMesh.rotation, {
        y: 0.1,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
    });
}

function createTaycFallbackTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 720;
    const ctx = canvas.getContext('2d');

    // Background gradient vibrant
    const grd = ctx.createLinearGradient(0, 0, 0, 720);
    grd.addColorStop(0, "#7b2cbf");
    grd.addColorStop(0.5, "#3a86ff");
    grd.addColorStop(1, "#ff006e");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 512, 720);

    // Cercle décoratif
    ctx.beginPath();
    ctx.arc(256, 360, 180, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
    ctx.fill();

    // Nom de l'artiste - GRAND et visible
    ctx.fillStyle = "white";
    ctx.font = "bold 120px Arial";
    ctx.textAlign = "center";
    ctx.shadowColor = "rgba(0, 0, 0, 0.8)";
    ctx.shadowBlur = 20;
    ctx.fillText("TAYC", 256, 340);

    // Sous-titre
    ctx.font = "italic 50px serif";
    ctx.shadowBlur = 10;
    ctx.fillText("Live Concert", 256, 420);

    // Date
    ctx.font = "bold 35px Arial";
    ctx.fillText("14 Février 2026", 256, 480);
    ctx.fillText("Pour Livia ❤️", 256, 540);

    // Bordure élégante
    ctx.strokeStyle = "white";
    ctx.lineWidth = 8;
    ctx.shadowBlur = 0;
    ctx.strokeRect(15, 15, 482, 690);

    // Coins décoratifs
    ctx.lineWidth = 4;
    ctx.strokeStyle = "#ff006e";
    // Coin haut gauche
    ctx.beginPath();
    ctx.moveTo(15, 60);
    ctx.lineTo(15, 15);
    ctx.lineTo(60, 15);
    ctx.stroke();
    // Coin haut droit
    ctx.beginPath();
    ctx.moveTo(452, 15);
    ctx.lineTo(497, 15);
    ctx.lineTo(497, 60);
    ctx.stroke();
    // Coin bas gauche
    ctx.beginPath();
    ctx.moveTo(15, 660);
    ctx.lineTo(15, 705);
    ctx.lineTo(60, 705);
    ctx.stroke();
    // Coin bas droit
    ctx.beginPath();
    ctx.moveTo(452, 705);
    ctx.lineTo(497, 705);
    ctx.lineTo(497, 660);
    ctx.stroke();

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
}

function createStickman() {
    const group = new THREE.Group();
    const material = new THREE.MeshStandardMaterial({ color: 0x222222, roughness: 0.5 }); // Dark suit

    // Head (Sphere)
    const head = new THREE.Mesh(new THREE.SphereGeometry(0.25, 32, 32), new THREE.MeshStandardMaterial({ color: 0x8d5524 })); // Skin tone
    head.position.y = 1.7;

    // Body (Cylinder)
    const body = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.1, 0.9, 16), material);
    body.position.y = 1.1;

    // Arms
    const armGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.8, 16);
    const armL = new THREE.Mesh(armGeo, material);
    armL.position.set(-0.35, 1.3, 0);
    armL.rotation.z = Math.PI / 8; // Slight relaxed pose

    const armR = new THREE.Mesh(armGeo, material);
    armR.position.set(0.3, 1.3, 0.2);
    armR.rotation.z = -Math.PI / 4; // Holding Mic position
    armR.rotation.x = -Math.PI / 4;

    // Legs
    const legGeo = new THREE.CylinderGeometry(0.06, 0.04, 1.1, 16);
    const legL = new THREE.Mesh(legGeo, material);
    legL.position.set(-0.15, 0.55, 0);

    const legR = new THREE.Mesh(legGeo, material);
    legR.position.set(0.15, 0.55, 0);

    group.add(head, body, armL, armR, legL, legR);
    group.position.set(0, 0, -0.5); // Slightly behind mic

    group.castShadow = true;

    scene.add(group);
}

function createCurtains() {
    const curtainGeo = new THREE.BoxGeometry(3, 10, 0.5);
    const curtainMat = new THREE.MeshStandardMaterial({ color: 0x500000, roughness: 0.8 }); // Dark Red

    const leftCurtain = new THREE.Mesh(curtainGeo, curtainMat);
    leftCurtain.position.set(-6, 5, -4);
    leftCurtain.castShadow = true;

    const rightCurtain = new THREE.Mesh(curtainGeo, curtainMat);
    rightCurtain.position.set(6, 5, -4);
    rightCurtain.castShadow = true;

    scene.add(leftCurtain);
    scene.add(rightCurtain);
}

function createMicStand() {
    const group = new THREE.Group();

    // Base
    const baseGeo = new THREE.CylinderGeometry(0.3, 0.3, 0.05, 32);
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 1, roughness: 0.2 });
    const base = new THREE.Mesh(baseGeo, metalMat);
    base.position.y = 0.52; // On top of stage

    // Pole
    const poleGeo = new THREE.CylinderGeometry(0.03, 0.03, 1.5, 16);
    const pole = new THREE.Mesh(poleGeo, metalMat);
    pole.position.y = 1.25;

    // Mic Head - using Sphere instead of Capsule for r128 compatibility
    const headGeo = new THREE.SphereGeometry(0.08, 16, 16);
    const headMat = new THREE.MeshStandardMaterial({ color: 0x222222, metalness: 0.5, roughness: 0.8 });
    const head = new THREE.Mesh(headGeo, headMat);
    head.position.y = 2;
    // head.rotation.x = Math.PI / 4; // Sphere doesn't need rotation

    group.add(base, pole, head);
    group.position.set(0, 0, 0); // Center stage
    scene.add(group);
}

function createCandles() {
    candlesGroup = new THREE.Group();
    const candleGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.15, 16);
    const candleMat = new THREE.MeshStandardMaterial({ color: 0xffffee, emissive: 0xffaa00, emissiveIntensity: 0.2 });

    for (let i = 0; i < 30; i++) {
        const mesh = new THREE.Mesh(candleGeo, candleMat);
        // Random placement on stage floor
        const angle = Math.random() * Math.PI * 2;
        const radius = 2 + Math.random() * 2.5; // Outer ring of stage
        mesh.position.set(Math.cos(angle) * radius, 0.575, Math.sin(angle) * radius);

        // Flame light
        const light = new THREE.PointLight(0xffaa00, 0.5, 2);
        light.position.y = 0.2;
        mesh.add(light);

        // Random flicker data
        mesh.userData = { flickerSpeed: 0.5 + Math.random(), offset: Math.random() * 100 };

        candlesGroup.add(mesh);
    }
}

function createChair() {
    // Elegant Chair for Livia
    const group = new THREE.Group();
    const velvetMat = new THREE.MeshStandardMaterial({ color: 0x7b2cbf, roughness: 0.8 }); // Velvet Purple
    const goldMat = new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.8, roughness: 0.2 });

    // Seat
    const seat = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.1, 0.8), velvetMat);
    seat.position.y = 0.5;

    // Backrest
    const back = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.1), velvetMat);
    back.position.set(0, 1, 0.4);
    back.rotation.x = -0.1;

    // Legs
    const legGeo = new THREE.CylinderGeometry(0.03, 0.02, 0.5, 8);
    const positions = [
        [-0.35, 0, 0.35], [0.35, 0, 0.35],
        [-0.35, 0, -0.35], [0.35, 0, -0.35]
    ];
    positions.forEach(pos => {
        const leg = new THREE.Mesh(legGeo, goldMat);
        leg.position.set(pos[0], 0.25, pos[2]);
        group.add(leg);
    });

    group.add(seat, back);

    // Place Chair facing stage
    group.position.set(2, 0, 5);
    group.rotation.y = -Math.PI / 6;

    scene.add(group);
}

function createSpotLight(color, x, y, z) {
    const spot = new THREE.SpotLight(color, 1);
    spot.position.set(x, y, z);
    spot.target.position.set(0, 1.5, 0); // Look at mic
    spot.angle = Math.PI / 6;
    spot.penumbra = 0.3;
    spot.distance = 30;
    spot.castShadow = true;
    spot.shadow.mapSize.width = 1024;
    spot.shadow.mapSize.height = 1024;
    scene.add(spot.target);
    return spot;
}

function createParticles() {
    const geometry = new THREE.BufferGeometry();
    const count = 1500;
    const posArray = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 20;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const material = new THREE.PointsMaterial({
        size: 0.08,
        color: 0xffffff,
        transparent: true,
        opacity: 0, // Start invisible, fade in
        blending: THREE.AdditiveBlending,
        map: createParticleTexture()
    });

    particlesSystem = new THREE.Points(geometry, material);
    scene.add(particlesSystem);
}

function createParticleTexture() {
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const context = canvas.getContext('2d');
    const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    context.fillStyle = gradient;
    context.fillRect(0, 0, 32, 32);
    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;
    return texture;
}

function onWindowResize() {
    state.isMobile = window.innerWidth < 768;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
    requestAnimationFrame(animate);
    const time = Date.now() * 0.001;

    controls.update(); // Update orbit controls

    // Audio Reactive Visuals
    // Audio Reactive Visuals
    let intensity = 0;
    let avg = 0;

    if (state.isPlaying) {
        if (analyser && dataArray) {
            // Real Audio Data
            analyser.getByteFrequencyData(dataArray);
            avg = dataArray.reduce((p, c) => p + c, 0) / dataArray.length;
            intensity = avg / 150;
        } else {
            // SIMULATED Visuals (Fallback for file:// mode)
            // Use sin wave to simulate beat
            avg = 100; // Simulated avg for color calc
            intensity = (Math.sin(time * 4) * 0.5 + 0.5);
        }

        // Screen Pulse
        const r = Math.sin(time) * 0.5 + 0.5;
        const g = Math.cos(time * 0.5) * 0.5 + 0.5;
        screenMesh.material.color.setRGB(r * intensity, 0.1, g * intensity);

        // Lights Intensity
        stageLights.forEach((light, i) => {
            light.intensity = intensity * 1.5 + 0.5;
        });

    } else {
        // Idling
        screenMesh.material.color.setHex(0x111111);
        stageLights.forEach(light => {
            light.intensity = 1 + Math.sin(time) * 0.3;
        });
    }

    // Particles (Glitter) Animation
    if (particlesSystem) {
        if (state.particlesActive) {
            particlesSystem.material.opacity = THREE.MathUtils.lerp(particlesSystem.material.opacity, 0.8, 0.02);
            particlesSystem.rotation.y += 0.001;
            particlesSystem.position.y = Math.sin(time * 0.1) * 0.5;
        } else {
            particlesSystem.material.opacity = THREE.MathUtils.lerp(particlesSystem.material.opacity, 0, 0.05);
        }
    }

    // Candle Flicker
    if (state.candlesActive) {
        candlesGroup.children.forEach(c => {
            if (c.children[0]) { // PointLight
                c.children[0].intensity = 0.5 + Math.sin(time * c.userData.flickerSpeed + c.userData.offset) * 0.2;
            }
        });
    }

    renderer.render(scene, camera);
}


// --- UI & Logic ---

function initUI() {
    els.girlNameSpan.textContent = CONFIG.girlName;
    els.personalMessage.innerHTML = CONFIG.message;
    els.signature.textContent = `Bien à toi, ${CONFIG.yourName}`;

    // Injecter le message dans le popup aussi
    els.popupMessageContent.innerHTML = `
        <h2 style="font-family: 'Playfair Display', serif; margin-bottom: 1rem; color: var(--secondary-color);">
            Bienvenue ${CONFIG.girlName}
        </h2>
        
        <!-- Galerie de photos dans le popup -->
        <div class="livia-gallery" style="margin: 1.5rem 0;">
            <div class="gallery-item">
                <img src="img/IMG-20251101-WA0165.jpg" alt="Livia" class="livia-photo">
            </div>
            <div class="gallery-item">
                <img src="img/IMG-20260210-WA0056.jpg" alt="Livia" class="livia-photo">
            </div>
            <div class="gallery-item">
                <img src="img/IMG-20260210-WA0057.jpg" alt="Livia" class="livia-photo">
            </div>
            <div class="gallery-item">
                <img src="img/IMG-20260210-WA0058.jpg" alt="Livia" class="livia-photo">
            </div>
        </div>
        
        ${CONFIG.message}
        <div style="margin-top: 20px; text-align: right;">
            <p style="font-style: italic; color: var(--accent-color); font-weight: 600;">
                Bien à toi, ${CONFIG.yourName}
            </p>
        </div>
    `;

    renderPlaylist();
    loadSong(0, false); // Initialize but don't play yet

    // Setup initial button states
    updateCandleBtn();

    // Event Listeners
    els.audio.addEventListener('timeupdate', updateProgress);
    els.audio.addEventListener('ended', () => playSong(state.currentSongIndex + 1));
    els.audio.addEventListener('play', () => { state.isPlaying = true; updatePlayBtn(); initAudioContext(); });
    els.audio.addEventListener('pause', () => { state.isPlaying = false; updatePlayBtn(); });

    els.playBtn.addEventListener('click', togglePlay);
    els.prevBtn.addEventListener('click', () => playSong(state.currentSongIndex - 1));
    els.nextBtn.addEventListener('click', () => playSong(state.currentSongIndex + 1));

    // Progress Bar Click
    els.progressBar.addEventListener('click', (e) => {
        const rect = els.progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        if (els.audio.duration) els.audio.currentTime = percent * els.audio.duration;
    });

    // Volume
    els.volumeSlider.addEventListener('input', (e) => { els.audio.volume = e.target.value; });

    // Feature Toggles
    els.candleBtn.addEventListener('click', toggleRomanceMode);
    els.cameraBtn.addEventListener('click', resetCamera);

    document.getElementById('sparkle-btn').addEventListener('click', triggerSparkleBomb);
    document.getElementById('clap-btn').addEventListener('click', triggerApplause);

    // Message Popup (Mobile)
    els.messageToggleBtn.addEventListener('click', () => {
        els.messagePopup.classList.add('active');
    });

    els.messagePopupClose.addEventListener('click', () => {
        els.messagePopup.classList.remove('active');
    });

    // Fermer en cliquant sur le fond
    els.messagePopup.addEventListener('click', (e) => {
        if (e.target === els.messagePopup) {
            els.messagePopup.classList.remove('active');
        }
    });
}

// Unlock Audio on First Interaction
document.addEventListener('click', function unlockAudio() {
    if (audioContext && audioContext.state === 'suspended') {
        audioContext.resume();
    }
}, { once: true });


function initAudioContext() {
    // If running locally via file://, Web Audio API (visualizer) will fail due to CORS.
    // We skip the analyser connection so the audio can at least PLAY.
    if (window.location.protocol === 'file:') {
        console.warn("Running from file system: Visualizer disabled to allow audio playback.");
        return;
    }

    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        analyser = audioContext.createAnalyser();

        try {
            const source = audioContext.createMediaElementSource(els.audio);
            source.connect(analyser);
            analyser.connect(audioContext.destination);
            analyser.fftSize = 256;
            dataArray = new Uint8Array(analyser.frequencyBinCount);
        } catch (e) {
            console.error("Audio Context Error (CORS likely):", e);
        }
    }
    if (audioContext.state === 'suspended') audioContext.resume();
}


function renderPlaylist() {
    els.playlist.innerHTML = '';
    CONFIG.playlist.forEach((song, index) => {
        const div = document.createElement('div');
        div.className = `song ${index === state.currentSongIndex ? 'active' : ''}`;
        div.innerHTML = `
            <div class="song-info-group">
                <span class="song-title">${song.title}</span>
                <span class="song-artist">${song.artist}</span>
            </div>
            <span class="song-duration"><i class="fas fa-play"></i></span>
        `;
        div.addEventListener('click', () => playSong(index));
        els.playlist.appendChild(div);
    });
}

function loadSong(index, autoPlay = true) {
    if (index < 0) index = CONFIG.playlist.length - 1;
    if (index >= CONFIG.playlist.length) index = 0;

    state.currentSongIndex = index;
    const song = CONFIG.playlist[index];

    els.nowPlayingTitle.textContent = song.title;
    els.nowPlayingArtist.textContent = song.artist;

    // Highlight in list
    Array.from(els.playlist.children).forEach((el, i) => {
        el.classList.toggle('active', i === index);
    });

    els.audio.src = encodeURI(song.src); // Ensure spaces are handled
    console.log("Loading song:", els.audio.src);

    if (autoPlay) {
        const playPromise = els.audio.play();
        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Playback started
                state.isPlaying = true;
                updatePlayBtn();
                initAudioContext();
                startLyricsSimulation();
            })
                .catch(error => {
                    console.error("Auto-play prevented:", error);
                    // Show explicit warning for file:// protocol
                    if (window.location.protocol === 'file:') {
                        alert("⚠️ ATTENTION : La musique ne peut pas être lue directement depuis un fichier local pour des raisons de sécurité.\n\nVeuillez utiliser un serveur local (ex: 'Live Server' dans VS Code).");
                    }
                    state.isPlaying = false;
                    updatePlayBtn();
                });
        }
    }

    // Theme Colors
    document.documentElement.style.setProperty('--primary-color', song.color);
    // Update main lights
    stageLights.forEach((l, i) => {
        if (i < 2) l.color.setHex(parseInt(song.color.replace('#', '0x')));
    });
}

function togglePlay() {
    if (els.audio.paused) {
        els.audio.play();
        startLyricsSimulation();
    } else {
        els.audio.pause();
        stopLyricsSimulation();
    }
}

function playSong(index) {
    loadSong(index, true);
}

function updatePlayBtn() {
    const icon = els.playBtn.querySelector('i');
    icon.className = state.isPlaying ? 'fas fa-pause' : 'fas fa-play';
    els.albumArt.style.animation = state.isPlaying ? 'pulse 2s infinite' : 'none';
}

function updateProgress() {
    if (!els.audio.duration) return;
    const percent = (els.audio.currentTime / els.audio.duration) * 100;
    els.progress.style.width = `${percent}%`;
    els.timeDisplay.textContent = formatTime(els.audio.currentTime);
    els.durationDisplay.textContent = formatTime(els.audio.duration);
}

function formatTime(s) {
    const min = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${min}:${sec < 10 ? '0' + sec : sec}`;
}

// Lyrics System
function startLyricsSimulation() {
    clearInterval(lyricInterval);

    // Obtenir les paroles de la chanson actuelle
    const currentSong = CONFIG.playlist[state.currentSongIndex];
    const lyrics = SONG_LYRICS[currentSong.title] || ["♪ Profitez de la musique ♪"];

    // Calculer l'intervalle idéal : Durée chanson / Nombre de lignes
    // Si durée inconnue (début), on estime à 3min (180s)
    const duration = els.audio.duration || 180;
    // On enlève 10% pour intro/outro
    const activeTime = duration * 0.9;
    let intervalTime = (activeTime / lyrics.length) * 1000;

    // Bornes pour éviter que ça aille trop vite ou trop lentement
    if (intervalTime < 2000) intervalTime = 2000; // Min 2s
    if (intervalTime > 8000) intervalTime = 8000; // Max 8s

    let index = 0;
    // Show first IMMEDIATELY
    showLyric(lyrics[0]);
    index++;

    lyricInterval = setInterval(() => {
        showLyric(lyrics[index % lyrics.length]);
        index++;
    }, intervalTime);
}

function showLyric(text) {
    els.lyricsDisplay.style.opacity = 0;
    setTimeout(() => {
        els.lyricsDisplay.textContent = `"${text}"`;
        els.lyricsDisplay.style.opacity = 1;
    }, 500);
}

function stopLyricsSimulation() {
    clearInterval(lyricInterval);
    els.lyricsDisplay.style.opacity = 0;
}

// Feature Toggles
function toggleRomanceMode() {
    // Toggle both particles and candles
    state.candlesActive = !state.candlesActive;
    state.particlesActive = state.candlesActive; // Sync them for button simplicity

    updateCandleBtn();

    if (state.candlesActive) {
        scene.add(candlesGroup);
        // Move camera to warm angle
        gsap.to(camera.position, {
            y: 2, z: 8, duration: 2
        });
    } else {
        scene.remove(candlesGroup);
    }
}

function updateCandleBtn() {
    if (state.candlesActive) {
        els.candleBtn.innerHTML = '<i class="fas fa-fire-extinguisher"></i>  ';
        els.candleBtn.style.background = 'rgba(255, 100, 100, 0.3)';
    } else {
        els.candleBtn.innerHTML = '<i class="fas fa-fire"></i>  ';
        els.candleBtn.style.background = 'rgba(255, 255, 255, 0.1)';
    }
}

// Effects
function triggerSparkleBomb() {
    const burstCount = 500;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(burstCount * 3);
    const velocities = [];

    for (let i = 0; i < burstCount * 3; i += 3) {
        positions[i] = 0; // Start at center top
        positions[i + 1] = 5;
        positions[i + 2] = 0;

        velocities.push({
            x: (Math.random() - 0.5) * 0.2,
            y: (Math.random() - 0.5) * 0.2,
            z: (Math.random() - 0.5) * 0.2
        });
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
        color: 0xffd700,
        size: 0.1,
        transparent: true
    });

    const burstSystem = new THREE.Points(geo, mat);
    burstSystem.userData = { velocities: velocities, life: 1.0 };
    scene.add(burstSystem);

    const anim = setInterval(() => {
        const pos = burstSystem.geometry.attributes.position.array;
        for (let i = 0; i < burstCount; i++) {
            pos[i * 3] += velocities[i].x;
            pos[i * 3 + 1] += velocities[i].y;
            pos[i * 3 + 2] += velocities[i].z;
            velocities[i].y -= 0.005; // Gravity
        }
        burstSystem.geometry.attributes.position.needsUpdate = true;

        burstSystem.userData.life -= 0.02;
        burstSystem.material.opacity = burstSystem.userData.life;

        if (burstSystem.userData.life <= 0) {
            clearInterval(anim);
            scene.remove(burstSystem);
        }
    }, 30);
}

function triggerApplause() {
    const count = 15;
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const el = document.createElement('div');
            el.innerHTML = Math.random() > 0.5 ? '👏' : '❤️';
            el.style.position = 'fixed';
            el.style.left = (Math.random() * 80 + 10) + '%';
            el.style.bottom = '0';
            el.style.fontSize = (20 + Math.random() * 40) + 'px';
            el.style.pointerEvents = 'none';
            el.style.transition = 'all 2s ease-out';
            el.style.zIndex = '1000';
            document.body.appendChild(el);

            requestAnimationFrame(() => {
                el.style.bottom = '70%';
                el.style.opacity = '0';
                el.style.transform = `translateX(${(Math.random() - 0.5) * 50}px) rotate(${Math.random() * 360}deg)`;
            });

            setTimeout(() => el.remove(), 2000);
        }, i * 150);
    }
}



// Boot
window.addEventListener('DOMContentLoaded', () => {
    initThree();
    initUI();
});
