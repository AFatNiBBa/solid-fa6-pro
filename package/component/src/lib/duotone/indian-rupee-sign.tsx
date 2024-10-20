
import { Icon, generic } from "../../index";

/**
 * A component that renders the `indian-rupee-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/indian-rupee-sign?s=duotone indian-rupee-sign}
 * @preview ![indian-rupee-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/indian-rupee-sign.svg)
 */
const IndianRupeeSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 176c0 17.7 14.3 32 32 32l153.3 0c4.3-9.8 6.7-20.6 6.7-32c0-1.4 0-2.8-.1-4.2s-.2-2.8-.3-4.2c-.3-2.8-.7-5.5-1.3-8.2c-1.1-5.4-2.8-10.5-4.9-15.4L32 144c-17.7 0-32 14.3-32 32zm252.4-32c2.3 10.3 3.6 21 3.6 32c0 1.4 0 2.7-.1 4.1s-.1 2.7-.2 4.1c-.2 2.7-.4 5.4-.7 8.1c-.6 5.3-1.5 10.6-2.7 15.7l35.6 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-35.6 0z" />
        <path d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l64 0 16 0c44.2 0 80 35.8 80 80s-35.8 80-80 80l-80 0c-13.9 0-26.2 9-30.5 22.2S2.1 306 13.4 314l224 160c14.4 10.3 34.4 6.9 44.6-7.4s6.9-34.4-7.4-44.6L130.3 318.9C201.2 309.9 256 249.3 256 176c0-29.6-8.9-57.1-24.2-80L288 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L112 32 96 32 32 32z" />
    </Icon>
);

export default IndianRupeeSign;