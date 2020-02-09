<template>
  <div>
    <Loader v-if="loading"></Loader>
    <div v-else-if="record">
      <div class="breadcrumb-wrap">
        <router-link to="/history" class="breadcrumb">History</router-link>
        <a @click.prevent class="breadcrumb">
          {{record.type  === 'income' ? 'Income' : 'Outcome'}}
        </a>
      </div>
      <div class="row">
        <div class="col s12 m6">
          <div class="card" :class="{
            'red': record.type === 'outcome',
            'green' : record.type === 'income'
          }">
            <div class="card-content white-text">
              <p>Описание: {{record.description}}</p>
              <p>Сумма: {{record.amount | currency('RUB')}}</p>
              <p>Категория: {{record.categoryName}}</p>

              <small>{{record.date | date('datetime')}}</small>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p class="center" v-else>The Record with id={{$route.params.id}} does not exist</p>

  </div>
</template>

<script>
export default {
  name: 'detail',
    //VueMeta component for page titles
  metaInfo() {
    return {
      title: this.$title('Detail_Title')
    }
  },
  data() {
    return {
      record: null,
      loading:true
    }
  },
  async mounted() {
    //get id from the get params
    const id = this.$route.params.id
    const record = await this.$store.dispatch('fetchRecordById', id)
    const category = await this.$store.dispatch('fetchCategoryById', record.categoryId)
    
    this.record = {
      ...record,
      categoryName: category.title
    }

    
    this.loading = false
  }
};
</script>

<style>
</style>