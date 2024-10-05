import styles from "./styles/Hero.module.css";

export default function Hero({openModal}) {
    return (
        <section>
            <div className={styles.landingMain}>
                <div className={styles.banner}>
                    <h1 className={styles.header}>Vajram Vivera</h1>
                    <button className={styles.listButton} onClick={openModal} >
                        Download Brochure
                    </button>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <button className={styles.listButtonDesktop} onClick={openModal} >
                        Download Brochure
                    </button>
                </div>
            </div>
        </section>
    );
}
