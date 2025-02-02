frappe.ui.form.on("Payment Entry", {
    validate:function (frm) {

        validate_out_standing_amount(frm)
        frappe.show_alert('here')
    }
})


let validate_out_standing_amount = function (frm) {
    let references = frm.doc.references
    for (var i = 0; i < references.length; i++) {
        references[i].outstanding_amount = references[i].allocated_amount
    }
    frm.refresh_field('references')
}