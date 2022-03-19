/* eslint-disable import/no-anonymous-default-export */
const TODOS_STORAGE_KEY = 'TODOS'

var objectDefault = [
    {id: 1, item: "PT&TKHDT: Báo cáo tìm hiểu", complete: false, dateOf: "2021-11-02"},
    {id: 2, item: "PT&TKHDT: Thi thực hành", complete: false, dateOf: "2021-11-09"},
    {id: 3, item: "CNWeb: Báo cáo tìm hiểu", complete: false, dateOf: "2021-11-23"},
    {id: 4, item: "CNWeb: Nộp bài tập giỏ hàng", complete: false, dateOf: "2021-11-27"},
    {id: 5, item: "CNNet: Thi thực hành", complete: false, dateOf: "2021-12-02"},
    {id: 6, item: "CNNet: Báo cáo đồ án", complete: false, dateOf: "2021-12-23"},
    {id: 7, item: "CacHeCSDL: Thi GK", complete: false, dateOf: "2021-11-27"},
];

export default {
    get(){
        var result = JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) === null || JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)).length ===0 ?
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(objectDefault)) : 
        JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY));
        return result
    },
    set(TODOList){
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(TODOList));
    }
}
