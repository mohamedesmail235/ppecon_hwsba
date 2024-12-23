frappe.ui.form.on("Project", {
    setup(frm) {
        frm.set_query("custom_revenue_account", function () {
            return {
                filters: {
                    account_type: "Income Account",
                    company: frm.doc.company,
                    is_group: 0,
                },
            };
        });


        frm.set_query("custom_grantee_account", function () {
            return {
                filters: {
                    account_type: "Receivable",
                    company: frm.doc.company,
                    is_group: 0,
                },
            };
        });


        frm.set_query("custom_advance_account", function () {
            return {
                filters: {
                    account_type: "Receivable",
                    company: frm.doc.company,
                    is_group: 0,
                },
            };
        });

        frm.set_query("custom_vat_advance_account", function () {
            return {
                filters: {
                    account_type: "Tax",
                    company: frm.doc.company,
                    is_group: 0,
                },
            };
        });

        frm.set_query("custom_vat_advance_account", function () {
            return {
                filters: {
                    account_type: "Tax",
                    company: frm.doc.company,
                    is_group: 0,
                },
            };
        });

        frm.set_query("custom_vat_account", function () {
            return {
                filters: {
                    account_type: "Tax",
                    company: frm.doc.company,
                    is_group: 0,
                },
            };
        });
    },
    // custom_vat_template(frm) {
    //         frm.call({
    //             method: "ppecon_hwsba.utils.mim.get_total_tax_percentage",
    //             args: {
    //                 taxes_and_charges_template: frm.doc.custom_vat_template
    //             },
    //             callback: function (res) {
    //                 if (res.message) {
    //                     let percet = res.message;
    //                     // frm.set_value("custom_vat_template_percentage", percet);
    //                     // frm.refresh('custom_vat_template_percentage');
    //                 }
    //             }
    //         })
    // }
})