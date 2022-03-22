window.onload = function() {
    var button = document.getElementsByTagName('button')[0];

    function createForm() {

        var notes = new Array({
            c: "Do",
            a: "C"
        }, {
            c: "Ré",
            a: "D"
        }, {
            c: "Mi",
            a: "E"
        }, {
            c: "Fa",
            a: "F"
        }, {
            c: "Sol",
            a: "G"
        }, {
            c: "La",
            a: "A"
        }, {
            c: "Si",
            a: "B"
        });
        var form = document.createElement('form');
        form.setAttribute('method', 'post');
        form.setAttribute('action', 'index.php');
        var select = document.createElement('select');
        var result = document.createElement('p');
        result.setAttribute('id', 'result');
        result.innerHTML = "Choissisez une note pour voir sa correspondance.";

        select.setAttribute("id", "note");
        select.appendChild(document.createElement('option'));
        for (var i = 0; i < notes.length; i++) {
            var option = document.createElement('option');
            option.value = i;
            option.innerHTML = notes[i].c;
            select.appendChild(option);
        }
        form.appendChild(select);
        document.body.appendChild(form);
        document.body.appendChild(result);



        select.addEventListener('change', function() {
            var xmlhttp = new XMLHttpRequest();
            xmlhttp.addEventListener('readystatechange', function(event) {
                if (xmlhttp.readyState == 4) {
                    if (xmlhttp.status == 200) {
                        result.innerHTML = xmlhttp.responseText;
                    } else {
                        alert('error code ' + xmlhttp.status + ' : ' + xmlhttp.statusText);
                    }
                }
            });
            xmlhttp.open("POST", form.action, true);
            xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded; charset=UTF-8");
            xmlhttp.send("note_classique=" + notes[this.value].c);
        });


        button.removeEventListener('click', createForm);

    }

    button.addEventListener('click', createForm);

}