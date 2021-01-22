<template>
  <div>
    <div class="allManage_cont">
      <el-row type="flex" class="row-bg" justify="space-around">
        <!-- 侧边导航 -->
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <Nav :SideNav="SideNav"></Nav>
          </div>
        </el-col>
        <!-- 右边内容 -->
        <el-col :span="18">
          <div class="grid-content bg-purple-light">
            <div class="right">
              <el-input placeholder="请输入内容" v-model="search" class="input-with-select search">
                <el-button slot="append" icon="el-icon-search"></el-button>
              </el-input>
              <el-table class="right_con" ref="singleTable" max-height="662" :header-cell-style="getRowClass"
                :data="tableData">
                <el-table-column type="index" label="序号" width="50">
                </el-table-column>
                <el-table-column property="field" label="字段">
                </el-table-column>
                <el-table-column property="date" label="创建时间">
                </el-table-column>
                <el-table-column property="name" label="创建人">
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button class="edit" type="text" size="small" @click="edit()">编辑</el-button>
                    <el-button class="del" @click.native.prevent="deleteRow(scope.$index, tableData)" type="text"
                      size="small">删除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import Nav from './nav'
  export default {
    components: {
      Nav
    },
    props: {},
    data() {
      return {
        SideNav:[{
          name:'投诉方式（来源）'
        },{
          name:'事件状态'
        },{
          name:'与患者关系'
        },{
          name:'投诉类别'
        },{
          name:'事件性质'
        },],
      };
    },
    methods: {},
  }
</script>
<style>
</style>