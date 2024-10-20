
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cannon` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cannon?s=duotone cannon}
 * @preview ![cannon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cannon.svg)
 */
const Cannon: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 408c0-17.6 9.7-34.6 26.5-43l22.5-11.3c1 7.9 2.6 15.8 5 23.6c1.2 3.9 2.5 7.8 4.1 11.6c.8 1.9 1.6 3.8 2.4 5.8c.4 .9 .8 1.9 1.3 2.9c.4 .9 .8 1.7 1.3 2.7c7.5 15 17.3 28.2 28.8 39.3L69.5 450.9c-23.7 11.9-52.5 2.2-64.4-21.5C1.6 422.6 0 415.3 0 408zm288-40c0-61.9 50.1-112 112-112c41.3 0 77.4 22.4 96.8 55.6c9.7 16.6 15.2 35.8 15.2 56.4c0 61.9-50.1 112-112 112c-37.4 0-70.5-18.3-90.9-46.5C295.8 415.1 288 392.5 288 368zm80 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M256.4 464.8c-71.1 35.6-157.6 6.7-193.2-64.4s-6.7-157.6 64.4-193.2c49.5-24 287.2-107.9 394.6-145.5c30.3-10.6 63.6 3.1 78 31.8L630.9 155c14.4 28.7 5.3 63.6-21.4 81.5C580.3 256.1 540 283 496.8 311.6C477.4 278.4 441.3 256 400 256c-61.9 0-112 50.1-112 112c0 24.5 7.8 47.1 21.2 65.5c-23.4 14.6-42 25.7-52.7 31.3z" />
    </Icon>
);

export default Cannon;