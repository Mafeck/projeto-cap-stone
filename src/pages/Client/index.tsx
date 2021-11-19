import { Container, ContentInfo, CommentsContainer } from "./styles";
import { useState, useEffect } from "react";
import { FaDice, FaRegEdit } from "react-icons/fa";
import { useHistory, Redirect } from "react-router-dom";
import { useAuth } from "../../providers/Auth";
import CardComment from "../../components/CardComment";
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Button from "../../components/Button";
import api from "../../services/api";
import { toast } from "react-toastify";
import { useClient } from "../../providers/Client";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schemaComment from "../../components/schemaComments";

interface Comments {
  title: string;
  comment: string;
  id: number;
}

interface Address {
  road: string;
  zipCode: string;
  district: string;
  houseNumber: string;
}

interface Process {
  processNumber?: string;
  area: string;
}

interface ClientData {
  name: string;
  cpf?: string;
  genre?: string;
  naturalness?: string;
  nationality?: string;
  fatherName?: string;
  motherName?: string;
  qualification?: string;
  company?: string;
  phone?: string;
  type: string;
  maritalStatus?: string;
  address?: Address;
  comments?: Comments[];
  id: number;
  userId: string;
  processNumber: Process;
}

interface TokenDecodeData {
  email: string;
  sub: number;
  iat: string;
  exp: string;
}

