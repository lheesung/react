import { useRef, useState } from "react";
import * as S from "./ChessStyle";

export default function PlayRandomMoveEngine() {
  const piece = useRef([]);
  return(
    <S.container>
      <S.board>
        <S.square ref = {(el) => piece.current[0] = el}>1</S.square>
        <S.square ref = {(el) => piece.current[1] = el}>2</S.square>
        <S.square ref = {(el) => piece.current[2] = el}>3</S.square>
        <S.square ref = {(el) => piece.current[3] = el}>4</S.square>
        <S.square ref = {(el) => piece.current[4] = el}>5</S.square>
        <S.square ref = {(el) => piece.current[5] = el}>6</S.square>
        <S.square ref = {(el) => piece.current[6] = el}>7</S.square>
        <S.square ref = {(el) => piece.current[7] = el}>8</S.square>
        <S.square ref = {(el) => piece.current[8] = el}>9</S.square>
        <S.square ref = {(el) => piece.current[9] = el}>10</S.square>
        <S.square ref = {(el) => piece.current[10] = el}>11</S.square>
        <S.square ref = {(el) => piece.current[11] = el}>12</S.square>
      </S.board>
    </S.container>
  )
}