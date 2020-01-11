// Table componet:
Vue.component('protfolio-main-card', {
    template: `
    <section class="ftco-section">
                <div class="container">
                    <div class="row justify-content-center mb-5 pb-5">
                        <div class="col-md-7 text-center heading-section ftco-animate">
                            <span>Portfolio</span>
                            <h2>Checkout a few of my works</h2>
                        </div>
                    </div>
                    <div class="row no-gutters">
                        <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                            <a href="portfolio-single.html"
                                class="image d-flex justify-content-center align-items-center"
                                style="background-image: url('./static/img/gis_demo_pic.jpg'); background-size:100% 50%;"
                                data-scrollax=" properties: { translateY: '-30%'}">
                            </a>
                            <div class="text">
                                <h4 class="subheading">{{description[0].title}}</h4>
                                <h2 class="heading"><a href="portfolio-single.html">{{description[0].desc}}</a></h2>
                                <p>{{description[0].detail}}</p>
                                <p><a href="#">View Project</a></p>
                            </div>
                        </div>
                        <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                            <a href="portfolio-single.html"
                                class="image order-2 d-flex justify-content-center align-items-center"
                                style="background-image: url('./static/img/dn_platform_pic.jpg'); background-size:100% 50%;"
                                data-scrollax=" properties: { translateY: '-30%'}">
                            </a>
                            <div class="text order-1">
                                <h4 class="subheading">{{description[1].title}}</h4>
                                <h2 class="heading"><a href="portfoli-singleo.html">{{description[1].desc}}</a></h2>
                                <p>{{description[1].detail}}</p>
                                <p><a href="#">View Project</a></p>
                            </div>
                        </div>
                        <div class="block-3 d-md-flex ftco-animate" data-scrollax-parent="true">
                            <a href="portfolio-single.html"
                                class="image d-flex justify-content-center align-items-center"
                                style="background-image: url('./static/img/android_app_pic.jpg'); background-size:100% 50%;"
                                data-scrollax=" properties: { translateY: '-30%'}">
                            </a>
                            <div class="text">
                                <h4 class="subheading">{{description[2].title}}</h4>
                                <h2 class="heading"><a href="portfolio-single.html">{{description[2].desc}}</a></h2>
                                <p>{{description[2].detail}}</p>
                                <p><a href="#">View Project</a></p>
                            </div>
                        </div>
                        <div class="block-5 d-md-flex ftco-animate" data-scrollax-parent="true" style="width: 100%;">
                            <a href="portfolio-single.html"
                                class="image order-2 d-flex justify-content-center align-items-center"
                                style="background-image: url('images/work-4.jpg'); "
                                data-scrollax=" properties: { translateY: '-30%'}">
                            </a>
                            <div class="text order-1" style="width: 100%; text-align: center;">
                                <h2 class="heading"><a href="portfoli-singleo.html">To be continued......</a></h2>
                                <p>More demos coming soon.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    `,
    // External params:
    props: [],
    data() { // Data within a component has to be a function and uses return!!
        return {
            description: [{
                    title: "Web App",
                    desc: "Data visualization demo",
                    detail:"Web App that visualizes numerous form of geospatial data based on Mapbox and ArcGIS API for Javascript."
                },
                {
                    title: "Application",
                    desc: "Distribution Network Design Platform",
                    detail:"A ArcEngine based C# software that boosts the efficiency of distribution network design and data collection."
                }, {
                    title: "Android Development",
                    desc: "Field Data Collection Application",
                    detail:"Android application based on ArcGIS for android and other mainstream frameworks which enable fast and easy field data collection."
                }
            ]
        }
    },
    methods: {},
    // Life Cycle Methods:
    beforeCreate() {

    },
    created() {

    },
    mounted() {
        //this.getDataFromServer();
    },
    // Listeners:
    watch: {}
});