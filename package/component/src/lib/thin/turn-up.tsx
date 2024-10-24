
import { Icon } from "../../index";

/**
 * A component that renders the `turn-up` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/turn-up?s=thin turn-up}
 * @preview ![turn-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/turn-up.svg)
 */
const TurnUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M144 176l-89.1 0c-3.8 0-6.9-3.1-6.9-6.9c0-1.8 .7-3.5 1.9-4.7L190.1 16.8c.5-.5 1.2-.8 1.9-.8s1.4 .3 1.9 .8L334.1 164.4c1.2 1.3 1.9 3 1.9 4.7c0 3.8-3.1 6.9-6.9 6.9L240 176c-8.8 0-16 7.2-16 16l0 208c0 53-43 96-96 96l-88 0c-13.3 0-24-10.7-24-24l0-16c0-13.3 10.7-24 24-24l88 0c17.7 0 32-14.3 32-32l0-208c0-8.8-7.2-16-16-16zM178.5 5.8L38.3 153.4c-4 4.3-6.3 9.9-6.3 15.8C32 181.8 42.2 192 54.9 192l73.1 0 16 0 0 16 0 192c0 8.8-7.2 16-16 16l-88 0c-22.1 0-40 17.9-40 40l0 16c0 22.1 17.9 40 40 40l88 0c61.9 0 112-50.1 112-112l0-192 0-16 16 0 73.1 0c12.6 0 22.9-10.2 22.9-22.9c0-5.9-2.3-11.5-6.3-15.8L205.5 5.8C202 2.1 197.1 0 192 0s-10 2.1-13.5 5.8z" />
    </Icon>
);

export default TurnUp;