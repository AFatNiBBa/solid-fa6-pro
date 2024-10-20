
import { Icon, generic } from "../../index";

/**
 * A component that renders the `baguette` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/baguette?s=duotone baguette}
 * @preview ![baguette](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/baguette.svg)
 */
const Baguette: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 384.1c0 24.4 7 49.1 21.5 70.9c24.7 37 65.3 57 106.6 57c24.4 0 49.1-7 70.9-21.5l384-256c58.8-39.2 74.7-118.7 35.5-177.5S499.8-17.7 441 21.5L356.5 77.8c23.6 23.6 47.2 47.2 70.8 70.8c3.1 3.1 4.7 7.2 4.7 11.3s-1.6 8.2-4.7 11.3c-6.2 6.2-16.4 6.2-22.6 0c-25.1-25.1-50.2-50.2-75.4-75.4c-29.4 19.6-58.7 39.1-88 58.7c24.7 24.7 49.4 49.4 74 74c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-78.6-78.6c-29.4 19.6-58.7 39.1-88 58.7c25.8 25.8 51.5 51.5 77.2 77.2c6.2 6.2 6.2 16.4 0 22.6c-3.1 3.1-7.2 4.7-11.3 4.7s-8.2-1.6-11.3-4.7L98.9 249.5c-14 9.3-28 18.6-41.9 28C20 302.2 0 342.8 0 384.1z" />
        <path d="M356.5 77.8L329.3 95.9l75.4 75.4c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L356.5 77.8zM126.1 231.4L98.9 249.5l81.8 81.8c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-77.2-77.2zm115.2-76.8l-27.2 18.1 78.6 78.6c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-74-74z" />
    </Icon>
);

export default Baguette;