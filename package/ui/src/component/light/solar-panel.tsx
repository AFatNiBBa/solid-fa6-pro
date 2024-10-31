
import { Icon } from "../../index";

/**
 * A component that renders the `solar-panel` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/solar-panel?s=light solar-panel}
 * @preview ![solar-panel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/solar-panel.svg)
 */
const SolarPanel: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M221.2 0l16.1 0L402.7 0l16.1 0L533.5 0c26.9 0 50 19.1 55 45.6L613.2 176l3 16L639 312.6c1 5.1 1 10.2 1 15.4c0 30.9-25.1 56-56 56l-148 0-16.1 0L336 384l0 96 96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l96 0 0-96-83.9 0L204 384 56 384c-30.9 0-56-25.1-56-56c0-5.2 0-10.3 1-15.4L23.8 192l3-16L51.5 45.6C56.5 19.1 79.6 0 106.5 0L221.2 0zM304 352l32 0 81.2 0L404.7 208l-169.4 0L222.8 352l81.2 0zM250.5 32L238.1 176l163.9 0L389.5 32 250.5 32zM436.8 208l12.5 144L584 352c13.3 0 24-10.7 24-24c0-5.6-.1-7.8-.4-9.5L586.7 208l-149.9 0zM434 176l146.6 0L557.1 51.5C554.9 40.2 545 32 533.5 32L421.6 32 434 176zM203.2 208L53.3 208 32.4 318.5c-.3 1.7-.4 3.9-.4 9.5c0 13.3 10.7 24 24 24l134.7 0 12.5-144zm2.8-32L218.4 32 106.5 32C95 32 85.1 40.2 82.9 51.5L59.4 176 206 176z" />
    </Icon>
);

export default SolarPanel;