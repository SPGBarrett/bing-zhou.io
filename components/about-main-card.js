// Table componet:
Vue.component('about-main-card', {
    template: `
    <section class="ftco-section about-section">
    <div class="container">
        <div class="row d-flex" data-scrollax-parent="true">
            <div class="col-md-4 author-img"
                style="background-image: url('./static/img/barrett_major_portrait.jpg');"
                data-scrollax=" properties: { translateY: '-70%'}"></div>
            <div class="col-md-2"></div>
            <div class="col-md-6 wrap ftco-animate">
                <div class="about-desc">
                    <h1 class="bold-text">About</h1>
                    <div class="p-5">
                        <h2 class="mb-5">Hi! I'm Bing Zhou</h2>
                        <p> My English name is Barrett. I am glad that you have come so far to visit my
                            personal website.
                            From here ,you will know more about me.
                        </p>
                        <ul class="ftco-footer-social list-unstyled mt-4">
                            <li><a :href="websiteRef.photo"><span class="fa fa-500px"
                                        style="color:#2c7ff1;"></span></a></li>
                            <li><a :href="websiteRef.git"><span class="fa fa-github"
                                        style="color: #2c7ff1;"></span></a></li>
                            <li><a :href="websiteRef.linkedin"><span
                                        class="fa fa-linkedin" style="color: #2c7ff1;"></span></a></li>
                            <li><a href="#"><span @click="openResume"
                                        class="fa fa-cloud-download" style="color: #2c7ff1;"></span></a></li>
                        </ul>
                        <h5>Contact me here!</h5>
                        <p>Email: <a href="#"><span class="__cf_email__"
                                    data-cfemail="spg_barrett@live.cn">spg_barrett@live.cn</span></a>
                        </p>
                        <p>Phone: <a href="#">(+86) 186-2788-6419</a></p>
                    </div>
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
            // Local variables:
            title: "Bing Zhou, Barrett",
            websiteRef: {
                photo: "https://500px.me/barrettvision",
                git: "https://github.com/SPGBarrett",
                linkedin: "https://www.linkedin.com/in/%E5%86%B0-%E5%91%A8-a90073162/"
            }
        }
    },
    methods: {
        openResume: function () {
            console.log("Clicked!");
            window.open('../static/Bing Zhou Cirriculum Vitae.pdf');
        }
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