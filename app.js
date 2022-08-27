//have access due to CDN
const app = Vue.createApp({
    //Template now in html DIV    template: '<h1>Hello {{firstName}}</h1>', //'<h1>Hello World</h1>'.. {{}} double curly braces for declarative rendering
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
            email: 'John@gmail.com',
            gender: 'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            console.log(results)

            this.firstName = results[0].name.first,
                this.lastName = results[0].name.last,
                this.email = results[0].email,
                this.gender = results[0].gender,
                this.picture = results[0].picture.large
        },
    }
})
app.mount('#app') //pass selector - id of app