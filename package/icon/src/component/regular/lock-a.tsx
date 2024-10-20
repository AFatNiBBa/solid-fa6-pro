
import { Icon } from "../../index";

/**
 * A component that renders the `lock-a` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock-a?s=regular lock-a}
 * @preview ![lock-a](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/lock-a.svg)
 */
const LockA: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 48c44.2 0 80 35.8 80 80l0 32-160 0 0-32c0-44.2 35.8-80 80-80zM96 128l0 32-32 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-224c0-35.3-28.7-64-64-64l-32 0 0-32C352 57.3 294.7 0 224 0S96 57.3 96 128zM64 208l32 0 48 0 160 0 48 0 32 0c8.8 0 16 7.2 16 16l0 224c0 8.8-7.2 16-16 16L64 464c-8.8 0-16-7.2-16-16l0-224c0-8.8 7.2-16 16-16zm58.5 197.3c-5.9 11.9-1.1 26.3 10.7 32.2s26.3 1.1 32.2-10.7L178.8 400l90.3 0 13.4 26.7c5.9 11.9 20.3 16.7 32.2 10.7s16.7-20.3 10.7-32.2L245.6 245.5c-1.2-2.4-2.7-4.6-4.6-6.5c-2.2-2.2-4.7-3.9-7.4-5c-3.1-1.3-6.3-2-9.5-2s-6.4 .6-9.5 2c-2.7 1.2-5.3 2.9-7.4 5c-1.9 1.9-3.4 4.1-4.6 6.5L122.5 405.3zM202.8 352L224 309.7 245.2 352l-42.3 0z" />
    </Icon>
);

export default LockA;