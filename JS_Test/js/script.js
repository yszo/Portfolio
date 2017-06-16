$(function() {
    'use strict';

    var test = {
        questions: [{
            title: 'Вопрос 1',
            answers: [{
                text: 'Вариант ответа №1',
                correct: false
            }, {
                text: 'Вариант ответа №2',
                correct: true
            }, {
                text: 'Вариант ответа №3',
                correct: false
            }]
        }, {
            title: 'Вопрос 2',
            answers: [{
                text: 'Вариант ответа №1',
                correct: false
            }, {
                text: 'Вариант ответа №2',
                correct: false
            }, {
                text: 'Вариант ответа №3',
                correct: true
            }]
        }, {
            title: 'Вопрос 3',
            answers: [{
                text: 'Вариант ответа №1',
                correct: true
            }, {
                text: 'Вариант ответа №2',
                correct: false
            }, {
                text: 'Вариант ответа №3',
                correct: false
            }]
        }]
    }

    localStorage.setItem('test', JSON.stringify(test));


    var html = $('#tmpl').html();
    var data = JSON.parse(localStorage.getItem('test'));
    var content = tmpl(html, data);


    $('.buttonWraper').before(content);

    $('.button').click(function() {
        var id = '#check';
        var answers = [];
        var result = [];
        var rigthAnswers = 0;

        for (var i = 0; i < data.questions.length; i++) {
            result[i] = 0;
            for (var j = 0; j < data.questions[i].answers.length; j++) {

                if ($(id + i + j)[0].checked == data.questions[i].answers[j].correct) {
                    result[i] = result[i] + 1;
                    $(id + i + j)[0].checked = false;
                }
            }
        }
        for (var i = 0; i < result.length; i++) {
            if (result[i] == data.questions[i].answers.length) {
                rigthAnswers++
            }
        }
        console.log(rigthAnswers);
        $('.modal-window').html('Правильных ответов - ' + rigthAnswers);
        $('.modal').addClass('modal-active');
        $('.modal-window').addClass('modal-window-active');
        $('input:checkbox').prop('checked', false).prop('disabled', false);
    })
    $('.modal').click(function() {
        $('.modal-window').removeClass('modal-window-active');
        $('.modal').removeClass(' modal-active');
        console.clear();
    })
});
