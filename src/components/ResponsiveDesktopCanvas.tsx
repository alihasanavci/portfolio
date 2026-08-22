import type { ReactNode } from "react";

import styles from "./ResponsiveDesktopCanvas.module.css";

type ResponsiveDesktopCanvasProps = {
  children: ReactNode;
};

export function ResponsiveDesktopCanvas({
  children,
}: ResponsiveDesktopCanvasProps) {
  return (
    <div className={styles.shell}>
      <div className={styles.canvas}>{children}</div>
    </div>
  );
}
