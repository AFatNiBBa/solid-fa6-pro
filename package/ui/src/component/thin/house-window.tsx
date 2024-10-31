
import { Icon } from "../../index";

/**
 * A component that renders the `house-window` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-window?s=thin house-window}
 * @preview ![house-window](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/house-window.svg)
 */
const HouseWindow: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M293.3 2c-3-2.7-7.6-2.7-10.6 0L2.7 250c-3.3 2.9-3.6 8-.7 11.3s8 3.6 11.3 .7L64 217.1 64 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-230.9L562.7 262c3.3 2.9 8.4 2.6 11.3-.7s2.6-8.4-.7-11.3L293.3 2zM80 448l0-245.1L288 18.7 496 202.9 496 448c0 26.5-21.5 48-48 48l-320 0c-26.5 0-48-21.5-48-48zM240 184c-13.3 0-24 10.7-24 24l0 96c0 13.3 10.7 24 24 24l96 0c13.3 0 24-10.7 24-24l0-96c0-13.3-10.7-24-24-24l-96 0zm-8 24c0-4.4 3.6-8 8-8l96 0c4.4 0 8 3.6 8 8l0 96c0 4.4-3.6 8-8 8l-96 0c-4.4 0-8-3.6-8-8l0-96z" />
    </Icon>
);

export default HouseWindow;