> https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status

- 信息响应-----1xx
- 成功响应-----2xx
- 重定向--------3xx
- 客户端错误--4xx
- 服务端错误--5xx

# 1xx

- 100 Continue

# 2xx

- 200 OK

  请求成功，具体成功时的状态取决于HTTP方法：

  - GET：资源已被提取并在消息正体中传输
  - 

# 3xx

- 301 Moved Permanently

- 302 Found

  请求的资源现在临时从不同的URI响应请求。这样的重定向是临时的，客户端应当继续向原地址发送以后请求

- 307

- 308

  307、308这俩兄弟跟上面301、302简直把我看蒙了

# 4xx

- 400 Bad Request

  - 语义有误，当前请求无法被服务器理解。除非进行修改，否则客户端不应该重复提交这个请求
  - 请求参数有误

- 403 Forbidden

  服务器已理解请求，但拒绝执行。也不应被重复提交

- 406 Not Acceptable

  请求的资源的内容特性无法满足请求头中的条件，因而无法生成响应实体。

- 408 Request Timeout

# 5xx

- 500 Internet Server Error

  服务器遇到了不知道如何处理的情况

- 503 Service Unavailable

