$(document).ready(function() {
    $("input[type=radio][class=bool]").change(function() {
        var checkboxes = "input[type=checkbox][name=" + this.name.replace("bool", "follow]");
        var checkboxesPart2 = checkboxes.replace("follow", "follow-part-2");
        var followUpElement = "#" + this.name.replace("bool", "true");
        var unsureElement = followUpElement.replace("true", "unsure");
        if(this.value == "false") {
            $(checkboxes).prop("checked", false);
            $(checkboxesPart2).prop("checked", false);
            $(followUpElement).fadeOut();
        } else if(this.value == "true") {
            $(followUpElement).fadeIn();
            $(unsureElement).fadeOut();
        } else if(this.value = "unsure") {
            $(checkboxes).prop("checked", false);
            $(checkboxesPart2).prop("checked", false);
            $(followUpElement).fadeIn();
            $(unsureElement).fadeIn();
        }
    });

    $("input[type=radio]").change(function() {
        if(this.name.indexOf("bool") < 0) {
            var thisElement = "input[type=radio][name=" + this.name + "]";
            var followChecks = "input[type=checkbox][name=" + this.name + "]";
            var boolRadioElement = thisElement.replace("follow", "bool");
            var followUpElement = "#" + this.name.replace("follow", "true");
            var unsureElement = followUpElement.replace("true", "unsure");
            if(this.value == "na") {
                $(boolRadioElement + "[value=false]").prop("checked", true);
                $(thisElement).prop("checked", false);
                $(followChecks).prop("checked", false);
                $(followUpElement).fadeOut();
            } else {
                $(boolRadioElement + "[value=true]").prop("checked", true);
                $(unsureElement).fadeOut();
            }
        }
    });

    $("input[type=checkbox]").change(function() {
        var thisElement = "input[type=checkbox][name=" + this.name + "]";
        var unsureRadio = "input[type=radio][name=" + this.name + "]";
        var boolRadioElement = unsureRadio.replace("follow", "bool");
        var followUpElement = "#" + this.name.replace("follow", "true");
        var unsureElement = followUpElement.replace("true", "unsure");
        if(this.checked) {
            $(boolRadioElement + "[value=true]").prop("checked", true);
            $(unsureElement).fadeOut();
        }
    });

    $("onsubmitbuttonfunction").change(function() {
        var opened = window.open("");
        opened.document.write("<html><head><title>My title</title></head><body>asd;lfkjasdf;lkjasdf;lkjadsf;lkjasdf;lkjasdf;lkj</body></html>");
    });


});