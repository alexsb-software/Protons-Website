var faqs = {
    "Place": [
        { question: 'Where’re the sessions going to be at ?', answer: 'This year we are working at Electra Educational Center, click <a href="https://goo.gl/maps/qzuqk7YRtJN2" target="_blank">here</a> for directions' }
    ],
    "Time": [
        { question: 'When can I apply ?', answer: 'We hold the applications each year in the period starting from the mid year vacation till the first week of the second term' },
        { question: 'How long will the program be ?', answer: 'It will span 6 months, usually from February to August' },
        { question: 'When are the interviews ?', answer: 'Usually by early February' },
        { question: 'When is the opening ?', answer: 'Usually by mid or late February' },
        { question: 'When are we going to start the sessions ?', answer: 'Usually by late February or early March' },        
        { question: 'Are there any breaks ?', answer: 'Breaks are before and during midterms and finals' },
        { question: 'How long and frequent will the sessions be ?', answer: 'Twice a week during study and maybe more in the summer <br /> Each session will be about 3 hours long' },
        { question: 'When do we finish the program ?', answer: 'Usually by late August' },
    ],
    "Others": [
        { question: 'What is Protons ?', answer: 'Protons is a program organized by <a href="http://alexsb.org/" target="_blank">IEEE AlexSB</a>, it targets school students in preparatory and secondary stages with different backgrounds. It mainly aims to raise the participants’ knowledge, let them learn in a motivational atmosphere and help them discover their abilities and inner motive' },
        { question: 'I want to know more about each track', answer: 'Check out this <a href="tracks.html" target="_blank">page</a> for a description of each track' },
        // { question: 'What would the final project be like ?', answer: 'Changes each year but we could give examples/photos of the previous year\'s projects as illustrations' },
        { question: 'What will I gain from joining protons other than the technical knowledge ?', answer: 'The program focuses on the non-technical skills as much as the technical ones, through workshops that develop the participants’ communication, teamwork, time management, leadership and presentation skills' },
        { question: 'How much money will it cost ?', answer: 'It’s a free program but in Robotics and Automation you pay for some of the components, so that you’d be able to implement what you take, at home and do the assignments' },
        { question: 'Who can apply ?', answer: 'Students who are enrolled in middle or high school' },
        { question: 'Who are we ?', answer: 'We are a Non-profitable organization, that aids in the development of the society' },
        { question: 'How will I know that I’m accepted/rejected ?', answer: 'You will receive a call if you’re accepted a week after the interviews' },
        { question: 'Can I change the track I was accepted in ?', answer: 'No, as it’s seen in the interview whether the applicant is a good fit for this track or not and according to that he/she is put in it. Under extreme cases he/she can refer back to the project manager and see what could be done' },
        { question: 'What is the process after filling the application ?', answer: 'Interviews are to be held, then you receive a call if you’re accepted to attend the opening where you will be provided with all the information you need' },
        { question: 'Answering the application in English or Arabic ?', answer: 'Doesn’t matter' },
        { question: 'Sessions in Arabic or English ?', answer: 'Sessions will be taught in Arabic, while the content and the terminology given will be in English' },
        { question: 'Are there any official certificates ?', answer: 'No, there are no official certificates but there are certificates given by IEEE AlexSB at the end of the program' },
        { question: 'Who are the instructors ?', answer: 'The instructors are college students and volunteers from IEEE AlexSB’s Technical Team' },
        { question: 'Is the program for people in Alexandria only ?', answer: 'Since the sessions will be in Alexandria, if you can make it to 2 sessions per week for 6 months you can apply' },
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