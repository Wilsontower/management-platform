<template>
  <div id="page-main">
    <template>
      <el-table
        :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
        height="650"
        stripe
        style="width: 100%">
        <el-table-column
          type="index"
          :index="indexMethod">
        </el-table-column>
        <el-table-column
          v-for="(column, index) in StudentTable"
          :key="index"
          :prop="column.prop"
          :label="column.label"
          :sortable="column.sortable"
          :width="column.width">
        </el-table-column>
        <el-table-column align="right">
        <template slot="header" slot-scope="scope"  >
          <el-input
            v-model="search"
            size="small"
            placeholder="输入关键字搜索"/>
          </template>
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleLook(scope.$index, scope.row)">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 15, 20, 30]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </template>

  </div>
</template>

<script type="text/javascript">
import verificationCode from '../login/VerificationCode'
import StudentTable from '../../../static/table/StudentTable'
import axios from 'axios'
export default {
  name: 'MainPage',
  components: {verificationCode},
  data () {
    return {
      validCode: '',
      tableData: [],
      StudentTable: [],
      total: 0,
      pageSize: 10,
      currentPage: 1,
      search: ''
    }
  },
  mounted () {
    this.StudentTable = StudentTable
    console.log(this.StudentTable, 'StudentTable')
    this.getStudent()
  },
  methods: {
    handleLook (val, val2) {
      console.log(val, val2)
    },
    indexMethod (index) {
      return index + 1
    },
    handleSizeChange (val) {
      this.pageSize = val
      this.getStudent()
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.getStudent()
    },
    getStudent () {
      let data = {
        pageSize: this.pageSize,
        pageNumber: this.currentPage,
        sort: '',
        order: 'DESC'
      }
      axios.post(this.$req.manageApi + 'stu/find', data)
        .then(res => {
          console.log(res)
          this.tableData = res.data.data.records
          this.total = res.data.data.total
        }).catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-main{
    min-width: 100%;
    min-height: 100vh;
    padding: 0;
    margin: auto;
  }
</style>
