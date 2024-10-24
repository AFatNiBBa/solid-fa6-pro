
import { Icon } from "../../index";

/**
 * A component that renders the `warehouse` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/warehouse?s=regular warehouse}
 * @preview ![warehouse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/warehouse.svg)
 */
const Warehouse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M323 51.1c-1.9-.8-4.1-.8-6 0L63 154.1c-9.1 3.7-15 12.5-15 22.2L48 488c0 13.3-10.7 24-24 24s-24-10.7-24-24L0 176.3c0-29.3 17.8-55.7 44.9-66.7L299 6.6c13.5-5.5 28.6-5.5 42.1 0l254 103c27.2 11 45 37.4 45 66.7L640 488c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-311.7c0-9.8-5.9-18.6-15-22.2L323 51.1zM144 328l0 48 352 0 0-48-352 0zm0 136l352 0 0-40-352 0 0 40zm-23.7 48l-.3 0c-13.3 0-24-10.7-24-24l0-256c0-22.1 17.9-40 40-40l368 0c22.1 0 40 17.9 40 40l0 256c0 13.3-10.7 24-24 24l-.3 0-399.4 0zM144 280l352 0 0-40-352 0 0 40z" />
    </Icon>
);

export default Warehouse;