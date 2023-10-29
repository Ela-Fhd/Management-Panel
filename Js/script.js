$(function () {

    if ($(window).width() > 900) {

        $('.tab-container').css('width', $('.tab-item').length * 170 + "px")
    }

    const scrollContainer = document.querySelector(".tabbed");
    scrollContainer.addEventListener("wheel", (evt) => {
        if ($(window).width() > 900) {

            evt.preventDefault();
            scrollContainer.scrollLeft += evt.deltaY;
        }

    });


    $(".main .menue .open-close").click(function () {
        $(".main .menue").toggleClass("toggle");
    })

    $(".main .menue .open-close").click(function () {
        $(".main .information").toggleClass("toggleInfoLG");
    })

    $(".main .information .search-box ion-icon").click(function () {
        $(".main .information .search-box").addClass("active-search");
    })

    $(".main .information .search-box .close-btn").click(function () {
        $(".main .information .search-box").removeClass("active-search");
    })

    $(".main .open-menue").click(function () {
        $(".main .menue").addClass("open");
        $(".overlay").css("opacity", "0.5");
        $(".overlay").css("display", "block");
        $(".overlay").css("z-index", "9998");

    })
    $(".main .close-menue").click(function () {
        $(".main .menue").removeClass("open");
        $(".overlay").css("opacity", "0");
        $(".overlay").css("display", "none");
    })


    $(".main .information .content-user .dark-mode").click(function () {
        $(".information").toggleClass("dark");
        if ($(".main .information").hasClass("dark")) {
            $(".main .information.dark .content-user .dark-mode ion-icon").attr("name", "sunny-outline");
        }
        else {
            $(".main .information .content-user .dark-mode ion-icon").attr("name", "moon-outline");
        }
    })

    $(".information .content-body .menue-dropdown .dropdown-icon").click(function () {
        $(this).parent().children(".information .content-body .menue-dropdown .menue-items").toggleClass("open-dropdown")
    });

    $('#grow').circleProgress({
        value: 0.75,
        size: 110,
        fill: {
            gradient: ["#83D475", "#C5E8B7"],
        },
        Animation: {
            duration: 2000,
            easing: "circleProgressEasing",
        }
    });

    let current_url = window.location.search;
    current_url = current_url.substr(1);
    $(".information .content-body").not(".dashboard").addClass("hide");


    if (current_url == "client") {
        $(".information .dashboard").css("display", "none");
        $(".information .client").removeClass("hide");
        $(".information .client").addClass("show");
    }

    if (current_url == "document") {
        $(".information .dashboard").css("display", "none");
        $(".information .document").removeClass("hide");
        $(".information .document").addClass("show");
    }

    if (current_url == "project") {
        $(".information .dashboard").css("display", "none");
        $(".information .project").removeClass("hide");
        $(".information .project").addClass("show");
    }

    // if (current_url == "team") {
    //     $(".information .dashboard").css("display", "none");
    //     $(".information .team").removeClass("hide");
    //     $(".information .team").addClass("show");
    // }

    // if (current_url == "cost") {
    //     $(".information .dashboard").css("display", "none");
    //     $(".information .cost").removeClass("hide");
    //     $(".information .cost").addClass("show");
    // }

    // if (current_url == "facture") {
    //     $(".information .dashboard").css("display", "none");
    //     $(".information .facture").removeClass("hide");
    //     $(".information .facture").addClass("show");
    // }

    // if (current_url == "invoice") {
    //     $(".information .dashboard").css("display", "none");
    //     $(".information .invoice").removeClass("hide");
    //     $(".information .invoice").addClass("show");
    // }

    // if (current_url == "payment") {
    //     $(".information .dashboard").css("display", "none");
    //     $(".information .payment").removeClass("hide");
    //     $(".information .payment").addClass("show");
    // }

    // if (current_url == "setting") {
    //     $(".information .dashboard").css("display", "none");
    //     $(".information .setting").removeClass("hide");
    //     $(".information .setting").addClass("show");
    // }

    if (current_url == "operations") {
        $(".information .dashboard").css("display", "none");
        $(".information .operations").removeClass("hide");
        $(".information .operations").addClass("show");
    }

    $(".information .content-body .table_pagination ul li").click(function () {
        $(".information .content-body .table_pagination ul li").removeClass("active-page")
        $(this).addClass("active-page")
    })

    $(".information .content-body .custom-modal .modal-body .form-control").focus(function () {
        $(".information .client .modal .modal-body .form-control").parent().children(".form-label").css("color", "#171717");
        $(this).parent().children(".form-label").css("color", "#30bec2");
    })
    $(".information .content-body .custom-modal .modal-body .form-control").focusout(function () {
        $(this).parent().children(".form-label").css("color", "#171717");
    })

    // new client alert start
    $(".information .content-body .custom-modal [newclient-save='save']").click(function () {

        const swal = Swal.mixin({
            customClass: {
                confirmButton: 'confirm-btn',
            },
            buttonsStyling: false
        })

        swal.fire({
            title: '',
            text: "کاربر جدید با موفقیت ثبت شد",
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: "بستن",
            timer: 2000,
        })
    });
    // new client alert end


    // edit client alert start
    $(".information .content-body .custom-modal [client-edit='edit']").click(function () {

        const swal = Swal.mixin({
            customClass: {
                confirmButton: 'confirm-btn',
            },
            buttonsStyling: false
        })

        swal.fire({
            title: '',
            text: "تغییرات با موفقیت ثبت شد",
            icon: 'success',
            showConfirmButton: true,
            confirmButtonText: "بستن ",
            timer: 2000,
        })
    });
    // edit client alert end

    // remove client alert start
    $(".information .content-body .table tbody tr .trash").click(function () {

        const swal = Swal.mixin({
            customClass: {
                confirmButton: 'confirm-btn',
                cancelButton: 'cancel-btn'
            },
            buttonsStyling: false
        })
        swal.fire({
            title: '',
            text: "آیا از حذف مورد انتخاب شده مطمعن هستید ؟",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'بله',
            cancelButtonText: 'نه',
            reverseButtons: true,
            showCloseButton: true,
            closeOnConfirm: true,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    {
                        title: '',
                        text: "با موفقیت حذف شد",
                        icon: 'success',
                        confirmButtonText: 'بستن',
                        confirmButtonColor: "#0F9D58",
                        timer: 3000,
                    }
                )
            }
        })

    });
    // remove client alert end


    //  calendar start
    $(".information .document .calendar").flatpickr(
        {
            "locale": "fa",
            altInput: true,
            altFormat: "d.m.Y",
            dateFormat: "d.m.Y",
        }
    );
    // calendar end


    // select2 start

    $('#client_type , #state').select2({
        dropdownParent: $("#new_client")
    });

    $("#new-project-client-select").select2({
        dropdownParent: $("#new_client")
    })

    $('#client_type , #state').on("select2:open", function () {
        $(this).parent().children("label").css("color", "#30bec2")
    })
    $('#client_type , #state').on("select2:close", function () {
        $(this).parent().children("label").css("color", "#171717")
    })

    // select2 end



    // tabs start

    $(".tabbed li").click(function () {
        $(".tabbed li").removeClass("active-tab")
        $(this).addClass("active-tab");
        let item_id = $(this).attr("id")
        let content_id = "content-" + item_id;
        $(".tab-content-wrapper .tab-content").removeClass("content-tab-active");
        $("#" + content_id).addClass("content-tab-active");
    })

    // tabs end



    // start  website analysis chart script 
    var speedCanvas = document.getElementById('Website_analysis_chart');

    var analysis_chart_label = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"];

    var dataFirst = {
        label: "عملکرد سایت در سال 1400",
        data: [8, 7, 12, 20, 14, 22, 29, 27, 10, 30, 5, 4],
        borderWidth: 3,
        borderColor: "#ED2939",
        cubicInterpolationMode: 'monotone',
    };

    var dataSecond = {
        label: "عملکرد سایت در سال 1401",
        data: [18, 26, 6, 14, 9, 22, 27, 20, 1, 10, 25, 14],
        borderWidth: 3,
        borderColor: "#4285F4",
        cubicInterpolationMode: 'monotone',
    };

    var chartData = {
        labels: analysis_chart_label,
        datasets: [dataFirst, dataSecond]
    };

    var chartOptions = {
        options: {
            responsive: true,

            plugins: {

                legend: {
                    display: true,
                }
                ,
                tooltip: {
                    enabled: true,
                    titleColor: "#363636",
                    titleMarginBottom: 18,
                    titleAlign: "center",
                    bodyColor: "#363636",
                    backgroundColor: "#FFF",
                    borderWidth: 1,
                    borderColor: "rgba(0, 0, 0, 0.2)",

                },

            }
            ,
            scales: {

                yAxes: [{

                    ticks: {
                        min: 75
                    }

                }]
                ,
            }

        }

    };

    var lineChart = new Chart(speedCanvas, {
        type: 'line',
        data: chartData,
        options: chartOptions
    });

    // end  website analysis chart script 


    // start  Registration_number_chart script 
    var ctx2 = document.getElementById('Registration_number_chart').getContext('2d');
    var Registration_number_value = [10, 50];
    var Registration_number_label = ["1400", "1401"];
    var myChart = new Chart(ctx2, {
        type: 'doughnut',
        data: {
            labels: Registration_number_label,
            datasets: [{
                label: "تعداد ثبتنامی ها",
                data: Registration_number_value,
                borderWidth: 1,
                borderColor: [
                    'rgba(216, 27, 96, 0.6)',
                    'rgba(3, 169, 244, 0.6)'
                ],
                backgroundColor: [
                    'rgba(216, 27, 96, 0.6)',
                    'rgba(3, 169, 244, 0.6)'
                ],

            }]
        },
        options: {

            plugins: {
                legend: {
                    display: true,
                }
                ,
                tooltip: {
                    enabled: true,
                    titleColor: "#363636",
                    titleMarginBottom: 18,
                    titleAlign: "center",
                    bodyColor: "#363636",
                    backgroundColor: "#FFF",
                    borderWidth: 1,
                    borderColor: "rgba(0, 0, 0, 0.2)",

                }

            }
        }
    });

    // end  Registration_number_chart script 

    // start income chart 
    var ctx3 = document.getElementById('income-chart').getContext('2d');
    var income_chart_value = [200000, 400000, 270000, 700000];
    var income_chart_label = ["1398", "1399", "1400", "1401"];
    var myChart = new Chart(ctx3, {
        type: 'line',
        data: {

            labels: income_chart_label,

            datasets: [{
                data: income_chart_value,
                label: 'درآمد',
                fill: false,
                borderColor: "#39da8a",
                cubicInterpolationMode: 'monotone',
            }]

        },
        options: {
            plugins: {
                legend: {
                    display: false
                }
                ,
                responsive: true
            }
            ,
            scales: {
                x: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    },
                    display: false
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    },
                    display: false
                },
            },

        }
    });

    // end income chart 


    // cost-benefit chart start
    var options = {
        chart: {
            type: 'area',
            height: 380,

            toolbar: {
                show: false
            }

        },

        series: [

            {
                name: 'هزینه',
                data: [31, 40, 28, 51, 42, 109, 100]
            },
            {
                name: 'درآمد',
                data: [11, 32, 45, 32, 34, 52, 41]
            }
            ,
            {
                name: 'سود',
                data: [1, 23, 56, 9, 43, 25, 14]
            }

        ],

        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        },

        dataLabels: {
            enabled: false
        },

        stroke: {
            show: false,
        },


        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.8,
                opacityTo: 0.9,
            }

        },
        legend: {
            show: true,
            showForSingleSeries: true,
            showForNullSeries: true,
            showForZeroSeries: true,
            position: 'top',
            horizontalAlign: 'left',
            fontSize: '16px',
            fontWeight: 400,
            inverseOrder: false,
            offsetX: 0,
            offsetY: 0,

            labels: {
                colors: undefined,
            },

            markers: {
                width: 12,
                height: 12,
                strokeWidth: 0,
                strokeColor: '#fff',
                fillColors: "#fff",
                radius: 12,
                offsetX: 0,
                offsetY: 0,
            },
            itemMargin: {
                horizontal: 5,
                vertical: 0
            },
            onItemClick: {
                toggleDataSeries: true
            },
            onItemHover: {
                highlightDataSeries: true
            },
        }
    }

    var benefit_chart = new ApexCharts(document.querySelector("#cost-benefit-chart"), options);
    benefit_chart.render();
    // cost-benefit chart end



    // scroll to top start
    let calcWidth = document.documentElement.clientWidth;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    function calcScrollValue() {
        let scrollProgress = document.querySelector(".scroll-to-top");
        let progressValue = document.querySelector(".inner");
        let pos = document.documentElement.scrollTop;
        let scrollValue = Math.round((pos * 100) / calcHeight);
        if (pos > 100) {
            scrollProgress.style.display = "flex";
        } else {
            scrollProgress.style.display = "none";
        }
        scrollProgress.addEventListener("click", () => {
            document.documentElement.scrollTop = 0;
        });
        scrollProgress.style.background = `conic-gradient(#4285F4 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
    }

    window.onscroll = calcScrollValue;
    window.onload = calcScrollValue;
    // scroll to top end


    //   progress container start
    window.addEventListener("scroll", function () {
        let pos = this.window.scrollY;
        let progressbar = pos / calcHeight * calcWidth;
        this.document.querySelector(".progress-container").style.width = progressbar + "px";
    })
    //   progress container end

});






