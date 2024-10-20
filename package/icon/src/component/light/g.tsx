
import { Icon } from "../../index";

/**
 * A component that renders the `g` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/g?s=light g}
 * @preview ![g](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/g.svg)
 */
const G: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 64C118 64 32 150 32 256s86 192 192 192c98.5 0 179.8-74.3 190.7-169.9c.2-1.5-.3-2.8-1.4-4c-1.2-1.2-3.1-2.2-5.3-2.2l-165.7 0c-8.8 0-16-7.2-16-16s7.2-16 16-16L408 240c21.5 0 41.3 17.9 38.5 41.8C433.7 393.4 339 480 224 480C100.3 480 0 379.7 0 256S100.3 32 224 32c57.4 0 109.7 21.6 149.3 57c6.6 5.9 7.1 16 1.3 22.6s-16 7.1-22.6 1.3C318 82.5 273.2 64 224 64z" />
    </Icon>
);

export default G;