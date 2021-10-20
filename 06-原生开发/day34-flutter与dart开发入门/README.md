# flutter 与dart 开发入门

## Flutter

### Flutter 开发环境配置

* <https://flutterchina.club/setup-macos/>
* flutter doctor -v

## Dart 入门

### 变量声明1

```dart
var name = 'JavaScritp';
var num1= 123;
var num2 = 1.23;

String name = 'Dart';
int num1 = 123;
double num2 = 1.23;
num1 = num2 // error
num2 = num1 // error
num numDouble = 2.2;
num numInt = 1;
num1 = numDouble // error
```

### 变量声明2

```dart
const TIME_SECOND = 1000;
const userId = "123456";
```

```dart
const TIME_SECOND= 1000;
final userId = "123456";
// const 表达编译期的不可变，用全大写的蛇足命名规范
// final 表达运行时的不可变，用驼峰命名规范，多用于 function 和 class 中
```

### 变量声明3

```dart
var str = 'a';
str = 'b';
str = 123;
```

```dart
var str = 'a';
str = 'b'; // ok
str = 123; // error

dynamic str = 'a';
str = 'b';
str = 123; // ok
```

### 条件判断

```dart
let condition; // undefined

if (condition) { } // false
```

```dart
var condition; // null
if (condition) { } // true

if (condition != null) { } // false
```

### 字符串拼接

```dart
let minutes = 2;

console.log(`remain ${minutes} minutes`);
// remain 2 minutes

```

```dart
var minutes = 2;

print(`remain $minutes minutes`);
// remain 2 minutes
```

### List

```dart
const a  = [1, 3];
a.push(4); // [1,3,4]
a.splice(1, 0, 2); // [1,2,3,4]
a.indexOf(2); // 1
a.length // 4
a[0] // 1
a[a.length - 1] // 4
```

```dart
List<int> a = [1, 3];
a.add(4); // [1,3,4]
a.insert(1, 2); // [1,2,3,4]
a.indexOf(2); // 1
a.length // 4
a.first // 1
a.last // 4
```

### 函数

```dart
function fn() {
}

const fn = () => {
}
```

```dart
bool isValid() {
}

bool isValid() => false;

main() {
}
```

### Class

```dart
class Person {
  constructor({ name, age }) {
    this.name = name;
    this.age = age;
  }
  print() {
     console.log(`${this.name}, ${this.age}`);
  }
}
```

```dart
class Person {
  String name;
  int age;
  Person({ this.name, this.age });
  void print() => ‘$name, $age’;
}

Person p = Person(name: ‘John’, age: 12);
```

### 日志

```dart
console.log('foo');
```

```dart
print('foo');

class Foo {
  String toString() => “foo”;
}

Foo f = Foo();
print(f); // foo
```

### 异步

```dart
const url = ‘xxx’;
fetch(url)
  .then(response => response.json())
  .then(data => {
  });
```

```dart
import 'dart:convert';
import 'package:http/http.dart' as http;
```

```dart
Future<String> fetchData() {
  http.get(url)
    .then(response => jsonDecode(response.body))
    .then((data) {
      // handle data
    });
}
```

### Async/Await

```dart
const url = 'xxx';
const res = await fetch(url);
const data = await res.json();
// handle data
```

```dart
Future<String> fetchData() async {
  final url = 'xxx';
  final res = await http.get(url);
  final data = jsonDecode(res.body);
  return ‘ok’;
}
```

## Flutter 组件 *vs* RN 组件

```jsx
const MyCard = (props) => {
  return (
    <View>
      <Text>Card</Text>
      <Button
        title=“press”
        onPress={() => { props.onPress(); }}
    </View>
  )
}

<MyCard onPress={() => {}} />
```

```jsx
class MyCard extends StatelessWidget {
  MyCard({ @required this.onPress });
  final Function onPress;
  @override
  Widget build() {
    return Card(
      child: Column(
        children: <Widget>[
          Text(‘Card’),
          FlatButton(
            child: Text(‘Press’),
            onPressed: this.onPress,
          ),
        ],
      ),
    );
  }
}
MyCard(onPress: () {})
```

## Flutter package

<https://pub.dev/>

pubspec.yaml - dependencies
flutter pub get

```dart
import "package:xxx.dart"
```

## Flutter 演示
