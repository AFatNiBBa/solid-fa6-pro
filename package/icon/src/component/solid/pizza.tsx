
import { Icon } from "../../index";

/**
 * A component that renders the `pizza` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pizza?s=solid pizza}
 * @preview ![pizza](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/pizza.svg)
 */
const Pizza: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M385.2 419c10.4-8.2 25.5-8.4 34.9 1s9.4 24.7-.8 33.1C375 489.9 318.1 512 256 512C114.6 512 0 397.4 0 256S114.6 0 256 0c62.1 0 119 22.1 163.3 58.8c10.2 8.5 10.1 23.8 .8 33.1s-24.5 9.2-34.9 1C349.7 64.8 304.8 48 256 48C141.1 48 48 141.1 48 256s93.1 208 208 208c48.8 0 93.7-16.8 129.2-45zm-16-49.9c6.2 6.2 6.3 16.5-.5 22.1c-69.1 57.7-172.2 54.1-237.1-10.8c-68.7-68.7-68.7-180.2 0-248.9C196.5 66.6 299.5 63 368.6 120.8c6.8 5.7 6.7 15.9 .5 22.1L267.3 244.7c-6.2 6.2-6.2 16.4 0 22.6L369.1 369.1zM192 264a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm24-88a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm72 200a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zM443.4 156.6c6.7-6.7 17.7-6.2 23 1.7c39.5 59 39.5 136.5 0 195.5c-5.2 7.8-16.3 8.3-23 1.7l-88.1-88.1c-6.2-6.2-6.2-16.4 0-22.6l24.2-24.2c3.6 2.2 7.9 3.5 12.5 3.5c13.3 0 24-10.7 24-24c0-4.6-1.3-8.9-3.5-12.5l30.9-30.9zM472 280a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm22.4 126.4c-8.9-8.9-9.4-23.1-2.3-33.5C514.8 339.6 528 299.3 528 256s-13.2-83.6-35.9-116.9c-7.1-10.4-6.6-24.6 2.3-33.5c9.9-9.9 26.2-9.4 34.3 2C558.5 149.5 576 200.7 576 256s-17.5 106.5-47.4 148.4c-8.1 11.4-24.4 11.9-34.3 2z" />
    </Icon>
);

export default Pizza;