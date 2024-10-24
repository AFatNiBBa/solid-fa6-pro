
import { Icon, generic } from "../../index";

/**
 * A component that renders the `indian-rupee-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/indian-rupee-sign?s=sharp-duotone-solid indian-rupee-sign}
 * @preview ![indian-rupee-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/indian-rupee-sign.svg)
 */
const IndianRupeeSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 144l0 64 32 0 153.3 0c4.3-9.8 6.7-20.6 6.7-32c0-1.4 0-2.9-.1-4.3c-.1-1.4-.2-2.8-.3-4.1c-.3-2.8-.7-5.5-1.3-8.2c-1.1-5.4-2.8-10.5-4.9-15.4L32 144 0 144zm252.4 0c2.3 10.3 3.6 21 3.6 32c0 2.8-.1 5.5-.2 8.2c-.2 2.7-.4 5.4-.7 8c-.6 5.3-1.5 10.6-2.7 15.7l35.6 0 32 0 0-64-32 0-35.6 0z" />
        <path d="M32 32L0 32 0 96l32 0 32 0 32 0 16 0c44.2 0 80 35.8 80 80s-35.8 80-80 80l-80 0L0 256l0 32 0 11.1 0 17.5L14.8 326 222.8 459l27 17.2 34.5-53.9-27-17.2L123.5 319.6C197.6 313.7 256 251.7 256 176c0-29.6-8.9-57.1-24.2-80L288 96l32 0 0-64-32 0L112 32 96 32 64 32 32 32z" />
    </Icon>
);

export default IndianRupeeSign;