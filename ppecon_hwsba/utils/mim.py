
import frappe

@frappe.whitelist()
def get_total_tax_percentage(taxes_and_charges_template):
    sum_percentage = 0
    tax_doc = frappe.get_doc("Sales Taxes and Charges Template", taxes_and_charges_template)
    if tax_doc.taxes:
        for row in tax_doc.get("taxes"):
            sum_percentage+=row.rate

    return sum_percentage
