import * as CryptoJS from "crypto-js";

class Block {
  static calculateBlockHash = (
    data: string,
    index: number,
    previousHash: string,
    timestamp: number
  ): string =>
    CryptoJS.SHA256(data + index + previousHash + timestamp).toString();

  static validateStructure = (oneBlock: Block): boolean =>
    typeof oneBlock.data === "string" &&
    typeof oneBlock.hash === "string" &&
    typeof oneBlock.index === "number" &&
    typeof oneBlock.previousHash === "string" &&
    typeof oneBlock.timestamp === "number";

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
  "First block",
  "2021202120212021",
  0,
  "",
  123456
);

let blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLastestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimestamp = (): number => Math.round(new Date().getTime() / 1000);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLastestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimestamp: number = getNewTimestamp();
  const newHash: string = Block.calculateBlockHash(
    data,
    newIndex,
    previousBlock.hash,
    newTimestamp
  );
  const newBlock: Block = new Block(
    data,
    newHash,
    newIndex,
    previousBlock.hash,
    newTimestamp
  );
  addBlock(newBlock);
  return newBlock;
};

const getHashForBlock = (oneBlock: Block): string =>
  Block.calculateBlockHash(
    oneBlock.data,
    oneBlock.index,
    oneBlock.previousHash,
    oneBlock.timestamp
  );

const isValidBlock = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (!Block.validateStructure(candidateBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash) {
    return false;
  } else if (getHashForBlock(candidateBlock) !== candidateBlock.hash) {
    return false;
  } else {
    return true;
  }
};

const addBlock = (candidateBlock: Block): void => {
  if (isValidBlock(candidateBlock, getLastestBlock())) {
    blockchain.push(candidateBlock);
  }
};

createNewBlock("Second block");
createNewBlock("Third block");
createNewBlock("Fourth block");

console.log(blockchain);

export {};
