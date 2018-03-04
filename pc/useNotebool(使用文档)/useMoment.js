/**
 * *************************关于momen.js处理日期格式的使用方法****************************
1.获取当前时间： this.$moment().format('MMMM Do YYYY, h:mm:ss a'); // 十一月 25日 2017, 5:59:27 下午;
   （1）将毫秒数转为年月日格式：
            this.$moment(1411572969).format('YYYY-MM')  //1970-01
            this.$moment().format('YYYY-MM') //保留年月；
            this.$moment().format('YYYY-MM-DD') //保留年月日；
            this.$moment().format('YYYY-MM-DD HH:mm:ss') //保留年月日 时分秒；
            this.$moment().format(' HH:mm') //保留时分；
            //其他同理，根据使用情况保留；
    （2）获取今天是周几：
            this.$moment().format('d') //6  $moment()中可以传参数，例如$moment(1411572969) 获取当前是周六。
    （3）将当前时间转换成毫秒：
            this.$moment().format('X');
            this.$moment('2017-12-23 12:3:5').format('X') //获取毫秒1514001785
    （4）20130201相对当前日期是2年前：
             this.$moment("20130201", "YYYYMMDD").fromNow(); //2 years ago
    （5）9小时后的时间
             this.$moment().add('hours',9).format('HH:mm:ss');



                                               日期格式化

            this.$this.$moment().format('MMMM Do YYYY, h:mm:ss a');        // 十一月 25日 2017, 6:26:55 晚上
            this.$moment().format('dddd');                      // 星期六
            this.$moment().format("MMM Do YY");                 // 11月 25日 17
            this.$moment().format('YYYY [escaped] YYYY');       // 2017 escaped 2017
            this.$moment().format();                            // 2017-11-25T18:26:55+08:00
            相对时间
            this.$this.$moment("20111031", "YYYYMMDD").fromNow(); // 6 年前
            this.$moment("20120620", "YYYYMMDD").fromNow();      // 5 年前
            this.$moment().startOf('day').fromNow();             // 18 小时前
            this.$moment().endOf('day').fromNow();               // 6 小时内
            this.$moment().startOf('hour').fromNow();            // 27 分钟前
            日历时间
            this.$moment().subtract(10, 'days').calendar();       // 2017年11月15日
            this.$moment().subtract(6, 'days').calendar();        // 上周日晚上6点26
            this.$moment().subtract(3, 'days').calendar();        // 本周三晚上6点26
            this.$moment().subtract(1, 'days').calendar();        // 昨天晚上6点26分
            this.$moment().calendar();                            // 今天晚上6点26分
            this.$moment().add(1, 'days').calendar();             // 明天晚上6点26分
            this.$moment().add(3, 'days').calendar();             // 下周二晚上6点26
            this.$moment().add(10, 'days').calendar();            // 2017年12月5日
            多语言支持
            this.$moment().format('L');    // 2017-11-25
            this.$moment().format('l');    // 2017-11-25
            this.$moment().format('LL');   // 2017年11月25日
            this.$moment().format('ll');   // 2017年11月25日
            this.$moment().format('LLL');  // 2017年11月25日晚上6点26分
            this.$moment().format('lll');  // 2017年11月25日晚上6点26分
            this.$moment().format('LLLL'); // 2017年11月25日星期六晚上6点26分
            this.$moment().format('llll');
                             详见   Moment.js中文网
1.大小写转换
3.number格式化
4.currecy货币格式化
5.date格式化
6.filter查找
7.limitTo 字符串或对象的截取
8.orderBy 对象排序
*/
