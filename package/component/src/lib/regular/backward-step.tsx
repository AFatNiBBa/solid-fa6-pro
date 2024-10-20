
import { Icon } from "../../index";

/**
 * A component that renders the `backward-step` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward-step?s=regular backward-step}
 * @preview ![backward-step](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/backward-step.svg)
 */
const BackwardStep: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M80 88c0-13.3-10.7-24-24-24S32 74.7 32 88l0 138.7 0 58.6L32 424c0 13.3 10.7 24 24 24s24-10.7 24-24l0-105.1L256.7 442.6c5.1 3.5 11.1 5.4 17.3 5.4c16.6 0 30.1-13.5 30.1-30.1l0-323.8C304 77.5 290.5 64 273.9 64c-6.2 0-12.2 1.9-17.3 5.4L80 193.1 80 88zm0 172.3l0-8.6L256 128.5l0 255L80 260.3z" />
    </Icon>
);

export default BackwardStep;