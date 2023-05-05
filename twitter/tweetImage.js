import { TwitterApi } from "twitter-api-v2";
import dotenv from "dotenv";
import { generateAllImages } from "../cards/generateAllImages.js";
dotenv.config()

const client = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_KEY_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_TOKEN_SECRET,
});

export async function tweetSingleImage(imgBuffer, tweetText) {
  const imagePath = imgBuffer;
  //   const imagePath = path.join(process.cwd(), "public", "cards", sign + ".png");
  const mediaId = await client.v1.uploadMedia(imgBuffer, { type: "png" });
  const newTweet = await client.v1.tweet(tweetText, { media_ids: mediaId });

  console.log("IMAGE TWEETED!!!! LOL");
  return newTweet;
}

export async function tweetAllImages(day){
const allImages = await generateAllImages(day)
console.log(allImages)
    for (let signImg of allImages) {
        const {signName, imgBuffer} = signImg
const text = `Buongiorno ${signName}!`
        await tweetSingleImage(imgBuffer, text)
    }


console.log('TWEETED ALL IMAGES CIAO CIAO')


}