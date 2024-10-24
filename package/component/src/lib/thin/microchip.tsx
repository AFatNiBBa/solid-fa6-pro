
import { Icon } from "../../index";

/**
 * A component that renders the `microchip` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/microchip?s=thin microchip}
 * @preview ![microchip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/microchip.svg)
 */
const Microchip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M168 8c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 56-24 0c-35.3 0-64 28.7-64 64l0 24L8 152c-4.4 0-8 3.6-8 8s3.6 8 8 8l56 0 0 80L8 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l56 0 0 80L8 344c-4.4 0-8 3.6-8 8s3.6 8 8 8l56 0 0 24c0 35.3 28.7 64 64 64l24 0 0 56c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56 80 0 0 56c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56 80 0 0 56c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56 24 0c35.3 0 64-28.7 64-64l0-24 56 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-56 0 0-80 56 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-56 0 0-80 56 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-56 0 0-24c0-35.3-28.7-64-64-64l-24 0 0-56c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 56-80 0 0-56c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 56-80 0 0-56zm88 72l96 0 32 0c26.5 0 48 21.5 48 48l0 32 0 96 0 96 0 32c0 26.5-21.5 48-48 48l-32 0-96 0-96 0-32 0c-26.5 0-48-21.5-48-48l0-32 0-96 0-96 0-32c0-26.5 21.5-48 48-48l32 0 96 0zm112 80l0 192c0 8.8-7.2 16-16 16l-192 0c-8.8 0-16-7.2-16-16l0-192c0-8.8 7.2-16 16-16l192 0c8.8 0 16 7.2 16 16zM160 128c-17.7 0-32 14.3-32 32l0 192c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32l-192 0z" />
    </Icon>
);

export default Microchip;