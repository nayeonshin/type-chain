# TypeChain

TypeChain is a small blockchain in TypeScript.

## To Run the Script
```bash
$ yarn install
$ yarn start
```

## To Create a New Block
```typescript
createNewBlock("N-th block");
```
Write the new block's name between `createNewBlock`'s parentheses.

## Output
`console.log(blockchain);`

```
[
  Block {
    data: 'First block',
    hash: '2021202120212021',
    index: 0,
    previousHash: '',
    timestamp: 123456
  },
  Block {
    data: 'Second block',
    hash: 'e30dd4cc9b233e6e57a48ffc0d26206d198afda2028ebad28d369cfa0290ffde',
    index: 1,
    previousHash: '2021202120212021',
    timestamp: 1638122801
  },
  Block {
    data: 'Third block',
    hash: 'e8014a70819267b4577c5c35defbcfeaffc0e85275bcc33dbf6d381080b5036f',
    index: 2,
    previousHash: 'e30dd4cc9b233e6e57a48ffc0d26206d198afda2028ebad28d369cfa0290ffde',
    timestamp: 1638122801
  },
  Block {
    data: 'Fourth block',
    hash: '2a35d1cce01da96a7d53496ce204fc6b555236b41dc1f2dfc9ba223225f88b66',
    index: 3,
    previousHash: 'e8014a70819267b4577c5c35defbcfeaffc0e85275bcc33dbf6d381080b5036f',
    timestamp: 1638122801
  }
]
```