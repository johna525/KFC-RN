// eslint-disable
// this is an auto generated file. This will be overwritten

export const createAnnouncement = `mutation CreateAnnouncement($input: CreateAnnouncementInput!) {
  createAnnouncement(input: $input) {
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
export const updateAnnouncement = `mutation UpdateAnnouncement($input: UpdateAnnouncementInput!) {
  updateAnnouncement(input: $input) {
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
export const deleteAnnouncement = `mutation DeleteAnnouncement($input: DeleteAnnouncementInput!) {
  deleteAnnouncement(input: $input) {
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
export const createPhoto = `mutation CreatePhoto($input: CreatePhotoInput!) {
  createPhoto(input: $input) {
    id
    uri
    fullsize
    thumbnail
  }
}
`;
export const updatePhoto = `mutation UpdatePhoto($input: UpdatePhotoInput!) {
  updatePhoto(input: $input) {
    id
    uri
    fullsize
    thumbnail
  }
}
`;
export const deletePhoto = `mutation DeletePhoto($input: DeletePhotoInput!) {
  deletePhoto(input: $input) {
    id
    uri
    fullsize
    thumbnail
  }
}
`;
export const createFeedback = `mutation CreateFeedback($input: CreateFeedbackInput!) {
  createFeedback(input: $input) {
    id
    createdAt
    feedbackMessage
    senderId
  }
}
`;
export const updateFeedback = `mutation UpdateFeedback($input: UpdateFeedbackInput!) {
  updateFeedback(input: $input) {
    id
    createdAt
    feedbackMessage
    senderId
  }
}
`;
export const deleteFeedback = `mutation DeleteFeedback($input: DeleteFeedbackInput!) {
  deleteFeedback(input: $input) {
    id
    createdAt
    feedbackMessage
    senderId
  }
}
`;
export const createPost = `mutation CreatePost($input: CreatePostInput!) {
  createPost(input: $input) {
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
export const updatePost = `mutation UpdatePost($input: UpdatePostInput!) {
  updatePost(input: $input) {
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
export const deletePost = `mutation DeletePost($input: DeletePostInput!) {
  deletePost(input: $input) {
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
export const createLike = `mutation CreateLike($input: CreateLikeInput!) {
  createLike(input: $input) {
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
export const updateLike = `mutation UpdateLike($input: UpdateLikeInput!) {
  updateLike(input: $input) {
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
export const deleteLike = `mutation DeleteLike($input: DeleteLikeInput!) {
  deleteLike(input: $input) {
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
export const createComment = `mutation CreateComment($input: CreateCommentInput!) {
  createComment(input: $input) {
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
export const updateComment = `mutation UpdateComment($input: UpdateCommentInput!) {
  updateComment(input: $input) {
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
export const deleteComment = `mutation DeleteComment($input: DeleteCommentInput!) {
  deleteComment(input: $input) {
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
export const createRecognition = `mutation CreateRecognition($input: CreateRecognitionInput!) {
  createRecognition(input: $input) {
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
export const updateRecognition = `mutation UpdateRecognition($input: UpdateRecognitionInput!) {
  updateRecognition(input: $input) {
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
export const deleteRecognition = `mutation DeleteRecognition($input: DeleteRecognitionInput!) {
  deleteRecognition(input: $input) {
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
export const createRecognitionLike = `mutation CreateRecognitionLike($input: CreateRecognitionLikeInput!) {
  createRecognitionLike(input: $input) {
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
export const updateRecognitionLike = `mutation UpdateRecognitionLike($input: UpdateRecognitionLikeInput!) {
  updateRecognitionLike(input: $input) {
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
export const deleteRecognitionLike = `mutation DeleteRecognitionLike($input: DeleteRecognitionLikeInput!) {
  deleteRecognitionLike(input: $input) {
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
export const createEmployee = `mutation CreateEmployee($input: CreateEmployeeInput!) {
  createEmployee(input: $input) {
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
export const updateEmployee = `mutation UpdateEmployee($input: UpdateEmployeeInput!) {
  updateEmployee(input: $input) {
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
export const deleteEmployee = `mutation DeleteEmployee($input: DeleteEmployeeInput!) {
  deleteEmployee(input: $input) {
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
export const createBadge = `mutation CreateBadge($input: CreateBadgeInput!) {
  createBadge(input: $input) {
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
export const updateBadge = `mutation UpdateBadge($input: UpdateBadgeInput!) {
  updateBadge(input: $input) {
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
export const deleteBadge = `mutation DeleteBadge($input: DeleteBadgeInput!) {
  deleteBadge(input: $input) {
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
export const createBadgeLike = `mutation CreateBadgeLike($input: CreateBadgeLikeInput!) {
  createBadgeLike(input: $input) {
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
export const updateBadgeLike = `mutation UpdateBadgeLike($input: UpdateBadgeLikeInput!) {
  updateBadgeLike(input: $input) {
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
export const deleteBadgeLike = `mutation DeleteBadgeLike($input: DeleteBadgeLikeInput!) {
  deleteBadgeLike(input: $input) {
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
export const createReward = `mutation CreateReward($input: CreateRewardInput!) {
  createReward(input: $input) {
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
export const updateReward = `mutation UpdateReward($input: UpdateRewardInput!) {
  updateReward(input: $input) {
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
export const deleteReward = `mutation DeleteReward($input: DeleteRewardInput!) {
  deleteReward(input: $input) {
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
export const createStoreId = `mutation CreateStoreId($input: CreateStoreIdInput!) {
  createStoreId(input: $input) {
    id
    name
  }
}
`;
export const updateStoreId = `mutation UpdateStoreId($input: UpdateStoreIdInput!) {
  updateStoreId(input: $input) {
    id
    name
  }
}
`;
export const deleteStoreId = `mutation DeleteStoreId($input: DeleteStoreIdInput!) {
  deleteStoreId(input: $input) {
    id
    name
  }
}
`;
