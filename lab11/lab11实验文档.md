## Lab11文档 
### Cookie and Session
#### Cookie:  
当用户使用浏览器访问网站时，WEB服务器会先发送些COOKIE小文件放在你的电脑上，
Cookie能够记录用户在该网站上打的字或者其他的一些选择；当该用户再次访问该网站时，
WEB服务器会先看看有没有它上次留下的Cookie文件，如果有的话，WEB服务器就会依据
用户本地存储的Cookie文件送出特定的网页内容给用户。

function：Cookie是客户端保存用户信息的一种机制，用来记录用户的一些信息，也是实现Session的一种方式。
根本作用就是在客户端存储用户访问网站的一些信息。

#####advantages：
1、数据持久性
2、不需要任何服务器资源，因为Cookie是存储在客户端并发送给服务器读取
3、可配置到期规则，控制Cookie的生命周期，使之不会永远有效，偷盗者可能拿到的是一个过期的Cookie
4、简单性，基于文件的轻量结构
5、通过良好的编程，控制保存在Cookie中的Session对象的大小
6、通过加密和安全传输技术（ssl），减少Cookie被破解的可能性
7、只要Cookie中不存放敏感的数据，即使被盗也不会有重大损失

#####disadvantages：
1.Cookie会被附加在每个HTTP请求中，所以无形中增加了流量。
2.由于在HTTP请求中的Cookie是明文传递的，所以安全性成问题。（除非用HTTPS）
3.Cookie的数量和长度都有限制，大小限制在4KB左右。对于复杂的存储需求来说是不够用的。
4.某些浏览器可能会禁用Cookie

#### Session:  
SESSION是一种服务器端的机制，当程序需要为某个客户端的请求创建一个session时，
服务器会优先检查该客户端的请求里是否已包含了一个session标识，即session id，
如果已包含则说明此前已经为该客户端创建过session，服务器就按照session id把
这个session检索出来，如果检索不到，就会新建一个session。

function：Session是在服务端保存的一个数据结构，用来跟踪用户的状态，这个数据可以保存在集群、数据库、文件中。
根本作用就是在服务端存储用户和服务器会话的一些信息。

#####advantages：
1.安全性高
2.不依赖浏览器端环境
3.高效性

#####disadvantages：
1.session会在一定时间内保存在服务器上。当访问增多，会占用较多服务器资源。


### Differences 
1、存放位置不同
Cookie保存在客户端，Session保存在服务端。
2 、存取方式的不同
 Cookie中只能保管ASCII字符串，假如需求存取Unicode字符或者二进制数据，需求先进行编码。Cookie中也不能直接存取Java对象。若要存储略微复杂的信息，运用Cookie是比拟艰难的。 
而Session中能够存取任何类型的数据，包括而不限于String、Integer、List、Map等。Session中也能够直接保管Java Bean乃至任何Java类，对象等，运用起来十分便当。能够把Session看做是一个Java容器类。 
3、安全性（隐私策略）的不同 
Cookie存储在浏览器中，对客户端是可见的，客户端的一些程序可能会窥探、复制以至修正Cookie中的内容。而Session存储在服务器上，对客户端是透明的，不存在敏感信息泄露的风险。 假如选用Cookie，比较好的方法是，敏感的信息如账号密码等尽量不要写到Cookie中。最好是像Google、Baidu那样将Cookie信息加密，提交到服务器后再进行解密，保证Cookie中的信息只要本人能读得懂。而假如选择Session就省事多了，反正是放在服务器上，Session里任何隐私都能够有效的保护。 
4、有效期上的不同 
只需要设置Cookie的过期时间属性为一个很大很大的数字，Cookie就可以在浏览器保存很长时间。 由于Session依赖于名为JSESSIONID的Cookie，而Cookie JSESSIONID的过期时间默许为–1，只需关闭了浏览器（一次会话结束），该Session就会失效。
5、对服务器造成的压力不同 
Session是保管在服务器端的，每个用户都会产生一个Session。假如并发访问的用户十分多，会产生十分多的Session，耗费大量的内存。而Cookie保管在客户端，不占用服务器资源。假如并发阅读的用户十分多，Cookie是很好的选择。
6、 跨域支持上的不同 
Cookie支持跨域名访问，例如将domain属性设置为“.baidu.com”，则以“.baidu.com”为后缀的一切域名均能够访问该Cookie。跨域名Cookie如今被普遍用在网络中。而Session则不会支持跨域名访问。Session仅在他所在的域名内有效。 

