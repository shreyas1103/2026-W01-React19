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
console.log(user.profile[0].name + ":" + user.rating[0].count);
console.log(user.profile[1].name + ":" + user.rating[1].count);
console.log(user.profile[2].name + ":" + user.rating[2].count);
