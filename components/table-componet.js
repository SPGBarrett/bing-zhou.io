// Table componet:
Vue.component('table-total', {
    template: `
    <el-table
    :header-cell-style="{background:'#eef1f6',color:'#606266'}"
    :data="tableData"
    border
    height = 600
    style="width: 100%">
    <el-table-column
      fixed
      prop="id"
      label="id"
      width="60">
    </el-table-column>
    <el-table-column
      prop="site_position"
      label="施工位置"
      width="200">
    </el-table-column>
    <el-table-column
      prop="area"
      label="施工区域"
      width="120">
    </el-table-column>
    <el-table-column
      prop="gist"
      label="巡检要点"
      width="120">
    </el-table-column>
    <el-table-column
      prop="harm_name"
      label="危害名称"
      width="200">
    </el-table-column>
    <el-table-column
      prop="harm_type"
      label="危害类别"
      width="120">
    </el-table-column>
    <el-table-column
      prop="info_describe"
      label="信息描述"
      width="120">
    </el-table-column>
    <el-table-column
      prop="risk_describe"
      label="风险描述"
      width="300">
    </el-table-column>
    <el-table-column
      prop="risk_type"
      label="风险种类"
      width="120">
    </el-table-column>
    <el-table-column
      prop="risk_category"
      label="风险范畴"
      width="120">
    </el-table-column>
    <el-table-column
      prop="exposed"
      label="暴露对象"
      width="120">
    </el-table-column>
    <el-table-column
      prop="risk_level_con"
      label="后果等级"
      width="120">
    </el-table-column>
    <el-table-column
      prop="risk_level_exp"
      label="暴露等级"
      width="120">
    </el-table-column>
    <el-table-column
      prop="risk_level_poss"
      label="可能性等级"
      width="120">
    </el-table-column>
    <el-table-column
      prop="risk_level_value"
      label="风险值"
      width="120">
    </el-table-column>
    <el-table-column
      prop="risk_level"
      label="风险等级"
      width="120">
    </el-table-column>
    <el-table-column
      prop="recom_action"
      label="建议措施"
      width="120">
    </el-table-column>
    <el-table-column
      prop="professional"
      label="专业"
      width="120">
    </el-table-column>
    <el-table-column
      prop="location"
      label="部位"
      width="120">
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="130px">
      <div slot-scope="scope">
        <el-button
          size="mini"
          type="warning"
          icon="el-icon-edit"
          @click="handleEdit(scope.$index, scope.row)"></el-button>
        <el-button
          size="mini"
          type="danger"
          icon="el-icon-delete"
          @click="handleDelete(scope.$index, scope.row)"></el-button>
      </div>
    </el-table-column>
  </el-table>
    `,
    // External params:
    props:['tableData'],
    data() { // Data within a component has to be a function and uses return!!
        return {
            // Local variables:
        }
    },
    methods: {
        handleEdit: function (index, val) {
            console.log(val);
            console.log(index);
            // Trigger parent edit event:
            this.$emit('edit-event', index);
        },
        handleDelete: function (index, val) {
            // Use element UI confirm dialog:
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                this.$message({
                  type: 'success',
                  message: '开始执行删除命令!'
                });
                // Print for debug
                console.log(val);
                console.log(index);
                // Triger parent delete event:
                this.$emit('delete-event', index);
              }).catch(() => {
                this.$message({
                  type: 'info',
                  message: '已取消删除'
                });          
              });
        },
        dataReceivedCallback: function(newData){
            //this.tableData = newData();
        },
        getDataFromServer: function() {
            // Get super: Very Important!! 闭包
            var tmpThis = this;
            axios({
                    method: "get",
                    url: "http://127.0.0.1:5052/SitePatrol/RiskAssessmentAll",
                    responseType: "json"
                })
                .then(function (response) {
                    // Get result:
                    var dataForTable = response.data;
                    // Set up params:
                    console.log("Data acquired form server!");
                    console.log(dataForTable);
                    // Update table using this!!!
                    tmpThis.tableData = dataForTable;
                })
                .catch(function (error) {
                    console.log("ERROR: " + "failed!");
                });
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


//*****************************************Factory Functions *****************************/
// Ajax Connect to server and download dynamic UI params:
function getDataFromServer() {
    axios({
            method: "get",
            url: "http://127.0.0.1:5052/SitePatrol/RiskAssessmentAll",
            responseType: "json"
        })
        .then(function (response) {
            // Get result:
            var dataForTable = response.data;
            // Set up params:
            console.log("Data acquired form server!");
            console.log(dataForTable);
            callBackMethod(dataForTable);
        })
        .catch(function (error) {
            console.log("ERROR: " + "failed!");
        });
}



