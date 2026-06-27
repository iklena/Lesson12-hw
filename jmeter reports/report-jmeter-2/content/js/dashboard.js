/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 26.71246515332537, "KoPercent": 73.28753484667463};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.2530532324439134, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.9426229508196722, 500, 1500, "HTTP Request-3"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request-16"], "isController": false}, {"data": [0.9412568306010929, 500, 1500, "HTTP Request-2"], "isController": false}, {"data": [0.9423076923076923, 500, 1500, "HTTP Request-15"], "isController": false}, {"data": [0.9423076923076923, 500, 1500, "HTTP Request-5"], "isController": false}, {"data": [0.9258241758241759, 500, 1500, "HTTP Request-14"], "isController": false}, {"data": [0.9986263736263736, 500, 1500, "HTTP Request-4"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request-13"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request-19"], "isController": false}, {"data": [0.9989224137931034, 500, 1500, "HTTP Request-1"], "isController": false}, {"data": [0.9313186813186813, 500, 1500, "HTTP Request-18"], "isController": false}, {"data": [0.8642241379310345, 500, 1500, "HTTP Request-0"], "isController": false}, {"data": [0.9258241758241759, 500, 1500, "HTTP Request-17"], "isController": false}, {"data": [0.945054945054945, 500, 1500, "HTTP Request-12"], "isController": false}, {"data": [0.9381868131868132, 500, 1500, "HTTP Request-11"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request-10"], "isController": false}, {"data": [0.0, 500, 1500, "HTTP Request-21"], "isController": false}, {"data": [0.9217032967032966, 500, 1500, "HTTP Request-20"], "isController": false}, {"data": [1.0, 500, 1500, "HTTP Request-7"], "isController": false}, {"data": [0.006843065693430657, 500, 1500, "HTTP Request"], "isController": false}, {"data": [0.9271978021978022, 500, 1500, "HTTP Request-6"], "isController": false}, {"data": [0.9423076923076923, 500, 1500, "HTTP Request-9"], "isController": false}, {"data": [0.9258241758241759, 500, 1500, "HTTP Request-8"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 30132, 22083, 73.28753484667463, 218.03424930306727, 1, 21186, 109.0, 458.0, 515.9500000000007, 5879.980000000003, 177.80662673708437, 353.81517754403563, 45.438816643554716], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["HTTP Request-3", 366, 0, 0.0, 382.8715846994534, 241, 541, 377.5, 507.3, 517.65, 531.99, 8.015242099730635, 10.446906891246742, 1.3756308102292887], "isController": false}, {"data": ["HTTP Request-16", 364, 0, 0.0, 47.55494505494509, 38, 265, 40.0, 63.0, 64.0, 73.35000000000002, 7.963420770526593, 7.844034407884661, 2.431247299492441], "isController": false}, {"data": ["HTTP Request-2", 366, 0, 0.0, 385.7431693989071, 38, 539, 388.0, 505.0, 522.0, 537.0, 8.090543348512313, 6.131050119644989, 3.0220807866174457], "isController": false}, {"data": ["HTTP Request-15", 364, 0, 0.0, 378.92582417582435, 239, 539, 374.5, 510.5, 523.75, 537.35, 7.923378319547236, 6.75305510584458, 1.3508831152046148], "isController": false}, {"data": ["HTTP Request-5", 364, 0, 0.0, 383.5851648351647, 39, 543, 383.5, 505.5, 527.75, 539.35, 8.078476630121177, 6.111458945969639, 3.0201091509831772], "isController": false}, {"data": ["HTTP Request-14", 364, 0, 0.0, 388.97527472527497, 39, 539, 388.5, 513.5, 525.0, 537.0, 7.931492820255813, 6.00026403127928, 2.96515978744035], "isController": false}, {"data": ["HTTP Request-4", 364, 0, 0.0, 48.00274725274724, 37, 535, 40.0, 63.0, 63.0, 68.35000000000002, 8.12971813999196, 8.007838673113861, 2.4820181983405547], "isController": false}, {"data": ["HTTP Request-13", 364, 0, 0.0, 48.03571428571431, 38, 454, 40.0, 63.0, 63.0, 79.20000000000073, 8.006510788993246, 7.886478427512483, 2.444402762961089], "isController": false}, {"data": ["HTTP Request-19", 364, 0, 0.0, 48.57142857142855, 37, 403, 40.0, 63.0, 64.0, 150.1500000000034, 7.929937693346695, 7.811053303777613, 2.4210248532199032], "isController": false}, {"data": ["HTTP Request-1", 464, 0, 0.0, 170.7241379310344, 98, 519, 107.0, 341.0, 345.75, 356.35, 9.763282482903735, 176.63672080483957, 2.7065524723829566], "isController": false}, {"data": ["HTTP Request-18", 364, 0, 0.0, 390.3104395604399, 241, 542, 385.0, 512.0, 524.0, 540.0, 7.899134133373842, 6.732391909084003, 1.3467496432911612], "isController": false}, {"data": ["HTTP Request-0", 464, 0, 0.0, 408.95689655172436, 247, 622, 408.5, 575.5, 588.75, 601.35, 9.729707060328378, 8.517507313007192, 1.653290066891736], "isController": false}, {"data": ["HTTP Request-17", 364, 0, 0.0, 386.71428571428555, 40, 539, 388.0, 516.0, 529.0, 537.35, 7.905481713143949, 5.980586334538702, 2.9554356295065594], "isController": false}, {"data": ["HTTP Request-12", 364, 0, 0.0, 389.36813186813185, 242, 540, 386.5, 504.5, 520.0, 534.0500000000001, 7.955066984286557, 6.780063193882904, 1.3562858210219202], "isController": false}, {"data": ["HTTP Request-11", 364, 0, 0.0, 389.36813186813197, 39, 542, 389.0, 507.5, 525.0, 538.7, 7.971792120190096, 6.030750907503121, 2.9802255343728783], "isController": false}, {"data": ["HTTP Request-10", 364, 0, 0.0, 49.159340659340636, 37, 373, 40.0, 63.0, 64.0, 249.05000000000007, 8.056305608428136, 7.935526730777743, 2.4596052147425964], "isController": false}, {"data": ["HTTP Request-21", 364, 364, 100.0, 387.4148351648355, 39, 556, 384.5, 518.0, 528.0, 540.35, 7.890230420740035, 5.969048559328463, 2.9497339892268006], "isController": false}, {"data": ["HTTP Request-20", 364, 0, 0.0, 387.4148351648355, 39, 556, 384.5, 518.0, 528.0, 540.35, 7.890230420740035, 5.969048559328463, 2.9497339892268006], "isController": false}, {"data": ["HTTP Request-7", 364, 0, 0.0, 48.53846153846156, 37, 291, 40.0, 63.0, 63.75, 245.4000000000001, 8.073101490418736, 7.9520708115241305, 2.4647330290210254], "isController": false}, {"data": ["HTTP Request", 21920, 21719, 99.0830291970803, 192.53248175182512, 1, 21186, 109.0, 118.0, 129.0, 5879.980000000003, 129.3482430000295, 264.20805803373855, 31.65049060646741], "isController": false}, {"data": ["HTTP Request-6", 364, 0, 0.0, 393.5714285714289, 240, 541, 393.5, 518.5, 530.75, 537.35, 8.061836947132955, 6.871062691025669, 1.3744893870013952], "isController": false}, {"data": ["HTTP Request-9", 364, 0, 0.0, 386.64835164835154, 240, 538, 387.0, 505.0, 520.75, 534.35, 8.014090708938793, 6.830368814674152, 1.3663489720937911], "isController": false}, {"data": ["HTTP Request-8", 364, 0, 0.0, 390.7280219780222, 39, 539, 388.5, 512.0, 523.75, 534.35, 8.016208597603946, 6.064352475059461, 2.9968304731545103], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1, 0.004528370239550786, 0.0033187309172972254], "isController": false}, {"data": ["Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 5141, 23.280351401530588, 17.061595645825037], "isController": false}, {"data": ["429/Too Many Requests", 16213, 73.41846669383689, 53.806584362139915], "isController": false}, {"data": ["Non HTTP response code: java.io.IOException/Non HTTP response message: Exceeded maximum number of redirects: 20", 728, 3.296653534392972, 2.41603610779238], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 30132, 22083, "429/Too Many Requests", 16213, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 5141, "Non HTTP response code: java.io.IOException/Non HTTP response message: Exceeded maximum number of redirects: 20", 728, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1, "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["HTTP Request-21", 364, 364, "Non HTTP response code: java.io.IOException/Non HTTP response message: Exceeded maximum number of redirects: 20", 364, "", "", "", "", "", "", "", ""], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": ["HTTP Request", 21920, 21719, "429/Too Many Requests", 16213, "Non HTTP response code: java.net.BindException/Non HTTP response message: Address already in use: connect", 5141, "Non HTTP response code: java.io.IOException/Non HTTP response message: Exceeded maximum number of redirects: 20", 364, "Non HTTP response code: java.net.SocketException/Non HTTP response message: Connection reset", 1, "", ""], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
