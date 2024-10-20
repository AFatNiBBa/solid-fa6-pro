
import { Icon } from "../../index";

/**
 * A component that renders the `person-cane` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-cane?s=sharp-thin person-cane}
 * @preview ![person-cane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/person-cane.svg)
 */
const PersonCane: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M184 56a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm96 0A56 56 0 1 0 168 56a56 56 0 1 0 112 0zM136 248l0-8-16 0 0 8 0 256 0 8 8 0 48 0 8 0 0-8 0-152 16 0 0 152 0 8 8 0 48 0 8 0 0-8 0-256 0-8-16 0 0 8 0 248-32 0 0-152 0-8-8 0-32 0-8 0 0 8 0 152-32 0 0-248zm224 88c13.3 0 24 10.7 24 24l0 144 0 8 16 0 0-8 0-144c0-22.1-17.9-40-40-40s-40 17.9-40 40l0 16 0 8 16 0 0-8 0-16c0-13.3 10.7-24 24-24zM132.9 128c-3.1 0-5.9 1.8-7.2 4.5l-84.9 176-3.5 7.2 14.4 7 3.5-7.2L137.9 144l108.8 0 98.5 148.4 4.4 6.7 13.3-8.9-4.4-6.7-100.9-152c-1.5-2.2-4-3.6-6.7-3.6l-118.2 0z" />
    </Icon>
);

export default PersonCane;