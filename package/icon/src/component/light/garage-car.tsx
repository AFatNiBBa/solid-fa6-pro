
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `garage-car` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/garage-car?s=light garage-car}
 * @preview ![garage-car](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yMjQgNDAwQzIxNS4xNjQgNDAwIDIwOCA0MDcuMTY0IDIwOCA0MTZTMjE1LjE2NCA0MzIgMjI0IDQzMkMyMzIuODM4IDQzMiAyNDAgNDI0LjgzNiAyNDAgNDE2UzIzMi44MzggNDAwIDIyNCA0MDBaTTQ0Ny4xMDUgMzU0LjY3TDQyMS4zMTIgMjkwLjIwM0M0MTMgMjY5LjQyMiAzOTMuMTcyIDI1NiAzNzAuNzk3IDI1NkgyNjIuMTcyQzIzNy45NjkgMjU2IDIxNy4wMzEgMjcxLjU3OCAyMTAuMDYyIDI5NC43NjZMMTkyLjAwOCAzNTQuOTQ1QzE3My40MjIgMzYxLjU2OCAxNjAgMzc5LjE2NiAxNjAgNDAwVjQzMkMxNjAgNDUyLjgzMiAxNzMuNDE2IDQ3MC40MjYgMTkyIDQ3Ny4wNTNWNDk2QzE5MiA1MDQuODM2IDE5OS4xNjQgNTEyIDIwOCA1MTJDMjE2LjgzOCA1MTIgMjI0IDUwNC44MzYgMjI0IDQ5NlY0ODBINDE2VjQ5NkM0MTYgNTA0LjgzNiA0MjMuMTY0IDUxMiA0MzIgNTEyQzQ0MC44MzggNTEyIDQ0OCA1MDQuODM2IDQ0OCA0OTZWNDc3LjA1M0M0NjYuNTg0IDQ3MC40MjYgNDgwIDQ1Mi44MzIgNDgwIDQzMlY0MDBDNDgwIDM3OC44NCA0NjYuMTUgMzYxLjA0MyA0NDcuMTA1IDM1NC42N1pNMjQwLjcxOSAzMDMuOTY5QzI0My41MzEgMjk0LjU2MiAyNTIuMzU5IDI4OCAyNjIuMTcyIDI4OEgzNzAuNzk3QzM4MC4wMTYgMjg4IDM4OC4xNzIgMjkzLjUzMSAzOTEuNTk0IDMwMi4wNzhMNDExLjU2NiAzNTJIMjI2LjMwNUwyNDAuNzE5IDMwMy45NjlaTTQ0OCA0MzJDNDQ4IDQ0MC44MjggNDQwLjgyOCA0NDggNDMyIDQ0OEgyMDhDMTk5LjE3MiA0NDggMTkyIDQ0MC44MjggMTkyIDQzMlY0MDBDMTkyIDM5MS4xNzIgMTk5LjE3MiAzODQgMjA4IDM4NEg0MzJDNDQwLjgyOCAzODQgNDQ4IDM5MS4xNzIgNDQ4IDQwMFY0MzJaTTYxMC42MjUgMTE4LjM3NUwzMzguNjI1IDMuNzVDMzI2Ljc1IC0xLjI1IDMxMy4yNSAtMS4yNSAzMDEuMzc1IDMuNzVMMjkuMzc1IDExOC4zNzVDMTEuNjI1IDEyNS43NSAwIDE0My4yNSAwIDE2Mi41VjQ5NkMwIDUwNC44MDEgNy4yMDEgNTEyIDE2IDUxMkMyNC44MDEgNTEyIDMyIDUwNC44MDEgMzIgNDk2VjE2Mi41QzMyIDE1Ni4xMjUgMzUuODc1IDE1MC4yNSA0MS43NSAxNDcuNzVMMzEzLjc1IDMzLjEyNUMzMTcuNzUgMzEuNSAzMjIuMjUgMzEuNSAzMjYuMjUgMzMuMTI1TDU5OC4yNSAxNDcuNzVDNjA0LjEyNSAxNTAuMjUgNjA4IDE1Ni4xMjUgNjA4IDE2Mi41VjQ5NkM2MDggNTA0LjgwMSA2MTUuMjAxIDUxMiA2MjQgNTEyQzYzMi44MDEgNTEyIDY0MCA1MDQuODAxIDY0MCA0OTZWMTYyLjVDNjQwIDE0My4yNSA2MjguMzc1IDEyNS43NSA2MTAuNjI1IDExOC4zNzVaTTUxMiAxOTJIMTI4QzExMC40IDE5MiA5NiAyMDYuNCA5NiAyMjRWNDk2Qzk2IDUwNC44MDEgMTAzLjIwMSA1MTIgMTEyIDUxMkMxMjAuODAxIDUxMiAxMjggNTA0LjgwMSAxMjggNDk2VjIyNEg1MTJWNDk2QzUxMiA1MDQuODAxIDUxOS4yMDEgNTEyIDUyOCA1MTJDNTM2LjgwMSA1MTIgNTQ0IDUwNC44MDEgNTQ0IDQ5NlYyMjRDNTQ0IDIwNi40IDUyOS42IDE5MiA1MTIgMTkyWk00MTYgNDAwQzQwNy4xNjQgNDAwIDQwMCA0MDcuMTY0IDQwMCA0MTZTNDA3LjE2NCA0MzIgNDE2IDQzMkM0MjQuODM4IDQzMiA0MzIgNDI0LjgzNiA0MzIgNDE2UzQyNC44MzggNDAwIDQxNiA0MDBaIi8+PC9zdmc+|width=32|height=32)
 */
