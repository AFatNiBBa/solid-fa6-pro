
import { Icon } from "../../index";

/**
 * A component that renders the `globe-pointer` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/globe-pointer?s=thin globe-pointer}
 * @preview ![globe-pointer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/globe-pointer.svg)
 */
const GlobePointer: typeof Icon = x => (
    <Icon {...x}>
        <path d="M332.2 429.9C309.9 474.5 282 496 256 496c-8.3 0-16.7-2.2-25.1-6.6l-.4 1.5c-2.1 7.2-6 13.5-11.3 18.4c12 1.7 24.3 2.6 36.8 2.6c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256c0 12.5 .9 24.8 2.6 36.8c4-4.4 9.1-7.9 14.8-10.1C16.5 274 16 265 16 256c0-28.1 4.8-55 13.7-80l104.7 0c-3.9 23.7-6.1 48.8-6.3 75l16.1-4.6c.5-24.6 2.7-48.3 6.5-70.4l210.8 0c4.3 25 6.6 51.9 6.6 80s-2.3 55-6.6 80l-86.7 0-4.6 16 88.2 0c-6.2 29.5-15.2 55.9-26.2 77.9zM179.8 82.1C202.1 37.5 230 16 256 16s53.9 21.5 76.2 66.1c11 21.9 19.9 48.3 26.2 77.9l-204.7 0c6.2-29.6 15.2-55.9 26.2-77.9zM384 256c0-27.9-2.2-54.8-6.4-80l104.7 0c8.8 25 13.7 51.9 13.7 80s-4.8 55-13.7 80l-104.7 0c4.1-25.2 6.4-52.1 6.4-80zm-9.3-96C362.2 98.2 337.9 48.3 307.5 21.5C383.2 38.1 445.6 90.5 476 160l-101.3 0zM36 160C66.4 90.5 128.8 38.1 204.5 21.5C174.1 48.3 149.8 98.2 137.3 160L36 160zM374.7 352L476 352c-30.4 69.5-92.8 121.9-168.6 138.5c30.5-26.8 54.7-76.6 67.2-138.5zm-111-93.8c.8-2.8 0-5.8-2-7.9s-5.1-2.8-7.9-2l-224 64c-3.4 1-5.7 4-5.8 7.6s2.2 6.7 5.6 7.7l108.7 34.8L2.3 498.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L149.6 373.7l34.8 108.7c1.1 3.4 4.2 5.6 7.7 5.6s6.6-2.4 7.6-5.8l64-224zM59.6 320.4l184.8-52.8L191.6 452.4l-30.7-96c-.8-2.5-2.7-4.4-5.2-5.2l-96-30.7z" />
    </Icon>
);

export default GlobePointer;