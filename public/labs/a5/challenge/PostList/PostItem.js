const PostItem = (posts) => {
  return (`
    <li class="list-group-item">
        <div class="row">
          <div class = "col-2">
              <img class="rounded-circle" src="${posts.image}" width="100%">
          </div>
          <div class="col-10 ">
              <div>
                  <span>
                        ${posts.userName} 
                        <i class="fas fa-check-circle"></i>
                        <span class="text-secondary">
                            @ ${posts.handle} 
                            - ${posts.time}
                        </span>
                  </span>
              </div>
              <div>
                ${posts.topic}
              </div>
              <div class="border border-secondary rounded-4">
                <div>
                    <img src="${posts.image}" width="100%">
                </div>
                
                <div class="border-top border-secondary ">
                    <div>
                        ${posts.title}
                    </div>
                    <div class="text-secondary">
                        ${posts.content}
                    </div>
                    <div class="text-secondary">
                        ${posts.source}
                    </div>
                </div>
              </div>
              <div class="row">
                    <ul class="nav mb-2 nav-tabs">
                        <!-- tabs -->
                            <li class="nav-item col-3">
                                <a class="nav-link text-secondary" href="#">
                                    <i class="far fa-comment"></i>
                                    ${posts.comments}
                                </a>
                            </li>
                             <li class="nav-item col-3">
                                <a class="nav-link text-secondary" href="#">
                                    <i class="fas fa-retweet"></i>
                                    ${posts.reply}
                                </a>
                            </li>
                             <li class="nav-item col-3">
                                <a class="nav-link text-secondary" href="#">
                                    <i class="fas fa-heart"></i>
                                    ${posts.like}
                                </a>
                            </li>
                            <li class="nav-item col-3">
                                <a class="nav-link text-secondary" href="#">
                                    <i class="fas fa-share"></i>
                                </a>
                            </li>
                    </ul>
              </div>
          </div>
        </div>
    </li>
  `)
}
export default PostItem