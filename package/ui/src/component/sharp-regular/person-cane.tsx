
import { Icon } from "../../index";

/**
 * A component that renders the `person-cane` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-cane?s=sharp-regular person-cane}
 * @preview ![person-cane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/person-cane.svg)
 */
const PersonCane: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm-91.1 32l-14 0L112 140.2l-76.9 136 41.8 23.6L128 209.5 128 488l0 24 48 0 0-24 0-136 32 0 0 136 0 24 48 0 0-24 0-273.8 61.6 73.3 15.4 18.4 36.7-30.9-15.4-18.4-100.9-120-7.2-8.6-11.2 0-102.2 0zM208 176l0 128-32 0 0-128 32 0zM360 368c4.4 0 8 3.6 8 8l0 112 0 24 48 0 0-24 0-112c0-30.9-25.1-56-56-56s-56 25.1-56 56l0 8 0 24 48 0 0-24 0-8c0-4.4 3.6-8 8-8z" />
    </Icon>
);

export default PersonCane;