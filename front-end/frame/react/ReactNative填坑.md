# Error: ENOSPC: System limit for number of file watchers reached

在使用React Native做开发时，执行react-native start时弹出如上错误

意思是系统对文件监控的数量已经到达限制数量了。



解决方法：修改限制数量

系统：Ubuntu

执行命令：

**plain**



```
sudo gedit /etc/sysctl.conf
```

会打开一个目录，这里面都是一些内核参数，添加一行在最下面

**plain**



```
fs.inotify.max_user_watches=524288
```

保存退出后，执行

**plain**



```
sudo sysctl -p
```

查看是否修改成功，若出现你写在最下面的那一行代码，则修改成功。

# Task :app:installDebug FAILED,Deprecated Gradle features were used in this build, making it incompatible with Gradle 6.0.

一般来说，你真机没连上而已。如果后面有具体报错信息，那慢慢改吧

# 通过react-native-splash-screen设置启动图片

跟着github上的官方指导做了半天，卡死在一个地方：

`MainApplication.java`：

**java**



```
//以前版本的reactnative
@Override
protected List<ReactPackage> getPackages() {
    return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
    new SplashScreenReactPackage()  //here
    );
}
```

**java**



```
//我的react-native --version =>0.615
@Override
protected List<ReactPackage> getPackages() {
  @SuppressWarnings("UnnecessaryLocalVariable")
  List<ReactPackage> packages = new PackageList(this).getPackages();
  // Packages that cannot be autolinked yet can be added manually here, for example:
  // packages.add(new MyReactNativePackage());
  return packages;
}
```

至今没搞懂这是啥，暂且留着，以后学得差不多了再回来看吧。

我的步骤：

## 安装

```
yarn add react-native-splash-screen
```

我的会自动link，就不需要手动link了。

## 配置Android

修改`MainActivity.java`文件

**java**



```
...
+ import android.os.Bundle;
+ import org.devio.rn.splashscreen.SplashScreen;//导入相关包
...
public class MainActivity extends ReactActivity {
...
+    @Override
+    protected void onCreate(Bundle savedInstanceState) {
+       SplashScreen.show(this);   //show(this,true)隐藏statusBar
+       super.onCreate(savedInstanceState);
+    }
}
```

在`android/app/src/main/res/layout`文件夹下创建启动页的`launch_screen.xml`文件，如果没有layout文件夹就自己建一个。

`launch_screen.xml`:

**xml**



```
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout xmlns:android="http://schemas.android.com/apk/res/android"
  android:orientation="vertical" android:layout_width="match_parent"
  android:layout_height="match_parent"
  android:background="@mipmap/launch_screen"> //设置启动页图片位置
</LinearLayout>
```

上面那一行代码的`@mipmap`指的是你放图片的文件夹的名字，这里我们是直接把RN自动生成放app图标的文件夹拿来用了，当然你也可以自己创建`@launch`之类的，不过为了适配不同显示器得创建很多文件夹，有点麻烦。

而那行`launch_screen`就是你的图片名，改完名放进文件夹。

修改`android/app/src/main/res/values/styles.xml`文件，解决启动白屏一闪而过

**xml**



```
<resources>
  <!-- Base application theme. -->
  <style name="AppTheme" parent="Theme.AppCompat.Light.NoActionBar">
+   <item name="android:windowIsTranslucent">true</item>
  </style>
</resources>
```

除此之外，虽然我们解决了启动屏的问题，但是存在小瑕疵：

[![img](https://s2.ax1x.com/2019/12/13/QgKBkT.jpg)](https://s2.ax1x.com/2019/12/13/QgKBkT.jpg)[![img](https://s2.ax1x.com/2019/12/13/QgK61J.jpg)](https://s2.ax1x.com/2019/12/13/QgK61J.jpg)

很明显我们希望隐藏掉手机屏幕上方的状态栏，让图片可以全屏显示。这里由于我不会安卓开发，也尝试过很多方法，最终用一种**很蛋疼**的方式实现了这个效果，即改变状态栏底色，改成白色就正好看不见，最终效果如下：

[![img](https://s2.ax1x.com/2019/12/13/QgM658.jpg)](https://s2.ax1x.com/2019/12/13/QgM658.jpg)[![img](https://s2.ax1x.com/2019/12/13/QgK61J.jpg)](https://s2.ax1x.com/2019/12/13/QgK61J.jpg)

后面再慢慢填这个坑吧

## 配置React-Native

`app.js`:

**javascript**



```
...
import SplashScreen from 'react-native-splash-screen'
...
export default class App extends Component {
  ...
  componentDidMount(){
    setTimeout(()=>{SplashScreen.hide()}, 3000,);//3秒后消失
  };
```

# react-native-swiper

为了使用轮播图导入了这个第三方库，但是出现一个莫名其妙的bug：

[![img](https://ftp.bmp.ovh/imgs/2019/12/f67cb71d86405f44.jpg)](https://ftp.bmp.ovh/imgs/2019/12/f67cb71d86405f44.jpg)

可我没用这个viewpageandroid啊，而且看github上两个月前还在更新，应该不存在过时的说法，也没有搜到跟我类似的问题，很郁闷。

***update\***

在github的issue里找到了方法：

> I removed 1.5.14 (`yarn remove react-native-swiper`) then installed the nightly with `yarn add react-native-swiper@nightly` and it’s working on Android now.

# Requiring unknown module “xxx”

之前去掉了一个没用的三方库

```
yarn remove teaset
```

就跳出了这个问题，解决方法也很简单

```
npm start
```