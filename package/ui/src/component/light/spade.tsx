
import { Icon } from "../../index";

/**
 * A component that renders the `spade` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spade?s=light spade}
 * @preview ![spade](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/spade.svg)
 */
const Spade: typeof Icon = x => (
    <Icon {...x}>
        <path d="M449.2 231.8c43.3 44.9 41 119.4-6.8 161.2c-41.5 34.7-104.2 29.3-143.7-10.6l-18.5-20.5c-6-6.6-14.4-10.4-23.3-10.5s-17.4 3.5-23.6 9.9l-19.8 20.8C173.6 422.6 110 427.4 70.7 393.2l-.2-.2s0 0 0 0c-48.7-41.8-51.1-116.3-7.8-161.2c0 0 0 0 0 0L256.4 32.1c.1 0 .2 .1 .3 .2L449.2 231.8s0 0 0 0zm23-22.2L279.4 9.7c-13-13-34-13-45.9 0L39.7 209.5c-55.9 57.9-52.9 153.8 10 207.8c53.1 46.3 134.4 38.2 184.6-10.8c.7-.7 1.5-1.5 2.2-2.2l3.5-3.7 0 79.4-64 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l160 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-64 0 0-79.4 3.4 3.8c.9 .9 1.8 1.8 2.7 2.7c50.2 48.6 130.1 56.4 185.1 10.3c61.9-53.9 64.9-149.8 9-207.8z" />
    </Icon>
);

export default Spade;