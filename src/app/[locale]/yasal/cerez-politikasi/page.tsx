import { Metadata } from "next";

export const metadata: Metadata = { title: "Çerez Politikası" };

export default function CerezPolitikasiPage() {
  return (
    <main className="pt-32 pb-20 section-padding bg-cream">
      <div className="container-wide mx-auto max-w-3xl">
        <h1 className="text-4xl font-black text-ink mb-2">Çerez Politikası</h1>
        <p className="text-ink/40 text-sm mb-10">Son güncelleme: Haziran 2025</p>
        <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-soft space-y-8 text-ink/70 leading-relaxed">
          {[
            { title: "Çerez Nedir?", content: "Çerezler, web sitesini ziyaret ettiğinizde tarayıcınıza kaydedilen küçük metin dosyalarıdır. Site deneyimini iyileştirmek ve kullanım istatistiklerini toplamak amacıyla kullanılır." },
            { title: "Kullandığımız Çerezler", content: "Zorunlu çerezler (oturum yönetimi, güvenlik), analitik çerezler (anonim kullanım istatistikleri), tercih çerezleri (dil, tema ayarları). Üçüncü taraf reklam çerezi kullanılmaz." },
            { title: "Çerez Yönetimi", content: "Tarayıcı ayarlarından çerezleri reddedebilir veya silebilirsiniz. Zorunlu çerezlerin devre dışı bırakılması site işlevselliğini etkileyebilir." },
            { title: "İletişim", content: "cerez@rescued.com.tr" },
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
