
import { Icon } from "../../index";

/**
 * A component that renders the `sigma` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sigma?s=thin sigma}
 * @preview ![sigma](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/sigma.svg)
 */
const Sigma: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M.7 36.7C2 33.8 4.8 32 8 32l344 0c17.7 0 32 14.3 32 32l0 64c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-64c0-8.8-7.2-16-16-16L25.8 48 206 250.7c2.7 3 2.7 7.6 0 10.6L25.8 464 352 464c8.8 0 16-7.2 16-16l0-64c0-4.4 3.6-8 8-8s8 3.6 8 8l0 64c0 17.7-14.3 32-32 32L8 480c-3.2 0-6-1.8-7.3-4.7s-.8-6.2 1.3-8.6L189.3 256 2 45.3C-.1 43-.6 39.6 .7 36.7z" />
    </Icon>
);

export default Sigma;