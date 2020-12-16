import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import IMG from "../assets/img/logo.png";

const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  height: 70px;
  gap: 20px;
  li {
    cursor: pointer;
    width: 72px;
    height: 100%;
    padding: 3px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    transition: all 0.3s;
    span {
      color: #291d70;
    }
    i {
      display: block;
      width: 5px;
      height: 5px;
      border-radius: 50px;
      background: #291d70;
      transition: all 0.3s;
      z-index: 10;
    }
    small {
      transition: all 0.3s;
      opacity: 0;
    }
    &:hover {
      span {
        text-shadow: 0 4px 2px #dbdbdb;
      }
      i {
        transform: translateY(-50px);
      }
      small {
        display: block;
        transform: translateY(-50px) rotate(-135deg);
        width: 30px;
        height: 30px;
        border: none;
        border-radius: 30px 0 0 0;
        /* background: #ffff6d; */
        background: linear-gradient(
          315deg,
          #ffff6d,
          rgba(255, 255, 109, 0) 60%
        );
        box-shadow: 5px 5px 10px -5px #ffff6d;
        opacity: 1;
      }
    }
  }
`;
export const Inner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
const HeaderContainer = styled.header`
  width: 100%;
  height: 120px;
  background: #fff;
  ${Inner} {
    height: 70px;
    display: flex;
    align-items: center;
    i {
      flex: 1;
      img {
        width: 130px;
      }
    }
    div {
      flex: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      input {
        width: 90%;
        height: 35px;
        background: #f1e9e9;
        border: none;
        border-radius: 5px;
        outline: none;
        padding: 0 10px;
      }
      svg {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 30px;
      }
    }
    ul {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      li {
        margin: 5px;
        padding: 5px;
      }
    }
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Inner>
        <i>
          <img src={IMG} alt="LOGO" />
        </i>
        <div>
          <input type="text" placeholder="Search by Author, Content" />
          <AiOutlineSearch />
        </div>
        <ul>
          <li>LOGIN</li>
          <li>SIGNUP</li>
        </ul>
      </Inner>
      <Navigation>
        <li>
          <span>Home</span>
          <i></i>
          <small></small>
        </li>
        <li>
          <span>BestSeller</span>
          <i></i>
          <small></small>
        </li>
        <li>
          <span>Category</span>
          <i></i>
          <small></small>
        </li>
        <li>
          <span>About</span>
          <i></i>
          <small></small>
        </li>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
