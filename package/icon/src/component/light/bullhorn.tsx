
import { Icon } from "../../index";

/**
 * A component that renders the `bullhorn` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullhorn?s=light bullhorn}
 * @preview ![bullhorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bullhorn.svg)
 */
const Bullhorn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 44.2c0-36.2-44.2-53.8-69-27.5L355.1 41.9c-47.8 50.4-113 80.7-182.4 84.5L143.6 128 64 128c-35.3 0-64 28.7-64 64l0 96c0 35.3 28.7 64 64 64l0 104c0 30.9 25.1 56 56 56l16 0c30.9 0 56-25.1 56-56l0-100.6c62.1 7.9 119.8 37 163.1 82.8L379 463.3c24.9 26.2 69 8.6 69-27.5l0-391.5zM160 352.9L160 456c0 13.3-10.7 24-24 24l-16 0c-13.3 0-24-10.7-24-24l0-104 47.6 0 16.4 .9zM402.2 38.7c5-5.3 13.8-1.7 13.8 5.5l0 391.5c0 7.2-8.8 10.8-13.8 5.5l-23.8-25.1C336.5 372 282.7 341.6 224 328.5l0-177.1c58.7-13.1 112.5-43.4 154.4-87.6l23.8-25.1zM192 156.9l0 166.3c-5.8-.7-11.6-1.1-17.5-1.5L144.9 320l-.4 0-.4 0-80 0c-17.7 0-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32l80 0 .4 0 .4 0 29.7-1.6c5.8-.3 11.7-.8 17.5-1.5zM496 192c-8.8 0-16 7.2-16 16l0 64c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64c0-8.8-7.2-16-16-16z" />
    </Icon>
);

export default Bullhorn;