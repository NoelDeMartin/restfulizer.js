/**
 * JQuery plugin version of https://github.com/fahrulazmi/restfulizer.js
 *
 * Convert elements in restful triggers.
 *
 * Example:
 *     <a href="/destroy" class="destroy-item">destroy</a>
 *
 *      <script type="text/javascript">
 *          $('.destroy-item').restfulize({
 *              method: 'DELETE',
 *              confirm: function() {
 *                  return confirm('Are you sure you want to delete this item?');
 *              }
 *          });
 *      </script>
 *
 */
(function($){
    $.fn.restfulize = function (options) {
        var defaults = {
            confirm: function() { return true; },
            method: 'POST'
        };
        var options = $.extend(defaults, options);
        return this.each(function(){
            var $link = $(this);
            $link.append(
                "<form action='"+$link.attr('href')+"' method='POST' style='display:none'>"+
                    "<input type='hidden' name='_method' value='"+options.method+"'>"+
                "</form>")
            .removeAttr('href')
            .attr('style','cursor:pointer;')
            .bind('click', function() {if(options.confirm())$(this).find("form").submit();});
        });
    };
})(jQuery);