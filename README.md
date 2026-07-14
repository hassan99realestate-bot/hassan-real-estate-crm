# 🏢 Hassan Real Estate CRM

نظام إدارة علاقات العملاء المتخصص لشركات العقارات في أبوظبي

## ✨ الميزات الرئيسية

- 👥 **إدارة العملاء** - تتبع شامل لجميع العملاء والمشترين
- 🏗️ **إدارة المشاريع** - قاعدة بيانات جميع المشاريع العقارية
- 📞 **نظام المتابعات** - تنبيهات تلقائية للمكالمات والاجتماعات
- 📊 **لوحة التحكم** - إحصائيات وتقارير شاملة
- 🔐 **نظام المستخدمين** - حماية البيانات بكلمات المرور
- 🎯 **تصنيف العملاء** - VIP، جاهز للشراء، قيد التفاوض
- 📱 **واجهة حديثة** - تصميم احترافي وسهل الاستخدام

## 🛠️ التقنيات المستخدمة

- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Frontend**: React + Tailwind CSS
- **Authentication**: JWT

## 📦 التثبيت

```bash
# Clone the repository
git clone https://github.com/hassan99realestate-bot/hassan-real-estate-crm.git

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start the server
npm start
```

## 📖 التعليمات

### تشغيل الخادم
```bash
npm start
```

### تشغيل في بيئة التطوير
```bash
npm run dev
```

## 🚀 البدء السريع

1. قم بإنشاء قاعدة بيانات MongoDB
2. أضف رابط MongoDB في ملف `.env`
3. قم بتشغيل `npm install`
4. قم بتشغيل `npm start`
5. سيكون السيرفر جاهزاً على `http://localhost:5000`

## 📝 API Endpoints

### العملاء
- `GET /api/clients` - الحصول على جميع العملاء
- `POST /api/clients` - إضافة عميل جديد
- `PATCH /api/clients/:id` - تحديث بيانات العميل
- `DELETE /api/clients/:id` - حذف عميل

### المشاريع
- `GET /api/projects` - الحصول على جميع المشاريع
- `POST /api/projects` - إضافة مشروع جديد

### المتابعات
- `GET /api/follow-ups` - الحصول على جميع المتابعات
- `POST /api/follow-ups` - إضافة متابعة جديدة

## 👨‍💼 الدعم

للدعم والاستفسارات: hassan99realestate@gmail.com

## 📄 الترخيص

هذا المشروع مرخص تحت MIT License
