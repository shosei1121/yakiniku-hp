import React from 'react';
import './App.css';

// ナビゲーション
function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="#top" className="nav-logo">
          <span className="logo-icon">🔥</span>
          <span className="logo-text">焼肉 炎舞 -ENBU-</span>
        </a>
        <div className="nav-links">
          <a href="#about">こだわり</a>
          <a href="#menu">メニュー</a>
          <a href="#info">店舗情報</a>
          <a href="#reserve" className="nav-reserve">ご予約</a>
        </div>
      </div>
    </nav>
  );
}

// ヒーローセクション
function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-sub">極上の肉、至福のひととき</p>
        <h1 className="hero-title">焼肉 炎舞</h1>
        <p className="hero-tagline">-ENBU-</p>
        <p className="hero-desc">厳選されたA5黒毛和牛を、炭火の香りとともに</p>
        <a href="#reserve" className="hero-btn">ご予約はこちら</a>
      </div>
    </section>
  );
}

// こだわりセクション
function About() {
  const features = [
    {
      icon: '🥩',
      title: '厳選素材',
      desc: 'A5ランク黒毛和牛を中心に、産地直送の最高級肉をご用意。仕入れにこだわり、毎日新鮮なお肉をお届けします。',
    },
    {
      icon: '🔥',
      title: '炭火焼き',
      desc: '備長炭を使用した炭火焼きで、肉本来の旨味を最大限に引き出します。遠赤外線でじっくり焼き上げる至極の一品。',
    },
    {
      icon: '🍶',
      title: '厳選のお酒',
      desc: '焼肉に合う日本酒・ワイン・マッコリを全国から厳選。ソムリエがお肉に合うペアリングをご提案いたします。',
    },
    {
      icon: '✨',
      title: '上質な空間',
      desc: '落ち着いた和モダンの個室をご用意。接待やデート、ご家族でのお食事など、様々なシーンでご利用いただけます。',
    },
  ];

  return (
    <section id="about" className="about">
      <div className="section-container">
        <h2 className="section-title">こだわり</h2>
        <p className="section-subtitle">私たちが大切にしていること</p>
        <div className="features-grid">
          {features.map((f, i) => (
            <div key={i} className="feature-card">
              <span className="feature-icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// メニューセクション
function Menu() {
  const categories = [
    {
      name: '🏆 特選',
      items: [
        { name: '特選和牛カルビ', price: '2,480', badge: '人気No.1' },
        { name: 'シャトーブリアン', price: '4,980', badge: '希少部位' },
        { name: '特選和牛サーロイン', price: '3,280', badge: null },
        { name: '炙りユッケ', price: '1,680', badge: 'おすすめ' },
      ],
    },
    {
      name: '🥩 定番焼肉',
      items: [
        { name: '上カルビ', price: '1,580', badge: null },
        { name: '上ロース', price: '1,480', badge: null },
        { name: 'ハラミ', price: '1,280', badge: '人気' },
        { name: 'タン塩', price: '1,380', badge: null },
      ],
    },
    {
      name: '🍲 逸品・サイド',
      items: [
        { name: '石焼ビビンバ', price: '980', badge: null },
        { name: '特製冷麺', price: '1,080', badge: '夏限定' },
        { name: 'ナムル盛り合わせ', price: '680', badge: null },
        { name: '特製キムチ', price: '480', badge: '自家製' },
      ],
    },
  ];

  return (
    <section id="menu" className="menu">
      <div className="section-container">
        <h2 className="section-title">メニュー</h2>
        <p className="section-subtitle">自慢の一品をご紹介</p>
        <div className="menu-grid">
          {categories.map((cat, ci) => (
            <div key={ci} className="menu-category">
              <h3 className="menu-category-title">{cat.name}</h3>
              <ul className="menu-list">
                {cat.items.map((item, ii) => (
                  <li key={ii} className="menu-item">
                    <div className="menu-item-left">
                      <span className="menu-item-name">{item.name}</span>
                      {item.badge && <span className="menu-badge">{item.badge}</span>}
                    </div>
                    <span className="menu-item-price">¥{item.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="menu-note">※ 価格は全て税込です。仕入れ状況により内容が変更になる場合がございます。</p>
      </div>
    </section>
  );
}

// コース紹介
function Course() {
  const courses = [
    {
      name: '炎コース',
      price: '5,500',
      desc: '気軽に楽しむスタンダードコース',
      items: ['前菜3種', 'カルビ', 'ロース', 'ハラミ', 'ナムル', 'ご飯・スープ', 'デザート'],
      color: '#e74c3c',
    },
    {
      name: '舞コース',
      price: '8,800',
      desc: '特選肉を堪能するプレミアムコース',
      items: ['前菜5種', '特選カルビ', '特選ロース', 'タン塩', 'ハラミ', '石焼ビビンバ', '冷麺', 'デザート'],
      color: '#f39c12',
      recommended: true,
    },
    {
      name: '極コース',
      price: '15,000',
      desc: '最高峰の贅を尽くした至極のコース',
      items: ['前菜7種', 'シャトーブリアン', '特選サーロイン', '炙りユッケ', '特選タン', '特選ハラミ', '〆の一品', 'デザート盛り合わせ'],
      color: '#8e44ad',
    },
  ];

  return (
    <section className="course">
      <div className="section-container">
        <h2 className="section-title">コース</h2>
        <p className="section-subtitle">特別な日に、特別なコースを</p>
        <div className="course-grid">
          {courses.map((c, i) => (
            <div key={i} className={`course-card ${c.recommended ? 'recommended' : ''}`}>
              {c.recommended && <div className="course-badge">おすすめ</div>}
              <div className="course-header" style={{ borderColor: c.color }}>
                <h3>{c.name}</h3>
                <p className="course-price">¥{c.price}<span>/お一人様</span></p>
                <p className="course-desc">{c.desc}</p>
              </div>
              <ul className="course-items">
                {c.items.map((item, ii) => (
                  <li key={ii}>{item}</li>
                ))}
              </ul>
              <a href="#reserve" className="course-btn" style={{ backgroundColor: c.color }}>このコースを予約</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 店舗情報
function Info() {
  return (
    <section id="info" className="info">
      <div className="section-container">
        <h2 className="section-title">店舗情報</h2>
        <div className="info-grid">
          <div className="info-details">
            <table className="info-table">
              <tbody>
                <tr><th>店名</th><td>焼肉 炎舞 -ENBU-</td></tr>
                <tr><th>住所</th><td>〒150-0001<br/>東京都渋谷区神宮前1-2-3 炎舞ビル 2F</td></tr>
                <tr><th>電話</th><td><a href="tel:03-1234-5678">03-1234-5678</a></td></tr>
                <tr><th>営業時間</th><td>ランチ 11:30〜14:00（L.O. 13:30）<br/>ディナー 17:00〜23:00（L.O. 22:00）</td></tr>
                <tr><th>定休日</th><td>毎週月曜日（祝日の場合は翌火曜）</td></tr>
                <tr><th>席数</th><td>全48席（カウンター8席 / テーブル24席 / 個室16席）</td></tr>
                <tr><th>アクセス</th><td>JR原宿駅 竹下口 徒歩3分<br/>東京メトロ 明治神宮前駅 5番出口 徒歩1分</td></tr>
                <tr><th>駐車場</th><td>近隣コインパーキングをご利用ください</td></tr>
              </tbody>
            </table>
          </div>
          <div className="info-map">
            <div className="map-placeholder">
              <span>📍</span>
              <p>Google Map</p>
              <p className="map-note">※ 実装時にGoogle Maps APIを埋め込みます</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 予約セクション
function Reserve() {
  return (
    <section id="reserve" className="reserve">
      <div className="section-container">
        <h2 className="section-title light">ご予約</h2>
        <p className="section-subtitle light">お電話またはフォームからご予約いただけます</p>
        <div className="reserve-grid">
          <div className="reserve-phone">
            <p className="reserve-label">お電話でのご予約</p>
            <a href="tel:03-1234-5678" className="reserve-tel">📞 03-1234-5678</a>
            <p className="reserve-note">受付時間: 10:00〜22:00</p>
          </div>
          <div className="reserve-form-wrap">
            <p className="reserve-label">Webからのご予約</p>
            <form className="reserve-form" onSubmit={(e) => { e.preventDefault(); alert('※ デモのため送信されません'); }}>
              <div className="form-row">
                <input type="text" placeholder="お名前" required />
                <input type="tel" placeholder="電話番号" required />
              </div>
              <div className="form-row">
                <input type="date" required />
                <select defaultValue="">
                  <option value="" disabled>時間</option>
                  <option>11:30</option>
                  <option>12:00</option>
                  <option>12:30</option>
                  <option>17:00</option>
                  <option>17:30</option>
                  <option>18:00</option>
                  <option>18:30</option>
                  <option>19:00</option>
                  <option>19:30</option>
                  <option>20:00</option>
                  <option>20:30</option>
                  <option>21:00</option>
                </select>
                <select defaultValue="2">
                  <option value="1">1名</option>
                  <option value="2">2名</option>
                  <option value="3">3名</option>
                  <option value="4">4名</option>
                  <option value="5">5名</option>
                  <option value="6">6名以上</option>
                </select>
              </div>
              <textarea placeholder="ご要望（アレルギー、個室希望など）" rows="3"></textarea>
              <button type="submit" className="form-btn">予約する</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// フッター
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="logo-icon">🔥</span> 焼肉 炎舞 -ENBU-
        </div>
        <div className="footer-links">
          <a href="#about">こだわり</a>
          <a href="#menu">メニュー</a>
          <a href="#info">店舗情報</a>
          <a href="#reserve">ご予約</a>
        </div>
        <div className="footer-social">
          <a href="#!" title="Instagram">📷</a>
          <a href="#!" title="X (Twitter)">🐦</a>
          <a href="#!" title="LINE">💬</a>
        </div>
        <p className="footer-copy">© 2026 焼肉 炎舞 -ENBU- All Rights Reserved.</p>
      </div>
    </footer>
  );
}

// メインApp
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Course />
      <Info />
      <Reserve />
      <Footer />
    </div>
  );
}

export default App;
