
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `siren-on` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/siren-on?s=light siren-on}
 * @preview ![siren-on](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01MjggOTYuMDIzQzUzMC41IDk2LjAyMyA1MzIuODc1IDk1LjM5OCA1MzUuMTI1IDk0LjI3M0w1OTkuMTI1IDYyLjI3N0M2MDcuMTI1IDU4LjQwMiA2MTAuMjUgNDguNzgxIDYwNi4zNzUgNDAuOTA2QzYwMi4zNzUgMzIuOTA2IDU5Mi43NSAyOS43ODEgNTg0Ljg3NSAzMy42NTZMNTIwLjg3NSA2NS42NDhDNTE0LjEyNSA2OS4wMjMgNTEwLjYyNSA3Ni41MjMgNTEyLjM3NSA4My42NDhDNTE0LjEyNSA5MC44OTggNTIwLjYyNSA5Ni4wMjMgNTI4IDk2LjAyM1pNNDAuODc1IDYyLjI3N0wxMDQuODc1IDk0LjI3M0MxMTIuNzUgOTguMjcgMTIyLjM3NSA5NS4wMjMgMTI2LjM3NSA4Ny4xNDhDMTMwLjI1IDc5LjI3MyAxMjcuMTI1IDY5LjY0OCAxMTkuMTI1IDY1LjY0OEw1NS4xMjUgMzMuNjU2QzQ3LjI1IDI5Ljc4MSAzNy42MjUgMzIuOTA2IDMzLjYyNSA0MC45MDZDMjkuNzUgNDguNzgxIDMyLjg3NSA1OC40MDIgNDAuODc1IDYyLjI3N1pNNjI0IDE5Mi4wMDRINTYwQzU1MS4xMjUgMTkyLjAwNCA1NDQgMTk5LjEyOSA1NDQgMjA4QzU0NCAyMTYuODc1IDU1MS4xMjUgMjI0IDU2MCAyMjRINjI0QzYzMi44NzUgMjI0IDY0MCAyMTYuODc1IDY0MCAyMDhDNjQwIDE5OS4xMjkgNjMyLjg3NSAxOTIuMDA0IDYyNCAxOTIuMDA0Wk04MCAxOTIuMDA0SDE2QzcuMTI1IDE5Mi4wMDQgMCAxOTkuMTI5IDAgMjA4QzAgMjE2Ljg3NSA3LjEyNSAyMjQgMTYgMjI0SDgwQzg4Ljg3NSAyMjQgOTYgMjE2Ljg3NSA5NiAyMDhDOTYgMTk5LjEyOSA4OC44NzUgMTkyLjAwNCA4MCAxOTIuMDA0Wk01MTIgMzg0SDEyOEMxMTAuMzI4IDM4NCA5NiAzOTguMzI4IDk2IDQxNlY0NDhDOTYgNDY1LjY3MiAxMTAuMzI4IDQ4MCAxMjggNDgwSDUxMkM1MjkuNjc0IDQ4MCA1NDQgNDY1LjY3MiA1NDQgNDQ4VjQxNkM1NDQgMzk4LjMyOCA1MjkuNjc0IDM4NCA1MTIgMzg0Wk01MTIgNDQ4SDEyOFY0MTZINTEyVjQ0OFpNMTQ4IDM1MkMxNTYuMDcgMzUyIDE2Mi44NzcgMzQ1Ljk5MiAxNjMuODc3IDMzNy45ODRMMTg0Ljg2OSAxNzAuMDQ3QzE4Ny44NzEgMTQ2LjAyMyAyMDguMjkxIDEyOCAyMzIuNSAxMjhINDA3LjVDNDMxLjcwOSAxMjggNDUyLjEyOSAxNDYuMDIzIDQ1NS4xMzEgMTcwLjA0N0w0NzYuMTIzIDMzNy45ODRDNDc3LjEyMyAzNDUuOTkyIDQ4My45MyAzNTIgNDkyIDM1MkM1MDEuNjIzIDM1MiA1MDkuMDcgMzQzLjU2MiA1MDcuODc1IDMzNC4wMTZMNDg2Ljg2NyAxNjYuMDU1QzQ4MS44NTkgMTI2LjAzMSA0NDcuODM2IDk2IDQwNy41IDk2SDIzMi41QzE5Mi4xNjQgOTYgMTU4LjE0MSAxMjYuMDMxIDE1My4xMzMgMTY2LjA1NUwxMzIuMTI1IDMzNC4wMTZDMTMwLjkzIDM0My41NjIgMTM4LjM3NyAzNTIgMTQ4IDM1MlpNMjI0LjE4OCAxNzMuNjI1TDIwMC4xODggMzMzLjYyNUMxOTguODc1IDM0Mi4zNzUgMjA0Ljg3NSAzNTAuNSAyMTMuNjI1IDM1MS44MTJDMjE0LjQzOCAzNTEuOTM4IDIxNS4yMTkgMzUyIDIxNi4wMzEgMzUyQzIyMy44MTMgMzUyIDIzMC42MjUgMzQ2LjMxMiAyMzEuODEzIDMzOC4zNzVMMjU1LjgxMyAxNzguMzc1QzI1Ny4xMjUgMTY5LjYyNSAyNTEuMTI1IDE2MS41IDI0Mi4zNzUgMTYwLjE4OEMyMzMuNzUgMTU4Ljc4MSAyMjUuNSAxNjQuODQ0IDIyNC4xODggMTczLjYyNVoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function SirenOn(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M528 96.023C530.5 96.023 532.875 95.398 535.125 94.273L599.125 62.277C607.125 58.402 610.25 48.781 606.375 40.906C602.375 32.906 592.75 29.781 584.875 33.656L520.875 65.648C514.125 69.023 510.625 76.523 512.375 83.648C514.125 90.898 520.625 96.023 528 96.023ZM40.875 62.277L104.875 94.273C112.75 98.27 122.375 95.023 126.375 87.148C130.25 79.273 127.125 69.648 119.125 65.648L55.125 33.656C47.25 29.781 37.625 32.906 33.625 40.906C29.75 48.781 32.875 58.402 40.875 62.277ZM624 192.004H560C551.125 192.004 544 199.129 544 208C544 216.875 551.125 224 560 224H624C632.875 224 640 216.875 640 208C640 199.129 632.875 192.004 624 192.004ZM80 192.004H16C7.125 192.004 0 199.129 0 208C0 216.875 7.125 224 16 224H80C88.875 224 96 216.875 96 208C96 199.129 88.875 192.004 80 192.004ZM512 384H128C110.328 384 96 398.328 96 416V448C96 465.672 110.328 480 128 480H512C529.674 480 544 465.672 544 448V416C544 398.328 529.674 384 512 384ZM512 448H128V416H512V448ZM148 352C156.07 352 162.877 345.992 163.877 337.984L184.869 170.047C187.871 146.023 208.291 128 232.5 128H407.5C431.709 128 452.129 146.023 455.131 170.047L476.123 337.984C477.123 345.992 483.93 352 492 352C501.623 352 509.07 343.562 507.875 334.016L486.867 166.055C481.859 126.031 447.836 96 407.5 96H232.5C192.164 96 158.141 126.031 153.133 166.055L132.125 334.016C130.93 343.562 138.377 352 148 352ZM224.188 173.625L200.188 333.625C198.875 342.375 204.875 350.5 213.625 351.812C214.438 351.938 215.219 352 216.031 352C223.813 352 230.625 346.312 231.813 338.375L255.813 178.375C257.125 169.625 251.125 161.5 242.375 160.188C233.75 158.781 225.5 164.844 224.188 173.625Z" />
        </Icon>
    </>
}