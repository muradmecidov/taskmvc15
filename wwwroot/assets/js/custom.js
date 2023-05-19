let dbServiceCount = $("#dbServiceCount").val()

$("#btnLoadMore").on("click", () => {
    let serviceCount = $("#services").children().length
    console.log(serviceCount)
    $.ajax("/Services/LoadMore", {

        method: "GET",
        data: {
            skip: serviceCount,
            take: 8
        },
        success: (data) => {
            $("#services").append(data)
            serviceCount = $("#services").children().length
            if (serviceCount >= dbServiceCount) {
                $("#btnLoadMore").remove()
            }
        }
    })
})
