
import { Icon } from "../../index";

/**
 * A component that renders the `stars` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stars?s=sharp-regular stars}
 * @preview ![stars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/stars.svg)
 */
const Stars: typeof Icon = x => (
    <Icon {...x}>
        <path d="M356 60l60 20-60 20-20 60-20-60L256 80l60-20L336 0l20 60zM464 208l48 16-48 16-16 48-16-48-48-16 48-16 16-48 16 48zm-243.8-9.8l33 66.9 73.8 10.7 59.8 8.7-43.3 42.2-53.4 52.1 12.6 73.5L313 512l-53.5-28.1-66-34.7-66 34.7L73.9 512l10.2-59.6 12.6-73.5L43.3 326.8 0 284.6l59.8-8.7 73.8-10.7 33-66.9L193.5 144l26.8 54.2zm26.1 114.4l-25-3.6-11.2-22.6-16.7-33.9-16.7 33.9L165.6 309l-25 3.6-37.4 5.4 27.1 26.4 18.1 17.6L144 387l-6.4 37.3 33.5-17.6 22.3-11.7 22.3 11.7 33.5 17.6L242.9 387l-4.3-24.9 18.1-17.6 27.1-26.4-37.4-5.4z" />
    </Icon>
);

export default Stars;