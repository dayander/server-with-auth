import * as mobilenet from '@tensorflow-models/mobilenet';


const path = "mobilenet/model.json"
const mn = new mobilenet.MobileNet(1, 1);
mn.path = `file://${path}`;
await mn.load()