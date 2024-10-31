
import { Icon } from "../../index";

/**
 * A component that renders the `burger` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger?s=regular burger}
 * @preview ![burger](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/burger.svg)
 */
const Burger: typeof Icon = x => (
    <Icon {...x}>
        <path d="M396.5 134.9c-7.7-8.5-17-17.1-28.6-24.9c.1 .6 .1 1.3 .1 2c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-6.5 3.8-12 9.3-14.6c-19.9-9.1-44.5-15.6-75.3-17.1c1.2 2.3 1.9 4.9 1.9 7.7c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-2.8 .7-5.4 1.9-7.7c-30.7 1.5-55.4 8-75.3 17.1c5.5 2.5 9.3 8.1 9.3 14.6c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-.7 0-1.3 .1-2c-11.6 7.8-21 16.4-28.6 24.9c-12.8 14.2-21.5 29-27.1 41.1l335.2 0c-5.7-12.1-14.3-26.9-27.1-41.1zM450.9 224L61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1zM128 432l256 0c20.9 0 38.7-13.4 45.3-32L82.7 400c6.6 18.6 24.4 32 45.3 32zM32 384c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32c0 53-43 96-96 96l-256 0c-53 0-96-43-96-96zM16 288c0-17.7 14.3-32 32-32l416 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L48 320c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default Burger;