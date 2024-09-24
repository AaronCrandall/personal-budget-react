import React from 'react';
import { render } from '@testing-library/react';
import { useState } from 'react';
import axios from 'axios';
import {Chart as ChartJS} from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';
import * as d3 from 'd3';
import ChartComponent from '../ChartComponent';


function HomePage() {
    const [Data1, setData1] = useState([]);
    const [isLoaded, setisLoaded] = useState(false);
    const [Data, setData] = useState({   
        labels: [],
        datasets: [
            {
                data: [],
                backgroundColor: [
                    '#ffcd56',
                    '#ff6384',
                    '#36a2eb',
                    '#fd6b19',
                    '#abc4ff',
                    '#b8e0d2',
                    '#e8dff5',
                ]
            }
        ] 
    });

    function getData(){
        let datatemp = {
            datasets: [
                {
                    data: [],
                    backgroundColor: [
                        '#ffcd56',
                        '#ff6384',
                        '#36a2eb',
                        '#fd6b19',
                        '#abc4ff',
                        '#b8e0d2',
                        '#e8dff5',
                    ]
                }
            ],
            labels: []
          };
        let datatemp2 = [];
        axios.get('http://localhost:3000/budget')
            .then(res => {
                for (var i = 0; i < res.data.myBudget.length; i++) {
                    datatemp.datasets[0].data[i] = res.data.myBudget[i].budget;
                    datatemp.labels[i] = res.data.myBudget[i].title;
                }
                setData(datatemp);
                for(var i = 0; i < datatemp.labels.length; i++){
                    var datas = { value : datatemp.datasets[0].data[i]}
                    datatemp2.push(datas);
                }
                setData1(datatemp2);
                setisLoaded(true); 
            })
    }

    if (!isLoaded)
    {getData();}
  return (
    <main className="center" id="main">
        <section className="page-area" role="main">

            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article>
                <h1>Free</h1>
                <p>
                    This app is free!!! And you are the only one holding your data!
                </p>
            </article>
    
            <article>
                <h1>Stay on track</h1>
                <p>
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                </p>
            </article>
    
            <article>
                <h1>Alerts</h1>
                <p>
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                </p>
            </article>
    
            <article>
                <h1>Results</h1>
                <p>
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                </p>
            </article>
    
            <article>
                <h1>Chart</h1>
                {isLoaded && <Pie data={Data}/>}
                <h1>Chart 2.0</h1>
                {isLoaded && <ChartComponent data={Data1} />}
            </article>
        </section>

    </main>
  );
}

export default HomePage;