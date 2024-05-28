# Instagram Post: The "CallBack Hell"🎬

In this example, we'll simulate the process of creating an Instagram post using JavaScript's callback functions.




https://github.com/GarvVirmani/Instagram-Post/assets/131982472/bd2b3c71-117d-47cd-9fac-1d1b0a172513



---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## Process Overview

The process consists of the following steps:

1. **Selecting Image**: This step involves selecting an image for the post.
2. **Applying Filter**: After selecting the image, a filter is applied to enhance its appearance.
3. **Adding Caption**: Once the image is filtered, a caption is added to provide context or convey a message.
4. **Uploading Image**: Finally, the captioned image is uploaded to the Instagram platform.

## Implementation

To demonstrate the sequential execution of these steps, we've utilized callback functions:

- `step1(fn)`: Simulates the selection of an image.
- `step2(image, fn)`: Applies a filter to the selected image.
- `step3(filter, fn)`: Adds a caption to the filtered image.
- `step4(caption)`: Uploads the captioned image.

The callback functions ensure that each step is completed before proceeding to the next one, despite the asynchronous nature of JavaScript.

## Usage

To use this code:

1. Copy the provided JavaScript code into your project.
2. Invoke the `step1` function with a callback function to initiate the process.

```javascript
step1(function(image){
    step2(image,function(filter){
        step3(filter,function(caption){
            step4(caption);
        });
    });
});
