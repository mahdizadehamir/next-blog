export const generateMetadata = ({ pramas }) => {
  return {
    title: 'درباره وبلاگ',
    description: 'حیطه کاری وبلاگ',
  };
};
function About() {
  return (
    <main className="container mx-auto px-4 py-8">
      <section className="bg-slate-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">معرفی وبلاگ</h2>
        <p className="mb-4">
          وبلاگ ما به عنوان یک منبع معتبر برای مطالب متنوع در حوزه‌های مختلف مانند تکنولوژی، فرهنگ،
          هنر و موضوعات روزمره ایجاد شده است. هدف ما ارائه محتوای باکیفیت و به‌روز به مخاطبان
          فارسی‌زبان است.
        </p>
        <h2 className="text-2xl font-semibold mb-4">چرا وبلاگ ما؟</h2>
        <ul className="list-disc list-inside mb-4">
          <li>مطالب معتبر و تحقیقی</li>
          <li>به‌روزرسانی‌های منظم</li>
          <li>پوشش موضوعات متنوع</li>
          <li>رعایت اصول اخلاقی و حرفه‌ای</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-4">اهداف ما</h2>
        <p className="mb-4">
          ما به دنبال ایجاد یک جامعه پویا و آگاه هستیم که بتواند از طریق اطلاعات دقیق و تحلیل‌های
          کارشناسانه تصمیم‌گیری‌های بهتری داشته باشد. همچنین، به ترویج فرهنگ مطالعه و تبادل افکار و
          تجربیات می‌پردازیم.
        </p>
        <h2 className="text-2xl font-semibold mb-4">تیم ما</h2>
        <p>
          تیم ما شامل نویسندگان، پژوهشگران و متخصصانی است که با تعهد و علاقه به تولید محتوای باکیفیت
          می‌پردازند. هر یک از اعضای تیم با توجه به تخصص و تجربه خود، به غنای محتوای وبلاگ کمک
          می‌کنند.
        </p>
      </section>
    </main>
  );
}

export default About;
