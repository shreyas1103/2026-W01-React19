let user = {
    profile : [
        {name: "Ashish"},
        {name: "Varun"},
        {name: "Vinod"}
    ],
    rating : [
        {count : 145},
        {count : 200},
        {count : 300}
    ]
}
let x = user.profile.map(item => item.name);

let y= user.rating.map(item => item.count);
output = {};
for(let i=0;i<x.length;i++){
    output[x[i]]=y[i];
}
console.log(output);
