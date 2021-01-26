
<!--<script>

export default {
    name: "AuthContext",
    data() {
        return {
           
                isAuthenticated: false,
            //setIsAuthenticated: value => {},
        };
    },
    methods:{
        setIsAuthenticated(value) {
            this.isAuthenticated = value
        }
    },
       provide () {
        return {
           // setIsAuthenticated: this.sharedState
             //setIsAuthenticated: Vue.computed(() => this.isAuthenticated)
             setIsAuthenticated: this.setIsAuthenticated,
        }
    },
}
</script>-->