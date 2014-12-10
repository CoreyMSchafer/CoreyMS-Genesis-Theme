jQuery(document).ready(function($) {

    //Set the Entry Title for Article Image Captions
    var entryTitle = $('.entry-title').text();
    $('.single-post').magnificPopup({
        delegate: '.article-image',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                if(item.el.siblings('.wp-caption-text').text() === '') {
                    //If image doesn't have a caption, use Image Title
                    return item.el.children('img').attr('title') + '<small>' + entryTitle + '</small>';
                } else {
                    return item.el.siblings('.wp-caption-text').text() + '<small>' + entryTitle + '</small>';
                }
            }
        }
    });

    $('.single-image').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });

    //Link Article Images on home and archive pages to the article.
    $('.home, .archive').find('.article-image').each(function(){
        this.href = $(this).closest('article').find('.entry-title a').attr('href');
    })
});