
import { Icon } from "../../index";

/**
 * A component that renders the `signature-lock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signature-lock?s=sharp-light signature-lock}
 * @preview ![signature-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/signature-lock.svg)
 */
const SignatureLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 128c0-35.3 28.7-64 64-64s64 28.7 64 64l0 3.4c0 26.2-2.4 52.3-7.2 78L11.8 256.6 0 259.8 0 272 0 464l0 16 16 0 80 0 9.4 0 4.6-8.2L151.5 398c20.9-37.1 37.2-76.5 48.5-117.5l7.2-25.7c1.8-6.5 3.5-13 5-19.6l125.5-34.2-48 96L278.1 320l25.9 0 80 0 0-32-54.1 0 52.4-104.8 16-32-34.5 9.4L218.8 200.1c3.4-22.7 5.2-45.7 5.2-68.7l0-3.4c0-53-43-96-96-96s-96 43-96 96l0 48c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48zM384 384l-144 0-16 0 0 32 16 0 144 0 0-32zM32 284.2l144.7-39.5-.4 1.4-7.2 25.7c-10.7 38.5-26 75.6-45.6 110.4L86.6 448 32 448l0-163.8zM528 224c26.5 0 48 21.5 48 48l0 48-96 0 0-48c0-26.5 21.5-48 48-48zm-80 48l0 48-32 0 0 32 0 128 0 32 32 0 160 0 32 0 0-32 0-128 0-32-32 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zm160 80l0 128-160 0 0-128 160 0z" />
    </Icon>
);

export default SignatureLock;