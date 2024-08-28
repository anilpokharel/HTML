const btnE1 = document.getElementById("btn");
const bmiInputE1 =document.getElementById("bmi-result");
const weightconditionE1 = document.getElementById("weight-condition");

function calculateBMI() {
    const heightValue = document.getElementById("height").value / 100;
    const weightValue = document.getElementById("weight").value;

    const bmiValue = weightValue / (heightValue * heightValue);

    bmiInputE1.value = bmiValue;

    if(bmiValue < 18.5) {
        weightconditionE1.innerText = "under weight";
    }
    else if(bmiValue >= 18.5 && bmiValue <= 24.9) {
        weightconditionE1.innerText = "normal weight";
    }
    else if(bmiValue >= 25 && bmiValue <=29.9){
        weightconditionE1.innerText = "Over Weight";
    }
    else if(bmiValue >= 30) {
        weightconditionE1.innerText = "Obesity";
    }
}

btnE1.addEventListener("click", calculateBMI);