// import styled from "styled-components";
import ContainerMui from "../StyledComponents/ContainerMUI";
import dataObjects from "./devObject";
import React from "react";
// const StyledListElement = styled.li`
//   display: flex;
//   justify-content: space-around;
//   text-align: center;
// `;

// const MainListHeader = styled.ul`
//   width: calc(100% - 60px);
//   display: flex;
//   justify-content: space-around;
//   background: #fff;
//   padding: 16px 40px 15px 20px;
//   border-radius: 40px;
//   gap 40px
// `;

// const Paragraph = styled.p`
//   color: #000;
//   font-family: Circe;
//   font-size: 18px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: normal;
//   margin: 0;
// `;

// const transaction = (info, value) => {
//   const data = dataObjects.filter((item) => item[info] === value);
//   return data;
// };
// console.log(transaction("type", true));

const Transaction = () => {
  return (
    <ContainerMui
      style={{ overflowY: "auto", maxHeight: "750px", marginTop: "40px" }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ textAlign: "left" }}>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comment</th>
            <th>Sum</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataObjects.map(({ date, type, category, comment, sum }, index) => (
            <tr key={index}>
              <td>{date}</td>
              <td>{type ? "+" : "-"}</td>
              <td>{category}</td>
              <td>{comment}</td>
              <td>{sum}</td>
              <td>
                <button>Edit</button>
              </td>
              <td>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ContainerMui>
  );
};

export default Transaction;
