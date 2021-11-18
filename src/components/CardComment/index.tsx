import { Container } from "./style";
import { FaTrash } from "react-icons/fa";
import { BiCommentEdit } from "react-icons/bi";
import { MouseEventHandler } from "react";

interface CardCommentProps {
  commentTitle: string;
  comment: string;
  data: string;
  onClick: MouseEventHandler;
  onEdit: MouseEventHandler;
}

const CardComment = ({
  comment,
  commentTitle,
  data,
  onClick,
  onEdit,
}: CardCommentProps) => {
  return (
    <Container>
      <h1 className="card__title">{commentTitle}</h1>
      <p className="card__comment">{comment}</p>
      <div className="card__content">
        <span>{data}</span>
        <BiCommentEdit
          onClick={onEdit}
          style={{ cursor: "pointer" }}
          color="#878787"
        />
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
