
import { Icon } from "../../index";

/**
 * A component that renders the `bullseye-pointer` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullseye-pointer?s=light bullseye-pointer}
 * @preview ![bullseye-pointer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bullseye-pointer.svg)
 */
const BullseyePointer: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480c123.7 0 224-100.3 224-224S379.7 32 256 32S32 132.3 32 256c0 10.4 .7 20.6 2.1 30.6l-9.6 3.5c-7.8 2.9-14.7 7.7-19.9 13.9C1.5 288.5 0 272.4 0 256C0 114.6 114.6 0 256 0S512 114.6 512 256s-114.6 256-256 256c-16.4 0-32.5-1.5-48.1-4.5c6.2-5.3 11-12.1 13.9-19.9l3.5-9.6c10 1.4 20.2 2.1 30.6 2.1zm-7.7-64.2L260 383.9c68.8-2.1 124-58.6 124-127.9c0-70.7-57.3-128-128-128c-69.3 0-125.8 55.1-127.9 124L96.2 263.7c-.1-2.6-.2-5.1-.2-7.7c0-88.4 71.6-160 160-160s160 71.6 160 160s-71.6 160-160 160c-2.6 0-5.2-.1-7.7-.2zM271 261.5l-79.2 215c-2.3 6.2-8.1 10.3-14.7 10.5s-12.6-3.8-15.1-9.9l-30.5-74L27.3 507.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L108.9 380.5 34.9 350c-6.1-2.5-10-8.5-9.9-15.1s4.3-12.4 10.5-14.7l215-79.2c5.9-2.2 12.4-.7 16.8 3.7s5.9 11 3.7 16.8zM143.3 360c3.9 1.6 7.1 4.8 8.7 8.7l24 58.2L229 283 85.1 336l58.2 24z" />
    </Icon>
);

export default BullseyePointer;