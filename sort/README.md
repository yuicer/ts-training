[sort]: https://zh.wikipedia.org/w/index.php?title=%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95#%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95%E5%88%97-{}-%E8%A1%A8

[排序][sort]

稳定的排序

- 冒泡排序（bubble sort）— O(n^{2})
- 插入排序（insertion sort）— O(n^{2})
- 鸡尾酒排序（cocktail sort）— O(n^{2})
- 桶排序（bucket sort）— O(n)；需要 O(k)额外空间
- 计数排序（counting sort）— O(n+k)；需要 O(n+k)额外空间
- 归并排序（merge sort）— O(n\log n)；需要 O(n)额外空间
- 原地归并排序— O(n\log^2 n)如果使用最佳的现在版本
  二叉排序树排序（binary tree sort）— O(n\log n)期望时间； O(n^{2})最坏时间；需要 O(n)额外空间
- 鸽巢排序（pigeonhole sort）— O(n+k)；需要 O(k)额外空间
- 基数排序（radix sort）— ；需要 O(n)额外空间
- 侏儒排序（gnome sort）— O(n^{2})
- 图书馆排序（library sort）— O(n\log n)期望时间； O(n^{2})
- 块排序（block sort）— O(n\log n)

不稳定的排序

- 选择排序（selection sort）— O(n^{2})
- 希尔排序（shell sort）— O(n\log^2 n)如果使用最佳的现在版本
- Clover 排序算法（Clover sort）— O(n)期望时间， O(n^{2})最坏情况
- 梳排序— O(n\log n)
- 堆排序（heap sort）— O(n\log n)
- 平滑排序（smooth sort）— O(n\log n)
- 快速排序（quick sort）— O(n\log n)期望时间， O(n^{2})最坏情况；对于大的、随机数列表一般相信是最快的已知排序
- 内省排序（introsort）— O(n\log n)
- 耐心排序（patience sort）— 最坏情况时间，需要额外的 O(n+k)空间，也需要找到最长的递增子序列（longest increasing subsequence）

不实用的排序

- Bogo 排序— ，最坏的情况下期望时间为无穷。
- Stupid 排序— O(n^{3});递归版本需要 O(n^{2})额外存储器
- 珠排序（bead sort）— O(n) 或 O({\sqrt {n}}),但需要特别的硬件
- 煎饼排序— O(n),但需要特别的硬件
- 臭皮匠排序（stooge sort）算法简单，但需要约 的时间
