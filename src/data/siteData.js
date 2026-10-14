import { Award, Globe2, GraduationCap, Microscope, ShieldCheck, Sparkles, Trophy, Users } from 'lucide-react';

export const school = {
  name: 'Excellent Greater Height Standard Academy',
  phone: '07038120089',
  phoneHref: 'tel:+2347038120089',
  email: 'excellentgreaterheight@example.com',
  address: 'Road 5, Ire Akari, Idioya, off Ayegun Oleyo Road, Ibadan'
};

export const photos = {
  hero: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1450&q=85',
  campus: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1100&q=85',
  kindergarten: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=650&q=80',
  nursery: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=650&q=80',
  basic: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=650&q=80',
  jss: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=650&q=80',
  ss: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=650&q=80',
  sports: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=650&q=80',
  admissions: 'https://images.unsplash.com/photo-1472162072942-cd5147eb3902?auto=format&fit=crop&w=1100&q=85'
};

export const programs = [{
  title: 'Kindergarten',
  summary: 'A warm, play-rich introduction to learning and friendship.',
  level: 'Kindergarten',
  image: photos.kindergarten,
  overview: 'Children begin learning through play, stories, creative activities, conversation, and familiar classroom routines.',
  benefits: 'Supports early language, confidence, curiosity, independence, and positive relationships with other learners.'
}, {
  title: 'Nursery',
  summary: 'Early learning foundations across Nursery 1 and Nursery 2.',
  level: 'Nursery 1–2',
  image: photos.nursery,
  overview: 'Nursery builds on early experiences with guided activities in language, number awareness, creative expression, and discovery.',
  benefits: 'Helps learners strengthen communication, early literacy and numeracy, concentration, and readiness for Basic classes.'
}, {
  title: 'Basic',
  summary: 'Confident learners build core skills from Basic 1 through Basic 5.',
  level: 'Basic 1–5',
  image: photos.basic,
  overview: 'Pupils develop a broad foundation across core subjects while practising reading, writing, number skills, and problem solving.',
  benefits: 'Builds subject confidence, good study habits, teamwork, clear communication, and a strong foundation for secondary school.'
}, {
  title: 'Junior Secondary',
  summary: 'A broad, engaging secondary foundation for JSS 1 to JSS 3.',
  level: 'JSS 1–3',
  image: photos.jss,
  overview: 'Junior Secondary introduces learners to a wider range of subjects and encourages them to take greater responsibility for their learning.',
  benefits: 'Strengthens critical thinking, organisation, independence, collaboration, and preparation for Senior Secondary.'
}, {
  title: 'Senior Secondary',
  summary: 'Focused subject learning and preparation across SS 1 to SS 3.',
  level: 'SS 1–3',
  image: photos.ss,
  overview: 'Senior Secondary gives pupils the opportunity to deepen their subject knowledge and prepare for further study and future goals.',
  benefits: 'Encourages focused study, self-management, informed next-step planning, and confidence as learners approach graduation.'
}];

export const announcements = [{
  category: 'Term Update',
  title: 'A fresh start for the new term',
  date: '9 November 2026',
  time: '8:00 am',
  summary: 'We look forward to welcoming pupils back for a new season of learning.',
  body: 'Pupils return for the new term on Monday, 9 November. Families are asked to arrive from 8:00 am and bring the books and materials needed for the first week.',
  image: photos.campus,
  alt: 'School campus in the morning'
}, {
  category: 'School Event',
  title: 'Families invited to our school open day',
  date: '20 November 2026',
  time: '10:00 am–1:00 pm',
  summary: 'Families interested in the school are welcome to join us for an open day.',
  body: 'Visitors can meet members of the school team, see learning spaces, and ask questions about classes and admissions.',
  image: photos.admissions,
  alt: 'Children reading together outdoors'
}, {
  category: 'Sports & Activities',
  title: 'Celebrating teamwork at our school sports day',
  date: '4 December 2026',
  time: '9:00 am–12:30 pm',
  summary: 'A community event celebrating movement, teamwork, and school spirit.',
  body: 'Pupils will take part in friendly races and team activities, with families welcome to cheer them on.',
  image: photos.sports,
  alt: 'Students taking part in sports'
}];

export const features = [[Sparkles, 'Whole-Child Learning', 'Supporting academic, creative and personal growth.'], [Users, 'Dedicated Teachers', 'Guidance and encouragement at every stage.'], [Microscope, 'Curious Minds', 'Learning that invites questions and exploration.'], [Globe2, 'A Wider Outlook', 'Helping pupils grow into thoughtful citizens.'], [ShieldCheck, 'A Caring Community', 'A welcoming environment for every learner.']];

export const statistics = [[Award, 'Learning', 'Built on strong foundations'], [Users, 'Every Child', 'Known and encouraged'], [GraduationCap, 'All Stages', 'Kindergarten to SS 3'], [Trophy, 'Ambition', 'Room to grow and achieve'], [Globe2, 'Community', 'Learning together']];

export const facilities = [['Bright Classrooms', 'Inviting, well-lit classrooms give pupils a comfortable place to learn, ask questions, and work together.', 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80', 'Bright classroom learning space'], ['School Playground', 'A cheerful outdoor area for play, movement, and time with friends.', photos.admissions, 'Children reading and spending time outdoors'], ['Library & Reading', 'A quiet place for pupils to enjoy books, build reading habits, and study.', 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80', 'School library bookshelves'], ['Science & Practical Learning', 'Hands-on activities help pupils explore ideas and connect learning with the world around them.', 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=650&q=80', 'Science learning equipment'], ['Sports & Recreation', 'Space for games and physical activity supports teamwork, confidence, and wellbeing.', photos.sports, 'Students taking part in sport']];

export const teachers = [['Teacher 1', 'Kindergarten Teacher', 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'], ['Teacher 2', 'Nursery 1–2 Teacher', 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80'], ['Teacher 3', 'Basic 1–5 Teacher', 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80'], ['Teacher 4', 'JSS 1–3 Teacher', 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80'], ['Teacher 5', 'SS 1–3 Teacher', 'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=600&q=80']];
