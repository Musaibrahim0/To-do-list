$(document).ready(function () {
  console.log("To - do app is ready");

  var $addBtn = $("#addTaskBtn");
  var $taskInput = $("#taskInput");
  var $taskList = $("#taskList");

  $addBtn.click(function () {
    var taskText = $taskInput.val().trim();

    if (taskText !== "") {
      var $taskItem = $("<li>");
      var $taskText = $("<span>").text(taskText);
      var $deleteBtn = $("<button>").text("❌").addClass("delete-btn");

      // Mark as completed
      $taskText.click(function () {
        $taskItem.toggleClass("completed");
      });

      // Delete task
      $deleteBtn.click(function () {
        $taskItem.remove();
      });

      $taskItem.append($taskText).append($deleteBtn);
      $taskList.append($taskItem);
      $taskInput.val(""); // Clear input
    } else {
      alert("Please enter a task");
    }
  });
});
