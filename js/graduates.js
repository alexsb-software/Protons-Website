var graduates = [
    {
        year: 2016,
        data: [
            { name: 'Abdelrahman Ali', image: '' },
            { name: 'Abdelrahman Refaat', image: '' },
            { name: 'Abdelrahman Mady', image: '' },
            { name: 'Adham Shady', image: '' },
            { name: 'Ahmed Hossam', image: '' },
            { name: 'Ahmed Kamar', image: '' },
            { name: 'Ahmed Ossama', image: '' },
            { name: 'Ahmed Salah', image: '' },
            { name: 'Aya Mohi', image: '' },
            { name: 'Basma Kassem', image: '' },
            { name: 'Ezzelden Elmasre', image: '' },
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
            { name: 'Sara Tarek', image: '' },
            { name: 'Sayfnaz Tarek', image: '' },
            { name: 'Shahd Mahmoud', image: '' },
            { name: 'Toka Sherif', image: '' },
            { name: 'Waled Mostafa', image: '' },
            { name: 'Yosra Emad', image: '' },
            { name: 'Youssef Reda', image: '' }
        ]
    },
    {
        year: 2015,
        data: [
            { name: 'Abdallah Elkassas', image: '' },
            { name: 'Abdelrahman Alaa Eldin', image: '' },
            { name: 'Ahmed Mohamed El Sonbaty', image: '' },
            { name: 'Aliaa Ali', image: '' },
            { name: 'Aly Elmohamedy', image: '' },
            { name: 'Esraa Ashraf El Sawy', image: '' },
            { name: 'Eyad Emad', image: '' },
            { name: 'Fouad Amr Mahmoud Moftah', image: '' },
            { name: 'Hadeer Youssef Fouad', image: '' },
            { name: 'Hazem Tarek kamal Issa', image: '' },
            { name: 'Hebatallah Ebrahim', image: '' },
            { name: 'Islam Tarek Mahmoud', image: '' },
            { name: 'Khouloud Abdel Moneam', image: '' },
            { name: 'Mahmoud Khalifa', image: '' },
            { name: 'Mahmoud Mastafa Shanab', image: '' },
            { name: 'Mariam Wael', image: '' },
            { name: 'Mayar Ayman', image: '' },
            { name: 'Mayar Serry', image: '' },
            { name: 'Mazen Mostafa', image: '' },
            { name: 'Menna Ahmed', image: '' },
            { name: 'Mohamed Atef', image: '' },
            { name: 'Mohamed Ayman Saad', image: '' },
            { name: 'Mohamed El Dalil', image: '' },
            { name: 'Mohamed El Naggar', image: '' },
            { name: 'Mohamed Khaled', image: '' },
            { name: 'Mohamed Magdy Ibrahim', image: '' },
            { name: 'Mohaned Salah', image: '' },
            { name: 'Mostafa Elkassas', image: '' },
            { name: 'Nour Fawzy', image: '' },
            { name: 'Omar Hisham Morsy', image: '' },
            { name: 'Omar Kamal', image: '' },
            { name: 'Omar Mostafa Amin', image: '' },
            { name: 'Omar Yousry', image: '' },
            { name: 'Osama Ahmed Abdrabo', image: '' },
            { name: 'Salma Hisham Morsy', image: '' },
            { name: 'Tarek Mahmoud Hany', image: '' },
            { name: 'Toka Sherif Mahdy', image: '' },
            { name: 'Yara Sameh Awny', image: '' },
            { name: 'Youssef Ahmed Ouf', image: '' },
            { name: 'Youssef Hesham', image: '' },
            { name: 'Zeina Samy', image: '' }
        ]
    }
];

$(document).ready(function () {
    $('#button-collapse').sideNav();

    var grads = $('#grads-cont');

    for (var year = 0; year < graduates.length; year++) {

        var graduatesSection = document.createElement('section');
        graduatesSection.setAttribute('class', 'year-graduates');
        graduatesSection.innerHTML = '<div class="row"><h2 class="col l4 offset-l1 m8 offset-m2 s12 year">' + graduates[year].year + '</h2></div>';

        var row = document.createElement('div');
        row.setAttribute('class', 'row grad-row');

        for (var i = 0; i < graduates[year].data.length; i++) {
            if (i % 6 === 0 && i !== 0) {
                graduatesSection.appendChild(row);
                row = document.createElement('div');
                row.setAttribute('class', 'row grad-row');
            }

            var proton = document.createElement('div');
            proton.setAttribute('class', 'col l2 m4 s6 center-align center-block grad');

            var protonImg = document.createElement('img');
            protonImg.src = graduates[year].data[i].image === '' ? 'media/graduates/user.png' : graduates[year].data[i].image;

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
