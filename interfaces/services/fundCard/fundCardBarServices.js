
import http from '../../helpers/http';
import moment from 'moment';

const log = console.log;

const fundCardBarServices = {
    getBarData: getBarData

}

const data = {
    datasets: [{
        type: 'bar',
        label: '기부참여현황',
        data: [0],
        fill: false,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        hoverBackgroundColor: '#007bff',
        hoverBorderColor: '#007bff',
        yAxisID: 'y-axis-1'
    }]
};

const options = {
    responsive: true,
    tooltips: {
        mode: 'label'
    },
    elements: {
        line: {
            fill: true
        }
    },
    scales: {

        xAxes: [
            {
                display: true,
                gridLines: {
                    display: true
                },

                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            }
        ],
        yAxes: [
            {
                type: 'linear',
                display: true,
                position: 'left',
                id: 'y-axis-1',
                gridLines: {
                    display: true
                },
                labels: {
                    show: true
                },
                ticks: {
                    beginAtZero: true,
                    callback: function(value) {if (value % 1 === 0) {return value + "명";}}
                }
            }
        ]
    }
};

const plugins = [{
    afterDraw: (chartInstance, easing) => {
        // const ctx = chartInstance.chart.ctx;
        // ctx.fillText("This text drawn by a plugin", 100, 100);
    }
}];

function getBarData() {


    const args = Array.prototype.slice.call(arguments, 0);

    const fundCard = __.first(args);

    if (_.isUndefined(fundCard)) {
        return {
            data : data,
            options : options,
            plugins : plugins
        }
    };

    const strToMomentObj = __.pipe(__.partial(__.val, fundCard), moment, function(obj) {
        return obj.locale("ko");
    });

    const joinMemCountPerMonth = __.reduce(__.map(__.range(strToMomentObj('startedAt').month() + 1, strToMomentObj('endedAt').month() + 2), function(month) {
        return month + "월";
    }), function(memo, month) {
        memo[month] = __.filter(fundCard.donationDtos, (donation) => {
            return _.isEqual((moment(donation.createdAt).month() + 1) + "월", month);
        }).length;
        return memo;
    }, {});

    let data2 = {};
    let options2 = {};

    __.extend(data2, data);
    __.extend(options2, options);

    data2.datasets[0].data = __.values(joinMemCountPerMonth);
    options2.scales.xAxes[0].labels = __.keys(joinMemCountPerMonth);

    return {
        data : data2,
        options : options2,
        plugins : plugins
    }
}

export default fundCardBarServices;