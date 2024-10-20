
import { Icon } from "../../index";

/**
 * A component that renders the `clouds` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clouds?s=sharp-light clouds}
 * @preview ![clouds](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/clouds.svg)
 */
const Clouds: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M160.9 288c1.2-11.1 3.7-21.8 7.3-32L96 256l-64 0 0-64c0-35.3 28.6-64 63.9-64l1 0 27.9 .2 4-27.6C134.4 61.8 167.7 32 208 32c31.9 0 59.4 18.6 72.3 45.7L289 96l20.2 0L352 96c35.3 0 64 28.7 64 64c0 14.7-5 28.3-13.3 39.1l.9 .8c12.2-4.5 25.3-7.2 39-7.8c3.6-10 5.5-20.9 5.5-32.1c0-53-43-96-96-96l-42.8 0C291.2 26.2 252.7 0 208 0C151.6 0 104.9 41.7 97.1 96L96 96C43 96 0 139 0 192l0 64 0 32 32 0 64 0 64.9 0zM512 320l0 32 32 0c35.3 0 64 28.7 64 64l0 64-64 0-320 0-64 0 0-64c0-27.8 17.8-51.6 42.7-60.4l21.3-7.5 0-22.6 0-21.5c0-44.2 35.8-80 80-80c27 0 50.9 13.4 65.4 34l17.8 25.2 25.9-16.9c10-6.5 22-10.3 34.9-10.3c35.3 0 64 28.7 64 64zM128 512l32 0 64 0 320 0 64 0 32 0 0-32 0-64c0-53-43-96-96-96c0-53-43-96-96-96c-19.3 0-37.3 5.7-52.4 15.5C375.3 210.8 341.9 192 304 192c-61.9 0-112 50.1-112 112l0 21.5c-37.3 13.2-64 48.7-64 90.5l0 64 0 32z" />
    </Icon>
);

export default Clouds;