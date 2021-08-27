import { SyncOutlined } from "@ant-design/icons";
import { utils } from "ethers";
import { Button, Card, DatePicker, Divider, Input, List, Progress, Slider, Spin, Switch } from "antd";
import React, { useState } from "react";
import { Address, Balance, GridItem } from "../components";


export default function OurApp({
  purpose,
  setPurposeEvents,
  address,
  mainnetProvider,
  localProvider,
  yourLocalBalance,
  price,
  tx,
  readContracts,
  writeContracts,
}) {
  const [newPurpose, setNewPurpose] = useState("loading...");
  const gridStyle = {
      width: '33%',
      textAlign: 'center',
    };
    const flyLoCovers = ['https://images-na.ssl-images-amazon.com/images/I/91voJ-1QPOL._SL1454_.jpg', 
    'https://images-na.ssl-images-amazon.com/images/I/91KVuR4tctL._SL1500_.jpg',
    'https://assets.boomkat.com/spree/products/198728/large/original.jpg',
    'https://f4.bcbits.com/img/a1914769065_10.jpg',
    'https://media.pitchfork.com/photos/5929bfb4eb335119a49ed27d/1:1/w_600/188e5d6c.jpg',
    'https://media.pitchfork.com/photos/608ab9a564a4ccd15fc1fdd5/1:1/w_600/Flying-Lotus-Yasuke.jpeg']
  


  return (
    <div>
      {/*
        ⚙️ Here is an example UI that displays and sets the purpose in your smart contract:
      */}
      <div style={{ border: "1px solid #cccccc", padding: 16, width: 800, margin: "auto", marginTop: 64 }}>
        <h2>Purchase Music</h2>
        <Divider />
        {/* use utils.formatEther to display a BigNumber: */}
        <h2>Your Balance: {yourLocalBalance ? utils.formatEther(yourLocalBalance) : "..."}</h2>
                <Address address={address} ensProvider={mainnetProvider} fontSize={16} />

        <Divider />
        <div style={{ margin: 8 }}>
        </div>
        Your Address:
        <h2>Flying Lotus </h2>

                 <Button
            onClick={() => {
              /*
              you can also just craft a transaction and send it to the tx() transactor
              here we are sending value straight to the contract's address:
            */
              tx({
                to: writeContracts.YourContract.address,
                value: utils.parseEther("0.001"),
              });
              /* this should throw an error about "no fallback nor receive function" until you add it */
            }}
          >
            Buy Artist Discography
          </Button>

          <Card>
          <GridItem src={flyLoCovers[0]}/>
          <GridItem src={flyLoCovers[0]}/>
          <GridItem src={flyLoCovers[2]}/>
          <GridItem src={flyLoCovers[3]}/>
          <GridItem src={flyLoCovers[4]}/>
          <GridItem src={flyLoCovers[5]}/>
  </Card>

      <h2>Aphex Twin </h2>

                 <Button
            onClick={() => {
              /*
              you can also just craft a transaction and send it to the tx() transactor
              here we are sending value straight to the contract's address:
            */
              tx({
                to: writeContracts.YourContract.address,
                value: utils.parseEther("0.001"),
              });
              /* this should throw an error about "no fallback nor receive function" until you add it */
            }}
          >
            Buy Artist Discography
          </Button>

          <Card>
          <GridItem src={flyLoCovers[0]}/>
          <GridItem src={flyLoCovers[0]}/>
          <GridItem src={flyLoCovers[2]}/>
          <GridItem src={flyLoCovers[3]}/>
          <GridItem src={flyLoCovers[4]}/>
          <GridItem src={flyLoCovers[5]}/>
  </Card>
      </div>
    </div>
  );
}
