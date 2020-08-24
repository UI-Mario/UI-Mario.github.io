不规则三角网（Triangulated Irregular Network，TIN）在表示地形的形态方面具有较好的表现，其生成算法一直备受关注。Delaunay三角剖分生成的网格正则性好，因此在实际工程计算中应用很广。生成 Delaunay 三角网格的方法中，目前大都基于 Bowyer-Watson法，它是一种逐点插入法，基本思路是 ：先由给定的点集生成一初始网格，再根据 Delaunay 剖分原理，逐次向网格内加点 ,并重新连接生成新网格，直到所有点添加完毕。

下面我们就该算法的思路、步骤进行解析。

### 基本思想：

1. 假定已生成了连接若干个顶点的 Delaunay 三角网格
2. 加入一个新的节点，找出所有外接圆包含新加入节点的三角形，并将这些三角形删除，形成一个空腔
3. 空腔的节点与新加入的节点连接，形成新的 Delaunay 三角形网格
4. 不断循环直到遍历完所有点

示意图如下：

[![img](https://img-blog.csdnimg.cn/20190525184106410.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4NjczMzUw,size_16,color_FFFFFF,t_70)](https://img-blog.csdnimg.cn/20190525184106410.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4NjczMzUw,size_16,color_FFFFFF,t_70)

[![img](https://img-blog.csdnimg.cn/20190525182457784.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4NjczMzUw,size_16,color_FFFFFF,t_70)](https://img-blog.csdnimg.cn/20190525182457784.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4NjczMzUw,size_16,color_FFFFFF,t_70)

通过上述思路我们总结出算法需要解决的几大问题：

1. 初始格网的生成
2. 新增点所影响三角形的查找
3. 空腔的生成

下面我们就这些问题提出解决方法。

我们可以通过显示窗口的四个顶点来生成*包含所有离散点*的两个三角形，算法结束后删除就好，如图

[![img](https://img-blog.csdnimg.cn/20190525183315707.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4NjczMzUw,size_16,color_FFFFFF,t_70)](https://img-blog.csdnimg.cn/20190525183315707.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4NjczMzUw,size_16,color_FFFFFF,t_70)

而外接圆包含新增点的三角形，这里我们称为坏三角形，坏三角形的查找是本算法的核心。

一般来说，如果采用暴力遍历的方法，随着算法后面三角格网的复杂度不断增加，坏三角形的查找也会变得越来越困难。所以我们希望可以有方法加速这一进程，但这里我们不做讨论，因为我没有实际运用。没错我的算法很暴力。

那么问题来了，新增点的坏三角形可能不止一个，如果要一直遍历出所有坏三角，就算是我也没暴力到这种程度。

这里我们发现，如果一个三角形是坏三角，那么它邻接的三角肯定有两个也是坏三角。那么我们可以通过构建一个三角形邻接表，找到一个坏三角就等于找到了一圈坏三角。

```
self.coords.append(p)

# 计算外接圆包括p点的三角（坏三角形）
bad_triangles = []
for T in self.triangles:
    # 距离跟半径的比较
    if self.inCircle(T, p):
        bad_triangles.append(T)

# 空腔边缘。
boundary = []
T = bad_triangles[0]
edge = 0
while True:
    # 检查三角形T的边缘是否在boundary里...
    tri_op = self.triangles[T][edge]
    if tri_op not in bad_triangles:
        boundary.append((T[(edge+1) % 3], T[(edge-1) % 3], tri_op))
        edge = (edge + 1) % 3
        # 是否找完一圈
        if boundary[0][0] == boundary[-1][1]:
            break
    else:
        # 下一条边
        edge = (self.triangles[tri_op].index(T) + 1) % 3
        T = tri_op

# delete删除，删出一个空洞
for T in bad_triangles:
    del self.triangles[T]
    del self.circles[T]
```

代码中boundary即是图中绿色空腔边缘。删掉所有坏三角形成空腔，再通过空腔边缘与新增点形成新的三角格网完成更新，当然不要忘了更新各种附加数据。

[![img](https://img-blog.csdnimg.cn/20190525190154662.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4NjczMzUw,size_16,color_FFFFFF,t_70)](https://img-blog.csdnimg.cn/20190525190154662.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4NjczMzUw,size_16,color_FFFFFF,t_70)

最终效果图如下，右方的括号内是三角形顶点点号

[![img](https://img-blog.csdnimg.cn/20190525190910140.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4NjczMzUw,size_16,color_FFFFFF,t_70)](https://img-blog.csdnimg.cn/20190525190910140.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM4NjczMzUw,size_16,color_FFFFFF,t_70)

源码地址：https://github.com/UI-Mario/Create-TIN