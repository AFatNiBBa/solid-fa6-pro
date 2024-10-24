
import { Icon, generic } from "../../index";

/**
 * A component that renders the `virus-covid` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/virus-covid?s=sharp-duotone-solid virus-covid}
 * @preview ![virus-covid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/virus-covid.svg)
 */
const VirusCovid: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192l0 24 0 80 0 24 48 0 0-24 0-16 25.6 0c4.3 32.9 17.2 63 36.5 88L92 386.1 80.6 374.8l-17-17L29.7 391.8l17 17 56.6 56.6 17 17 33.9-33.9-17-17L125.9 420 144 402c25 19.2 55.2 32.2 88 36.5l0 25.6-16 0-24 0 0 48 24 0 80 0 24 0 0-48-24 0-16 0 0-25.6c32.9-4.3 63-17.2 88-36.5L386.1 420l-11.3 11.3-17 17 33.9 33.9 17-17 56.6-56.6 17-17-33.9-33.9-17 17L420 386.1 402 368c19.2-25 32.2-55.2 36.5-88l25.6 0 0 16 0 24 48 0 0-24 0-80 0-24-48 0 0 24 0 16-25.6 0c-4.3-32.9-17.2-63-36.5-88L420 125.9l11.3 11.3 17 17 33.9-33.9-17-17L408.7 46.7l-17-17L357.8 63.7l17 17L386.1 92 368 110c-25-19.2-55.2-32.2-88-36.5L280 48l16 0 24 0 0-48L296 0 216 0 192 0l0 48 24 0 16 0 0 25.6c-32.9 4.3-63 17.2-88 36.5L125.9 92l11.3-11.3 17-17L120.2 29.7l-17 17L46.7 103.3l-17 17 33.9 33.9 17-17L92 125.9 110 144c-19.2 25-32.2 55.2-36.5 88L48 232l0-16 0-24L0 192zm240 32a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm88 80a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M192 176a48 48 0 1 0 0 96 48 48 0 1 0 0-96z" />
    </Icon>
);

export default VirusCovid;