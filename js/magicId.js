const inpFile = document.getElementById("inpFile");
const previewContainer = document.getElementById("imagePreview");
const previewImage = previewContainer.querySelector(".image-preview__image");
const previewText = previewContainer.querySelector(".image-preview__default-text");


inpFile.addEventListener("change", function() {
    const file = this.files[0];
    console.log(file);

    if (file) {
        const reader = new FileReader();

        previewText.style.display = "none";
        previewImage.style.display = "block";
        reader.addEventListener("load", function() {
            console.log(this);
            previewImage.setAttribute("src", this.result);
        });

        reader.readAsDataURL(file);
    }
});




const inpFile2 = document.getElementById("inpFile2");
const previewContainer2 = document.getElementById("imagePreview2");
const previewImage2 = previewContainer2.querySelector(".image-preview__image2");
const previewText2 = previewContainer2.querySelector(".image-preview__default-text2");


inpFile2.addEventListener("change", function() {
    const file = this.files[0];
    console.log(file);

    if (file) {
        const reader = new FileReader();

        previewText2.style.display = "none";
        previewImage2.style.display = "block";
        reader.addEventListener("load", function() {
            console.log(this);
            previewImage2.setAttribute("src", this.result);
        });

        reader.readAsDataURL(file);
    }
});

const previewContainer3 = document.getElementById("imagePreview3");
const previewImage3 = previewContainer3.querySelector(".image-preview__image3");

inpFile.addEventListener("change", function() {
    const file = this.files[0];
    console.log(file);

    if (file) {
        const reader = new FileReader();
        previewImage3.style.display = "block";
        reader.addEventListener("load", function() {
            console.log(this);
            previewImage3.setAttribute("src", this.result);
        });
        reader.readAsDataURL(file);
    }
});


const previewContainer4 = document.getElementById("imagePreview4");
const previewImage4 = previewContainer4.querySelector(".image-preview__image4");

inpFile2.addEventListener("change", function() {
    const file = this.files[0];
    console.log(file);

    if (file) {
        const reader = new FileReader();
        previewImage4.style.display = "block";
        reader.addEventListener("load", function() {
            console.log(this);
            previewImage4.setAttribute("src", this.result);
        });
        reader.readAsDataURL(file);
    }
});