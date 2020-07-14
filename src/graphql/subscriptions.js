// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateAnnouncement = `subscription OnCreateAnnouncement {
  onCreateAnnouncement {
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
export const onUpdateAnnouncement = `subscription OnUpdateAnnouncement {
  onUpdateAnnouncement {
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
export const onDeleteAnnouncement = `subscription OnDeleteAnnouncement {
  onDeleteAnnouncement {
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
export const onCreatePhoto = `subscription OnCreatePhoto {
  onCreatePhoto {
    id
    uri
    fullsize
    thumbnail
  }
}
`;
export const onUpdatePhoto = `subscription OnUpdatePhoto {
  onUpdatePhoto {
    id
    uri
    fullsize
    thumbnail
  }
}
`;
export const onDeletePhoto = `subscription OnDeletePhoto {
  onDeletePhoto {
    id
    uri
    fullsize
    thumbnail
  }
}
`;
export const onCreateFeedback = `subscription OnCreateFeedback {
  onCreateFeedback {
    id
    createdAt
    feedbackMessage
    senderId
  }
}
`;
export const onUpdateFeedback = `subscription OnUpdateFeedback {
  onUpdateFeedback {
    id
    createdAt
    feedbackMessage
    senderId
  }
}
`;
export const onDeleteFeedback = `subscription OnDeleteFeedback {
  onDeleteFeedback {
    id
    createdAt
    feedbackMessage
    senderId
  }
}
`;
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
export const onCreateLike = `subscription OnCreateLike {
  onCreateLike {
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
export const onUpdateLike = `subscription OnUpdateLike {
  onUpdateLike {
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
export const onDeleteLike = `subscription OnDeleteLike {
  onDeleteLike {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
export const onCreateRecognition = `subscription OnCreateRecognition {
  onCreateRecognition {
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
export const onUpdateRecognition = `subscription OnUpdateRecognition {
  onUpdateRecognition {
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
export const onDeleteRecognition = `subscription OnDeleteRecognition {
  onDeleteRecognition {
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
export const onCreateRecognitionLike = `subscription OnCreateRecognitionLike {
  onCreateRecognitionLike {
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
export const onUpdateRecognitionLike = `subscription OnUpdateRecognitionLike {
  onUpdateRecognitionLike {
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
export const onDeleteRecognitionLike = `subscription OnDeleteRecognitionLike {
  onDeleteRecognitionLike {
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
export const onCreateEmployee = `subscription OnCreateEmployee {
  onCreateEmployee {
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
export const onUpdateEmployee = `subscription OnUpdateEmployee {
  onUpdateEmployee {
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
export const onDeleteEmployee = `subscription OnDeleteEmployee {
  onDeleteEmployee {
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
export const onCreateBadge = `subscription OnCreateBadge {
  onCreateBadge {
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
export const onUpdateBadge = `subscription OnUpdateBadge {
  onUpdateBadge {
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
export const onDeleteBadge = `subscription OnDeleteBadge {
  onDeleteBadge {
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
export const onCreateBadgeLike = `subscription OnCreateBadgeLike {
  onCreateBadgeLike {
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
export const onUpdateBadgeLike = `subscription OnUpdateBadgeLike {
  onUpdateBadgeLike {
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
export const onDeleteBadgeLike = `subscription OnDeleteBadgeLike {
  onDeleteBadgeLike {
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
export const onCreateReward = `subscription OnCreateReward {
  onCreateReward {
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
export const onUpdateReward = `subscription OnUpdateReward {
  onUpdateReward {
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
export const onDeleteReward = `subscription OnDeleteReward {
  onDeleteReward {
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
export const onCreateStoreId = `subscription OnCreateStoreId {
  onCreateStoreId {
    id
    name
  }
}
`;
export const onUpdateStoreId = `subscription OnUpdateStoreId {
  onUpdateStoreId {
    id
    name
  }
}
`;
export const onDeleteStoreId = `subscription OnDeleteStoreId {
  onDeleteStoreId {
    id
    name
  }
}
`;
