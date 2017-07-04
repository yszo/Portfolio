var data = ['abc', 'acb', 'bac', 't est', 'bca', 'cab', 'c ba'];

alert("Данные в массиве: " + data);

var keyWord = prompt("Какую строку искать?");

var dataCheck = [];
var j = 0;
for (var i = 0; i < data.length; i++) {
    dataCheck[j] = data[i].replace(/\s/g, "");
    j++;
};


    function arrSearch() {
        for (var k = 0; k < dataCheck.length; k++)
            if (dataCheck[k] === keyWord) {
                alert("Нашли! Номер в массиве - " + k);
            }

    };

arrSearch();
