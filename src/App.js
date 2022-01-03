import React from "react";
import Container from "./styled/Container.style";
import Content from "./styled/Content.style";
import Data from "./components/Data";

function App() {
  const coins = [
    {
      key: 1,
      name: "ethereum",
      abbrev: "eth",
    },
    {
      key: 2,
      name: "loopring",
      abbrev: "lrc",
    },
    {
      key: 3,
      name: "bitcoin",
      abbrev: "btc",
    },
    {
      key: 4,
      name: "solana",
      abbrev: "sol",
    },
  ];

  return (
    <main>
      <Container>
        {coins.map(coin => {
          return (
            <Content className={coin.abbrev} key={coin.key}>
              <Data coin={coin.name} />
            </Content>
          );
        })}
      </Container>
      {/* <Refresh /> */}
    </main>
  );
}

export default App;
