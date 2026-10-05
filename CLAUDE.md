# TNF Bootcamp — Claude Kuralları

## Proje
- Vite + React 19 + TypeScript strict
- React Router v7 (BrowserRouter + Routes/Route)
- Vercel project: `handoff` → `handoff-ebon.vercel.app`
- SPA rewrite: tüm URL'ler `index.html`'e düşer, React Router yönetir

## Çalışmayan bir şeyi ASLA bozma

Bu projenin çalışan kısımları dokunulmaz:
- Ana sayfa (`/`) ve tüm bileşenleri
- Mevcut rotalar ve CSS token sistemi
- `vercel.json` rewrite kuralı

Görev sadece belirtilen komponenti/sayfayı etkiler. Başka bir şeye dokunma.

## Deployment kuralı

Deploy etmeden önce MUTLAKA kontrol et:
```bash
cat .vercel/project.json
# projectName "handoff" olmalı
```
Değilse: `vercel link --project handoff --yes` çalıştır.

## HTML → React port ederken

1. **Önce mevcut `.html` linklerini temizle:**
   ```bash
   grep -rn '\.html"' src/ --include="*.tsx"
   ```
   Bulunan her `href="X.html"` → `href="/x"` yap (React Router path formatı).

2. **CSS class ve JSX yapısı birebir eşleşmeli:**
   - CSS'de `.foo { display: grid; grid-template-columns: A B }` varsa JSX'de direkt child'lar o class'ın içine gelmeli, araya `.wrap` sarma
   - CSS'de `.bar.active` bekleniyorsa JSX'de `className="bar active"` yaz, `className="bar is-active"` değil
   - CSS yazıp JSX'i farklı yapıda yazma — ikisini birlikte yaz ve kontrol et

3. **Build → smoke test → deploy sırası:**
   ```bash
   npm run build          # TypeScript hatası yoksa devam
   # Yerel dev'de rotaları test et
   vercel --prod          # Sadece handoff projesine
   ```

## Sık yapılan hatalar (bir daha yapma)

| Hata | Sonuç | Önlem |
|------|-------|-------|
| `href="page.html"` bırakmak | React Router eşleşmez → boş sayfa | Her port sonrası `.html` grep |
| CSS grid wrapper'ı ters sarmak | Layout bozulur | CSS yapısını JSX'de birebir taklit et |
| Yanlış Vercel projesine deploy | Kullanıcı değişikliği görmez | Her deploy öncesi `project.json` oku |
| Scope dışı dosyaya dokunmak | Çalışan şey bozulur | Sadece istenen dosyaları değiştir |

## Rota listesi

| Path | Bileşen |
|------|---------|
| `/` | `HomePage` (Ana sayfa) |
| `/program` | `ProgramPage` |
| `/speakers` | `SpeakersPage` |
| `/stay` | `StayPage` |
| `/alanya` | `AlanyaPage` |
| `/#bootcamp` | Ana sayfada `<section id="bootcamp">` |

## CSS dosya haritası

| Dosya | Nerede kullanılıyor |
|-------|---------------------|
| `styles/tokens.css` | Global değişkenler |
| `styles/shell.css` | Ana sayfa + inner page shared (header, divider, footer) |
| `styles/program.css` | ProgramPage |
| `styles/speakers.css` | SpeakersPage |
| `styles/stay.css` | StayPage |
| `styles/alanya.css` | AlanyaPage |
