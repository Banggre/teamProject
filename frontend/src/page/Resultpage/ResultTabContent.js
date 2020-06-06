import React, { Component, useState, useEffect } from 'react';
//import TabList from './Tablist';
import Table from './ResultTable';
import TabList from './Tablist'


export default function TabContent1() {
    //const [data, setData] = useState([{ trow: 'MON'}, { trow: 'TUE'}, { trow: 'WED'}, { trow: 'THU'}, { trow: 'FRI'} ])

    const [data, setData] = useState()
    const [isData, setIsData] = useState(false)

    useEffect(async () => {
        var result1 = [
            [1, 0, 0, 0, ['자료구조', '신찬수'], 0],
            [2, 0, 0, 0, ['알고리즘', '고'], 0],
            [3, 0, 0, 0, ['네트워크', '이'], 0],
            [4, 0, 0, 0, ['웹프', '고'], 0],
            [5, 0, 0, 0, ['컴프', '고'], 0],
            [6, 0, 0, ['자료구조', '신'], 0, 0],
            [7, 0, 0, 0, ['보안', '이'], 0],
            [8, ['자료구조', 'sdf찬수'], 0, 0, 0, 0],
            [9, 0, 0, 0, ['자료구조', '신ggdf'], 0],
            [10, 0, 0, 0, ['자료구조', 'dfg'], 0],
            [11, 0, 0, 0, ['자료구조', '찬dfg'], 0],
            [12, 0, 0, 0, ['자료구조', 'qqq'], 0],
            [13, 0, 0, 0, ['자료구조', 'ggg'], 0]
        ]
        var result2 = [
            [1, 0, 0, 0, ['자료구조', '신찬수'], 0],
            [2, 0, 0, 0, ['알고리즘', '고'], 0],
            [3, 0, 0, 0, ['네트워크', '이'], 0],
            [4, 0, 0, 0, ['웹프', '고'], 0],
            [5, 0, 0, 0, ['컴프', '고'], 0],
            [6, 0, 0, ['자료구조', '신'], 0, 0],
            [7, 0, 0, 0, ['보안', '이'], 0],
            [8, ['자료구조', 'sdf찬수'], 0, 0, 0, 0],
            [9, 0, 0, 0, ['자료구조', '신ggdf'], 0],
            [10, 0, 0, 0, ['자료구조', 'dfg'], 0],
            [11, 0, 0, 0, ['자료구조', '찬dfg'], 0],
            [12, 0, 0, 0, ['자료구조', 'qqq'], 0],
            [13, 0, 0, 0, ['자료구조', 'ggg'], 0]
        ]
        let test = [result1, result2]
        for(var x= 0; x < test.length; x ++) {
            for (var i = 0; i < 13; i++) {
                for (var j = 1; j < 6; j++) {
                    if (test[x][i][j] === 0){
                        test[x][i][j] = '';}
                    else
                        {                    
                            test[x][i][j] = test[x][i][j][0] + '(' + test[x][i][j][1] + ')'
                            console.log(test[x][i][j])}
                }
            };
        }
        console.log(test)
        await setData(test)
        await setIsData(true)
      }, []
      )

   console.log(data)


    function mapping(){
        let i = 0
        console.log(data)
        data.map(function(array) {
            console.log(i, array)
            i++;
            return (<div label="시간표{i}" className="tab-content">
            <Table data={array} />
        </div>)
        })
    }


    var i = 0;

    //setData([{trow:"1교시", "1":result[0][0], "2": result[0][1]},
    // {trow:"2교시"},
    // ])
    console.log(isData)
    return (
        <>
            {isData?

            <div className="container up">
                <TabList>
            
                    {data.map(function(array) {
                        i++;
            console.log(i, array)
            return (<div label={`시간표${i}`} className="tab-content">
            <Table data={array} />
        </div>)
        })}
                {/* {data.map(function(array) {
                    return <div label="학점" className="tab-content">
                    <Table data={array} />
                </div>
                })}
                    <div label="학점" className="tab-content">
                        <Table data={data} />
                    </div>
                    <div label="d" className="tab-content">
                        <Table data={data} />
                    </div> */}
</TabList>
            </div>
 : <div></div>}
        </>
    );

}


