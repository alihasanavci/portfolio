import Image from "next/image";

import styles from "./CloudlineMobileWeatherShowcase.module.css";

export function CloudlineMobileWeatherShowcase() {
  return (
    <section
      aria-label="Cloudline mobil hava durumu ekranları"
      className={styles.section}
      data-node-id="2376:933"
    >
      <div className={styles.scene} data-node-id="2382:1616">
        <Image
          src="/cloudline/weather-showcase/weather-scene-mobile.png"
          alt="Cloudline mobil hava durumu uygulaması sunumu"
          width={1206}
          height={1256}
          sizes="(max-width: 401px) 100vw, 402px"
          unoptimized
          className={styles.sceneImage}
        />
      </div>
    </section>
  );
}
