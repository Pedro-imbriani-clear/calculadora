class CalcController{

    constructor(){
        this._displayCalcEl =  document.querySelector("#display"); 
        this._dateEl = document.querySelector("#data");
        this._timeEl =  document.querySelector("#hora");
        this._currentDate;
        this.initiazile();
    }
    initiazile(){

    
        this._dateEl.innerHTML = "10/04/2022";
        this._timeEl.innerHTML = "21:30";

    }
    get displayCalc(){

        return this._displayCalcEl.innerHTML;
    }
    set displayCalc(valor){
        this._displayCalcEl.innerHTML = valor;
    }
    get currentDate(){
        return this._currentDate;

    }
    set currentDate(valor){

    this._currentDate = valor
    }
}