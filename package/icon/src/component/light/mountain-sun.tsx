
import { Icon } from "../../index";

/**
 * A component that renders the `mountain-sun` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mountain-sun?s=light mountain-sun}
 * @preview ![mountain-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/mountain-sun.svg)
 */
const MountainSun: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M608 80a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM480 80a80 80 0 1 1 160 0A80 80 0 1 1 480 80zM456.1 480c13.2 0 23.9-10.7 23.9-23.9c0-4.5-1.3-8.9-3.7-12.7L259.6 98c-.8-1.3-2.2-2-3.6-2s-2.9 .8-3.6 2L35.7 443.4c-2.4 3.8-3.7 8.2-3.7 12.7C32 469.3 42.7 480 55.9 480l400.2 0zM55.9 512C25 512 0 487 0 456.1c0-10.5 3-20.8 8.6-29.7L225.2 81c6.6-10.6 18.3-17 30.8-17s24.1 6.4 30.8 17l126 200.7 48.2-79C465 196.1 472.2 192 480 192s15 4.1 19.1 10.7l132 216.3c5.8 9.6 8.9 20.6 8.9 31.8c0 33.8-27.4 61.1-61.1 61.1l-122.8 0L55.9 512zm447.5-85.6c5.6 8.9 8.6 19.2 8.6 29.7c0 8.6-1.9 16.7-5.4 23.9l72.2 0c16.1 0 29.1-13 29.1-29.1c0-5.3-1.5-10.6-4.3-15.2L480 232.9 431.7 312l71.7 114.3z" />
    </Icon>
);

export default MountainSun;