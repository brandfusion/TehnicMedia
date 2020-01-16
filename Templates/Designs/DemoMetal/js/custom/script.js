$(document).ready(function() {
	
    //Banner
	$('[data-hover-image]')
    .bind('mouseover', function(event) {
        var $this = $(this);
        
        if (!$this.data('original-image')) {
            $this.data('original-image', $this.attr('src'));
        }
        
        $this.attr('src', $this.attr('data-hover-image'));
    })
    .bind('mouseout', function(event) {
        var $this = $(this),
            original = $this.data('original-image');
        
        if (original) {
            $this.attr('src', original);
        }
    });

});	