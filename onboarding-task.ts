interface IAnswer {
  questionId: string;
  answerId: string;
}

class Answer implements IAnswer {
  constructor(public questionId: string, public answerId: string) {}
}

class Task {
  constructor(public title: string, public description: string) {}
}

class User {
  constructor(public id: string, public name: string) {}
}

class UserTasks {
  user: User;
  tasks: Task[] = [];

  constructor(user: User) {
    this.user = user;
  }

  addTasks(tasks: Task[]): void {
    this.tasks.push(...tasks);
  }
}

interface IAnswerMapping {
  answer: IAnswer;
  tasks: Task[];
}

class OnboardingService {
  private taskMappings: IAnswerMapping[];

  constructor(taskMappings: IAnswerMapping[]) {
    this.taskMappings = taskMappings;
  }

  processAnswers(userTasks: UserTasks, answers: IAnswer[]) {
    for (const answer of answers) {
      const mapping = this.taskMappings.find(
        (m) =>
          m.answer.questionId === answer.questionId &&
          m.answer.answerId === answer.answerId
      );

      if (mapping) {
        userTasks.addTasks(mapping.tasks);
      }
    }
  }
}

let taskMappings: IAnswerMapping[] = [
  {
    answer: new Answer("question1", "0-50"),
    tasks: [
      new Task(
        "Invite small number of staff",
        "You can invite your team members manually."
      ),
      new Task("Set team roles", "Assign roles to your team members."),
    ],
  },
  {
    answer: new Answer("question1", "51-100"),
    tasks: [
      new Task(
        "Invite medium number of staff",
        "Use batch invitation for your team members."
      ),
      new Task("Set team roles", "Assign roles to your team members."),
    ],
  },
  {
    answer: new Answer("question1", "101-200"),
    tasks: [
      new Task(
        "Invite larger number of staff",
        "Utilize automated invitation system for your team members."
      ),
      new Task("Set team roles", "Assign roles to your team members."),
    ],
  },
  {
    answer: new Answer("question1", "201-400"),
    tasks: [
      new Task(
        "Invite even larger number of staff",
        "Employ bulk invitation feature for your team members."
      ),
      new Task("Set team roles", "Assign roles to your team members."),
    ],
  },
  {
    answer: new Answer("question1", "401+"),
    tasks: [
      new Task(
        "Invite a large number of staff",
        "Leverage enterprise-level invitation capabilities for your team members."
      ),
      new Task("Set team roles", "Assign roles to your team members."),
    ],
  },
  {
    answer: new Answer("question2", "TU"),
    tasks: [
      new Task(
        "Migrate from TU",
        "Follow the guide to migrate your data from TU."
      ),
    ],
  },
  {
    answer: new Answer("question2", "Active"),
    tasks: [
      new Task(
        "Migrate from Active",
        "Refer to the migration documentation to transfer your data from Active."
      ),
    ],
  },
  {
    answer: new Answer("question2", "None"),
    tasks: [
      new Task(
        "Set up team management software",
        "Start from scratch by setting up team management software."
      ),
    ],
  },
  {
    answer: new Answer("question2", "Other"),
    tasks: [
      new Task(
        "Enter your current team management software",
        "Provide the details of your current team management software."
      ),
    ],
  },
  {
    answer: new Answer("question3", "yes"),
    tasks: [
      new Task(
        "Setup website builder",
        "Follow the guide to setup website builder."
      ),
    ],
  },
  {
    answer: new Answer("question4", "yes"),
    tasks: [
      new Task(
        "Setup payment processor",
        "Follow the guide to setup payment processor."
      ),
    ],
  },
  {
    answer: new Answer("question5", "yes"),
    tasks: [
      new Task(
        "Invite other staff for onboarding",
        "Include additional staff members in the onboarding process."
      ),
    ],
  },
];

let onboardingService = new OnboardingService(taskMappings);

let user1 = new User("123", "John");
let user1Tasks = new UserTasks(user1);
onboardingService.processAnswers(user1Tasks, [
  new Answer("question1", "0-50"),
  new Answer("question2", "TU"),
  new Answer("question3", "yes"),
  new Answer("question4", "yes"),
  new Answer("question5", "yes"),
]);

let user2 = new User("456", "Jane");
let user2Tasks = new UserTasks(user2);
onboardingService.processAnswers(user2Tasks, [
  new Answer("question1", "101-200"),
  new Answer("question2", "Active"),
  new Answer("question3", "no"),
  new Answer("question4", "no"),
  new Answer("question5", "yes"),
]);

console.log(`Tasks for ${user1.name} [${user1.id}]:`);
for (const task of user1Tasks.tasks) {
  console.log("\t", task.title, task.description);
}

console.log(`Tasks for ${user2.name} [${user2.id}]:`);
for (const task of user2Tasks.tasks) {
  console.log("\t", task.title, task.description);
}
