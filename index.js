function newTask(title,desscription){
const task ={
title : title,
desscription : desscription,
complete : false,

logState: function(){
  console.log(`${task.title} has ${task.complete ? "": "not "} been completed`)
},

markCompleted : function(){
this.complete =true;
}

};
return task;
};



// DRIVER CODE BELOW

const task1 = newTask("clean cat litter", "take all the 💩 out of the litter box");
const task2 = newTask("do laundry", "😨");
const tasks =[task1,task2];


task1.logState(); // Clean Cat litter has not been completed
task1.markCompleted();
task1.logState();
