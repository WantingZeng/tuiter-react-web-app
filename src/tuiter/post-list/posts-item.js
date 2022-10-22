import React from "react";

const PostsItem = (
    {
        posts = {
            "topic": "Amazing show about @Inspiration4x mission!",
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "time": "2h",
            "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "content":"From training to launch to landing, this all-access docuseries rides along with "
                      + "the Inspiration4 crew on the first all-civilian orbital space...",
            "image": "./react.png",
            "source": "netflix.com",
            "comments": "4.2K",
            "reply": "3.5K",
            "like":"37.5K"
        }}
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" src={require(`${posts.image}`)} width="100%"/>
                </div>
                <div className="col-10 ">
                    <div>
                  <span>
                        {posts.userName}
                      <i className="bi bi-check-circle-fill"></i>
                        <span className="text-secondary">
                            {posts.handle}
                             {posts.time}
                        </span>
                  </span>
                    </div>
                    <div>
                        {posts.topic}
                    </div>
                    <div className="border border-secondary rounded-4">
                        <div>
                            <img className="rounded" src={require(`${posts.image}`)} width="100%"/>
                        </div>

                        <div className="border-top border-secondary ">
                            <div>
                                {posts.title}
                            </div>
                            <div className="text-secondary">
                                {posts.content}
                            </div>
                            <div className="text-secondary">
                                {posts.source}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <ul className="nav mb-2 nav-tabs">
                            {/*//tab*/}
                            <li className="nav-item col-3">
                                <a className="nav-link text-secondary" href="#">
                                    <i className="bi bi-chat"></i> {posts.comments}
                                </a>
                            </li>
                            <li className="nav-item col-3">
                                <a className="nav-link text-secondary" href="#">
                                    <i className="bi bi-reply"></i> {posts.reply}
                                </a>
                            </li>
                            <li className="nav-item col-3">
                                <a className="nav-link text-secondary" href="#">
                                    <i className="bi bi-heart"></i> {posts.like}
                                </a>
                            </li>
                            <li className="nav-item col-3">
                                <a className="nav-link text-secondary" href="#">
                                    <i className="bi bi-share"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default PostsItem;
