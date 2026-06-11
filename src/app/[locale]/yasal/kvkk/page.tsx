import { Metadata } from "next";

export const metadata: Metadata = { title: "KVKK Aydınlatma Metni" };

export default function KVKKPage() {
  return (
    <main className="pt-32 pb-20 section-padding bg-cream">
      <div className="container-wide mx-auto max-w-3xl">
        <h1 className="text-4xl font-black text-ink mb-2">KVKK Aydınlatma Metni</h1>
        <p className="text-ink/40 text-sm mb-10">6698 Sayılı Kişisel Verilerin Korunması Kanunu Kapsamında — Son güncelleme: Haziran 2025</p>
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-soft space-y-8 text-ink/70 leading-relaxed">
          {[
            { title: "Veri Sorumlusu", content: "Rescued Teknoloji A.Ş. (Veri Sorumlusu), 6698 sayılı KVKK uyarınca kişisel verilerinizi aşağıda açıklanan amaçlar kapsamında işlemektedir." },
            { title: "İşlenen Kişisel Veriler", content: "Kimlik verileri (ad, soyad), iletişim bilgileri (e-posta, telefon), konum verisi, işlem bilgileri (sipariş ve ödeme geçmişi), kullanıcı tercihleri ve uygulama kullanım verileri." },
            { title: "Kişisel Verilerin İşlenme Amaçları", content: "Sözleşmenin kurulması ve ifası, yasal yükümlülüklerin yerine getirilmesi, platform güvenliği, müşteri ilişkileri yönetimi, pazarlama (açık rıza ile)." },
            { title: "Kişisel Verilerin Aktarıldığı Taraflar", content: "Ödeme hizmet sağlayıcıları, harita/konum hizmetleri, bulut altyapı sağlayıcıları ve yasal zorunluluk halinde yetkili kamu kuruluşları. Yurt dışına aktarım, yeterli koruma güvencesi sağlanan ülkelere yapılır." },
            { title: "Kişisel Verilerin Toplanma Yöntemi ve Hukuki Sebebi", content: "Veriler; uygulama kaydı, platform kullanımı ve iletişim formları aracılığıyla toplanır. Hukuki sebepler: sözleşme ifası, yasal yükümlülük, meşru menfaat ve açık rıza." },
            { title: "KVKK Kapsamındaki Haklarınız", content: "Kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenen verilere ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt içi/yurt dışı aktarım bilgisi, eksik/yanlış verilerin düzeltilmesini isteme, silinmesini/yok edilmesini isteme, üçüncü kişilere bildirim yapılmasını isteme, otomatik işleme itiraz etme ve zararın tazminini isteme." },
            { title: "Başvuru Yöntemi", content: "Haklarınızı kullanmak için kvkk@rescued.com.tr adresine kimlik doğrulayıcı bilgilerle yazılı başvuru yapabilirsiniz. Başvurular 30 gün içinde yanıtlanır." },
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
