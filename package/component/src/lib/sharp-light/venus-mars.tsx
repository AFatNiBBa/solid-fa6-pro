
import { Icon } from "../../index";

/**
 * A component that renders the `venus-mars` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/venus-mars?s=sharp-light venus-mars}
 * @preview ![venus-mars](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/venus-mars.svg)
 */
const VenusMars: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M176 320a144 144 0 1 0 0-288 144 144 0 1 0 0 288zM352 176c0 91.8-70.3 167.2-160 175.3l0 64.7 64 0 16 0 0 32-16 0-64 0 0 48 0 16-32 0 0-16 0-48-64 0-16 0 0-32 16 0 64 0 0-64.7C70.3 343.2 0 267.8 0 176C0 78.8 78.8 0 176 0s176 78.8 176 176zM271.9 360.6c9.7-5.1 19-10.9 27.8-17.4C325.6 368.5 361 384 400 384c79.5 0 144-64.5 144-144s-64.5-144-144-144c-10.5 0-20.7 1.1-30.6 3.3c-4.1-10.2-8.9-20.1-14.5-29.4C369.3 66 384.4 64 400 64c42.8 0 82.1 15.3 112.6 40.7L585.4 32 496 32l-16 0 0-32 16 0L624 0l16 0 0 16 0 128 0 16-32 0 0-16 0-89.4-72.7 72.7C560.7 157.9 576 197.2 576 240c0 97.2-78.8 176-176 176c-50.5 0-96-21.3-128.1-55.4z" />
    </Icon>
);

export default VenusMars;