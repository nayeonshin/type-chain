import * as CryptoJS from "crypto-js";

class Block {
  public data: string;
  public hash: string;
  public index: number;
  public previousHash: string;
  public timestamp: number;

  static calculateBlockHash = (
    data: string,
    index: number,
    previousHash: string,
    timestamp: number
  ): string =>
    CryptoJS.SHA256(data + index + previousHash + timestamp).toString();

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

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLastestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimestamp = (): number => Math.round(new Date().getTime() / 1000);

export {};
