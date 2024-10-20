
import { Icon } from "../../index";

/**
 * A component that renders the `alien` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alien?s=light alien}
 * @preview ![alien](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/alien.svg)
 */
const Alien: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 32C118 32 32 118 32 224c0 56.2 31.2 110.7 72.2 157.4c40.4 46.1 86.7 80.4 108.6 95.4c2.8 1.9 6.6 3.2 11.2 3.2s8.4-1.3 11.2-3.2c21.9-15 68.1-49.3 108.6-95.4C384.8 334.7 416 280.2 416 224c0-106-86-192-192-192zM0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 135.3-148.8 247.7-194.7 279.2c-8.6 5.9-18.9 8.8-29.3 8.8s-20.7-2.9-29.3-8.8C148.8 471.7 0 359.3 0 224zm350 16l-14 0c-29.8 0-54.9 20.4-62 48l14 0c29.8 0 54.9-20.4 62-48zm-14-32l32 0c8.8 0 16 7.2 16 16c0 53-43 96-96 96l-32 0c-8.8 0-16-7.2-16-16c0-53 43-96 96-96zM112 240l-14 0c7.1 27.6 32.2 48 62 48l14 0c-7.1-27.6-32.2-48-62-48zm96 64c0 8.8-7.2 16-16 16l-32 0c-53 0-96-43-96-96c0-8.8 7.2-16 16-16l32 0c53 0 96 43 96 96z" />
    </Icon>
);

export default Alien;