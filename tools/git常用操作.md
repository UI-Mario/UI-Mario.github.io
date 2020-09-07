推荐挺有意思的学习网站[try git](https://try.github.io/)

### 基础命令

- 初始化一个Git仓库：`git init`

- 添加到暂存区：

  ```
  git add .
  git add <filename>
  git add <folder>/
  ```

- 提交到本地仓库：`git commit -m <message>`

- 查看状态：`git status`

- 仓库版本号切换：`git reset --hard commit_id`

- 查看提交历史：`git log`

- 查看历史命令：`git reflog`

- 丢弃工作区的修改：`git checkout -- file`

- 添加到了暂存区，想丢弃修改：`git reset HEAD <file>`、``git checkout -- file``

### 远程操作

- 关联一个远程库：`git remote add origin git@server-name:path/repo-name.git`
- 第一次推送分支的所有内容：`git push -u origin branch-name`
- 之后每次提交：`git push`
- 克隆远程仓库：`git clone repo-address`
- 拉取远程分支的代码：`git pull`

### 分支操作

- 查看分支：`git branch`
- 创建分支：`git branch <name>`
- 切换分支：`git checkout <name>`或者`git switch <name>`
- 创建+切换分支：`git checkout -b <name>`或者`git switch -c <name>`
- 合并某分支到当前分支：`git merge <name>`

```
git merge <name> //会产生一个merge的commit记录
rebase:详见 https://backlog.com/git-tutorial/cn/stepup/stepup2_8.html
```

- 删除分支：`git branch -d <name>`
- 查看分支合并图：`git log --graph`

### stash 操作

- 将当前修改放到堆栈中：`git stash save <message>` 或`git stash`
- 查看 stash 了哪些存储：`git stash list`
- 恢复最近一次 stash 的存储（会删除）：`git stash pop`
- 恢复指定的存储代码（会删除）：`git stash pop stash@{index}`
- 恢复最近一次 stash 的存储（不会删除）：`git stash apply`
- 恢复指定的存储代码（不会删除）：`git stash apply stash@{index}`
- 显示最近一次的 stash 的存储做了哪些改动：` git stash show `
- 显示指定的 stash 的存储做了哪些改动：` git stash show stash@{index}`
- 删除指定的 stash：`git stash drop stash@{index}`
- 删除所有缓存的stash：`git stash clear`

### tag 操作

- 新建一个标签，默认为`HEAD`，也可以指定一个commit id：`git tag <tagname>`
- 指定标签信息：`git tag -a <tagname> -m "blablabla..."`
- 查看所有标签：`git tag`
- 推送一个本地标签：`git push origin <tagname>`
- 推送全部未推送过的本地标签：`git push origin --tags`
- 删除一个本地标签：`git tag -d <tagname>`
- 删除一个远程标签：`git push origin :refs/tags/<tagname>`
- 从指定的标签拉取一个分支出来：`git branch <new-branch-name> <tag-name> `