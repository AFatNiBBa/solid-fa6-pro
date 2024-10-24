
import { Icon } from "../../index";

/**
 * A component that renders the `sigma` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sigma?s=regular sigma}
 * @preview ![sigma](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/sigma.svg)
 */
const Sigma: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M1.8 46.8C5.5 37.8 14.3 32 24 32l304 0c30.9 0 56 25.1 56 56l0 48c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-48c0-4.4-3.6-8-8-8L81.9 80 241 239c9.4 9.4 9.4 24.6 0 33.9L81.9 432 328 432c4.4 0 8-3.6 8-8l0-48c0-13.3 10.7-24 24-24s24 10.7 24 24l0 48c0 30.9-25.1 56-56 56L24 480c-9.7 0-18.5-5.8-22.2-14.8s-1.7-19.3 5.2-26.2l183-183L7 73C.2 66.1-1.9 55.8 1.8 46.8z" />
    </Icon>
);

export default Sigma;