$(document).ready(function () {

    var showData = $('#show-data');

    $.getJSON('http://52.35.94.10:5000/todo/api/v1.0/tasks', function (data) {
      console.log(data);

      var items = data.tasks.map(function (item) {
        return item.description + ' = ' + item.title;
      });

      showData.empty();

      if (items.length) {
        var content = '<li>' + items.join('</li><li>') + '</li>';
        var list = $('<ul />').html(content);
        showData.append(list);
      }
    });

    showData.text('Loading the JSON file.');
  
});