const Client = () => {
  const { token } = useAuth();
  const { client, setClient, comments, setComments } = useClient();
  const [renderModal, setRenderModal] = useState<boolean>(false);
  const [renderModalDelete, setRenderModalDelete] = useState<boolean>(false);
  const [renderModalEdit, setRenderModalEdit] = useState<boolean>(false);
  const [commentId, setCommentId] = useState<number>(0);
  const [tokenDecode] = useState<TokenDecodeData>(jwtDecode(token));
  const history = useHistory();

  const { register, reset, handleSubmit } = useForm<Comments>({
    resolver: yupResolver(schemaComment),
  });

  useEffect(() => {
    api
      .get(`/users/${tokenDecode.sub}/people`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const people = response.data;
        const clientId = localStorage.getItem("@id:haki");
        const newClient = people.find(
          (value: ClientData) => value.id === Number(clientId)
        );
        setClient(newClient);
        setComments(newClient.comments);
      })
      .catch((error) => console.log(error));
  }, []);

  const createComment = (data: Comments) => {
    const newDataFormatted = new Date().toLocaleString("pt-BR");
    const newData = {
      title: data.title,
      comment: data.comment,
      data: newDataFormatted,
      id: comments.length + 1,
    };
    const newComments = { comments: [...comments, newData] };

    api
      .patch(`/people/${client.id}`, newComments, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setComments(response.data.comments);
        setRenderModal(false);
        toast.success("comentário criado com sucesso");
      });
  };

  if (token) {
    return <Redirect to="/dashboard" />;
  }
  if (!token) {
    return <Redirect to="/login" />;
  }

  const deleteComment = (id: number) => {
    const newComments = comments.filter((values) => values.id !== id);
    const newPeople = {
      name: client.name,
      cpf: client.cpf,
      genre: client.genre,
      naturalness: client.naturalness,
      nationality: client.nationality,
      fatherName: client.fatherName,
      motherName: client.motherName,
      qualification: client.qualification,
      company: client.company,
      phone: client.phone,
      type: client.type,
      maritalStatus: client.maritalStatus,
      address: client.address,
      comments: newComments,
      id: client.id,
      userId: client.userId,
    };

    api
      .patch(`/people/${client.id}`, newPeople, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setComments(response.data.comments);
        setRenderModalDelete(false);
        toast.success("comentário excluído com sucesso");
      });
  };

  const editComment = (data: Comments) => {
    const commentsFiltered = comments.filter((value) => value.id !== commentId);
    const dataEdit = new Date().toLocaleString("pt-BR");
    const commentEdit = {
      title: data.title,
      comment: data.comment,
      id: commentId!,
      data: dataEdit,
    };
    commentsFiltered.splice(commentId! - 1, 0, commentEdit);
    const newComments = { comments: [...commentsFiltered] };

    api
      .patch(`/people/${client.id}`, newComments, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setRenderModalEdit(false);
        setComments(response.data.comments);
        toast.success("Comentário editado");
      })
      .catch((error) => console.log(error));
  };

  const fillInputsEditComment = (id: Number) => {
    const findComment = client.comments!.find(
      (value: Comments) => value.id === id
    );

    reset({
      title: findComment!.title,
      comment: findComment!.comment,
    });
  };

  return (
    <>
      <Container>
        <nav>
          <div className="containerNav">
            <div
              onClick={() => history.push("/dashboard/people")}
              className="divAction"
            >
              {"<"}
            </div>
            <div className="divIcon">
              <FaDice />
            </div>
            <h1 className="client__name">{client.name}</h1>
          </div>
          <Link to={`/dashboard/people/${client.id}/update`}>
            <FaRegEdit />
          </Link>
        </nav>
        <ContentInfo>
          <div className="itemInfo">
            <span>Tipo</span> <span>{client.type}</span>
          </div>
          <div className="itemInfo">
            <span>CPF</span> <span>{client.cpf}</span>
          </div>
          <div className="itemInfo">
            <span>Processo</span> <span>{client.process?.processNumber}</span>
          </div>
          <div className="itemInfo">
            <span>Área</span> <span>{client.process?.area}</span>
          </div>
        </ContentInfo>
        <CommentsContainer>
          <div className="comments__info">
            <h1 className="comments__title">Comentários</h1>
            <button
              onClick={() => setRenderModal(true)}
              className="comment__button"
            >
              Cadastrar comentário
            </button>
          </div>
          <div className="comments">
            {comments &&
              comments.map((value, index) => {
                return (
                  <CardComment
                    data={value.data!}
                    onEdit={() => {
                      setCommentId(value.id);
                      fillInputsEditComment(value.id);
                      setRenderModalEdit(true);
                    }}
                    onClick={() => {
                      setCommentId(value.id);
                      setRenderModalDelete(true);
                    }}
                    key={index}
                    commentTitle={value.title!}
                    comment={value.comment!}
                  />
                );
              })}
            {renderModalDelete && (
              <Modal
                onClose={() => setRenderModalDelete(false)}
                modalTitle="Tem certeza disso?"
              >
                <p
                  style={{
                    color: "var(--gray-50)",
                    fontSize: "12px",
                    margin: "0 auto",
                  }}
                >
                  Essa ação é permanente, você não poderá mais editar o
                  comentário
                </p>
                <div className="divButton">
                  <Button onClick={() => deleteComment(commentId!)}>Sim</Button>
                  <Button
                    onClick={() => {
                      setRenderModalDelete(false);
                      setCommentId(0);
                    }}
                  >
                    não
                  </Button>
                </div>
              </Modal>
            )}
            {renderModalEdit && (
              <Modal
                onClose={() => {
                  setRenderModalEdit(false);
                }}
                modalTitle="Editar Comentário"
              >
                <form
                  onSubmit={handleSubmit(editComment)}
                  style={{ width: "100%" }}
                >
                  <Input
                    maxLength={25}
                    name="title"
                    error={""}
                    register={register}
                    placeholder="Título do comentário"
                  />
                  <textarea
                    maxLength={5000}
                    {...register("comment")}
                    placeholder="comentário..."
                  />
                  <Button type="submit">Editar</Button>
                </form>
              </Modal>
            )}
          </div>
        </CommentsContainer>
        {renderModal && (
          <Modal
            onClose={() => {
              setRenderModal(false);
            }}
            modalTitle="Comentário"
          >
            <form
              onSubmit={handleSubmit(createComment)}
              style={{ width: "100%" }}
            >
              <Input
                maxLength={25}
                name="title"
                error={""}
                register={register}
                placeholder="Título do comentário"
              />
              <textarea
                maxLength={5000}
                {...register("comment")}
                placeholder="comentário..."
              />
              <Button type="submit">cadastrar comentário</Button>
            </form>
          </Modal>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default Client;
