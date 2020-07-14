// eslint-disable
// this is an auto generated file. This will be overwritten

export const getAnnouncement = `query GetAnnouncement($id: ID!) {
  getAnnouncement(id: $id) {
    id
    name
    posts {
      items {
        id
        createdAt
        postMessage
        postMediaValue
        postOwnerUsername
        postOwnerId
        postContent
        liked
        senderId
        storeId
      }
      nextToken
    }
    announcementImage
    announcementMessage
    storeId
    likes
    liked
  }
}
`;
export const listAnnouncements = `query ListAnnouncements(
  $filter: ModelAnnouncementFilterInput
  $limit: Int
  $nextToken: String
) {
  listAnnouncements(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      posts {
        nextToken
      }
      announcementImage
      announcementMessage
      storeId
      likes
      liked
    }
    nextToken
  }
}
`;
export const getPhoto = `query GetPhoto($id: ID!) {
  getPhoto(id: $id) {
    id
    uri
    fullsize
    thumbnail
  }
}
`;
export const listPhotos = `query ListPhotos(
  $filter: ModelPhotoFilterInput
  $limit: Int
  $nextToken: String
) {
  listPhotos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      uri
      fullsize
      thumbnail
    }
    nextToken
  }
}
`;
export const getFeedback = `query GetFeedback($id: ID!) {
  getFeedback(id: $id) {
    id
    createdAt
    feedbackMessage
    senderId
  }
}
`;
export const listFeedbacks = `query ListFeedbacks(
  $filter: ModelFeedbackFilterInput
  $limit: Int
  $nextToken: String
) {
  listFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      feedbackMessage
      senderId
    }
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    announcement {
      id
      name
      posts {
        nextToken
      }
      announcementImage
      announcementMessage
      storeId
      likes
      liked
    }
    comments {
      items {
        id
        content
      }
      nextToken
    }
    createdAt
    postMessage
    postMediaType
    postMediaValue
    postOwnerUsername
    postOwnerId
    postContent
    likes {
      items {
        id
        numberLikes
        likeOwnerUsername
        likeOwnerId
      }
      nextToken
    }
    liked
    senderId
    storeId
  }
}
`;
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      announcement {
        id
        name
        announcementImage
        announcementMessage
        storeId
        likes
        liked
      }
      comments {
        nextToken
      }
      createdAt
      postMessage
      postMediaType
      postMediaValue
      postOwnerUsername
      postOwnerId
      postContent
      likes {
        nextToken
      }
      liked
      senderId
      storeId
    }
    nextToken
  }
}
`;
export const getLike = `query GetLike($id: ID!) {
  getLike(id: $id) {
    id
    numberLikes
    likeOwnerUsername
    likeOwnerId
    post {
      id
      announcement {
        id
        name
        announcementImage
        announcementMessage
        storeId
        likes
        liked
      }
      comments {
        nextToken
      }
      createdAt
      postMessage
      postMediaType
      postMediaValue
      postOwnerUsername
      postOwnerId
      postContent
      likes {
        nextToken
      }
      liked
      senderId
      storeId
    }
  }
}
`;
export const listLikes = `query ListLikes(
  $filter: ModelLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      numberLikes
      likeOwnerUsername
      likeOwnerId
      post {
        id
        createdAt
        postMessage
        postMediaValue
        postOwnerUsername
        postOwnerId
        postContent
        liked
        senderId
        storeId
      }
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
    post {
      id
      announcement {
        id
        name
        announcementImage
        announcementMessage
        storeId
        likes
        liked
      }
      comments {
        nextToken
      }
      createdAt
      postMessage
      postMediaType
      postMediaValue
      postOwnerUsername
      postOwnerId
      postContent
      likes {
        nextToken
      }
      liked
      senderId
      storeId
    }
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      post {
        id
        createdAt
        postMessage
        postMediaValue
        postOwnerUsername
        postOwnerId
        postContent
        liked
        senderId
        storeId
      }
    }
    nextToken
  }
}
`;
export const getRecognition = `query GetRecognition($id: ID!) {
  getRecognition(id: $id) {
    id
    description
    completed
    media
    mediaValue
    createdAt
    senderName
    receiverName
    recognitionValue
    recognitionMessage
    mediaType
    senderId
    receiverId
    employee {
      id
      name
      profileImageUri
      userEmailAddress
      termsAccepted
      username
      active
      createdAt
      pointCount
      recognitionCount
      badgeCount
      posts {
        id
        createdAt
        postMessage
        postMediaValue
        postOwnerUsername
        postOwnerId
        postContent
        liked
        senderId
        storeId
      }
      rewardCount
      rewards {
        nextToken
      }
      badges {
        nextToken
      }
      recognitions {
        nextToken
      }
      yumgivenname
      yumdob
      yumusertype
      yumstoreid
      profileCompletionStatus
      version
    }
    likesRecognition {
      items {
        id
        numberLikes
        likeOwnerUsername
        likeOwnerId
      }
      nextToken
    }
  }
}
`;
export const listRecognitions = `query ListRecognitions(
  $filter: ModelRecognitionFilterInput
  $limit: Int
  $nextToken: String
) {
  listRecognitions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      description
      completed
      media
      mediaValue
      createdAt
      senderName
      receiverName
      recognitionValue
      recognitionMessage
      mediaType
      senderId
      receiverId
      employee {
        id
        name
        profileImageUri
        userEmailAddress
        termsAccepted
        username
        active
        createdAt
        pointCount
        recognitionCount
        badgeCount
        rewardCount
        yumgivenname
        yumdob
        yumusertype
        yumstoreid
        profileCompletionStatus
        version
      }
      likesRecognition {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getRecognitionLike = `query GetRecognitionLike($id: ID!) {
  getRecognitionLike(id: $id) {
    id
    numberLikes
    likeOwnerUsername
    likeOwnerId
    recognition {
      id
      description
      completed
      media
      mediaValue
      createdAt
      senderName
      receiverName
      recognitionValue
      recognitionMessage
      mediaType
      senderId
      receiverId
      employee {
        id
        name
        profileImageUri
        userEmailAddress
        termsAccepted
        username
        active
        createdAt
        pointCount
        recognitionCount
        badgeCount
        rewardCount
        yumgivenname
        yumdob
        yumusertype
        yumstoreid
        profileCompletionStatus
        version
      }
      likesRecognition {
        nextToken
      }
    }
  }
}
`;
export const listRecognitionLikes = `query ListRecognitionLikes(
  $filter: ModelRecognitionLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  listRecognitionLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      numberLikes
      likeOwnerUsername
      likeOwnerId
      recognition {
        id
        description
        completed
        mediaValue
        createdAt
        senderName
        receiverName
        recognitionValue
        recognitionMessage
        senderId
        receiverId
      }
    }
    nextToken
  }
}
`;
export const getEmployee = `query GetEmployee($id: ID!) {
  getEmployee(id: $id) {
    id
    name
    profileImageUri
    userEmailAddress
    termsAccepted
    username
    active
    createdAt
    pointCount
    recognitionCount
    badgeCount
    posts {
      id
      announcement {
        id
        name
        announcementImage
        announcementMessage
        storeId
        likes
        liked
      }
      comments {
        nextToken
      }
      createdAt
      postMessage
      postMediaType
      postMediaValue
      postOwnerUsername
      postOwnerId
      postContent
      likes {
        nextToken
      }
      liked
      senderId
      storeId
    }
    rewardCount
    rewards {
      items {
        id
        name
        description
        completed
        createdAt
        receiverName
      }
      nextToken
    }
    badges {
      items {
        id
        name
        description
        likes
        createdAt
        storeId
        receiverName
        receiverId
      }
      nextToken
    }
    recognitions {
      items {
        id
        description
        completed
        mediaValue
        createdAt
        senderName
        receiverName
        recognitionValue
        recognitionMessage
        senderId
        receiverId
      }
      nextToken
    }
    yumgivenname
    yumdob
    yumusertype
    yumstoreid
    profileCompletionStatus
    version
  }
}
`;
export const listEmployees = `query ListEmployees(
  $filter: ModelEmployeeFilterInput
  $limit: Int
  $nextToken: String
) {
  listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      profileImageUri
      userEmailAddress
      termsAccepted
      username
      active
      createdAt
      pointCount
      recognitionCount
      badgeCount
      posts {
        id
        createdAt
        postMessage
        postMediaValue
        postOwnerUsername
        postOwnerId
        postContent
        liked
        senderId
        storeId
      }
      rewardCount
      rewards {
        nextToken
      }
      badges {
        nextToken
      }
      recognitions {
        nextToken
      }
      yumgivenname
      yumdob
      yumusertype
      yumstoreid
      profileCompletionStatus
      version
    }
    nextToken
  }
}
`;
export const getBadge = `query GetBadge($id: ID!) {
  getBadge(id: $id) {
    id
    name
    description
    likes
    createdAt
    storeId
    receiverName
    receiverId
    employee {
      id
      name
      profileImageUri
      userEmailAddress
      termsAccepted
      username
      active
      createdAt
      pointCount
      recognitionCount
      badgeCount
      posts {
        id
        createdAt
        postMessage
        postMediaValue
        postOwnerUsername
        postOwnerId
        postContent
        liked
        senderId
        storeId
      }
      rewardCount
      rewards {
        nextToken
      }
      badges {
        nextToken
      }
      recognitions {
        nextToken
      }
      yumgivenname
      yumdob
      yumusertype
      yumstoreid
      profileCompletionStatus
      version
    }
    likesBadge {
      items {
        id
        numberLikes
        likeOwnerUsername
        likeOwnerId
      }
      nextToken
    }
  }
}
`;
export const listBadges = `query ListBadges(
  $filter: ModelBadgeFilterInput
  $limit: Int
  $nextToken: String
) {
  listBadges(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      likes
      createdAt
      storeId
      receiverName
      receiverId
      employee {
        id
        name
        profileImageUri
        userEmailAddress
        termsAccepted
        username
        active
        createdAt
        pointCount
        recognitionCount
        badgeCount
        rewardCount
        yumgivenname
        yumdob
        yumusertype
        yumstoreid
        profileCompletionStatus
        version
      }
      likesBadge {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getBadgeLike = `query GetBadgeLike($id: ID!) {
  getBadgeLike(id: $id) {
    id
    numberLikes
    likeOwnerUsername
    likeOwnerId
    badge {
      id
      name
      description
      likes
      createdAt
      storeId
      receiverName
      receiverId
      employee {
        id
        name
        profileImageUri
        userEmailAddress
        termsAccepted
        username
        active
        createdAt
        pointCount
        recognitionCount
        badgeCount
        rewardCount
        yumgivenname
        yumdob
        yumusertype
        yumstoreid
        profileCompletionStatus
        version
      }
      likesBadge {
        nextToken
      }
    }
  }
}
`;
export const listBadgeLikes = `query ListBadgeLikes(
  $filter: ModelBadgeLikeFilterInput
  $limit: Int
  $nextToken: String
) {
  listBadgeLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      numberLikes
      likeOwnerUsername
      likeOwnerId
      badge {
        id
        name
        description
        likes
        createdAt
        storeId
        receiverName
        receiverId
      }
    }
    nextToken
  }
}
`;
export const getReward = `query GetReward($id: ID!) {
  getReward(id: $id) {
    id
    name
    description
    completed
    createdAt
    receiverName
    employee {
      id
      name
      profileImageUri
      userEmailAddress
      termsAccepted
      username
      active
      createdAt
      pointCount
      recognitionCount
      badgeCount
      posts {
        id
        createdAt
        postMessage
        postMediaValue
        postOwnerUsername
        postOwnerId
        postContent
        liked
        senderId
        storeId
      }
      rewardCount
      rewards {
        nextToken
      }
      badges {
        nextToken
      }
      recognitions {
        nextToken
      }
      yumgivenname
      yumdob
      yumusertype
      yumstoreid
      profileCompletionStatus
      version
    }
  }
}
`;
export const listRewards = `query ListRewards(
  $filter: ModelRewardFilterInput
  $limit: Int
  $nextToken: String
) {
  listRewards(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      completed
      createdAt
      receiverName
      employee {
        id
        name
        profileImageUri
        userEmailAddress
        termsAccepted
        username
        active
        createdAt
        pointCount
        recognitionCount
        badgeCount
        rewardCount
        yumgivenname
        yumdob
        yumusertype
        yumstoreid
        profileCompletionStatus
        version
      }
    }
    nextToken
  }
}
`;
export const getStoreId = `query GetStoreId($id: ID!) {
  getStoreId(id: $id) {
    id
    name
  }
}
`;
export const listStoreIds = `query ListStoreIds(
  $filter: ModelStoreIdFilterInput
  $limit: Int
  $nextToken: String
) {
  listStoreIds(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
    }
    nextToken
  }
}
`;
export const searchEmployees = `query SearchEmployees(
  $filter: SearchableEmployeeFilterInput
  $sort: SearchableEmployeeSortInput
  $limit: Int
  $nextToken: Int
) {
  searchEmployees(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      profileImageUri
      userEmailAddress
      termsAccepted
      username
      active
      createdAt
      pointCount
      recognitionCount
      badgeCount
      posts {
        id
        createdAt
        postMessage
        postMediaValue
        postOwnerUsername
        postOwnerId
        postContent
        liked
        senderId
        storeId
      }
      rewardCount
      rewards {
        nextToken
      }
      badges {
        nextToken
      }
      recognitions {
        nextToken
      }
      yumgivenname
      yumdob
      yumusertype
      yumstoreid
      profileCompletionStatus
      version
    }
    nextToken
  }
}
`;
