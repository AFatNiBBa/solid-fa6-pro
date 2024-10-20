
import { Icon } from "../../index";

/**
 * A component that renders the `banjo` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/banjo?s=sharp-solid banjo}
 * @preview ![banjo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/banjo.svg)
 */
const Banjo: typeof Icon = x => (
    <Icon {...x}>
        <path d="M367.1 99.7L376 64 448 0l64 64-64 72-35.7 8.9L331.3 226c13.9 20.6 23.4 44.3 27 70l1.7 0 24 0 0 48-24 0-1.7 0c-4.1 28.5-15.3 54.6-31.7 76.6l1.2 1.2 17 17-33.9 33.9-17-17-1.2-1.2c-22 16.5-48.2 27.7-76.6 31.7l0 1.7 0 24-48 0 0-24 0-1.7c-28.5-4.1-54.6-15.3-76.6-31.7l-1.2 1.2-17 17L39.3 438.8l17-17 1.2-1.2C41 398.6 29.8 372.5 25.7 344L24 344 0 344l0-48 24 0 1.7 0c4.1-28.5 15.3-54.6 31.7-76.6l-1.2-1.2-17-17 33.9-33.9 17 17 1.2 1.2c22-16.5 48.2-27.7 76.6-31.7l0-1.7 0-24 48 0 0 24 0 1.7c25.7 3.7 49.5 13.1 70 27l81.1-81.1zM192 432a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM155.3 308.7l48 48L214.6 368 192 390.6l-11.3-11.3-48-48L121.4 320 144 297.4l11.3 11.3z" />
    </Icon>
);

export default Banjo;