const $html = document.querySelector("#all")

$html_bg = $html.style.background;
console.log($html.style.background);

function dark_mode() {
    console.log("Hi buddies!");
    let $html = document.getElementById("html");
    let $titleBarSpan = document.querySelector('.titleBar__left-span');
    let $titleBarH1 = document.querySelector('.titleBar__left-h1');
    let $attribution = document.querySelector('.attribution');
    $attribution.classList.toggle('attribution-dark')
    let $container1box = document.getElementsByClassName('container1__box');
    let $container1box_1 = $container1box[0]
    let $container1box_2 = $container1box[1]
    let $container1box_3 = $container1box[2]
    let $container1box_4 = $container1box[3]


    let $container1Number = document.getElementsByClassName('container1__number');
    let $container1Number_1 = $container1Number[0]
    let $container1Number_2 = $container1Number[1]
    let $container1Number_3 = $container1Number[2]
    let $container1Number_4 = $container1Number[3]

    let $container1subNumber = document.getElementsByClassName('container1__subNumber');
    let $container1subNumber_1 = $container1subNumber[0]
    let $container1subNumber_2 = $container1subNumber[1]
    let $container1subNumber_3 = $container1subNumber[2]
    let $container1subNumber_4 = $container1subNumber[3]

    let $container1media = document.querySelector(".container1__media-ig")


    let $container2title = document.querySelector('.container2__title');

    let $container2box = document.getElementsByClassName('container2__box');
    let $container2box_1 = $container2box[0]
    let $container2box_2 = $container2box[1]
    let $container2box_3 = $container2box[2]
    let $container2box_4 = $container2box[3]
    let $container2box_5 = $container2box[4]
    let $container2box_6 = $container2box[5]
    let $container2box_7 = $container2box[6]
    let $container2box_8 = $container2box[7]

    let $container2number = document.getElementsByClassName('container2__number');
    let $container2number_1 = $container2number[0]
    let $container2number_2 = $container2number[1]
    let $container2number_3 = $container2number[2]
    let $container2number_4 = $container2number[3]
    let $container2number_5 = $container2number[4]
    let $container2number_6 = $container2number[5]
    let $container2number_7 = $container2number[6]
    let $container2number_8 = $container2number[7]

    let $container2social = document.querySelectorAll('.container2__social');
    let $container2social_1 = $container2social[0]
    let $container2social_2 = $container2social[1]
    let $container2social_3 = $container2social[2]
    let $container2social_4 = $container2social[3]
    let $container2social_5 = $container2social[4]
    let $container2social_6 = $container2social[5]
    let $container2social_7 = $container2social[6]
    let $container2social_8 = $container2social[7]


    let $titleBarDark = document.querySelector('.titleBar-dark');
    $titleBarDark.classList.replace('titleBar-dark', 'titleBar-darkMode');


    let $titleBarRightBg = document.querySelector('.titleBar__right-bg-background');
    $titleBarRightBg.classList.replace('titleBar__right-bg-background', 'titleBar__right-bg-background-dark')



    let $titleBarRightBtnColor = document.querySelector(".titleBar__right-btn-color");
    $titleBarRightBtnColor.classList.replace('titleBar__right-btn-color', 'titleBar__right-btn-color-dark')
        //Here, I decided to create a variable with each element of $container1box, because you can't modify the array container1box itself while you use it in the same method. That array is made of classes, if you modify them while using it as a reference, you will get a bug.
    console.log($container1box)
    console.log($container1box_1, $container1box_2, $container1box_3, $container1box_4);


    $html.style.setProperty("background", "-webkit-linear-gradient(top, #20222e 30%, #1d2029 30%)");
    $titleBarSpan.classList.remove('titleBar__left-span');
    $titleBarSpan.classList.add('titleBar__left-span-dark');
    $titleBarH1.classList.remove('titleBar__left-h1');
    $titleBarH1.classList.add('titleBar__left-h1-dark');
    //Here is the example. Without creating separate variables, I would have to use $container1box.classList.replace('container1__box', 'container1__box-dark');
    $container1box_1.classList.toggle('container1__box-dark');
    $container1box_2.classList.toggle('container1__box-dark');
    $container1box_3.classList.toggle('container1__box-dark');
    $container1box_4.classList.toggle('container1__box-dark');



    $container1Number_1.classList.toggle('container1__number-dark');
    $container1Number_2.classList.toggle('container1__number-dark');
    $container1Number_3.classList.toggle('container1__number-dark');
    $container1Number_4.classList.toggle('container1__number-dark');

    $container1subNumber_1.classList.toggle('container1__subNumber-dark');
    $container1subNumber_2.classList.toggle('container1__subNumber-dark');
    $container1subNumber_3.classList.toggle('container1__subNumber-dark');
    $container1subNumber_4.classList.toggle('container1__subNumber-dark');


    $container2title.classList.toggle('container2__title-dark');

    $container1media.classList.toggle("container1__media-ig-dark")

    $container2box_1.classList.toggle('container2__box-dark');
    $container2box_2.classList.toggle('container2__box-dark');
    $container2box_3.classList.toggle('container2__box-dark');
    $container2box_4.classList.toggle('container2__box-dark');
    $container2box_5.classList.toggle('container2__box-dark');
    $container2box_6.classList.toggle('container2__box-dark');
    $container2box_7.classList.toggle('container2__box-dark');
    $container2box_8.classList.toggle('container2__box-dark');




    $container2number_1.classList.toggle('container2__number-dark');
    $container2number_2.classList.toggle('container2__number-dark');
    $container2number_3.classList.toggle('container2__number-dark');
    $container2number_4.classList.toggle('container2__number-dark');
    $container2number_5.classList.toggle('container2__number-dark');
    $container2number_6.classList.toggle('container2__number-dark');
    $container2number_7.classList.toggle('container2__number-dark');
    $container2number_8.classList.toggle('container2__number-dark');



    $container2social_1.classList.toggle('container2__social-dark');
    $container2social_2.classList.toggle('container2__social-dark');
    $container2social_3.classList.toggle('container2__social-dark');
    $container2social_4.classList.toggle('container2__social-dark');
    $container2social_5.classList.toggle('container2__social-dark');
    $container2social_6.classList.toggle('container2__social-dark');
    $container2social_7.classList.toggle('container2__social-dark');
    $container2social_8.classList.toggle('container2__social-dark');

}






/*document.querySelector("#all").style.background = "#fff"*/
