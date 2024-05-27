//CallBack Hell
function step1(fn){
    console.log("Plz wait selecting image");
    setTimeout(function(){
        console.log("Image selected");
        fn("Selected Image");
    },4000);
}

function step2(image,fn){
    console.log(`Plz wait Applying filter on ${image}`);
    setTimeout(function(){
        console.log("Filter Applied");
        fn("Filtered Image");
    },2000);

}

function step3(filter,fn){
    console.log(`Plz wait Adding caption on ${filter}`);
    setTimeout(function(){
        console.log("Caption Added");
        fn("Captioned Image");
    },5000);
}

function step4(caption){
    console.log(`Plz wait Uploading ${caption}`);
    setTimeout(function(){
        console.log("Image Uploaded");
    },3000);

}

step1(function(image){
    step2(image,function(filter){
        step3(filter,function(caption){
            step4(caption);
        });
    });
});
