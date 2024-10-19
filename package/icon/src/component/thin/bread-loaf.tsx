
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `bread-loaf` icon from the `thin` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/bread-loaf?s=thin bread-loaf}
 * @preview ![bread-loaf](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAgMzJDMzk3LjkxIDMyIDI0Mi4zOTYgMzIgMjQwIDMyQzEwNy41IDMyIDAgMTAzLjYyNSAwIDE5MkMwIDIyNy4zNzUgMjYuODc1IDI1NiA2MCAyNTZINjRWNDQ4QzY0IDQ2NS42MjUgNzguMzc1IDQ4MCA5NiA0ODBINTQ0QzU2MS42MjUgNDgwIDU3NiA0NjUuNjI1IDU3NiA0NDhWMjU2SDU4MEM2MTMuMTI1IDI1NiA2NDAgMjI3LjM3NSA2NDAgMTkyQzY0MCAxMDMuNjI1IDUzMi41IDMyIDQwMCAzMlpNOTYgNDY0Qzg3LjE3OCA0NjQgODAgNDU2LjgyMiA4MCA0NDhWMjQwSDYwQzM1LjczOCAyNDAgMTYgMjE4LjQ2NyAxNiAxOTJDMTYgMTEyLjU5OCAxMTYuNDg2IDQ4IDI0MCA0OFM0NjQgMTEyLjU5OCA0NjQgMTkyQzQ2NCAyMTguNDY3IDQ0NC4yNjIgMjQwIDQyMCAyNDBINDAwVjQ0OEM0MDAgNDU2LjgyMiAzOTIuODIyIDQ2NCAzODQgNDY0SDk2Wk01ODAgMjQwSDU2MFY0NDhDNTYwIDQ1Ni44MjIgNTUyLjgyMiA0NjQgNTQ0IDQ2NEg0MTEuMDcyQzQxMy45MiA0NTkuMjE5IDQxNiA0NTMuOTQ5IDQxNiA0NDhWMjU2SDQyMEM0NTMuMTI1IDI1NiA0ODAgMjI3LjM3NSA0ODAgMTkyQzQ4MCAxMjguNTI5IDQyNC40MSA3My44NjEgMzQ0LjA3MiA0OEgzODRWNDguMDI1TDQwMCA0OEM1MjMuNTE0IDQ4IDYyNCAxMTIuNTk4IDYyNCAxOTJDNjI0IDIxOC40NjcgNjA0LjI2MiAyNDAgNTgwIDI0MFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BreadLoaf(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M400 32C397.91 32 242.396 32 240 32C107.5 32 0 103.625 0 192C0 227.375 26.875 256 60 256H64V448C64 465.625 78.375 480 96 480H544C561.625 480 576 465.625 576 448V256H580C613.125 256 640 227.375 640 192C640 103.625 532.5 32 400 32ZM96 464C87.178 464 80 456.822 80 448V240H60C35.738 240 16 218.467 16 192C16 112.598 116.486 48 240 48S464 112.598 464 192C464 218.467 444.262 240 420 240H400V448C400 456.822 392.822 464 384 464H96ZM580 240H560V448C560 456.822 552.822 464 544 464H411.072C413.92 459.219 416 453.949 416 448V256H420C453.125 256 480 227.375 480 192C480 128.529 424.41 73.861 344.072 48H384V48.025L400 48C523.514 48 624 112.598 624 192C624 218.467 604.262 240 580 240Z" />
        </Icon>
    </>
}