# Lab8设计文档


## 轮播图实现思路

①任务一：因为wrap是绝对定位的，所以可以让图片左浮动实现占满一排，通过控制left和right值来控制图片的移动
②设置buttons的index初始值为0，即第一个span的class为on，然后点击next按钮时，index加1，当点击prev按钮时，inex减1， 并将当前index的小圆点的class为on
③任务二：可以先设定一个计时器，然后使用setInterval()创建自动播放函数，使用clearInterval()停止播放
④任务三：点击小圆点时，获取相应的i值，与index作比较后重新给wrap.style.left赋值，然后再把i值赋值给index来显示当前的小原点

## 可编辑表格实现思路

①设置可触发事件的标签只能是td，然后在td中插入input标签，并把当前td中的值赋给input
②用focus()聚焦后，再用selectionStart和selectionEnd即可实现光标在最前面
③用table-layout:fixed;来保证td不会随input加入而发生长度改变

