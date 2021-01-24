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
        currentPage: '',
        itemsPerPage: 10,
        onPageChanged:'',


    },
    data(){
        return{
            getData:'',
        }
    },
    methods:{
        Pagination = ({ currentPage, itemsPerPage, length, onPageChanged }) => {
        const pagesCount = Math.ceil(length / itemsPerPage);
        const pages = [];

        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        };
    },
  /*  Pagination.getData = (items, currentPage, itemsPerPage) => {
        const start = currentPage * itemsPerPage - itemsPerPage;
        return items.slice(start, start + itemsPerPage);
    }; */
 
    },

}
</script>