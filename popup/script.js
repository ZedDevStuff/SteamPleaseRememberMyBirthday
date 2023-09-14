function check() {
    let elements = document.querySelector(".agegate_birthday_selector");
    console.log("Age gate found");
    chrome.storage.local.get("birthdate").then((result) => {
        if(result.birthdate != null || result.birthdate != undefined) {
            document.querySelectorAll("select")[0].value = result.birthdate.day;
            document.querySelectorAll("select")[1].value = result.birthdate.month;
            document.querySelectorAll("select")[2].value = result.birthdate.year;
            document.querySelector("#view_product_page_btn").click()
            console.log("Age gate passed");
        }
    });
}
check();