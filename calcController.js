class CalcController{

    constructor(){
        this._locale= "pt-BR"
        this._displayCalcEl =  document.querySelector("#display"); 
        this._dateEl = document.querySelector("#data");
        this._timeEl =  document.querySelector("#hora");
        this._currentDate;
        this.initiazile();
        this.initButtonsEventes();
    }
    initiazile(){
        this.steDisplaayDateTime();

    setInterval(()=>{
        this.steDisplaayDateTime();
    },1000);

    }
    initButtonsEventes(){
      let buttons = document.querySelectorAll("#buttons > g, #partes > g");
      buttons.forEach((btn, index)=>{
        
        btn.addEventListener('click', e =>{
            console.log(btn.className.baseVal.replace("btn-",""));
        })

      })

      ;
    }
    steDisplaayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);  
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale); 
    }
    get displayTime(){

        return  this._timeEl.innerHTML;

    }
    set displayTime(value){

        return  this._timeEl.innerHTML = value;
    }

    get displayDate(){

        return this._dateEl.innerHTML;

    }
    set displayDate(value){

        return  this._dateEl.innerHTML = value;
    }

    get displayCalc(){

        return this._displayCalcEl.innerHTML;
    }
    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;
    }
    get currentDate(){
        return new Date;

    }
    set currentDate(value){

    this._currentDate = value
    }
}