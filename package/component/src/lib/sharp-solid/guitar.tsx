
import { Icon } from "../../index";

/**
 * A component that renders the `guitar` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/guitar?s=sharp-solid guitar}
 * @preview ![guitar](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/guitar.svg)
 */
const Guitar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M376 64l-8.9 35.7-82.5 82.5c-45.1-29.4-99.3-30.2-131 1.6c-11 11-18 24.6-21.4 39.6c-3.7 16.6-19.1 30.7-36.1 31.6c-25.6 1.3-49.3 10.7-67.3 28.6C-16 328.4-7.6 409.4 47.5 464.5s136.1 63.5 180.9 18.7c17.9-17.9 27.4-41.7 28.6-67.3c.9-17 15-32.3 31.6-36.1c15-3.4 28.6-10.5 39.6-21.4c31.8-31.8 31-85.9 1.6-131l82.5-82.5L448 136l64-72L448 0 376 64zM208 256a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default Guitar;