// this file contains all the question data.
// you should be able to copy paste to make more questions.
// for now it's silly and requires 0 for all the other answers as it doesn't like null values, feel free to change but this should do for now
import Papa from "papaparse";
import { usestate } from 'react';



/*
const fs = require('fs');
const readline = require('readline');
const stream = fs.createReadStream("./number.csv");
const reader = readline.createInterface({ input: stream });
const questions = [];

reader.on("line", (row) => {
    let tmp = row.split(',');
    questions.push({
        questionText: tmp[0],
        answerOptions: [
            {
            answerText: tmp[1],
            scores: {
                collegeARTSCI: tmp[7], 
                collegeBA: tmp[8], 
                collegeEDU: tmp[9], 
                collegeCOM: tmp[10], 
                collegeSCITECH: tmp[11], 
                collegePUBLIC: tmp[12]}
            },
            {
            answerText: tmp[2],
            scores: {
                collegeARTSCI: tmp[7], 
                collegeBA: tmp[8], 
                collegeEDU: tmp[9], 
                collegeCOM: tmp[10], 
                collegeSCITECH: tmp[11], 
                collegePUBLIC: tmp[12]}
            },
            {
            answerText: tmp[3],
            scores: {
                collegeARTSCI: tmp[7], 
                collegeBA: tmp[8], 
                collegeEDU: tmp[9], 
                collegeCOM: tmp[10], 
                collegeSCITECH: tmp[11], 
                collegePUBLIC: tmp[12]}
            },
            {
            answerText: tmp[4],
            scores: {
                collegeARTSCI: tmp[7], 
                collegeBA: tmp[8], 
                collegeEDU: tmp[9], 
                collegeCOM: tmp[10], 
                collegeSCITECH: tmp[11], 
                collegePUBLIC: tmp[12]}
            },
            {
            answerText: tmp[5],
            scores: {
                collegeARTSCI: tmp[7], 
                collegeBA: tmp[8], 
                collegeEDU: tmp[9], 
                collegeCOM: tmp[10], 
                collegeSCITECH: tmp[11], 
                collegePUBLIC: tmp[12]}
            },
            {
            answerText: tmp[6],
            scores: {
                collegeARTSCI: tmp[7], 
                collegeBA: tmp[8], 
                collegeEDU: tmp[9], 
                collegeCOM: tmp[10], 
                collegeSCITECH: tmp[11], 
                collegePUBLIC: tmp[12]}
            }
        ]
    });
})
reader.on("close", () => {
    console.log(questions);
})
*/

/*
const questions = [

    //Question 1

    {
        questionText: 'Question 1: pick a college',
        answerOptions: [
            {
                answerText: 'Arts and Sciences',
                scores: {
                    collegeARTSCI: 1, collegeBA: 0, collegeEDU: 0, collegeCOM: 0, collegeSCITECH: 0, collegePUBLIC: 0
                }
            },
            {
                answerText: 'Business and Administration',
                scores: {
                    collegeARTSCI: 0, collegeBA: 1, collegeEDU: 0, collegeCOM: 0, collegeSCITECH: 0, collegePUBLIC: 0 
                }
            },
            {
                answerText: 'Education',
                scores: {
                    collegeARTSCI: 0, collegeBA: 0, collegeEDU: 1, collegeCOM: 0, collegeSCITECH: 0, collegePUBLIC: 0
                }
            },
            {
                answerText: 'Communications',
                scores: {
                    collegeARTSCI: 0, collegeBA: 0, collegeEDU: 0, collegeCOM: 1, collegeSCITECH: 0, collegePUBLIC: 0
                }
            },
            {
                answerText: 'Science and Technology',
                scores: {
                    collegeARTSCI: 0, collegeBA: 0, collegeEDU: 0, collegeCOM: 0, collegeSCITECH: 1, collegePUBLIC: 0
                }
            },
            {
                answerText: 'Public Affairs',
                scores: {
                    collegeARTSCI: 0, collegeBA: 0, collegeEDU: 0, collegeCOM: 0, collegeSCITECH: 0, collegePUBLIC: 1
                }
            },
        ],
    },

    //Question 2

    {
        questionText: 'Question 2: pick a college',
        answerOptions: [
            {
                answerText: 'Arts and Sciences',
                scores: {
                    collegeARTSCI: 1, collegeBA: 0, collegeEDU: 0, collegeCOM: 0, collegeSCITECH: 0, collegePUBLIC: 0
                }
            },
            {
                answerText: 'Business and Administration',
                scores: {
                    collegeARTSCI: 0, collegeBA: 1, collegeEDU: 0, collegeCOM: 0, collegeSCITECH: 0, collegePUBLIC: 0
                }
            },
            {
                answerText: 'Education',
                scores: {
                    collegeARTSCI: 0, collegeBA: 0, collegeEDU: 1, collegeCOM: 0, collegeSCITECH: 0, collegePUBLIC: 0
                }
            },
            {
                answerText: 'Communications',
                scores: {
                    collegeARTSCI: 0, collegeBA: 0, collegeEDU: 0, collegeCOM: 1, collegeSCITECH: 0, collegePUBLIC: 0
                }
            },
            {
                answerText: 'Science and Technology',
                scores: {
                    collegeARTSCI: 0, collegeBA: 0, collegeEDU: 0, collegeCOM: 0, collegeSCITECH: 1, collegePUBLIC: 0
                }
            },
            {
                answerText: 'Public Affairs',
                scores: {
                    collegeARTSCI: 0, collegeBA: 0, collegeEDU: 0, collegeCOM: 0, collegeSCITECH: 0, collegePUBLIC: 1
                }
            },
        ],
    },

    //Question 3


    
];
*/

export default questions;