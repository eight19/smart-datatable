/**
 * Smart Datatable javascript events
 * @author Karthik Nataraj
 */
(function ($) {
    /**
     * Used below libraries
     * Datatables:
     *  To draw table with features like search, sort, pagination etc
     * YADCF
     *  To have column-wise filter.
     *  @link http://yadcf-showcase.appspot.com/
     */
    $('.table-employee-list')
            .dataTable({
                "pagingType": "simple_numbers"
            })
            .yadcf([
                {
                    column_number: 0,
                    filter_reset_button_text: false,
                    style_class: 'dataTableFilterInput',
                    filter_default_label: 'All',
                    filter_type: 'multi_select',
                    select_type: 'select2'
                },

                {
                    column_number: 1,
                    filter_reset_button_text: false,
                    style_class: 'dataTableFilterInput',
                    filter_default_label: 'All',
                    filter_type: 'multi_select',
                    select_type: 'select2'
                },

                {
                    column_number: 2,
                    filter_reset_button_text: false,
                    style_class: 'dataTableFilterInput',
                    filter_default_label: 'All',
                    filter_type: 'multi_select',
                    select_type: 'select2'
                },

                {
                    column_number: 3,
                    filter_reset_button_text: false,
                    style_class: 'dataTableFilterInput',
                    filter_default_label: 'All',
                    filter_type: 'multi_select',
                    select_type: 'select2'
                },

                {
                    column_number: 4,
                    filter_reset_button_text: false,
                    style_class: 'dataTableFilterInput',
                    filter_default_label: 'All',
                    filter_type: 'multi_select',
                    select_type: 'select2'
                },

                {
                    column_number: 5,
                    filter_reset_button_text: false,
                    style_class: 'dataTableFilterInput',
                    filter_default_label: 'All',
                    filter_type: 'multi_select',
                    select_type: 'select2'
                },
            ]);

    // View employee modal
    var $modal = $('.modal-view-employee');
    var $modalHeader = $modal.find('.modal-header');
    $('.table-employee-list tbody').on('click', 'td button.btn-view-details', function () {
        var empId = $(this).data('employee-id');
        $modalHeader.find('span.emp-id').text(empId);
        $modal.modal();
    });

})(window.jQuery);