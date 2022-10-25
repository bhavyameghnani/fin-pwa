import "aws-sdk/dist/aws-sdk";
import aws_config from "./aws_config.json";

const AWS = window.AWS;
AWS.config.update(aws_config);
let polly = new AWS.Polly();

class AWSUtil{
  

   getPollyMP3Url(string){
    let pollySpeechPromise = polly
      .synthesizeSpeech({
        OutputFormat: "mp3",
        SampleRate: "8000",
        Text: string,
        TextType: "text",
        VoiceId: "Salli",
      })
      .promise();

    return pollySpeechPromise
      .then((data) => {
        let arrayBuffer = new Uint8Array(data.AudioStream).buffer;
        let blob = new Blob([arrayBuffer]);

        return URL.createObjectURL(blob);
      })
      .catch(() => {
        console.log("Something went wrong with polly!");
      });
  };
}

export default new AWSUtil();