
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `basket-shopping-simple` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/basket-shopping-simple?s=duotone basket-shopping-simple}
 * @preview ![basket-shopping-simple](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTU2MCAxOTIuMDFINDU4LjQxTDQ2OS4yOTcgMjEyLjk0N0M0NzUuNDA2IDIyNC42OTYgNDcwLjgyOCAyMzkuMTk2IDQ1OS4wNzggMjQ1LjI4OUM0NTUuNTMxIDI0Ny4xMzMgNDUxLjc1IDI0OC4wMDggNDQ4LjAxNiAyNDguMDA4QzQzOS4zNDQgMjQ4LjAwOCA0MzAuOTg0IDI0My4yODkgNDI2LjcwMyAyMzUuMDcxTDQwNC4zMTEgMTkyLjAxSDE3MS42ODlMMTQ5LjI5NyAyMzUuMDcxQzE0NS4wMTYgMjQzLjI4OSAxMzYuNjQxIDI0OC4wMDggMTI3Ljk4NCAyNDguMDA4QzEyNC4yNSAyNDguMDA4IDEyMC40NjkgMjQ3LjEzMyAxMTYuOTIyIDI0NS4yODlDMTA1LjE3MiAyMzkuMTk2IDEwMC41OTQgMjI0LjY5NiAxMDYuNzAzIDIxMi45NDdMMTE3LjU5IDE5Mi4wMUgxNkM3LjE2NCAxOTIuMDEgMCAxOTkuMTc0IDAgMjA4LjAwOVYyNDAuMDA4QzAgMjQ4Ljg0NCA3LjE2NCAyNTYuMDA4IDE2IDI1Ni4wMDhIMzkuMTExTDg0Ljg2MyA0NjEuODg0QzkxLjM3MSA0OTEuMTY3IDExNy4zNDIgNTEyIDE0Ny4zNCA1MTJINDI4LjY2MkM0NTguNjU4IDUxMiA0ODQuNjMxIDQ5MS4xNjcgNDkxLjEzNyA0NjEuODg0TDUzNi44ODkgMjU2LjAwOEg1NjBDNTY4LjgzOCAyNTYuMDA4IDU3NiAyNDguODQ0IDU3NiAyNDAuMDA4VjIwOC4wMDlDNTc2IDE5OS4xNzQgNTY4LjgzOCAxOTIuMDEgNTYwIDE5Mi4wMVoiIGNsYXNzPSJmYS1zZWNvbmRhcnkiLz48cGF0aCBkPSJNMjQzLjA4MyAyLjczNEMyMzEuMzE3IC0zLjM5MSAyMTYuODMzIDEuMjAzIDIxMC43MDggMTIuOTUzTDEwNi43MDggMjEyLjk0N0MxMDAuNTk4IDIyNC42OTYgMTA1LjE3NiAyMzkuMTk2IDExNi45MjYgMjQ1LjI4OUMxMjAuNDczIDI0Ny4xMzMgMTI0LjI1NSAyNDguMDA4IDEyNy45ODkgMjQ4LjAwOEMxMzYuNjQ1IDI0OC4wMDggMTQ1LjAyIDI0My4yODkgMTQ5LjMwMSAyMzUuMDcxTDI1My4zMDEgMzUuMDc3QzI1OS40MTEgMjMuMzI3IDI1NC44MzMgOC44MjggMjQzLjA4MyAyLjczNFpNNDY5LjMwMSAyMTIuOTQ3TDM2NS4zMDEgMTIuOTUzQzM1OS4xNjEgMS4xNzIgMzQ0LjcyMyAtMy40MjIgMzMyLjkyNiAyLjczNEMzMjEuMTc2IDguODI4IDMxNi41OTggMjMuMzI3IDMyMi43MDggMzUuMDc3TDQyNi43MDggMjM1LjA3MUM0MzAuOTg5IDI0My4yODkgNDM5LjM0OCAyNDguMDA4IDQ0OC4wMiAyNDguMDA4QzQ1MS43NTUgMjQ4LjAwOCA0NTUuNTM2IDI0Ny4xMzMgNDU5LjA4MyAyNDUuMjg5QzQ3MC44MzMgMjM5LjE5NiA0NzUuNDExIDIyNC42OTYgNDY5LjMwMSAyMTIuOTQ3WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function BasketShoppingSimple(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 576 512" {...props}>
            <path class={generic.secondary} d="M560 192.01H458.41L469.297 212.947C475.406 224.696 470.828 239.196 459.078 245.289C455.531 247.133 451.75 248.008 448.016 248.008C439.344 248.008 430.984 243.289 426.703 235.071L404.311 192.01H171.689L149.297 235.071C145.016 243.289 136.641 248.008 127.984 248.008C124.25 248.008 120.469 247.133 116.922 245.289C105.172 239.196 100.594 224.696 106.703 212.947L117.59 192.01H16C7.164 192.01 0 199.174 0 208.009V240.008C0 248.844 7.164 256.008 16 256.008H39.111L84.863 461.884C91.371 491.167 117.342 512 147.34 512H428.662C458.658 512 484.631 491.167 491.137 461.884L536.889 256.008H560C568.838 256.008 576 248.844 576 240.008V208.009C576 199.174 568.838 192.01 560 192.01Z" />
            <path d="M243.083 2.734C231.317 -3.391 216.833 1.203 210.708 12.953L106.708 212.947C100.598 224.696 105.176 239.196 116.926 245.289C120.473 247.133 124.255 248.008 127.989 248.008C136.645 248.008 145.02 243.289 149.301 235.071L253.301 35.077C259.411 23.327 254.833 8.828 243.083 2.734ZM469.301 212.947L365.301 12.953C359.161 1.172 344.723 -3.422 332.926 2.734C321.176 8.828 316.598 23.327 322.708 35.077L426.708 235.071C430.989 243.289 439.348 248.008 448.02 248.008C451.755 248.008 455.536 247.133 459.083 245.289C470.833 239.196 475.411 224.696 469.301 212.947Z" />
        </Icon>
    </>
}