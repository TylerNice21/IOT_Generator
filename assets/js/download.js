<script>
    (function ($) {
        $(document).on('ready', function () {
            $("#Generate").on('click', function (e) {
                //This is where you construct the data you would like to save
                var fileDataToSave = $("#form1").serialize();
                var $downloadAnchor = $("<a/>", {
                    href: 'data:text/plain;charset=UTF-8,' + fileDataToSave,
                    download: "HelloWorld.xml"
                });
                $downloadAnchor.text("Download Generated XML File");
                $("body").append($downloadAnchor);
                e.preventDefault();
            });

        });
    })(jQuery);
</script>