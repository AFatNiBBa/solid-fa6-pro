
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ear-deaf` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ear-deaf?s=duotone ear-deaf}
 * @preview ![ear-deaf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ear-deaf.svg)
 */
const EarDeaf: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 480c0 8.2 3.1 16.4 9.4 22.6s14.4 9.4 22.6 9.4s16.4-3.1 22.6-9.4l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-128 128C3.1 463.6 0 471.8 0 480zM417.4 49.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l40-40c6.2-6.2 9.4-14.4 9.4-22.6s-3.1-16.4-9.4-22.6S488.2 0 480 0s-16.4 3.1-22.6 9.4l-40 40z" />
        <path d="M128.7 227.5c6.2-56 53.7-99.5 111.3-99.5c61.9 0 112 50.1 112 112c0 29.3-11.2 55.9-29.6 75.9c-17 18.4-34.4 45.1-34.4 78l0 6.1c0 26.5-21.5 48-48 48c-17.7 0-32 14.3-32 32s14.3 32 32 32c61.9 0 112-50.1 112-112l0-6.1c0-9.8 5.4-21.7 17.4-34.7C398.3 327.9 416 286 416 240c0-97.2-78.8-176-176-176C149.4 64 74.8 132.5 65.1 220.5c-1.9 17.6 10.7 33.4 28.3 35.3s33.4-10.7 35.3-28.3zM208 240c0-17.7 14.3-32 32-32s32 14.3 32 32c0 13.3 10.7 24 24 24s24-10.7 24-24c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 13.3 10.7 24 24 24s24-10.7 24-24z" />
    </Icon>
);

export default EarDeaf;