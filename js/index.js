//Public variables:
//var baseUrl = "http://192.0.163.78:9908";
var baseUrl = "http://223.84.191.228:9908"
//var baseUrl = "http://127.0.0.1:5052";
//var socketBaseUrl = "ws://127.0.0.1:5052";
//var socketBaseUrl = "ws://223.84.191.228:8896";

var urlInsertData = baseUrl + "/SitePatrol/RiskAssessment";
var urlUpdateData = baseUrl + "/SitePatrol/RiskAssessment";
var urlDeleteData = baseUrl + "/SitePatrol/RiskAssessment";
var urlGetAllData = baseUrl + "/SitePatrol/RiskAssessmentAll";

var flagForInsertOrEdit = 0; // 0=insert, 1=edit

var indexVue = new Vue({
    el: '#app',
    data: function () {
        return {
            visible: false,
            alertShow: false,
            formData: {
                id: 8,
                guid: "10d01700-9ef4-4ed8-826d-6e85c987329c",
                area: "烟囱区域",
                site_position: "烟囱混凝土外筒壁",
                gist_id: "05A44D2D-C1F4-44E4-87D7-224F7B426891",
                gist: "钢筋加工",
                harm_name: "调直机操作不正确",
                harm_type: "",
                info_describe: "",
                risk_describe: "由于操作或维修不当造成机械损坏及人员伤亡。",
                risk_type: "机械伤害",
                risk_category: "安全类",
                exposed: "机械操作人员及附近的其它人员",
                risk_level_con: 25,
                risk_level_exp: 2,
                risk_level_poss: 1,
                risk_level_value: 50,
                risk_level: "一般",
                recom_action: null,
                professional: null,
                location: null
            },
            formLabelWidth: '120px',
            tableDataFromParent: [{
                    "id": 5,
                    "guid": "25456f11-786e-4fc7-a8a8-bb98c3d6f8e9",
                    "area": "烟囱区域",
                    "site_position": "烟囱混凝土外筒壁",
                    "gist_id": "05A44D2D-C1F4-44E4-87D7-224F7B426888",
                    "gist": "钢筋加工",
                    "harm_name": "操作、维修不符合要求",
                    "harm_type": "",
                    "info_describe": "",
                    "risk_describe": "由于操作或维修不当造成机械损坏及人员伤亡。",
                    "risk_type": "机械伤害",
                    "risk_category": "安全类",
                    "exposed": "机械操作人员及附近的其它人员",
                    "risk_level_con": 25,
                    "risk_level_exp": 1,
                    "risk_level_poss": 3,
                    "risk_level_value": 75,
                    "risk_level": "较大",
                    "recom_action": null,
                    "professional": null,
                    "location": null
                },
                {
                    "id": 7,
                    "guid": "707c09ad-45fe-4efc-a857-0895efc91d6b",
                    "area": "烟囱区域",
                    "site_position": "烟囱混凝土外筒壁",
                    "gist_id": "05A44D2D-C1F4-44E4-87D7-224F7B426890",
                    "gist": "钢筋加工",
                    "harm_name": "砂轮机使用方法不当",
                    "harm_type": "",
                    "info_describe": "",
                    "risk_describe": "由于操作或维修不当造成机械损坏及人员伤亡。",
                    "risk_type": "机械伤害",
                    "risk_category": "安全类",
                    "exposed": "机械操作人员及附近的其它人员",
                    "risk_level_con": 25,
                    "risk_level_exp": 2,
                    "risk_level_poss": 1,
                    "risk_level_value": 25,
                    "risk_level": "一般",
                    "recom_action": null,
                    "professional": null,
                    "location": null
                }
            ]
        }
    },
    methods: {
        // Buuton click to refresh this page:
        refeshPage() {
            window.location.reload();
        },
        insertClick: function () {
            initFormData(null);
            flagForInsertOrEdit = 0;
            this.visible = true;
        },
        dataFormOKClick: function () {
            if(flagForInsertOrEdit == 0){
                var dataToInsert = this.formData;
                delete dataToInsert.id;
                console.log(dataToInsert);
                this.visible = false;
                // Ajax to insert data and then update table:
                this.insertDataIntoServer(dataToInsert);
            }else if(flagForInsertOrEdit == 1){
                var dataToUpdate = this.formData;
                console.log(dataToUpdate);
                this.visible = false;
                // Ajax to update data and then update table:
                this.updateDataForServer(dataToUpdate);
            }else{
                alert("Flag is incorrect!");
            }
        },
        dataFormCancelClick: function () {
            this.visible = false;
          },
        dataDeleteEventHandler: function (index) {
            console.log("Delete event catched! tableIndex=" + index);
            // Get data id from index:
            var selectedID = this.tableDataFromParent[index].id;
            this.deleteDataFromServer(selectedID);
        },
        editEventHandler: function (index) {
            console.log("Edit event catched! tableIndex=" + index);
            // Get data for form:
            var dataToEdit = this.tableDataFromParent[index];
            initFormData(dataToEdit);
            // Set flag and show form:
            flagForInsertOrEdit = 1;
            this.visible = true;
        },
        // Ajax get data from server:
        getDataFromServer: function () {
            // Get super: Very Important!! 闭包
            var tmpThis = this;
            axios({
                    method: "get",
                    url: urlGetAllData,
                    responseType: "json"
                })
                .then(function (response) {
                    // Get result:
                    var dataForTable = response.data;
                    // Set up params:
                    console.log("Data acquired form server!");
                    console.log(dataForTable);
                    // Update table using this!!!
                    tmpThis.tableDataFromParent = dataForTable;
                })
                .catch(function (error) {
                    console.log("ERROR: " + "failed!");
                    tmpThis.$message({
                        type: 'info',
                        message: '从服务器获取数据失败，请检查网络连接！'
                      });  
                });
        },
        // Ajax insert data into server:
        insertDataIntoServer: function (dataToInsert) {
            // Get super: Very Important!! 闭包
            var tmpThis = this;
            axios({
                    method: "put",
                    url: urlInsertData,
                    responseType: "json",
                    data: dataToInsert
                })
                .then(function (response) {
                    // Get result:
                    console.log("Data Successfully inserted!");
                    console.log(response.data);
                    // Show message:
                    tmpThis.$message({
                        type: 'success',
                        message: '数据成功插入数据库!'
                      });
                    // Update table:
                    tmpThis.getDataFromServer();
                })
                .catch(function (error) {
                    console.log("ERROR: " + "Insert data failed! Please Check Internet!");
                    tmpThis.$message({
                        type: 'info',
                        message: '数据插入失败，请检查网络连接！'
                      });  
                });
        },
        // Ajax delete one data by id form server；
        deleteDataFromServer: function (id) {
            // Get super: Very Important!! 闭包
            var tmpThis = this;
            axios({
                    method: "delete",
                    url: urlDeleteData,
                    responseType: "json",
                    params: {
                        paramInt: id
                    },
                })
                .then(function (response) {
                    // Get result:
                    console.log("Data Successfully deleted!");
                    console.log(response.data);
                    // Show message:
                    tmpThis.$message({
                        type: 'success',
                        message: '数据删除成功!'
                      });
                    // Update table:
                    tmpThis.getDataFromServer();
                })
                .catch(function (error) {
                    console.log("ERROR: " + "Delete data failed! Please Check Internet!");
                    tmpThis.$message({
                        type: 'info',
                        message: '数据删除失败，请检查网络连接！'
                      });  
                });
        },
        updateDataForServer: function (dataToUpdate) {
            // Get super: Very Important!! 闭包
            var tmpThis = this;
            axios({
                    method: "post",
                    url: urlUpdateData,
                    responseType: "json",
                    data: dataToUpdate
                })
                .then(function (response) {
                    // Get result:
                    console.log("Data Successfully updated!");
                    console.log(response.data);
                    // Show message:
                    tmpThis.$message({
                        type: 'success',
                        message: '数据更新修改成功!'
                      });
                    // Update table:
                    tmpThis.getDataFromServer();
                })
                .catch(function (error) {
                    console.log("ERROR: " + "Update data failed! Please Check Internet!");
                    tmpThis.$message({
                        type: 'info',
                        message: '数据更新失败，请检查网络连接！'
                      });  
                });
        }
    },
    // Life cycles:
    mounted() {
        this.getDataFromServer();
    },
});



