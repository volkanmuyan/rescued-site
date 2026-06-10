import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
};

export default function GizlilikPage() {
  return (
    <main className="pt-32 pb-20 section-padding bg-cream">
      <div className="container-wide mx-auto max-w-3xl">
        <h1 className="text-4xl font-black text-ink mb-2">Gizlilik Politikası</h1>
        <p className="text-ink/40 text-sm mb-10">Son güncelleme: Haziran 2025</p>

        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-soft space-y-8 text-ink/70 leading-relaxed">
          {[
            {
              title: "1. Veri Sorumlusu",
              content: "Rescued platformunun veri sorumlusu Rescued Teknoloji A.Ş. (bundan sonra \"Rescued\") olup bu politika, kullanıcıların kişisel verilerinin nasıl işlendiğini açıklar.",
            },
            {
              title: "2. Toplanan Veriler",
              content: "Ad, soyad, e-posta adresi, telefon numarası, konum verisi (uygulama kullanımı sırasında), ödeme işlem bilgileri (kart numaraları saklanmaz), uygulama kullanım istatistikleri.",
            },
            {
              title: "3. Verilerin İşlenme Amaçları",
              content: "Hizmet sunumu ve sipariş yönetimi, ödeme işlemleri, müşteri desteği, platform güvenliği ve dolandırıcılık önleme, yasal yükümlülüklerin yerine getirilmesi, açık onay verilmesi halinde pazarlama iletişimi.",
            },
            {
              title: "4. Veri Paylaşımı",
              content: "Verileriniz; hizmet sunumu için zorunlu üçüncü taraf sağlayıcılar (ödeme işlemcisi, harita hizmeti), yasal zorunluluk ve resmi kurumlar dışında üçüncü kişilerle paylaşılmaz. Verileriniz satılmaz.",
            },
            {
              title: "5. Veri Saklama Süresi",
              content: "Veriler, hizmetin sunumu için gerekli süre ve yasal yükümlülükler çerçevesinde saklanır. Hesap silme talebinde veriler 30 gün içinde silinir.",
            },
            {
              title: "6. Haklarınız",
              content: "KVKK kapsamında: verilere erişim hakkı, düzeltme hakkı, silme hakkı, işlemeye itiraz hakkı, veri taşınabilirliği hakkı. Başvuru için: kvkk@rescued.com.tr",
            },
            {
              title: "7. İletişim",
              content: "Gizlilik konularında: gizlilik@rescued.com.tr",
            },
          ].map((section) => (
            <section key={section.title}>
              <h2 className="text-lg font-black text-ink mb-3">{section.title}</h2>
              <p>{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
