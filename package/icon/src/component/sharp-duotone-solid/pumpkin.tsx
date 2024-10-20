
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pumpkin` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pumpkin?s=sharp-duotone-solid pumpkin}
 * @preview ![pumpkin](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pumpkin.svg)
 */
const Pumpkin: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 320C0 426 68.1 512 152 512c24.4 0 47.5-7.3 68-20.2c20.5 12.9 43.6 20.2 68 20.2s47.5-7.3 68-20.2c20.5 12.9 43.6 20.2 68 20.2c83.9 0 152-86 152-192s-68.1-192-152-192c-10.2 0-20.1 1.3-29.8 3.7c15.4 11.7 28.9 25.9 39.8 42C392.6 144.9 342.3 128 288 128s-104.6 16.9-146 45.7c10.9-16.1 24.3-30.3 39.8-42c-9.6-2.4-19.6-3.7-29.8-3.7C68.1 128 0 214 0 320z" />
        <path d="M288 0L236.1 103.8C252.5 98.7 269.9 96 288 96c22.6 0 44.2 4.3 64 12l0-76L288 0z" />
    </Icon>
);

export default Pumpkin;