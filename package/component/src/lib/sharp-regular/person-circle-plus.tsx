
import { Icon } from "../../index";

/**
 * A component that renders the `person-circle-plus` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-circle-plus?s=sharp-regular person-circle-plus}
 * @preview ![person-circle-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/person-circle-plus.svg)
 */
const PersonCirclePlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM94.8 128l14.1 0 102.2 0 14.1 0 6.9 12.4 64.1 115.7c-11.8 14.3-21.4 30.5-28.2 48.1l-2.5-4.6L224 224.9 224 488l0 24-48 0 0-24 0-136-32 0 0 136 0 24-48 0 0-24 0-263.1L54.6 299.6 43 320.6 1 297.4l11.6-21 75.3-136L94.8 128zM144 304l32 0 0-128-32 0 0 128zm288-80a144 144 0 1 1 0 288 144 144 0 1 1 0-288zm16 80l0-16-32 0 0 16 0 48-48 0-16 0 0 32 16 0 48 0 0 48 0 16 32 0 0-16 0-48 48 0 16 0 0-32-16 0-48 0 0-48z" />
    </Icon>
);

export default PersonCirclePlus;