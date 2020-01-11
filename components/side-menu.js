// Table componet:
Vue.component('side-menu', {
    template: `
    <nav id="colorlib-main-nav" role="navigation">
    <a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle active"><i></i></a>
    <div class="js-fullheight colorlib-table">
        <div class="img" style="background-image: url('./static/img/front_selfie.jpg');"></div>
        <div class="colorlib-table-cell js-fullheight">
            <div class="row no-gutters">
                <div class="col-md-12 text-center">
                    <h1 class="mb-4"><a href="index.html" class="logo">{{title}}</a></h1>
                    <ul>
                        <li :class="activeLink.index"><a :href="linkRef.index"><span><small>01</small>{{menuNames.index}}</span></a></li>
                        <li :class="activeLink.about"><a :href="linkRef.about"><span><small>02</small>{{menuNames.about}}</span></a></li>
                        <li :class="activeLink.service"><a :href="linkRef.service"><span><small>03</small>{{menuNames.service}}</span></a></li>
                        <li :class="activeLink.portfolio"><a :href="linkRef.portfolio"><span><small>04</small>{{menuNames.portfolio}}</span></a></li>
                        <li :class="activeLink.photography"><a :href="linkRef.photography"><span><small>05</small>{{menuNames.photography}}</span></a></li>
                        <li :class="activeLink.contact"><a :href="linkRef.contact"><span><small>06</small>{{menuNames.contact}}</span></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</nav>
    `,
    // External params:
    props: ['activeLink'],
    data() { // Data within a component has to be a function and uses return!!
        return {
            // Local variables:
            title: "Bing Zhou, Barrett",
            linkRef:{
                index: "index.html",
                about: "about.html",
                service: "service.html",
                portfolio: "portfolio.html",
                photography: "photography.html",
                contact: "contact.html"
            },
            menuNames: {
                index: "Home",
                about: "Resume",
                service: "Services",
                portfolio: "Portfolio",
                photography: "Photography",
                contact: "Contact"
            }
        }
    },
    methods: {
        
    },
    // Life Cycle Methods:
    beforeCreate() {

    },
    created() {

    },
    mounted() {
        //this.getDataFromServer();
    },
    // Listeners:
    watch: {

    }
});