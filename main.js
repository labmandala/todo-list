$(document).ready(function(){
    $("#projects").tabs();
    $("ul").sortable({axis:"x", containment:"#projects"});
    $("ol").sortable({axis:"y", containment:"#projects"});
    $("#btnAddTask").button()
    .click(function(){
        $("#task-dialog").dialog({width:400, resizable:false, modal:true,
            buttons:{
                "Add new task": function(){
                    $("#new-task").val("");
                    $(this).dialog("close");
                },
                "Cancel": function(){
                    $("#new-task").val("");
                    $(this).dialog("close");
                }
            }
        });
    });
    $("#btnAddProject").button()
    .click(function(){
        $("#project-dialog").dialog({width:400, resizable:false, modal:true,
            buttons:{
                "Add new project":function(){
                    var projectName = $("#new-project").val();
                    $("<li><a href='#" + projectName + "'>" + projectName + "</a></li>")
                    .appendTo("#main");
                    $("<ol id='" + projectName + "'></ol>").appendTo("#projects");
                    $("#projects").tabs("refresh");
                    var tabCount = $("#projects .ui-tabs-nav li").length;
                    $("#projects").tabs("option", "active", tabCount-1);

                    $("#new-project").val("");
                    $(this).dialog("close");
                },
                "Cancel":function(){
                    $("#new-project").val("");
                    $(this).dialog("close");
                } 
            }});
    });
});