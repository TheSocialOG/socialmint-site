import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Social Mint | La crypto des créateurs</title>
        <meta name="description" content="Social Mint ($SMNT) transforme ton influence en monnaie." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <img src="/banner.png" alt="Social Mint banner" className={styles.banner} />
        <h1 className={styles.title}>🚀 Social Mint ($SMNT)</h1>
        <p className={styles.description}>
          La crypto qui paie tes posts.<br />
          Crée du contenu. Gagne des tokens. Rejoins la révolution sociale.
        </p>
        <a href="https://discord.gg/tonlien" className={styles.button}>🔗 Rejoindre la communauté</a>

        <section className={styles.section}>
          <h2>📌 Comment ça marche ?</h2>
          <ol>
            <li>🔗 Connecte ton wallet et ton compte X ou TikTok</li>
            <li>📝 Poste du contenu, like, partage</li>
            <li>🎉 Reçois des tokens $SMNT automatiquement</li>
          </ol>
        </section>

        <section className={styles.section}>
          <h2>📬 Inscris-toi à la Mintlist</h2>
          <form action="https://formspree.io/f/xovwekad" method="POST" className={styles.form}>
            <input type="email" name="email" placeholder="Ton adresse e-mail" required />
            <button type="submit">S’inscrire</button>
          </form>
        </section>
      </main>
    </>
  );
}
