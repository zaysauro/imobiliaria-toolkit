import {runFinanceTests} from './finance-cases.js';
const results=runFinanceTests();for(const result of results)console.log(`${result.status}: ${result.name}${result.message?' — '+result.message:''}`);if(results.some(r=>r.status!=='passed'))process.exitCode=1;
