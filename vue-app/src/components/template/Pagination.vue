 <template>
    <div>
      <ul class="pagination pagination-sm">
        <li :class="'page-item' + (currentPage === 1 && 'disabled')">
          <button
            class="page-link"
            @click="() => onPageChanged(currentPage - 1)"
          >
            &laquo;
          </button>
        </li>
          <li v-for=" page in pages" :key="page"
            :class="'page-item' + (currentPage === page && 'active')"
          >
            <button class="page-link" @click="() => onPageChanged(page)">
              {{page}}
            </button>
          </li>

        <li
          :class="'page-item' + (currentPage === pagesCount && ' disabled')"
        >
          <button
            class="page-link"
            @click="() => onPageChanged(currentPage + 1)"
          >
            &raquo;
          </button>
        </li>
      </ul>
    </div>
</template>

<script>
/*const Pagination = ({ currentPage, itemsPerPage, length, onPageChanged }) => {
  const pagesCount = Math.ceil(length / itemsPerPage);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  };
}*/
 

export default {
    name:'Pagination',
    props:{
        currentPage: {
            type: String,
            required: true,
            default: "1"
        },
        itemsPerPage:  {
            type: String,
            required: true,
            default: "10"
        },
        //onPageChanged:{},
        length: {
            type: String,
            required: true,
            default: "1"
        },


    },
    data(){
        return{
            pagesCount: Math.ceil(length / this.itemsPerPage),
            pages:[],
           /*  Pagination : ({ currentPage, itemsPerPage, length, onPageChanged }) => {
        const pagesCount = Math.ceil(length / itemsPerPage);
        const pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        };
    },*/
        }
    },
    methods:{
           
        onPageChanged(page){
            this.$emit('onPageChanged', page)
        },
   
 
    },
    computed: {
     count: function(){
            return this.pagesCount.forEach(i => {  this.pages.push(i);   })
             //pagesCount =  Math.ceil(length / itemsPerPage),

              
            
        },
          
    getData: function( items) {
        const start = this.currentPage * this.itemsPerPage - this.itemsPerPage;
        return items.slice(start, start + this.itemsPerPage);
    },
    }
}
</script> 