'use strict';

$(document).ready(() => {
    const productForm = $('.addProduct');
    productForm.submit((event) => {
        event.preventDefault(); // always include that, because bootstrap submit is by default a GET method 
        let title = $('input[name="title"]').val();
        let description = $('input[name="description"]').val();
        let category = $('input[name="category"]').val();
        let price = $('input[name="price"]').val();
        let colors = $('input[name="colors"]').val();
        let sizes = $('input[name="sizes"]').val();
        let tags = $('input[name="tags"]').val();
        let fullDescription = $('input[name="fullDescription"]').val();
        let additionalInfo = $('input[name="additionalInfo"]').val();
        let link = $('input[name="link"]').val();
        
        console.log(title, description, category, price, colors, sizes, tags, fullDescription, additionalInfo);

        let data = {
            title: title,
            description: description,
            category: category,
            price: price,
            colors: colors,
            sizes: sizes,
            tags: tags,
            fullDescription: fullDescription,
            additionalInfo: additionalInfo,
            link: link
        };

        $.ajax({
            method: 'POST',
            url: '/add-product',
            contentType: "application/json",
            data: JSON.stringify(data)
        }).done((res) => {
            console.log('Product added to db');
        }).fail((res) => {
            console.log('FAIL');
        });
        $('.addProduct')[0].reset();
    });
});