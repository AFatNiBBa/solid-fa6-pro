
import { Icon } from "../../index";

/**
 * A component that renders the `person-cane` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-cane?s=sharp-solid person-cane}
 * @preview ![person-cane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/person-cane.svg)
 */
const PersonCane: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M272 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-8 187.3l47.4 57.1 20.4 24.6 49.3-40.9-20.4-24.6-92.9-112L258.1 128l-15 0-102.2 0-18.1 0-9.3 15.5-76.9 128L20.1 298.9l54.9 33 16.5-27.4L120 256.9 120 480l0 32 64 0 0-32 0-128 16 0 0 128 0 32 64 0 0-32 0-244.7zM352 376c0-4.4 3.6-8 8-8s8 3.6 8 8l0 112 0 24 48 0 0-24 0-112c0-30.9-25.1-56-56-56s-56 25.1-56 56l0 8 0 24 48 0 0-24 0-8z" />
    </Icon>
);

export default PersonCane;