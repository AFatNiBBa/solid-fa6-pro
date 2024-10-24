
import { Icon } from "../../index";

/**
 * A component that renders the `person-rays` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-rays?s=sharp-thin person-rays}
 * @preview ![person-rays](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/person-rays.svg)
 */
const PersonRays: typeof Icon = x => (
    <Icon {...x}>
        <path d="M216 56a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm96 0A56 56 0 1 0 200 56a56 56 0 1 0 112 0zM196.9 128l-5 0-2.2 4.5-84.9 176-3.5 7.2 14.4 7 3.5-7.2L201.9 144l108.1 0 82.7 171.5 3.5 7.2 14.4-7-3.5-7.2-84.9-176-2.2-4.5-5 0-118.2 0zM200 240l-16 0 0 8 0 256 0 8 8 0 48 0 8 0 0-8 0-152 16 0 0 152 0 8 8 0 48 0 8 0 0-8 0-256 0-8-16 0 0 8 0 248-32 0 0-152 0-8-8 0-32 0-8 0 0 8 0 152-32 0 0-248 0-8zM106.3 117.7l11.3-11.3L13.7 2.3 2.3 13.7l104 104zm299.3 0l104-104L498.3 2.3l-104 104 11.3 11.3zM2.3 498.3l11.3 11.3 104-104-11.3-11.3-104 104zm403.3-104l-11.3 11.3 104 104 11.3-11.3-104-104z" />
    </Icon>
);

export default PersonRays;