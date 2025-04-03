// Tweet.js
import React, { useState } from 'react';

/* 
Create a new componnet called 'Tweet' make sure to pass down all the props you will need.
You will also need to use 'useState' for two variables. Then you want to create an event
handler for when the user clicks 'like'. You can ue whatever h1s or h2s or HTML elements that 
you want for your tweet, just make sure all the information from the screenshot I sent is there.
Also, if the post isn't liked already, then you want to display a white heart "🤍" otherwise, 
display a red heart "❤️" make sure to increase or decrease the like counter appropriately.
Theres a 'tweet' class you can use to style your tweet.
*/

// Using an interface to describe props for Tweet component
interface TweetProps {
    id: number;
    username: string;
    content: string;
    likes: number;
    timestamp: string;
}
// Tweet component accepts props: username, content, likes, timestamp, 
// which represent the data associated with a tweet.
function Tweet({ id, username, content, likes, timestamp }: TweetProps) {
    // Initialize state for whether user liked tweet and the number of likes
    // These are things we want to render  
    const [isLiked, setLiked] = useState(false);
    const [numLikes, setNumLikes] = useState(likes);

    // Function to handle the event that the user clicks like
    function clickLike() {
        // Change liked status to like/unliked
        setLiked(!isLiked);

        // Set the number of likes based on like status
        setNumLikes((likeCount: number) => isLiked ? likeCount - 1 : likeCount + 1);
    }

    // Return TSX element
    return (
        <>
            <div className="tweet">
                <h2>{username}</h2>
                <p>{content}</p>
                <small>
                    <p>{timestamp} ago</p>
                </small>
                <button onClick={clickLike}>
                    {isLiked ? "❤️" : "🤍"}
                </button>
                <button>{numLikes} Likes</button>
            </div>
        </>
    )
}

export default Tweet;
