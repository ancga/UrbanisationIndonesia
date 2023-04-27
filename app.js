(async () => {

    const topology = await fetch(
        'https://code.highcharts.com/mapdata/countries/id/id-all.topo.json'
    ).then(response => response.json());


    // property by default. See API docs for 'joinBy' for more info on linking
    // data and map.
    const data = [
        ['id-3700', 10],
        ['id-ac', 92],
        ['id-jt', 1120],
        ['id-be', 102],
        ['id-bt', 1248],
        ['id-kb', 37],
        ['id-bb', 90],
        ['id-ba', 755],
        ['id-ji', 855],
        ['id-ks', 106],
        ['id-nt', 111],
        ['id-se', 196],
        ['id-kr', 258],
        ['id-ib', 11],
        ['id-su', 205],
        ['id-ri', 75],
        ['id-sw', 190],
        ['id-ku', 190],
        ['id-la', 41],
        ['id-sb', 133],
        ['id-ma', 40],
        ['id-nb', 290],
        ['id-sg', 70],
        ['id-st', 49],
        ['id-pa', 14],
        ['id-jr', 1379],
        ['id-ki', 30],
        ['id-1024', 262],
        ['id-jk', 15978],
        ['id-go', 39],
        ['id-yo', 1185],
        ['id-sl', 93],
        ['id-sr', 86],
        ['id-ja', 72],
        ['id-kt', 49]
    ];

    // Create the chart
    Highcharts.mapChart('container', {
        chart: {
            map: topology
        },

        title: {
            text: 'Population Density by Province in 2021 (people per sq. km of land area)'
        },

        subtitle: {
            text: 'Source map: <a href="https://code.highcharts.com/mapdata/countries/id/id-all.geo.json#">Indonesia</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0,
            max: 500
        },

        series: [{
            data: data,
            name: 'density',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });

})();
