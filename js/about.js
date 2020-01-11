var indexVue = new Vue({
    el: '#app',
    data: function () {
        return {
            selectedMenu: { //Set selected menu
                index: 'not-active',
                about: 'active',
                service: 'not-active',
                portfolio: 'not-active',
                photography: 'not-active',
                contact: 'not-active'
            }
        }
    },
    methods: {
        
    },
    // Life cycles:
    mounted() {
        
    }
});



//*****************************************Factory Functions *****************************/
