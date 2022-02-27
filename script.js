function compute()
{
    let amount = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let currentYear = new Date().getFullYear();
    let futureYear = parseInt(currentYear) + parseInt(years);
    
    let interest = (amount * rate)/100;
    interest*=years;

    let quote = `If you deposit ${amount}, <br>
    at an in interest rate of ${rate}%. <br>
    You will receive an amount of ${interest}, <br>
    in the year ${futureYear}. <br>`;

    document.getElementById("result").innerHTML =  quote;
     
    

}
        


