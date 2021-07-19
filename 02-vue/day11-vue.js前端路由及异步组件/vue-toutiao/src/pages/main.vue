<template>
    <article>
        <component
            v-bind:is="page"
            v-bind:tabs="tabs"
            v-bind:curTab.sync="curTab"
            v-on:switchTab="switchTab"
            v-on:more="showMoreTab"
        >
            <!-- 单个tab的内容 -->
            <template v-slot:content="{list}">
                <component
                    v-for="item in list"
                    v-bind:is="item.type | formatComponentName"
                    v-bind="item.data"
                >
                </component>
            </template>
        </component>
    </article>
</template>

<script>
/**
 * @file feed流主页面
 * @author kyod
 */
import * as components from '../components/items/index';
import Tab from '../components/tab.vue';
import Loading from '../components/loading.vue';
import Setting from '../pages/setting.vue';
import {TABS} from '../config';

const convertPlainObject = obj => Object.keys(obj).reduce((res, key) => (res[key] = obj[key], res), {});

// 场景切换
export default {

    components: {
        Tab,
        Setting,
        ...convertPlainObject(components)
    },

    filters: {
        formatComponentName: componentName => componentName
            .replace(/^\w/g, name => name.toUpperCase())
    },

    data() {
        const constructTabs = tabs => {
            let result = {};
            for (let name in tabs) {
                result[name] = {
                    label: tabs[name],
                    index: 0,
                    list: []
                };
            }
            return result;
        };

        return {
            content: '这是一个vue的页面',
            listData: [],
            page: 'tab',
            curTab: 'agriculture',
            tabs: constructTabs(TABS)
        };
    },

    created() {
        this.getListData(this.curTab)
            .then(listData => {
                this.setTabsData(this.curTab, {
                    list: listData
                });
            });
        this.$watch('curTab', newTab => {
            this.switchTab(newTab);
        });
    },

    methods: {

        onReachBottom() {
            this.getListData(this.curTab)
                .then(listData => {
                    this.setTabsData(this.curTab, {
                        list: this.tabs[this.curTab].list.concat(listData)
                    });
                });
        },

        getListData(tabName) {

            const tab = this.tabs[this.curTab];

            return fetch(
                `/list?tab=${tabName}&index=${tab.index}`
            )
            .then(res => res.json())
            .then(res => res.data);
        },

        setTabsData(tabName, data) {
            this.$set(this.tabs, tabName, {
                ...this.tabs[tabName],
                ...data
            });
        },

        switchTab(tabName) {
            this.curTab = tabName;
            if (!this.tabs[tabName].list.length) {
                this.getListData(tabName)
                    .then(listData => {
                        this.setTabsData(this.curTab, {
                            list: listData
                        });
                    });
            }
        },

        showMoreTab(event) {
            if (event === 'hide') {
                this.page = 'tab';
            }
        }
    }
};
</script>
