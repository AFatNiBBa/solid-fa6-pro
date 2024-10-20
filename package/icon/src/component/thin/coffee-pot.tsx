
import { Icon } from "../../index";

/**
 * A component that renders the `coffee-pot` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/coffee-pot?s=thin coffee-pot}
 * @preview ![coffee-pot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/coffee-pot.svg)
 */
const CoffeePot: typeof Icon = x => (
    <Icon {...x}>
        <path d="M72 48c-30.9 0-56 25.1-56 56l0 112c0 4.4-3.6 8-8 8s-8-3.6-8-8L0 104C0 64.2 32.2 32 72 32l37.2 0L120 32l334.1 0C468.4 32 480 43.6 480 57.9c0 4-.9 8-2.7 11.6L421.5 181c54.3 33.9 90.5 94.2 90.5 163c0 55.5-34.6 99.4-55.9 121.2C446.2 475.3 432.3 480 418 480L158 480c-14.2 0-28.1-4.7-38.1-14.8C98.6 443.4 64 399.5 64 344c0-69 36.4-129.5 91-163.3L97.1 50.6c-.4-.8-.6-1.7-.8-2.6L72 48zm98.4 128l235.7 0L463 62.3c.7-1.4 1-2.9 1-4.4c0-5.5-4.4-9.9-9.9-9.9L120 48l-6.5 0 56.9 128zM416 192l-256 0s0 0 0 0l7.2 0c-41.1 24.1-71.6 64.3-82.7 112l406.9 0c-11.1-47.7-41.6-87.9-82.7-112l7.2 0s0 0 0 0zm78.4 128L81.6 320c-1.1 7.8-1.6 15.9-1.6 24c0 49.1 30.9 89.1 51.3 110c6.3 6.5 15.8 10 26.6 10L418 464c10.9 0 20.3-3.6 26.6-10c20.4-20.9 51.3-60.9 51.3-110c0-8.1-.6-16.2-1.6-24z" />
    </Icon>
);

export default CoffeePot;