import { Metadata } from "next";

export const metadata: Metadata = { title: "Kullanım Koşulları" };

export default function KullanimKosullariPage() {
  return (
    <main className="pt-32 pb-20 section-padding bg-cream">
      <div className="container-wide mx-auto max-w-3xl">
        <h1 className="text-4xl font-black text-ink mb-2">Kullanım Koşulları</h1>
        <p className="text-ink/40 text-sm mb-10">Son güncelleme: Haziran 2025</p>
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-soft space-y-8 text-ink/70 leading-relaxed">
          {[
            { title: "1. Kabul", content: "Rescued platformunu kullanarak bu koşulları kabul etmiş olursunuz. Koşulları kabul etmiyorsanız platformu kullanmayınız." },
            { title: "2. Hizmet Tanımı", content: "Rescued; yerel işletmelerin gün sonu fazla gıdalarını indirimleriyle son kullanıcılarla buluşturan bir aracı platformdur. Rescued, ürünlerin satıcısı değil, platform sağlayıcısıdır." },
            { title: "3. Kullanıcı Yükümlülükleri", content: "Doğru bilgi sağlamak, hesabın güvenliğini korumak, platformu kötüye kullanmamak, gıda güvenliğiyle ilgili olağandışı durumları bildirmek." },
            { title: "4. İşletme Yükümlülükleri", content: "Güvenli ve tüketilebilir ürün sunmak, teslim saatlerine uymak, müşteri şikayetlerini yanıtlamak, komisyon ödemelerini zamanında yapmak." },
            { title: "5. Ödeme ve İade", content: "Ödemeler Rescued altyapısı üzerinden yapılır. İptal ve iade koşulları uygulama içinde detaylandırılmıştır." },
            { title: "6. Sorumluluk Sınırlaması", content: "Rescued, işletmelerin sunduğu ürünlerin içeriği ve kalitesi konusunda dolaylı sorumluluğa sahip olup doğrudan garanti vermez." },
            { title: "7. Değişiklikler", content: "Koşullar önceden bildirim yapılarak değiştirilebilir. Güncelleme tarihinden sonra platformu kullanmaya devam etmek, yeni koşulların kabulü anlamına gelir." },
          ].map((s) => (
            <section key={s.title}>
              <h2 className="text-lg font-black text-ink mb-3">{s.title}</h2>
              <p>{s.content}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
