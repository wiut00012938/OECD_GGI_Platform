var groupColumn = 0; // Assuming "Group" is the first column
var subgroupColumn = 1; // Assuming "Subgroup" is the second column
    var xmlhttp = new XMLHttpRequest();
    var url = "/static/data/stat4uz.json";
    xmlhttp.open("GET",url,true);
    xmlhttp.send();
    xmlhttp.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        var data = JSON.parse(this.responseText);
    
        var table = $('#example').DataTable( {
            "autoWidth": true,
            "data":data.data,
            "columns": [
        { "data": "Group" },
        { "data": "Subgroup" },
        { "data": "Definition" },
        { "data": "Unit" ,
        "render": function (data, type, row) {
            return '<div class="button" data-group=' + row.id + '><span>' + data + '</span><button>+</button></div>';
        }
    },
        { "data": "1990" },
        { "data": "1991" },
        { "data": "1992" },
        { "data": "1993" },
        { "data": "1994" },
        { "data": "1995" },
        { "data": "1996" },
        { "data": "1997" },
        { "data": "1998" },
        { "data": "1999" },
        { "data": "2000" },
        { "data": "2001" },
        { "data": "2002" },
        { "data": "2003" },
        { "data": "2004" },
        { "data": "2005" },
        { "data": "2006" },
        { "data": "2007" },
        { "data": "2008" },
        { "data": "2009" },
        { "data": "2010" },
        { "data": "2011" },
        { "data": "2012" },
        { "data": "2013" },
        { "data": "2014" },
        { "data": "2015" },
        { "data": "2016" },
        { "data": "2017" },
        { "data": "2018" },
        { "data": "2019" },
        { "data": "2020" },
        { "data": "2021" },
        { "data": "2022" }
            ],
            "scrollX": true,
    scrollCollapse: true,
    scrollY: '50vh',
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
                    '<tr class="group"><td colspan="5">' + group + ' - ' + subgroup + '</td></tr>'
                );

                lastGroup = group;
                lastSubgroup = subgroup;
            }
        });
    }
});
$('#example tbody').on('click', 'tr.group', function () {
    var currentOrder = table.order()[0];

    if (currentOrder[0] === groupColumn && currentOrder[1] === 'asc') {
        table.order([groupColumn, 'desc'], [subgroupColumn, 'desc']).draw();
    } else {
        table.order([groupColumn, 'asc'], [subgroupColumn, 'asc']).draw();
    }
});
  }
  };








const arrow = document.getElementById('arrow');
const navigation = document.querySelector('.navigation');
let isNavigationMoved = false;
const main = document.querySelector('.container-main');
let mainWidth = 70;
const arrowinformation = document.getElementById('arrow-information');
const information = document.querySelector('.information');
let isInformationMoved = false;

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

arrowinformation.addEventListener('click', () => {
    if(window.innerWidth < 800){
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
    }
    else{
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