/**
 * Simple YouTube Plugin
 * @param {string} id YouTube id
 * @param {object} options {width,height}
 * @returns {$.fn} jQuery object
 */
if (typeof jQuery === 'function') {
    (function ($) {
        $.fn.youtube = function (id,options) {
            var test = /[0-9a-zA-Z]{11}/;

            //youtube id is an 11 character alphanumeric
            if (test.test(id)) {
                var opts = {
                    width : 560,
                    height : 315
                };
                $.extend(opts,options);
                this.append('<iframe width="'+ opts.width +'" height="'+ opts.height +'" src="//www.youtube.com/embed/'+ id + '" frameborder="0" allowfullscreen></iframe>');
            }
            return this;    
        };
    })(jQuery);
}