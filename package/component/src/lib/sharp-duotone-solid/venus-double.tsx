
import { Icon, generic } from "../../index";

/**
 * A component that renders the `venus-double` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/venus-double?s=sharp-duotone-solid venus-double}
 * @preview ![venus-double](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/venus-double.svg)
 */
const VenusDouble: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M112 176a80 80 0 1 0 160 0 80 80 0 1 0 -160 0zM344 34c14.6 15.6 26.8 33.4 36 53c18.8-14.4 42.4-23 68-23c61.9 0 112 50.1 112 112s-50.1 112-112 112c-25.6 0-49.1-8.6-68-23c-9.3 19.5-21.5 37.4-36 53c21 15.4 45.4 26.2 72 31.1l0 34.9-32 0-32 0 0 64 32 0 32 0 0 32 0 32 64 0 0-32 0-32 32 0 32 0 0-64-32 0-32 0 0-34.9c81.9-15 144-86.8 144-173.1C624 78.8 545.2 0 448 0c-38.9 0-74.9 12.6-104 34z" />
        <path d="M192 288a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM368 176c0 86.3-62.1 158.1-144 173.1l0 34.9 32 0 32 0 0 64-32 0-32 0 0 32 0 32-64 0 0-32 0-32-32 0-32 0 0-64 32 0 32 0 0-34.9C78.1 334.1 16 262.3 16 176C16 78.8 94.8 0 192 0s176 78.8 176 176zm32 0c0-19.8-2.8-39-8-57.2C406.5 104.7 426.2 96 448 96c44.2 0 80 35.8 80 80s-35.8 80-80 80c-21.8 0-41.5-8.7-56-22.8c5.2-18.2 8-37.3 8-57.2z" />
    </Icon>
);

export default VenusDouble;