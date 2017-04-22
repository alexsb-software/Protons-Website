var graduates = [
    {
        year: 2016,
        data: [
            { name: 'Abdelrahman Refaat', image: '' },
            { name: 'Abdelrahman Mady', image: '' },
            { name: 'Adham Shady', image: '' },
            { name: 'Ahmed Hossam', image: '' },
            { name: 'Ahmed Kamar', image: '' },
            { name: 'Ahmed Ossama', image: '' },
            { name: 'Ahmed Salah', image: '' },
            { name: 'Aya Mohi', image: '' },
            { name: 'Basma Mohamed Kassem', image: '' },
            { name: 'Ezzelden Mohamed Elmasre', image: '' },
            { name: 'Fatma Hamdy', image: '' },
            { name: 'Hana Ghanem', image: '' },
            { name: 'Kirollos Adel', image: '' },
            { name: 'Lina Samy', image: '' },
            { name: 'Mahmoud Alshemy', image: '' },
            { name: 'Mahmoud Gamal', image: '' },
            { name: 'Malak Farhoud', image: '' },
            { name: 'Mark Adel', image: '' },
            { name: 'Marwan Fouda', image: '' },
            { name: 'Mazen AboelHassan', image: '' },
            { name: 'Menna Nabil', image: '' },
            { name: 'Mina Ramiz', image: '' },
            { name: 'Mohamed AbdelMoniem', image: '' },
            { name: 'Mohamed AbdelSamie', image: '' },
            { name: 'Mohamed Ashraf', image: '' },
            { name: 'Mostafa Magdy', image: '' },
            { name: 'Moustafa Omar', image: '' },
            { name: 'Nermiin Evie', image: '' },
            { name: 'Noha Haydak', image: '' },
            { name: 'Nourhan Farouk', image: '' },
            { name: 'Omar Hisham', image: '' },
            { name: 'Pola Ehab', image: '' },
            { name: 'Ramez Aziz', image: '' },
            { name: 'Rewan Rony', image: '' },
            { name: 'Salah Kamal', image: '' },
            { name: 'Salma Amr', image: '' },
            { name: 'Salma Hisham', image: '' },
            { name: 'Sara Tarek Mohamed', image: '' },
            { name: 'Sayfnaz Tarek', image: '' },
            { name: 'Shahd Mahmoud Mohamed', image: '' },
            { name: 'Toka Sherif', image: '' },
            { name: 'Waled Mostafa Aly', image: '' },
            { name: 'Yosra Emad', image: '' },
            { name: 'Youssef Reda', image: '' }
        ]
    },
    {
        year: 2015,
        data:[

        ]
    }
];

$(document).ready(function () {
    $('#button-collapse').sideNav();

    var grads = $('#grads-cont');

    for(var year =0; year< graduates.length; year++){

        var graduatesSection = document.createElement('section');
        graduatesSection.setAttribute('class', 'year-graduates');

        graduatesSection.innerHTML = '<div class="row"><h2 class="col l4 offset-l1 m8 offset-m2 s12 year">' + graduates[year].year+ '</h2></div>';

        var row = document.createElement('div');
        row.setAttribute('class','row grad-row');

        for(var i=0; i < graduates[year].data.length; i++){

            if(i%6 === 0 && i !== 0){
                graduatesSection.appendChild(row);
                row = document.createElement('div');
                row.setAttribute('class','row grad-row');
            }

            var proton = document.createElement('div');
            proton.setAttribute('class', 'col l2 m4 s6 center-align center-block');

            var protonImg = document.createElement('img');
            protonImg.src = graduates[year].data[i].image === ''? 'media/graduates/user.png' : graduates[year].data[i].image;

            var protonName = document.createElement('h5');
            protonName.setAttribute('class', 'flow-text');
            protonName.innerHTML = graduates[year].data[i].name;

            proton.appendChild(protonImg);
            proton.appendChild(protonName);

            row.appendChild(proton)

        }
        graduatesSection.appendChild(row);

        grads.append(graduatesSection)

    }
});
