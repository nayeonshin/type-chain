import { timeStamp } from "console";

class Block {
  public data: string;
  public hash: string;
  public index: number;
  public previousHash: string;
  public timestamp: number;
  constructor(
    data: string,
    hash: string,
    index: number,
    previousHash: string,
    timestamp: number
  ) {
    this.data = data;
    this.hash = hash;
    this.index = index;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
  }
}

const genesisBlock: Block = new Block(
  "Hello",
  "2021202120212021",
  0,
  "",
  123456
);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);

export {};
