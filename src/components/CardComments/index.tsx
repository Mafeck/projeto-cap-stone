import { useState } from "react";

interface Comment {
    title: string;
    comment: string;
}

interface CommentsProps {
    title: string;
    text: string;
}

const Comments = ({title, text}: CommentsProps) => {
    const [commentsList, setCommentsList] =useState<Comment[]>([]);  
    // const date = new Date();
    // console.log(date.toLocaleDateString())

    return(
        <div>
            <h3>{title}</h3>
            <p>{text}</p>
            <p>12/11/2021</p>
        </div>
    )
}

export default Comments;