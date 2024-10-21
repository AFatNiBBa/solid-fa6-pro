
import { Icon } from "../../index";

/**
 * A component that renders the `truck-pickup` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-pickup?s=thin truck-pickup}
 * @preview ![truck-pickup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/truck-pickup.svg)
 */
const TruckPickup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M240 72l0 120 253.8 0L387.3 57.1c-4.6-5.8-11.5-9.1-18.8-9.1L264 48c-13.3 0-24 10.7-24 24zM510.3 187l3.9 5 37.8 0c30.9 0 56 25.1 56 56l0 120 24 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-24 0-16 0-32 0c0 53-43 96-96 96s-96-43-96-96l-96 0c0 53-43 96-96 96s-96-43-96-96l-32 0-16 0L8 384c-4.4 0-8-3.6-8-8s3.6-8 8-8l24 0 0-120c0-30.9 25.1-56 56-56l136 0 0-120c0-22.1 17.9-40 40-40l104.5 0c12.2 0 23.8 5.6 31.4 15.2L510.3 187zM48 368l33.3 0c7.6-45.4 47.1-80 94.7-80s87.1 34.6 94.7 80l98.7 0c7.6-45.4 47.1-80 94.7-80s87.1 34.6 94.7 80l33.3 0 0-120c0-22.1-17.9-40-40-40L88 208c-22.1 0-40 17.9-40 40l0 120zm208 16A80 80 0 1 0 96 384a80 80 0 1 0 160 0zm208 80a80 80 0 1 0 0-160 80 80 0 1 0 0 160z" />
    </Icon>
);

export default TruckPickup;