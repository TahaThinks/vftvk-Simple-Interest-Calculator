function compute()
{
    let amount = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    let currentYear = new Date().getFullYear();
    let futureYear = parseInt(currentYear) + parseInt(years);
    
    let interest = (amount * rate)/100;
    interest*=years;

    if(parseInt(amount) <= 0 || amount ==='')
    {
        alert("Enter a Positive Number");
        
    }else
    {
        let quote = `If you deposit <mark>${amount}</mark>, <br>
        at an in interest rate of <mark>${rate}%</mark>. <br>
        You will receive an amount of <mark>${interest}</mark>, <br>
        in the year <mark>${futureYear}</mark>. <br>`;
    
        document.getElementById("result").innerHTML =  quote;
    
    }
}
        


