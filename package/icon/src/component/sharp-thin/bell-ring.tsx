
import { Icon } from "../../index";

/**
 * A component that renders the `bell-ring` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-ring?s=sharp-thin bell-ring}
 * @preview ![bell-ring](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bell-ring.svg)
 */
const BellRing: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 0L248 0l0 32.2C163.4 36.4 96 106.3 96 192l0 93.2L33.8 363 32 365.2l0 2.8 0 40 0 8 8 0 432 0 8 0 0-8 0-40 0-2.8-1.8-2.2L416 285.2l0-93.2c0-85.7-67.4-155.6-152-159.8L264 0zM112 192c0-79.5 64.5-144 144-144s144 64.5 144 144l0 96 0 2.8 1.8 2.2L464 370.8l0 29.2L48 400l0-29.2L110.2 293l1.8-2.2 0-2.8 0-96zm96 256l-16 0c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7s18.7-28.3 18.7-45.3l-16 0c0 12.7-5.1 24.9-14.1 33.9s-21.2 14.1-33.9 14.1s-24.9-5.1-33.9-14.1s-14.1-21.2-14.1-33.9zM32 176c0-61.1 26.3-116 68.3-154.1L89.5 10.1C44.4 51 16 110.2 16 176l16 0zM411.7 21.9C453.7 60 480 114.9 480 176l16 0c0-65.8-28.4-125-73.5-165.9L411.7 21.9z" />
    </Icon>
);

export default BellRing;