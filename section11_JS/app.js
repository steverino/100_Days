let courseName = '100 Days of Code';
let coursePrice = 9.99;
let courseGoals = ['Finish under 100 days\n ','Learn JS basics\n ','Get paid as developer'];
let courseObj = { name: '100 Days of Code', price: 9.99, goals: courseGoals };

let g1 = courseGoals[0];
let g2 = courseGoals[1];
let g3 = courseGoals[2];

let goals;

function objFunc(array, arrayIndex) {
    
    let goals = array[arrayIndex];
    //goals = goal1 + '\n' + goal2 + '\n' + goal3;
    return goals;
}


// alert(courseName + '\n$ ' + coursePrice + '\n' + courseGoals[0]  + '\n' + courseGoals[1] + '\n' + courseGoals[2]);
alert(objFunc(courseGoals, 0));