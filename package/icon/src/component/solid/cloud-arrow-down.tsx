
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-arrow-down` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-arrow-down?s=solid cloud-arrow-down}
 * @preview ![cloud-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/cloud-arrow-down.svg)
 */
const CloudArrowDown: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128l-368 0zm79-167l80 80c9.4 9.4 24.6 9.4 33.9 0l80-80c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-39 39L344 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 134.1-39-39c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9z" />
    </Icon>
);

export default CloudArrowDown;