import { Container } from "./style";
import { FaTrash } from "react-icons/fa";
import { MouseEventHandler } from "react";

interface CardCommentProps {
  commentTitle: string;
  comment: string;
  data: string;
  onClick: MouseEventHandler;
}

const CardComment = ({
  comment,
  commentTitle,
  data,
  onClick,
}: CardCommentProps) => {
  return (
    <Container>
      <h1 className="card__title">{commentTitle}</h1>
      <p className="card__comment">{comment}</p>
      <div className="card__content">
        <span>{data}</span>
        <FaTrash
          onClick={onClick}
          style={{ cursor: "pointer" }}
          color="#878787"
        />
      </div>
    </Container>
  );
};

export default CardComment;
