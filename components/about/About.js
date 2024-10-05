import styles from "./styles/About.module.css";

export default function About() {
    return (
        <section className={styles.location} id="about">
            <div className={styles.aboutContainer}>
                <img
                    src="/images/vivera-home.webp"
                    id="eptiome-home"
                    alt="Vajram Vivera"
                />
            </div>
            <div className={styles.locationBox}>
                <div className={styles.locationInnerBox}>
                    <div className={styles.locationHeader2}>
                        Vajram Vivera (KGF)
                    </div>
                    <p>
                        Come and settle into a place where nature embraces you
                        with all the warmth, Spanning across 6 acres, the lush
                        greens and the floral variety aids more than just a
                        residential project - its your personal sanctuary where
                        the rewards of your blooms. A nature trail sets the
                        rythm for brighter days, offering an address
                        conveniently close to both the city and the airport.
                        Best of all, here you dont just live admits nature, you
                        harmonize with it, and nature reciprocates your love.
                    </p>
                </div>
            </div>
        </section>
    );
}
