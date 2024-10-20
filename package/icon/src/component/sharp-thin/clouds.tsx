
import { Icon } from "../../index";

/**
 * A component that renders the `clouds` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clouds?s=sharp-thin clouds}
 * @preview ![clouds](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/clouds.svg)
 */
const Clouds: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 272l-80 0 0-80c0-44.2 35.8-80 80-80c0 0 0 0 0 0l1 0 14 .1 2-13.8C119.6 51.8 159.6 16 208 16c38.3 0 71.3 22.4 86.8 54.9l4.3 9.1 10.1 0L352 80c44.2 0 80 35.8 80 80c0 12.2-2.7 23.8-7.6 34.2c5.9-1.1 12-1.8 18.1-2.1c3.6-10 5.5-20.9 5.5-32.1c0-53-43-96-96-96l-42.8 0C291.2 26.2 252.7 0 208 0C151.6 0 104.9 41.7 97.1 96L96 96C43 96 0 139 0 192l0 80 0 16 16 0 80 0 64.9 0c.6-5.4 1.5-10.8 2.7-16L96 272zm432 48l0 16 16 0c44.2 0 80 35.8 80 80l0 80-80 0-320 0-80 0 0-80c0-34.8 22.2-64.5 53.3-75.5l10.7-3.8 0-11.3 0-21.5c0-53 43-96 96-96c32.4 0 61.1 16.1 78.5 40.8l8.9 12.6 12.9-8.4c12.5-8.2 27.5-12.9 43.7-12.9c44.2 0 80 35.8 80 80zM128 512l16 0 80 0 320 0 80 0 16 0 0-16 0-80c0-53-43-96-96-96c0-53-43-96-96-96c-19.3 0-37.3 5.7-52.4 15.5C375.3 210.8 341.9 192 304 192c-61.9 0-112 50.1-112 112l0 21.5c-37.3 13.2-64 48.7-64 90.5l0 80 0 16z" />
    </Icon>
);

export default Clouds;