export default function GarageCar(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M224 400C215.164 400 208 407.164 208 416S215.164 432 224 432C232.838 432 240 424.836 240 416S232.838 400 224 400ZM447.105 354.67L421.312 290.203C413 269.422 393.172 256 370.797 256H262.172C237.969 256 217.031 271.578 210.062 294.766L192.008 354.945C173.422 361.568 160 379.166 160 400V432C160 452.832 173.416 470.426 192 477.053V496C192 504.836 199.164 512 208 512C216.838 512 224 504.836 224 496V480H416V496C416 504.836 423.164 512 432 512C440.838 512 448 504.836 448 496V477.053C466.584 470.426 480 452.832 480 432V400C480 378.84 466.15 361.043 447.105 354.67ZM240.719 303.969C243.531 294.562 252.359 288 262.172 288H370.797C380.016 288 388.172 293.531 391.594 302.078L411.566 352H226.305L240.719 303.969ZM448 432C448 440.828 440.828 448 432 448H208C199.172 448 192 440.828 192 432V400C192 391.172 199.172 384 208 384H432C440.828 384 448 391.172 448 400V432ZM610.625 118.375L338.625 3.75C326.75 -1.25 313.25 -1.25 301.375 3.75L29.375 118.375C11.625 125.75 0 143.25 0 162.5V496C0 504.801 7.201 512 16 512C24.801 512 32 504.801 32 496V162.5C32 156.125 35.875 150.25 41.75 147.75L313.75 33.125C317.75 31.5 322.25 31.5 326.25 33.125L598.25 147.75C604.125 150.25 608 156.125 608 162.5V496C608 504.801 615.201 512 624 512C632.801 512 640 504.801 640 496V162.5C640 143.25 628.375 125.75 610.625 118.375ZM512 192H128C110.4 192 96 206.4 96 224V496C96 504.801 103.201 512 112 512C120.801 512 128 504.801 128 496V224H512V496C512 504.801 519.201 512 528 512C536.801 512 544 504.801 544 496V224C544 206.4 529.6 192 512 192ZM416 400C407.164 400 400 407.164 400 416S407.164 432 416 432C424.838 432 432 424.836 432 416S424.838 400 416 400Z" />
        </Icon>
    </>
}