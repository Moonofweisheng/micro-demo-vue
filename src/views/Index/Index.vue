<template>
  <!-- 此处为布局容器组件，由layouts目录引入，可以选择切换不同的布局 -->
  <basic-layout>
    <!-- 页面header 开始 -->
    <template slot="header">
      <div class="header-left">
        <img src="@/assets/logo.png" class="header-left-logo" />
        <span>Fant Admin</span>
      </div>
      <el-dropdown class="header-right" trigger="click" @command="doLogout">
        <div class="user-name">
          <img src="@/assets/img/common/ic_portrait@2x.png" class="user-name-icon" />
          <span>小星星</span>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </template>
    <!-- 页面header 结束 -->

    <!-- 侧边导航 开始 -->
    <template slot="sider">
      <el-menu
        :unique-opened="false"
        :default-active="activeMenu"
        background-color="#242633"
        text-color="#79879E"
        active-text-color="#FFFFFF"
      >
        <div v-for="(item, key) in menus" :key="key">
          <router-link :to="item.url" v-if="item.children.length === 0">
            <el-menu-item :index="item.index" ref="menuItem">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.name }}</span>
            </el-menu-item>
          </router-link>
          <el-submenu :index="item.index" v-else>
            <template slot="title">
              <i :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <router-link v-for="(submenu, key) in item.children" :key="key" :to="submenu.url">
              <el-menu-item :index="submenu.index" ref="menuItem">
                <span slot="title">{{ submenu.name }}</span>
              </el-menu-item>
            </router-link>
          </el-submenu>
        </div>
      </el-menu>
    </template>
    <!-- 侧边导航 结束 -->

    <!-- 容器主体 -->
    <template slot="main">
      <keep-alive>
        <transition name="fade-transform" mode="out-in">
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </transition>
      </keep-alive>
      <transition name="fade-transform" mode="out-in">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
    </template>
  </basic-layout>
</template>

<script lang="ts" src="./Index.ts"></script>

<style lang="scss" scoped>
.header-left {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: $--color-text-primary;
  .header-left-logo {
    height: 32px;
    margin-right: 10px;
  }
}
.header-right {
  .user-name {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: $--color-text-primary;
    .user-name-icon {
      height: 38px;
      margin-right: 10px;
    }
  }
}
a {
  text-decoration: none !important;
}
</style>
