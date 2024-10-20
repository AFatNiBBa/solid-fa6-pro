
import { Icon, generic } from "../../index";

/**
 * A component that renders the `virus-covid` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/virus-covid?s=duotone virus-covid}
 * @preview ![virus-covid](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/virus-covid.svg)
 */
const VirusCovid: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 216l0 80c0 13.3 10.7 24 24 24s24-10.7 24-24l0-16 25.6 0c4.3 32.9 17.2 63 36.5 88L92 386.1 80.6 374.8c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l56.6 56.6c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L125.9 420 144 402c25 19.2 55.2 32.2 88 36.5l0 25.6-16 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0-25.6c32.9-4.3 63-17.2 88-36.5L386.1 420l-11.3 11.3c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l56.6-56.6c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L420 386.1 402 368c19.2-25 32.2-55.2 36.5-88l25.6 0 0 16c0 13.3 10.7 24 24 24s24-10.7 24-24l0-80c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 16-25.6 0c-4.3-32.9-17.2-63-36.5-88L420 125.9l11.3 11.3c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L408.7 46.7c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L386.1 92 368 110c-25-19.2-55.2-32.2-88-36.5L280 48l16 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L216 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l16 0 0 25.6c-32.9 4.3-63 17.2-88 36.5L125.9 92l11.3-11.3c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L46.7 103.3c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L92 125.9 110 144c-19.2 25-32.2 55.2-36.5 88L48 232l0-16c0-13.3-10.7-24-24-24s-24 10.7-24 24zm240 8a48 48 0 1 1 -96 0 48 48 0 1 1 96 0zm88 80a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M192 176a48 48 0 1 0 0 96 48 48 0 1 0 0-96z" />
    </Icon>
);

export default VirusCovid;