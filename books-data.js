
const books = [
  {
    id: 1,
    title: "Les Misérables",
    author: "Victor Hugo",
    genre: "Classics",
    year: 1862,
    image: "Les Misérables.jpg",
    description: "An epic story of justice, mercy, and redemption in nineteenth-century France.",
    originalLanguage: "French",
    country: "France",
    pages: "Approximately 1,200–1,500, depending on the edition",
    literaryPeriod: "Romanticism and Social Realism",
    setting: "France during the early nineteenth century",
    readingLevel: "Advanced",
    mood: "Epic, emotional, dramatic",

    overview: `Les Misérables is one of the most influential novels in French literature. Victor Hugo explores poverty, injustice, forgiveness, and the possibility of personal transformation through the lives of people living in a deeply unequal society.

    The novel combines intimate personal struggles with larger questions about politics, religion, law, and human dignity. It asks whether people should be defined by their mistakes or given the opportunity to change.`,

    plotSummary: `Jean Valjean is released from prison after serving a harsh sentence for stealing bread and attempting to escape. Although he wants to rebuild his life, his criminal record makes acceptance difficult.

    An unexpected act of kindness inspires him to become a better person. However, Inspector Javert remains determined to bring him back under the control of the law.

    Valjean's promise to protect a young girl named Cosette leads him through years of sacrifice, danger, and political unrest in France.`,

    characters: [
      { name: "Jean Valjean", description: "A former prisoner seeking redemption and a meaningful life." },
      { name: "Inspector Javert", description: "A strict police officer who believes the law must always be obeyed." },
      { name: "Fantine", description: "A struggling mother whose suffering reveals social injustice." },
      { name: "Cosette", description: "Fantine's daughter, who becomes central to Valjean's life." },
      { name: "Marius Pontmercy", description: "A young idealist involved in love and political conflict." },
      { name: "Éponine", description: "A young woman whose unreturned love adds emotional depth." }
    ],

    themes: [
      "Justice and Mercy",
      "Poverty and Inequality",
      "Redemption",
      "Love and Sacrifice",
      "Social Responsibility",
      "Revolution"
    ],

    whyRead: [
      "Discover a masterpiece of French literature.",
      "Explore the relationship between law and morality.",
      "Experience unforgettable characters and emotional storytelling.",
      "Reflect on compassion, forgiveness, and social justice."
    ],

    readingExperience: `A lengthy and emotionally powerful novel featuring historical explanations, philosophical reflections, and multiple interconnected stories. It rewards readers who enjoy complex characters and serious social questions.`,

    similarBookIds: [2, 8]
  },

  {
    id: 2,
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    genre: "Classics",
    year: 1878,
    image: "Anna Karenina.jpg",
    description: "A profound novel about love, family, and society in Imperial Russia.",
    originalLanguage: "Russian",
    country: "Russia",
    pages: "Approximately 800–900, depending on the edition",
    literaryPeriod: "Realism",
    setting: "Nineteenth-century Imperial Russia",
    readingLevel: "Advanced",
    mood: "Psychological, philosophical, emotional",

    overview: `Anna Karenina is a celebrated work of Russian realism that examines love, marriage, social expectations, and the search for happiness.

    Through several interconnected families, Leo Tolstoy explores the conflict between individual desires and social obligations. The novel contrasts aristocratic life in Russian cities with the quieter experiences of people living in the countryside.

    Rather than presenting simple answers, Tolstoy invites readers to reflect on morality, responsibility, faith, and the meaning of a fulfilling life.`,

    plotSummary: `Anna Karenina is a married aristocratic woman whose life changes after meeting Count Alexei Vronsky, a young military officer.

    Their growing relationship creates tension between Anna's personal desires, her responsibilities, and the strict expectations of Russian society.

    Alongside Anna's story, Konstantin Levin, a thoughtful landowner, searches for meaning through work, family, love, and spiritual questions.

    The parallel stories reveal contrasting approaches to happiness, personal freedom, and human relationships.`,

    characters: [
      { name: "Anna Karenina", description: "An intelligent and passionate woman struggling against society's expectations." },
      { name: "Alexei Vronsky", description: "A charismatic officer whose relationship with Anna changes their lives." },
      { name: "Konstantin Levin", description: "An introspective landowner searching for purpose and happiness." },
      { name: "Kitty Shcherbatskaya", description: "A young woman who grows through disappointment and emotional challenges." },
      { name: "Alexei Karenin", description: "Anna's husband, a government official concerned with duty and reputation." },
      { name: "Stepan Oblonsky", description: "Anna's brother, whose marriage introduces important questions about family." }
    ],

    themes: [
      "Love and Marriage",
      "Social Expectations",
      "Family and Responsibility",
      "Faith and Morality",
      "Personal Freedom",
      "Search for Meaning"
    ],

    whyRead: [
      "Experience one of the greatest works of Russian literature.",
      "Explore psychologically complex characters.",
      "Reflect on love, happiness, and social judgment.",
      "Discover the contrast between urban and rural Russian life."
    ],

    readingExperience: `A thoughtful, character-driven novel with detailed relationships and philosophical discussions. It is best enjoyed slowly, with attention to the emotional development of its characters.`,

    similarBookIds: [1, 8]
  },

  {
    id: 3,
    title: "Dracula",
    author: "Bram Stoker",
    genre: "Horror",
    year: 1897,
    image: "Dracula.jpg",
    description: "A Gothic horror novel about an ancient vampire threatening Victorian England.",
    originalLanguage: "English",
    country: "Ireland (author)",
    pages: "Approximately 400–500, depending on the edition",
    literaryPeriod: "Victorian Gothic",
    setting: "Transylvania and England",
    readingLevel: "Intermediate",
    mood: "Dark, mysterious, suspenseful",

    overview: `Dracula is one of the most important novels in Gothic horror and helped shape the modern image of vampires.

    Bram Stoker tells the story through diary entries, letters, newspaper articles, and other documents, allowing readers to uncover the mystery from different perspectives.

    The novel explores fear of the unknown, the conflict between science and superstition, and the anxieties of Victorian society.`,

    plotSummary: `Jonathan Harker, a young English solicitor, travels to Transylvania to help Count Dracula purchase property in England.

    During his stay, Jonathan begins noticing disturbing behavior and strange events inside Dracula's castle.

    Meanwhile, mysterious incidents begin occurring in England, affecting a group of friends.

    Professor Van Helsing and his companions investigate the growing danger and attempt to understand the supernatural threat they face.`,

    characters: [
      { name: "Count Dracula", description: "A mysterious Transylvanian nobleman with terrifying supernatural powers." },
      { name: "Jonathan Harker", description: "A young solicitor whose journey begins the mystery." },
      { name: "Mina Harker", description: "An intelligent and resourceful woman who helps uncover important clues." },
      { name: "Lucy Westenra", description: "Mina's friend, whose mysterious illness creates growing concern." },
      { name: "Professor Van Helsing", description: "A scholar and physician who investigates supernatural explanations." },
      { name: "Dr. John Seward", description: "A doctor whose observations contribute to the investigation." }
    ],

    themes: [
      "Fear of the Unknown",
      "Science and Superstition",
      "Good and Evil",
      "Isolation",
      "Victorian Society",
      "Friendship and Courage"
    ],

    whyRead: [
      "Discover the novel that shaped modern vampire fiction.",
      "Enjoy a suspenseful story told through multiple documents.",
      "Explore classic Gothic atmosphere and symbolism.",
      "Understand the historical roots of supernatural horror."
    ],

    readingExperience: `An atmospheric and suspenseful Gothic novel. Its documentary storytelling creates mystery gradually, making it ideal for readers who enjoy psychological tension and supernatural horror.`,

    similarBookIds: [10, 7]
  },

  {
    id: 4,
    title: "The Hunger Games",
    author: "Suzanne Collins",
    genre: "Dystopian",
    year: 2008,
    image: "The Hunger Games.jpg",
    description: "A young woman fights to survive a deadly competition in a dystopian society.",
    originalLanguage: "English",
    country: "United States",
    pages: "Approximately 374 in a common edition",
    literaryPeriod: "Young Adult Dystopian Fiction",
    setting: "The fictional nation of Panem",
    readingLevel: "Intermediate",
    mood: "Intense, suspenseful, rebellious",

    overview: `The Hunger Games introduces Panem, a dystopian nation divided into wealthy rulers and impoverished districts.

    Every year, the government forces selected teenagers to participate in a televised competition where survival comes at a terrible cost.

    Through Katniss Everdeen's experiences, the novel examines political power, inequality, propaganda, entertainment, and resistance.`,

    plotSummary: `Katniss Everdeen lives in District 12, one of the poorest regions of Panem. She provides for her family by hunting illegally outside the district.

    When her younger sister is selected for the annual Hunger Games, Katniss volunteers to take her place.

    Alongside fellow tribute Peeta Mellark, she travels to the Capitol and enters a dangerous competition watched by the entire nation.

    As the Games unfold, Katniss must navigate alliances, public expectations, and difficult moral decisions while fighting to survive.`,

    characters: [
      { name: "Katniss Everdeen", description: "A resourceful and courageous teenager determined to protect her family." },
      { name: "Peeta Mellark", description: "A compassionate tribute from District 12 with strong personal values." },
      { name: "Gale Hawthorne", description: "Katniss's close friend and hunting companion." },
      { name: "Haymitch Abernathy", description: "A former Hunger Games victor who mentors the tributes." },
      { name: "Effie Trinket", description: "The Capitol representative responsible for District 12's tributes." },
      { name: "President Snow", description: "The powerful leader of Panem who maintains control through fear." }
    ],

    themes: [
      "Survival",
      "Power and Oppression",
      "Inequality",
      "Media Manipulation",
      "Sacrifice",
      "Resistance"
    ],

    whyRead: [
      "Enjoy a fast-paced story filled with suspense.",
      "Explore the relationship between entertainment and political power.",
      "Follow a strong and complex protagonist.",
      "Reflect on inequality, morality, and resistance."
    ],

    readingExperience: `A gripping, fast-moving dystopian adventure with high stakes and emotional tension. It includes violence and difficult survival choices while remaining accessible to many young adult readers.`,

    similarBookIds: [5, 6, 7]
  },

  {
    id: 5,
    title: "Divergent",
    author: "Veronica Roth",
    genre: "Dystopian",
    year: 2011,
    image: "Divergent.jpg",
    description: "A teenager challenges a society that divides people according to personality.",
    originalLanguage: "English",
    country: "United States",
    pages: "Approximately 487 in a common edition",
    literaryPeriod: "Young Adult Dystopian Fiction",
    setting: "A futuristic, faction-divided Chicago",
    readingLevel: "Intermediate",
    mood: "Adventurous, tense, rebellious",

    overview: `Divergent takes place in a futuristic Chicago where society is divided into five factions, each dedicated to a particular human virtue.

    Every teenager must choose the faction that will define their future.

    The novel explores identity, conformity, fear, courage, and the danger of reducing human complexity to a single category.`,

    plotSummary: `Beatrice Prior grows up in Abnegation, a faction dedicated to selflessness.

    At sixteen, she must take an aptitude test and choose whether to remain with her family or join another faction.

    Her unusual test results suggest that she does not fit neatly into society's categories.

    After making a life-changing decision, she begins a demanding initiation process and discovers secrets that threaten the stability of the faction system.`,

    characters: [
      { name: "Beatrice 'Tris' Prior", description: "A determined young woman discovering her identity and inner strength." },
      { name: "Tobias 'Four' Eaton", description: "A skilled instructor with a mysterious background." },
      { name: "Christina", description: "A supportive friend Tris meets during initiation." },
      { name: "Caleb Prior", description: "Tris's brother, who faces his own important decisions." },
      { name: "Jeanine Matthews", description: "An influential leader who values intelligence and control." },
      { name: "Eric", description: "A harsh Dauntless leader involved in the initiation process." }
    ],

    themes: [
      "Identity",
      "Individuality",
      "Conformity",
      "Fear and Courage",
      "Freedom of Choice",
      "Social Control"
    ],

    whyRead: [
      "Explore an imaginative faction-based society.",
      "Follow an exciting journey of self-discovery.",
      "Question rigid social labels and expectations.",
      "Enjoy action, friendship, and romance."
    ],

    readingExperience: `A fast-paced dystopian adventure featuring training challenges, romance, and political conflict. Particularly enjoyable for readers who like action and coming-of-age stories.`,

    similarBookIds: [4, 6, 10]
  },

  {
    id: 6,
    title: "The Giver",
    author: "Lois Lowry",
    genre: "Dystopian",
    year: 1993,
    image: "The Giver.jpg",
    description: "A boy discovers the hidden cost of a seemingly perfect society.",
    originalLanguage: "English",
    country: "United States",
    pages: "Approximately 180–240, depending on the edition",
    literaryPeriod: "Young Adult Dystopian Fiction",
    setting: "An unnamed, highly controlled community",
    readingLevel: "Accessible",
    mood: "Thought-provoking, mysterious, emotional",

    overview: `The Giver presents a community that appears peaceful, orderly, and free from suffering.

    Citizens follow carefully designed rules, and important decisions are made for them.

    Through the experiences of a young boy named Jonas, Lois Lowry explores the value of memory, emotions, individuality, and freedom.

    The novel asks whether a society can truly be happy if it eliminates pain by removing personal choice.`,

    plotSummary: `Jonas lives in a community where every aspect of life is carefully organized.

    During the annual Ceremony of Twelve, he receives an unusual assignment: he must become the next Receiver of Memory.

    Under the guidance of an older man known as the Giver, Jonas begins experiencing memories of a world filled with colors, emotions, beauty, and suffering.

    As his understanding grows, he starts questioning the rules and values of the society he once trusted.`,

    characters: [
      { name: "Jonas", description: "A thoughtful boy chosen to receive the community's memories." },
      { name: "The Giver", description: "An elderly man who carries memories of the past." },
      { name: "Gabriel", description: "A young child whose situation becomes important to Jonas." },
      { name: "Asher", description: "Jonas's energetic and loyal childhood friend." },
      { name: "Fiona", description: "A kind young woman and friend of Jonas." }
    ],

    themes: [
      "Memory",
      "Freedom",
      "Individuality",
      "Emotions",
      "Social Control",
      "The Value of Choice"
    ],

    whyRead: [
      "Explore deep philosophical ideas in a short novel.",
      "Reflect on freedom, happiness, and individuality.",
      "Discover the importance of human memories.",
      "Enjoy a mysterious and emotionally meaningful story."
    ],

    readingExperience: `A relatively short and accessible novel with powerful philosophical questions. Its calm writing style contrasts with the disturbing implications of its fictional society.`,

    similarBookIds: [4, 5, 7]
  },

  {
    id: 7,
    title: "The Handmaid’s Tale",
    author: "Margaret Atwood",
    genre: "Dystopian",
    year: 1985,
    image: "The Handmaid’s Tale.jpg",
    description: "A woman struggles to preserve her identity under an oppressive regime.",
    originalLanguage: "English",
    country: "Canada",
    pages: "Approximately 300–350, depending on the edition",
    literaryPeriod: "Speculative and Dystopian Fiction",
    setting: "The Republic of Gilead, a fictional totalitarian state",
    readingLevel: "Advanced",
    mood: "Disturbing, reflective, oppressive",

    overview: `The Handmaid's Tale imagines a totalitarian society where women lose many fundamental rights and are assigned strict social roles.

    Through the perspective of Offred, Margaret Atwood examines political control, gender inequality, identity, religious extremism, and the importance of language and memory.

    The novel explores how authoritarian systems attempt to control both public behavior and private thought.`,

    plotSummary: `Offred lives in the Republic of Gilead, a regime that has replaced the former government of the United States.

    As a Handmaid, her life is tightly regulated, and she is denied personal freedom and independence.

    Through memories of her previous life, readers learn about the gradual changes that allowed the regime to gain control.

    While navigating a dangerous environment, Offred searches for ways to preserve her identity, understand those around her, and hold on to hope.`,

    characters: [
      { name: "Offred", description: "The narrator, a Handmaid struggling to preserve her identity and memories." },
      { name: "Serena Joy", description: "The Commander's wife, whose position reveals contradictions within Gilead." },
      { name: "The Commander", description: "A powerful official within the ruling system." },
      { name: "Nick", description: "A household worker whose intentions remain uncertain." },
      { name: "Moira", description: "Offred's independent friend who represents resistance." },
      { name: "Ofglen", description: "Another Handmaid whose behavior raises questions about loyalty and rebellion." }
    ],

    themes: [
      "Authoritarianism",
      "Women's Rights",
      "Identity",
      "Freedom",
      "Power and Control",
      "Resistance"
    ],

    whyRead: [
      "Explore an influential work of dystopian literature.",
      "Reflect on political power and personal freedom.",
      "Examine the relationship between language and control.",
      "Experience a distinctive and thought-provoking narrative voice."
    ],

    readingExperience: `A psychologically intense novel told through memories and fragmented observations. It explores disturbing themes including coercion, reproductive oppression, and loss of autonomy.`,

    similarBookIds: [6, 4]
  },

  {
    id: 8,
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    genre: "Drama",
    year: 2003,
    image: "The Kite Runner.jpg",
    description: "An emotional story of friendship, betrayal, guilt, and redemption.",
    originalLanguage: "English",
    country: "United States (author)",
    pages: "Approximately 350–400, depending on the edition",
    literaryPeriod: "Contemporary Literary Fiction",
    setting: "Afghanistan and the United States",
    readingLevel: "Intermediate",
    mood: "Heartbreaking, reflective, hopeful",

    overview: `The Kite Runner explores friendship, family, guilt, and the possibility of redemption against the changing political and social landscape of Afghanistan.

    Khaled Hosseini tells the story of Amir, whose childhood relationship with Hassan shapes his understanding of loyalty, courage, and responsibility.

    The novel examines how decisions made during childhood can continue influencing a person's life many years later.`,

    plotSummary: `Amir grows up in Kabul, Afghanistan, alongside Hassan, the son of his father's servant.

    Although the boys share a close childhood friendship, differences in class and ethnicity influence their relationship.

    A traumatic incident creates lasting guilt and changes the direction of their lives.

    Years later, after moving to the United States, Amir receives an opportunity to confront his past and consider what redemption truly requires.`,

    characters: [
      { name: "Amir", description: "The narrator, who struggles with guilt and his desire for approval." },
      { name: "Hassan", description: "Amir's loyal childhood companion, known for kindness and courage." },
      { name: "Baba", description: "Amir's father, whose expectations influence his son's life." },
      { name: "Rahim Khan", description: "A family friend who offers guidance and important information." },
      { name: "Soraya", description: "A woman Amir meets within the Afghan American community." },
      { name: "Assef", description: "A cruel antagonist whose actions affect several characters." }
    ],

    themes: [
      "Friendship",
      "Betrayal",
      "Guilt",
      "Redemption",
      "Family",
      "Displacement"
    ],

    whyRead: [
      "Experience a deeply emotional and memorable story.",
      "Explore friendship, responsibility, and forgiveness.",
      "Learn about Afghanistan through a fictional family narrative.",
      "Reflect on how people confront their past mistakes."
    ],

    readingExperience: `An emotional, accessible novel that deals with difficult subjects including violence, sexual assault, war, and displacement. Its first-person narration creates a strong connection with the protagonist.`,

    similarBookIds: [9, 1, 2]
  },

  {
    id: 9,
    title: "The Help",
    author: "Kathryn Stockett",
    genre: "Drama",
    year: 2009,
    image: "The Help.jpg",
    description: "Women in 1960s Mississippi challenge racial injustice through storytelling.",
    originalLanguage: "English",
    country: "United States",
    pages: "Approximately 450–550, depending on the edition",
    literaryPeriod: "Contemporary Historical Fiction",
    setting: "Jackson, Mississippi, during the early 1960s",
    readingLevel: "Intermediate",
    mood: "Emotional, courageous, socially conscious",

    overview: `The Help is a historical novel set during the American civil rights era.

    Through multiple narrators, it explores the lives of Black domestic workers and a young white aspiring writer living in segregated Mississippi.

    The story examines racism, social expectations, friendship, courage, and the risks involved in challenging injustice.

    The novel has also received criticism for aspects of its representation of Black experiences, making it a useful starting point for broader discussion.`,

    plotSummary: `Aibileen Clark and Minny Jackson work in white households in Jackson, Mississippi, where racial segregation shapes their everyday experiences.

    Eugenia "Skeeter" Phelan returns home after college and hopes to become a professional writer.

    As their lives intersect, the women begin a secret project to document the experiences of domestic workers.

    Their decision to share these stories creates personal risks and challenges the assumptions of their community.`,

    characters: [
      { name: "Aibileen Clark", description: "A thoughtful domestic worker whose observations guide much of the story." },
      { name: "Minny Jackson", description: "An outspoken and talented cook facing difficult circumstances." },
      { name: "Eugenia 'Skeeter' Phelan", description: "An aspiring writer questioning the values of her social circle." },
      { name: "Hilly Holbrook", description: "An influential woman who supports discriminatory practices." },
      { name: "Celia Foote", description: "A socially isolated woman who challenges certain expectations." }
    ],

    themes: [
      "Racism and Segregation",
      "Courage",
      "Friendship",
      "Social Change",
      "Storytelling",
      "Dignity"
    ],

    whyRead: [
      "Explore a character-driven historical novel.",
      "Consider the power and limitations of storytelling.",
      "Reflect on courage and social injustice.",
      "Discover multiple perspectives on life in segregated Mississippi."
    ],

    readingExperience: `A highly readable historical drama that combines humor with serious social issues. It is valuable to approach the novel critically and alongside historical accounts of the civil rights movement.`,

    similarBookIds: [8, 1]
  },

  {
    id: 10,
    title: "City of Bones",
    author: "Cassandra Clare",
    genre: "Fantasy",
    year: 2007,
    image: "City of Bones.jpg",
    description: "A teenager discovers a hidden supernatural world beneath New York City.",
    originalLanguage: "English",
    country: "United States",
    pages: "Approximately 485 in a common edition",
    literaryPeriod: "Young Adult Urban Fantasy",
    setting: "New York City and the supernatural Shadow World",
    readingLevel: "Intermediate",
    mood: "Magical, adventurous, mysterious",

    overview: `City of Bones is the first novel in The Mortal Instruments series.

    It introduces a secret world of Shadowhunters, demons, vampires, werewolves, and other supernatural beings existing alongside ordinary human society.

    Through Clary Fray's unexpected discoveries, Cassandra Clare explores identity, friendship, family secrets, trust, and belonging.`,

    plotSummary: `Clary Fray is an ordinary teenager living in New York City until she witnesses a strange confrontation at a nightclub.

    When she realizes that other people cannot see what she has witnessed, she begins questioning her understanding of reality.

    Soon afterward, her mother disappears, and Clary becomes involved with a group of demon hunters known as Shadowhunters.

    With the help of new allies, she investigates her family's hidden past and a dangerous conflict within the supernatural world.`,

    characters: [
      { name: "Clary Fray", description: "An artistic teenager discovering a mysterious supernatural heritage." },
      { name: "Jace Wayland", description: "A confident and skilled Shadowhunter with a complicated past." },
      { name: "Simon Lewis", description: "Clary's loyal best friend who becomes involved in the supernatural world." },
      { name: "Isabelle Lightwood", description: "A confident Shadowhunter known for her fighting skills." },
      { name: "Alec Lightwood", description: "A cautious Shadowhunter devoted to his family and responsibilities." },
      { name: "Valentine Morgenstern", description: "A powerful figure connected to conflicts within Shadowhunter society." }
    ],

    themes: [
      "Identity",
      "Family Secrets",
      "Friendship",
      "Loyalty",
      "Belonging",
      "Good and Evil"
    ],

    whyRead: [
      "Discover a richly imagined supernatural world.",
      "Enjoy action, mystery, friendship, and romance.",
      "Follow a protagonist uncovering her hidden identity.",
      "Begin a fantasy series with an expanding mythology."
    ],

    readingExperience: `A fast-paced urban fantasy adventure with supernatural action, mystery, romance, and an extensive cast. Ideal for readers who enjoy magical worlds hidden within contemporary cities.`,

    similarBookIds: [3, 5]
  }
];
