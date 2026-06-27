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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 103.0, "minX": 0.0, "maxY": 323.0, "series": [{"data": [[0.0, 103.0], [0.1, 104.0], [0.2, 104.0], [0.3, 105.0], [0.4, 105.0], [0.5, 105.0], [0.6, 105.0], [0.7, 105.0], [0.8, 105.0], [0.9, 105.0], [1.0, 105.0], [1.1, 105.0], [1.2, 105.0], [1.3, 105.0], [1.4, 105.0], [1.5, 105.0], [1.6, 106.0], [1.7, 106.0], [1.8, 106.0], [1.9, 106.0], [2.0, 106.0], [2.1, 106.0], [2.2, 106.0], [2.3, 106.0], [2.4, 106.0], [2.5, 106.0], [2.6, 106.0], [2.7, 106.0], [2.8, 106.0], [2.9, 106.0], [3.0, 106.0], [3.1, 106.0], [3.2, 106.0], [3.3, 106.0], [3.4, 106.0], [3.5, 106.0], [3.6, 106.0], [3.7, 106.0], [3.8, 106.0], [3.9, 106.0], [4.0, 106.0], [4.1, 106.0], [4.2, 106.0], [4.3, 106.0], [4.4, 106.0], [4.5, 106.0], [4.6, 106.0], [4.7, 106.0], [4.8, 106.0], [4.9, 107.0], [5.0, 107.0], [5.1, 107.0], [5.2, 107.0], [5.3, 107.0], [5.4, 107.0], [5.5, 107.0], [5.6, 107.0], [5.7, 107.0], [5.8, 107.0], [5.9, 107.0], [6.0, 107.0], [6.1, 107.0], [6.2, 107.0], [6.3, 107.0], [6.4, 107.0], [6.5, 107.0], [6.6, 107.0], [6.7, 107.0], [6.8, 107.0], [6.9, 107.0], [7.0, 107.0], [7.1, 107.0], [7.2, 107.0], [7.3, 107.0], [7.4, 107.0], [7.5, 107.0], [7.6, 107.0], [7.7, 107.0], [7.8, 107.0], [7.9, 107.0], [8.0, 107.0], [8.1, 107.0], [8.2, 107.0], [8.3, 107.0], [8.4, 107.0], [8.5, 107.0], [8.6, 107.0], [8.7, 107.0], [8.8, 107.0], [8.9, 107.0], [9.0, 107.0], [9.1, 107.0], [9.2, 107.0], [9.3, 107.0], [9.4, 107.0], [9.5, 107.0], [9.6, 107.0], [9.7, 107.0], [9.8, 107.0], [9.9, 107.0], [10.0, 107.0], [10.1, 107.0], [10.2, 107.0], [10.3, 107.0], [10.4, 107.0], [10.5, 107.0], [10.6, 108.0], [10.7, 108.0], [10.8, 108.0], [10.9, 108.0], [11.0, 108.0], [11.1, 108.0], [11.2, 108.0], [11.3, 108.0], [11.4, 108.0], [11.5, 108.0], [11.6, 108.0], [11.7, 108.0], [11.8, 108.0], [11.9, 108.0], [12.0, 108.0], [12.1, 108.0], [12.2, 108.0], [12.3, 108.0], [12.4, 108.0], [12.5, 108.0], [12.6, 108.0], [12.7, 108.0], [12.8, 108.0], [12.9, 108.0], [13.0, 108.0], [13.1, 108.0], [13.2, 108.0], [13.3, 108.0], [13.4, 108.0], [13.5, 108.0], [13.6, 108.0], [13.7, 108.0], [13.8, 108.0], [13.9, 108.0], [14.0, 108.0], [14.1, 108.0], [14.2, 108.0], [14.3, 108.0], [14.4, 108.0], [14.5, 108.0], [14.6, 108.0], [14.7, 108.0], [14.8, 108.0], [14.9, 108.0], [15.0, 108.0], [15.1, 108.0], [15.2, 108.0], [15.3, 108.0], [15.4, 108.0], [15.5, 108.0], [15.6, 108.0], [15.7, 108.0], [15.8, 108.0], [15.9, 108.0], [16.0, 108.0], [16.1, 108.0], [16.2, 108.0], [16.3, 108.0], [16.4, 108.0], [16.5, 108.0], [16.6, 108.0], [16.7, 108.0], [16.8, 108.0], [16.9, 108.0], [17.0, 108.0], [17.1, 108.0], [17.2, 108.0], [17.3, 108.0], [17.4, 108.0], [17.5, 108.0], [17.6, 108.0], [17.7, 108.0], [17.8, 108.0], [17.9, 108.0], [18.0, 108.0], [18.1, 108.0], [18.2, 108.0], [18.3, 108.0], [18.4, 108.0], [18.5, 108.0], [18.6, 108.0], [18.7, 108.0], [18.8, 108.0], [18.9, 108.0], [19.0, 108.0], [19.1, 109.0], [19.2, 109.0], [19.3, 109.0], [19.4, 109.0], [19.5, 109.0], [19.6, 109.0], [19.7, 109.0], [19.8, 109.0], [19.9, 109.0], [20.0, 109.0], [20.1, 109.0], [20.2, 109.0], [20.3, 109.0], [20.4, 109.0], [20.5, 109.0], [20.6, 109.0], [20.7, 109.0], [20.8, 109.0], [20.9, 109.0], [21.0, 109.0], [21.1, 109.0], [21.2, 109.0], [21.3, 109.0], [21.4, 109.0], [21.5, 109.0], [21.6, 109.0], [21.7, 109.0], [21.8, 109.0], [21.9, 109.0], [22.0, 109.0], [22.1, 109.0], [22.2, 109.0], [22.3, 109.0], [22.4, 109.0], [22.5, 109.0], [22.6, 109.0], [22.7, 109.0], [22.8, 109.0], [22.9, 109.0], [23.0, 109.0], [23.1, 109.0], [23.2, 109.0], [23.3, 109.0], [23.4, 109.0], [23.5, 109.0], [23.6, 109.0], [23.7, 109.0], [23.8, 109.0], [23.9, 109.0], [24.0, 109.0], [24.1, 109.0], [24.2, 109.0], [24.3, 109.0], [24.4, 109.0], [24.5, 109.0], [24.6, 109.0], [24.7, 109.0], [24.8, 109.0], [24.9, 109.0], [25.0, 109.0], [25.1, 109.0], [25.2, 109.0], [25.3, 109.0], [25.4, 109.0], [25.5, 109.0], [25.6, 109.0], [25.7, 109.0], [25.8, 109.0], [25.9, 109.0], [26.0, 109.0], [26.1, 109.0], [26.2, 109.0], [26.3, 109.0], [26.4, 109.0], [26.5, 109.0], [26.6, 109.0], [26.7, 109.0], [26.8, 109.0], [26.9, 109.0], [27.0, 109.0], [27.1, 109.0], [27.2, 109.0], [27.3, 109.0], [27.4, 109.0], [27.5, 109.0], [27.6, 109.0], [27.7, 109.0], [27.8, 109.0], [27.9, 109.0], [28.0, 109.0], [28.1, 109.0], [28.2, 109.0], [28.3, 109.0], [28.4, 109.0], [28.5, 109.0], [28.6, 109.0], [28.7, 109.0], [28.8, 109.0], [28.9, 109.0], [29.0, 109.0], [29.1, 109.0], [29.2, 109.0], [29.3, 109.0], [29.4, 109.0], [29.5, 109.0], [29.6, 109.0], [29.7, 109.0], [29.8, 109.0], [29.9, 109.0], [30.0, 110.0], [30.1, 110.0], [30.2, 110.0], [30.3, 110.0], [30.4, 110.0], [30.5, 110.0], [30.6, 110.0], [30.7, 110.0], [30.8, 110.0], [30.9, 110.0], [31.0, 110.0], [31.1, 110.0], [31.2, 110.0], [31.3, 110.0], [31.4, 110.0], [31.5, 110.0], [31.6, 110.0], [31.7, 110.0], [31.8, 110.0], [31.9, 110.0], [32.0, 110.0], [32.1, 110.0], [32.2, 110.0], [32.3, 110.0], [32.4, 110.0], [32.5, 110.0], [32.6, 110.0], [32.7, 110.0], [32.8, 110.0], [32.9, 110.0], [33.0, 110.0], [33.1, 110.0], [33.2, 110.0], [33.3, 110.0], [33.4, 110.0], [33.5, 110.0], [33.6, 110.0], [33.7, 110.0], [33.8, 110.0], [33.9, 110.0], [34.0, 110.0], [34.1, 110.0], [34.2, 110.0], [34.3, 110.0], [34.4, 110.0], [34.5, 110.0], [34.6, 110.0], [34.7, 110.0], [34.8, 110.0], [34.9, 110.0], [35.0, 110.0], [35.1, 110.0], [35.2, 110.0], [35.3, 110.0], [35.4, 110.0], [35.5, 110.0], [35.6, 110.0], [35.7, 110.0], [35.8, 110.0], [35.9, 110.0], [36.0, 110.0], [36.1, 110.0], [36.2, 110.0], [36.3, 110.0], [36.4, 110.0], [36.5, 110.0], [36.6, 110.0], [36.7, 110.0], [36.8, 110.0], [36.9, 110.0], [37.0, 110.0], [37.1, 110.0], [37.2, 110.0], [37.3, 110.0], [37.4, 110.0], [37.5, 110.0], [37.6, 110.0], [37.7, 110.0], [37.8, 110.0], [37.9, 110.0], [38.0, 110.0], [38.1, 110.0], [38.2, 110.0], [38.3, 110.0], [38.4, 110.0], [38.5, 110.0], [38.6, 110.0], [38.7, 110.0], [38.8, 110.0], [38.9, 110.0], [39.0, 110.0], [39.1, 110.0], [39.2, 110.0], [39.3, 110.0], [39.4, 110.0], [39.5, 110.0], [39.6, 110.0], [39.7, 110.0], [39.8, 110.0], [39.9, 110.0], [40.0, 110.0], [40.1, 110.0], [40.2, 110.0], [40.3, 110.0], [40.4, 110.0], [40.5, 110.0], [40.6, 110.0], [40.7, 110.0], [40.8, 111.0], [40.9, 111.0], [41.0, 111.0], [41.1, 111.0], [41.2, 111.0], [41.3, 111.0], [41.4, 111.0], [41.5, 111.0], [41.6, 111.0], [41.7, 111.0], [41.8, 111.0], [41.9, 111.0], [42.0, 111.0], [42.1, 111.0], [42.2, 111.0], [42.3, 111.0], [42.4, 111.0], [42.5, 111.0], [42.6, 111.0], [42.7, 111.0], [42.8, 111.0], [42.9, 111.0], [43.0, 111.0], [43.1, 111.0], [43.2, 111.0], [43.3, 111.0], [43.4, 111.0], [43.5, 111.0], [43.6, 111.0], [43.7, 111.0], [43.8, 111.0], [43.9, 111.0], [44.0, 111.0], [44.1, 111.0], [44.2, 111.0], [44.3, 111.0], [44.4, 111.0], [44.5, 111.0], [44.6, 111.0], [44.7, 111.0], [44.8, 111.0], [44.9, 111.0], [45.0, 111.0], [45.1, 111.0], [45.2, 111.0], [45.3, 111.0], [45.4, 111.0], [45.5, 111.0], [45.6, 111.0], [45.7, 111.0], [45.8, 111.0], [45.9, 111.0], [46.0, 111.0], [46.1, 111.0], [46.2, 111.0], [46.3, 111.0], [46.4, 111.0], [46.5, 111.0], [46.6, 111.0], [46.7, 111.0], [46.8, 111.0], [46.9, 111.0], [47.0, 111.0], [47.1, 111.0], [47.2, 111.0], [47.3, 111.0], [47.4, 111.0], [47.5, 111.0], [47.6, 111.0], [47.7, 111.0], [47.8, 111.0], [47.9, 111.0], [48.0, 111.0], [48.1, 111.0], [48.2, 111.0], [48.3, 111.0], [48.4, 111.0], [48.5, 111.0], [48.6, 111.0], [48.7, 111.0], [48.8, 111.0], [48.9, 111.0], [49.0, 111.0], [49.1, 111.0], [49.2, 111.0], [49.3, 111.0], [49.4, 111.0], [49.5, 111.0], [49.6, 111.0], [49.7, 111.0], [49.8, 111.0], [49.9, 111.0], [50.0, 111.0], [50.1, 112.0], [50.2, 112.0], [50.3, 112.0], [50.4, 112.0], [50.5, 112.0], [50.6, 112.0], [50.7, 112.0], [50.8, 112.0], [50.9, 112.0], [51.0, 112.0], [51.1, 112.0], [51.2, 112.0], [51.3, 112.0], [51.4, 112.0], [51.5, 112.0], [51.6, 112.0], [51.7, 112.0], [51.8, 112.0], [51.9, 112.0], [52.0, 112.0], [52.1, 112.0], [52.2, 112.0], [52.3, 112.0], [52.4, 112.0], [52.5, 112.0], [52.6, 112.0], [52.7, 112.0], [52.8, 112.0], [52.9, 112.0], [53.0, 112.0], [53.1, 112.0], [53.2, 112.0], [53.3, 112.0], [53.4, 112.0], [53.5, 112.0], [53.6, 112.0], [53.7, 112.0], [53.8, 112.0], [53.9, 112.0], [54.0, 112.0], [54.1, 112.0], [54.2, 112.0], [54.3, 112.0], [54.4, 112.0], [54.5, 112.0], [54.6, 112.0], [54.7, 112.0], [54.8, 112.0], [54.9, 112.0], [55.0, 112.0], [55.1, 112.0], [55.2, 112.0], [55.3, 112.0], [55.4, 112.0], [55.5, 112.0], [55.6, 112.0], [55.7, 112.0], [55.8, 112.0], [55.9, 112.0], [56.0, 112.0], [56.1, 112.0], [56.2, 112.0], [56.3, 112.0], [56.4, 112.0], [56.5, 112.0], [56.6, 112.0], [56.7, 112.0], [56.8, 112.0], [56.9, 112.0], [57.0, 112.0], [57.1, 112.0], [57.2, 112.0], [57.3, 112.0], [57.4, 112.0], [57.5, 112.0], [57.6, 112.0], [57.7, 112.0], [57.8, 112.0], [57.9, 113.0], [58.0, 113.0], [58.1, 113.0], [58.2, 113.0], [58.3, 113.0], [58.4, 113.0], [58.5, 113.0], [58.6, 113.0], [58.7, 113.0], [58.8, 113.0], [58.9, 113.0], [59.0, 113.0], [59.1, 113.0], [59.2, 113.0], [59.3, 113.0], [59.4, 113.0], [59.5, 113.0], [59.6, 113.0], [59.7, 113.0], [59.8, 113.0], [59.9, 113.0], [60.0, 113.0], [60.1, 113.0], [60.2, 113.0], [60.3, 113.0], [60.4, 113.0], [60.5, 113.0], [60.6, 113.0], [60.7, 113.0], [60.8, 113.0], [60.9, 113.0], [61.0, 113.0], [61.1, 113.0], [61.2, 113.0], [61.3, 113.0], [61.4, 113.0], [61.5, 113.0], [61.6, 113.0], [61.7, 113.0], [61.8, 113.0], [61.9, 113.0], [62.0, 113.0], [62.1, 113.0], [62.2, 113.0], [62.3, 113.0], [62.4, 113.0], [62.5, 113.0], [62.6, 113.0], [62.7, 113.0], [62.8, 113.0], [62.9, 113.0], [63.0, 113.0], [63.1, 113.0], [63.2, 113.0], [63.3, 113.0], [63.4, 113.0], [63.5, 113.0], [63.6, 113.0], [63.7, 113.0], [63.8, 113.0], [63.9, 113.0], [64.0, 113.0], [64.1, 113.0], [64.2, 114.0], [64.3, 114.0], [64.4, 114.0], [64.5, 114.0], [64.6, 114.0], [64.7, 114.0], [64.8, 114.0], [64.9, 114.0], [65.0, 114.0], [65.1, 114.0], [65.2, 114.0], [65.3, 114.0], [65.4, 114.0], [65.5, 114.0], [65.6, 114.0], [65.7, 114.0], [65.8, 114.0], [65.9, 114.0], [66.0, 114.0], [66.1, 114.0], [66.2, 114.0], [66.3, 114.0], [66.4, 114.0], [66.5, 114.0], [66.6, 114.0], [66.7, 114.0], [66.8, 114.0], [66.9, 114.0], [67.0, 114.0], [67.1, 114.0], [67.2, 114.0], [67.3, 114.0], [67.4, 114.0], [67.5, 114.0], [67.6, 114.0], [67.7, 114.0], [67.8, 114.0], [67.9, 114.0], [68.0, 114.0], [68.1, 114.0], [68.2, 114.0], [68.3, 114.0], [68.4, 114.0], [68.5, 114.0], [68.6, 114.0], [68.7, 114.0], [68.8, 114.0], [68.9, 114.0], [69.0, 115.0], [69.1, 115.0], [69.2, 115.0], [69.3, 115.0], [69.4, 115.0], [69.5, 115.0], [69.6, 115.0], [69.7, 115.0], [69.8, 115.0], [69.9, 115.0], [70.0, 115.0], [70.1, 115.0], [70.2, 115.0], [70.3, 115.0], [70.4, 115.0], [70.5, 115.0], [70.6, 115.0], [70.7, 115.0], [70.8, 115.0], [70.9, 115.0], [71.0, 115.0], [71.1, 115.0], [71.2, 115.0], [71.3, 115.0], [71.4, 115.0], [71.5, 115.0], [71.6, 115.0], [71.7, 115.0], [71.8, 115.0], [71.9, 115.0], [72.0, 115.0], [72.1, 115.0], [72.2, 115.0], [72.3, 115.0], [72.4, 115.0], [72.5, 115.0], [72.6, 115.0], [72.7, 115.0], [72.8, 115.0], [72.9, 115.0], [73.0, 116.0], [73.1, 116.0], [73.2, 116.0], [73.3, 116.0], [73.4, 116.0], [73.5, 116.0], [73.6, 116.0], [73.7, 116.0], [73.8, 116.0], [73.9, 116.0], [74.0, 116.0], [74.1, 116.0], [74.2, 116.0], [74.3, 116.0], [74.4, 116.0], [74.5, 116.0], [74.6, 116.0], [74.7, 116.0], [74.8, 116.0], [74.9, 116.0], [75.0, 116.0], [75.1, 116.0], [75.2, 116.0], [75.3, 116.0], [75.4, 116.0], [75.5, 116.0], [75.6, 116.0], [75.7, 116.0], [75.8, 116.0], [75.9, 116.0], [76.0, 117.0], [76.1, 117.0], [76.2, 117.0], [76.3, 117.0], [76.4, 117.0], [76.5, 117.0], [76.6, 117.0], [76.7, 117.0], [76.8, 117.0], [76.9, 117.0], [77.0, 117.0], [77.1, 117.0], [77.2, 117.0], [77.3, 117.0], [77.4, 117.0], [77.5, 117.0], [77.6, 117.0], [77.7, 117.0], [77.8, 117.0], [77.9, 117.0], [78.0, 117.0], [78.1, 117.0], [78.2, 117.0], [78.3, 117.0], [78.4, 118.0], [78.5, 118.0], [78.6, 118.0], [78.7, 118.0], [78.8, 118.0], [78.9, 118.0], [79.0, 118.0], [79.1, 118.0], [79.2, 118.0], [79.3, 118.0], [79.4, 118.0], [79.5, 118.0], [79.6, 118.0], [79.7, 118.0], [79.8, 118.0], [79.9, 118.0], [80.0, 118.0], [80.1, 118.0], [80.2, 118.0], [80.3, 119.0], [80.4, 119.0], [80.5, 119.0], [80.6, 119.0], [80.7, 119.0], [80.8, 119.0], [80.9, 119.0], [81.0, 119.0], [81.1, 119.0], [81.2, 119.0], [81.3, 119.0], [81.4, 119.0], [81.5, 119.0], [81.6, 119.0], [81.7, 119.0], [81.8, 119.0], [81.9, 120.0], [82.0, 120.0], [82.1, 120.0], [82.2, 120.0], [82.3, 120.0], [82.4, 120.0], [82.5, 120.0], [82.6, 120.0], [82.7, 120.0], [82.8, 120.0], [82.9, 120.0], [83.0, 120.0], [83.1, 121.0], [83.2, 121.0], [83.3, 121.0], [83.4, 121.0], [83.5, 121.0], [83.6, 121.0], [83.7, 121.0], [83.8, 121.0], [83.9, 121.0], [84.0, 121.0], [84.1, 121.0], [84.2, 122.0], [84.3, 122.0], [84.4, 122.0], [84.5, 122.0], [84.6, 122.0], [84.7, 122.0], [84.8, 122.0], [84.9, 122.0], [85.0, 122.0], [85.1, 123.0], [85.2, 123.0], [85.3, 123.0], [85.4, 123.0], [85.5, 123.0], [85.6, 123.0], [85.7, 123.0], [85.8, 123.0], [85.9, 124.0], [86.0, 124.0], [86.1, 124.0], [86.2, 124.0], [86.3, 124.0], [86.4, 124.0], [86.5, 124.0], [86.6, 124.0], [86.7, 125.0], [86.8, 125.0], [86.9, 125.0], [87.0, 125.0], [87.1, 125.0], [87.2, 125.0], [87.3, 125.0], [87.4, 126.0], [87.5, 126.0], [87.6, 126.0], [87.7, 126.0], [87.8, 126.0], [87.9, 127.0], [88.0, 127.0], [88.1, 127.0], [88.2, 127.0], [88.3, 127.0], [88.4, 127.0], [88.5, 128.0], [88.6, 128.0], [88.7, 128.0], [88.8, 128.0], [88.9, 129.0], [89.0, 129.0], [89.1, 129.0], [89.2, 129.0], [89.3, 129.0], [89.4, 130.0], [89.5, 130.0], [89.6, 130.0], [89.7, 130.0], [89.8, 131.0], [89.9, 131.0], [90.0, 131.0], [90.1, 132.0], [90.2, 132.0], [90.3, 132.0], [90.4, 132.0], [90.5, 132.0], [90.6, 132.0], [90.7, 133.0], [90.8, 133.0], [90.9, 133.0], [91.0, 134.0], [91.1, 134.0], [91.2, 134.0], [91.3, 135.0], [91.4, 135.0], [91.5, 135.0], [91.6, 136.0], [91.7, 136.0], [91.8, 137.0], [91.9, 137.0], [92.0, 137.0], [92.1, 138.0], [92.2, 138.0], [92.3, 139.0], [92.4, 140.0], [92.5, 140.0], [92.6, 141.0], [92.7, 141.0], [92.8, 142.0], [92.9, 142.0], [93.0, 143.0], [93.1, 143.0], [93.2, 143.0], [93.3, 144.0], [93.4, 144.0], [93.5, 145.0], [93.6, 145.0], [93.7, 145.0], [93.8, 146.0], [93.9, 146.0], [94.0, 147.0], [94.1, 148.0], [94.2, 149.0], [94.3, 150.0], [94.4, 150.0], [94.5, 151.0], [94.6, 152.0], [94.7, 153.0], [94.8, 153.0], [94.9, 154.0], [95.0, 154.0], [95.1, 155.0], [95.2, 156.0], [95.3, 156.0], [95.4, 157.0], [95.5, 158.0], [95.6, 159.0], [95.7, 159.0], [95.8, 160.0], [95.9, 161.0], [96.0, 162.0], [96.1, 162.0], [96.2, 163.0], [96.3, 163.0], [96.4, 164.0], [96.5, 165.0], [96.6, 166.0], [96.7, 166.0], [96.8, 167.0], [96.9, 168.0], [97.0, 168.0], [97.1, 170.0], [97.2, 170.0], [97.3, 172.0], [97.4, 172.0], [97.5, 175.0], [97.6, 176.0], [97.7, 178.0], [97.8, 180.0], [97.9, 181.0], [98.0, 182.0], [98.1, 184.0], [98.2, 185.0], [98.3, 186.0], [98.4, 188.0], [98.5, 190.0], [98.6, 192.0], [98.7, 193.0], [98.8, 195.0], [98.9, 196.0], [99.0, 198.0], [99.1, 200.0], [99.2, 203.0], [99.3, 206.0], [99.4, 209.0], [99.5, 215.0], [99.6, 224.0], [99.7, 240.0], [99.8, 274.0], [99.9, 292.0], [100.0, 323.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 5.0, "minX": 100.0, "maxY": 7630.0, "series": [{"data": [[300.0, 5.0], [200.0, 68.0], [100.0, 7630.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 100.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1 500ms"], [2, "Requests having \nresponse time > 1 500ms"], [3, "Requests in error"]], "maxY": 7603.0, "series": [{"data": [[0.0, 100.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1 500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1 500ms", "isController": false}, {"data": [[3.0, 7603.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 9.898190045248867, "minX": 1.78257462E12, "maxY": 62.21030161134793, "series": [{"data": [[1.78257462E12, 62.21030161134793], [1.78257468E12, 9.898190045248867]], "isOverall": false, "label": "jp@gc - Ultimate Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78257468E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 105.0, "minX": 1.0, "maxY": 180.0, "series": [{"data": [[2.0, 108.0], [3.0, 135.0], [4.0, 115.0], [5.0, 111.0], [6.0, 113.0], [7.0, 107.0], [8.0, 112.0], [9.0, 106.0], [10.0, 115.4532206353833], [11.0, 144.0], [12.0, 125.5], [13.0, 116.0], [14.0, 116.0], [16.0, 123.0], [17.0, 111.6], [18.0, 111.0], [19.0, 121.0], [20.0, 140.0], [21.0, 108.0], [22.0, 107.0], [25.0, 109.66666666666667], [27.0, 111.0], [28.0, 105.0], [29.0, 107.0], [30.0, 113.0], [31.0, 111.0], [33.0, 113.0], [32.0, 108.0], [35.0, 108.0], [34.0, 139.0], [36.0, 110.0], [39.0, 131.0], [38.0, 110.0], [40.0, 133.0], [42.0, 108.5], [45.0, 134.0], [44.0, 109.5], [47.0, 120.0], [49.0, 110.0], [48.0, 106.0], [50.0, 115.0], [52.0, 109.5], [55.0, 110.0], [54.0, 111.0], [57.0, 108.0], [56.0, 106.0], [58.0, 107.0], [61.0, 106.0], [60.0, 111.0], [63.0, 132.0], [62.0, 110.0], [67.0, 109.0], [66.0, 107.5], [64.0, 110.0], [71.0, 141.0], [70.0, 111.0], [69.0, 139.0], [68.0, 118.0], [75.0, 110.5], [73.0, 122.0], [72.0, 110.0], [78.0, 114.0], [77.0, 112.0], [76.0, 142.0], [83.0, 111.0], [81.0, 110.0], [80.0, 111.5], [86.0, 110.5], [84.0, 123.0], [91.0, 109.0], [90.0, 115.0], [89.0, 108.0], [88.0, 138.5], [95.0, 108.0], [94.0, 112.0], [93.0, 114.0], [92.0, 180.0], [99.0, 107.0], [98.0, 148.0], [96.0, 109.0], [101.0, 114.66666666666667], [103.0, 109.66666666666667], [100.0, 118.6594307766523], [102.0, 111.0], [107.0, 113.66666666666667], [106.0, 110.0], [105.0, 110.5], [104.0, 153.0], [109.0, 116.0], [108.0, 109.0], [1.0, 111.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[59.20862001817447, 117.18966636375389]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 109.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1399.6666666666667, "minX": 1.78257462E12, "maxY": 131192.21666666667, "series": [{"data": [[1.78257462E12, 131192.21666666667], [1.78257468E12, 7947.483333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.78257462E12, 22993.166666666668], [1.78257468E12, 1399.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78257468E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 113.69230769230774, "minX": 1.78257462E12, "maxY": 117.40256163062901, "series": [{"data": [[1.78257462E12, 117.40256163062901], [1.78257468E12, 113.69230769230774]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78257468E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 113.6787330316742, "minX": 1.78257462E12, "maxY": 117.39595097094065, "series": [{"data": [[1.78257462E12, 117.39595097094065], [1.78257468E12, 113.6787330316742]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78257468E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 43.37782805429862, "minX": 1.78257462E12, "maxY": 44.202864619198394, "series": [{"data": [[1.78257462E12, 44.202864619198394], [1.78257468E12, 43.37782805429862]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78257468E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 121.0, "minX": 1.78257462E12, "maxY": 323.0, "series": [{"data": [[1.78257462E12, 323.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.78257462E12, 121.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.78257462E12, 279.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.78257462E12, 322.7999999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.78257462E12, 132.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.78257462E12, 287.95]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78257462E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 109.5, "minX": 2.0, "maxY": 133.0, "series": [{"data": [[80.0, 130.0], [59.0, 133.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 109.5], [812.0, 114.0], [835.0, 111.0], [846.0, 112.0], [861.0, 111.0], [854.0, 111.0], [80.0, 111.0], [83.0, 112.0], [81.0, 112.0], [86.0, 112.0], [87.0, 111.0], [84.0, 111.0], [88.0, 111.0], [89.0, 111.0], [90.0, 111.0], [122.0, 111.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 861.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 109.5, "minX": 2.0, "maxY": 133.0, "series": [{"data": [[80.0, 130.0], [59.0, 133.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[2.0, 109.5], [812.0, 114.0], [835.0, 111.0], [846.0, 112.0], [861.0, 111.0], [854.0, 111.0], [80.0, 111.0], [83.0, 112.0], [81.0, 112.0], [86.0, 112.0], [87.0, 111.0], [84.0, 111.0], [88.0, 111.0], [89.0, 111.0], [90.0, 111.0], [122.0, 111.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 861.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 7.2, "minX": 1.78257462E12, "maxY": 121.18333333333334, "series": [{"data": [[1.78257462E12, 121.18333333333334], [1.78257468E12, 7.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78257468E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.78257462E12, "maxY": 119.35, "series": [{"data": [[1.78257462E12, 1.6666666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.78257462E12, 119.35], [1.78257468E12, 7.366666666666666]], "isOverall": false, "label": "429", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.78257468E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.78257462E12, "maxY": 119.35, "series": [{"data": [[1.78257462E12, 1.6666666666666667]], "isOverall": false, "label": "HTTP Request-success", "isController": false}, {"data": [[1.78257462E12, 119.35], [1.78257468E12, 7.366666666666666]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78257468E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6666666666666667, "minX": 1.78257462E12, "maxY": 119.35, "series": [{"data": [[1.78257462E12, 1.6666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.78257462E12, 119.35], [1.78257468E12, 7.366666666666666]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.78257468E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

