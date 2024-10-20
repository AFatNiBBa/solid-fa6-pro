
import { Icon } from "../../index";

/**
 * A component that renders the `signature-lock` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signature-lock?s=light signature-lock}
 * @preview ![signature-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/signature-lock.svg)
 */
const SignatureLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 128c0-35.3 28.7-64 64-64s64 28.7 64 64l0 3.4c0 26.2-2.4 52.3-7.2 78L59 243.7c-34.8 9.5-59 41.1-59 77.2l0 92.6C0 450.2 29.8 480 66.5 480c24 0 46.2-13 57.9-33.9L151.5 398c20.9-37.1 37.2-76.5 48.5-117.5l7.2-25.7c1.8-6.5 3.5-13 5-19.6l125.5-34.2-48 96c-2.5 5-2.2 10.9 .7 15.6s8.1 7.6 13.6 7.6l88.6 0c5.6-9.7 13.7-17.8 23.4-23.4l0-8.6-86.1 0 52.4-104.8c2.8-5.6 2.1-12.4-1.9-17.3s-10.5-7-16.6-5.3L218.8 200.1c3.4-22.7 5.2-45.7 5.2-68.7l0-3.4c0-53-43-96-96-96s-96 43-96 96l0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48zM240 384c-8.8 0-16 7.2-16 16s7.2 16 16 16l144 0 0-32-144 0zM67.4 274.6l109.4-29.8-.4 1.4-7.2 25.7c-10.7 38.5-26 75.6-45.6 110.4L96.5 430.4C90.4 441.3 78.9 448 66.5 448c-19 0-34.5-15.4-34.5-34.5l0-92.6c0-21.6 14.5-40.6 35.4-46.3zM528 224c26.5 0 48 21.5 48 48l0 48-96 0 0-48c0-26.5 21.5-48 48-48zm-80 48l0 48c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l160 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32l0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zm160 80l0 128-160 0 0-128 160 0z" />
    </Icon>
);

export default SignatureLock;