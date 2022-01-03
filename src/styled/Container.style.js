import styled from "styled-components";

const Container = styled.div`
  /* background-color: #0091ad; */
  background-color: black;
  height: 40rem;
  width: 80rem;
  margin: auto;
  margin-top: 10%;
  display: grid;
  grid-template: 1fr 1fr / 2fr 2fr;
  gap: 5px;
  padding: 5px;
  grid-template-areas:
    "eth lrc" 
    "btc sol";
  

  .eth {
    background-color: #b7094c;
  }
  
  .lrc {
    background-color: #892B64;
  }

  .btc {
    background-color: #5C4D7D;
  }

  .sol {
    background-color: #2E6F95;
  }
`;

export default Container;