const PostSummaryItem = (post) => {
    return (`
     <li class="list-group-item">
        <div class="row">
            <div class="col-10">
                <div class="text-secondary">
                    ${post.topic}
                </div>
                <div class="row">
                    <div class="col-3 fw-bolder">
                        ${post.userName}
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <div class="col-2 text-secondary">
                        - ${post.time}
                    </div>
                </div>

                <div class="fw-bolder">
                    ${post.title}
                </div>
                <div class="text-secondary">
                    ${post.tweetNum}
                </div>
            </div>
            <div class="col-2 ">
                <img src="${post.image}" width="100%" >
            </div>
        </div>
    </li>
    `)

}
export default PostSummaryItem