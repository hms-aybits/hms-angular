var BootstrapNotifyDemo = {
    init_category: function() {
        $("[data-switch=true]").bootstrapSwitch(), $("#aybits_category_btn").click(function() {
            var e = {
                message: "Category added successfully"
            };
            var t = $.notify(e, {
                type: 'success',
                spacing: 10,
                timer: 1000,
                placement: {
                    from: 'top',
                    align: 'right'
                },
                offset: {
                    x: 30,
                    y: 30
                },
                delay: 1000,
                z_index: 10000,

            });

        })
    },

    init_tax: function() {
        $("[data-switch=true]").bootstrapSwitch(), $("#aybits_tax_btn").click(function() {
            var e = {
                message: "TaxRules rule added successfully"
            };
            var t = $.notify(e, {
                type: 'success',
                spacing: 10,
                timer: 1000,
                placement: {
                    from: 'top',
                    align: 'right'
                },
                offset: {
                    x: 30,
                    y: 30
                },
                delay: 1000,
                z_index: 10000,

            });

        })
    }
};
jQuery(document).ready(function() {
    BootstrapNotifyDemo.init_category(),
    BootstrapNotifyDemo.init_tax()
});