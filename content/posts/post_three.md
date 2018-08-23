---
title: "10 طرق string فالجافاسكريبت لازم تعرفهم"
cover: "https://cdn-images-1.medium.com/max/800/0*i3sP64Go9KVVIne-."
date: "29/07/2018"
category: "tech"
type: "post"
lesson: 1
chapter: 3
tags:
    - programming
    - javscript
---

في هذا المقال باش نلخصلكم 10 طرق string فالجافاسكريبت لازم على الأقل تعرفهم بالنسبة ليا 

String هي أي حاجة في وسط فاصلة عليا فردية أو مزدوجة. هيا نخليكم مع العشر طرق : 
### 1. startsWith()
تثبت إذا كان String يبدأ بحرف (أحرف) محددة.
```javascript
  const str = 'JavaScript is amazing';

  console.log(str.startsWith('JavaScript')); // true
  console.log(str.startsWith('Java')); // true
  console.log(str.startsWith('javascript')); // false

  // البلاصة اختيارية 
  // كان ما تحط شي ، القيمة المبدئية باش تكون 0 
  console.log(str.startsWith('Script', 4)); // true
  console.log(str.startsWith('SCRIPT', 4)); // false
```

### 2. endsWith()
تثبت إذا كان String يوفا بحرف (أحرف) محددة.

```javascript
  const str = 'JavaScript is amazing';

  // تثبت إذا كان يوفا ب 'amazing'
  console.log(str.endsWith('amazing')); // true
  console.log(str.endsWith('ing')); // true
  console.log(str.endsWith('Amazing')); // false

  // تحديد الطول إختياري 
  // كان ما تمش تحديدو فإنو القيمة المبدئية باش تكون طول الString
  console.log(str.endsWith('is', 13)); // true
  console.log(str.endsWith('i', 13)); // false
  console.log(str.endsWith('s', 13)); // true
```

### 3. includes()
تثبت إذا كان String  فيه حرف أو حروف  محددة.

```javascript
  const str = 'JavaScript is amazing';

  console.log(str.includes('Script')); // true
  console.log(str.includes('script')); // false
  console.log(str.includes(' ')); // true
  console.log(str.includes('array')); // false
```
### 4. slice()
ينسخ جزء من String بدون تعديل الأصلي.

```javascript
  const str = 'JavaScript is amazing';

  // القيمة المبدئية هي 0  
  console.log(str.slice()); // 'JavaScript is amazing'

  // بدء النسخ من  الفهرس 4
  console.log(str.slice(4)); // 'Script is amazing'

  // نهاية نسخ في الفهرس  10 (لن يتم إدراج الحرف في هذا المؤشر)
  console.log(str.slice(0, 10)); // 'JavaScript'
```
### 5. toUpperCase()
تحويل String  إلى حروف كبيرة 

```javascript
  const str = 'JavaScript is amazing';

  console.log(str.toUpperCase()); // 'JAVASCRIPT IS AMAZING'
```
### 6. toLowerCase()
تحويل String  إلى حروف صغيرة 
```javascript
  const str = 'JavaScript is amazing';

  console.log(str.toLowerCase()); // 'javascript is amazing'
```
### 7. charAt()
يرجع الحرف في موضع معين

```javascript
  const str = 'JavaScript is amazing';

  console.log(str.charAt()); // 'J'
  console.log(str.charAt(11)); // 'i'
  console.log(str.charAt(14)); // 'a'
  console.log(str.charAt(110)); // ''
```
### 8. split()
يقسم String إلى مجموعة فرعية 

```javascript
  const str = 'JavaScript is amazing';
  const strNew = 'JavaScript-is-amazing';

  console.log(str.split()); // ["JavaScript is amazing"]

  // يتم تحديد مكان التقسيم بواسطة String إلي بين قوسين 
  console.log(str.split('S')); // ["Java", "cript is amazing"]
  console.log(str.split('is')); // ["JavaScript ", " amazing"]
  console.log(str.split(' ')); // ["JavaScript", "is", "amazing"]
  console.log(strNew.split('-')); // ["JavaScript", "is", "amazing"]
```
### 9. replace()
يستبدل القيمة المحددة بقيمة أخرى

```javascript
const str = 'JavaScript is amazing';

  console.log(str.replace('JavaScript', 'Node.js')); // 'Node.js is amazing'

  // طريقة replace() تتأثر بكبر الحرف 
  // كما تشوفو مش باش تخدم لنا 
  console.log(str.replace('Javascript', 'Node.js')); // 'JavaScript is amazing'

  // تنجم تستعمل regular expression باش ما تتأثرش بكبر الحرف 
  console.log(str.replace(/Javascript/i, 'Node.js')); // 'Node.js is amazing'

  // الطريقة هذا تبدل كان أول حاجة كيف كيف 
  console.log(str.replace('a', 'A')); // 'JAvaScript is amazing'

  // كان تحب تبدل أي حاجة متطابقة تنجم تستعمل regular expression 
  console.log(str.replace(/a/g, 'A')); // 'JAvAScript is AmAzing'
```
### 10. repeat()
إرجاع String جديد مع عدد محدد من النسخ 

```javascript
 const str = 'JavaScript';

  console.log(str.repeat(3)); // 'JavaScriptJavaScriptJavaScript'
  console.log(str.repeat(1)); // 'JavaScript'
  console.log(str.repeat(0)); // ''
```


مترجم بتصرف عن : 

https://dev.to/frugencefidel/10-javascript-string-methods-you-should-know-4l76