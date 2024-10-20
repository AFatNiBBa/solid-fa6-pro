
import { Icon, generic } from "../../index";

/**
 * A component that renders the `signature-lock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signature-lock?s=sharp-duotone-solid signature-lock}
 * @preview ![signature-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/signature-lock.svg)
 */
const SignatureLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 264.2L0 288 0 448l0 32 32 0 64 0 18.6 0 9.2-16.1 25.5-44.7c26.8-47 46.5-97.7 58.4-150.5L288 244.6l0 43.4 0 32 32 0 32 0 32 0 0-32 0-32-32 0 0-54.4 0-43-41.2 12.4-90.4 27.1c2.4-20.7 3.6-41.4 3.6-62.3l0-7.8c0-53-43-96-96-96s-96 43-96 96l0 32 0 32 64 0 0-32 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 7.8c0 27.7-2.4 55.3-7.1 82.5l-130 39L0 264.2zm64 47.6l71.8-21.5c-10.4 33.8-24.5 66.4-42.1 97.2L77.4 416 64 416l0-104.2zM187.5 416L384 416l0-48-174.1 0c-6.7 16.3-14.2 32.3-22.3 48z" />
        <path d="M496 272l0 48 64 0 0-48c0-17.7-14.3-32-32-32s-32 14.3-32 32zm-48 48l0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0z" />
    </Icon>
);

export default SignatureLock;