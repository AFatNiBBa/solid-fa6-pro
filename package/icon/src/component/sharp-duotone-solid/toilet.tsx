
import { Icon, generic } from "../../index";

/**
 * A component that renders the `toilet` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/toilet?s=sharp-duotone-solid toilet}
 * @preview ![toilet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/toilet.svg)
 */
const Toilet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 0L0 48l24 0 8 0 384 0 8 0 24 0 0-48L424 0 24 0 0 0zM96 80l0 32 16 0 32 0 16 0 0-32-16 0-32 0L96 80z" />
        <path d="M421.6 201.4c-1.8-1.5-3.7-3-5.6-4.4L416 48 32 48l0 148.9c-1.9 1.4-3.8 2.9-5.6 4.4C10.9 214.5 0 232.9 0 256c0 46.9 14.3 84.1 37 112.5c15.1 18.9 33.3 33.1 51.9 43.9L64 512l320 0-24.9-99.6c18.6-10.8 36.8-25 51.9-43.9c22.7-28.4 37-65.5 37-112.5c0-23.1-10.9-41.5-26.4-54.6zM384 255.9c0 0 0 .1 0 .1l0 .3c0 1-.3 2.6-3.8 5.6c-4.8 4.1-14 9-29.3 13.4C320.5 284 276.1 288 224 288s-96.5-4-126.9-12.8c-15.3-4.4-24.5-9.3-29.3-13.4c-3.5-3-3.8-4.6-3.8-5.6l0-.3c0 0 0-.1 0-.1c0-1 0-2.5 3.8-5.8c4.8-4.1 14-9 29.3-13.4C127.5 228 171.9 224 224 224s96.5 4 126.9 12.8c15.3 4.4 24.5 9.3 29.3 13.4c3.8 3.2 3.8 4.8 3.8 5.8zM112 80l32 0 16 0 0 32-16 0-32 0-16 0 0-32 16 0z" />
    </Icon>
);

export default Toilet;