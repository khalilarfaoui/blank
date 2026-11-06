(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    moment.defineLocale('fr', {
        months: 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre'.split('_'),
        monthsShort: 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.'.split('_'),
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split('_'),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm'
        },
        week: {dow: 1, doy: 4}
    });

    var pickerOptions = {
        locale: 'fr',
        icons: {
            time: 'far fa-clock',
            date: 'far fa-calendar-alt',
            up: 'fas fa-chevron-up',
            down: 'fas fa-chevron-down',
            previous: 'fas fa-chevron-left',
            next: 'fas fa-chevron-right',
            today: 'far fa-calendar-check',
            clear: 'far fa-trash-alt',
            close: 'fas fa-times'
        },
        tooltips: {
            today: "Aujourd'hui",
            clear: 'Effacer',
            close: 'Fermer',
            selectMonth: 'Choisir le mois',
            prevMonth: 'Mois précédent',
            nextMonth: 'Mois suivant',
            selectYear: "Choisir l'année",
            prevYear: 'Année précédente',
            nextYear: 'Année suivante',
            selectDecade: 'Choisir la décennie',
            prevDecade: 'Décennie précédente',
            nextDecade: 'Décennie suivante',
            prevCentury: 'Siècle précédent',
            nextCentury: 'Siècle suivant',
            pickHour: "Choisir l'heure",
            incrementHour: 'Heure suivante',
            decrementHour: 'Heure précédente',
            pickMinute: 'Choisir les minutes',
            incrementMinute: 'Minute suivante',
            decrementMinute: 'Minute précédente',
            selectTime: "Choisir l'heure",
            selectDate: 'Choisir la date'
        }
    };
    $('#date').datetimepicker($.extend({}, pickerOptions, {
        format: 'L',
        minDate: moment().startOf('day'),
        useCurrent: false
    }));
    $('#time').datetimepicker($.extend({}, pickerOptions, {
        format: 'LT',
        stepping: 15,
        useCurrent: false
    }));


    // Demande de rendez-vous : prépare le message et l'ouvre dans WhatsApp
    $('#rdvForm').on('submit', function (event) {
        event.preventDefault();
        var lines = [
            'Bonjour Maître, je souhaite demander un rendez-vous.',
            'Nom : ' + $('#rdvNom').val(),
            'Téléphone : ' + $('#rdvTel').val(),
            'Domaine : ' + $('#rdvDomaine').val()
        ];
        var date = $('#rdvDate').val();
        var heure = $('#rdvHeure').val();
        if (date) {
            lines.push('Date souhaitée : ' + date);
        }
        if (heure) {
            lines.push('Heure souhaitée : ' + heure);
        }
        window.open('https://wa.me/21627871339?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
    });


    // Service carousel
    $(".service-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Team carousel
    $(".team-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        center: true,
        autoplay: true,
        smartSpeed: 1000,
        margin: 30,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

