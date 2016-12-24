function getTempPromise(location){
  return new Promise(function(resolve,reject){
    resolve('26');
    reject('city not found');
  });
}

getTempPromise('chennai').then(function(temp){
  console.log('Promise success' , temp);
},function(err){
  console.log('promise error' , err);
})
