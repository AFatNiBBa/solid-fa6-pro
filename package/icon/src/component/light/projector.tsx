
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `projector` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/projector?s=light projector}
 * @preview ![projector](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMDguNjg4IDEyMy4zMTJDMzExLjgxMiAxMjYuNDM4IDMxNS45MDYgMTI4IDMyMCAxMjhTMzI4LjE4OCAxMjYuNDM4IDMzMS4zMTIgMTIzLjMxMkMzMzcuNTYyIDExNy4wNjIgMzM3LjU2MiAxMDYuOTM3IDMzMS4zMTIgMTAwLjY4OEwyNjcuMzEyIDM2LjY4OEMyNjEuMDYyIDMwLjQzOCAyNTAuOTM3IDMwLjQzOCAyNDQuNjg4IDM2LjY4OFMyMzguNDM4IDUzLjA2MyAyNDQuNjg4IDU5LjMxMkwzMDguNjg4IDEyMy4zMTJaTTQxNiAxMjhDNDI0Ljg0NCAxMjggNDMyIDEyMC44NDQgNDMyIDExMlYxNkM0MzIgNy4xNTYgNDI0Ljg0NCAwIDQxNiAwUzQwMCA3LjE1NiA0MDAgMTZWMTEyQzQwMCAxMjAuODQ0IDQwNy4xNTYgMTI4IDQxNiAxMjhaTTI0MCA0MTZINjRDNDYuMzI2IDQxNiAzMiA0MDEuNjcyIDMyIDM4NFYyNTZDMzIgMjM4LjMyNiA0Ni4zMjYgMjI0IDY0IDIyNEgyNDBDMjQ4LjgzNiAyMjQgMjU2IDIxNi44MzYgMjU2IDIwOEMyNTYgMTk5LjE2MiAyNDguODM2IDE5MiAyNDAgMTkySDY0QzI4LjY1NCAxOTIgMCAyMjAuNjUyIDAgMjU2VjM4NEMwIDQwNy42MjkgMTIuOTUxIDQyOC4wMzcgMzIgNDM5LjEyM1Y0OTZDMzIgNTA0LjgzNiAzOS4xNjQgNTEyIDQ4IDUxMlM2NCA1MDQuODM2IDY0IDQ5NlY0NDhIMjQwQzI0OC44MzYgNDQ4IDI1NiA0NDAuODM2IDI1NiA0MzJDMjU2IDQyMy4xNjIgMjQ4LjgzNiA0MTYgMjQwIDQxNlpNNTEyIDEyOEM1MTYuMDk0IDEyOCA1MjAuMTg4IDEyNi40MzggNTIzLjMxMiAxMjMuMzEyTDU4Ny4zMTIgNTkuMzEyQzU5My41NjIgNTMuMDYyIDU5My41NjIgNDIuOTM3IDU4Ny4zMTIgMzYuNjg4UzU3MC45MzcgMzAuNDM4IDU2NC42ODggMzYuNjg4TDUwMC42ODggMTAwLjY4OEM0OTQuNDM4IDEwNi45MzggNDk0LjQzOCAxMTcuMDYzIDUwMC42ODggMTIzLjMxMkM1MDMuODEyIDEyNi40MzggNTA3LjkwNiAxMjggNTEyIDEyOFpNNTk1LjcxMSAxOTUuMDkyQzU4NS45ODggMTkxLjk0NyA1NzYgMTk5LjI1OCA1NzYgMjA5LjQ3N0M1NzYgMjE2LjY0NSA1ODAuMTU2IDIyMy40NjMgNTg2Ljg5NSAyMjUuOTAyQzU5OS4yMDUgMjMwLjM1NyA2MDggMjQyLjE1IDYwOCAyNTUuOTk4VjM4NEM2MDggMzk1LjY5MyA2MDEuNzI3IDQwNS45MjQgNTkyLjM1OSA0MTEuNTA2QzU4Mi40MiA0MTcuNDMyIDU3NiA0MjcuODA5IDU3NiA0MzkuMzgxVjQ5NS4xNDFDNTc2IDUwMy4xMTEgNTgxLjQ0NSA1MTAuNSA1ODkuMzEyIDUxMS43ODFDNTk5LjMzNiA1MTMuNDEyIDYwOCA1MDUuNzE3IDYwOCA0OTZWNDM5LjEyM0M2MjcuMDQ5IDQyOC4wMzcgNjQwIDQwNy42MjkgNjQwIDM4NFYyNTUuOTk4QzY0MCAyMjcuNTI5IDYyMS40MTIgMjAzLjQwMiA1OTUuNzExIDE5NS4wOTJaTTQxNiAxNjBDMzI3LjYzNSAxNjAgMjU2IDIzMS42MzUgMjU2IDMyMFMzMjcuNjM1IDQ4MCA0MTYgNDgwUzU3NiA0MDguMzY1IDU3NiAzMjBTNTA0LjM2NSAxNjAgNDE2IDE2MFpNNDE2IDQ0OEMzNDUuNDIgNDQ4IDI4OCAzOTAuNTc4IDI4OCAzMjBDMjg4IDI0OS40MiAzNDUuNDIgMTkyIDQxNiAxOTJTNTQ0IDI0OS40MiA1NDQgMzIwQzU0NCAzOTAuNTc4IDQ4Ni41OCA0NDggNDE2IDQ0OFpNMTY4IDMyMEMxNjggMzMzLjI1NCAxNzguNzQ2IDM0NCAxOTIgMzQ0QzIwNS4yNTYgMzQ0IDIxNiAzMzMuMjU0IDIxNiAzMjBDMjE2IDMwNi43NDQgMjA1LjI1NiAyOTYgMTkyIDI5NkMxNzguNzQ2IDI5NiAxNjggMzA2Ljc0NCAxNjggMzIwWk03MiAzMjBDNzIgMzMzLjI1NCA4Mi43NDYgMzQ0IDk2IDM0NEMxMDkuMjU2IDM0NCAxMjAgMzMzLjI1NCAxMjAgMzIwQzEyMCAzMDYuNzQ0IDEwOS4yNTYgMjk2IDk2IDI5NkM4Mi43NDYgMjk2IDcyIDMwNi43NDQgNzIgMzIwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Projector(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M308.688 123.312C311.812 126.438 315.906 128 320 128S328.188 126.438 331.312 123.312C337.562 117.062 337.562 106.937 331.312 100.688L267.312 36.688C261.062 30.438 250.937 30.438 244.688 36.688S238.438 53.063 244.688 59.312L308.688 123.312ZM416 128C424.844 128 432 120.844 432 112V16C432 7.156 424.844 0 416 0S400 7.156 400 16V112C400 120.844 407.156 128 416 128ZM240 416H64C46.326 416 32 401.672 32 384V256C32 238.326 46.326 224 64 224H240C248.836 224 256 216.836 256 208C256 199.162 248.836 192 240 192H64C28.654 192 0 220.652 0 256V384C0 407.629 12.951 428.037 32 439.123V496C32 504.836 39.164 512 48 512S64 504.836 64 496V448H240C248.836 448 256 440.836 256 432C256 423.162 248.836 416 240 416ZM512 128C516.094 128 520.188 126.438 523.312 123.312L587.312 59.312C593.562 53.062 593.562 42.937 587.312 36.688S570.937 30.438 564.688 36.688L500.688 100.688C494.438 106.938 494.438 117.063 500.688 123.312C503.812 126.438 507.906 128 512 128ZM595.711 195.092C585.988 191.947 576 199.258 576 209.477C576 216.645 580.156 223.463 586.895 225.902C599.205 230.357 608 242.15 608 255.998V384C608 395.693 601.727 405.924 592.359 411.506C582.42 417.432 576 427.809 576 439.381V495.141C576 503.111 581.445 510.5 589.312 511.781C599.336 513.412 608 505.717 608 496V439.123C627.049 428.037 640 407.629 640 384V255.998C640 227.529 621.412 203.402 595.711 195.092ZM416 160C327.635 160 256 231.635 256 320S327.635 480 416 480S576 408.365 576 320S504.365 160 416 160ZM416 448C345.42 448 288 390.578 288 320C288 249.42 345.42 192 416 192S544 249.42 544 320C544 390.578 486.58 448 416 448ZM168 320C168 333.254 178.746 344 192 344C205.256 344 216 333.254 216 320C216 306.744 205.256 296 192 296C178.746 296 168 306.744 168 320ZM72 320C72 333.254 82.746 344 96 344C109.256 344 120 333.254 120 320C120 306.744 109.256 296 96 296C82.746 296 72 306.744 72 320Z" />
        </Icon>
    </>
}