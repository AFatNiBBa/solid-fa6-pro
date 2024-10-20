
import { Icon, generic } from "../../index";

/**
 * A component that renders the `champagne-glasses` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/champagne-glasses?s=duotone champagne-glasses}
 * @preview ![champagne-glasses](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/champagne-glasses.svg)
 */
const ChampagneGlasses: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 428.1c0 13.1 8.1 25.4 21.1 30.1l71.1 25.9L163.3 510c3.6 1.3 7.3 1.9 10.9 1.9c13.1 0 25.3-8.1 30.1-21.1c6-16.6-2.5-35-19.1-41l-41-15 31.3-86.2c59.4 5.2 116.2-33.9 130-95.2L320 188.8l14.6 64.7c13.8 61.3 70.6 100.4 130 95.2l31.3 86.2-41 15c-16.6 6.1-25.2 24.4-19.1 41c4.7 13 17 21.1 30 21.1c3.6 0 7.3-.6 10.9-1.9l71.1-25.9L619 458.2c13-4.7 21.1-17 21.1-30.1c0-3.6-.6-7.3-1.9-10.9c-6-16.6-24.4-25.2-41-19.1l-41 15-31.3-86.2c48.8-34.3 67.2-100.8 38.5-156.6L484.4 17.3C478.8 6.4 467.7 0 456 0c-3.6 0-7.3 .6-10.9 1.9L320 47.5 195 1.9C191.4 .6 187.7 0 184 0c-11.7 0-22.8 6.4-28.4 17.3L76.9 170.2C48.1 226 66.5 292.5 115.3 326.8L84 413l-41-15c-16.6-6.1-35 2.5-41 19.1C.6 420.8 0 424.4 0 428.1zM133.7 199.6c12.9-25 25.8-50 38.7-75l27.2-52.8 75.1 27.4c-4.4 19.3-8.7 38.6-13.1 57.9c-6.2 27.5-12.4 54.9-18.6 82.4c-6.2 27.6-30.6 45.7-57.1 45.7c-6.6 0-13.4-1.1-20.1-3.6c-33.2-12.1-48.2-50.6-32.1-82z" />
        <path d="M172.4 124.5l-38.7 75c-16.2 31.4-1.1 69.9 32.1 82s69.4-7.7 77.2-42.2L261.6 157l-89.2-32.5zm295.2 0L378.5 157 397 239.4c7.8 34.5 44 54.3 77.2 42.2s48.2-50.6 32.1-82l-38.7-75z" />
    </Icon>
);

export default ChampagneGlasses;