let nftCollection = [];

function mintNFT(name, description, image, paintingName, artistName) {
  let nft = {
    name: name,
    description: description,
    image: image,
    paintingName: paintingName,
    artistName: artistName
  };
  nftCollection.push(nft);
}

function listNFTs() {
  for (let i = 0; i < nftCollection.length; i++) {
    console.log("Name: " + nftCollection[i].name);
    console.log("Description: " + nftCollection[i].description);
    console.log("Image: " + nftCollection[i].image);
    console.log("Painting Name: " + nftCollection[i].paintingName);
    console.log("Artist Name: " + nftCollection[i].artistName);
    console.log("------------------------");
  }
}

function getTotalSupply() {
  console.log("Total NFTs: " + nftCollection.length);
}

mintNFT("NFT 1", "This is my first NFT!", "ipfs://bafybeiahfsvde7tjzr3rkk26ullka4w7kajxu3uisbf2yau4ud36vm257q", "The Starry Night", "Vincent van Gogh");
mintNFT("NFT 2", "This is my second NFT!", "ipfs://bafybeibsxl3wfckieh6jxaj3l2icfuzwu4g5amhlgz6nh5ihip5mhuk3v4", "The Scream", "Edvard Munch");
mintNFT("NFT 3", "This is my third NFT!", "ipfs://bafybeidrl3wfckieh6jxaj3l2icfuzwu4g5amhlgz6nh5ihip5mhuk3v4", "Guernica", "Pablo Picasso");

listNFTs();
getTotalSupply();