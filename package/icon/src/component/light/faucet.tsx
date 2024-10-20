
import { Icon } from "../../index";

/**
 * A component that renders the `faucet` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/faucet?s=light faucet}
 * @preview ![faucet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/faucet.svg)
 */
const Faucet: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 80c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48L80 128c-8.8 0-16 7.2-16 16s7.2 16 16 16l128 0 0 48-18.7 0c-12.7 0-24.9 5.1-33.9 14.1L121.4 256 16 256c-8.8 0-16 7.2-16 16s7.2 16 16 16l112 0c4.2 0 8.3-1.7 11.3-4.7l38.6-38.6c3-3 7.1-4.7 11.3-4.7l69.5 0c4.2 0 8.3 1.7 11.3 4.7l38.6 38.6c3 3 7.1 4.7 11.3 4.7l48 0c61.9 0 112 50.1 112 112c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16c0-26.5-21.5-48-48-48l-60.8 0c-5.7 0-11 3-13.8 8c-13.9 24-39.7 40-69.3 40s-55.5-16.1-69.3-40c-2.9-4.9-8.1-8-13.8-8L16 352c-8.8 0-16 7.2-16 16s7.2 16 16 16l116.1 0c20.2 29 53.8 48 91.9 48s71.7-19 91.9-48l52.1 0c8.8 0 16 7.2 16 16c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48c0-79.5-64.5-144-144-144l-41.4 0-33.9-33.9c-9-9-21.2-14.1-33.9-14.1L240 208l0-48 128 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-128 0 0-48z" />
    </Icon>
);

export default Faucet;