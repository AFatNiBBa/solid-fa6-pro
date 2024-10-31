
import { Icon } from "../../index";

/**
 * A component that renders the `house-fire` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-fire?s=sharp-solid house-fire}
 * @preview ![house-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/house-fire.svg)
 */
const HouseFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M439.4 126L288.4 0 0 240l0 47.6 64.1 0 0 224.4L224 512l0-160 64 0c.1-56.8 36.1-108.7 71.8-149.9c24.3-28 51.2-52.6 79.6-76.1zm8.6 34.1s-128 103.6-128 192s71.6 160 160 160s160-71.6 160-160c0-73.6-96-160-96-160s-13.9 12.5-31 32c-32.3-37.5-65-64-65-64zM481 448c-45 0-81-29-81-78c0-24 15-45 45-82c4 5 62 79 62 79l36-42c3 4 5 8 7 12c18 33 10 75-20 96c-15 10-31 15-49 15z" />
    </Icon>
);

export default HouseFire;