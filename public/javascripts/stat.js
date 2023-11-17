var xmlhtpp = new XMLHttpRequest();
      var url = "/static/data/sample1.json";
      xmlhtpp.open("GET", url, true);
      xmlhtpp.send();
      xmlhtpp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      var data = JSON.parse(this.responseText);
      var table = $('#example').DataTable({
        data: data.data, // Assuming data is the JSON array containing the table data
        columns: [
            { data: "group" },
            { data: "subgroup" },
            { 
                "data": "value1",
                "render": function (data, type, row) {
                    return '<div class="button" data-group=' + row.id + '><span>' + data + '</span><button>+</button></div>';
                }
            },
            { data: "value2" },
            { data: "value3" },
            { data: "value4" }
        ],
        columnDefs: [
            { visible: false, targets: [groupColumn, subgroupColumn] }
        ],
        order: [[groupColumn, 'asc'], [subgroupColumn, 'asc']],
        displayLength: 25,
        drawCallback: function (settings) {
            var api = this.api();
            var rows = api.rows({ page: 'current' }).nodes();
            var lastGroup = null;
            var lastSubgroup = null;
    
            api.column(groupColumn, { page: 'current' }).data().each(function (group, i) {
                var subgroup = api.cell(i, subgroupColumn).data();
    
                if (lastGroup !== group || lastSubgroup !== subgroup) {
                    $(rows).eq(i).before(
                        '<tr class="group"><td colspan="6">' + group + ' - ' + subgroup + '</td></tr>'
                    );
    
                    lastGroup = group;
                    lastSubgroup = subgroup;
                }
            });
        }
    });
      }
      };
      var groupColumn = 0; // Assuming "group" is the first column
      var subgroupColumn = 1; // Assuming "subgroup" is the second column
      $('#example tbody').on('click', 'tr.group', function () {
        var currentOrder = table.order()[0];
    
        if (currentOrder[0] === groupColumn && currentOrder[1] === 'asc') {
            table.order([groupColumn, 'desc'], [subgroupColumn, 'desc']).draw();
        } else {
            table.order([groupColumn, 'asc'], [subgroupColumn, 'asc']).draw();
        }
    });
      
      
      
      


      











const arrow = document.getElementById('arrow');
const navigation = document.querySelector('.navigation');
let isNavigationMoved = false;
const main = document.querySelector('.container-main');
let mainWidth = 70;
arrow.addEventListener('click', () => {
    if (isNavigationMoved) {
        navigation.setAttribute("style", "display: block");
        mainWidth -= 15;
        main.setAttribute("style","width:" +mainWidth+"%");
        isNavigationMoved = false;
    } 
    else {
        navigation.setAttribute("style", "display: none");
        mainWidth += 15;
        main.setAttribute("style","width:" +mainWidth+"%");
        isNavigationMoved = true;
    }
});
const arrowinformation = document.getElementById('arrow-information');
const information = document.querySelector('.information');
let isInformationMoved = false;

arrowinformation.addEventListener('click', () => {
    if (isInformationMoved) {
        information.setAttribute("style", "display: block");
        mainWidth -= 15;
        main.setAttribute("style","width:" +mainWidth+"%");
        isInformationMoved = false;
    } 
    else {
        mainWidth += 15;
        main.setAttribute("style","width:" +mainWidth+"%");
        information.setAttribute("style", "display: none");
        isInformationMoved = true;
        }
});

$('#example').on('click', '.button', function() {
    var groupNumber = $(this).attr('data-group');
    console.log(groupNumber);
    $('.group-info').removeClass('active_information_group');
    $('.group-info[data-group="' + groupNumber + '"]').addClass('active_information_group');
    if (isInformationMoved) {
        information.setAttribute("style", "display: block");
        mainWidth -= 15;
        main.setAttribute("style","width:" +mainWidth+"%");
        isInformationMoved = false;
    } 
  });