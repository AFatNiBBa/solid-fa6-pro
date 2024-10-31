
import { Icon } from "../../index";

/**
 * A component that renders the `person-circle-minus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-circle-minus?s=sharp-thin person-circle-minus}
 * @preview ![person-circle-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/person-circle-minus.svg)
 */
const PersonCircleMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 16a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm0 96A56 56 0 1 0 160 0a56 56 0 1 0 0 112zM95.9 128l-2.2 4.5L8.8 308.5l-3.5 7.2 14.4 7 3.5-7.2L105.9 144l108.1 0 65.6 135.9c3.1-5.4 6.5-10.6 10.2-15.6L226.3 132.5l-2.2-4.5-5 0-118.2 0-5 0zM104 248l0-8-16 0 0 8 0 256 0 8 8 0 48 0 8 0 0-8 0-152 16 0 0 152 0 8 8 0 48 0 8 0 0-8 0-256 0-8-16 0 0 8 0 248-32 0 0-152 0-8-8 0-32 0-8 0 0 8 0 152-32 0 0-248zm328-8a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm80-136l0-16-8 0-144 0-8 0 0 16 8 0 144 0 8 0z" />
    </Icon>
);

export default PersonCircleMinus;