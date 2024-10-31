
import { Icon } from "../../index";

/**
 * A component that renders the `planet-moon` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/planet-moon?s=regular planet-moon}
 * @preview ![planet-moon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/planet-moon.svg)
 */
const PlanetMoon: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M512 0a64 64 0 1 1 0 128A64 64 0 1 1 512 0zM224 464c97.2 0 176-78.8 176-176c0-82.2-56.4-151.3-132.6-170.6l-71 82.9c-11.5 13.4-10.7 33.4 1.8 45.9c6.3 6.3 14.9 9.9 23.9 9.9l66 0c17.7 0 32 14.3 32 32l0 15.9c0 10.6-2.6 21-7.6 30.3l-41.3 76.6c-4.4 8.1-12.8 13.2-22 13.2c-13.8 0-25-11.2-25-25l0-47c-17.7 0-32-14.3-32-32l0-32-49.9-49.9c-9-9-21.2-14.1-33.9-14.1L60 224c-7.7 19.8-12 41.4-12 64c0 97.2 78.8 176 176 176zM0 288c0-52.3 17.9-100.5 48-138.6c1-1.3 2.1-2.6 3.2-3.9C92.2 95.7 154.4 64 224 64c13.3 0 26.4 1.2 39.1 3.4C368.2 85.9 448 177.6 448 288c0 123.7-100.3 224-224 224S0 411.7 0 288z" />
    </Icon>
);

export default PlanetMoon;