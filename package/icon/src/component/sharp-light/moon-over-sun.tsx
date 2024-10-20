
import { Icon } from "../../index";

/**
 * A component that renders the `moon-over-sun` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moon-over-sun?s=sharp-light moon-over-sun}
 * @preview ![moon-over-sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/moon-over-sun.svg)
 */
const MoonOverSun: typeof Icon = x => (
    <Icon {...x}>
        <path d="M178.7 15.5L256 57.1l77.3-41.6L362 0l9.4 31.3 25.2 84.1 84.1 25.2L512 150l-15.5 28.8L454.9 256l41.6 77.3L512 362l-31.3 9.4-84.1 25.2-25.2 84.1L362 512l-28.8-15.5L256 454.9l-77.3 41.6L150 512l-9.4-31.3-25.2-84.1L31.3 371.4 0 362l15.5-28.8L57.1 256 15.5 178.7 0 150l31.3-9.4 84.1-25.2 25.2-84.1L150 0l28.8 15.5zm92.5 69.8L256 93.5l-15.2-8.2L169.3 46.8 146 124.6l-5 16.5-16.5 5L46.8 169.3l38.5 71.5L93.5 256l-8.2 15.2L46.8 342.7 124.6 366l16.5 5 5 16.5 23.3 77.8 71.5-38.5 15.2-8.2 15.2 8.2 71.5 38.5L366 387.4l5-16.5 16.5-5 77.8-23.3-38.5-71.5L418.5 256l8.2-15.2 38.5-71.5L387.4 146l-16.5-5-5-16.5L342.7 46.8 271.2 85.3zM174 256c0 45.3 36.7 82 82 82c14.6 0 28.4-3.8 40.3-10.6c-43.3-9.1-75.9-47.2-75.9-93.1c0-22.3 7.7-42.8 20.7-59c-38.2 7-67.1 40.5-67.1 80.6zm82-114c11.2 0 22.1 1.6 32.4 4.7l1.9 30c-22.4 9.9-37.9 32.1-37.9 57.7c0 34.7 28.5 63.2 63.9 63.2c5.8 0 11.5-.8 16.8-2.2l17.4 24.4C330.1 350 295.4 370 256 370c-63 0-114-51-114-114s51-114 114-114z" />
    </Icon>
);

export default MoonOverSun;