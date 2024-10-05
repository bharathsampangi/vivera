import styles from "./styles/Project.module.css";

export default function Project({openModal}) {
    return (
        <section className={styles.container} id="overview">
            <div className={styles.element}>
                <h2 className={styles.header}>Project Overview</h2>
                <div className={styles.listContainer}>
                    <ul className={styles.list}>
                        <li>
                            <span className={styles.title}>Project: </span>
                            <span>3, 4 BHK Luxury Residences by Vajram Vivera</span>
                        </li>
                        <li>
                            <span className={styles.title}>Location: </span>
                            <span>Kogilu Main Road, North Bangalore</span>
                        </li>
                        <li>
                            <span className={styles.title}>Area: </span>
                            <span>6.2 Acres</span>
                        </li>
                        <li>
                            <span className={styles.title}>
                                No. of Towers:{" "}
                            </span>
                            <span>
                                3 Towers
                            </span>
                        </li>
                        <li>
                            <span className={styles.title}>Floors: </span>
                            <span>
                                2B+G+17
                            </span>
                        </li>
                        <li>
                            <span className={styles.title}>No. of Units: </span>
                            <span>
                                343 Units
                            </span>
                        </li>
                        <li>
                            <span className={styles.title}>
                                Unit Variants:{" "}
                            </span>
                            <span>Premium 3, 4 BHK</span>
                        </li>
                        <li>
                            <span className={styles.title}>Size Range: </span>
                            <span>1573 - 2406 Sq.Ft</span>
                        </li>
                        <li>
                            <span className={styles.title}>Price Range: </span>
                            <span>Starts from ₹1.75Cr* Onwards</span>
                        </li>
                        <li>
                            <span className={styles.title}>Amenities: </span>
                            <span>2+ Acres of Dedicated Amenities</span>
                        </li>
                        <li>
                            <span className={styles.title}>
                                Possession Date:{" "}
                            </span>
                            <button className={styles.button} onClick={openModal} >
                                Get Details
                            </button>
                        </li>
                        <li>
                            <span className={styles.title}>RERA No.: </span>
                            <span>Awaiting approval</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
