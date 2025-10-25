Login page ui design link:https://dribbble.com/shots/15321022-Time-Tracking-Website-Login-Page
dashboard ui:https://dribbble.com/shots/15896572-Maino-Game-Dashboard;

برای قسمت بک اند:
json-server:برای ایجاد یک REST api (post,get,...) و
body-parser:برای خواندن دیتا از req.body,
jsonwebtoken:و برای ایجاد و اعتبارسنجی توکن‌
در قسمت بک اند برای login و فرستادن درخواست به api/auth/post از کاربر password,username گرفتم و اگر مطابقت داشت با مقادیر db.json {users} توکن ایجاد کرده و به فسمت پست ها هدایت میشه و در صورت وارد کردن مقادیر اشتباه خطای 400 ارسال میشه



برای گرفتن post ها  اول توکن بررسی میشه که هست یا نه اگر معتبر باشه با توجه به role اگر admin باشه 10 چست و اگر owner باشه 5 پست نشون داده میشه

برای قسمت فرانت:
هنگام وارد کردن username ,password درست موقع ورود موفق توکن ایجاد شده در localstorage ذخیره میشه و کاربر به صفحه posts هدایت میشه و 
برای کنترل ورود کاربر  از context اسفاده شده تا توکن رو مدیریت کنه و از صفحات محافظت بشه در صورت خطا