//*****************************************Factory Functions *****************************/
// Initialize form data:
function initFormData(data) {
    if (data == null || data == undefined) {
        indexVue.formData = {
            id: 0,
            guid: null,
            area: null,
            site_position: null,
            gist_id: null,
            gist: null,
            harm_name: null,
            harm_type: null,
            info_describe: null,
            risk_describe: null,
            risk_type: null,
            risk_category: null,
            exposed: null,
            risk_level_con: null,
            risk_level_exp: null,
            risk_level_poss: null,
            risk_level_value: null,
            risk_level: null,
            recom_action: null,
            professional: null,
            location: null
        };
    } else { //Use copy, not assign:
        indexVue.formData = {
            id: data.id,
            guid: data.guid,
            area: data.area,
            site_position: data.site_position,
            gist_id: data.gist_id,
            gist: data.gist,
            harm_name: data.harm_name,
            harm_type: data.harm_type,
            info_describe: data.info_describe,
            risk_describe: data.risk_describe,
            risk_type: data.risk_type,
            risk_category: data.risk_category,
            exposed: data.exposed,
            risk_level_con: data.risk_level_con,
            risk_level_exp: data.risk_level_exp,
            risk_level_poss: data.risk_level_poss,
            risk_level_value: data.risk_level_value,
            risk_level: data.risk_level,
            recom_action: data.recom_action,
            professional: data.professional,
            location: data.location
        };
    }
}