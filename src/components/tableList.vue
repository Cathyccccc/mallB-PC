<template>
  <a-table
    :columns="columns"
    :data-source="filterData"
    :pagination="page"
    @change="changePage"
  >
    <a slot="operate" slot-scope="text, record">
      <a-button @click="editProduct(text, record)">编辑</a-button>
      <a-button @click="removeProduct(text, record)">删除</a-button>
    </a>
  </a-table>
</template>
<script>
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
    width: 150,
  },
  {
    title: '描述',
    dataIndex: 'desc',
    key: 'desc',
    ellipsis: true,
  },
  {
    title: '类目',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: '预售价格',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '折扣价格',
    dataIndex: 'price_off',
    key: 'price_off',
  },
  {
    title: '标签',
    dataIndex: 'tags',
    key: 'tags',
  },
  {
    title: '限制购买数量',
    dataIndex: 'inventory',
    key: 'inventory',
  },
  {
    title: '上架状态',
    dataIndex: 'status',
    key: 'status',
    customRender: (text, record) => (record.status === 1 ? '上架' : '下架'),
  },
  {
    title: '操作',
    dataIndex: 'operate',
    key: 'operate',
    scopedSlots: { customRender: 'operate' },
    width: 200,
  },
];

export default {
  data() {
    return {
      columns,
    };
  },
  props: ['data', 'categoryList', 'page'],
  computed: {
    filterData() {
      return this.data.map((item) => {
        const i = item;
        this.categoryList.forEach((category) => {
          if (category.id === item.category) {
            i.category = category.name;
          }
        });
        return {
          ...item,
          key: item.id,
        };
      });
    },
  },
  methods: {
    editProduct(text, record) {
      // console.log(record);
      this.$emit('edit', record);
    },
    removeProduct(text, record) {
      // console.log(text, record);
      this.$emit('remove', record);
    },
    changePage(page) {
      // console.log(page);
      this.$emit('change', page);
    },
  },
};
</script>
