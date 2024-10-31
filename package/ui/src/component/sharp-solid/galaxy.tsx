
import { Icon } from "../../index";

/**
 * A component that renders the `galaxy` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/galaxy?s=sharp-solid galaxy}
 * @preview ![galaxy](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/galaxy.svg)
 */
const Galaxy: typeof Icon = x => (
    <Icon {...x}>
        <path d="M336 0l32 0L355.4 7.8C303.8 39.5 270.6 93.4 264.9 153c16.5-5.8 34.8-9 55.1-9c2.9 0 5.8 .1 8.7 .2c.9-.1 1.9-.2 2.8-.2c1.9 0 3.7 .3 5.5 .7C435 153.3 512 235.7 512 336l0 32-7.8-12.6c-31.7-51.5-85.7-84.8-145.2-90.5c5.8 16.5 9 34.8 9 55.1c0 2.9-.1 5.8-.2 8.7c.1 .9 .2 1.9 .2 2.8c0 1.9-.3 3.7-.7 5.5C358.7 435 276.3 512 176 512l-32 0 12.6-7.8c51.5-31.7 84.8-85.7 90.5-145.2c-16.5 5.8-34.8 9-55.1 9c-2.9 0-5.8-.1-8.7-.2c-.9 .1-1.9 .2-2.8 .2c-1.9 0-3.7-.3-5.5-.7C77 358.7 0 276.3 0 176l0-32 7.8 12.6c31.7 51.5 85.7 84.8 145.2 90.5c-5.8-16.5-9-34.8-9-55.1c0-2.9 .1-5.8 .2-8.7c-.1-.9-.2-1.9-.2-2.8c0-1.9 .3-3.7 .7-5.5C153.3 77 235.7 0 336 0zM256 296l40-40-40-40-40 40 40 40z" />
    </Icon>
);

export default Galaxy;