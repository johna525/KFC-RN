import moment from 'moment-mini';

export const FeedItems = [
  {
    key: 'f0ad2865-4a7a-4d71-877f-786f0ab89497',
    type: 'announcement',
    image: 'https://via.placeholder.com/360x216.png',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque, ex in ullamcorper.',
    profileImage: 'https://via.placeholder.com/48x48.png',
    senderName: 'Colonel',
    likes: 485,
    liked: false,
    timestamp: '2019-01-16T19:35:08+00:00'
  },
  {
    key: '1070710b-3ea4-4393-8034-0f09ad53e846',
    type: 'post',
    image: 'https://via.placeholder.com/360x216.png',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc cursus odio ut enim iaculis consectetur.',
    likes: 394,
    liked: false,
    postedBy: 'Jenny Smith',
    profileImage: 'https://via.placeholder.com/32x32.png',
    timestamp: '2019-01-15T01:35:08+00:00'
  },
  {
    key: '7d67fbb0-41dd-4a20-8463-134bc78dac68',
    type: 'recognition',
    value: 'grit',
    profileImage: 'https://via.placeholder.com/48x48.png',
    senderName: 'John Smith',
    receiverName: 'Jenny Smith',
    likes: 842,
    liked: true,
    timestamp: '2019-01-14T21:35:08+00:00'
  },
  {
    key: '211da0de-05db-4cd8-b6e2-e9411057e070',
    type: 'badge',
    profileImage: 'https://via.placeholder.com/48x48.png',
    receiverName: 'Jenny Smith',
    badgeType: 'newbie',
    likes: 485,
    liked: true,
    timestamp: '2019-01-14T16:35:08+00:00'
  },
  {
    key: '1070710b-3ea4-4393-8034-0f09ad53e788',
    type: 'post',
    text:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer scelerisque, ex in ullamcorper convallis. (…)',
    likes: 485,
    liked: false,
    postedBy: 'Jenny Smith',
    profileImage: 'https://via.placeholder.com/32x32.png',
    timestamp: '2019-01-14T12:35:08+00:00'
  }
];

export const TeamMembers = [
  {
    name: 'Vivan Ye',
    rank: 'HATCHLING',
    profileImage: 'http://i.pravatar.cc/150?u=uno'
  },
  {
    name: 'Stormie Hansford',
    rank: 'NEWBIE',
    profileImage: 'http://i.pravatar.cc/150?u=seiss'
  },
  {
    name: 'Mel Shatley',
    rank: 'CHICKEN',
    profileImage: 'http://i.pravatar.cc/150?u=dos'
  },
  {
    name: 'Magan Lisk',
    rank: 'CHICK',
    profileImage: 'http://i.pravatar.cc/150?u=tress'
  },
  {
    name: 'Alan Martí',
    rank: 'HATCHLING',
    profileImage: 'http://i.pravatar.cc/150?u=siete'
  },
  {
    name: 'Jacelyn Rizer',
    rank: 'CHICKEN',
    profileImage: 'http://i.pravatar.cc/150?u=kuatro'
  },
  {
    name: 'Ashlie Filice',
    rank: 'NEWBIE',
    profileImage: 'http://i.pravatar.cc/150?u=cinco'
  },
  {
    name: 'Simon Kovac',
    rank: 'CHICK',
    profileImage: 'http://i.pravatar.cc/150?u=oochoo'
  },
  {
    name: 'Conan Matusov',
    rank: 'CHICK',
    profileImage: 'http://i.pravatar.cc/150?u=conan'
  },
  {
    name: 'Vicente de la Cruz',
    rank: 'CHICKEN',
    profileImage: 'http://i.pravatar.cc/150?u=vicentinocruz'
  },
  {
    name: 'Uesugi Suzuki',
    rank: 'CHICK',
    profileImage: 'http://i.pravatar.cc/150?u=uzukiyonietre'
  },
  {
    name: 'Dalila Pecora',
    rank: 'NEWBIE',
    profileImage: 'http://i.pravatar.cc/150?u=pecoradori'
  },
  {
    name: 'Aleisha Pernell',
    rank: 'CHICK',
    profileImage: 'http://i.pravatar.cc/150?u=lishiona'
  },
  {
    name: 'Chassidy Tindel',
    rank: 'CHICKEN',
    profileImage: 'http://i.pravatar.cc/150?u=tindellela'
  },
  {
    name: 'Giuseppe Rehman',
    rank: 'HATCHLING',
    profileImage: 'http://i.pravatar.cc/150?u=guisepo'
  },
  {
    name: 'Bernadine Griest',
    rank: 'CHICK',
    profileImage: 'http://i.pravatar.cc/150?u=narder'
  }
];

