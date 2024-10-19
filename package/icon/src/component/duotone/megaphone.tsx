
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `megaphone` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/megaphone?s=duotone megaphone}
 * @preview ![megaphone](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTY0IDE5MlYzMjBMMTY1LjUgMzUzLjEyNUMxNjIuMjUgMzYyLjg3NSAxNjAgMzczLjEyNSAxNjAgMzg0QzE2MCA0MzcgMjAzIDQ4MCAyNTYgNDgwQzMwMC41IDQ4MCAzMzcuNjI1IDQ0OS4zNzUgMzQ4LjUgNDA4LjI1TDUxMiA0NjRWNDhMNjQgMTkyWk0yNTYgNDMyQzIyOS41IDQzMiAyMDggNDEwLjUgMjA4IDM4NEMyMDggMzc4IDIwOS4yNSAzNzIuMjUgMjExLjI1IDM2Ni44NzVMMzAyLjc1IDM5NC41QzI5OCA0MTUuODc1IDI3OC44NzUgNDMyIDI1NiA0MzJaIiBjbGFzcz0iZmEtc2Vjb25kYXJ5Ii8+PHBhdGggZD0iTTU2MCAzMkg1MjhDNTE5LjEyNSAzMiA1MTIgMzkuMTI1IDUxMiA0OFY0NjRDNTEyIDQ3Mi44NzUgNTE5LjEyNSA0ODAgNTI4IDQ4MEg1NjBDNTY4Ljg3NSA0ODAgNTc2IDQ3Mi44NzUgNTc2IDQ2NFY0OEM1NzYgMzkuMTI1IDU2OC44NzUgMzIgNTYwIDMyWk0zMiAxNjBDMTQuMzI2IDE2MCAwIDE3NC4zMjggMCAxOTJWMzIwQzAgMzM3LjY3MiAxNC4zMjYgMzUyIDMyIDM1MlM2NCAzMzcuNjcyIDY0IDMyMFYxOTJDNjQgMTc0LjMyOCA0OS42NzQgMTYwIDMyIDE2MFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function Megaphone(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M64 192V320L165.5 353.125C162.25 362.875 160 373.125 160 384C160 437 203 480 256 480C300.5 480 337.625 449.375 348.5 408.25L512 464V48L64 192ZM256 432C229.5 432 208 410.5 208 384C208 378 209.25 372.25 211.25 366.875L302.75 394.5C298 415.875 278.875 432 256 432Z" />
            <path d="M560 32H528C519.125 32 512 39.125 512 48V464C512 472.875 519.125 480 528 480H560C568.875 480 576 472.875 576 464V48C576 39.125 568.875 32 560 32ZM32 160C14.326 160 0 174.328 0 192V320C0 337.672 14.326 352 32 352S64 337.672 64 320V192C64 174.328 49.674 160 32 160Z" />
        </Icon>
    </>
}