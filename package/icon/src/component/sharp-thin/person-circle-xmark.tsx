
import { Icon } from "../../index";

/**
 * A component that renders the `person-circle-xmark` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-circle-xmark?s=sharp-thin person-circle-xmark}
 * @preview ![person-circle-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/person-circle-xmark.svg)
 */
const PersonCircleXmark: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M160 96a40 40 0 1 0 0-80 40 40 0 1 0 0 80zm0-96a56 56 0 1 1 0 112A56 56 0 1 1 160 0zM95.9 128l5 0 118.2 0 5 0 2.2 4.5 63.5 131.7c-3.7 5-7.1 10.2-10.2 15.6L214.1 144l-108.1 0L23.2 315.5l-3.5 7.2-14.4-7 3.5-7.2 84.9-176 2.2-4.5zM104 248l0 248 32 0 0-152 0-8 8 0 32 0 8 0 0 8 0 152 32 0 0-248 0-8 16 0 0 8 0 256 0 8-8 0-48 0-8 0 0-8 0-152-16 0 0 152 0 8-8 0-48 0-8 0 0-8 0-256 0-8 16 0 0 8zM560 368a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zm-272 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm205.7-50.3L443.3 368l50.3 50.3 5.7 5.7L488 435.3l-5.7-5.7L432 379.3l-50.3 50.3-5.7 5.7L364.7 424l5.7-5.7L420.7 368l-50.3-50.3-5.7-5.7L376 300.7l5.7 5.7L432 356.7l50.3-50.3 5.7-5.7L499.3 312l-5.7 5.7z" />
    </Icon>
);

export default PersonCircleXmark;