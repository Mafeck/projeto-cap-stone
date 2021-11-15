import { Container } from "./style";
import { FaTrash } from "react-icons/fa";
import { MouseEventHandler } from "react";

interface CardCommentProps {
  commentTitle: string;
  comment: string;
  onClick: MouseEventHandler;
}

const CardComment = ({ comment, commentTitle, onClick }: CardCommentProps) => {
  const newDate = new Date();
  const newDataFormatted = newDate.toLocaleString("pt-BR")

  return (
    <Container>
      <h1 className="card__title">{commentTitle}</h1>
      <p className="card__comment">{comment}</p>
      <div className="card__content">
        <span>{newDataFormatted}</span>
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
