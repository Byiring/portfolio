export interface Project {
  id: string;
  title: string;
  year: string;
  category: string;
  thumbnail: string;
  images: string[];
  description: string;
  credits: string[];
  audioUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'afrobeat-complete',
    title: 'AFROBEAT DRUM+CHORDS+MELODY',
    year: '2024',
    category: 'MUSIC PRODUCTION',
    thumbnail: '/Album cover.jfif',
    images: [
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=2000',
    ],
    description: 'A single Afrobeat production track showcasing intricate drum patterns, rich chord progressions, and captivating melodies. This production represents the full spectrum of Afrobeat elements with modern production polish, created as a standalone piece highlighting individual instrumental layers and rhythmic complexity.',
    credits: ['Produced by Byiringiro Heritier', 'Arrangement by Heritage Studios'],
    audioUrl: '/AFROBEAT DRUM+CHORDS+MELODY.mp3'
  },
  {
    id: 'afrobeat-drums',
    title: 'AFROBEAT DRUMS ARRANGEMENT',
    year: '2024',
    category: 'MUSIC PRODUCTION',
    thumbnail: '/Album covers.jfif',
    images: [
      'https://images.unsplash.com/photo-1514525253344-f814d0743b17?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=2000',
    ],
    description: 'A focused Afrobeat drum arrangement production that highlights the percussive complexity of the genre. This single track features traditional African polyrhythms processed through modern electronic production, creating a powerful rhythmic foundation that exemplifies the drum-focused nature of Afrobeat music production.',
    credits: ['Drum Programming by Byiringiro Heritier', 'Percussion by Heritage Collective'],
    audioUrl: '/AFROBEAT DRUMS ARRANGEMENT.mp3'
  },
  {
    id: 'afrobeat-evolution',
    title: 'AFROBEAT EVOLUTION DRUM+CHORDS+MELODY',
    year: '2024',
    category: 'MUSIC PRODUCTION',
    thumbnail: '/Untitled Project.jpg',
    images: [
      '/Untitled Project.jpg',
    ],
    description: 'An evolutionary Afrobeat production that pushes the boundaries of traditional genre conventions while honoring its rhythmic roots. This single track features sophisticated drum programming with contemporary electronic elements, enriched chord progressions that blend African harmonic sensibilities with modern music theory, and innovative melodic structures that showcase the evolution of Afrobeat sound. The production demonstrates advanced audio techniques including layered percussion, dynamic sound design, and polished arrangement that bridges classic Afrobeat with forward-thinking production aesthetics.',
    credits: ['Produced by Byiringiro Heritier', 'Evolutionary Sound Design by Heritage Studios', 'Modern Arrangement by Analog Lab'],
    audioUrl: '/AFROBEAT EVOLUTION DRUM+CHORDS+MELODY.mp3'
  },
  {
    id: 'african-style-mixed',
    title: 'AFRICAN STYLE MIXED WITH AFROBEAT AND SWEET VIOLINS MELODIES',
    year: '2024',
    category: 'MUSIC PRODUCTION',
    thumbnail: '/Album cover.jfif',
    images: [
      '/Album cover.jfif',
    ],
    description: 'A sophisticated fusion production that seamlessly blends traditional African musical elements with contemporary Afrobeat rhythms and sweet violin melodies. This single track creates a unique sonic landscape where African percussion patterns meet modern electronic production, enriched by emotive violin arrangements that add depth and cultural authenticity. The production showcases advanced layering techniques, dynamic range processing, and innovative arrangement that bridges African heritage with modern production sensibilities.',
    credits: ['Produced by Byiringiro Heritier', 'African Elements by Heritage Collective', 'Sweet Violin Arrangement by Sound Architects'],
    audioUrl: '/AFRICAN STYLE MIXED WITH AFROBEAT AND SWEET VIOLINS MELODIES.mp3'
  },
  {
    id: 'afrobeat-drum-chords',
    title: 'AFROBEAT DRUM BEAT + CHORDS',
    year: '2024',
    category: 'MUSIC PRODUCTION',
    thumbnail: '/Album covers.jfif',
    images: [
      '/Album covers.jfif',
    ],
    description: 'A focused Afrobeat production that combines powerful drum programming with rich chord progressions to create a dynamic rhythmic foundation. This single track features intricate beat patterns that drive the energy, complemented by sophisticated harmonic structures that add musical depth and emotional resonance. The production demonstrates expert-level audio engineering with precise drum layering, balanced chord processing, and professional arrangement that showcases the essence of contemporary Afrobeat sound.',
    credits: ['Produced by Byiringiro Heritier', 'Drum Programming by Beat Masters', 'Chord Arrangement by Harmony Lab'],
    audioUrl: '/AFROBEAT_DRUM_BEAT_CHORDS.mp3'
  },
    {
    id: 'amapiano-beats',
    title: 'AMAPIANO DRUM BEATS ARRANGEMENT',
    year: '2023',
    category: 'MUSIC PRODUCTION',
    thumbnail: '/artwork.jfif',
    images: [
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=2000',
    ],
    description: 'A single Amapiano production track featuring the signature log drum basslines that define South Africa\'s premier house music genre. This individual track combines characteristic Amapiano drum patterns with syncopated percussion elements, creating the infectious rhythm that showcases the unique blend of deep house, jazz, and local South African sounds.',
    credits: ['Produced by Byiringiro Heritier', 'Amapiano Elements by SA Collective'],
    audioUrl: '/AMAPIANO DRUM BEATS ARRANGEMENT.mp3'
  },
  {
    id: 'afro-gako',
    title: 'NEW AFRO GAKO DRUM ARRANGEMENT',
    year: '2023',
    category: 'MUSIC PRODUCTION',
    thumbnail: '/download (2).jfif',
    images: [
      'https://images.unsplash.com/photo-1465847735666-3d843815ff8b?auto=format&fit=crop&q=80&w=2000',
      'https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&q=80&w=2000',
    ],
    description: 'A single experimental production track that bridges traditional Rwandan Afro Gako drumming patterns with contemporary electronic music production. This individual piece explores the fusion of heritage African drumming techniques with modern sound design, pushing the boundaries of what traditional rhythms can achieve in a digital audio landscape.',
    credits: ['Drum Arrangement by Byiringiro Heritier', 'Traditional Elements by Heritage Collective'],
    audioUrl: '/NEW AFRO GAKO DRUM ARRANGEMENT.mp3'
  },
  {
    id: 'traditional-beat',
    title: 'TRADITIONAL TRIAL BEAT',
    year: '2022',
    category: 'MUSIC PRODUCTION',
    thumbnail: '/that’s us by anson seabra.jfif',
    images: [
      'https://images.unsplash.com/photo-1459749411177-042180ce673c?auto=format&fit=crop&q=80&w=2000',
    ],
    description: 'A single traditional beat production that serves as both a tribute to African musical heritage and a foundation for contemporary production. This individual track explores authentic African rhythmic structures, preserving the cultural essence while demonstrating how these timeless patterns can be integrated into modern music production workflows.',
    credits: ['Traditional Arrangement by Byiringiro Heritier', 'Cultural Consultation by Heritage Elders'],
    audioUrl: '/TRADITIONAL TRIAL BEAT.mp3'
  },
  ];
