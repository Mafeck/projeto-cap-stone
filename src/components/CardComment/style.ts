import styled from "styled-components";

export const Container = styled.div`
  width: 95%;
  height: 192px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 12px 15px;
  border: 2px solid var(--gray-20);
  border-radius: 5px;
  margin-bottom: 20px;

  .card__title {
    color: var(--color-primary-strong);
    font-size: 20px;
  }

  .card__comment {
    color: var(--gray-50);
    font-weight: 400;
    width: 100%;
    height: 80px;
    overflow-y: scroll;
    font-size: 12px;

    ::-webkit-scrollbar {
      display: none;
    }
  }

  .card__content {
    font-size: 10px;
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      color: var(--gray-50);

      :hover {
        transition: 0.5s;
        color: var(--gray-100);
      }
    }
  }
`;
