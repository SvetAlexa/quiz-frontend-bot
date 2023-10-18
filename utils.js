const questions = require('./questions.json');

const getRandomQuestion = (topic) => {
  let questionTopic = topic.toLowerCase();

  if (questionTopic === 'случайный вопрос') {
    const randomTopic = Math.floor(Math.random() * Object.keys(questions).length);
    questionTopic = Object.keys(questions)[randomTopic];
  }

  const randomQuestionIndex = Math.floor(
    Math.random() * questions[questionTopic].length
  );

  return { 
    question: questions[questionTopic][randomQuestionIndex],
    questionTopic
  }
};

const getCorrectAnswer = (topic, id) => {
  const question = questions[topic].find((question) => question.id === id);

  if (!question.hasOptions) {
    return question.answer;
  }

  return question.options.find((option) => option.isCorrect).text;
};

module.exports = {
  getRandomQuestion,
  getCorrectAnswer
};
