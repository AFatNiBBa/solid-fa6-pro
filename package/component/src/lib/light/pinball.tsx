
import { Icon } from "../../index";

/**
 * A component that renders the `pinball` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pinball?s=light pinball}
 * @preview ![pinball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/pinball.svg)
 */
const Pinball: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 64a64 64 0 1 1 0 128 64 64 0 1 1 0-128zm0 160a96 96 0 1 0 0-192 96 96 0 1 0 0 192zM120 288a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM383.9 448L76.2 348.9c0 0 0 0 0 0c-8.1-2.6-15.2-6.7-21.3-11.8c-27.1-22.7-30.6-63.2-7.9-90.2s63-30.6 90.1-7.9c0 0 0 0 0 0L383 447.2l.5 .4 .4 .3c0 0 0 0 0 .1c0 0 0 0 0 0zm19.8-25.2l-246-208.3c-40.6-34.1-101.2-28.8-135.2 11.8S-6.3 327.5 34.3 361.6c9.2 7.7 19.9 13.8 32 17.7l307.8 99.1c14.9 4.8 30.7-1.8 37.9-15c7.4-12.8 4.2-30.8-8.4-40.6z" />
    </Icon>
);

export default Pinball;