var faqs = {
    "Place": [
        { question: 'Where’re the sessions going to be at ?', answer: 'This year we are working at Electra Educational Center, click <a href="https://goo.gl/maps/qzuqk7YRtJN2">here</a> for directions.' }
    ],
    "Time": [
        { question: 'When are we going to start the sessions ?', answer: 'Usually by late February or early March.' },
        { question: 'When am I going to know if I am accepted or not ?', answer: 'A week after the interviews.' }

    ],
    "Others": [
        { question: 'What is Protons ?', answer: 'Protons is a program organized by IEEE AlexSB, it targets school students in preparatory and secondary stages with different backgrounds. It mainly aims to raise the participants’ knowledge, let them learn in a motivational atmosphere and help them discover their abilities and inner motive.' },
        { question: 'What will I gain from joining protons other than the technical knowledge ?', answer: 'The program focuses on the non-technical skills as much as the technical ones, through workshops that develop the participants’ communication, teamwork, time management, leadership and presentation skills.' }
    ]
};

$(document).ready(function () {
    var cat = ["Place", "Time", "Others"];

    var faqsSec = document.getElementById("faqs-sec");

    for (var i = 0; i < cat.length; i++) {
        var faqsBlock = document.createElement('div');

        var head = document.createElement('h2');
        head.setAttribute('class', 'faqs-head');
        head.innerHTML = cat[i];

        faqsBlock.appendChild(head);

        var ul = document.createElement('ul');
        ul.setAttribute('class', 'collapsible center-block');
        ul.setAttribute('data-collapsible', 'accordion');

        for (var j = 0; j < faqs[cat[i]].length; j++) {
            var li = document.createElement('li');

            var question = document.createElement('div');
            question.setAttribute('class', 'collapsible-header');
            question.innerHTML = faqs[cat[i]][j].question;

            var answer = document.createElement('div');
            answer.setAttribute('class', 'collapsible-body');
            answer.innerHTML = faqs[cat[i]][j].answer;

            li.appendChild(question);
            li.appendChild(answer);

            ul.appendChild(li)
        }

        faqsBlock.appendChild(ul);
        faqsSec.appendChild(faqsBlock);
    }
});