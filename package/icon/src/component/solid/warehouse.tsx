
import { Icon } from "../../index";

/**
 * A component that renders the `warehouse` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/warehouse?s=solid warehouse}
 * @preview ![warehouse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/warehouse.svg)
 */
const Warehouse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 488L0 171.3c0-26.2 15.9-49.7 40.2-59.4L308.1 4.8c7.6-3.1 16.1-3.1 23.8 0L599.8 111.9c24.3 9.7 40.2 33.3 40.2 59.4L640 488c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-264c0-17.7-14.3-32-32-32l-384 0c-17.7 0-32 14.3-32 32l0 264c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zm488 24l-336 0c-13.3 0-24-10.7-24-24l0-56 384 0 0 56c0 13.3-10.7 24-24 24zM128 400l0-64 384 0 0 64-384 0zm0-96l0-80 384 0 0 80-384 0z" />
    </Icon>
);

export default Warehouse;