
import { Icon } from "../../index";

/**
 * A component that renders the `bed-bunk` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bed-bunk?s=light bed-bunk}
 * @preview ![bed-bunk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/bed-bunk.svg)
 */
const BedBunk: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 16C32 7.2 24.8 0 16 0S0 7.2 0 16L0 176 0 431.7 0 496c0 8.8 7.2 16 16 16s16-7.2 16-16l0-48.3 208 0 304 0 0 48.3c0 8.8 7.2 16 16 16s16-7.2 16-16l0-64.3L576 272l0-96 0-64C576 50.1 525.9 0 464 0L256 0c-17.7 0-32 14.3-32 32l0 128L32 160 32 16zM224 288l0 127.7-192 0L32 192l208 0 304 0 0 64-288 0c-17.7 0-32 14.3-32 32zM544 112l0 48-288 0 0-128 208 0c44.2 0 80 35.8 80 80zM256 288l288 0 0 127.7-288 0L256 288zM128 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96A64 64 0 1 0 128 0a64 64 0 1 0 0 128zm0 160a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 96a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default BedBunk;