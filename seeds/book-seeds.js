const { Book } = require("../models/book.js");

const bookData = [
  {
    title: 'Gilead',
    subtitle: '',
    authors: 'Marilynne Robinson',
    categories: 'Fiction',
    thumbnails: 'http://books.google.com/books/content?id=KQZCPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description: 'A NOVEL THAT READERS and critics have been eagerly anticipating for over a decade, Gilead is an astonishingly imagined story of remarkable lives. John Ames is a preacher, the son of a preacher and the grandson (both maternal and paternal) of preachers. It’s 1956 in Gilead, Iowa, towards the end of the Reverend Ames’s life, and he is absorbed in recording his family’s story, a legacy for the young son he will never see grow up. Haunted by his grandfather’s presence, John tells of the rift between his grandfather and his father: the elder, an angry visionary who fought for the abolitionist cause, and his son, an ardent pacifist. He is troubled, too, by his prodigal namesake, Jack (John Ames) Boughton, his best friend’s lost son who returns to Gilead searching for forgiveness and redemption. Told in John Ames’s joyous, rambling voice that finds beauty, humour and truth in the smallest of life’s details, Gilead is a song of celebration and acceptance of the best and the worst the world has to offer. At its heart is a tale of the sacred bonds between fathers and sons, pitch-perfect in style and story, set to dazzle critics and readers alike.',
    published_year: 2004,
    average_rating: 3.85
  },
  {
    title: "Spider's Web",
    subtitle: 'A Novel',
    authors: 'Charles Osborne;Agatha Christie',
    categories: 'Detective and mystery stories',
    thumbnails: 'http://books.google.com/books/content?id=KQZCPgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description: "A new 'Christie for Christmas' -- a full-length novel adapted from her acclaimed play by Charles Osborne Following BLACK COFFEE and THE UNEXPECTED GUEST comes the final Agatha Christie play novelisation, bringing her superb storytelling to a new legion of fans. Clarissa, the wife of a Foreign Office diplomat, is given to daydreaming. 'Supposing I were to come down one morning and find a dead body in the library, what should I do?' she muses. Clarissa has her chance to find out when she discovers a body in the drawing-room of her house in Kent. Desperate to dispose of the body before her husband comes home with an important foreign politician, Clarissa persuades her three house guests to become accessories and accomplices. It seems that the murdered man was not unknown to certain members of the house party (but which ones?), and the search begins for the murderer and the motive, while at the same time trying to persuade a police inspector that there has been no murder at all... SPIDER'S WEB was written in 1954 specifically for Margaret Lockwood and opened first at the Theatre Royal Nottingham before moving to the Savoy Theatre in London on 14 December 1954. With THE MOUSETRAP and WI",
    published_year: 2000,
    average_rating: 3.83
  },
  {
    title: 'The One Tree',
    subtitle: '',
    authors: 'Stephen R. Donaldson',
    categories: 'Fiction',
    thumbnails: 'http://books.google.com/books/content?id=OmQawwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api,',
    description: "Volume Two of Stephen Donaldson's acclaimed second trilogy featuing the compelling anti-hero Thomas Covenant.",
    published_year: 1982,
    average_rating: 3.87
  },
  {
    title: 'Rage of angels',
    subtitle: '',
    authors: 'Sidney Sheldon',
    categories: 'Fiction',
    thumbnails: 'http://books.google.com/books/content?id=FKo2TgANz74C&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description: "A memorable, mesmerizing heroine Jennifer -- brilliant, beautiful, an attorney on the way up until the Mafia's schemes win her the hatred of an implacable enemy -- and a love more destructive than hate. A dangerous, dramatic world The Dark Arena of organized crime and flashbulb lit courtrooms where ambitious prosecutors begin their climb to political power.",
    published_year: 1993,
    average_rating: 3.93,
    num_pages: 512
  },
  {
    title: 'The Four Loves',
    subtitle: '',
    authors: 'Clive Staples Lewis,Christian',
    categories: 'Life',
    thumbnails: 'http://books.google.com/books/content?id=XhQ5XsFcpGIC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description: "Lewis' work on the nature of love divides love into four categories; Affection, Friendship, Eros and Charity. The first three come naturally to humanity. Charity, however, the Gift-love of God, is divine, and without this supernatural love, the natural loves become distorted and even dangerous.",
    published_year: 2002,
    average_rating: 4.12,
    num_pages: 170
  },
  {
    title: 'The Problem of Pain',
    subtitle: '',
    authors: 'Clive Staples Lewis,Christian',
    categories: 'Life',
    thumbnails: 'http://books.google.com/books/content?id=Kk-uVe5QK-gC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description: "In The Problem of Pain, C.S. Lewis, one of the most renowned Christian authors and thinkers, examines a universally applicable question within the human condition: If God is good and all-powerful, why does he allow his creatures to suffer pain? With his signature wealth of compassion and insight, C.S. Lewis offers answers to these crucial questions and shares his hope and wisdom to help heal a world hungering for a true understanding of human nature.",
    published_year: 2002,
    average_rating: 4.09,
    num_pages: 176
  },
  {
    title: 'An Autobiography',
    subtitle: 'Agatha Christie',
    authors: 'Authors',
    categories: 'Non-fiction',
    thumbnails: 'http://books.google.com/books/content?id=c49GQwAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description: '',
    published_year: 1977,
    average_rating: 4.27,
    num_pages: 560
  },
  {
    title: 'Empires of the Monsoon',
    subtitle: 'A History of the Indian Ocean and Its Invaders',
    authors: 'Richard Hall',
    categories: 'Non-fiction',
    thumbnails: 'http://books.google.com/books/content?id=MuPEQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description: "Until Vasco da Gama discovered the sea-route to the East in 1497-9 almost nothing was known in the West of the exotic cultures and wealth of the Indian Ocean and its peoples. It is this civilization and its destruction at the hands of the West that Richard Hall recreates in this book. Hall's history of the exploration and exploitation by Chinese and Arab travellers, and by the Portuguese, Dutch and British alike is one of brutality, betrayal and colonial ambition.",
    published_year: 1998,
    average_rating: 4.41,
    num_pages: 608
  },
  {
    title: 'The Gap Into Madness',
    subtitle: 'Chaos and Order',
    authors: 'Stephen R. Donaldson,"Hyland, Morn',
    categories: "Fiction",
    thumbnails: 'http://books.google.com/books/content?id=4oXavLNDWocC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description: "A new-cover reissue of the fourth book in the bestselling five-volume sf series created by the world-famous author of the Thomas Covenant chronicles -- and acclaimed as the 'best work of his career'. Events were not moving as the Amnion had intended. Once again humans had been false in their dealings with the aliens. As the planetoid Thanatos Minor exploded into atoms, the Trumpet hurtled into space only one step ahead of hostile pursuers. On board were Morn Hyland and her force-grown son Davies, cyborg Angus Thermopyle and Captain Nick Succorso -- old enemies thrown together in a desperate bid for survival. For both the Amnion and the UMCP, the immediate capture of the fleeing ship and the secrets it contained was imperative. But for Trumpet's exhausted crew the only hope lay in an illegal lab in the distant binary solar system of Valdor Industrial. It would be a journey of unpredictable danger -- from which not all would return...",
    published_year: 1994,
    average_rating: 4.14,
    num_pages: 743
  },
  {
    title: 'Master of the Game',
    subtitle: '',
    authors: 'Sidney Sheldon',
    categories: "Adventure Stories",
    thumbnails: 'http://books.google.com/books/content?id=TkTYp-Tp6_IC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description: "Kate Blackwell is an enigma and one of the most powerful women in the world. But at her ninetieth birthday celebrations there are ghosts of absent friends and absent enemies.",
    published_year: 1982,
    average_rating: 4.11,
    num_pages: 411
  },
  {
    title: 'If Tomorrow Comes',
    subtitle: '',
    authors: 'Sidney Sheldon',
    categories: 'Adventure Stories',
    thumbnails: 'http://books.google.com/books/content?id=l2tBi_jLuk8C&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description: "One of Sidney Sheldon's most popular and bestselling titles, repackaged and reissued for a new generation of fans.", 
    published_year: 1994,
    average_rating: 4.04,
    num_pages: 501
  },
  {
    title: "Assassin's Apprentice",
    subtitle: '',
    authors: 'Robin Hobb',
    categories: 'Fantasy',
    thumbnails: 'http://books.google.com/books/content?id=qTaGQgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description: "fantasy romance novel",
    published_year: 1996,
    average_rating: 4.15,
    num_pages: 460
  },
  {
    title: 'Warhost of Vastmark',
    subtitle: '',
    authors: 'Janny Wurts',
    categories: 'Fiction',
    thumbnails: 'http://books.google.com/books/content?id=uOL0fpS9WZkC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description: "Tricked once more by his wily half-brother, Lysaer, Lord of Light, arrives at the tiny harbor town of Merior to find that Arithon's ship yards have been abandoned and meticulously destroyed, and that the Master of Shadow has disappeared as if into thin air. Meanwhile Arithon and the Mad Prophet Dakar are traveling on foot through the treacherous Kelhorn Mountains towards the Vastmark clans, there to raise further support for his cause. But raising a warhost is a costly business. Is it mere coincidence that Princess Talith—Lysaer's beautiful, headstrong wife—is taken captive and held for a vast ransom by a master brigand? The forces of light and shadow circle and feint, drawing ever closer to a huge conflict. And in the background the Fellowship of Seven Sorcerers and the Koriani Enchantresses watch and plan, and wait.",
    published_year: 1995,
    average_rating: 4.03,
    num_pages: 522
  },
  {
    title: 'The Once and Future King',
    subtitle: '',
    authors: 'Terence Hanbury White',
    categories: 'Romance',
    thumbnails: 'http://books.google.com/books/content?id=Jx6BvgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description: "An omnibus volume of the author's complete story of the Arthurian epic which includes: ,The sword in the stone (1939) ,The witch in the wood (1939), The ill-made knight (1940), The candle in the wind (published for the first time) and, The book of Merlyn.",
    published_year: 1996,
    average_rating: 4.04,
    num_pages: 823
  },
  {
    title: 'Murder in LaMut',
    subtitle: '',
    authors: 'Raymond E. Feist;Joel Rosenberg',
    categories: 'Adventure Stories',
    thumbnails: 'http://books.google.com/books/content?id=I2jbBlMHlAMC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description: "Available in the U.S. for the first time, this is the second volume in the exceptional Legends of the Riftwar series from New York Times-bestselling authors Feist and Rosenberg.",
    published_year: 2003,
    average_rating: 3.7,
    num_pages: 337
  },
  {
    title: 'Jimmy the Hand',
    subtitle: '',
    authors: 'Raymond E. Feist;S. M. Stirling',
    categories: 'Fantasy',
    thumbnails: 'http://books.google.com/books/content?id=hV4-oITYFN8C&printsec=frontcover&img=1&zoom=1&source=gbs_api',
    description: "Jimmy the Hand, boy thief of Krondor, lived in the shadows of the city. Though gifted beyond his peers, Jimmy is merely a pickpocket with potential--until he aids Prince Arutha in the rescue of Princess Anita from Duke Guy du Bas-Tyra, and runs afoul of Black Guy's secret police. Facing a choice between disappearing on his own or in a weighted barrel at the bottom of Krondor's harbor, Jimmy chooses the former. Forced to flee the only home he's ever known, Jimmy finds himself among the unsuspecting rural villagers of Land's End, where he hopes to prosper with his talents for con and thievery. But Land's End is home to many who tread the crooked path--and to a dark, dangerous presence even the local smugglers don't recognize. And suddenly Jimmy's youthful bravado and courage are leading him into the maw of chaos . . . and, quite possibly, to his doom.",
    published_year: 2003,
    average_rating: 3.95,
    num_pages: 368
  },
];

const seedBooks = () => Book.bulkCreate(bookdata);

module.exports = seedBooks;