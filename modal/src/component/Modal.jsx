import React, { useEffect, useState } from "react";

const Modal = ({ openModal, closeModal }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        background: "rgba(0, 0, 0, 0.5)",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {openModal && (
        <div
          style={{
            marginInline: "300px",
            border: "2px solid aqua",
            background: "purple",
            width: "100%",
          }}
        >
          <div style={{ position: "relative" }}>
            <h3
              style={{
                background: "green",
                margin: "0",
                padding: "30px 0",
                textAlign: "center",
              }}
            >
              Customized Header
            </h3>
            <p
              style={{
                fontSize: "24px",
                margin: "0px",
                position: "absolute",
                bottom: 0,
                right: 0,
                top: 0,
                marginRight: "20px",
                marginTop: "5px",
              }}
              onClick={closeModal}
            >
              x
            </p>
          </div>
          <p
            style={{
              background: "white",
              margin: "0",
              padding: "50px 0",
              textAlign: "center",
            }}
          >
            Customized body
          </p>
          <h5
            style={{
              background: "green",
              margin: "0",
              padding: "30px 0",
              textAlign: "center",
            }}
          >
            Cutomized Footer
          </h5>
        </div>
      )}
    </div>
  );
};

export default Modal;
