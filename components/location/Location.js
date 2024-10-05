import Link from "next/link";
import styles from "./styles/Location.module.css";

export default function Location() {
    return (
        <section className={styles.location} id="location">
            <div className={styles.locationBox}>
                <div className={styles.locationInnerBox}>
                    <div className={styles.locationHeader}>location</div>
                    <div className={styles.locationHeader2}>
                        At the heart of the Kogilu Main Road!
                    </div>
                    <p>
                        {`The area\’s proximity to the airport has spurred rapid
                        development, creating a unique blend of serene natural
                        surroundings and modern urban convenience. It\’s an
                        appealing location for many, with easy access to major
                        IT companies and a well-connected transport network.`}
                    </p>
                    <Link
                        className={styles.link}
                        href="https://maps.app.goo.gl/2Upmg4wpoMDmaGvC9"
                    >
                        View on Google Maps
                    </Link>
                </div>
            </div>
            <div className={styles.locationMap}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.908996908845!2d77.6125329754888!3d13.10495131193981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19117754745d%3A0xb6244450a1872b6d!2sVajram%20VIVERA!5e0!3m2!1sen!2sin!4v1728084817250!5m2!1sen!2sin"
                    width="350"
                    height="300"
                    title="Vajram Vivera, Kogilu Main Road, North Bangalore"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className={styles.locationMobile}
                ></iframe>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.908996908845!2d77.6125329754888!3d13.10495131193981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae19117754745d%3A0xb6244450a1872b6d!2sVajram%20VIVERA!5e0!3m2!1sen!2sin!4v1728084817250!5m2!1sen!2sin"
                    width="600"
                    height="450"
                    title="Vajram Vivera, Kogilu Main Road, North Bangalore"
                    style={{ border: "0" }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className={styles.locationDesktop}
                ></iframe>
            </div>
        </section>
    );
}
