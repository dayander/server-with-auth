//const tf = require('@tensorflow/tfjs-node');         // const tf =require('@tensorflow/tfjs-node-gpu');
const tf =require('@tensorflow/tfjs-node');

const iris = require('./iris.json');


const learningRate = 0.2;
const optimizer = tf.train.sgd(learningRate);

//const loss = (pred,label) => pred.sub(label).square().mean();


function loss (pred, label){

    return pred.sub(label).square().mean();

}

function predict(x){
    const xs = tf.tensor1d(x);

    const ys = tfxs.mul(m).add(b)
}


exports.ML = function (req, res, done) {
    //
    // let m = tf.variable(tf.scalar(Math.random(1)));
    // let b = tf.variable(tf.scalar(Math.random(1)));
    // //const x () => (console.log('hey'));
    //
    // b.print()




    const trainingData = tf.tensor2d(iris.map(function (item) {
        return[item.sepal_length, item.sepal_width, item.petal_length, item.petal_width,]}))
    const outputData = tf.tensor2d(iris.map(function (item) {
        return [
            item.species === "setosa" ? 1 : 0,
            item.species === "virginica" ? 1 : 0,
            item.species === "versicolor" ? 1 : 0,
        ]
    }))


// build neural network
    const model = tf.sequential()

    model.add(tf.layers.dense({
        inputShape: [4],
        activation: "sigmoid",
        units: 5,
    }))
    model.add(tf.layers.dense({
        inputShape: [5],
        activation: "sigmoid",
        units: 3,
    }))
    model.add(tf.layers.dense({
        activation: "sigmoid",
        units: 3,
    }))
    model.compile({
        loss: "meanSquaredError",
        optimizer: tf.train.adam(.06),
    })
// train/fit our network
    const startTime = Date.now()
    model.fit(trainingData, outputData, {epochs: 100})
        .then((history) => {
            console.log(history)
            res.json(history)

        })





}








