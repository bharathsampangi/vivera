import PriceBox from "./PriceBox";
import styles from "./styles/Pricing.module.css"

export default function Pricing({openModal}) {
    return (
        <section className={styles.container} id="pricing">
            <div className={styles.element}>
                <h3 className={styles.header}>Pricing Structure</h3>
                <div className={styles.priceContainer}>
                    <PriceBox unitName='Compact 3 BHK' unit='3 BHK' area='1573 Sq.Ft.' price='1.75 Cr* Onwards' openModal={openModal}/>
                    <PriceBox unitName='Smart 3 BHK' unit='3 BHK' area='1680 Sq.Ft.' price='1.86 Cr* Onwards' openModal={openModal}/>
                    <PriceBox unitName='Classic 3 BHK ' unit='3 BHK' area='1863 Sq.Ft.' price='2.07 Cr* Onwards' openModal={openModal}/>
                    <PriceBox unitName='Large 3 BHK' unit='3 BHK' area='2069 Sq.Ft.' price='2.29 Cr* Onwards' openModal={openModal}/>
                    <PriceBox unitName='4 BHK' unit='4 BHK' area='2406 Sq.Ft.' price='2.67 Cr* Onwards' openModal={openModal}/>
                </div>
            </div>
        </section>
    )
} 