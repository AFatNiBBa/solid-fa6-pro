
import { Icon } from "../../index";

/**
 * A component that renders the `signature` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signature?s=light signature}
 * @preview ![signature](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/signature.svg)
 */
const Signature: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160 128c0-35.3 28.7-64 64-64s64 28.7 64 64l0 3.4c0 26.2-2.4 52.3-7.2 78L155 243.7c-34.8 9.5-59 41.1-59 77.2l0 92.6c0 36.7 29.8 66.5 66.5 66.5c24 0 46.2-13 57.9-33.9L247.5 398c20.9-37.1 37.2-76.5 48.5-117.5l7.2-25.7c1.8-6.5 3.5-13 5-19.6l125.5-34.2-48 96c-2.5 5-2.2 10.9 .7 15.6s8.1 7.6 13.6 7.6l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-134.1 0 52.4-104.8c2.8-5.6 2.1-12.4-1.9-17.3s-10.5-7-16.6-5.3L314.8 200.1c3.4-22.7 5.2-45.7 5.2-68.7l0-3.4c0-53-43-96-96-96s-96 43-96 96l0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48zm3.4 146.6l109.4-29.8-.4 1.4-7.2 25.7c-10.7 38.5-26 75.6-45.6 110.4l-27.1 48.1c-6.1 10.9-17.6 17.6-30.1 17.6c-19 0-34.5-15.4-34.5-34.5l0-92.6c0-21.6 14.5-40.6 35.4-46.3zM16 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0zm320 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l288 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-288 0z" />
    </Icon>
);

export default Signature;