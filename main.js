window.onload=getData;
function getData(){
    fetch('https://api.covid19api.com/summary').then(function(res){
        return res.json();
    }).then(function(data){
        console.log(data)
        let countryOutput='';

        // For world data
        let newConfirmed=document.querySelector('.newConfirmed');
        let totalConfirmed=document.querySelector('.totalConfirmed');
        let newDeaths=document.querySelector('.newDeaths');
        let totalDeaths=document.querySelector('.totalDeaths');
        let newRecovered=document.querySelector('.newRecovered');
        let totalRecovered=document.querySelector('.totalRecovered');

        newConfirmed.textContent=data.Global.NewConfirmed;
        totalConfirmed.textContent=data.Global.TotalConfirmed;
        newDeaths.textContent=data.Global.NewDeaths;
        totalDeaths.textContent=data.Global.TotalDeaths;
        newRecovered.textContent=data.Global.NewRecovered;
        totalRecovered.textContent=data.Global.TotalRecovered;

        // For country result
        let countries=data.Countries;
        const countriesCount=countries.length;
        let i;
        let length=1;
        let searchText=document.querySelector('search').value;
        let searchButton=document.querySelector('searchButton');

        searchButton.addEventListener('click',addData());

        // function addData(){
        //     if(searchText.lowercase)
        // }

        for(i=0;i<=countriesCount;i++){
        output=`
            <td>${length}</td>
            <td>${countries[i].Country}</td>
            <td>${countries[i].NewConfirmed}</td>
            <td>${countries[i].TotalConfirmed}</td>
            <td>${countries[i].NewDeaths}</td>
            <td>${countries[i].TotalDeaths}</td>
            <td>${countries[i].NewRecovered}</td>
            <td>${countries[i].TotalRecovered}</td>           
        `;
        length++;

        document.querySelector('.table-data').innerHTML+=output;
        }
        // document.querySelector('.table-data').innerHTML=output;

    })
    
}
