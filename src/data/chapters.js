import { images } from '@/data/images';

export const chapters = [
  {
    id: 'arrival',
    number: '01',
    eyebrow: 'Chapter One',
    title: 'We Welcome You Home',
    headline: 'Your Journey Begins at the Airport. Your Welcome Begins in Our Hearts.',
    body: [
      'From the moment you arrive, we take care of you. We welcome you at the airport, help you settle into the journey, and take you towards the cultural heart of Tamil Nadu.',
      'No confusion. No rushing to figure everything out. Just a warm welcome, familiar faces, and the beginning of something meaningful.'
    ],
    image: images.welcome,
    imageAlt: 'A host welcoming a traveller with a jasmine garland at the airport'
  },
  {
    id: 'cholas',
    number: '02',
    eyebrow: 'Chapter Two',
    title: 'Discover the World of the Cholas',
    headline: 'Where Stone Remembers, and Stories Still Breathe.',
    body: [
      'Stand beneath the magnificent architecture of the Chola era. Discover the stories behind ancient temples, the extraordinary skill of bronze artisans, and the ideas that shaped one of Tamil civilisation’s remarkable chapters.',
      'We don’t want you to simply look at an ancient monument. We want you to understand the people, beliefs, artistry, and ambition behind it.'
    ],
    note: 'We visit these places as guests of a living tradition. Historical context is shared carefully and honestly, and access to ongoing religious rituals is never assumed.',
    image: images.temple,
    imageAlt: 'The Brihadisvara Temple at Thanjavur in warm golden evening light'
  },
  {
    id: 'food',
    number: '03',
    eyebrow: 'Chapter Three',
    title: 'Taste the Tamil Nadu Beyond the Banana Leaf',
    headline: 'The Real Feast Begins Before the Banana Leaf.',
    body: [
      'Tamil food is more than a meal served on a leaf. It is memory, medicine, hospitality, seasonality, and generations of kitchen wisdom.',
      'Begin with the comforting warmth of dhonnai kanji. Discover the rustic flavours of koozh, the everyday foods that nourish communities, traditional preparations, seasonal ingredients, and recipes that rarely appear on a restaurant menu.',
      'Sit with local hosts. Learn why ingredients matter. Listen to the stories behind the dishes. Taste the difference between food made for visitors and food made the way a community has always known it.'
    ],
    image: images.kanji,
    imageAlt: 'Dhonnai kanji served in a leaf cup beside a clay pot of koozh',
    gallery: [
      { src: images.kitchen, alt: 'Hands stirring a clay pot over a wood fire in a village kitchen' },
      { src: images.bananaLeaf, alt: 'A traditional Tamil meal served on a banana leaf with small earthen bowls' }
    ]
  },
  {
    id: 'village',
    number: '04',
    eyebrow: 'Chapter Four',
    title: 'One Night, A Different Kind of Belonging',
    headline: 'For One Night, Don’t Be a Guest. Be Part of the Village.',
    body: [
      'As evening settles over the villages of Thanjavur, slow down.',
      'Stay in a welcoming village setting. Walk along familiar village streets. Experience the rhythm of local life. Share conversations, learn about everyday customs, and discover the extraordinary beauty of ordinary moments.',
      'There is no performance to watch and no artificial village experience to buy. There is simply an opportunity to connect respectfully with the people and place around you.',
      'For one night, experience what it feels like to belong somewhere new.'
    ],
    note: 'Village life is shared, never staged. We never present our neighbours as an attraction, and time inside a family home happens only by invitation.',
    image: images.villageStreet,
    imageAlt: 'A Thanjavur village lane at dusk with lamps glowing in doorways'
  },
  {
    id: 'stay',
    number: '05',
    eyebrow: 'Chapter Five',
    title: 'Traditional Roots. Thoughtful Comfort.',
    headline: 'Experience the Village. Rest Easy.',
    body: [
      'Authenticity should never mean compromising on cleanliness or comfort.',
      'Our stays are carefully selected for hygiene, thoughtful hospitality, comfortable bedding, clean bathrooms, and a peaceful place to rest after a day of discovery.',
      'Experience the character of the region while enjoying the reassurance of a well-maintained stay.'
    ],
    note: 'Comfort here means clean, cared-for and quiet — not necessarily luxurious. We tell you honestly what each stay offers before you choose it.',
    image: images.stay,
    imageAlt: 'A simple traditional guest room with a teak bed and red oxide floor'
  },
  {
    id: 'farewell',
    number: '06',
    eyebrow: 'Chapter Six',
    title: 'Every Goodbye Carries a Story',
    headline: 'You Came to See Tamil Nadu. You Leave Carrying a Piece of It.',
    body: [
      'After the conversations, the flavours, the temple stories, and the quiet moments of village life, your journey comes full circle.',
      'We arrange your return transfer to the airport, so you can leave without worrying about the logistics.',
      'But what stays with you is something harder to put into an itinerary: a new understanding of a culture, the memory of a shared meal, and the feeling that a place welcomed you rather than simply hosted you.'
    ],
    image: images.farewell,
    imageAlt: 'A traveller and an elderly host holding hands at a village doorway at sunrise'
  }
];

export default chapters;