export const Notifications = [
  {
    key: '1070710b-3ea4-4393-8034-0f09ad53e846',
    type: 'message',
    title: 'RGM Yearly event',
    profileImage: 'https://api.adorable.io/avatars/144/colonol@adorable.png',
    messageType: 'announcement',
    excerpt: 'What an incredible morning! Today we (…)',
    read: false
  },
  {
    key: 'f0ad2865-4a7a-4d71-877f-786f0ab89497',
    type: 'message',
    title: 'RGM Monthly Event',
    profileImage: 'https://api.adorable.io/avatars/144/colonol@adorable.png',
    messageType: 'direct',
    excerpt: 'Lorem ipsum dolor sit (…)',
    read: false
  },
  {
    key: '7d67fbb0-41dd-4a20-8463-134bc78dac68',
    type: 'recognition',
    senderName: 'Bernadine Griest',
    profileImage: 'https://api.adorable.io/avatars/144/Bernadine@adorable.png',
    value: 'grit',
    read: true
  },
  {
    key: '1070710b-3ea4-4393-8034-0f09ad53e788',
    type: 'learning',
    title: 'January Window online!',
    description: 'Discover the new burger…',
    read: true
  }
];

export const Notification = {
  title: 'RGM Yearly event',
  profileImage: 'https://api.adorable.io/avatars/144/colonol@adorable.png',
  fromName: 'RSC',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mi enim, vehicula eget eros vel, egestas feugiat ligula. Morbi convallis aliquam porta.\n\nProin quis mauris est. Suspendisse malesuada lacinia suscipit. Nunc pellentesque lorem faucibus, faucibus justo eget, elementum augue. Ut justo nulla, pulvinar vitae dolor at, lobortis rutrum nisl. Morbi eget arcu ullamcorper, vehicula justo eu, tincidunt felis. Donec vehicula iaculis hendrerit. Nullam sodales pharetra lacus, non malesuada velit venenatis sed. Ut nunc odio, sagittis ac ornare at, accumsan et sem. Suspendisse potenti.'
};

export const ProfileData = {
  name: 'Rich Thompson',
  profileImage: 'https://api.adorable.io/avatars/144/colonol@adorable.png',
  store: 'Woking',
  position: 'Cook',
  dob: '23rd Aug.',
  pointCount: 18,
  recognitionCount: 12,
  recognitionCountDetails: {
    authenticity: 2,
    grit: 5,
    integrity: 8,
    generosity: 3,
    hospitality: 0,
    hardwork: 0
  },
  completedRanks: ['newbie'],
  currentRank: 'newbie',
  badgeCount: 3,
  completedBadges: ['firstRecognition', 'firstMessageSent', 'firstLikeGiven'],
  rewardCount: 0,
};

export const Recognition = {
  senderName: 'Bernadine Griest',
  value: 'grit',
  points: 10,
  message: 'You’re a star! 🌟✨',
  media: {
    type: 'gif',
    value: 'gifMrBean'
  }
};

const createFakeDate = (index) => {
  const day = moment().add(index, 'days');
  return {
    empHSId: -1,
    empPosId: -1,
    jobHsId: 786323133,
    jobPosId: 11,
    inDate: {
      day: day.format('D'),
      month: day.format('M'),
      year: day.format('YYYY')
    },
    outDate: {
      day: day.format('D'),
      month: day.format('M'),
      year: day.format('YYYY')
    },
    inTime: {
      hours: 9,
      militaryTime: true,
      minutes: 30,
      seconds: 0
    },
    outTime: {
      hours: 16,
      militaryTime: true,
      minutes: 0,
      seconds: 0
    },
    weekStart: {
      day: 2,
      month: 5,
      year: 2018
    },
    weekEnd: {
      day: 8,
      month: 5,
      year: 2018
    },
    locationId: 787124196,
    scheduleId: 781691586,
    payRate: 0,
    ovtRate: 0,
    ovtMinutes: 0,
    regMinutes: 420,
    specialPay: 0
  };
};

export const MockShifts = [];

for (let index = 0; index < 7; index++) {
  MockShifts.push(createFakeDate(index));
}
