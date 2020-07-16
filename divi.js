<script>
jQuery(document).ready(function() {
    if (jQuery('.ganga-video-autoplay .et_pb_video_box').length !== 0) {
        jQuery('.ganga-video-autoplay .et_pb_video_box').find('video').prop('muted', true);
        jQuery(".ganga-video-autoplay .et_pb_video_box").find('video').attr('loop', 'loop');
        jQuery(".ganga-video-autoplay .et_pb_video_box").find('video').attr('playsInline', '');
 
        jQuery(".ganga-video-autoplay .et_pb_video_box").each(function() {
            jQuery(this).find('video').get(0).play();
        });
        jQuery('.ganga-video-autoplay .et_pb_video_box').find('video').removeAttr('controls');
    }
});
</script>
