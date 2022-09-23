function projects(input) {
    let nameOfArchitect = input[0];
    let numberOfProjects = input[1];
    let needHours = numberOfProjects * 3;
    console.log(`The architect ${nameOfArchitect} will need ${needHours} hours to complete ${numberOfProjects} project/s.`)
}

projects(['Sanya','9'])