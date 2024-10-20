
import { Icon } from "../../index";

/**
 * A component that renders the `signature-lock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signature-lock?s=sharp-thin signature-lock}
 * @preview ![signature-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/signature-lock.svg)
 */
const SignatureLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M104 48c-39.8 0-72 32.2-72 72l0 40 0 8-16 0 0-8 0-40c0-48.6 39.4-88 88-88s88 39.4 88 88l0 15.9c0 25.1-1.8 50.2-5.4 75l171.2-50.6 20.2-6-11.2 17.9L294.4 288l81.6 0 8 0 0 16-8 0-96 0-14.4 0 7.6-12.2L342 181.6 183.7 228.4c-1.2 6.7-2.6 13.4-4.1 20.1l-4.8 21.8c-10.1 45.5-26.3 89.3-48 130.5L87.1 475.7 84.8 480 80 480 8 480l-8 0 0-8L0 272l0-6 5.7-1.7 163.9-48.4c4.3-26.5 6.4-53.2 6.4-80l0-15.9c0-39.8-32.2-72-72-72zm62.4 185.5L16 278l0 186 59.2 0 37.4-70.7c21.1-39.9 36.8-82.4 46.6-126.5l4.8-21.8c.9-3.8 1.7-7.7 2.4-11.5zM208 368l8 0 160 0 8 0 0 16-8 0-160 0-8 0 0-16zM528 208c-26.5 0-48 21.5-48 48l0 64 96 0 0-64c0-26.5-21.5-48-48-48zm-64 48c0-35.3 28.7-64 64-64s64 28.7 64 64l0 64 32 0 16 0 0 16 0 160 0 16-16 0-192 0-16 0 0-16 0-160 0-16 16 0 32 0 0-64zm-32 80l0 160 192 0 0-160-32 0-16 0-96 0-16 0-32 0z" />
    </Icon>
);

export default SignatureLock;