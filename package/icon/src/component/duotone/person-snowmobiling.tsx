
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `person-snowmobiling` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/person-snowmobiling?s=duotone person-snowmobiling}
 * @preview ![person-snowmobiling](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTI0MCA5NkMyNjYuNTEgOTYgMjg4IDc0LjUxIDI4OCA0OFMyNjYuNTEgMCAyNDAgMFMxOTIgMjEuNDkgMTkyIDQ4UzIxMy40OSA5NiAyNDAgOTZaTTI4OCA0NDhIMzJDMTQuMzI2IDQ0OCAwIDQ2Mi4zMjYgMCA0ODBDMCA0OTcuNjcyIDE0LjMyNiA1MTIgMzIgNTEySDI4OEMzMDUuNjcyIDUxMiAzMjAgNDk3LjY3MiAzMjAgNDgwQzMyMCA0NjIuMzI2IDMwNS42NzIgNDQ4IDI4OCA0NDhaTTYzNi43OTkgNDQ2LjRMNjI3LjE5OSA0MzMuNkM2MjQuMTk1IDQyOS41NTkgNjE5LjQ1MyA0MjcuMTgyIDYxNC40MiA0MjcuMTg5QzYxMC45NDkgNDI3LjE5MSA2MDcuNTc0IDQyOC4zMTggNjA0Ljc5OSA0MzAuNEw1NzAuNjk5IDQ1NkM1NjMuNzgxIDQ2MS4yMDUgNTU1LjM1NSA0NjQuMDE0IDU0Ni42OTkgNDY0SDU0Nkw0OTkuMzc5IDQwMy4xMDlMNDkyLjEwOSA0MDhDNDg0LjIyMyA0MTMuMjMgNDc0Ljk2NSA0MTYuMDE2IDQ2NS41IDQxNkg0NDkuMjVMNDg2IDQ2NEg0MzJDNDIzLjE2MiA0NjQgNDE2IDQ3MS4xNjIgNDE2IDQ4MFY0OTZDNDE2IDUwNC44MzYgNDIzLjE2MiA1MTIgNDMyIDUxMkg1NDYuNjk5QzU2NS43MzggNTExLjk4NiA1ODQuMjYgNTA1LjgxMiA1OTkuNSA0OTQuNEw2MzMuNiA0NjguNzk5QzY0MC42NjggNDYzLjQ5OCA2NDIuMTAyIDQ1My40NjkgNjM2Ljc5OSA0NDYuNFpNMjQ2IDEzNi43OTlDMjIxLjAxNCAxMTEuNzk5IDE4MC40OSAxMTEuNzg5IDE1NS40OSAxMzYuNzc1QzE1MC42MjcgMTQxLjYzNyAxNDYuNTc4IDE0Ny4yNSAxNDMuNSAxNTMuNEwxMTMuNjk5IDIxMy4xQzEwMC45NDcgMjM4LjI1IDEwNi4zOTUgMjY4Ljc4NyAxMjcuMDIxIDI4OEgyNjMuNkwxOTYuNiAyNTQuNUwyMjIuMTk5IDIwMy40TDI1Ni4xIDIzNy4yOTlDMjY4LjA1OSAyNDkuMzQgMjg0LjMzIDI1Ni4xMDcgMzAxLjI5OSAyNTYuMUgzMTJMMzYwIDE5MkgzMDEuMjk5TDI0NiAxMzYuNzk5WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik01NjcuMjQ4IDI1MS42OTlMNDA3Ljk0NyAxNzJMMzY2LjQ0OSA4OC45QzM2Mi41IDgwLjk3NSAzNTIuODczIDc3Ljc1IDM0NC45NDkgODEuNjk5QzMzNy4wMjMgODUuNjQ4IDMzMy43OTkgOTUuMjczIDMzNy43NDggMTAzLjE5OUwzNzMuMzQ3IDE3NC40TDI4OC4wNDkgMjg4TDk2LjA0OSAyODguMUM4My45MjQgMjg4LjA4IDcyLjg0IDI5NC45MzkgNjcuNDQ5IDMwNS43OTlMMzUuNDQ5IDM2OS43OTlDMjQuNzQ4IDM5MSA0MC4yNDggNDE2IDY0LjA0OSA0MTZINDY1LjU0OUM0NzUuMDEzIDQxNi4wMTYgNDg0LjI3MSA0MTMuMjMgNDkyLjE1OCA0MDhMNTY4Ljk0NyAzNTYuNzk5QzU3My4zOTQgMzUzLjgzNiA1NzYuMDYgMzQ4Ljg0MiA1NzYuMDQ5IDM0My41VjI2NkM1NzYuMDY2IDI1OS45NDkgNTcyLjY1OCAyNTQuNDEgNTY3LjI0OCAyNTEuNjk5WiIgY2xhc3M9ImZhLXByaW1hcnkiLz48L3N2Zz4=|width=32|height=32)
 */
export default function PersonSnowmobiling(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path class={generic.secondary} d="M240 96C266.51 96 288 74.51 288 48S266.51 0 240 0S192 21.49 192 48S213.49 96 240 96ZM288 448H32C14.326 448 0 462.326 0 480C0 497.672 14.326 512 32 512H288C305.672 512 320 497.672 320 480C320 462.326 305.672 448 288 448ZM636.799 446.4L627.199 433.6C624.195 429.559 619.453 427.182 614.42 427.189C610.949 427.191 607.574 428.318 604.799 430.4L570.699 456C563.781 461.205 555.355 464.014 546.699 464H546L499.379 403.109L492.109 408C484.223 413.23 474.965 416.016 465.5 416H449.25L486 464H432C423.162 464 416 471.162 416 480V496C416 504.836 423.162 512 432 512H546.699C565.738 511.986 584.26 505.812 599.5 494.4L633.6 468.799C640.668 463.498 642.102 453.469 636.799 446.4ZM246 136.799C221.014 111.799 180.49 111.789 155.49 136.775C150.627 141.637 146.578 147.25 143.5 153.4L113.699 213.1C100.947 238.25 106.395 268.787 127.021 288H263.6L196.6 254.5L222.199 203.4L256.1 237.299C268.059 249.34 284.33 256.107 301.299 256.1H312L360 192H301.299L246 136.799Z" />
            <path d="M567.248 251.699L407.947 172L366.449 88.9C362.5 80.975 352.873 77.75 344.949 81.699C337.023 85.648 333.799 95.273 337.748 103.199L373.347 174.4L288.049 288L96.049 288.1C83.924 288.08 72.84 294.939 67.449 305.799L35.449 369.799C24.748 391 40.248 416 64.049 416H465.549C475.013 416.016 484.271 413.23 492.158 408L568.947 356.799C573.394 353.836 576.06 348.842 576.049 343.5V266C576.066 259.949 572.658 254.41 567.248 251.699Z" />
        </Icon>
    </>
}