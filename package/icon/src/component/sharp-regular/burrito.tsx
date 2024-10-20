
import { Icon } from "../../index";

/**
 * A component that renders the `burrito` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burrito?s=sharp-regular burrito}
 * @preview ![burrito](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/burrito.svg)
 */
const Burrito: typeof Icon = x => (
    <Icon {...x}>
        <path d="M242 62c8.2-35.5 40-62 78-62c11.4 0 22.2 2.4 32 6.7C361.8 2.4 372.6 0 384 0c34.6 0 64.1 22 75.2 52.8C490 63.9 512 93.4 512 128c0 11.4-2.4 22.2-6.7 32c2.7 6.1 4.6 12.7 5.7 19.6c6.6 41.7-20.4 81-61 90.4L208 512l-96 0L0 400l0-96L242 62zM54.1 317.8c18 6.6 37.5 10.2 57.9 10.2c75.6 0 139.5-49.9 160.6-118.6c4.8-15.6 7.4-32.2 7.4-49.4c0-20.3-3.6-39.8-10.2-57.9L54.1 317.8zM48 380.1L131.9 464l56.2 0L409.9 242.2c-18-6.6-37.5-10.2-57.9-10.2c-13 0-25.7 1.5-37.9 4.3C283.3 317.9 204.5 376 112 376c-22.3 0-43.8-3.4-64-9.6l0 13.8z" />
    </Icon>
);

export default Burrito;