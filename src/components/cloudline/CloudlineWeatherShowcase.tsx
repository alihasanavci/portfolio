import Image from "next/image";

import styles from "./CloudlineWeatherShowcase.module.css";

export function CloudlineWeatherShowcase() {
  return (
    <section
      aria-label="Cloudline hava durumu ekranları"
      className={styles.section}
      data-node-id="2376:621"
    >
      <div className={styles.scene} data-node-id="2376:623">
        <Image
          src="/cloudline/weather-showcase/weather-scene-desktop.png"
          alt="Cloudline hava durumu uygulaması sunumu"
          width={3717}
          height={2165}
          sizes="(min-width: 1440px) 1239px, 86.027vw"
          unoptimized
          className={styles.sceneImage}
        />
      </div>
    </section>
  );
}
