
import { Icon } from "../../index";

/**
 * A component that renders the `slot-machine` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slot-machine?s=solid slot-machine}
 * @preview ![slot-machine](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/slot-machine.svg)
 */
const SlotMachine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 0C92.7 0 64 28.7 64 64l384 0c0-35.3-28.7-64-64-64L128 0zM64 96C28.7 96 0 124.7 0 160L0 352c0 35.3 28.7 64 64 64l0 32c0 35.3 28.7 64 64 64l288 0 32 0 80 0c53 0 96-43 96-96l0-204.2c9.8-8.8 16-21.6 16-35.8c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 14.2 6.2 27 16 35.8L560 416c0 17.7-14.3 32-32 32l-80 0 0-32c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L64 96zM56 200c0-13.3 10.7-24 24-24l59.9 0c23 0 38.5 23.5 29.4 44.6L126.1 321.5c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5L115.6 224 80 224c-13.3 0-24-10.7-24-24zm168-24l59.9 0c23 0 38.5 23.5 29.4 44.6L270.1 321.5c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5L259.6 224 224 224c-13.3 0-24-10.7-24-24s10.7-24 24-24zm120 24c0-13.3 10.7-24 24-24l59.9 0c23 0 38.5 23.5 29.4 44.6L414.1 321.5c-5.2 12.2-19.3 17.8-31.5 12.6s-17.8-19.3-12.6-31.5L403.6 224 368 224c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default SlotMachine;